import { ExternalLink } from "lucide-react";

export function googleImagesUrl(name: string, location: string): string {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${name} ${location}`.trim())}`;
}

export function PlaceImagesLink({
  name,
  location,
  className,
}: {
  name: string;
  location: string;
  className?: string;
}) {
  return (
    <a
      href={googleImagesUrl(name, location)}
      target="_blank"
      rel="noreferrer"
      className={
        className ?? "inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-forest hover:underline"
      }
    >
      Google Images
      <ExternalLink className="size-3.5" aria-hidden />
    </a>
  );
}
