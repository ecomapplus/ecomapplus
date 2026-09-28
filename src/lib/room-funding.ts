import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type FundingPledge = {
  userId: string;
  name: string;
  amountUsd: number;
};

export type RoomFunding = {
  goalUsd: number | null;
  pledgedUsd: number;
  myPledgeUsd: number | null;
  isFounder: boolean;
  pledges: FundingPledge[];
};

export type FundingTotals = {
  goalUsd: number | null;
  pledgedUsd: number;
};

function assertRoomId(id: unknown): string {
  if (typeof id !== "string") throw new Error("Unknown chat");
  const trimmed = id.trim();
  if (!/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) throw new Error("Unknown chat");
  return trimmed;
}

function parseUsd(value: unknown): number {
  if (typeof value === "number" && Number.isInteger(value)) return value;
  if (typeof value !== "string") throw new Error("Enter an amount in whole dollars");
  const cleaned = value.replace(/[$,\s]/g, "").trim();
  if (!/^\d+$/.test(cleaned)) throw new Error("Use whole dollars, no cents");
  const n = Number(cleaned);
  if (!Number.isSafeInteger(n)) throw new Error("That amount is too large");
  return n;
}

function assertGoal(value: unknown): number {
  const n = parseUsd(value);
  if (n < 1) throw new Error("The goal has to be at least a dollar");
  if (n > 999_999_999) throw new Error("Keep the goal under a billion dollars");
  return n;
}

function assertPledge(value: unknown): number {
  const n = parseUsd(value);
  if (n < 0) throw new Error("A pledge cannot be negative");
  if (n > 999_999_999) throw new Error("Keep the pledge under a billion dollars");
  return n;
}

export async function loadFundingTotals(roomId: string): Promise<FundingTotals> {
  const sql = await getSql();
  const goals = await sql<{ amount_usd: number }>`
    select amount_usd from room_funding_goals where room_id = ${roomId}
  `;
  const sums = await sql<{ total: number | null }>`
    select coalesce(sum(amount_usd), 0)::int as total
    from room_funding_pledges
    where room_id = ${roomId} and amount_usd > 0
  `;
  return {
    goalUsd: goals[0] ? Number(goals[0].amount_usd) : null,
    pledgedUsd: Number(sums[0]?.total ?? 0),
  };
}

async function requirePrivateRoom(roomId: string, userId: string) {
  const sql = await getSql();
  const rooms = await sql<{
    kind: string;
    founder_a: string | null;
    founder_b: string | null;
    founder_c: string | null;
  }>`
    select kind, founder_a, founder_b, founder_c from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) throw new Error("Unknown chat");
  if (room.kind !== "private") throw new Error("Funding lives in a private group");
  const mine = await sql<{ role: string }>`
    select role from room_members where room_id = ${roomId} and user_id = ${userId}
  `;
  if (!mine[0]) throw new Error("You are not in this chat");
  const isFounder =
    mine[0].role === "founder" ||
    room.founder_a === userId ||
    room.founder_b === userId ||
    room.founder_c === userId;
  return { isFounder };
}

async function loadFunding(roomId: string, userId: string): Promise<RoomFunding> {
  const { isFounder } = await requirePrivateRoom(roomId, userId);
  const sql = await getSql();
  const totals = await loadFundingTotals(roomId);
  const rows = await sql<{ user_id: string; name: string; amount_usd: number }>`
    select p.user_id, coalesce(nullif(u."name", ''), 'Member') as name, p.amount_usd
    from room_funding_pledges p
    join "user" u on u."id" = p.user_id
    where p.room_id = ${roomId} and p.amount_usd > 0
    order by p.amount_usd desc, u."name" asc
  `;
  const pledges: FundingPledge[] = rows.map((row) => ({
    userId: row.user_id,
    name: row.name,
    amountUsd: Number(row.amount_usd),
  }));
  const mine = pledges.find((p) => p.userId === userId);
  return {
    goalUsd: totals.goalUsd,
    pledgedUsd: totals.pledgedUsd,
    myPledgeUsd: mine ? mine.amountUsd : null,
    isFounder,
    pledges,
  };
}

export const getRoomFunding = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([authMiddleware])
  .handler(async ({ context, data: roomId }) => loadFunding(roomId, context.userId));

export const setFundingGoal = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; amount: string | number }) => ({
    roomId: assertRoomId(input.roomId),
    amount: assertGoal(input.amount),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const { isFounder } = await requirePrivateRoom(data.roomId, context.userId);
    if (!isFounder) throw new Error("Only a founder can set the goal");
    const sql = await getSql();
    await sql`
      insert into room_funding_goals (room_id, amount_usd, updated_by, updated_at)
      values (${data.roomId}, ${data.amount}, ${context.userId}, now())
      on conflict (room_id) do update
      set amount_usd = excluded.amount_usd,
          updated_by = excluded.updated_by,
          updated_at = now()
    `;
    return loadFunding(data.roomId, context.userId);
  });

export const setFundingPledge = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; amount: string | number }) => ({
    roomId: assertRoomId(input.roomId),
    amount: assertPledge(input.amount),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await requirePrivateRoom(data.roomId, context.userId);
    const sql = await getSql();
    if (data.amount === 0) {
      await sql`
        delete from room_funding_pledges
        where room_id = ${data.roomId} and user_id = ${context.userId}
      `;
    } else {
      await sql`
        insert into room_funding_pledges (room_id, user_id, amount_usd, updated_at)
        values (${data.roomId}, ${context.userId}, ${data.amount}, now())
        on conflict (room_id, user_id) do update
        set amount_usd = excluded.amount_usd,
            updated_at = now()
      `;
    }
    return loadFunding(data.roomId, context.userId);
  });
