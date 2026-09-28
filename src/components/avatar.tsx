import { PresenceDot } from "@/components/presence-mark";

export function Avatar({
  name,
  image,
  size = "md",
  online,
}: {
  name: string;
  image: string | null;
  size?: "sm" | "md" | "lg";
  online?: boolean;
}) {
  const dim = size === "sm" ? "size-8 text-xs" : size === "lg" ? "size-16 text-xl" : "size-10 text-sm";
  const initial = (name.trim()[0] || "M").toUpperCase();
  const face = image ? (
    <img src={image} alt="" className={`${dim} shrink-0 rounded-full object-cover bg-panel`} />
  ) : (
    <span
      className={`${dim} inline-flex shrink-0 items-center justify-center rounded-full bg-panel font-medium text-forest`}
      aria-hidden
    >
      {initial}
    </span>
  );
  if (online === undefined) return face;
  return (
    <span className="relative inline-flex shrink-0">
      {face}
      <PresenceDot online={online} />
    </span>
  );
}
