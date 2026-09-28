import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import {
  networkLabels,
  villageSocials,
  type SocialNetwork,
} from "@/data/leader-socials";

const icons: Record<SocialNetwork, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function VillageSocialLinks({ slug }: { slug: string }) {
  const socials = villageSocials[slug] ?? [];
  if (socials.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-1">
      {socials.map((social) => {
        const Icon = icons[social.network];
        return (
          <li key={social.url}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer nofollow"
              title={`${networkLabels[social.network]} ${social.handle}`}
              aria-label={`${networkLabels[social.network]} ${social.handle}`}
              className="inline-flex size-9 items-center justify-center rounded-full bg-panel text-fg hover:bg-border"
            >
              <Icon className="size-3.5" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
