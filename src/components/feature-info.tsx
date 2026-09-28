import { Info } from "lucide-react";
import { useState } from "react";

export function FeatureInfo({ text }: { text: string }) {
  const [pinned, setPinned] = useState(false);
  const [hover, setHover] = useState(false);
  const open = pinned || hover;

  return (
    <span
      className="relative inline-flex shrink-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        aria-label="About this feature"
        aria-expanded={open}
        className="inline-flex size-8 items-center justify-center rounded-full text-muted hover:text-fg"
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setPinned((value) => !value);
        }}
      >
        <Info className="size-4" aria-hidden />
      </button>
      {open ? (
        <span
          role="tooltip"
          className="absolute right-0 top-9 z-30 w-60 rounded-md bg-fg px-3 py-2 text-left text-sm font-normal normal-case tracking-normal text-cream shadow-border"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}
