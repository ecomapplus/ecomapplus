import { getCommunity } from "./communities";
import { leadersBySlug } from "./leaders";

export type SocialNetwork = "instagram" | "facebook" | "x" | "linkedin" | "youtube";

export type LeaderSocial = {
  network: SocialNetwork;
  handle: string;
  url: string;
  /** Public follower or page-like count, rounded from public profiles (August 2026). */
  followers: number;
};

export const networkLabels: Record<SocialNetwork, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  linkedin: "LinkedIn",
  youtube: "YouTube"
};

function ig(handle: string, followers: number): LeaderSocial {
  const h = handle.replace(/^@/, "");
  return { network: "instagram", handle: `@${h}`, url: `https://www.instagram.com/${h}/`, followers };
}
function fb(handle: string, followers: number): LeaderSocial {
  return { network: "facebook", handle, url: `https://www.facebook.com/${handle}/`, followers };
}
function x(handle: string, followers: number): LeaderSocial {
  const h = handle.replace(/^@/, "");
  return { network: "x", handle: `@${h}`, url: `https://x.com/${h}`, followers };
}
function li(handle: string, followers: number): LeaderSocial {
  return { network: "linkedin", handle, url: `https://www.linkedin.com/company/${handle}/`, followers };
}
function lip(handle: string, followers: number): LeaderSocial {
  return { network: "linkedin", handle, url: `https://www.linkedin.com/in/${handle}/`, followers };
}

/** Personal accounts keyed by `${slug}\\t${exact name}`. */
export const personSocials: Record<string, LeaderSocial[]> = {
  "the-farm\tIna May Gaskin": [
    ig("inamaygaskin", 26000),
    fb("InaMayGaskin", 172890),
    x("InaGaskin", 189)
  ],
  "pun-pun\tJon Jandai": [ig("jonjandai", 4700)],
  "kufunda\tMaaianne Knuth": [ig("maaianneknuth", 972), x("marianneknuth", 266)],
  "tamera\tSabine Lichtenfels": [ig("sabine.lichtenfels", 2100)],
  "earthaven\tDiana Leafe Christian": [fb("diana.l.christian", 1908)],
  "ecovillage-ithaca\tLiz Walker": [lip("liz-walker-ab744768", 923)],
  "barefoot-college\tMeagan Fallone": [ig("meagan.fallone", 946)],
  "lilleoru\tIngvar Villido": [ig("ingvarvillido.ishwarananda", 662)],
  "aardehuis\tMichael Reynolds": [
    ig("thegarbagewarrior", 16700),
    fb("MichaelReynoldsBiotect", 15371)
  ]
};

/** Village / office accounts keyed by slug. */
export const villageSocials: Record<string, LeaderSocial[]> = {
  "twin-oaks": [ig("twinoakscommunity", 27000), fb("TwinOaksCommunity", 8364)],
  damanhur: [ig("damanhur_spiritual_community", 36000), fb("Damanhur.ms", 49359)],
  arcosanti: [ig("arcosanti_arizona", 47000), fb("arcosanti", 17651)],
  sekem: [ig("sekem_group", 7706), fb("sekemgroup", 35779), li("sekemgroup", 27837)],
  auroville: [ig("auro.ville", 14000), x("AurovilleSocial", 1843), ig("aurovillefoundation", 3800)],
  findhorn: [ig("findhornfoundation", 25800), fb("ecovillagefindhorn", 14445)],
  tamera: [ig("tamerahealingbiotope", 13400), fb("Tamera.Healing.Biotope1", 34267)],
  "barefoot-college": [ig("barefootcollegetilonia", 5285)],
  earthaven: [ig("earthavenecovillage", 5400), fb("earthavenecovillage", 15403)],
  "los-angeles-eco-village": [fb("laecovillage", 1919)],
  "the-farm": [ig("thefarmcommunity", 6089)],
  oaec: [ig("the_oaec", 10800)],
  "ananda-village": [ig("anandavillage", 1900)],
  "dancing-rabbit": [ig("dancing.rabbit.ecovillage", 7314)],
  "sieben-linden": [ig("oekodorfsiebenlinden", 1500)],
  "cabo-pulmo": [ig("cabopulmodivers", 12000)],
  "baja-biosana": [ig("bajabiosana", 4500), fb("BajaBioSana", 4560)],
  "rancho-pacifico-baja": [ig("rancho_pacifico_baja", 2100)],
  "bosque-la-primavera": [ig("bosquelaprimavera", 2400)]
};

export type DirectoryEntry = {
  kind: "person" | "village";
  slug: string;
  village: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  url?: string;
  note?: string;
  socials: LeaderSocial[];
  maxFollowers: number;
};

function personKey(slug: string, name: string) {
  return `${slug}\t${name}`;
}

export function allDirectoryEntries(): DirectoryEntry[] {
  const out: DirectoryEntry[] = [];
  for (const [slug, row] of Object.entries(leadersBySlug)) {
    const community = getCommunity(slug);
    const village = community?.name ?? slug;
    for (const person of row.people) {
      const socials = (personSocials[personKey(slug, person.name)] ?? []).filter((s) => s.followers > 0);
      out.push({
        kind: "person",
        slug,
        village,
        name: person.name,
        role: person.role,
        email: person.email,
        phone: person.phone,
        url: person.url,
        note: person.note,
        socials,
        maxFollowers: socials.reduce((m, s) => Math.max(m, s.followers), 0),
      });
    }
    const org = (villageSocials[slug] ?? []).filter((s) => s.followers > 0);
    if (org.length > 0) {
      out.push({
        kind: "village",
        slug,
        village,
        name: village,
        role: "Community accounts",
        email: row.office?.email,
        phone: row.office?.phone,
        url: row.office?.url ?? community?.website,
        socials: org,
        maxFollowers: org.reduce((m, s) => Math.max(m, s.followers), 0),
      });
    }
  }
  return out;
}

export type AccountRow = DirectoryEntry & { social: LeaderSocial };

export function allSocialAccounts(entries: DirectoryEntry[]): AccountRow[] {
  return entries
    .flatMap((entry) => entry.socials.map((social) => ({ ...entry, social })))
    .sort((a, b) => b.social.followers - a.social.followers || a.name.localeCompare(b.name));
}

export function formatFollowers(n: number) {
  return n.toLocaleString("en-US");
}
