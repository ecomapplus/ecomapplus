import { createServerFn } from "@tanstack/react-start";
import { authMiddleware, optionalAuthMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type RoomTask = {
  id: number;
  userId: string;
  authorName: string;
  title: string;
  done: boolean;
  hours: number | null;
  createdAt: string;
  mine: boolean;
  proofNote: string | null;
  proofFile: string | null;
  proofName: string | null;
  completedBy: string | null;
  completedByName: string | null;
  completedAt: string | null;
};

export type TaskBoard = {
  tasks: RoomTask[];
  hoursByPerson: { userId: string; name: string; hours: number }[];
};

export type PollVote = {
  userId: string;
  name: string;
  at: string;
};

export type PollOption = {
  id: number;
  label: string;
  votes: PollVote[];
};

export type RoomPoll = {
  id: number;
  question: string;
  authorName: string;
  createdBy: string;
  createdAt: string;
  options: PollOption[];
  myOptionId: number | null;
  electorate: "all" | "first-three";
  canVote: boolean;
  eligible: { userId: string; name: string }[];
};

function assertRoomId(id: unknown): string {
  if (typeof id !== "string") throw new Error("Unknown chat");
  const trimmed = id.trim();
  if (!/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) throw new Error("Unknown chat");
  return trimmed;
}

function assertTitle(value: unknown): string {
  if (typeof value !== "string") throw new Error("Name the task");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Name the task");
  if (trimmed.length > 200) throw new Error("Keep the task under 200 characters");
  return trimmed;
}

function assertHours(value: unknown): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : Number(String(value).replace(/,/g, ""));
  if (!Number.isFinite(n) || n < 0) throw new Error("Hours cannot be negative");
  if (n > 999) throw new Error("Keep hours under 1,000");
  return Math.round(n * 10) / 10;
}

function assertQuestion(value: unknown): string {
  if (typeof value !== "string") throw new Error("Write the question");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 4) throw new Error("Write a bit more for the question");
  if (trimmed.length > 280) throw new Error("Keep the question under 280 characters");
  return trimmed;
}

function assertOptions(value: unknown): string[] {
  if (!Array.isArray(value)) throw new Error("Add at least two options");
  const labels = value
    .map((item) => (typeof item === "string" ? item.replace(/\s+/g, " ").trim() : ""))
    .filter((item) => item.length > 0);
  const unique = [...new Set(labels)];
  if (unique.length < 2) throw new Error("Add at least two options");
  if (unique.length > 6) throw new Error("Keep it to six options");
  for (const label of unique) {
    if (label.length > 80) throw new Error("Keep each option under 80 characters");
  }
  return unique;
}

function assertProofNote(value: unknown): string {
  if (typeof value !== "string") throw new Error("Add a note for proof");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 4) throw new Error("Write a bit more for the note");
  if (trimmed.length > 1000) throw new Error("Keep the note under 1,000 characters");
  return trimmed;
}

function assertProofFile(value: unknown): { data: string; name: string } {
  if (!value || typeof value !== "object") throw new Error("Attach a file as proof");
  const rec = value as { data?: unknown; name?: unknown };
  if (typeof rec.data !== "string" || !rec.data.startsWith("data:")) throw new Error("Attach a file as proof");
  if (rec.data.length > 1_800_000) throw new Error("Keep the file under about 1 MB");
  const rawName = typeof rec.name === "string" ? rec.name : "proof";
  const name = rawName.replace(/[^\w.\- ()]/g, "").slice(0, 80) || "proof";
  return { data: rec.data, name };
}

async function displayName(userId: string): Promise<string> {
  const sql = await getSql();
  const rows = await sql<{ name: string | null }>`
    select "name" from "user" where "id" = ${userId}
  `;
  const name = rows[0]?.name?.trim();
  return name && name.length > 0 ? name : "Member";
}

async function requirePrivateMember(roomId: string, userId: string) {
  const sql = await getSql();
  const rooms = await sql<{ kind: string }>`
    select kind from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) throw new Error("Unknown chat");
  if (room.kind !== "private") throw new Error("Collaboration tools live in a private group");
  const mine = await sql<{ role: string }>`
    select role from room_members where room_id = ${roomId} and user_id = ${userId}
  `;
  if (!mine[0]) throw new Error("You are not in this chat");
}

async function requireCollabRoom(roomId: string, userId: string | null, mode: "read" | "write") {
  const sql = await getSql();
  const rooms = await sql<{ kind: string }>`
    select kind from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) throw new Error("Unknown chat");
  if (room.kind === "public") {
    if (mode === "write" && !userId) throw new Error("Sign in to use the village square");
    return room.kind;
  }
  if (room.kind !== "private") throw new Error("This lives in a group or the village square");
  if (!userId) throw new Error("Sign in to use this group");
  const mine = await sql<{ role: string }>`
    select role from room_members where room_id = ${roomId} and user_id = ${userId}
  `;
  if (!mine[0]) throw new Error("You are not in this chat");
  return room.kind;
}

function asHours(value: string | number | null): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

async function loadTasks(roomId: string, userId: string): Promise<TaskBoard> {
  const sql = await getSql();
  const rows = await sql<{
    id: number;
    user_id: string;
    author_name: string;
    title: string;
    done: boolean;
    hours: string | number | null;
    created_at: string;
    proof_note: string | null;
    proof_file: string | null;
    proof_name: string | null;
    completed_by: string | null;
    completed_by_name: string | null;
    completed_at: string | null;
  }>`
    select
      t.id,
      t.user_id,
      coalesce(nullif(u."name", ''), 'Member') as author_name,
      t.title,
      t.done,
      t.hours,
      t.created_at::text as created_at,
      t.proof_note,
      t.proof_file,
      t.proof_name,
      t.completed_by,
      t.completed_by_name,
      t.completed_at::text as completed_at
    from room_tasks t
    join "user" u on u."id" = t.user_id
    where t.room_id = ${roomId}
    order by t.done asc, t.created_at desc
  `;
  const tasks: RoomTask[] = rows.map((row) => ({
    id: Number(row.id),
    userId: row.user_id,
    authorName: row.author_name,
    title: row.title,
    done: Boolean(row.done),
    hours: asHours(row.hours),
    createdAt: row.created_at,
    mine: row.user_id === userId,
    proofNote: row.proof_note,
    proofFile: row.proof_file,
    proofName: row.proof_name,
    completedBy: row.completed_by,
    completedByName: row.completed_by_name,
    completedAt: row.completed_at,
  }));
  const hoursMap = new Map<string, { userId: string; name: string; hours: number }>();
  for (const task of tasks) {
    if (task.hours == null) continue;
    const prev = hoursMap.get(task.userId);
    if (prev) prev.hours = Math.round((prev.hours + task.hours) * 10) / 10;
    else hoursMap.set(task.userId, { userId: task.userId, name: task.authorName, hours: task.hours });
  }
  const hoursByPerson = [...hoursMap.values()].sort((a, b) => b.hours - a.hours || a.name.localeCompare(b.name));
  return { tasks, hoursByPerson };
}

async function firstThreeMembers(roomId: string): Promise<{ userId: string; name: string }[]> {
  const sql = await getSql();
  const rows = await sql<{ user_id: string; name: string }>`
    select m.user_id, coalesce(nullif(u."name", ''), 'Member') as name
    from room_members m
    join "user" u on u."id" = m.user_id
    where m.room_id = ${roomId}
    order by m.created_at asc, m.user_id asc
    limit 3
  `;
  return rows.map((row) => ({ userId: row.user_id, name: row.name }));
}

async function loadPolls(roomId: string, userId: string): Promise<RoomPoll[]> {
  const sql = await getSql();
  const firstThree = await firstThreeMembers(roomId);
  const firstIds = new Set(firstThree.map((p) => p.userId));
  const polls = await sql<{
    id: number;
    question: string;
    author_name: string;
    created_by: string;
    created_at: string;
    electorate: string | null;
  }>`
    select id, question, author_name, created_by, created_at::text as created_at, electorate
    from room_polls
    where room_id = ${roomId}
    order by created_at desc
  `;
  if (polls.length === 0) return [];
  const options = await sql<{ id: number; poll_id: number; label: string; sort_order: number }>`
    select o.id, o.poll_id, o.label, o.sort_order
    from room_poll_options o
    join room_polls p on p.id = o.poll_id
    where p.room_id = ${roomId}
    order by o.sort_order asc, o.id asc
  `;
  const votes = await sql<{
    poll_id: number;
    option_id: number;
    user_id: string;
    voter_name: string;
    updated_at: string;
  }>`
    select v.poll_id, v.option_id, v.user_id, v.voter_name, v.updated_at::text as updated_at
    from room_poll_votes v
    join room_polls p on p.id = v.poll_id
    where p.room_id = ${roomId}
    order by v.updated_at asc
  `;
  return polls.map((poll) => {
    const pollId = Number(poll.id);
    const electorate: RoomPoll["electorate"] = poll.electorate === "first-three" ? "first-three" : "all";
    const eligible = electorate === "first-three" ? firstThree : [];
    const canVote = Boolean(userId) && (electorate === "all" || firstIds.has(userId));
    const pollOptions = options
      .filter((o) => Number(o.poll_id) === pollId)
      .map((o) => {
        const optionId = Number(o.id);
        return {
          id: optionId,
          label: o.label,
          votes: votes
            .filter((v) => Number(v.poll_id) === pollId && Number(v.option_id) === optionId)
            .map((v) => ({ userId: v.user_id, name: v.voter_name, at: v.updated_at })),
        };
      });
    const mine = votes.find((v) => Number(v.poll_id) === pollId && v.user_id === userId);
    return {
      id: pollId,
      question: poll.question,
      authorName: poll.author_name,
      createdBy: poll.created_by,
      createdAt: poll.created_at,
      options: pollOptions,
      myOptionId: mine ? Number(mine.option_id) : null,
      electorate,
      canVote,
      eligible,
    };
  });
}

export const listRoomTasks = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: roomId }) => {
    await requireCollabRoom(roomId, context.userId, "read");
    return loadTasks(roomId, context.userId ?? "");
  });

export const addRoomTask = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; title: string }) => ({
    roomId: assertRoomId(input.roomId),
    title: assertTitle(input.title),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await requireCollabRoom(data.roomId, context.userId, "write");
    const sql = await getSql();
    await sql`
      insert into room_tasks (room_id, user_id, title)
      values (${data.roomId}, ${context.userId}, ${data.title})
    `;
    return loadTasks(data.roomId, context.userId);
  });

export const updateRoomTask = createServerFn({ method: "POST" })
  .validator((input: {
    id: number;
    done?: boolean;
    hours?: string | number | null;
    proofNote?: string;
    proofFile?: { data: string; name: string };
  }) => {
    if (!Number.isInteger(input.id) || input.id < 1) throw new Error("Unknown task");
    return {
      id: input.id,
      done: typeof input.done === "boolean" ? input.done : undefined,
      hours: input.hours === undefined ? undefined : assertHours(input.hours),
      proofNote: input.proofNote === undefined ? undefined : assertProofNote(input.proofNote),
      proofFile: input.proofFile === undefined ? undefined : assertProofFile(input.proofFile),
    };
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const rows = await sql<{ room_id: string; user_id: string; title: string }>`
      select room_id, user_id, title from room_tasks where id = ${data.id}
    `;
    const row = rows[0];
    if (!row) throw new Error("Unknown task");
    const kind = await requireCollabRoom(row.room_id, context.userId, "write");
    if (kind !== "public" && row.user_id !== context.userId) {
      throw new Error("Only you can change your own tasks");
    }
    if (data.hours !== undefined) {
      if (kind === "public" && row.user_id !== context.userId) {
        throw new Error("Only the person who added this can log hours");
      }
      await sql`
        update room_tasks set hours = ${data.hours}, updated_at = now()
        where id = ${data.id}
      `;
    }
    if (data.done !== undefined) {
      if (kind === "public" && data.done) {
        if (!data.proofNote || !data.proofFile) throw new Error("Add a note and a file as proof");
        const name = await displayName(context.userId);
        await sql`
          update room_tasks
          set done = true,
              proof_note = ${data.proofNote},
              proof_file = ${data.proofFile.data},
              proof_name = ${data.proofFile.name},
              completed_by = ${context.userId},
              completed_by_name = ${name},
              completed_at = now(),
              updated_at = now()
          where id = ${data.id}
        `;
      } else if (kind === "public") {
        await sql`
          update room_tasks set done = false, updated_at = now()
          where id = ${data.id}
        `;
      } else {
        await sql`
          update room_tasks set done = ${data.done}, updated_at = now()
          where id = ${data.id} and user_id = ${context.userId}
        `;
      }
    }
    return loadTasks(row.room_id, context.userId);
  });

export const listRoomPolls = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: roomId }) => {
    await requireCollabRoom(roomId, context.userId, "read");
    return loadPolls(roomId, context.userId ?? "");
  });

export const createRoomPoll = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; question: string; options: string[]; electorate?: string }) => ({
    roomId: assertRoomId(input.roomId),
    question: assertQuestion(input.question),
    options: assertOptions(input.options),
    electorate: input.electorate === "first-three" ? ("first-three" as const) : ("all" as const),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const kind = await requireCollabRoom(data.roomId, context.userId, "write");
    const electorate = kind === "public" ? ("all" as const) : data.electorate;
    const name = await displayName(context.userId);
    const sql = await getSql();
    const inserted = await sql<{ id: number }>`
      insert into room_polls (room_id, created_by, author_name, question, electorate)
      values (${data.roomId}, ${context.userId}, ${name}, ${data.question}, ${electorate})
      returning id
    `;
    const pollId = Number(inserted[0].id);
    for (let i = 0; i < data.options.length; i++) {
      await sql`
        insert into room_poll_options (poll_id, label, sort_order)
        values (${pollId}, ${data.options[i]}, ${i})
      `;
    }
    return loadPolls(data.roomId, context.userId);
  });

export const castRoomVote = createServerFn({ method: "POST" })
  .validator((input: { pollId: number; optionId: number }) => {
    if (!Number.isInteger(input.pollId) || input.pollId < 1) throw new Error("Unknown vote");
    if (!Number.isInteger(input.optionId) || input.optionId < 1) throw new Error("Pick an option");
    return input;
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const polls = await sql<{ room_id: string; electorate: string | null }>`
      select room_id, electorate from room_polls where id = ${data.pollId}
    `;
    if (!polls[0]) throw new Error("Unknown vote");
    await requireCollabRoom(polls[0].room_id, context.userId, "write");
    if (polls[0].electorate === "first-three") {
      const first = await firstThreeMembers(polls[0].room_id);
      if (!first.some((p) => p.userId === context.userId)) {
        throw new Error("Only the first three members can vote on this");
      }
    }
    const options = await sql<{ id: number }>`
      select id from room_poll_options where id = ${data.optionId} and poll_id = ${data.pollId}
    `;
    if (!options[0]) throw new Error("Unknown option");
    const name = await displayName(context.userId);
    await sql`
      insert into room_poll_votes (poll_id, user_id, option_id, voter_name, created_at, updated_at)
      values (${data.pollId}, ${context.userId}, ${data.optionId}, ${name}, now(), now())
      on conflict (poll_id, user_id) do update
      set option_id = excluded.option_id,
          voter_name = excluded.voter_name,
          updated_at = now()
    `;
    return loadPolls(polls[0].room_id, context.userId);
  });
