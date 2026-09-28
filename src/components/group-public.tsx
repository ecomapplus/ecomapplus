import { FundingBar } from "@/components/funding-meter";
import type { RoomSummary } from "@/lib/chat";

export function GroupPublicFace({ group }: { group: RoomSummary }) {
  const skills = (group.skillCounts ?? []).filter((s) => s.count > 0);
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
      {group.thumbnail ? (
        <img src={group.thumbnail} alt="" className="block aspect-video w-full shrink-0 object-cover bg-panel" />
      ) : (
        <div className="flex aspect-video shrink-0 items-center justify-center rounded-md bg-panel font-display text-3xl text-moss">
          {(group.name.trim()[0] || "P").toUpperCase()}
        </div>
      )}
      {group.mission ? (
        <p className="mt-4 text-base leading-relaxed text-fg">{group.mission}</p>
      ) : (
        <p className="mt-4 text-sm text-muted">No mission posted yet.</p>
      )}

      <section className="mt-6">
        <h3 className="font-display text-xl text-fg">Funding</h3>
        <p className="mt-1 text-xs text-muted">Pledged versus the goal. Who pledged what stays in the room.</p>
        <div className="mt-3">
          <FundingBar pledgedUsd={group.pledgedUsd ?? 0} goalUsd={group.goalUsd} />
        </div>
      </section>

      <section className="mt-6">
        <h3 className="font-display text-xl text-fg">Skills</h3>
        <p className="mt-1 text-xs text-muted">
          How many people in this group listed each skill · {group.memberCount}{" "}
          {group.memberCount === 1 ? "member" : "members"}.
        </p>
        {group.skillCounts && group.skillCounts.length > 0 ? (
          <ul className="mt-3 divide-y divide-border">
            {group.skillCounts.map((row) => (
              <li key={row.id} className="flex min-h-11 items-center justify-between gap-3 py-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-fg">{row.label}</p>
                  <p className="text-xs text-muted">{row.detail}</p>
                </div>
                <span
                  className={`shrink-0 tabular-nums text-sm font-medium ${row.count > 0 ? "text-fg" : "text-subtle"}`}
                  aria-label={`${row.count} ${row.count === 1 ? "person" : "people"} with ${row.label}`}
                >
                  {row.count}
                </span>
              </li>
            ))}
          </ul>
        ) : skills.length === 0 ? (
          <p className="mt-2 text-sm text-muted">No skills listed yet.</p>
        ) : null}
      </section>
    </div>
  );
}

export function GroupProjectCard({
  group,
  active,
  onOpen,
}: {
  group: RoomSummary;
  active?: boolean;
  onOpen: () => void;
}) {
  const skills = (group.skillCounts ?? []).filter((s) => s.count > 0).slice(0, 4);
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`flex h-full w-full flex-col overflow-hidden rounded-lg border bg-surface text-left shadow-border transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover ${
        active ? "border-forest" : "border-border"
      }`}
    >
      {group.thumbnail ? (
        <img src={group.thumbnail} alt="" className="block aspect-video w-full shrink-0 object-cover bg-panel" />
      ) : (
        <div className="flex aspect-video shrink-0 items-center justify-center bg-panel font-display text-3xl text-moss">
          {(group.name.trim()[0] || "P").toUpperCase()}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 px-3 py-3">
        <p className="font-display text-lg leading-snug text-fg">{group.name}</p>
        {group.mission ? <p className="line-clamp-2 text-sm text-muted">{group.mission}</p> : null}
        <FundingBar pledgedUsd={group.pledgedUsd ?? 0} goalUsd={group.goalUsd} />
        {skills.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <li key={skill.id} className="rounded-full bg-panel px-2 py-0.5 text-xs text-fg">
                {skill.label} · {skill.count}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-auto text-xs text-muted">
          {group.memberCount} {group.memberCount === 1 ? "member" : "members"}
        </p>
      </div>
    </button>
  );
}
