import { createServerFn } from "@tanstack/react-start";
import { requireAdmin } from "@/lib/admin";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type HallMediaAction = "mute" | "drop-video";

async function ensureOrders() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists hall_media_orders (
      id bigserial primary key,
      target_user_id text not null,
      action text not null,
      created_at timestamptz not null default now()
    )
  `);
  await sql.query(
    `delete from hall_media_orders where created_at < now() - interval '2 minutes'`,
  );
}

export const moderateHallMedia = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { targetUserId: string; action: HallMediaAction }) => {
    const targetUserId = input?.targetUserId?.trim?.() ?? "";
    const action = input?.action;
    if (!targetUserId || targetUserId.length > 80) throw new Error("Unknown person");
    if (action !== "mute" && action !== "drop-video") throw new Error("Unknown action");
    return { targetUserId, action };
  })
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    if (data.targetUserId === context.userId) throw new Error("Not yourself");
    await ensureOrders();
    const sql = await getSql();
    await sql`
      insert into hall_media_orders (target_user_id, action)
      values (${data.targetUserId}, ${data.action})
    `;
    return { ok: true as const };
  });

export const takeHallOrders = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<{ actions: HallMediaAction[] }> => {
    await ensureOrders();
    const sql = await getSql();
    const rows = await sql<{ id: string; action: string }>`
      select id, action from hall_media_orders
      where target_user_id = ${context.userId}
      order by id
    `;
    if (rows.length > 0) {
      await sql`delete from hall_media_orders where target_user_id = ${context.userId}`;
    }
    const actions = rows
      .map((row) => row.action)
      .filter((action): action is HallMediaAction => action === "mute" || action === "drop-video");
    return { actions };
  });
