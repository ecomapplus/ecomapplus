import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compacts/")({
 beforeLoad: () => {
 throw redirect({ to: "/agreements" });
 },
 component: () => null,
});
