import { createFileRoute } from "@tanstack/react-router";
import { EcoBotPanel } from "@/components/eco-bot";

export const Route = createFileRoute("/bot")({
  ssr: false,
  component: EcoBotPage,
  head: () => ({
    meta: [
      { title: "Eco-community bot · EcoMapPlus" },
      {
        name: "description",
        content:
          "A Plus bot that reads the atlas and packs dated eco-community events into a short trip with the fewest miles.",
      },
    ],
  }),
});

function EcoBotPage() {
  return <EcoBotPanel />;
}
