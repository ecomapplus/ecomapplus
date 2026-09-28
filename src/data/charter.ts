import { communities } from "./communities";
import { legalFormsFor } from "./legal-entities";
import { browseGroupForForm, formBrowseGroupOrder, guideForForm, type FormBrowseGroup } from "./legal-form-guides";

export type CharterValues = {
 communityName: string;
 city: string;
 state: string;
 country: string;
 purpose: string;
 founders: string;
 date: string;
 acres: string;
 memberCount: string;
 sharePrice: string;
 leaseYears: string;
 monthlyRent: string;
 annualDues: string;
 guarantee: string;
 parentCharity: string;
 lotCount: string;
 resaleCap: string;
 registeredOffice: string;
};

export const emptyCharterValues = (): CharterValues => ({
 communityName: "",
 city: "",
 state: "",
 country: "",
 purpose: "",
 founders: "",
 date: new Date().toISOString().slice(0, 10),
 acres: "",
 memberCount: "",
 sharePrice: "",
 leaseYears: "99",
 monthlyRent: "",
 annualDues: "",
 guarantee: "1",
 parentCharity: "",
 lotCount: "",
 resaleCap: "the original purchase price plus documented improvements, adjusted by a published formula",
 registeredOffice: "",
});

export type CharterField = {
 id: keyof CharterValues;
 label: string;
 hint?: string;
 type?: "text" | "textarea" | "number" | "date";
 placeholder?: string;
};

export const coreFields: CharterField[] = [
 { id: "communityName", label: "Community name", placeholder: "Oakridge Ecovillage", hint: "The legal name that will appear on the document." },
 { id: "city", label: "Town or place", placeholder: "County, nearest town" },
 { id: "state", label: "State / region / Land", placeholder: "Maine, Queensland, Navarre…" },
 { id: "purpose", label: "Purpose in one or two sentences", type: "textarea", placeholder: "To hold land in common and live by ecological covenants." },
 { id: "founders", label: "Founding members", type: "textarea", hint: "One name per line. They become the first directors, trustees, or members.", placeholder: "Ada Rivers\nBen Cole" },
 { id: "date", label: "Date of this instrument", type: "date" },
 { id: "acres", label: "Land (acres or hectares)", placeholder: "280 acres" },
 { id: "memberCount", label: "Intended members", placeholder: "40" },
];

export const extraFields: Record<string, CharterField[]> = {
 sharePrice: [{ id: "sharePrice", label: "Share or buy-in", placeholder: "€11,275 / $10,400" }],
 lease: [
 { id: "leaseYears", label: "Ground-lease term (years)", type: "number", placeholder: "99" },
 { id: "monthlyRent", label: "Ground rent", placeholder: "$25 / month" },
 ],
 dues: [{ id: "annualDues", label: "Annual dues or levy", placeholder: "$800–$1,100" }],
 guarantee: [{ id: "guarantee", label: "Member guarantee", placeholder: "€1" }],
 parent: [{ id: "parentCharity", label: "Parent charity name", placeholder: "Center for Sustainable and Cooperative Culture" }],
 lots: [{ id: "lotCount", label: "Number of lots or homesites", placeholder: "83" }],
 resale: [{ id: "resaleCap", label: "Resale formula", type: "textarea" }],
 office: [{ id: "registeredOffice", label: "Registered office", placeholder: "Street address" }],
};

export type CharterSection = { heading: string; body: string };

export type CharterDoc = {
 title: string;
 subtitle: string;
 form: string;
 country: string;
 languageNote?: string;
 sections: CharterSection[];
};

export type CharterKind = {
 form: string;
 slug: string;
 documentName: string;
 extras: (keyof typeof extraFields)[];
 filing: string;
};

export function formSlug(form: string) {
 return form
.toLowerCase()
.replace(/[()]/g, "")
.replace(/&/g, "and")
.replace(/[^a-z0-9]+/g, "-")
.replace(/^-+|-+$/g, "");
}

export const charterKinds: CharterKind[] = [
 { form: "501(c)(2)", slug: "501c2", documentName: "Articles of Incorporation (title-holding corporation)", extras: ["parent", "office"], filing: "State corporation filing + IRS Form 1024 for 501(c)(2)." },
 { form: "501(c)(3)", slug: "501c3", documentName: "Articles of Incorporation and Bylaws", extras: ["office"], filing: "State articles + IRS Form 1023 / 1023-EZ." },
 { form: "501(d) corporation", slug: "501d-corporation", documentName: "Articles of Incorporation and Common-Purse Agreement", extras: ["office"], filing: "State corporation + IRS 501(d) apostolic exemption." },
 { form: "Body corporate", slug: "body-corporate", documentName: "Community Management Statement", extras: ["lots", "dues"], filing: "Queensland BCCM Act community titles scheme." },
 { form: "Charitable trust", slug: "charitable-trust", documentName: "Deed of Charitable Trust", extras: ["office"], filing: "Charities register (NZ Charities Services or OSCR in Scotland)." },
 { form: "Community Benefit Society", slug: "community-benefit-society", documentName: "Society Rules", extras: ["sharePrice", "office"], filing: "FCA Mutuals Public Register (Co-operative and Community Benefit Societies Act 2014)." },
 { form: "Community finance", slug: "community-finance", documentName: "Community Share Offer and Loan Instrument", extras: ["sharePrice"], filing: "Often issued under a CBS or similar; not itself a land title." },
 { form: "Community land trust", slug: "community-land-trust", documentName: "Articles of Incorporation and Ground Lease", extras: ["lease", "resale", "office"], filing: "State nonprofit + recorded ground leases." },
 { form: "Company limited by guarantee", slug: "company-limited-by-guarantee", documentName: "Constitution of a Company Limited by Guarantee", extras: ["guarantee", "office"], filing: "Irish CRO (or Companies House in the UK)." },
 { form: "Concejo / recovered village", slug: "concejo-recovered-village", documentName: "Occupancy and Open-Council Charter", extras: [], filing: "A compact with the municipality / comarca." },
 { form: "Conservation covenant", slug: "conservation-covenant", documentName: "Conservation Easement / Covenant", extras: ["office"], filing: "Recorded against title; holder is often a land trust." },
 { form: "CSA", slug: "csa", documentName: "Community-Supported Agriculture Agreement", extras: ["sharePrice"], filing: "Contract among members; land sits in another entity." },
 { form: "Cultural association", slug: "cultural-association", documentName: "Estatutos de Asociación Cultural", extras: ["office"], filing: "Registro de Asociaciones (Spain)." },
 { form: "Federation of cooperatives", slug: "federation-of-cooperatives", documentName: "Federation Constitution", extras: ["sharePrice"], filing: "Italian cooperative register / internal constitution." },
 { form: "Freehold title", slug: "freehold-title", documentName: "Deed of Running Covenants", extras: ["lots"], filing: "Recorded on each freehold title." },
 { form: "Ground lease", slug: "ground-lease", documentName: "Residential Ground Lease", extras: ["lease", "resale"], filing: "Lease recorded against the land trust’s title." },
 { form: "Historic designation", slug: "historic-designation", documentName: "Preservation Covenant", extras: [], filing: "Recorded covenant; listing itself is a public act." },
 { form: "Homeowners association", slug: "homeowners-association", documentName: "Declaration of Covenants, Conditions and Restrictions", extras: ["dues", "lots"], filing: "Recorded CC&Rs + incorporated HOA." },
 { form: "Housing cooperative", slug: "housing-cooperative", documentName: "Cooperative Bylaws and Occupancy Agreement", extras: ["sharePrice", "office"], filing: "Co-op corporation + occupancy agreement per unit." },
 { form: "Income-sharing", slug: "income-sharing", documentName: "Common-Purse and Labour Agreement", extras: [], filing: "A contract that still needs a legal shell (501(d), e.V., association)." },
 { form: "Kibbutz", slug: "kibbutz", documentName: "Kibbutz Regulations", extras: ["office"], filing: "Registrar of Cooperative Societies (Israel) on state land." },
 { form: "Limited company", slug: "limited-company", documentName: "Articles of a Limited Company (not-for-profit)", extras: ["office"], filing: "Portuguese Comercial / similar companies register." },
 { form: "Limited-equity co-op", slug: "limited-equity-co-op", documentName: "Limited-Equity Housing Cooperative Bylaws", extras: ["sharePrice", "resale", "office"], filing: "State co-op + often 501(c)(3); resale formula in the bylaws." },
 { form: "LLC", slug: "llc", documentName: "Limited Liability Company Operating Agreement", extras: ["sharePrice", "office"], filing: "State LLC articles + this operating agreement." },
 { form: "Membership association", slug: "membership-association", documentName: "Association Constitution", extras: ["office"], filing: "May be unincorporated, or filed as a society / nonprofit." },
 { form: "Nonprofit foundation", slug: "nonprofit-foundation", documentName: "Foundation Charter", extras: ["office"], filing: "Civil-law foundation or equivalent public-benefit body." },
 { form: "Nonprofit gGmbH", slug: "nonprofit-ggmbh", documentName: "Gesellschaftsvertrag (gGmbH)", extras: ["sharePrice", "office"], filing: "German Handelsregister + Finanzamt Gemeinnützigkeit." },
 { form: "NPO", slug: "npo", documentName: "Articles of a Specified Nonprofit Corporation", extras: ["office"], filing: "Japanese NPO law (特定非営利活動法人)." },
 { form: "Property trust", slug: "property-trust", documentName: "Declaration of Property Trust", extras: ["office"], filing: "Trust deed; may sit under a charity or CBS." },
 { form: "Registered association", slug: "registered-association", documentName: "Vereinssatzung (e.V.)", extras: ["office"], filing: "German Vereinsregister at the Amtsgericht." },
 { form: "Religious society", slug: "religious-society", documentName: "Covenant of the Religious Society", extras: ["office"], filing: "Religious nonprofit / society filing in the home state." },
 { form: "SCIO", slug: "scio", documentName: "SCIO Constitution", extras: ["office"], filing: "OSCR (Scottish Charity Regulator)." },
 { form: "Self-governing institution", slug: "self-governing-institution", documentName: "Charter of a Self-Governing Institution", extras: ["office"], filing: "Icelandic sjálfseignarstofnun." },
 { form: "Sole proprietorship", slug: "sole-proprietorship", documentName: "Income-Pooling Agreement among Sole Proprietors", extras: [], filing: "Tax registrations stay individual; this agreement is private." },
 { form: "State land", slug: "state-land", documentName: "Occupancy and Use Agreement on Public Land", extras: ["lease"], filing: "Agreement with the state / regional title holder." },
 { form: "Statutory foundation", slug: "statutory-foundation", documentName: "Internal Rules under a Statutory Foundation", extras: ["office"], filing: "Created by statute (e.g. Auroville Foundation Act); this is the residents’ rulebook." },
 { form: "Supporting foundation", slug: "supporting-foundation", documentName: "Articles of a Supporting Foundation", extras: ["parent", "office"], filing: "Separate 501(c)(3) or equivalent beside the village." },
 { form: "Trading company", slug: "trading-company", documentName: "Community Enterprise Charter", extras: ["office"], filing: "Company, co-op, or internal department, the engine, not the title." },
 { form: "Unincorporated community", slug: "unincorporated-community", documentName: "Unincorporated Community Agreement", extras: [], filing: "A private compact. Land must sit in a trust, company, or named persons." },
];

export function kindBySlug(slug: string) {
 return charterKinds.find((k) => k.slug === slug);
}

export function kindByForm(form: string) {
 return charterKinds.find((k) => k.form === form);
}

export function communitiesUsing(form: string) {
 return communities.filter((c) => legalFormsFor(c.slug).includes(form));
}

export function countriesUsing(form: string) {
 return Array.from(new Set(communitiesUsing(form).map((c) => c.country))).sort((a, b) =>
 a.localeCompare(b),);
}

export function fieldsFor(kind: CharterKind): CharterField[] {
 const extra = kind.extras.flatMap((key) => extraFields[key] ?? []);
 const seen = new Set<string>();
 return [...coreFields, ...extra].filter((f) => {
 if (seen.has(f.id)) return false;
 seen.add(f.id);
 return true;
 });
}

export function valuesFromCommunity(slug: string): Partial<CharterValues> {
 const c = communities.find((row) => row.slug === slug);
 if (!c) return {};
 const loc = c.location.split(",")[0]?.trim() ?? c.location;
 return {
 communityName: c.name,
 city: loc,
 state: c.region.split(",")[0]?.trim() ?? "",
 country: c.country,
 purpose: c.summary,
 acres: c.acresLabel,
 memberCount: String(c.members),
 registeredOffice: c.location,
 };
}

export function groupedKinds() {
 return formBrowseGroupOrder
.map((label) => ({
 label,
 kinds: charterKinds
.filter((k) => browseGroupForForm(k.form) === label)
.sort((a, b) => a.form.localeCompare(b.form)),
 }))
.filter((g) => g.kinds.length > 0);
}

export function guide(form: string) {
 return guideForForm(form);
}

export type { FormBrowseGroup };
