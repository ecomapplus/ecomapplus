import { useNavigate } from "@tanstack/react-router";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { randomCommunity } from "@/data/communities";

export function RandomVillageButton({
  exceptSlug,
  className,
}: {
  exceptSlug?: string | null;
  className?: string;
}) {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      className={className}
      onClick={() => {
        const pick = randomCommunity(exceptSlug);
        if (pick) {
          void navigate({ to: "/communities/$slug", params: { slug: pick.slug } });
        }
      }}
    >
      <Shuffle className="size-4" aria-hidden />
      Random Eco-community
    </Button>
  );
}
