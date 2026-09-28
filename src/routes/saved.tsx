import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/saved")({
  beforeLoad: () => {
    throw redirect({ to: "/leaders", hash: "saved" });
  },
  component: () => null,
  head: () => ({
    meta: [{ title: "Saved villages · ecocommunitymap.com" }],
  }),
});
