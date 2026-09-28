import { getSql } from "@/lib/db";
import type { WeeklyLead } from "@/lib/weekly-leads";

const g = globalThis as typeof globalThis & { __ecomapWeeklyLeadTable?: Promise<void> };

async function ensureTable() {
  if (!g.__ecomapWeeklyLeadTable) {
    g.__ecomapWeeklyLeadTable = (async () => {
      const sql = await getSql();
      await sql.query(`
        create table if not exists weekly_leads (
          id text primary key,
          email text not null,
          answers text not null,
          weights text not null,
          match_slugs text not null,
          referral_code text not null default '',
          send_on text not null,
          created_at text not null
        )
      `);
    })().catch((err) => {
      g.__ecomapWeeklyLeadTable = undefined;
      throw err;
    });
  }
  await g.__ecomapWeeklyLeadTable;
}

function fromRow(row: {
  id: string;
  email: string;
  answers: string;
  weights: string;
  match_slugs: string;
  referral_code: string;
  send_on: string;
  created_at: string;
}): WeeklyLead {
  return {
    id: row.id,
    email: row.email,
    answers: JSON.parse(row.answers),
    weights: JSON.parse(row.weights),
    matchSlugs: JSON.parse(row.match_slugs),
    referralCode: row.referral_code,
    sendOn: row.send_on,
    createdAt: row.created_at,
  };
}

export async function listLeadRows(): Promise<WeeklyLead[]> {
  await ensureTable();
  const sql = await getSql();
  const rows = await sql<{
    id: string;
    email: string;
    answers: string;
    weights: string;
    match_slugs: string;
    referral_code: string;
    send_on: string;
    created_at: string;
  }>`
    select id, email, answers, weights, match_slugs, referral_code, send_on, created_at
    from weekly_leads
    order by created_at desc
    limit 500
  `;
  return rows.map(fromRow);
}

export async function insertLeadRow(row: WeeklyLead): Promise<WeeklyLead[]> {
  await ensureTable();
  const sql = await getSql();
  await sql`
    insert into weekly_leads (id, email, answers, weights, match_slugs, referral_code, send_on, created_at)
    values (
      ${row.id},
      ${row.email},
      ${JSON.stringify(row.answers)},
      ${JSON.stringify(row.weights)},
      ${JSON.stringify(row.matchSlugs)},
      ${row.referralCode},
      ${row.sendOn},
      ${row.createdAt}
    )
    on conflict (id) do nothing
  `;
  return listLeadRows();
}
