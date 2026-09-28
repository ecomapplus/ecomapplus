import {
  BookOpen,
  Droplets,
  Home,
  Leaf,
  Recycle,
  Sprout,
  Sun,
  Trees,
  type LucideIcon,
} from "lucide-react";
import {
  ecoFor,
  ecoThemeLabels,
  type EcoTheme,
} from "@/data/ecological-initiatives";

const themeIcons: Record<EcoTheme, LucideIcon> = {
  food: Sprout,
  water: Droplets,
  energy: Sun,
  building: Home,
  waste: Recycle,
  restoration: Trees,
  conservation: Leaf,
  education: BookOpen,
};

export function EcologicalInitiativesSection({ slug }: { slug: string }) {
  const row = ecoFor(slug);
  return (
    <section className="mt-12 scroll-mt-40" id="ecological-initiatives">
      <h2 className="font-display text-2xl text-fg">Ecological initiatives</h2>

      <article className="mt-6 rounded-md border border-forest/25 bg-forest/5 p-5 shadow-border">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
          <Leaf className="size-3.5" aria-hidden />
          The ecological story
        </p>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted">{row.overview}</p>
      </article>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {row.items.map((item) => {
          const Icon = themeIcons[item.theme];
          return (
            <li key={item.title} className="rounded-md bg-surface p-4 shadow-border">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
                <Icon className="size-3.5" aria-hidden />
                {ecoThemeLabels[item.theme]}
              </p>
              <h3 className="mt-2 font-display text-xl leading-snug text-fg">{item.title}</h3>
              {item.detail ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
