import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/most-saved")({
  beforeLoad: () => {
    throw redirect({ to: "/leaderboard" });
  },
  component: () => null,
});
