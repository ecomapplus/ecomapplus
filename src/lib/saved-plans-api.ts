import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import {
  assertSavedPlanId,
  assertSavedPlanTitle,
  compactTravelPlan,
  defaultSavedPlanTitle,
  MAX_PLAN_JSON,
  MAX_SAVED_PLANS,
  parseSavedTravelPlan,
  savedPlanCard,
  type SavedPlanCard,
  type SavedPlanDetail,
} from "@/lib/saved-plans";

export type { SavedPlanCard, SavedPlanDetail };

export const listSavedTravelPlans = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<SavedPlanCard[]> => {
    const sql = await getSql();
    const rows = await sql<{
      id: number;
      title: string;
      plan_json: string;
      created_at: string;
    }>`
      select id, title, plan_json, created_at::text as created_at
      from saved_travel_plans
      where user_id = ${context.userId}
      order by created_at desc
    `;
    const out: SavedPlanCard[] = [];
    for (const row of rows) {
      try {
        const plan = parseSavedTravelPlan(row.plan_json);
        out.push(savedPlanCard(Number(row.id), row.title, row.created_at, plan));
      } catch {
        /* skip a corrupt row rather than failing the folder */
      }
    }
    return out;
  });

export const getSavedTravelPlan = createServerFn({ method: "GET" })
  .validator((id: number) => assertSavedPlanId(id))
  .middleware([authMiddleware])
  .handler(async ({ context, data: id }): Promise<SavedPlanDetail> => {
    const sql = await getSql();
    const rows = await sql<{
      id: number;
      title: string;
      plan_json: string;
      created_at: string;
    }>`
      select id, title, plan_json, created_at::text as created_at
      from saved_travel_plans
      where id = ${id} and user_id = ${context.userId}
    `;
    const row = rows[0];
    if (!row) throw new Error("Unknown saved plan");
    const plan = parseSavedTravelPlan(row.plan_json);
    return { ...savedPlanCard(Number(row.id), row.title, row.created_at, plan), plan };
  });

export const saveTravelPlan = createServerFn({ method: "POST" })
  .validator((input: { title?: string; plan: unknown }) => {
    const plan = compactTravelPlan(parseSavedTravelPlan(input.plan));
    const json = JSON.stringify(plan);
    if (json.length > MAX_PLAN_JSON) throw new Error("That route is too large to save");
    const title =
      input.title && String(input.title).trim() ? assertSavedPlanTitle(input.title) : defaultSavedPlanTitle(plan);
    return { title, plan, json };
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }): Promise<SavedPlanCard> => {
    const sql = await getSql();
    const count = await sql<{ n: number }>`
      select count(*)::int as n from saved_travel_plans where user_id = ${context.userId}
    `;
    if (Number(count[0]?.n ?? 0) >= MAX_SAVED_PLANS) {
      throw new Error(`This folder holds ${MAX_SAVED_PLANS} plans. Remove one to save another.`);
    }
    const rows = await sql<{
      id: number;
      title: string;
      created_at: string;
    }>`
      insert into saved_travel_plans (user_id, title, village_count, round_trip, plan_json)
      values (
        ${context.userId},
        ${data.title},
        ${data.plan.villageCount},
        ${data.plan.roundTrip},
        ${data.json}
      )
      returning id, title, created_at::text as created_at
    `;
    const row = rows[0];
    if (!row) throw new Error("Could not save that plan");
    return savedPlanCard(Number(row.id), row.title, row.created_at, data.plan);
  });

export const deleteSavedTravelPlan = createServerFn({ method: "POST" })
  .validator((id: number) => assertSavedPlanId(id))
  .middleware([authMiddleware])
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    const rows = await sql<{ id: number }>`
      delete from saved_travel_plans
      where id = ${id} and user_id = ${context.userId}
      returning id
    `;
    if (!rows[0]) throw new Error("Could not remove that plan");
    return { ok: true };
  });
