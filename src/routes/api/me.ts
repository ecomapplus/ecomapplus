import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

function tokenFrom(request: Request) {
  const header = request.headers.get("authorization") ?? "";
  const bearer = header.replace(/^Bearer\s+/i, "").split(".")[0]?.trim();
  if (bearer) return bearer;
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(/(?:^|;\s*)(?:vc-session|__Host-grok-auth\.session_token)=([^;]+)/);
  if (!match?.[1]) return "";
  try {
    return decodeURIComponent(match[1]).split(".")[0]?.trim() ?? "";
  } catch {
    return match[1].split(".")[0]?.trim() ?? "";
  }
}

async function handleMe(request: Request) {
  const token = tokenFrom(request);
  if (!token) {
    return Response.json({ user: null });
  }
  try {
    const sql = await getSql();
    const rows = await sql<{
      id: string;
      name: string;
      email: string;
      image: string | null;
    }>`
      select u.id, u.name, u.email, u.image
      from "session" s
      join "user" u on u.id = s."userId"
      where s.token = ${token} and s."expiresAt" > now()
      limit 1
    `;
    const row = rows[0];
    if (!row) return Response.json({ user: null });
    const image = row.image && row.image.length < 16000 ? row.image : null;
    return Response.json({
      user: { id: row.id, name: row.name, email: row.email, image },
    });
  } catch (err) {
    console.error("[me]", err);
    return Response.json({ user: null });
  }
}

export const Route = createFileRoute("/api/me")({
  server: {
    handlers: {
      GET: async ({ request }) => handleMe(request),
      POST: async ({ request }) => handleMe(request),
    },
  },
});
