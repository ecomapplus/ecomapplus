import { createFileRoute } from "@tanstack/react-router";
import {
  applyResetToken,
  issueResetToken,
  normalizeEmail,
  normalizePassword,
  normalizeToken,
} from "@/lib/password-reset";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function originOk(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export const Route = createFileRoute("/api/password-reset")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!originOk(request)) return json({ error: "Invalid origin" }, 403);
        let body: Record<string, unknown> = {};
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return json({ error: "Could not read that request" }, 400);
        }
        try {
          if (body.action === "request") {
            const result = await issueResetToken(normalizeEmail(body.email));
            return json(result);
          }
          if (body.action === "complete") {
            const result = await applyResetToken(
              normalizeToken(body.token),
              normalizePassword(body.password),
            );
            return json(result);
          }
          return json({ error: "Unknown action" }, 400);
        } catch (err) {
          const message = err instanceof Error ? err.message : "Could not reset the password";
          return json({ error: message }, 400);
        }
      },
    },
  },
});
