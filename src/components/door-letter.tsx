import { useState } from "react";
import { Button } from "@/components/ui/button";
import { bestDoorContact, doorLetter } from "@/data/door-outreach";
import type { PublicFlag } from "@/data/public-flags";

export function DoorLetter({
  slug,
  village,
  door,
}: {
  slug: string;
  village: string;
  door: PublicFlag;
}) {
  const contact = bestDoorContact(slug, door);
  const [custom, setCustom] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [applied, setApplied] = useState("");
  const [pass, setPass] = useState(0);
  const [copied, setCopied] = useState(false);
  const letter = doorLetter({ slug, village, door, pass, feedback: applied, custom });
  const mailto = contact.email
    ? `mailto:${contact.email}?subject=${encodeURIComponent(letter.subject)}&body=${encodeURIComponent(letter.body)}`
    : null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(`To: ${contact.email ?? contact.who}\nSubject: ${letter.subject}\n\n${letter.body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-5 rounded-md bg-panel p-4">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Best contact</p>
      {contact.email ? (
        <a href={`mailto:${contact.email}`} className="mt-1 inline-flex min-h-11 items-center font-medium text-forest hover:underline">
          {contact.email}
        </a>
      ) : contact.url ? (
        <a href={contact.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center font-medium text-forest hover:underline">
          {contact.who}
        </a>
      ) : (
        <p className="mt-1 font-medium text-fg">{contact.who}</p>
      )}
      <p className="mt-1 text-sm leading-relaxed text-muted">{contact.why}</p>

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-moss">
        {custom ? "Custom inquiry" : "A note you can send"}
      </p>
      <p className="mt-2 text-sm font-medium text-fg">{letter.subject}</p>
      <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-fg">{letter.body}</pre>

      {custom ? (
        <label htmlFor={`door-feedback-${door}`} className="mt-4 block text-sm font-medium text-fg">
          What should the next one change?
        </label>
      ) : (
        <label htmlFor={`door-feedback-${door}`} className="mt-4 block text-sm font-medium text-fg">
          Anything you want in a longer note?
        </label>
      )}
      <textarea
        id={`door-feedback-${door}`}
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
        rows={3}
        placeholder="I can come in May. I cook."
        className="mt-1.5 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <Button
          type="button"
          onClick={() => {
            setApplied(feedback.trim());
            setCustom(true);
            setPass((n) => (custom ? n + 1 : 0));
            setCopied(false);
          }}
        >
          {custom ? "Regenerate" : "Generate custom inquiry"}
        </Button>
        <Button type="button" variant="outline" onClick={() => void copy()}>
          {copied ? "Copied" : "Copy"}
        </Button>
        {mailto ? (
          <Button asChild variant="outline">
            <a href={mailto}>Open in email</a>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
