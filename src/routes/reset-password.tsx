import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/reset-password")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/login",
      search: {
        redirect: search.redirect,
      },
    });
  },
});
