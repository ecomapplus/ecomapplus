import { createHash } from "node:crypto";
import { getSql } from "@/lib/db";

export type MemberPlace = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  updatedAt: string;
};

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function asPlace(row: Record<string, unknown>): MemberPlace | null {
  const lat = Number(row.lat);
  const lng = Number(row.lng);
  const id = typeof row.id === "string" ? row.id : "";
  const name = typeof row.display_name === "string" ? row.display_name : "";
  const updated = row.updated_at;
  const updatedAt =
    updated instanceof Date
      ? updated.toISOString()
      : typeof updated === "string"
        ? updated
        : "";
  if (!id || !name || !Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return { id, name, lat, lng, updatedAt };
}

export async function listPlaces(): Promise<MemberPlace[]> {
  const sql = await getSql();
  const rows = await sql<Record<string, unknown>>`
    select id, display_name, lat, lng, updated_at
    from member_places
    order by updated_at desc
    limit 200
  `;
  return rows.map(asPlace).filter((row): row is MemberPlace => Boolean(row));
}

export async function upsertPlace(input: {
  id: string;
  token: string;
  name: string;
  lat: number;
  lng: number;
}): Promise<MemberPlace> {
  const sql = await getSql();
  const tokenHash = hashToken(input.token);
  const existing = await sql<{ token_hash: string }>`
    select token_hash from member_places where id = ${input.id} limit 1
  `;
  if (existing[0] && existing[0].token_hash !== tokenHash) {
    throw new Error("That pin belongs to someone else.");
  }
  const rows = await sql<Record<string, unknown>>`
    insert into member_places (id, token_hash, display_name, lat, lng, updated_at)
    values (${input.id}, ${tokenHash}, ${input.name}, ${input.lat}, ${input.lng}, now())
    on conflict (id) do update set
      display_name = excluded.display_name,
      lat = excluded.lat,
      lng = excluded.lng,
      updated_at = now()
    returning id, display_name, lat, lng, updated_at
  `;
  const place = asPlace(rows[0] ?? {});
  if (!place) throw new Error("Could not save that location.");
  return place;
}

export async function deletePlace(id: string, token: string): Promise<void> {
  const sql = await getSql();
  const tokenHash = hashToken(token);
  await sql`
    delete from member_places
    where id = ${id} and token_hash = ${tokenHash}
  `;
}
