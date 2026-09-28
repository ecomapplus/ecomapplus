import { createServerFn } from "@tanstack/react-start";
import { allAgreements } from "@/data/agreements-catalog";
import { authMiddleware, optionalAuthMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { ensurePublishSchema, seatNextFounder } from "@/lib/room-publish";

const HALL_ROOM_ID = "hall";

export type AgreementSummary = {
  id: number;
  title: string;
  templateTitle: string;
  proposerName: string;
  proposedBy: string;
  createdAt: string;
  signatureCount: number;
  signed: boolean;
  groupRoomId: string | null;
};

export type AgreementDetail = AgreementSummary & {
  body: string;
  signatures: { userId: string; name: string; createdAt: string }[];
};

function assertRoomId(id: unknown): string {
  if (typeof id !== "string") throw new Error("Unknown chat");
  const trimmed = id.trim();
  if (!/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) throw new Error("Unknown chat");
  return trimmed;
}

function assertTitle(value: unknown): string {
  if (typeof value !== "string") throw new Error("Name the agreement");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Name the agreement");
  if (trimmed.length > 200) throw new Error("Keep the title under 200 characters");
  return trimmed;
}

function assertBody(value: unknown): string {
  if (typeof value !== "string") throw new Error("The agreement is empty");
  const trimmed = value.trim();
  if (trimmed.length < 20) throw new Error("Write a bit more before you submit");
  if (trimmed.length > 80_000) throw new Error("Keep the draft under 80,000 characters");
  return trimmed;
}

function assertTemplate(id: unknown): { id: string; title: string } {
  if (typeof id !== "string") throw new Error("Pick a template");
  const row = allAgreements().find((a) => a.id === id);
  if (!row) throw new Error("Unknown template");
  return { id: row.id, title: row.title };
}

function groupIdFor(agreementId: number): string {
  return `a_${agreementId}`;
}

async function displayName(userId: string): Promise<string> {
  const sql = await getSql();
  const rows = await sql<{ name: string | null }>`
    select "name" from "user" where "id" = ${userId}
  `;
  const name = rows[0]?.name?.trim();
  return name && name.length > 0 ? name : "Member";
}

async function userEmail(userId: string): Promise<string | null> {
  const sql = await getSql();
  const rows = await sql<{ email: string | null }>`
    select lower("email") as email from "user" where "id" = ${userId}
  `;
  return rows[0]?.email ?? null;
}

export async function ensureAgreementGroupSchema() {
  const sql = await getSql();
  await ensurePublishSchema();
  await sql.query(`alter table room_agreements add column if not exists group_room_id text`).catch(() => undefined);
  await sql.query(`alter table room_members add column if not exists user_email text`).catch(() => undefined);
  await sql.query(`alter table rooms add column if not exists founder_a_email text`).catch(() => undefined);
  await sql.query(`alter table rooms add column if not exists founder_b_email text`).catch(() => undefined);
}

async function requireAgreementRoom(roomId: string, userId: string | null, mode: "read" | "write") {
  const sql = await getSql();
  const rooms = await sql<{ kind: string }>`
    select kind from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) throw new Error("Unknown chat");
  if (room.kind === "public") {
    if (mode === "write" && !userId) throw new Error("Sign in to send an agreement to the village square");
    return;
  }
  if (room.kind !== "private") throw new Error("Agreements live in a group or the village square");
  if (!userId) throw new Error("Sign in to use this group");
  const mine = await sql<{ role: string }>`
    select role from room_members where room_id = ${roomId} and user_id = ${userId}
  `;
  if (!mine[0]) throw new Error("You are not in this chat");
}

async function addMember(roomId: string, userId: string, role: "founder" | "member", email: string | null) {
  const sql = await getSql();
  await sql`
    insert into room_members (room_id, user_id, role, user_email)
    values (${roomId}, ${userId}, ${role}, ${email})
    on conflict (room_id, user_id) do nothing
  `;
}

/** Everyone who signs a hall agreement is seated in one private group. First three are founders. */
async function syncHallAgreementGroup(agreementId: number): Promise<string | null> {
  await ensureAgreementGroupSchema();
  const sql = await getSql();
  const rows = await sql<{
    id: number;
    room_id: string;
    title: string;
    group_room_id: string | null;
  }>`
    select id, room_id, title, group_room_id from room_agreements where id = ${agreementId}
  `;
  const row = rows[0];
  if (!row || row.room_id !== HALL_ROOM_ID) return row?.group_room_id ?? null;

  const signatures = await sql<{ user_id: string; signer_name: string }>`
    select user_id, signer_name
    from room_agreement_signatures
    where agreement_id = ${agreementId}
    order by created_at asc
  `;
  if (signatures.length === 0) return row.group_room_id;

  const groupId = row.group_room_id || groupIdFor(agreementId);
  const existing = await sql<{ id: string }>`select id from rooms where id = ${groupId}`;
  if (!existing[0]) {
    const first = signatures[0];
    const email = await userEmail(first.user_id);
    const name = row.title.replace(/\s+/g, " ").trim().slice(0, 80) || "Agreement group";
    await sql`
      insert into rooms (id, kind, name, founder_a, founder_a_email)
      values (${groupId}, 'private', ${name}, ${first.user_id}, ${email})
      on conflict (id) do nothing
    `;
  }
  if (!row.group_room_id) {
    await sql`
      update room_agreements
      set group_room_id = ${groupId}
      where id = ${agreementId} and group_room_id is null
    `;
  }

  for (const sig of signatures) {
    const email = await userEmail(sig.user_id);
    const role = await seatNextFounder(groupId, sig.user_id, email);
    await addMember(groupId, sig.user_id, role, email);
  }
  return groupId;
}

async function summariesFor(roomId: string, userId: string): Promise<AgreementSummary[]> {
  await ensureAgreementGroupSchema();
  const sql = await getSql();
  const rows = await sql<{
    id: number;
    title: string;
    template_title: string;
    proposer_name: string;
    proposed_by: string;
    created_at: string;
    signature_count: number;
    signed: number;
    group_room_id: string | null;
  }>`
    select
      a.id,
      a.title,
      a.template_title,
      a.proposer_name,
      a.proposed_by,
      a.created_at::text as created_at,
      (select count(*)::int from room_agreement_signatures s where s.agreement_id = a.id) as signature_count,
      (select count(*)::int from room_agreement_signatures s where s.agreement_id = a.id and s.user_id = ${userId}) as signed,
      a.group_room_id
    from room_agreements a
    where a.room_id = ${roomId}
    order by a.created_at desc
  `;
  return rows.map((row) => ({
    id: Number(row.id),
    title: row.title,
    templateTitle: row.template_title,
    proposerName: row.proposer_name,
    proposedBy: row.proposed_by,
    createdAt: row.created_at,
    signatureCount: Number(row.signature_count),
    signed: Number(row.signed) > 0,
    groupRoomId: row.group_room_id,
  }));
}

async function loadDetail(id: number, userId: string): Promise<AgreementDetail> {
  const sql = await getSql();
  const rows = await sql<{
    id: number;
    room_id: string;
    title: string;
    template_title: string;
    body: string;
    proposer_name: string;
    proposed_by: string;
    created_at: string;
  }>`
    select id, room_id, title, template_title, body, proposer_name, proposed_by, created_at::text as created_at
    from room_agreements
    where id = ${id}
  `;
  const row = rows[0];
  if (!row) throw new Error("Unknown agreement");
  await requireAgreementRoom(row.room_id, userId, "read");
  const groupRoomId = await syncHallAgreementGroup(Number(row.id));
  const list = await summariesFor(row.room_id, userId || "");
  const summary = list.find((item) => item.id === Number(row.id));
  if (!summary) throw new Error("Unknown agreement");
  const signatures = await sql<{ user_id: string; signer_name: string; created_at: string }>`
    select user_id, signer_name, created_at::text as created_at
    from room_agreement_signatures
    where agreement_id = ${id}
    order by created_at asc
  `;
  return {
    ...summary,
    groupRoomId: groupRoomId ?? summary.groupRoomId,
    body: row.body,
    signatures: signatures.map((s) => ({
      userId: s.user_id,
      name: s.signer_name,
      createdAt: s.created_at,
    })),
  };
}

export const listRoomAgreements = createServerFn({ method: "GET" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: roomId }) => {
    await requireAgreementRoom(roomId, context.userId, "read");
    return summariesFor(roomId, context.userId ?? "");
  });

export const getRoomAgreement = createServerFn({ method: "GET" })
  .validator((id: number) => {
    if (!Number.isInteger(id) || id < 1) throw new Error("Unknown agreement");
    return id;
  })
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: id }) => loadDetail(id, context.userId ?? ""));

export const proposeAgreement = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; templateId: string; title: string; body: string }) => ({
    roomId: assertRoomId(input.roomId),
    template: assertTemplate(input.templateId),
    title: assertTitle(input.title),
    body: assertBody(input.body),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await requireAgreementRoom(data.roomId, context.userId, "write");
    await ensureAgreementGroupSchema();
    const name = await displayName(context.userId);
    const sql = await getSql();
    const inserted = await sql<{ id: number }>`
      insert into room_agreements (
        room_id, template_id, template_title, title, body, proposed_by, proposer_name
      )
      values (
        ${data.roomId}, ${data.template.id}, ${data.template.title},
        ${data.title}, ${data.body}, ${context.userId}, ${name}
      )
      returning id
    `;
    return loadDetail(Number(inserted[0].id), context.userId);
  });

export const signAgreement = createServerFn({ method: "POST" })
  .validator((id: number) => {
    if (!Number.isInteger(id) || id < 1) throw new Error("Unknown agreement");
    return id;
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    const rows = await sql<{ room_id: string; title: string }>`
      select room_id, title from room_agreements where id = ${id}
    `;
    if (!rows[0]) throw new Error("Unknown agreement");
    await requireAgreementRoom(rows[0].room_id, context.userId, "write");
    const name = await displayName(context.userId);
    await sql`
      insert into room_agreement_signatures (agreement_id, user_id, signer_name)
      values (${id}, ${context.userId}, ${name})
      on conflict (agreement_id, user_id) do nothing
    `;
    await syncHallAgreementGroup(id);
    return loadDetail(id, context.userId);
  });
