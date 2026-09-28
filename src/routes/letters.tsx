import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DoorLetter } from "@/components/door-letter";
import { LockedDetailsCopy } from "@/components/locked-details";
import { communities } from "@/data/communities";
import { publicFlagOrder, publicFlagsFor, type PublicFlag } from "@/data/public-flags";
import { usePlusAccess } from "@/lib/plus-membership";
import { useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/letters")({
  component: LettersPage,
  head: () => ({
    meta: [
      { title: "Door letters · EcoMapPlus" },
      { name: "description", content: "A contact and a draft message for each open door." },
    ],
  }),
});

function LettersPage() {
  const plus = usePlusAccess();
  const scope = useCountryScope();
  const options = useMemo(
    () =>
      communities
        .filter((community) => publicFlagsFor(community.slug).length > 0)
        .filter((community) => !scope || community.country === scope)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [scope],
  );
  const [slug, setSlug] = useState(options[0]?.slug ?? "");
  const community = options.find((row) => row.slug === slug) ?? options[0];
  const doors: PublicFlag[] = community
    ? publicFlagOrder.filter((flag) => publicFlagsFor(community.slug).includes(flag))
    : [];

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Door letters</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Write the door</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Pick a village. Each open door gets the best contact on file and a message you can revise.
      </p>
      {plus && community ? (
        <>
          <label htmlFor="letter-village" className="mt-8 block text-sm font-medium text-fg">
            Village
            <select
              id="letter-village"
              value={community.slug}
              onChange={(event) => setSlug(event.target.value)}
              className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg"
            >
              {options.map((row) => (
                <option key={row.slug} value={row.slug}>
                  {row.name}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 grid gap-4">
            {doors.map((door) => (
              <section key={door} className="rounded-lg border border-border bg-surface p-5">
                <DoorLetter slug={community.slug} village={community.name} door={door} />
              </section>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next="/letters" />
        </div>
      )}
    </main>
  );
}
