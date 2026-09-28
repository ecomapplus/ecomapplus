import {
 type CharterDoc,
 type CharterKind,
 type CharterSection,
 type CharterValues,
 communitiesUsing,
 countriesUsing,
} from "./charter";
import { jurisdictionFor, statuteFor } from "./charter-regions";

function v(values: CharterValues, key: keyof CharterValues, fallback: string) {
 const raw = (values[key] || "").trim();
 return raw || fallback;
}

function nameOf(values: CharterValues) {
 return v(values, "communityName", "«Community Name»");
}

function placeOf(values: CharterValues) {
 const city = v(values, "city", "«Place»");
 const state = (values.state || "").trim();
 const country = v(values, "country", "«Country»");
 return state ? `${city}, ${state}, ${country}`: `${city}, ${country}`;
}

function lawOf(values: CharterValues) {
 const country = v(values, "country", "«Country»");
 const state = (values.state || "").trim();
 const table: Record<string, string> = {
 "United States": state
 ? `the laws of the State of ${state} and the United States of America`
: "the laws of the United States of America and the State in which the registered office is located",
 "United Kingdom": "the law of Scotland and, where it applies, the law of the United Kingdom",
 Ireland: "the laws of Ireland",
 Australia: state
 ? `the laws of ${state}, Australia`
: "the laws of the Commonwealth of Australia and the State in which the land is situated",
 Germany: "the laws of the Federal Republic of Germany",
 "New Zealand": "the laws of New Zealand",
 Spain: "the laws of Spain and, where they apply, the laws of the relevant Autonomous Community",
 Portugal: "the laws of Portugal",
 Iceland: "the laws of Iceland",
 India: "the laws of India",
 Israel: "the laws of the State of Israel",
 Japan: "the laws of Japan",
 Denmark: "the laws of Denmark",
 Italy: "the laws of Italy",
 Colombia: "the laws of the Republic of Colombia",
 };
 return table[country] ?? `the laws of ${country}`;
}

function foundersOf(values: CharterValues) {
 const lines = v(values, "founders", "«Founding Member»")
.split(/\n|,/)
.map((s) => s.trim())
.filter(Boolean);
 if (lines.length === 0) return "«Founding Member»";
 if (lines.length === 1) return lines[0];
 if (lines.length === 2) return `${lines[0]} and ${lines[1]}`;
 return `${lines.slice(0, -1).join(", ")}, and ${lines[lines.length - 1]}`;
}

function founderList(values: CharterValues) {
 return v(values, "founders", "«Founding Member»")
.split(/\n|,/)
.map((s) => s.trim())
.filter(Boolean);
}

function purposeOf(values: CharterValues) {
 return v(values,
 "purpose",
 "to hold land, buildings, and a common life for an ecovillage, and to practice ecological, social, and economic sustainability",);
}

function dateOf(values: CharterValues) {
 const raw = v(values, "date", new Date().toISOString().slice(0, 10));
 const d = new Date(raw);
 if (Number.isNaN(d.getTime())) return raw;
 return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function acresOf(values: CharterValues) {
 return v(values, "acres", "«the land described in the schedule»");
}

function membersOf(values: CharterValues) {
 return v(values, "memberCount", "the number of persons the community can house in good faith");
}

function officeOf(values: CharterValues) {
 return v(values, "registeredOffice", placeOf(values));
}

function countryOf(values: CharterValues) {
 return v(values, "country", "«Country»");
}

function signatures(values: CharterValues): CharterSection {
 const names = founderList(values);
 const lines =
 names.length > 0
 ? names.map((n) => `${n}\nSignature: ________________________ Date: ________`).join("\n\n")
: "«Founding Member»\nSignature: ________________________ Date: ________";
 return {
 heading: "Execution",
 body: `IN WITNESS WHEREOF the undersigned have executed this instrument on ${dateOf(values)}, at ${placeOf(values)}.\n\n${lines}\n\nWitness / notary (as the filing requires): ________________________ Date: ________`,
 };
}

function backMatter(kind: CharterKind, values: CharterValues): CharterSection[] {
 const country = countryOf(values);
 const statute = statuteFor(kind.form, country, values.state);
 const desk = jurisdictionFor(country)?.filingDesk;
 return [
 {
 heading: "Meetings, notice, and records",
 body: `Meetings of members or of the board (whichever governs) shall be called on not less than seven days’ written notice, or three days in a genuine emergency. A quorum is a majority of those entitled to vote unless a higher number is stated above. Minutes shall be kept. Notices may be given by hand, post, or email to the address last given by the person.`,
 },
 {
 heading: "Amendment",
 body: `This instrument may be amended in writing by the majority (or supermajority) stated in the governance articles. Purpose clauses, asset locks, charitable constraints, resale formulae, and conservation restrictions may not be removed except as ${lawOf(values)} and the filing statute expressly allow.`,
 },
 {
 heading: "Governing law and filing",
 body: `This instrument is governed by ${lawOf(values)}. Filing and recording: ${statute}${desk ? ` Lodge with ${desk}.`: ""} A local solicitor, notary, or licensed attorney must adapt, translate if required, and file the real document. This draft does not create a legal person by itself.`,
 },
 {
 heading: "Schedule A, Land",
 body: `The land of this instrument is ${acresOf(values)}, situated at ${placeOf(values)}. Before filing, attach a surveyed description, title reference, and plan. If occupation is by lease or licence, attach that instrument as Schedule C.`,
 },
 {
 heading: "Schedule B, First members / directors",
 body: `The first members, directors, trustees, or convenors are:\n\n${
 founderList(values)
.map((n, i) => `${i + 1}. ${n}`)
.join("\n") || "«Founding Member»"
 }\n\nIntended community size: ${membersOf(values)}. Registered office: ${officeOf(values)}.`,
 },
 ];
}

function disclaimer(kind: CharterKind, country: string) {
 const desk = jurisdictionFor(country)?.filingDesk;
 return `Working draft only, not legal advice, not a filed instrument, and not a substitute for a solicitor, notary, or licensed attorney admitted in ${country || "the relevant jurisdiction"}. ${kind.filing}${desk ? ` Typical desk: ${desk}.`: ""} Have a local practitioner adapt, translate if required, and file this. ecocommunitymap.com is a reference atlas.`;
}

function languageNote(country: string) {
 return jurisdictionFor(country)?.nativeNote;
}

function wrap(kind: CharterKind,
 values: CharterValues,
 title: string,
 sections: CharterSection[],): CharterDoc {
 const country = v(values, "country", countriesUsing(kind.form)[0] ?? "«Country»");
 return {
 title,
 subtitle: `${kind.documentName} · ${nameOf(values)} · ${country}`,
 form: kind.form,
 country,
 languageNote: languageNote(country),
 sections: [
 {
 heading: "How to use this draft",
 body: disclaimer(kind, country),
 },
      ...sections,
      ...backMatter(kind, values),
 signatures(values),
 ],
 };
}

function examplesLine(form: string) {
 const names = communitiesUsing(form)
.map((c) => c.name)
.slice(0, 4);
 if (!names.length) return "";
 return ` Modelled on how this form is used at ${names.join("; ")}.`;
}

function housingCoopSections(values: CharterValues, ctx: Ctx): CharterSection[] {
 const { N, P, L, F, U, A, M, D, O, ex } = ctx;
 const country = countryOf(values);
 const share = v(values, "sharePrice", "«share price»");
 const regional: Record<string, CharterSection[]> = {
 "United States": [
 {
 heading: "Article I, Name and statute",
 body: `${N} Housing Cooperative (the “Co-op”) is a cooperative corporation at ${P}, formed under the cooperative or nonprofit corporation law of the State named in Schedule B.`,
 },
 {
 heading: "Article II, Purpose",
 body: `To own and operate housing (and, where it holds title, land of ${A}) on a cooperative basis, and ${U}. The Co-op is not a vehicle for market speculation in homes.`,
 },
 {
 heading: "Article III, Shares and occupancy",
 body: `A person becomes a member by buying a share of ${share} (or the then-published amount), being accepted by the members, and signing a proprietary / occupancy lease. The share carries the right to occupy a unit or homesite, not a transferable freehold lot. Intended size: ${M}. One member, one vote. Optional IRC § 216 treatment is a tax question for counsel, not a promise of this draft.`,
 },
 ],
 Germany: [
 {
 heading: "§ 1 Name and form",
 body: `${N} is organised as a registered cooperative (eingetragene Genossenschaft) or, if the founders so elect, as occupancy inside ${N} e.V., at ${P}.`,
 },
 {
 heading: "§ 2 Purpose",
 body: `Promotion of the members through cooperative housing and ${U}, including stewardship of ${A}. The cooperative is not a property-development company.`,
 },
 {
 heading: "§ 3 Members and shares",
 body: `Each member holds at least one share of ${share}. One member, one vote (GenG). Occupancy of a dwelling is by a separate Nutzungsvertrag. Intended members: ${M}. First members: ${F}.`,
 },
 ],
 Denmark: [
 {
 heading: "§ 1 Andelsboligforening",
 body: `${N} is a cooperative housing association (andelsboligforening) at ${P}.`,
 },
 {
 heading: "§ 2 Purpose",
 body: `To own the buildings (and, if title is held, ${A}) and to allot dwellings to members by share, and ${U}.`,
 },
 {
 heading: "§ 3 Shares",
 body: `The price of a share is ${share}, adjusted only as the general meeting’s valuation rules allow, not by an open housing market. Intended members: ${M}.`,
 },
 ],
 Australia: [
 {
 heading: "1. Name",
 body: `${N} Co-operative Limited is formed under the Co-operatives National Law as adopted in the State, at ${P}.`,
 },
 {
 heading: "2. Objects",
 body: `To provide housing to members on a cooperative basis, to steward ${A}, and ${U}. A share is not a lot in a community-titles scheme unless a separate CMS says so.`,
 },
 {
 heading: "3. Membership",
 body: `A member holds a share of ${share} and a right of occupancy. One member, one vote. Intended size: ${M}. First directors: ${F}.`,
 },
 ],
 "United Kingdom": [
 {
 heading: "Name and registered office",
 body: `${N} Limited, a co-operative society (or community benefit society, if so registered). Office: ${O}.`,
 },
 {
 heading: "Objects",
 body: `To carry on housing for members on a cooperative basis, to hold ${A} at ${P}, and ${U}.`,
 },
 {
 heading: "Shares",
 body: `Withdrawable or transferable shares of ${share} as the rules state. One member, one vote, regardless of shareholding. Intended members: ${M}.`,
 },
 ],
 "New Zealand": [
 {
 heading: "1. Name",
 body: `${N} Housing Cooperative, at ${P}. Occupancy is by share, not a unit title.`,
 },
 {
 heading: "2. Objects",
 body: `To house members cooperatively, to steward ${A}, and ${U}.`,
 },
 {
 heading: "3. Shares",
 body: `Share price ${share}. Transfers only to a person the co-op accepts. Intended members: ${M}.`,
 },
 ],
 };

 const head = regional[country] ?? [
 {
 heading: "Article I, Name",
 body: `${N} Housing Cooperative (the “Co-op”) is formed at ${P}.`,
 },
 {
 heading: "Article II, Purpose",
 body: `To own and operate housing (and, where it holds title, land of ${A}) on a cooperative basis, and ${U}.`,
 },
 {
 heading: "Article III, Membership",
 body: `A person becomes a member by buying a share of ${share}, being accepted by the members, and signing an occupancy agreement. Intended size: ${M}. One member, one vote.`,
 },
 ];

 return [
      ...head,
 {
 heading: "Board and meetings",
 body: `Initial board: ${F}. Annual meeting. Notice. Minutes. Members may recall directors as these rules provide.`,
 },
 {
 heading: "Finance and transfer",
 body: `Carrying charges cover operations, tax, insurance, and reserves. Surplus is not distributed as speculative profit. Shares transfer only to a person the Co-op accepts, at a price the rules allow.`,
 },
 {
 heading: "Land lock",
 body: `If the land is held by a community land trust or charity, this co-op owns the buildings only. If the co-op owns land, it shall not subdivide for private lots without a membership supermajority. Dated ${D}. Law: ${L}.${ex}`,
 },
 ];
}

function cltSections(values: CharterValues, ctx: Ctx): CharterSection[] {
 const { N, P, L, F, U, A, M, D, O, ex } = ctx;
 const country = countryOf(values);
 const term = v(values, "leaseYears", "99");
 const rent = v(values, "monthlyRent", "a fee set by the board");
 const cap = v(values, "resaleCap", "a formula that preserves affordability");
 const shell =
 country === "United Kingdom"
 ? `${N} Community Land Trust is a community benefit society or company limited by guarantee at ${P}, with a statutory-style asset lock.`
: country === "Australia"
 ? `${N} Community Land Trust is a company limited by guarantee (or a state co-operative) at ${P}, holding Torrens title subject to a restrictive covenant.`
: country === "New Zealand"
 ? `${N} Community Land Trust is a charitable trust or incorporated society at ${P}, holding land for occupation by licence or lease.`
: `${N} Community Land Trust is a nonprofit corporation at ${P}.`;
 return [
 { heading: "Article I, Name and place", body: shell },
 {
 heading: "Article II, Purpose",
 body: `To acquire and hold land in perpetuity for an ecovillage; to remove that land from the speculative market; to lease residential plots on a ground lease; and ${U}.`,
 },
 {
 heading: "Article III, Land",
 body: `The Trust holds ${A}. It may not sell the land except to another community land trust or charity with the same lock, and then only by supermajority of the board and of the lessees.`,
 },
 {
 heading: "Article IV, Ground leases",
 body: `The Trust shall grant residential ground leases of ${term} years, renewable. Lessees own (or hold) the improvements and pay ground rent of ${rent}. Resale of improvements is limited to ${cap}.`,
 },
 {
 heading: "Article V, Board",
 body: `The board shall include lessees, persons from the wider community, and persons skilled in land stewardship. Initial directors: ${F}. Intended residents: ${M}. Office: ${O}.`,
 },
 {
 heading: "Article VI, Covenants",
 body: `Every lease shall bind the lessee to ecological building and land-use rules adopted by the Trust. Breach that is not cured is grounds for termination of the lease, not for forfeiture of a lawfully owned building without compensation under the formula. Law: ${L}. Dated ${D}.${ex}`,
 },
 {
 heading: "Article VII, Dissolution",
 body: `Assets on dissolution go to another community land trust or public-benefit body committed to permanently affordable, ecologically stewarded land.`,
 },
 ];
}

function conservationSections(values: CharterValues, ctx: Ctx): CharterSection[] {
 const { N, P, L, U, A, D, ex } = ctx;
 const country = countryOf(values);
 const noun =
 country === "United States" || country === "United Kingdom" ? "Easement / Covenant": "Covenant";
 return [
 {
 heading: `Grant of conservation ${noun.toLowerCase()}`,
 body: `This Conservation ${noun} is granted ${D} by the owner of ${A} at ${P} to the Holder named in the schedule, for ${N}.`,
 },
 {
 heading: "1. Purpose",
 body: `To protect ecological, agricultural, and community values in perpetuity, consistent with ${U}.`,
 },
 {
 heading: "2. Restrictions",
 body: `The owner shall not subdivide, mine, or clear-cut; shall not apply prohibited chemicals if this is an organic covenant; and shall not build except in the building envelope the plan describes.`,
 },
 {
 heading: "3. Affirmative duties",
 body: `The owner shall steward water, soil, and habitat, and allow reasonable monitoring by the Holder.`,
 },
 {
 heading: "4. Runs with the land",
 body: `This instrument binds successors. It is not a public-access easement unless the schedule says so. Record it on title. Law: ${L}.${ex}`,
 },
 ];
}

function charitableTrustSections(values: CharterValues, ctx: Ctx): CharterSection[] {
 const { N, P, L, F, U, A, D, O, ex } = ctx;
 const country = countryOf(values);
 const register =
 country === "New Zealand"
 ? "The Trust shall be registered with Charities Services under the Charities Act 2005."
: country === "United Kingdom"
 ? "The Trust (or a SCIO/CIO substituted for it) shall be registered with OSCR or the Charity Commission."
: country === "Australia"
 ? "If a charity, the Trust shall register with the Australian Charities and Not-for-profits Commission."
: "If tax exemption is sought, the Trust shall make the filing the revenue authority requires.";
 return [
 {
 heading: "This Deed",
 body: `THIS DEED OF TRUST is made ${D} by ${F} (the Settlor / original Trustees) to establish ${N} Charitable Trust at ${P}.`,
 },
 { heading: "1. Name and office", body: `The Trust is called ${N} Charitable Trust. Office: ${O}.` },
 {
 heading: "2. Purpose",
 body: `The Trust holds property exclusively for charitable purposes, namely ${U}, for the public benefit.`,
 },
 {
 heading: "3. Property",
 body: `The Trustees shall hold ${A} and any later gifts. They may permit occupation by persons furthering the purpose, on licence or tenancy, without creating private title.`,
 },
 {
 heading: "4. Trustees",
 body: `There shall be at least three trustees. Original trustees: ${F}. A trustee must not profit except for reasonable out-of-pocket expenses and any office the charity law allows.`,
 },
 {
 heading: "5. Application of income",
 body: `Income is applied to the purpose. The Trust shall not distribute capital or income for private benefit of residents as if they were shareholders. ${register}`,
 },
 {
 heading: "6. Amendment and winding up",
 body: `This deed may be amended only in ways that preserve exclusive charitable purpose. On winding up, remaining assets go to another charity with a similar purpose. Law: ${L}.${ex}`,
 },
 ];
}

type Ctx = {
 N: string;
 P: string;
 L: string;
 F: string;
 U: string;
 A: string;
 M: string;
 D: string;
 O: string;
 ex: string;
};

export function generateCharter(kind: CharterKind, values: CharterValues): CharterDoc {
 const N = nameOf(values);
 const P = placeOf(values);
 const L = lawOf(values);
 const F = foundersOf(values);
 const U = purposeOf(values);
 const A = acresOf(values);
 const M = membersOf(values);
 const D = dateOf(values);
 const O = officeOf(values);
 const ex = examplesLine(kind.form);
 const form = kind.form;
 const ctx: Ctx = { N, P, L, F, U, A, M, D, O, ex };

 const byForm: Record<string, () => CharterSection[]> = {
 "501(c)(3)": () => [
 { heading: "Article I, Name", body: `The name of the corporation is ${N}, Inc. (the “Corporation”).` },
 { heading: "Article II, Duration", body: `The Corporation shall have perpetual existence.` },
 {
 heading: "Article III, Purpose",
 body: `The Corporation is organized exclusively for charitable, educational, and scientific purposes within the meaning of section 501(c)(3) of the Internal Revenue Code, including ${U}. No part of the net earnings shall inure to the benefit of any private shareholder or individual. The Corporation shall not, except to an insubstantial degree, engage in activities that do not further those purposes.`,
 },
 {
 heading: "Article IV, Powers",
 body: `The Corporation may acquire, hold, and convey real and personal property (including ${A} at ${P}); receive gifts, grants, and devises; operate educational programs, a visitor service, and related enterprises whose surplus is applied to the purpose; and do all things a nonprofit corporation may do under ${L}.`,
 },
 {
 heading: "Article V, Membership",
 body: `The Corporation may have members as provided in the Bylaws. Membership in an ecovillage sense (the right to live on the land) is not the same as corporate membership and shall be set out in a separate residency or lease instrument. Intended community size: ${M}.`,
 },
 {
 heading: "Article VI, Directors",
 body: `Affairs shall be managed by a board of directors of at least three persons. The initial directors are ${F}. Directors shall serve without private inurement. Conflicts shall be disclosed and the interested director shall not vote.`,
 },
 {
 heading: "Article VII, Land",
 body: `Land held by the Corporation is held for the purpose, not as a speculative asset. The board shall not sell, mortgage, or encumber the principal land except by a supermajority set in the Bylaws and, where a conservation easement exists, with the easement holder’s consent.`,
 },
 {
 heading: "Article VIII, Dissolution",
 body: `Upon dissolution, after payment of liabilities, remaining assets shall be distributed to one or more organizations organized and operated exclusively for 501(c)(3) purposes, or to a government for a public purpose, and shall not be distributed to members, directors, or officers.`,
 },
 { heading: "Article IX, Registered office", body: `The registered office is ${O}.` },
 { heading: "Article X, Incorporators", body: `The incorporators are ${F}. This instrument is dated ${D}.${ex}` },
 {
 heading: "Bylaws (summary to attach)",
 body: `Adopt bylaws covering: meetings and notice; consensus or specified majority; officers; fiscal year; indemnification to the extent permitted by law; amendment by the board (or members, if any); and a conflict-of-interest policy consistent with IRS expectations.`,
 },
 ],
 "501(c)(2)": () => [
 { heading: "Article I, Name", body: `The name of the corporation is ${N} Title Holding Corporation (the “Corporation”).` },
 {
 heading: "Article II, Purpose",
 body: `The Corporation is organized exclusively as a title-holding corporation under section 501(c)(2) of the Internal Revenue Code, to hold title to property, collect income therefrom, and turn over the entire amount, less expenses, to its parent: ${v(values, "parentCharity", "«Parent 501(c)(3)»")}. It shall not engage in any business other than that of holding title and collecting income.`,
 },
 {
 heading: "Article III, Parent",
 body: `The parent organization is ${v(values, "parentCharity", "«Parent 501(c)(3)»")}, a corporation described in section 501(c)(3). All net income shall be paid over to the parent not less often than annually.`,
 },
 {
 heading: "Article IV, Property",
 body: `The Corporation may hold ${A} at ${P} and improvements, and may grant residential ground leases to persons participating in the parent’s program. It shall not distribute assets to private persons except as reasonable compensation for services.`,
 },
 { heading: "Article V, Directors", body: `The initial directors are ${F}. A majority shall be appointed by the parent.` },
 {
 heading: "Article VI, Dissolution",
 body: `On dissolution, remaining assets shall be transferred to the parent, or if the parent has ceased to exist, to a 501(c)(3) with a similar purpose.`,
 },
 { heading: "Article VII, Office and law", body: `Registered office: ${O}. Governed by ${L}. Dated ${D}.${ex}` },
 ],
 "501(d) corporation": () => [
 { heading: "Article I, Name", body: `The name of the corporation is ${N}, Inc.` },
 {
 heading: "Article II, Apostolic purpose",
 body: `The Corporation is organized as a communal apostolic organization within the meaning of section 501(d) of the Internal Revenue Code. Members live and work in common, hold a common treasury, and ${U}.`,
 },
 {
 heading: "Article III, Common purse",
 body: `All income from labour, enterprises, gifts, and produce shall be paid into a common purse. Members receive housing, food, medical care as the community can provide, and a personal allowance set by the membership. No member has a transferable share of the corpus.`,
 },
 {
 heading: "Article IV, Membership",
 body: `Membership is by acceptance of the community after a visitor and provisional period. Intended size: ${M}. A member who leaves has no claim on land or accumulated surplus except personal effects and any written severance the membership has adopted.`,
 },
 {
 heading: "Article V, Labour and enterprises",
 body: `Members contribute labour to the community’s businesses and household. Enterprises exist to support the common life, not to pay private dividends.`,
 },
 {
 heading: "Article VI, Land",
 body: `The Corporation may hold ${A} at ${P}. Land is not subdivided among members.`,
 },
 {
 heading: "Article VII, Tax reporting",
 body: `The Corporation shall file as a 501(d) organization. Each member shall report their allocated share of communal income as required by the Code. This draft does not determine any person’s tax.`,
 },
 { heading: "Article VIII, Directors and law", body: `Initial directors: ${F}. Office: ${O}. Law: ${L}. Dated ${D}.${ex}` },
 {
 heading: "Article IX, Dissolution",
 body: `On winding up, after liabilities, remaining assets shall go to a like communal or charitable body and not be divided as profits.`,
 },
 ],
 "Community land trust": () => cltSections(values, ctx),
 "Ground lease": () => [
 {
 heading: "Parties",
 body: `This Ground Lease is made ${D} between ${N} (Landlord / land trust) and the undersigned Lessee, for a plot on ${A} at ${P}.`,
 },
 {
 heading: "1. Term",
 body: `The term is ${v(values, "leaseYears", "99")} years beginning on the date of this lease, renewable on the same terms unless the Lessee is in uncured material default.`,
 },
 {
 heading: "2. Rent",
 body: `Lessee shall pay ground rent of ${v(values, "monthlyRent", "«rent»")} as the Landlord’s board may adjust by published formula, not by market speculation in the dirt.`,
 },
 {
 heading: "3. Improvements",
 body: `Lessee may build and own a dwelling and permitted outbuildings. Improvements remain the Lessee’s property, subject to the resale formula: ${v(values, "resaleCap", "affordable resale to another qualified member")}.`,
 },
 {
 heading: "4. Use",
 body: `The plot shall be used as a primary residence in accordance with the community’s ecological covenants and ${U}. No speculative holding of vacant plots.`,
 },
 {
 heading: "5. Transfer",
 body: `The lease may be assigned only to a person accepted as a resident by the Landlord, at a price not exceeding the formula. The land itself is not sold.`,
 },
 {
 heading: "6. Default and termination",
 body: `Material breach, after notice and a cure period of not less than 30 days (90 days for building-code work), may end the lease. The Landlord shall pay for improvements per the formula.`,
 },
 { heading: "7. Law", body: `This lease is governed by ${L}. Recorded against the Landlord’s title.${ex}` },
 ],
 "Limited-equity co-op": () => [
 { heading: "Article I, Name", body: `The name of the cooperative corporation is ${N} Housing Cooperative.` },
 {
 heading: "Article II, Purpose",
 body: `To provide permanently affordable housing on a cooperative basis at ${P}, and ${U}. Shares shall not be a vehicle for market speculation.`,
 },
 {
 heading: "Article III, Shares",
 body: `Each membership is represented by a share. The initial share price is ${v(values, "sharePrice", "«share price»")}. On transfer, the co-op (or a departing member with co-op approval) shall sell the share for not more than ${v(values, "resaleCap", "the limited-equity formula")}.`,
 },
 {
 heading: "Article IV, Occupancy",
 body: `A member is entitled to occupy a designated unit under a proprietary lease. Intended members: ${M}. Subletting is limited as the board provides.`,
 },
 {
 heading: "Article V, Land",
 body: `If the land is held by a community land trust, this co-op owns the buildings only. If the co-op owns land, it shall not subdivide for private lots without a membership supermajority.`,
 },
 {
 heading: "Article VI, Governance",
 body: `One member, one vote. Initial board: ${F}. Meetings by notice. Decisions by the majority or consensus rule adopted in these bylaws.`,
 },
 { heading: "Article VII, Carrying charges", body: `Members pay carrying charges for tax, insurance, maintenance, and reserves.` },
 { heading: "Article VIII, Office and law", body: `Office: ${O}. Law: ${L}. Dated ${D}.${ex}` },
 {
 heading: "Article IX, Dissolution",
 body: `On dissolution, after liabilities and limited-equity return of shares, remainder goes to a like affordable-housing nonprofit or land trust, not to members as profit.`,
 },
 ],
 LLC: () => [
 { heading: "1. Formation", body: `This Operating Agreement of ${N}, LLC is entered ${D} by ${F}, the initial members.` },
 {
 heading: "2. Purpose",
 body: `The Company exists to hold land and improvements at ${P} (${A}) and ${U}. It is a closely held residential / land company, not a public investment vehicle.`,
 },
 {
 heading: "3. Interests",
 body: `Membership interests are held by the persons named above (and later admitted members). Capital contributions: ${v(values, "sharePrice", "as set out in a contribution schedule")}. Interests are not transferable except as this Agreement allows.`,
 },
 {
 heading: "4. Management",
 body: `The Company is member-managed unless the members elect a manager. Ordinary decisions by consensus or the majority specified here; sale of the land requires unanimous consent.`,
 },
 {
 heading: "5. Mission lock",
 body: `Members agree that the land’s value for sale purposes shall not be treated as a personal windfall. A departing member is bought out on a formula the members adopt in writing (improvements, not speculative dirt), unless all remaining members agree otherwise.`,
 },
 {
 heading: "6. Residential use",
 body: `Residence on Company land is by membership and any house rules attached as Exhibit A. Intended residents: ${M}.`,
 },
 { heading: "7. Tax and law", body: `Unless it elects otherwise, the Company is taxed as a partnership. Governed by ${L}. Office: ${O}.${ex}` },
 {
 heading: "8. Dissolution",
 body: `The Company dissolves on unanimous written consent or as statute requires. Winding up shall honour any recorded conservation easement.`,
 },
 ],
 "Housing cooperative": () => housingCoopSections(values, ctx),
 "Homeowners association": () => [
 {
 heading: "Declaration",
 body: `This Declaration of Covenants, Conditions and Restrictions is made ${D} by ${F} (Declarant) for ${N} at ${P}, covering ${A}, intended for ${v(values, "lotCount", M)} homesites.`,
 },
 {
 heading: "Article I, Association",
 body: `Every owner of a homesite is a member of ${N} Community Association. Membership appurtenants to the deed and cannot be separated from it.`,
 },
 {
 heading: "Article II, Common land",
 body: `Roads, shared buildings, forest, and infrastructure are common elements owned or maintained by the Association. They are not for partition.`,
 },
 {
 heading: "Article III, Assessments",
 body: `The Association shall levy assessments of approximately ${v(values, "annualDues", "an amount set by the membership")} per person or per site, plus special assessments for capital work.`,
 },
 {
 heading: "Article IV, Use and building",
 body: `Sites shall be used consistently with ${U}. Building, trees, water, and waste are governed by rules the Association adopts. No site shall be used solely as a speculative holding.`,
 },
 {
 heading: "Article V, Governance",
 body: `A council or board, initially ${F}, administers. Voting is as the bylaws provide (often one site, one vote, with resident members).`,
 },
 {
 heading: "Article VI, Enforcement and amendment",
 body: `Covenants run with the land. Amendment requires the majority specified here (commonly two-thirds of sites) and shall be recorded. Law: ${L}.${ex}`,
 },
 ],
 "Body corporate": () => [
 {
 heading: "Community Management Statement",
 body: `This Community Management Statement for ${N} Community Titles Scheme is intended for recording under the Body Corporate and Community Management Act 1997 (Qld), for land at ${P} (${A}), with ${v(values, "lotCount", "«number»")} lots.`,
 },
 {
 heading: "1. Scheme",
 body: `Lots are freehold. Common property (bush, roads, water, waste, community buildings) is owned by the body corporate. Every lot owner is a member.`,
 },
 {
 heading: "2. By-laws",
 body: `By-laws shall implement ${U}: building covenants, vegetation, water tanks or recycled water, animals, and quiet enjoyment. They bind successors.`,
 },
 {
 heading: "3. Contributions",
 body: `Administrative and sinking fund levies of about ${v(values, "annualDues", "an amount set at each AGM")} are raised on lot entitlement.`,
 },
 {
 heading: "4. Committee",
 body: `A committee, initially including ${F}, administers between general meetings. Records are open to owners.`,
 },
 {
 heading: "5. Development",
 body: `Further stages, if any, shall be added only as the Act allows. Intended households: ${M}.`,
 },
 { heading: "6. Law", body: `Governed by ${L}. Dated ${D}.${ex}` },
 ],
 "Freehold title": () => [
 {
 heading: "Deed of Running Covenants",
 body: `This Deed is made ${D} by ${N} / the undersigned owners of lots at ${P}, to bind ${v(values, "lotCount", "each")} freehold lot on ${A}.`,
 },
 {
 heading: "1. Covenants that run",
 body: `The owner of each lot covenants, for themselves and successors, to ${U}; to build and live by the attached schedule of ecological and community rules; and not to subdivide except as the schedule allows.`,
 },
 {
 heading: "2. Benefit",
 body: `The covenants are for the benefit of every other lot and of any body corporate, village company, or association named in the schedule.`,
 },
 {
 heading: "3. Enforcement",
 body: `Any benefited owner or the community body may enforce. A breach does not terminate title; remedies are injunction, damages, and costs as a court allows.`,
 },
 { heading: "4. Law", body: `Record this deed on each title. Law: ${L}.${ex}` },
 ],
 "Charitable trust": () => charitableTrustSections(values, ctx),
 SCIO: () => [
 { heading: "Name", body: `The organisation is ${N}, a Scottish Charitable Incorporated Organisation.` },
 { heading: "Principal office", body: `${O}.` },
 {
 heading: "Purposes",
 body: `The SCIO’s purposes are ${U}, carried on for the public benefit, including education and the stewardship of ${A} at ${P}.`,
 },
 {
 heading: "Powers",
 body: `The SCIO may hold land, employ staff, run courses, and do anything a SCIO may do under the Charities and Trustee Investment (Scotland) Act 2005, provided it furthers the purposes.`,
 },
 {
 heading: "Charity trustees",
 body: `Initial charity trustees: ${F}. They manage the SCIO and must comply with charity trustee duties. Intended community around the SCIO: ${M}.`,
 },
 {
 heading: "Members",
 body: `The constitution shall state whether the SCIO is a single-tier (trustees = members) or two-tier body. Residential occupation of land is by separate agreement.`,
 },
 {
 heading: "Application of assets",
 body: `Assets are applied only to the purposes. On winding up they go to another charity. Law: ${L}. Dated ${D}.${ex}`,
 },
 ],
 "Community Benefit Society": () => [
 { heading: "Name and registered office", body: `${N} Limited, a community benefit society. Office: ${O}.` },
 {
 heading: "Objects",
 body: `To carry on business for the benefit of the community, namely ${U}, including holding land at ${P} (${A}) for an ecovillage.`,
 },
 {
 heading: "Members and capital",
 body: `A person may become a member by applying, being accepted, and holding at least one share of ${v(values, "sharePrice", "£1")} (withdrawable as the rules allow). Interest on shares, if any, is limited. Intended members: ${M}.`,
 },
 {
 heading: "Asset lock",
 body: `The society’s assets are dedicated to community benefit. They shall not be distributed to members except as allowed for interest, withdrawable share capital, and limited dissolution provisions that preserve the lock.`,
 },
 {
 heading: "Governance",
 body: `A committee / board, initially ${F}, is elected by members. One member, one vote, regardless of shareholding.`,
 },
 {
 heading: "Application of profits",
 body: `Surplus is applied to the objects, to reserves, and to modest share interest, not to speculative dividends.`,
 },
 { heading: "Law", body: `Registered under the Co-operative and Community Benefit Societies Act 2014. Law: ${L}. Dated ${D}.${ex}` },
 ],
 "Company limited by guarantee": () => [
 { heading: "1. Name", body: `The name of the company is ${N} Company Limited by Guarantee.` },
 { heading: "2. Company type", body: `The company is a company limited by guarantee, not having a share capital.` },
 {
 heading: "3. Objects",
 body: `The objects are ${U}, including to acquire and hold ${A} at ${P} as an ecovillage, and to provide serviced sites, common infrastructure, and education.`,
 },
 {
 heading: "4. Guarantee",
 body: `Every member undertakes to contribute up to ${v(values, "guarantee", "€1")} to the assets if the company is wound up while they are a member or within one year after.`,
 },
 {
 heading: "5. Members",
 body: `The first members are ${F}. Later members are admitted as the constitution provides. Intended community: ${M}. Membership is not a freehold of a plot; plots, if any, are by separate agreement.`,
 },
 {
 heading: "6. Directors",
 body: `Directors manage the company. They shall apply assets to the objects and not pay dividends.`,
 },
 {
 heading: "7. Income and winding up",
 body: `Income is applied to the objects. On winding up, remaining assets go to a body with similar objects, not to members. Law: ${L}. Office: ${O}. Dated ${D}.${ex}`,
 },
 ],
 "Registered association": () => [
 { heading: "§ 1 Name and seat", body: `The association is named ${N} e.V. Seat: ${P}. It shall be entered in the Vereinsregister.` },
 { heading: "§ 2 Purpose", body: `The purpose of the association is ${U}, including common life and stewardship of ${A}.` },
 {
 heading: "§ 3 Nonprofit character",
 body: `The association is a nonprofit (nicht wirtschaftlich) Verein. Funds are used only for the purpose. Members receive no profit shares.`,
 },
 {
 heading: "§ 4 Membership",
 body: `Natural persons who join the common life may become members after a guest period. First members: ${F}. Intended size: ${M}.`,
 },
 {
 heading: "§ 5 Organs",
 body: `Organs are the members’ assembly (Mitgliederversammlung) and the board (Vorstand). The board represents the association.`,
 },
 {
 heading: "§ 6 Land and assets",
 body: `Land and buildings at ${O} are association property. They are not partitioned among members on leaving.`,
 },
 {
 heading: "§ 7 Dissolution",
 body: `On dissolution, remaining assets go to a tax-privileged body with a similar purpose. Law: ${L}. Dated ${D}.${ex}`,
 },
 ],
 "Nonprofit gGmbH": () => [
 { heading: "§ 1 Name and seat", body: `The company is ${N} gGmbH. Seat: ${P}.` },
 {
 heading: "§ 2 Object",
 body: `The object is ${U}, including the operation of an ecovillage, seminar house, and related charitable activities on ${A}.`,
 },
 {
 heading: "§ 3 Share capital",
 body: `Share capital is ${v(values, "sharePrice", "«Stammkapital»")}. Shares are held by ${F} (and later shareholders admitted by this agreement).`,
 },
 {
 heading: "§ 4 Gemeinnützigkeit",
 body: `The company pursues exclusively and directly charitable purposes within the meaning of the German Fiscal Code (AO). No profit is distributed. Shareholders receive no hidden distributions.`,
 },
 {
 heading: "§ 5 Management",
 body: `One or more Geschäftsführer manage the company. Sale of the land requires a shareholder resolution with a supermajority set here.`,
 },
 {
 heading: "§ 6 Asset lock",
 body: `On dissolution or loss of charitable status, remaining assets go to another tax-privileged corporation for similar purposes. Law: ${L}. Dated ${D}.${ex}`,
 },
 ],
 "Limited company": () => [
 { heading: "Article 1, Name", body: `The company is ${N} (a limited company / Lda or equivalent). Seat: ${P}.` },
 {
 heading: "Article 2, Object",
 body: `The object is not-for-profit: ${U}, including holding ${A} as a peace-research / ecological community.`,
 },
 {
 heading: "Article 3, Capital and shareholders",
 body: `Shares are held equally (or as a schedule states) by associations or persons named here: ${F}. Shares are not a private land market.`,
 },
 {
 heading: "Article 4, Application of surplus",
 body: `Surplus is applied to the object. No dividends except as a not-for-profit statute allows.`,
 },
 {
 heading: "Article 5, Residence",
 body: `Residence on company land is by membership of a shareholder association or by written licence. Intended community: ${M}.`,
 },
 { heading: "Article 6, Law", body: `Office: ${O}. Law: ${L}. Dated ${D}.${ex}` },
 ],
 "Cultural association": () => [
 { heading: "Artículo 1. Denominación", body: `Se constituye la asociación ${N}, asociación cultural, con domicilio en ${P}.` },
 { heading: "Artículo 2. Fines", body: `Los fines son: ${U}, incluyendo la vida comunitaria y el cuidado de ${A}.` },
 {
 heading: "Artículo 3. Miembros",
 body: `Pueden ser socios las personas que residan o colaboren en el proyecto. Socios fundadores: ${F}. Tamaño previsto: ${M}.`,
 },
 {
 heading: "Artículo 4. Órganos",
 body: `La asamblea general y la junta directiva. La asociación no reparte beneficios.`,
 },
 {
 heading: "Artículo 5. Patrimonio y tierra",
 body: `Si la tierra es pública, la asociación no pretende título privado. Si adquiere bienes, los aplica a los fines. Ley: ${L}. Fecha: ${D}.${ex}`,
 },
 ],
 "Concejo / recovered village": () => [
 {
 heading: "Charter of occupancy",
 body: `The people living at ${N}, ${P}, make this charter on ${D} for the open governance of a recovered village on land that remains public (${A}).`,
 },
 {
 heading: "1. Status of the land",
 body: `Title stays with the region / municipality. This charter is not a deed. It is how we occupy, repair, and govern in good faith.`,
 },
 {
 heading: "2. Open council",
 body: `Decisions that bind the village are taken in concejo abierto (open council). First convenors: ${F}. All residents may speak and, after the custom we adopt, decide.`,
 },
 {
 heading: "3. Houses and work",
 body: `A person may inhabit a ruin they repair, while they live here and keep the house alive. Leaving returns the house to the village’s care. Purpose: ${U}.`,
 },
 {
 heading: "4. Commons",
 body: `Water, paths, woods, and ovens are commons. No enclosure against the village.`,
 },
 {
 heading: "5. Relation to the administration",
 body: `We seek peaceful, documented relations with the municipality. This charter does not override public law. Law: ${L}. Intended residents: ${M}.${ex}`,
 },
 ],
 Kibbutz: () => [
 { heading: "1. Name and place", body: `${N} is a cooperative agricultural settlement at ${P}, on national land of ${A}.` },
 {
 heading: "2. Purpose",
 body: `${U}. The kibbutz is a voluntary collective for production, culture, and ecological experiment under kibbutz law.`,
 },
 {
 heading: "3. Land",
 body: `Land is held by lease or allocation from the national land authority. Members have use rights, not a private lot they can sell on the open market.`,
 },
 {
 heading: "4. Membership",
 body: `Membership is by acceptance of the general assembly after a candidate period. Founders: ${F}. Intended size: ${M}.`,
 },
 {
 heading: "5. Economy",
 body: `The assembly decides the degree of income-sharing, housing, and private branches. Enterprises serve the settlement.`,
 },
 { heading: "6. Institutions", body: `General assembly, secretariat, and committees as the regulations provide. Law: ${L}. Dated ${D}.${ex}` },
 ],
 "State land": () => [
 {
 heading: "Occupancy and use",
 body: `This agreement records how ${N} occupies ${A} at ${P} on land whose title remains with the State / regional authority.`,
 },
 {
 heading: "1. No private title",
 body: `Nothing here conveys a freehold. Occupants have use rights while they live by this agreement and public law.`,
 },
 {
 heading: "2. Purpose of occupation",
 body: `${U}. Use that contradicts the purpose may end the permission after notice.`,
 },
 {
 heading: "3. Term",
 body: `Use is ongoing unless withdrawn as public law allows, or for a term of ${v(values, "leaseYears", "the period granted by the authority")} years if a lease is issued.`,
 },
 {
 heading: "4. Community rules",
 body: `Internal rules are set by the occupants (${F} as first convenors). They cannot override the title holder. Law: ${L}. Dated ${D}.${ex}`,
 },
 ],
 "Statutory foundation": () => [
 {
 heading: "Internal rules",
 body: `These are internal rules for residents and units of ${N} at ${P}, under the statutory foundation that holds the land (${A}). They do not amend the Act.`,
 },
 {
 heading: "1. Status",
 body: `The Foundation is a body corporate created by statute. Residents do not own plots. They participate in the township’s life and work.`,
 },
 {
 heading: "2. Purpose on the ground",
 body: `${U}. Units, schools, and farms operate under the Foundation’s powers.`,
 },
 {
 heading: "3. Residents’ assembly",
 body: `A residents’ assembly (or equivalent) advises and, where the Act allows, decides specified matters. First convenors of this rulebook: ${F}. Intended population: ${M}.`,
 },
 {
 heading: "4. Assets",
 body: `Gifts and unit surplus applied to the township remain Foundation assets. Law: ${L}. Dated ${D}.${ex}`,
 },
 ],
 "Self-governing institution": () => [
 { heading: "Article 1, Name", body: `The institution is ${N}, a self-governing institution (sjálfseignarstofnun) at ${P}.` },
 {
 heading: "Article 2, Purpose",
 body: `${U}. The institution owns itself. There are no shareholders.`,
 },
 {
 heading: "Article 3, Assets",
 body: `The institution holds ${A} and the workshops, homes, and enterprises on it. They cannot be divided among residents.`,
 },
 {
 heading: "Article 4, Board",
 body: `A board steers the institution. Initial board: ${F}. Residents and workers participate as the charter and Icelandic law provide. Intended community: ${M}.`,
 },
 {
 heading: "Article 5, Application of surplus",
 body: `Surplus is applied to the purpose. On dissolution, assets go to a like purpose. Law: ${L}. Office: ${O}. Dated ${D}.${ex}`,
 },
 ],
 NPO: () => [
 { heading: "Article 1, Name", body: `The corporation is ${N}, a specified nonprofit corporation, office at ${O}.` },
 { heading: "Article 2, Purpose", body: `${U}, including education, visitors, and ecological programs at ${P}.` },
 {
 heading: "Article 3, Activities",
 body: `The NPO may run courses, receive grants, and contract. It does not pay profits to members. Land of ${A}, if held, is held for the purpose.`,
 },
 {
 heading: "Article 4, Members and directors",
 body: `First members / directors: ${F}. Intended participants in the wider community: ${M}.`,
 },
 { heading: "Article 5, Law", body: `Governed by ${L}. Dated ${D}.${ex}` },
 ],
 "Sole proprietorship": () => [
 {
 heading: "Parties",
 body: `This Income-Pooling Agreement is made ${D} among ${F} (each a sole proprietor) living as one household known as ${N} at ${P}.`,
 },
 {
 heading: "1. Tax fiction and social fact",
 body: `Each party remains a sole proprietor for labour and tax law. They agree nonetheless to pool income, food, and housing as one household, because ${U}.`,
 },
 {
 heading: "2. Pool",
 body: `Each party pays into the household purse their earnings from the farm and related work, less only amounts the household meeting allows as personal spending.`,
 },
 {
 heading: "3. Land",
 body: `This agreement does not transfer title to ${A}. Use of land is by the arrangements the household has with the legal owners.`,
 },
 {
 heading: "4. Leaving",
 body: `A party who leaves takes personal effects and any written share the household has agreed, not a slice of the land. Law: ${L}. Intended household: ${M}.${ex}`,
 },
 ],
 "Religious society": () => [
 {
 heading: "Covenant",
 body: `We, ${F}, and those who later sign, covenant together as ${N} at ${P}, on ${D}.`,
 },
 {
 heading: "1. Faith and life",
 body: `${U}. Membership is by vocation and the society’s reception, not by purchase of a lot.`,
 },
 {
 heading: "2. Common property",
 body: `Land (${A}), buildings, and fruits of labour are held for the society. A member who leaves has no divisible share of the corpus.`,
 },
 {
 heading: "3. Government",
 body: `Elders / a spiritual and temporal ministry as the society’s custom provides. Public worship may be open; the residential covenant is not.`,
 },
 {
 heading: "4. Temporal corporation",
 body: `The society may act through a nonprofit corporation at ${O} to hold title and deal with the world. Law: ${L}. Intended covenanted members: ${M}.${ex}`,
 },
 ],
 "Income-sharing": () => [
 {
 heading: "Agreement",
 body: `This Common-Purse Agreement is made ${D} among the members of ${N} at ${P}.`,
 },
 {
 heading: "1. Purse",
 body: `Wages, enterprise income, and (unless a schedule excepts them) liquid assets are paid into a common purse. The community provides housing, food, and a personal allowance.`,
 },
 {
 heading: "2. Labour",
 body: `Each member contributes labour as the community assigns, consistent with health and skill. Purpose: ${U}.`,
 },
 {
 heading: "3. Property",
 body: `Land of ${A} sits in the legal shell named in the schedule (corporation, e.V., association). This agreement does not itself convey title.`,
 },
 {
 heading: "4. Joining and leaving",
 body: `Joining is after a visitor period. Leaving: personal effects go with the person; there is no cashing-out of the land. First parties: ${F}. Size: ${M}. Law: ${L}.${ex}`,
 },
 ],
 "Unincorporated community": () => [
 {
 heading: "Compact",
 body: `${N} is an unincorporated community at ${P}. This compact, dated ${D}, is among ${F} and those who later sign.`,
 },
 {
 heading: "1. No legal personality",
 body: `The community itself cannot own land. Title to ${A} must sit in a trust, company, or named persons. This compact says how we live together.`,
 },
 {
 heading: "2. Purpose and rules",
 body: `${U}. We meet, decide by the process we adopt, and contribute labour and (if we agree) money.`,
 },
 {
 heading: "3. Risk",
 body: `Because we are unincorporated, contracts and injuries may fall on named persons. We will keep insurance and, when we can, put land in a proper shell. Law: ${L}. Intended members: ${M}.${ex}`,
 },
 ],
 "Membership association": () => [
 { heading: "1. Name", body: `${N} Association, at ${P}.` },
 { heading: "2. Objects", body: `To be the membership and governance voice of the community, and ${U}.` },
 {
 heading: "3. Members",
 body: `Residents and, if the association so decides, supporting friends. First members: ${F}. Intended size: ${M}.`,
 },
 {
 heading: "4. Land",
 body: `The association may or may not hold ${A}. If it does not, it still sets common-ground values for those who do.`,
 },
 { heading: "5. Meetings and officers", body: `Annual meeting. Officers elected. Office: ${O}. Law: ${L}. Dated ${D}.${ex}` },
 ],
 "Nonprofit foundation": () => [
 { heading: "Charter", body: `${N} is established as a nonprofit foundation at ${P} on ${D}.` },
 { heading: "Purpose", body: `${U}. The foundation holds ${A} for that purpose, not for members as owners.` },
 {
 heading: "Board",
 body: `A board, initially ${F}, administers. Residents work inside the purpose. Intended community: ${M}.`,
 },
 {
 heading: "Assets",
 body: `Gifts, grants, and enterprise surplus are applied to the purpose. On dissolution, assets go to a like purpose. Office: ${O}. Law: ${L}.${ex}`,
 },
 ],
 "Supporting foundation": () => [
 { heading: "Article I, Name", body: `${N} Foundation, a supporting organization for ${v(values, "parentCharity", "«the village corporation»")}.` },
 {
 heading: "Article II, Purpose",
 body: `To raise, hold, and grant funds exclusively to support ${v(values, "parentCharity", "the parent community")} in ${U}. It does not itself house members or hold the village’s operating title unless a gift so provides.`,
 },
 { heading: "Article III, Board", body: `Initial directors: ${F}. A majority shall be appointed by, or closely connected to, the parent as tax law requires.` },
 {
 heading: "Article IV, Grants",
 body: `The Foundation may endow scholarships, buildings, and care, and shall not pay private inurement. Law: ${L}. Office: ${O}. Dated ${D}.${ex}`,
 },
 ],
 "Property trust": () => [
 {
 heading: "Declaration",
 body: `${F} declare that they hold (or the trustee named here holds) property at ${P} on trust for the residents and purposes of ${N}.`,
 },
 {
 heading: "1. Property",
 body: `The trust property is ${A} and the buildings the schedule describes.`,
 },
 {
 heading: "2. Beneficiaries / purpose",
 body: `Held for ${U} and for occupation by persons the trustees accept. This is not a private investment trust.`,
 },
 {
 heading: "3. Trustees’ powers",
 body: `To let, insure, repair, and, with the consents this deed requires, to mortgage or add land. Sale of the whole requires the lock in clause 4.`,
 },
 {
 heading: "4. Lock",
 body: `Proceeds of any permitted sale are held on the same trusts. Law: ${L}. Dated ${D}.${ex}`,
 },
 ],
 "Conservation covenant": () => conservationSections(values, ctx),
 "Historic designation": () => [
 {
 heading: "Preservation covenant",
 body: `The owner of ${N} at ${P} (${A}) covenants on ${D} to preserve the historic character of the buildings and landscape.`,
 },
 {
 heading: "1. Review",
 body: `Demolition, relocation, or alteration of contributing buildings shall not proceed without the review the listing regime requires.`,
 },
 {
 heading: "2. Use",
 body: `Continued living, farming, worship, and education are permitted and encouraged: ${U}.`,
 },
 {
 heading: "3. Relation to title",
 body: `This covenant does not transfer title. It is a public lock recorded against the land. Law: ${L}.${ex}`,
 },
 ],
 CSA: () => [
 {
 heading: "Agreement",
 body: `This CSA agreement is between ${N} Farm at ${P} and the undersigned members, for the season beginning ${D}.`,
 },
 {
 heading: "1. Share",
 body: `A member pays ${v(values, "sharePrice", "«share price»")} in advance and receives a share of the harvest, subject to the farm’s yield and risk.`,
 },
 {
 heading: "2. Land",
 body: `The farm sits on ${A}. This agreement does not give a member title or a co-op vote in the landholding entity.`,
 },
 {
 heading: "3. Work and purpose",
 body: `Members may contribute labour as the farm organises. Purpose: ${U}. First growers / organisers: ${F}. Intended members: ${M}. Law: ${L}.${ex}`,
 },
 ],
 "Community finance": () => [
 {
 heading: "Instrument",
 body: `${N} Community Finance issues this share / loan instrument on ${D} to raise money for ${U} at ${P}.`,
 },
 {
 heading: "1. Amount and return",
 body: `Each share or loan unit is ${v(values, "sharePrice", "«unit value»")}. Interest or share interest, if any, is modest and capped. This is not a speculative equity in the land.`,
 },
 {
 heading: "2. Use of proceeds",
 body: `Proceeds fund housing, energy, shops, or other community works on ${A}, as the offer document describes.`,
 },
 {
 heading: "3. Governance",
 body: `Holders have the information rights the offer states. Land title stays with the village’s land entity. Organisers: ${F}. Law: ${L}.${ex}`,
 },
 ],
 "Trading company": () => [
 { heading: "Charter", body: `${N} Enterprises exists to trade in support of the community at ${P}. Dated ${D}.` },
 {
 heading: "1. Object",
 body: `To carry on ${U} as a business whose surplus returns to the community, not to private shareholders as a land play.`,
 },
 {
 heading: "2. Ownership",
 body: `The enterprise is owned by the community’s legal shell or by worker-members (${F} as first organisers).`,
 },
 {
 heading: "3. Labour and surplus",
 body: `People who live in the community contribute labour. Surplus funds the common life and ${A}’s upkeep. Law: ${L}. Intended workers / members: ${M}.${ex}`,
 },
 ],
 "Federation of cooperatives": () => [
 { heading: "Constitution", body: `The Federation of ${N} unites cooperatives at ${P}, dated ${D}.` },
 {
 heading: "1. Purpose",
 body: `${U}. Each cooperative may hold assets and trade; the Federation holds the political and ethical constitution.`,
 },
 {
 heading: "2. Members",
 body: `Member cooperatives (and through them, persons). First convenors: ${F}. Intended residents: ${M}. Land of ${A} is allocated among cooperatives as the schedule states, not sold as private lots.`,
 },
 {
 heading: "3. Leaving",
 body: `Leaving a cooperative usually means leaving one’s share in the Federation’s common project, as the internal rules provide.`,
 },
 { heading: "4. Law", body: `Law: ${L}. Office: ${O}.${ex}` },
 ],
 };

 const build =
 byForm[form] ??
 (() => [
 {
 heading: "Instrument",
 body: `This instrument constitutes ${N} at ${P} as a ${form}, because ${U}. Land: ${A}. First parties: ${F}. Members: ${M}. Law: ${L}. Dated ${D}.${ex}`,
 },
 ]);

 const titleByForm: Record<string, string> = {
 "501(c)(3)": `Articles of Incorporation of ${N}, Inc.`,
 "501(c)(2)": `Articles of Incorporation of ${N} Title Holding Corporation`,
 "501(d) corporation": `Articles and Common-Purse Agreement of ${N}, Inc.`,
 "Community land trust": `Charter of ${N} Community Land Trust`,
 "Ground lease": `Ground Lease, ${N}`,
 "Limited-equity co-op": `Bylaws of ${N} Limited-Equity Housing Cooperative`,
 LLC: `Operating Agreement of ${N}, LLC`,
 "Housing cooperative":
 countryOf(values) === "Germany"
 ? `Satzung / Genossenschaftsstatut, ${N}`
: countryOf(values) === "Denmark"
 ? `Vedtaegter for ${N} Andelsboligforening`
: `Bylaws of ${N} Housing Cooperative`,
 "Homeowners association": `Declaration of Covenants for ${N}`,
 "Body corporate": `${N} Community Management Statement`,
 "Freehold title": `Deed of Running Covenants, ${N}`,
 "Charitable trust": `Deed of Trust of ${N} Charitable Trust`,
 SCIO: `Constitution of ${N} SCIO`,
 "Community Benefit Society": `Rules of ${N} Limited (Community Benefit Society)`,
 "Company limited by guarantee": `Constitution of ${N} CLG`,
 "Registered association": `Satzung des ${N} e.V.`,
 "Nonprofit gGmbH": `Gesellschaftsvertrag der ${N} gGmbH`,
 "Limited company": `Articles of ${N}`,
 "Cultural association": `Estatutos de ${N}`,
 "Concejo / recovered village": `Charter of ${N}`,
 Kibbutz: `Regulations of Kibbutz ${N}`,
 "State land": `Occupancy Agreement, ${N}`,
 "Statutory foundation": `Internal Rules of ${N}`,
 "Self-governing institution": `Charter of ${N}`,
 NPO: `Articles of ${N} NPO`,
 "Sole proprietorship": `Pooling Agreement, ${N}`,
 "Religious society": `Covenant of ${N}`,
 "Income-sharing": `Common-Purse Agreement of ${N}`,
 "Unincorporated community": `Community Compact of ${N}`,
 "Membership association": `Constitution of ${N} Association`,
 "Nonprofit foundation": `Foundation Charter of ${N}`,
 "Supporting foundation": `Articles of ${N} Foundation`,
 "Property trust": `Declaration of Trust, ${N}`,
 "Conservation covenant":
 countryOf(values) === "United States" ? `Conservation Easement (${N}`: `Conservation Covenant) ${N}`,
 "Historic designation": `Preservation Covenant, ${N}`,
 CSA: `CSA Agreement, ${N}`,
 "Community finance": `${N} Community Share Instrument`,
 "Trading company": `Enterprise Charter of ${N}`,
 "Federation of cooperatives": `Federation Constitution of ${N}`,
 };

 return wrap(kind, values, titleByForm[form] ?? `${kind.documentName}, ${N}`, build());
}

export function documentToText(doc: CharterDoc) {
 const parts = [
 doc.title,
 doc.subtitle,
 `Form: ${doc.form} · ${doc.country}`,
 doc.languageNote ?? "",
 "",
...doc.sections.flatMap((s) => [s.heading.toUpperCase(), s.body, ""]),
 ];
 return parts.filter((p) => p !== undefined).join("\n");
}
