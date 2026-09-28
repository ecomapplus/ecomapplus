import { ExternalLink, Lock } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { getCommunity } from "@/data/communities";
import {
  bookingFor,
  bookingHost,
  bookingStayTag,
  openBookingStay,
} from "@/data/booking-stays";

export function BookingStayChip({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const stay = bookingFor(slug);
  const [open, setOpen] = useState(false);
  if (!stay) return null;
  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setOpen(true);
        }}
        aria-haspopup="dialog"
        aria-label={`${bookingStayTag}: preview`}
        className={`inline-flex items-center rounded-full bg-stay font-medium text-cream hover:bg-stay-deep ${
          compact ? "min-h-9 px-2.5 py-1 text-xs" : "min-h-9 px-3 py-1 text-xs sm:text-sm"
        }`}
      >
        {bookingStayTag}
      </button>
      {open ? <BookingStayPreview slug={slug} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

export function BookingStayBody({
  slug,
  onOpen,
  hint,
  titleId,
}: {
  slug: string;
  onOpen: () => void;
  hint: string;
  titleId?: string;
}) {
  const community = getCommunity(slug);
  const stay = bookingFor(slug);
  if (!community || !stay) return null;
  const host = bookingHost(stay.url);

  return (
    <button type="button" onClick={onOpen} data-stay-preview className="block w-full text-left">
      <p className="px-3 pt-3 text-xs font-medium uppercase tracking-[0.16em] text-stay">
        Bookable overnight stay
      </p>
      <div className="relative mt-2">
        <div className="flex items-center gap-2 border-y border-border bg-panel px-3 py-2">
          <Lock className="size-3.5 shrink-0 text-stay" aria-hidden />
          <span className="min-w-0 truncate text-xs font-medium text-fg">{host}</span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs font-medium uppercase tracking-wide text-moss">{community.region}</p>
        <p id={titleId} className="mt-1 font-display text-xl leading-snug text-fg">
          {community.name}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{stay.note}</p>
        <p className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-stay">
          {hint}
          <ExternalLink className="size-4" aria-hidden />
        </p>
      </div>
    </button>
  );
}

export function BookingStayPreview({
  slug,
  onClose,
}: {
  slug: string;
  onClose: () => void;
}) {
  const stay = bookingFor(slug);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, slug]);

  if (!stay) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Dismiss booking preview"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-lg border border-border bg-surface pb-[env(safe-area-inset-bottom)] shadow-border-hover sm:rounded-lg"
      >
        <div className="min-h-0 flex-1 overflow-y-auto">
          <BookingStayBody
            slug={slug}
            titleId={titleId}
            onOpen={() => openBookingStay(slug)}
            hint="Tap again to open their booking page"
          />
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
          aria-label="Close booking preview"
        >
          <span className="text-lg font-medium leading-none" aria-hidden>
            ×
          </span>
        </button>
      </div>
    </div>
  );
}
