import { createServerFn } from "@tanstack/react-start";
import { requireAdmin } from "@/lib/admin";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type HallCalendarView = {
  month: string;
  day: string;
  country: string;
  type: "all" | "event" | "work-trade" | "residency";
};

const TYPES = new Set(["all", "event", "work-trade", "residency"]);

function monthOk(value: string) {
  return /^\d{4}-\d{2}$/.test(value);
}

function dayOk(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

async function ensureHallCalendar() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists hall_calendar_view (
      id integer primary key,
      month text not null,
      day text not null,
      country text not null,
      type text not null
    )
  `);
}

export const readHallCalendar = createServerFn({ method: "GET" }).handler(async () => {
  await ensureHallCalendar();
  const sql = await getSql();
  const rows = await sql<{ month: string; day: string; country: string; type: string }>`
    select month, day, country, type from hall_calendar_view where id = 1
  `;
  const row = rows[0];
  if (!row || !monthOk(row.month) || !dayOk(row.day) || !TYPES.has(row.type)) return null;
  return {
    month: row.month,
    day: row.day,
    country: row.country.slice(0, 80) || "all",
    type: row.type as HallCalendarView["type"],
  };
});

export const saveHallCalendar = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: HallCalendarView) => {
    const month = String(input?.month ?? "");
    const day = String(input?.day ?? "");
    const country = String(input?.country ?? "all").slice(0, 80) || "all";
    const type = String(input?.type ?? "all");
    if (!monthOk(month) || !dayOk(day) || !TYPES.has(type)) {
      throw new Error("That calendar view is not usable.");
    }
    return { month, day, country, type: type as HallCalendarView["type"] };
  })
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    await ensureHallCalendar();
    const sql = await getSql();
    await sql`
      insert into hall_calendar_view (id, month, day, country, type)
      values (1, ${data.month}, ${data.day}, ${data.country}, ${data.type})
      on conflict (id) do update
      set month = excluded.month, day = excluded.day, country = excluded.country, type = excluded.type
    `;
    return { ok: true as const };
  });
