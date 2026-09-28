import { createServerFn } from "@tanstack/react-start";
import { requireAdmin } from "@/lib/admin";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

const MAX_SLIDES = 24;
const MAX_IMAGE = 280_000;

export type HallSlide = { id: string; image: string };

export type HallSlideFrame = {
  id: string | null;
  index: number;
  total: number;
  image: string | null;
};

async function ensureHallSlides() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists hall_slides (
      id text primary key,
      position integer not null,
      image text not null
    )
  `);
  await sql.query(`
    create table if not exists hall_slide_show (
      id integer primary key,
      slide_id text
    )
  `);
}

function imageOk(value: string) {
  return value.startsWith("data:image/") && value.length <= MAX_IMAGE;
}

async function resequence() {
  const sql = await getSql();
  const rows = await sql<{ id: string }>`select id from hall_slides order by position, id`;
  for (let i = 0; i < rows.length; i++) {
    await sql`update hall_slides set position = ${i} where id = ${rows[i].id}`;
  }
  return rows.length;
}

export const readHallDeck = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<HallSlide[]> => {
    await requireAdmin(context.userId);
    await ensureHallSlides();
    const sql = await getSql();
    return sql<{ id: string; image: string }>`select id, image from hall_slides order by position, id`;
  });

export const addHallSlide = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { image?: string }) => {
    const image = String(input?.image ?? "");
    if (!imageOk(image)) throw new Error("That image is too large. Try a smaller photo.");
    return { image };
  })
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    await ensureHallSlides();
    const sql = await getSql();
    const rows = await sql<{ n: string | number }>`select count(*) as n from hall_slides`;
    const count = Number(rows[0]?.n ?? 0);
    if (count >= MAX_SLIDES) throw new Error(`Keep it to ${MAX_SLIDES} slides.`);
    const id = crypto.randomUUID();
    await sql`insert into hall_slides (id, position, image) values (${id}, ${count}, ${data.image})`;
    return { id };
  });

export const removeHallSlide = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { id?: string }) => {
    const id = String(input?.id ?? "");
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Unknown slide");
    return { id };
  })
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    await ensureHallSlides();
    const sql = await getSql();
    await sql`delete from hall_slides where id = ${data.id}`;
    await sql`update hall_slide_show set slide_id = null where slide_id = ${data.id}`;
    await resequence();
    return { ok: true as const };
  });

export const moveHallSlide = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { id?: string; dir?: number }) => {
    const id = String(input?.id ?? "");
    const dir = input?.dir === -1 ? -1 : 1;
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Unknown slide");
    return { id, dir };
  })
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    await ensureHallSlides();
    const sql = await getSql();
    const rows = await sql<{ id: string; position: number }>`select id, position from hall_slides order by position, id`;
    const index = rows.findIndex((row) => row.id === data.id);
    const swap = index + data.dir;
    if (index < 0 || swap < 0 || swap >= rows.length) return { ok: true as const };
    const a = rows[index];
    const b = rows[swap];
    await sql`update hall_slides set position = ${b.position} where id = ${a.id}`;
    await sql`update hall_slides set position = ${a.position} where id = ${b.id}`;
    return { ok: true as const };
  });

export const setHallSlideShow = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { index?: number | null }) => {
    if (input?.index == null) return { index: null as number | null };
    const index = Math.floor(Number(input.index));
    if (!Number.isFinite(index) || index < 0 || index >= MAX_SLIDES) throw new Error("That slide is not in the deck");
    return { index };
  })
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    await ensureHallSlides();
    const sql = await getSql();
    let slideId: string | null = null;
    if (data.index != null) {
      const rows = await sql<{ id: string }>`select id from hall_slides order by position, id`;
      slideId = rows[data.index]?.id ?? null;
      if (!slideId) throw new Error("Upload slides before presenting");
    }
    await sql`
      insert into hall_slide_show (id, slide_id)
      values (1, ${slideId})
      on conflict (id) do update set slide_id = excluded.slide_id
    `;
    return { ok: true as const };
  });

/** What everyone in the square is looking at. Image is omitted when it has not changed. */
export const readHallSlideShow = createServerFn({ method: "POST" })
  .validator((input: { knownId?: string | null }) => {
    const knownId = typeof input?.knownId === "string" ? input.knownId.slice(0, 80) : null;
    return { knownId };
  })
  .handler(async ({ data }): Promise<HallSlideFrame> => {
    await ensureHallSlides();
    const sql = await getSql();
    const show = await sql<{ slide_id: string | null }>`select slide_id from hall_slide_show where id = 1`;
    const rows = await sql<{ id: string; image: string }>`select id, image from hall_slides order by position, id`;
    const slideId = show[0]?.slide_id ?? null;
    const index = rows.findIndex((row) => row.id === slideId);
    if (!slideId || index < 0) {
      return { id: null, index: 0, total: rows.length, image: null };
    }
    return {
      id: slideId,
      index,
      total: rows.length,
      image: data.knownId === slideId ? null : rows[index].image,
    };
  });
