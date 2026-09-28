import { communities } from "./communities";
import { informalFor } from "./informal-agreements";

export type CompactValues = {
 communityName: string;
 place: string;
 country: string;
 date: string;
 parties: string;
 localClause: string;
 duration: string;
 hours: string;
 contribution: string;
 meeting: string;
 guestCap: string;
};

export const emptyCompactValues = (): CompactValues => ({
 communityName: "",
 place: "",
 country: "",
 date: new Date().toISOString().slice(0, 10),
 parties: "",
 localClause: "",
 duration: "",
 hours: "",
 contribution: "",
 meeting: "",
 guestCap: "",
});

export type CompactField = {
 id: keyof CompactValues;
 label: string;
 hint?: string;
 type?: "text" | "textarea" | "date";
 placeholder?: string;
};

export const coreCompactFields: CompactField[] = [
 {
 id: "communityName",
 label: "Community name",
 placeholder: "Oakridge Ecovillage",
 hint: "The name that will appear at the top of the compact.",
 },
 { id: "place", label: "Place", placeholder: "Town, region" },
 {
 id: "parties",
 label: "Who signs",
 type: "textarea",
 hint: "One name or role per line, residents, the board, the guest, the intern.",
 placeholder: "Resident circle\nGuest / volunteer",
 },
 { id: "date", label: "Date of this compact", type: "date" },
 {
 id: "localClause",
 label: "Particular to this place",
 type: "textarea",
 hint: "A clause that only this village would write. Leave blank if you want a generic draft.",
 placeholder: "The herb house is closed to overnight guests. Sunday Meeting is public; the dwelling houses are not.",
 },
];

export const extraCompactFields: Record<string, CompactField[]> = {
 duration: [
 {
 id: "duration",
 label: "Length of stay, trial, or course",
 placeholder: "Three weeks / one year / Experience Week",
 },
 ],
 hours: [
 {
 id: "hours",
 label: "Hours, quota, or quiet times",
 placeholder: "42 hours a week / silence after 21:00",
 },
 ],
 contribution: [
 {
 id: "contribution",
 label: "Contribution (labour, money, or kind)",
 placeholder: "Labour quota, a weekly donation, or room and board",
 },
 ],
 meeting: [
 {
 id: "meeting",
 label: "When the circle sits",
 placeholder: "Sunday evening, or as needed within 7 days",
 },
 ],
 guestCap: [
 {
 id: "guestCap",
 label: "How many guests at once",
 placeholder: "Two at a time, booked",
 },
 ],
};

export type CompactFamily = "Visitors" | "Work & money" | "Living together" | "Land & house";

export const compactFamilyOrder: CompactFamily[] = [
 "Living together",
 "Work & money",
 "Land & house",
 "Visitors",
];

export type CompactKind = {
 slug: string;
 title: string;
 documentName: string;
 family: CompactFamily;
 summary: string;
 extras: (keyof typeof extraCompactFields)[];
};

export const compactKinds: CompactKind[] = [
 {
 slug: "membership-trial",
 title: "Membership trial",
 documentName: "Membership Trial and Inner-Circle Compact",
 family: "Living together",
 summary:
 "Visitor, provisional, full, who decides, how long the trial lasts, and how someone leaves without a fight over a house they never owned.",
 extras: ["duration", "meeting"],
 },
 {
 slug: "conflict-circle",
 title: "Conflict and decisions",
 documentName: "Conflict and Decision Compact",
 family: "Living together",
 summary:
 "Talk first, then a third person, then the circle.",
 extras: ["meeting"],
 },
 {
 slug: "kitchen-table",
 title: "Kitchen and common house",
 documentName: "Kitchen, Meals, and Common-House Compact",
 family: "Living together",
 summary:
 "Who cooks, who washes, which fridge is whose, and when the common house is a living room rather than a hostel.",
 extras: ["hours"],
 },
 {
 slug: "quiet-practice",
 title: "Quiet hours and practice",
 documentName: "Quiet Hours, Substances, and Practice Compact",
 family: "Living together",
 summary:
 "Silence, substances, worship or meditation that is asked of people who live here, and what guests are expected to follow.",
 extras: ["hours"],
 },
 {
 slug: "care-household",
 title: "Shared household and care",
 documentName: "Shared Household and Care Compact",
 family: "Living together",
 summary:
 "Houseparents, villagers, and coworkers under one roof. Dignity first.",
 extras: ["hours", "meeting"],
 },
 {
 slug: "relationship-culture",
 title: "Intimate culture and privacy",
 documentName: "Intimate Culture and Privacy Compact",
 family: "Living together",
 summary:
 "Consent, privacy of others, and whatever transparency practice the village actually uses.",
 extras: ["meeting"],
 },
 {
 slug: "children-care",
 title: "Children and shared care",
 documentName: "Children, School, and Shared-Care Compact",
 family: "Living together",
 summary:
 "Who watches whom, what the school is, and the line between shared care and a parent’s job.",
 extras: ["hours", "meeting"],
 },
 {
 slug: "labour-roster",
 title: "Work and labour",
 documentName: "Work and Labour-Contribution Compact",
 family: "Work & money",
 summary:
 "The quota, what counts as work, illness, and who assigns the jobs nobody wants.",
 extras: ["hours", "meeting"],
 },
 {
 slug: "common-purse",
 title: "Money and common purse",
 documentName: "Money and Common-Purse Compact",
 family: "Work & money",
 summary:
 "What goes in, what a person may keep, the leaving package, and the reminder that tax authorities still exist.",
 extras: ["contribution", "meeting"],
 },
 {
 slug: "land-care",
 title: "Land and commons",
 documentName: "Land, Gardens, and Commons Compact",
 family: "Land & house",
 summary:
 "Which dirt is household, which is commons, what may be sprayed, cut, or harvested, and who closes the gate.",
 extras: ["meeting"],
 },
 {
 slug: "building-code",
 title: "Building and design",
 documentName: "Building, Materials, and Design Compact",
 family: "Land & house",
 summary:
 "What you may raise, which materials, who reviews the drawing, and the difference between an experiment and a code violation.",
 extras: ["meeting"],
 },
 {
 slug: "animals-stock",
 title: "Animals and livestock",
 documentName: "Animals and Livestock Compact",
 family: "Land & house",
 summary:
 "Whose goat, whose dog, feed, vet bills, and the ethics of meat on a commons.",
 extras: ["contribution"],
 },
 {
 slug: "guest-stay",
 title: "Guests and visitors",
 documentName: "Guest and Visitor Compact",
 family: "Visitors",
 summary:
 "How a stranger stays, which doors stay shut, how long is too long, and the contribution that keeps the guesthouse from becoming a free hotel.",
 extras: ["duration", "contribution", "guestCap"],
 },
 {
 slug: "volunteer-intern",
 title: "Volunteers and interns",
 documentName: "Volunteer and Intern Compact",
 family: "Visitors",
 summary:
 "Labour plus learning, room and board, a review date.",
 extras: ["duration", "hours", "contribution"],
 },
 {
 slug: "course-host",
 title: "Courses and seminars",
 documentName: "Seminar, Course, and Guesthouse Compact",
 family: "Visitors",
 summary:
 "What the fee covers, which buildings are the course and which are homes, and how teachers sit as guests of the village.",
 extras: ["duration", "contribution", "guestCap"],
 },
 {
 slug: "media-story",
 title: "Media and photography",
 documentName: "Media, Photography, and Story Compact",
 family: "Visitors",
 summary:
 "Who may photograph children, ceremonies, temples, and tired faces at breakfast. Journalists and guests both sign.",
 extras: ["meeting"],
 },
];

export function compactKindBySlug(slug: string) {
 return compactKinds.find((k) => k.slug === slug);
}

export function fieldsForCompact(kind: CompactKind): CompactField[] {
 const extra = kind.extras.flatMap((key) => extraCompactFields[key] ?? []);
 const seen = new Set<string>();
 return [...coreCompactFields, ...extra].filter((f) => {
 if (seen.has(f.id)) return false;
 seen.add(f.id);
 return true;
 });
}

export function communitiesUsingCompact(kindSlug: string) {
 return communities.filter((c) => informalFor(c.slug).some((row) => row.kind === kindSlug));
}

export function valuesFromCommunityForCompact(slug: string,
 kindSlug: string,): Partial<CompactValues> {
 const c = communities.find((row) => row.slug === slug);
 if (!c) return {};
 const match = informalFor(slug).find((row) => row.kind === kindSlug);
 return {
 communityName: c.name,
 place: `${c.location} (${c.region})`,
 country: c.country,
 localClause: match?.why ?? "",
 parties: `${c.name} resident circle\nGuest / newcomer / volunteer as named below`,
 };
}
