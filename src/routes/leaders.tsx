import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { RadiusSearch } from "@/components/radius-search";
import { SavedVillagesSection } from "@/components/saved-villages-section";
import { coordsFor } from "@/data/coordinates";
import {
  formatDistance,
  isNearFilter,
  kmBetween,
  withinRadius,
  type NearFilter,
} from "@/data/geo";
import { PlaceImagesLink } from "@/components/place-images-link";
import { getCommunity } from "@/data/communities";
import {
  allDirectoryEntries,
  allSocialAccounts,
  formatFollowers,
  networkLabels,
  type DirectoryEntry,
  type LeaderSocial,
} from "@/data/leader-socials";

type SortKey = "followers" | "name" | "village" | "nearest";

function isFounderEntry(entry: DirectoryEntry) {
  return entry.kind === "person" && /\bfounders?\b|\bco-?founders?\b/i.test(entry.role);
}

export const Route = createFileRoute("/leaders")({
  component: LeadersIndex,
  head: () => ({
    meta: [
      { title: "Leaders · ecocommunitymap.com" },
    ],
  }),
});

function LeadersIndex() {
  const entries = useMemo(() => allDirectoryEntries(), []);
  const [sort, setSort] = useState<SortKey>("followers");
  const [near, setNear] = useState<NearFilter | null>(null);

  const filtered = useMemo(() => {
    if (!isNearFilter(near)) return entries;
    return entries.filter((entry) => withinRadius(coordsFor(entry.slug), near));
  }, [entries, near]);

  const people = useMemo(() => {
    const copy = [...filtered];
    if (sort === "nearest" && near) {
      copy.sort((a, b) => {
        const da = coordsFor(a.slug) ? kmBetween(coordsFor(a.slug)!, near) : Number.POSITIVE_INFINITY;
        const db = coordsFor(b.slug) ? kmBetween(coordsFor(b.slug)!, near) : Number.POSITIVE_INFINITY;
        return da - db || a.name.localeCompare(b.name);
      });
    } else if (sort === "followers") {
      copy.sort((a, b) => b.maxFollowers - a.maxFollowers || a.name.localeCompare(b.name));
    } else if (sort === "name") {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      copy.sort((a, b) => a.village.localeCompare(b.village) || a.name.localeCompare(b.name));
    }
    return copy;
  }, [filtered, sort, near]);

  const accounts = useMemo(() => allSocialAccounts(people), [people]);
  const untitled = useMemo(
    () => people.filter((p) => p.socials.length === 0),
    [people],
  );
  const founders = useMemo(
    () => untitled.filter((p) => isFounderEntry(p)),
    [untitled],
  );
  const associated = useMemo(
    () => untitled.filter((p) => !isFounderEntry(p)),
    [untitled],
  );

  function distanceFor(slug: string) {
    if (!near) return null;
    const point = coordsFor(slug);
    if (!point) return null;
    return formatDistance(kmBetween(point, near), near.unit);
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
      <div className="max-w-xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Directory</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Leaders</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your bookmarks sit first. Then public social accounts, then founders and associated
          people. A radius filter applies to everyone below the bookmarks.
        </p>
      </div>

      <SavedVillagesSection />

      <section className="mt-10 max-w-xl rounded-lg border border-border bg-surface p-4 shadow-border">
        <RadiusSearch
          value={near}
          onChange={(next) => {
            setNear(next);
            if (next) setSort("nearest");
            else if (sort === "nearest") setSort("followers");
          }}
          idPrefix="leaders-near"
          compact
          hint="Leaders whose village sits inside the radius."
        />
      </section>

      <section className="mt-8 max-w-xl text-sm text-muted">
          {near ? (
            <p className="mb-3 text-xs text-subtle">
              <span className="tabular-nums text-fg">{people.length}</span>
              {` within ${near.radius} ${near.unit} of ${near.label}`}
            </p>
          ) : (
            <p className="mb-3 text-xs text-subtle">
              <span className="tabular-nums text-fg">{people.length}</span> people and offices
            </p>
          )}
          <div className="flex flex-wrap gap-1">
            {near ? (
              <SortButton current={sort} value="nearest" onClick={setSort}>
                Nearest
              </SortButton>
            ) : null}
            <SortButton current={sort} value="followers" onClick={setSort}>
              Most followed
            </SortButton>
            <SortButton current={sort} value="name" onClick={setSort}>
              Name
            </SortButton>
            <SortButton current={sort} value="village" onClick={setSort}>
              Village
            </SortButton>
          </div>

          {people.length === 0 ? (
            <p className="mt-5 text-sm text-muted">
              No leaders inside that radius. Widen it, or pick another place.
            </p>
          ) : (
            <>
              <DirectoryBlock
                id="social"
                title="Social media leaders"
                empty="No public social accounts in this set."
              >
                {accounts.map((row) => (
                  <li key={`${row.slug}-${row.name}-${row.social.url}`} className="flex gap-3">
                    <VillageThumb slug={row.slug} name={row.village} />
                    <div className="min-w-0">
                    <p className="tabular-nums text-fg">
                      {formatFollowers(row.social.followers)}{" "}
                      <span className="text-muted">{networkLabels[row.social.network]}</span>
                    </p>
                    <p>
                      <a
                        href={row.social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted hover:text-fg"
                      >
                        {row.social.handle}
                      </a>
                    </p>
                    <p className="mt-1">
                      {row.name}
                      {row.kind === "person" ? (
                        <>
                          {" · "}
                          <VillageLink slug={row.slug} name={row.village} />
                        </>
                      ) : null}
                      {distanceFor(row.slug) ? (
                        <span className="text-xs text-subtle">{` · ${distanceFor(row.slug)}`}</span>
                      ) : null}
                    </p>
                    <p className="text-xs text-subtle">{row.role}</p>
                    <ContactBits entry={row} />
                    </div>
                  </li>
                ))}
              </DirectoryBlock>
              <DirectoryBlock
                id="founders"
                title="Founders"
                empty="No founders without a public social account in this set."
              >
                {founders.map((entry) => (
                  <PersonRow
                    key={`${entry.kind}-${entry.slug}-${entry.name}`}
                    entry={entry}
                    distance={distanceFor(entry.slug)}
                  />
                ))}
              </DirectoryBlock>
              <DirectoryBlock
                id="associated"
                title="Associated people"
                empty="No associated people in this set."
              >
                {associated.map((entry) => (
                  <PersonRow
                    key={`${entry.kind}-${entry.slug}-${entry.name}`}
                    entry={entry}
                    distance={distanceFor(entry.slug)}
                  />
                ))}
              </DirectoryBlock>
            </>
          )}
      </section>
    </main>
  );
}

function DirectoryBlock({
  id,
  title,
  empty,
  children,
}: {
  id: string;
  title: string;
  empty: string;
  children: ReactNode;
}) {
  const items = Array.isArray(children) ? children : [children];
  const count = items.filter(Boolean).length;
  return (
    <section id={id} className="mt-10 scroll-mt-28">
      <h2 className="font-display text-2xl text-fg">{title}</h2>
      {count === 0 ? (
        <p className="mt-3 text-sm text-muted">{empty}</p>
      ) : (
        <ol className="mt-5 space-y-4">{children}</ol>
      )}
    </section>
  );
}

function SortButton({
  current,
  value,
  onClick,
  children,
}: {
  current: SortKey;
  value: SortKey;
  onClick: (v: SortKey) => void;
  children: string;
}) {
  const active = current === value;
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`inline-flex min-h-11 items-center rounded-md px-3 text-xs ${
        active ? "bg-panel text-fg" : "text-subtle hover:text-muted"
      }`}
    >
      {children}
    </button>
  );
}

function PersonRow({ entry, distance }: { entry: DirectoryEntry; distance?: string | null }) {
  const socials = [...entry.socials].sort((a, b) => b.followers - a.followers);
  return (
    <li className="flex gap-3">
      <VillageThumb slug={entry.slug} name={entry.village} />
      <div className="min-w-0">
      <p className="text-fg">{entry.name}</p>
      <p className="text-xs text-subtle">
        {entry.role}
        {entry.kind === "person" ? (
          <>
            {" · "}
            <VillageLink slug={entry.slug} name={entry.village} />
          </>
        ) : null}
        {distance ? <span>{` · ${distance}`}</span> : null}
      </p>
      <ContactBits entry={entry} />
      {socials.length > 0 ? (
        <ul className="mt-1 space-y-0.5">
          {socials.map((social) => (
            <SocialLine key={social.url} social={social} />
          ))}
        </ul>
      ) : null}
      {entry.note ? <p className="mt-0.5 text-xs text-subtle">{entry.note}</p> : null}
      </div>
    </li>
  );
}

function SocialLine({ social }: { social: LeaderSocial }) {
  return (
    <li className="text-xs">
      <a
        href={social.url}
        target="_blank"
        rel="noreferrer nofollow"
        className="text-muted hover:text-fg"
      >
        <span className="tabular-nums">{formatFollowers(social.followers)}</span>
        {` ${networkLabels[social.network]} ${social.handle}`}
      </a>
    </li>
  );
}

function VillageThumb({ slug }: { slug: string; name: string }) {
  const community = getCommunity(slug);
  if (!community) return null;
  return <PlaceImagesLink name={community.name} location={community.location} />;
}

function VillageLink({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      to="/communities/$slug"
      params={{ slug }}
      rel="noreferrer"
      className="text-subtle hover:text-muted"
    >
      {name}
    </Link>
  );
}

function ContactBits({ entry }: { entry: DirectoryEntry }) {
  const parts: { key: string; href: string; label: string; extraRel?: string }[] = [];
  if (entry.email) parts.push({ key: "email", href: `mailto:${entry.email}`, label: entry.email });
  if (entry.phone) {
    parts.push({
      key: "phone",
      href: `tel:${entry.phone.replace(/[^\d+]/g, "")}`,
      label: entry.phone,
    });
  }
  if (entry.url) {
    let label = entry.url;
    try {
      label = new URL(entry.url).host.replace(/^www\./, "");
    } catch {
      /* keep */
    }
    parts.push({ key: "url", href: entry.url, label, extraRel: "noreferrer nofollow" });
  }
  if (parts.length === 0) return null;
  return (
    <p className="mt-0.5 flex flex-wrap gap-x-2 text-xs">
      {parts.map((part, i) => (
        <span key={part.key} className="inline-flex gap-x-2">
          {i > 0 ? <span aria-hidden>·</span> : null}
          <a
            href={part.href}
            className="text-subtle hover:text-muted"
            rel={part.extraRel}
            target={part.key === "url" ? "_blank" : undefined}
          >
            {part.label}
          </a>
        </span>
      ))}
    </p>
  );
}
