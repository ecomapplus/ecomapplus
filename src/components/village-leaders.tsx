import { Mail, MapPin, Phone, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getCommunity } from "@/data/communities";
import { leadersFor, type LeaderPerson, type VillageOffice } from "@/data/leaders";
import { isDirectoryUrl } from "@/data/sources";

type LeadersView = {
  people: LeaderPerson[];
  office?: VillageOffice;
  site?: string;
};

function leadersView(slug: string): LeadersView | null {
  const row = leadersFor(slug);
  const community = getCommunity(slug);
  if (!row && !community) return null;
  const people = row?.people ?? [];
  const office = row?.office;
  const rawSite = office?.url ?? community?.website;
  const site = rawSite && !isDirectoryUrl(rawSite) ? rawSite : undefined;
  if (people.length === 0 && !office && !site) return null;
  return { people, office, site };
}

export function VillageLeadersChip({ slug }: { slug: string }) {
  const view = leadersView(slug);
  if (!view) return null;
  const n = view.people.length;
  const label = n === 0 ? "Office" : n === 1 ? "1 leader" : `${n} leaders`;
  return (
    <a
      href="#leaders"
      className="inline-flex min-h-9 items-center gap-1 rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest-deep hover:bg-forest/20 sm:text-sm"
    >
      <Users className="size-3.5" aria-hidden />
      {label}
    </a>
  );
}

export function VillageLeadersNavLink({ slug, className }: { slug: string; className?: string }) {
  if (!leadersView(slug)) return null;
  return (
    <a
      href="#leaders"
      className={
        className ??
        "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-fg"
      }
    >
      <Users className="size-4" aria-hidden />
      Leaders
    </a>
  );
}

/** Compact names + office, used in the village page header and footer. */
export function VillageLeadersStrip({ slug, className }: { slug: string; className?: string }) {
  const view = leadersView(slug);
  if (!view) return null;
  const { people, office, site } = view;
  const names = people.map((person) => person.name);
  const preview = names.slice(0, 3);
  const extra = names.length - preview.length;

  return (
    <aside className={`rounded-lg border border-border bg-surface p-4 shadow-border ${className ?? ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-moss">
            <Users className="size-3.5" aria-hidden />
            Leaders
          </p>
          {preview.length > 0 ? (
            <p className="mt-2 text-sm font-medium leading-snug text-fg">
              {preview.join(" · ")}
              {extra > 0 ? ` · +${extra}` : ""}
            </p>
          ) : slug === "belterra" ? (
            <p className="mt-2 text-sm text-muted">Write the office at belterracohousing.ca.</p>
          ) : slug === "rio-oro" ? (
            <p className="mt-2 text-sm text-muted">Write the office at tortugasdeosa.org. +506 8456-9201.</p>
          ) : slug === "monkton-wyld" ? (
            <p className="mt-2 text-sm text-muted">Write the office at monktonwyldcourt.co.uk. 01297 560342.</p>
          ) : slug === "lost-valley" ? (
            <p className="mt-2 text-sm text-muted">Write the office at lostvalley.org. volunteer@lostvalley.org.</p>
          ) : null}
          {people[0]?.role ? <p className="mt-1 text-xs text-subtle">{people[0].role}</p> : null}
          <ContactLine email={office?.email} phone={office?.phone} url={site} />
        </div>
        <a
          href="#leaders"
          className="inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-forest hover:underline"
        >
          Contacts
        </a>
      </div>
    </aside>
  );
}

export function VillageLeaders({ slug }: { slug: string }) {
  const view = leadersView(slug);
  if (!view) return null;
  const { people, office, site } = view;

  return (
    <section id="leaders" className="mt-12 scroll-mt-40">
      <h2 className="font-display text-2xl text-fg">Leaders</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        Names this village, the press, or an official site has published, plus the office a
        stranger can actually write.
      </p>

      {people.length > 0 ? (
        <ul className={`mt-6 grid gap-3 ${people.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {people.map((person) => (
            <li
              key={`${person.name}-${person.role}`}
              className="rounded-md bg-surface p-4 shadow-border"
            >
              <p className="font-medium text-fg">{person.name}</p>
              <p className="mt-1 text-sm text-muted">{person.role}</p>
              <ContactLine email={person.email} phone={person.phone} url={person.url} />
              {person.note ? <p className="mt-2 text-xs leading-relaxed text-subtle">{person.note}</p> : null}
            </li>
          ))}
        </ul>
      ) : slug === "belterra" ? (
        <p className="mt-6 text-sm text-muted">
          Write the office at belterracohousing.ca.
        </p>
      ) : slug === "rio-oro" ? (
        <p className="mt-6 text-sm text-muted">
          Write the office at tortugasdeosa.org. +506 8456-9201.
        </p>
      ) : slug === "monkton-wyld" ? (
        <p className="mt-6 text-sm text-muted">
          Write the office at monktonwyldcourt.co.uk. 01297 560342.
        </p>
      ) : slug === "lost-valley" ? (
        <p className="mt-6 text-sm text-muted">
          Write the office at lostvalley.org. volunteer@lostvalley.org.
        </p>
      ) : null}

      {office || site ? (
        <article className="mt-4 rounded-md border border-forest/25 bg-forest/5 p-5 shadow-border">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Office</p>
          {office?.address ? (
            <p className="mt-2 flex items-start gap-2 text-sm text-fg">
              <MapPin className="mt-0.5 size-4 shrink-0 text-moss" aria-hidden />
              {office.address}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {office?.email ? (
              <a href={`mailto:${office.email}`} className="inline-flex min-h-11 items-center gap-1.5 text-forest hover:underline">
                <Mail className="size-4" aria-hidden />
                {office.email}
              </a>
            ) : null}
            {office?.phone ? (
              <a
                href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex min-h-11 items-center gap-1.5 text-forest hover:underline"
              >
                <Phone className="size-4" aria-hidden />
                {office.phone}
              </a>
            ) : null}
            {site ? (
              <a
                href={site}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 text-forest hover:underline"
              >
                {hostLabel(site)}
              </a>
            ) : null}
          </div>
        </article>
      ) : null}

      <p className="mt-4">
        <Link to="/leaders" className="text-sm font-medium text-forest hover:underline">
          All leaders in the atlas
        </Link>
      </p>
    </section>
  );
}

function ContactLine({
  email,
  phone,
  url,
}: {
  email?: string;
  phone?: string;
  url?: string;
}) {
  const parts = [];
  if (email) {
    parts.push(
      <a key="email" href={`mailto:${email}`} className="text-forest hover:underline">
        {email}
      </a>,
    );
  }
  if (phone) {
    parts.push(
      <a key="phone" href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="text-forest hover:underline">
        {phone}
      </a>,
    );
  }
  if (url && !isDirectoryUrl(url)) {
    parts.push(
      <a key="url" href={url} target="_blank" rel="noreferrer" className="text-forest hover:underline">
        {hostLabel(url)}
      </a>,
    );
  }
  if (parts.length === 0) return null;
  return (
    <p className="mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 text-sm">
      {parts.map((part, i) => (
        <span key={i} className="inline-flex gap-x-2">
          {i > 0 ? <span className="text-subtle" aria-hidden>·</span> : null}
          {part}
        </span>
      ))}
    </p>
  );
}

function hostLabel(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}
