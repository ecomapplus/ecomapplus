import { communities } from "./communities";
import { asiaFunding } from "./asia-details";
import { russiaFunding } from "./russia-details";
import { usaMoreFunding } from "./usa-details";
import { polandFunding } from "./poland-details";
import { volunteerBatchFunding } from "./volunteer-batch-details";
import { formerFunding } from "./former-details";
import { formerMoreFunding } from "./former-more-details";
import { formerClosedFunding } from "./former-closed-details";
import { livingMoreFunding } from "./living-more-details";
import { livingBatch2Funding } from "./living-batch2-details";
import { livingBatch3Funding } from "./living-batch3-details";
import { livingBatch4Funding } from "./living-batch4-details";
import { livingBatch5Funding } from "./living-batch5-details";
import { livingBatch6Funding } from "./living-batch6-details";
import { livingBatch7Funding } from "./living-batch7-details";
import { livingBatch8Funding } from "./living-batch8-details";
import { livingBatch9Funding } from "./living-batch9-details";
import { livingBatch10Funding } from "./living-batch10-details";
import { livingBatch11Funding } from "./living-batch11-details";
import { livingBatch12Funding } from "./living-batch12-details";
import { livingBatch13Funding } from "./living-batch13-details";
import { livingBatch14Funding } from "./living-batch14-details";
import { livingBatch15Funding } from "./living-batch15-details";
import { livingBatch16Funding } from "./living-batch16-details";
import { livingBatch17Funding } from "./living-batch17-details";
import { livingBatch18Funding } from "./living-batch18-details";
import { livingBatch19Funding } from "./living-batch19-details";
import { livingBatch20Funding } from "./living-batch20-details";
import { livingBatch21Funding } from "./living-batch21-details";
import { livingBatch22Funding } from "./living-batch22-details";
import { livingBatch23Funding } from "./living-batch23-details";
import { livingBatch24Funding } from "./living-batch24-details";
import { livingBatch25Funding } from "./living-batch25-details";
import { livingBatch26Funding } from "./living-batch26-details";
import { livingBatch27Funding } from "./living-batch27-details";
import { livingBatch28Funding } from "./living-batch28-details";
import { livingBatch29Funding } from "./living-batch29-details";
import { livingBatch30Funding } from "./living-batch30-details";
import { livingBatch31Funding } from "./living-batch31-details";
import { livingBatch32Funding } from "./living-batch32-details";
import { livingBatch33Funding } from "./living-batch33-details";
import { livingGlampingFunding } from "./living-glamping-details";
import { sustainableEcovillageFunding } from "./sustainable-ecovillage";
import { maitreyaEcovillageFunding } from "./maitreya-ecovillage";

export type Certainty = "documented" | "estimated";

export type FundingKind =
 | "grant"
 | "contract"
 | "easement"
 | "award"
 | "donation"
 | "member-equity"
 | "loan"
 | "business"
 | "currency"
 | "courses"
 | "other";

export type FundingItem = {
 source: string;
 amount: string;
 year?: string;
 certainty: Certainty;
 note: string;
 kind?: FundingKind;
};

export type CommunityFunding = {
 overview: string;
 grantsHeadline: string;
 privateHeadline: string;
 grants: FundingItem[];
 private: FundingItem[];
};

export const fundingKindLabels: Record<FundingKind, string> = {
 grant: "Grant",
 contract: "Public contract",
 easement: "Easement",
 award: "Award / recognition",
 donation: "Donation / gift",
 "member-equity": "Member equity",
 loan: "Loan / revolving fund",
 business: "Internal business",
 currency: "Complementary currency",
 courses: "Courses and stays",
 other: "Other"
};

const noneFound: FundingItem = {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published government construction or land-purchase grant of record. The community funded itself through members, businesses, or gifts."
};

export const fundingBySlug: Record<string, CommunityFunding> = {
 "sabbathday-lake": {
 overview:
 "A living religious museum and farm. Public money arrived as historic-preservation grants and a 2005–07 conservation-easement package; private money as donations, memberships, and earned income from herbs, crafts, and tours.",
 grantsHeadline: "NEH $750k + $1.3M easement",
 privateHeadline: "TPL $2.2M + gifts",
 grants: [
 {
 source: "National Endowment for the Humanities, Infrastructure and Capacity Building Challenge Grant (CHA-286603-24)",
 amount: "$750,000",
 year: "2023",
 certainty: "documented",
 kind: "grant",
 note: "Awarded to the United Society of Shakers, Sabbathday Lake, Inc. to renovate the 1824 Herb House into a year-round education and herb-production centre.",
 },
 {
 source: "National Park Service, Save America’s Treasures",
 amount: "$500,000",
 year: "2020s",
 certainty: "documented",
 kind: "grant",
 note: "Toward lifting and restoring the Great Barn, part of the village’s long-range plan for the historic farm plant.",
 },
 {
 source: "Land for Maine’s Future",
 amount: "$805,000",
 year: "2005–07",
 certainty: "documented",
 kind: "easement",
 note: "State contribution to the Sabbathday Lake conservation-easement package that locked ~1,700 acres of farm, forest, and bog.",
 },
 {
 source: "USDA NRCS Farm and Ranch Lands Protection Program",
 amount: "$505,000",
 year: "2005–07",
 certainty: "documented",
 kind: "easement",
 note: "Federal match in the same easement package. New England Forestry Foundation holds the conservation easement; Maine Preservation holds the building preservation agreement.",
 },
 {
 source: "Maine Historic Preservation Commission / SHPO (Historic Preservation Fund)",
 amount: "Amounts unpublished per grant",
 certainty: "estimated",
 kind: "grant",
 note: "Recurring brick-and-mortar and planning grants typical of a National Historic Landmark village; individual awards are not compiled in one public ledger.",
 },
 ],
 private: [
 {
 source: "Trust for Public Land easement campaign, private gifts",
 amount: "$2.2 million of a $3.5 million package",
 year: "2005–07",
 certainty: "documented",
 kind: "donation",
 note: "TPL led partners (Maine Preservation, Royal River Conservation Trust, New England Forestry Foundation, Friends of the Shakers) to buy development rights. The majority of the $3.5 million was private donations; proceeds fund upgrades and a stewardship endowment.",
 },
 {
 source: "Donations, memberships, museum admissions, herb and craft sales",
 amount: "Operating scale",
 certainty: "estimated",
 kind: "business",
 note: "The village runs as a public museum and working farm. Gifts and shop income cover daily life.",
 },
 ],
 },
 solheimar: {
 overview:
 "Iceland’s oldest intentional community began as a church-purchased foster home. Parliament helped build the first house for children with disabilities; the state still funds care, while guesthouse and craft sales fill the rest.",
 grantsHeadline: "Althingi 1932 + state care",
 privateHeadline: "Guesthouse and crafts",
 grants: [
 {
 source: "Althingi (Icelandic Parliament), Selhamar",
 amount: "Founding construction support",
 year: "1932–33",
 certainty: "documented",
 kind: "grant",
 note: "The first building, Selhamar, was constructed specifically for developmentally disabled children with the support of Parliament.",
 },
 {
 source: "Icelandic state and municipal support for disability services",
 amount: "Recurring operating support",
 certainty: "estimated",
 kind: "contract",
 note: "Sólheimar is a recognized vocational and care community. Public money pays for the disability-service mission, not for an ecovillage land purchase.",
 },
 ],
 private: [
 {
 source: "Church of Iceland, Hverakot land",
 amount: "ISK 8,000 purchase",
 year: "1930",
 certainty: "documented",
 kind: "donation",
 note: "The Childcare Committee of the Church of Iceland bought the Hverakot land; Sesselja Sigmundsdóttir leased it and opened the foster home on 5 July 1930.",
 },
 {
 source: "Guest-house stays, greenhouse produce, arts and crafts sales, donations",
 amount: "Operating income, not equity",
 certainty: "estimated",
 kind: "business",
 note: "Visitors, the greenhouse, and craft workshops underwrite the village alongside public care contracts.",
 },
 ],
 },
 riverside: {
 overview:
 "A New Zealand Christian pacifist community that has lived on pooled labor and modest dues since 1941. No public construction grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Dues and founding gifts",
 grants: [noneFound],
 private: [
 {
 source: "Resident labor and modest dues; historic peace-church gifts in the founding decades",
 amount: "Not assembled as a capital round",
 certainty: "estimated",
 kind: "donation",
 note: "Riverside was never financed as a development. Members work, share, and keep a small common purse. Early Friends and peace-church gifts helped the first land.",
 },
 ],
 },
 koinonia: {
 overview:
 "The farm that invented Habitat for Humanity’s revolving housing fund. Form 990s show hundreds of thousands in gifts each year; pecans, fruitcake, and books earn the rest.",
 grantsHeadline: "USDA rural programs",
 privateHeadline: "~$0.35–0.42M/yr gifts",
 grants: [
 {
 source: "USDA Rural Development / related rural housing programs",
 amount: "Amounts not isolated to the farm",
 certainty: "estimated",
 kind: "grant",
 note: "Koinonia’s Habitat-adjacent housing work has used rural housing tools over the decades. Public 990s do not isolate a single USDA award to the farm itself.",
 },
 ],
 private: [
 {
 source: "Contributions on Form 990",
 amount: "~$347k–$417k/year",
 year: "2021–23",
 certainty: "documented",
 kind: "donation",
 note: "Annual gifts on the farm’s Form 990, plus sales of pecans, fruitcake, and books. This is the operating gift stream.",
 },
 {
 source: "Fund for Humanity, revolving no-interest housing fund",
 amount: "House payments recycle into the next house",
 year: "1968–",
 certainty: "documented",
 kind: "loan",
 note: "Clarence Jordan and the Fullers built Partnership Housing at Koinonia: no-profit houses, no-interest loans, payments into a common fund. That model left the farm and became Habitat for Humanity. Creative finance.",
 },
 ],
 },
 "camphill-copake": {
 overview:
 "A Camphill village for adults with developmental disabilities. New York OPWDD and federal entitlements cover less than half of operating cost; the rest is private gifts, foundation grants, and workshop sales.",
 grantsHeadline: "OPWDD $5.4M + federal $1.9M",
 privateHeadline: "$5.9M gifts (FY24)",
 grants: [
 {
 source: "New York State OPWDD / state funding",
 amount: "$5.4 million",
 year: "FY 2023–24",
 certainty: "documented",
 kind: "contract",
 note: "State funding for residential and day services, from Camphill Village Copake’s FY 2023–24 annual report. The village notes that state contracts and federal entitlements together cover less than half of combined operating costs.",
 },
 {
 source: "Federal entitlements (Medicaid and related)",
 amount: "$1.9 million",
 year: "FY 2023–24",
 certainty: "documented",
 kind: "contract",
 note: "Federal share of care funding in the same annual report. Moving a resident from Copake to a Medicaid-funded bed at Camphill Ghent replaces OPWDD rates with lower Medicaid rates.",
 },
 ],
 private: [
 {
 source: "Contributions (annual fund and major gifts)",
 amount: "$5.9 million",
 year: "FY 2023–24",
 certainty: "documented",
 kind: "donation",
 note: "Private gifts in the FY 2023–24 annual report. Camphill Foundation also pools gifts across Camphill communities.",
 },
 {
 source: "Foundation and other grants (non-government)",
 amount: "$2.3 million",
 year: "FY 2023–24",
 certainty: "documented",
 kind: "grant",
 note: "Listed as “Grants” separately from state funding and federal entitlements in the same annual report, treated here as private/foundation money.",
 },
 {
 source: "Work spaces and gift-shop sales",
 amount: "$483,000",
 year: "FY 2023–24",
 certainty: "documented",
 kind: "business",
 note: "Workshop and shop earned income. The village’s crafts and food businesses are part of the care model.",
 },
 ],
 },
 findhorn: {
 overview:
 "The Park Ecovillage mixes a spiritual education centre, a community association, and community-owned development companies. Public money has been project grants.",
 grantsHeadline: "National Lottery study",
 privateHeadline: "Ekopia £2.6M assets",
 grants: [
 {
 source: "National Lottery, carbon-neutrality study",
 amount: "Amount unpublished",
 year: "2020s",
 certainty: "documented",
 kind: "grant",
 note: "The Findhorn Ecovillage Community was awarded a National Lottery grant to measure what a village of residents, businesses, buildings, gardens, and roads would need to reach carbon neutrality by 2030. (A separate Scottish Land Fund award of £520k went to Findhorn Village Conservation Company (the fishing village, not the Park Ecovillage) and is not counted here.)",
 },
 {
 source: "Historic UK and Scottish rural and environmental grants",
 amount: "Amounts unpublished at Park scale",
 certainty: "estimated",
 kind: "grant",
 note: "The ecovillage has been used as a demonstration for rural and environmental programmes. Individual awards are not compiled in one public ledger.",
 },
 ],
 private: [
 {
 source: "Ekopia Resource Exchange, community share offers",
 amount: "Assets > £2.6 million; 365+ members",
 year: "1990s–",
 certainty: "documented",
 kind: "member-equity",
 note: "Ekopia is the community’s industrial and provident society. Members hold shares used to finance Park projects, including affordable housing. Older published figures: ~260 members with about £750,000 invested by the early 2010s.",
 },
 {
 source: "Duneland Ltd., affordable-housing offer into Ekopia",
 amount: "About £175,000",
 certainty: "documented",
 kind: "member-equity",
 note: "Duneland, a community-owned development company at the Park, offered about £175,000 toward rentals and shared-ownership housing, with a further package described as worth up to £200,000.",
 },
 {
 source: "Workshop fees, guest stays, New Findhorn Association dues, Pineridge buy-out",
 amount: "Share offers + earned income",
 certainty: "estimated",
 kind: "courses",
 note: "The education centre, guest programme, and association dues are the Park’s earned-income engine. Members have also bought out sites such as Pineridge rather than taking outside equity.",
 },
 ],
 },
 "twin-oaks": {
 overview:
 "An income-sharing commune that funds itself with hammocks, tofu, indexing, and seeds. No outside investors, and no major public grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Internal businesses",
 grants: [noneFound],
 private: [
 {
 source: "Hammock, tofu, indexing, and seed businesses",
 amount: "Internal businesses, not investors",
 certainty: "documented",
 kind: "business",
 note: "Twin Oaks’ labor-credit economy is funded by community-owned enterprises. Members take a small allowance; surplus stays in the common treasury. No outside equity.",
 },
 ],
 },
 auroville: {
 overview:
 "An international township under a statutory foundation. The Government of India channels grants-in-aid (especially through SAIIER for education); residents, units, and Auroville International centres give the rest.",
 grantsHeadline: "GoI grants-in-aid",
 privateHeadline: "Donations + units",
 grants: [
 {
 source: "Government of India grants-in-aid via the Auroville Foundation",
 amount: "Recurring; crore-scale in some years",
 year: "1988–",
 certainty: "estimated",
 kind: "grant",
 note: "The Auroville Foundation Act 1988 provides for annual Central Government grants. A 2025 parliamentary panel noted that the Foundation receives partial funding this way.",
 },
 {
 source: "SAIIER, Ministry of Education / UNESCO channel for schools",
 amount: "₹20–30 lakh/year historically",
 year: "1983–",
 certainty: "documented",
 kind: "grant",
 note: "Sri Aurobindo International Institute of Educational Research has been the main channel of government money for Auroville schools since a first grant in 1983–84. A visiting-committee report put annual UNESCO/GoI grants at Rs. 20–30 lakhs in an earlier period; later a dedicated scheme increased the flow. SAIIER also receives Foundation for World Education (USA) and Stichting De Zaaier (Holland) gifts.",
 },
 {
 source: "UNESCO, birthday celebrations and resolutions of support",
 amount: "$25,000 plus six resolutions",
 year: "1966–",
 certainty: "documented",
 kind: "grant",
 note: "UNESCO has passed unanimous resolutions of support for Auroville since 1966 and contributed $25,000 to birthday celebrations. Recognition more than a construction grant, but a documented international gift.",
 },
 ],
 private: [
 {
 source: "Foreign and Indian donations, guest-house stays, unit surpluses, Auroville International centres",
 amount: "Mix of gifts and units",
 certainty: "estimated",
 kind: "donation",
 note: "Commercial units, guesthouses, and overseas Auroville International centres underwrite residents and projects alongside the government grant-in-aid.",
 },
 ],
 },
 "the-farm": {
 overview:
 "The Summertown commune funded itself with buses, labor, midwifery, books, and solar, then spun Plenty International out as a relief NGO. No major public land grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Businesses + Plenty",
 grants: [noneFound],
 private: [
 {
 source: "Midwifery, books, solar, and Plenty International donations",
 amount: "Earned + NGO gifts",
 certainty: "estimated",
 kind: "business",
 note: "The Farm’s businesses (midwifery, Book Publishing Company, solar) and Plenty International (founded on the land in 1974) are the money story. Original founding was buses-and-labor.",
 },
 ],
 },
 gaviotas: {
 overview:
 "A research village in the Colombian llanos. UNDP treated it as a model community in the 1970s; later a Japanese carbon-finance deal planted pines whose resin now pays the bills.",
 grantsHeadline: "UNDP + Japan carbon",
 privateHeadline: "Resin + hospital",
 grants: [
 {
 source: "United Nations Development Programme, model-community funding",
 amount: "Amounts unpublished",
 year: "1976–79",
 certainty: "documented",
 kind: "grant",
 note: "After a 1976 visit, UNDP designated Gaviotas a model community and funded appropriate-technology work. A 1979 return visit (see-saw sleeve pump and windmills) secured a further round.",
 },
 {
 source: "Japan carbon-sequestration finance for pine planting",
 amount: "Half the cost of 8,000 hectares",
 year: "1990s",
 certainty: "estimated",
 kind: "grant",
 note: "When original donors pulled back, Gaviotas planted thousands of hectares of Caribbean pine, half paid from Japanese carbon-sequestration funding, half from solar-water-heater savings. The trees later became the resin business.",
 },
 ],
 private: [
 {
 source: "Pine-resin enterprise (colofonia)",
 amount: "~80% of community revenue in later years",
 certainty: "estimated",
 kind: "business",
 note: "Sustainably tapped resin is distilled for paints, varnishes, and adhesives. The factory replaced fading UN and hospital income as the economic heart of Gaviotas.",
 },
 {
 source: "Hospital, solar-water-heater sales, and founder/donor capital",
 amount: "Social enterprise, not equity",
 certainty: "estimated",
 kind: "business",
 note: "Early decades mixed a hospital, cannula production, and solar heaters with founder Paolo Lugari’s capital and visiting donors.",
 },
 ],
 },
 "moora-moora": {
 overview:
 "A Victorian hilltop housing co-op. Members buy shares; the co-op holds the land. No public construction grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Co-op shares",
 grants: [noneFound],
 private: [
 {
 source: "Co-op share purchase to join; internal levies for common buildings",
 amount: "Member equity, not grants",
 certainty: "documented",
 kind: "member-equity",
 note: "You join Moora Moora by buying a share. Common buildings are funded by levies and working bees, not by an outside round.",
 },
 ],
 },
 "east-wind": {
 overview:
 "An income-sharing commune in the Missouri Ozarks, twin to Twin Oaks, funded by nut butters and hammocks. No outside equity, no major public grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Nut butter & hammocks",
 grants: [noneFound],
 private: [
 {
 source: "Nut butters, hammocks, and other community businesses; labor share",
 amount: "Internal businesses",
 certainty: "documented",
 kind: "business",
 note: "East Wind Nut Butters is the enterprise. Members work for the common treasury; there is no outside investor.",
 },
 ],
 },
 damanhur: {
 overview:
 "A Federation of communities in Piedmont with an underground Temple, a complementary currency, and a visitor economy. Public recognition of the Temples is not a construction grant.",
 grantsHeadline: "Heritage recognition",
 privateHeadline: "Members + Credito",
 grants: [
 {
 source: "Italian cultural-heritage and regional recognition (Temples as cultural site)",
 amount: "No construction grant on record",
 certainty: "estimated",
 kind: "award",
 note: "The Temples of Humankind are treated as a cultural site. That is recognition and tourism.",
 },
 ],
 private: [
 {
 source: "Member contributions, Damanhur Crea businesses, Temples visits",
 amount: "Member + visitor economy",
 certainty: "estimated",
 kind: "business",
 note: "Citizens contribute, the Crea arts-and-enterprise centre trades, and visitors pay to see the Temples. That is how the Federation runs.",
 },
 {
 source: "Credito complementary currency",
 amount: "1 crédito ≈ €1, internal only",
 year: "1970s–",
 certainty: "documented",
 kind: "currency",
 note: "Damanhur’s internal currency, in use for decades, keeps trade inside the Federation. Creative finance: a local money.",
 },
 ],
 },
 svanholm: {
 overview:
 "Denmark’s large income-sharing collective funds itself with a commercial organic farm, dairy, and other enterprises, plus membership capital.",
 grantsHeadline: "Municipal (operating)",
 privateHeadline: "Collective farm income",
 grants: [
 {
 source: "Danish municipal/state support typical of large rural settlements",
 amount: "Not isolated",
 certainty: "estimated",
 kind: "other",
 note: "Large Danish rural settlements sit inside ordinary municipal and agricultural systems; Svanholm has not published a single public capital award that bought the estate.",
 },
 ],
 private: [
 {
 source: "Collective farm, dairy, and other enterprises; membership capital",
 amount: "Collective businesses",
 certainty: "documented",
 kind: "business",
 note: "Svanholm is a working farm with a common treasury. Members join with capital; the organic operation pays the bills.",
 },
 ],
 },
 lakabe: {
 overview:
 "An abandoned Navarre village occupied in 1980 and rebuilt by squat-then-legalize sweat equity. Public rural-rehabilitation money came later, in unpublished amounts.",
 grantsHeadline: "Rural rehab (hist.)",
 privateHeadline: "Sweat equity",
 grants: [
 {
 source: "Navarre / Spanish rural rehabilitation after occupation of the abandoned village",
 amount: "Amounts unpublished",
 certainty: "estimated",
 kind: "grant",
 note: "Once the occupation was regularized, rural-rehabilitation programmes typical of emptied Spanish villages helped. No single published figure for Lakabe’s rebuild.",
 },
 ],
 private: [
 {
 source: "Restored houses, visitor stays, and internal economy",
 amount: "Sweat equity",
 certainty: "estimated",
 kind: "member-equity",
 note: "The first decade was occupation, salvage, and labor. Later visitor stays and an internal economy. No outside equity round.",
 },
 ],
 },
 "kibbutz-lotan": {
 overview:
 "A Reform kibbutz in the Arava. Historic Jewish Agency settlement support put the kibbutz on the map; the eco-campus, dates, and a tzedakah campaign pay for the ecological work.",
 grantsHeadline: "Jewish Agency (hist.)",
 privateHeadline: "Campus + $22k tzedakah",
 grants: [
 {
 source: "Historic Jewish Agency / Israeli settlement support typical of kibbutz founding",
 amount: "Not Lotan-specific figure",
 certainty: "estimated",
 kind: "grant",
 note: "Kibbutzim of Lotan’s generation were established with Jewish Agency and state settlement tools. A Lotan-only published figure for that founding package is not isolated.",
 },
 ],
 private: [
 {
 source: "Center for Creative Ecology courses, date agriculture, guest stays",
 amount: "Courses + dates",
 certainty: "estimated",
 kind: "courses",
 note: "The eco-campus, agricultural enterprises, and guest programme are Lotan’s earned income. Kibbutz membership is the other half.",
 },
 {
 source: "Tzedakah campaign for EcoCampus housing",
 amount: "$22,000 raised",
 year: "2014",
 certainty: "documented",
 kind: "donation",
 note: "A published tzedakah project raised $22,000 toward a new EcoCampus housing unit at Kibbutz Lotan.",
 },
 ],
 },
 lebensgarten: {
 overview:
 "A German ecovillage in a former munitions factory, financed by co-op housing shares and member loans, with some public energy-retrofit programmes on individual buildings.",
 grantsHeadline: "Energy/building (hist.)",
 privateHeadline: "Co-op shares",
 grants: [
 {
 source: "German municipal/state building and energy programmes used in some passive-house retrofits",
 amount: "Amounts unpublished",
 certainty: "estimated",
 kind: "grant",
 note: "Individual houses have used German energy-efficiency tools.",
 },
 ],
 private: [
 {
 source: "Co-op housing shares and member loans for the former munitions-factory site",
 amount: "Member equity",
 certainty: "estimated",
 kind: "member-equity",
 note: "Lebensgarten is a housing project first. Members bought in; some lent extra. That is how a factory became a village.",
 },
 ],
 },
 niederkaufungen: {
 overview:
 "A Hessian income-sharing commune that owns businesses and a common treasury. No major public grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Kommune businesses",
 grants: [noneFound],
 private: [
 {
 source: "Kommune-owned businesses and member capital; income-sharing common treasury",
 amount: "Internal economy",
 certainty: "documented",
 kind: "business",
 note: "Niederkaufungen funds itself the commune way: businesses owned in common, members living on the common purse. No outside investor.",
 },
 ],
 },
 "crystal-waters": {
 overview:
 "The world’s first intentional permaculture village. Entirely self-funded by lot sales and body-corporate levies. The 1996 World Habitat Award was recognition.",
 grantsHeadline: "World Habitat Award (no cash)",
 privateHeadline: "Lots + levies",
 grants: [
 {
 source: "World Habitat Award (Building and Social Housing Foundation)",
 amount: "Recognition",
 year: "1996",
 certainty: "documented",
 kind: "award",
 note: "Crystal Waters was a World Habitat Award winner/finalist for pioneering low-impact living. The award citation states the project is entirely self-funded. No government land-purchase grant.",
 },
 ],
 private: [
 {
 source: "Body-corporate levies and lot purchases; original co-op then freehold sales",
 amount: "Lot sales + levies",
 certainty: "documented",
 kind: "member-equity",
 note: "Started as a land-settlement co-op, then a Queensland body corporate. People buy lots and pay levies. That is the whole capital structure.",
 },
 ],
 },
 "ecovillage-ithaca": {
 overview:
 "Three cohousing neighborhoods on a hillside outside Ithaca. Homes are financed with co-op shares and mortgages; 50–55 acres sit in a Finger Lakes Land Trust easement; NYSERDA helped some green-building work.",
 grantsHeadline: "NYSERDA (construction)",
 privateHeadline: "Shares + 50-ac easement",
 grants: [
 {
 source: "NYSERDA and related NY energy/green-building programmes",
 amount: "Amounts unpublished at village scale",
 certainty: "estimated",
 kind: "grant",
 note: "Cited in neighborhood construction as energy and green-building support.",
 },
 ],
 private: [
 {
 source: "Co-op share purchase plus mortgages on homes",
 amount: "~$35k historic share figure often cited",
 certainty: "estimated",
 kind: "member-equity",
 note: "Households buy into a neighborhood co-op and take ordinary mortgages. The often-cited historic share figure is about $35,000; later neighborhoods differ.",
 },
 {
 source: "Finger Lakes Land Trust, conservation easement",
 amount: "50–55 acres locked (development rights given up)",
 certainty: "documented",
 kind: "easement",
 note: "Over 80% of the 175 acres stays green. Fifty to fifty-five acres are in a permanent conservation easement held by the Finger Lakes Land Trust, a tax-benefit lock.",
 },
 ],
 },
 zegg: {
 overview:
 "A seminar centre and intentional community on a former Stasi site in Brandenburg, funded by courses, guest stays, and member contributions.",
 grantsHeadline: "None documented",
 privateHeadline: "Seminars + members",
 grants: [noneFound],
 private: [
 {
 source: "Seminar fees, guest stays, and member contributions for the former Stasi site",
 amount: "Earned + members",
 certainty: "estimated",
 kind: "courses",
 note: "ZEGG’s public face is the seminar programme. That earned income, plus members, bought and runs the campus. No major public grant of record.",
 },
 ],
 },
 "los-angeles-eco-village": {
 overview:
 "Two Koreatown blocks held by a community land trust and limited-equity co-ops. An Ecological Revolving Loan Fund of friend-loans (and a slice of public money) bought the buildings; LADWP later paid for energy outreach.",
 grantsHeadline: "LADWP $50k + $275k public",
 privateHeadline: "ELF ~$2M in loans",
 grants: [
 {
 source: "LADWP community energy-outreach grant",
 amount: "$50,000",
 year: "2020–21",
 certainty: "documented",
 kind: "grant",
 note: "CRSP dba Los Angeles Ecovillage Institute received $50,000 from the Los Angeles Department of Water and Power to run energy-saving workshops in Council District 13.",
 },
 {
 source: "Public money inside the Ecological Revolving Loan Fund",
 amount: "$275,000",
 year: "1996–",
 certainty: "documented",
 kind: "grant",
 note: "CRSP reports that ELF has used over two million dollars of personal loans plus $275,000 of public money to acquire 53 units of permanently affordable housing since 1996.",
 },
 {
 source: "Historic CRA/LA and related city housing/community-development support",
 amount: "Amounts unpublished",
 year: "1990s",
 certainty: "estimated",
 kind: "grant",
 note: "The 1990s neighbourhood work sat near Community Redevelopment Agency tools. Individual awards are not compiled in one public ledger.",
 },
 {
 source: "State of California COVID-19 relief",
 amount: "$5,000",
 year: "2020",
 certainty: "documented",
 kind: "grant",
 note: "A small state COVID relief grant to the L.A. Eco-Village Institute.",
 },
 ],
 private: [
 {
 source: "CRSP Ecological Revolving Loan Fund (friend loans at 1.5%)",
 amount: "~$2 million borrowed and repaid over 30 years",
 year: "1990s–",
 certainty: "documented",
 kind: "loan",
 note: "Allies lend $1,000–$100,000 at 1.5% simple interest. ELF has borrowed and paid back close to two million dollars. In 2016, 20 friends committed over $1 million so CRSP could buy Song’s Auto Repair and the Teriyaki House, a quarter-acre corner now the Community Hub.",
 },
 {
 source: "Limited-equity co-op shares and CLT ground leases; member sweat equity",
 amount: "Shares + leases",
 certainty: "estimated",
 kind: "member-equity",
 note: "Residents buy limited-equity shares; the community land trust holds the land. That is the permanent-affordability lock.",
 },
 ],
 },
 earthaven: {
 overview:
 "A mountain ecovillage near Black Mountain, North Carolina. Members pay a joining fee and a commons fee; neighborhoods assess dues. No major public grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "$3.9k + $6.5k member fees",
 grants: [noneFound],
 private: [
 {
 source: "Earthaven Community Association joining fee and commons fee",
 amount: "$3,900 joining + $6,500 commons (inflation-indexed)",
 certainty: "documented",
 kind: "member-equity",
 note: "Published joining and commons fees. Flexible payment is available. Neighborhoods then assess annual dues of about $800–$1,100 plus a small HOA fee. Site leases, not outside equity.",
 },
 ],
 },
 konohana: {
 overview:
 "A Japanese farm community that lives by produce sales, farm-stays, and member labor. Municipal agricultural support is typical of rural Japan.",
 grantsHeadline: "Municipal/ag (typical)",
 privateHeadline: "Farm stays + produce",
 grants: [
 {
 source: "Japanese municipal/agricultural support typical of rural farm communities",
 amount: "Not isolated",
 certainty: "estimated",
 kind: "grant",
 note: "Rural Japanese farms sit inside ordinary municipal and agricultural programmes. Konohana has not published a single public capital award that bought the land.",
 },
 ],
 private: [
 {
 source: "Farm-stay fees, produce sales, and member labor",
 amount: "Earned + labor",
 certainty: "estimated",
 kind: "business",
 note: "The community’s income is food and hospitality. No outside equity round.",
 },
 ],
 },
 oaec: {
 overview:
 "An 80-acre Sonoma County education and ecology centre. Form 990s show government grants in the high hundreds of thousands and several million in contributions; courses and the nursery earn the rest.",
 grantsHeadline: "~$0.73–0.80M/yr (990)",
 privateHeadline: "Courses + $5.2M gifts (FY24)",
 grants: [
 {
 source: "Government grants on Form 990",
 amount: "~$734k–$796k/year",
 certainty: "documented",
 kind: "grant",
 note: "OAEC’s public 990s separate government grants in the mid-to-high $700,000s from other contributions. These are California and federal conservation, education, and fire/land programmes.",
 },
 {
 source: "Wildlands / fire-resilience awards (Conservation Incentive Contract and related)",
 amount: "$76,000 + $52,000 Conservation Incentive Contract",
 year: "2021",
 certainty: "documented",
 kind: "grant",
 note: "OAEC reported a $76,000 award and a $52,000 Conservation Incentive Contract while building local wildfire resiliency. Sonoma County Vegetation Management Grant funding has also supported Tending the Land for Fire Resilience.",
 },
 ],
 private: [
 {
 source: "Contributions and grants (Form 990 FY2024)",
 amount: "$5.2 million (79% of $6.6M revenue)",
 year: "2024",
 certainty: "documented",
 kind: "donation",
 note: "OAEC FY2024: contributions and grants $5.2M, programme service revenue $1.3M. Fourteen funders accounted for about $1.2M of foundation grants in compilations of the same year.",
 },
 {
 source: "Course fees, plant nursery, and Sowing Circle LLC / OAEC 501(c)(3) mix",
 amount: "Courses + gifts",
 certainty: "estimated",
 kind: "courses",
 note: "The education centre and nursery are the earned-income half. Land is held by Sowing Circle LLC with OAEC as the public-benefit nonprofit.",
 },
 ],
 },
 tamera: {
 overview:
 "A peace-research village in the Alentejo. Land was bought with loans; the Water Retention Landscape (more than €500,000 of lakes) was raised from private donors. Courses and guests run the campus.",
 grantsHeadline: "EU/PT rural (some years)",
 privateHeadline: "Lakes >€500k donors",
 grants: [
 {
 source: "EU / Portuguese rural and peace-education project funds",
 amount: "Amounts unpublished",
 certainty: "estimated",
 kind: "grant",
 note: "Tamera has used European and Portuguese rural and education project funds in some years.",
 },
 ],
 private: [
 {
 source: "Water Retention Landscape, private donors",
 amount: "More than €500,000 for the lakes",
 year: "2000s",
 certainty: "documented",
 kind: "donation",
 note: "Climate-ADAPT and related case studies put the investment for Tamera’s retention lakes at more than €500,000, raised from private donors after the community publicized the vision. A documented example of donor-financed landscape infrastructure.",
 },
 {
 source: "Land-purchase loans, course fees, guest stays, bookshop",
 amount: "Loans + earned income",
 certainty: "estimated",
 kind: "loan",
 note: "The purchase of Tamera’s land and the initial investment were partially financed with loans. Ongoing costs are donations, grants, guests, seminars, and the bookshop.",
 },
 ],
 },
 "dancing-rabbit": {
 overview:
 "A Missouri ecovillage on a community land trust, with an internal currency and USDA rural-energy awards to some members and co-ops. Leases and memberships.",
 grantsHeadline: "USDA REAP (energy)",
 privateHeadline: "Leases + memberships",
 grants: [
 {
 source: "USDA Rural Energy for America (REAP) and related rural-energy awards to members/co-ops",
 amount: "Tens of thousands",
 certainty: "estimated",
 kind: "grant",
 note: "REAP and similar USDA energy tools have gone to Dancing Rabbit members and co-ops for solar and efficiency. They are project awards.",
 },
 ],
 private: [
 {
 source: "Land Trust leases, Dancing Rabbit Inc. memberships, Conservancy gifts, internal currency",
 amount: "Leases + memberships",
 certainty: "estimated",
 kind: "member-equity",
 note: "You lease from the land trust and join the village. The Conservancy takes gifts for habitat. An internal currency keeps some trade local. Creative, small, and member-financed.",
 },
 ],
 },
 "sieben-linden": {
 overview:
 "A German Genossenschaft village: one co-op owns the land, another owns the houses. Members buy shares; solidarity shares cover those who cannot. Some buildings have used KfW energy programmes.",
 grantsHeadline: "KfW/energy (buildings)",
 privateHeadline: "WoGe €12k + SiGe €11k",
 grants: [
 {
 source: "German KfW / energy-efficiency and state programmes used on some buildings",
 amount: "Amounts unpublished at village scale",
 certainty: "estimated",
 kind: "grant",
 note: "Individual houses have used German energy-efficiency finance. World Habitat notes the straw-bale housing project is financially self-sustaining. No village-scale public land grant.",
 },
 ],
 private: [
 {
 source: "Siedlungsgenossenschaft Sieben Linden eG (SiGe), land shares",
 amount: "€11,275 (11 shares) per long-term member",
 certainty: "documented",
 kind: "member-equity",
 note: "Every long-term member subscribes to 11 cooperative shares, about €11,275, and becomes co-owner of the land. Solidarity shares cover members who cannot pay the sum.",
 },
 {
 source: "Wohnungsgenossenschaft Sieben Linden eG (WoGe), housing shares",
 amount: "€12,000 share plus working hours",
 certainty: "documented",
 kind: "member-equity",
 note: "Most houses sit in the housing co-op. Each resident brings about €12,000 and labor; the rest is additional deposits or credits that WoGe arranges. After moving in, residents pay a rent that reflects their initial money and work. Solidarity shares again cover gaps.",
 },
 {
 source: "Seminar income",
 amount: "Courses + guests",
 certainty: "estimated",
 kind: "courses",
 note: "The education programme is a second income stream alongside the two cooperatives.",
 },
 ],
 },
 cloughjordan: {
 overview:
 "Ireland’s ecovillage: a community farm, eco-homes, and a sustainable-energy community. SEAI Better Energy Communities money helped energy projects; members bought sites and CSA shares.",
 grantsHeadline: "SEAI energy grants",
 privateHeadline: "Homes + CSA",
 grants: [
 {
 source: "SEAI Better Energy Communities and related Irish energy/climate grants",
 amount: "Project-scale, not land purchase",
 certainty: "estimated",
 kind: "grant",
 note: "Cloughjordan is a Sustainable Energy Community. SEAI community and Better Energy Communities programmes have supported energy work. They did not buy the land.",
 },
 ],
 private: [
 {
 source: "Eco-villas and site purchases; Cloughjordan Community Farm CSA shares",
 amount: "Homes + CSA",
 certainty: "estimated",
 kind: "member-equity",
 note: "Households buy sites and build. The community farm runs on CSA shares. That is the capital structure, members.",
 },
 ],
 },
 currumbin: {
 overview:
 "A 147-lot hinterland ecovillage built by developer Landmatters as a Queensland body corporate. Lots sold as ordinary freehold; Queensland used it as an Energywise/Waterwise demonstration.",
 grantsHeadline: "Qld demonstration",
 privateHeadline: "Freehold lots",
 grants: [
 {
 source: "Queensland Energywise / Waterwise demonstration status",
 amount: "Recognition more than a cash grant",
 certainty: "estimated",
 kind: "award",
 note: "The state used Currumbin as an Energywise and Waterwise demonstration. That is status and some programme support.",
 },
 ],
 private: [
 {
 source: "Freehold lot sales through Landmatters; body-corporate levies thereafter",
 amount: "Lot sales",
 certainty: "documented",
 kind: "member-equity",
 note: "Residents buy lots and finance their own houses under a strict sustainable-building code. The principal body corporate and four subsidiaries collect levies. Developer-built, then self-funded.",
 },
 ],
 },
 "longo-mai": {
 overview:
 "A UN-backed refugee cooperative that became a self-feeding village. Public money is the 1979 United Nations founding support (amount unpublished). Private money is European Longo Maï solidarity, coffee and sugarcane sales, and visitor stays, not lot sales.",
 grantsHeadline: "UN founding support",
 privateHeadline: "Crops + solidarity",
 grants: [
 {
 source: "United Nations support for the 1979 refugee settlement",
 amount: "Amount unpublished",
 year: "1979",
 certainty: "documented",
 kind: "grant",
 note: "European Longo Maï cooperatives founded Finca Sonador with UN support as a project for Nicaraguan refugees. The cash figure was not published in the sources assembled here.",
 },
 {
 source: "TO DO Award for socially responsible tourism",
 amount: "Recognition",
 year: "2004",
 certainty: "documented",
 kind: "award",
 note: "Award for human-rights-aware tourism. Status.",
 },
 ],
 private: [
 {
 source: "Coffee, sugarcane, and subsistence surplus; European Longo Maï solidarity; visitor stays",
 amount: "Farm + solidarity",
 certainty: "estimated",
 kind: "business",
 note: "The village feeds itself and sells cash crops. European sister cooperatives still send people and support. Visitors stay up to a year. No condominio lot sales.",
 },
 ],
 },
 "maya-mountain": {
 overview:
 "A 70-acre NGO farm funded by intern stays, cacao, and the founder’s decades of work. Registered as a Belizean NGO in 2004 after Christopher Nesbitt’s years with Green & Black’s. Carbon farming is a program.",
 grantsHeadline: "NGO status 2004",
 privateHeadline: "Interns + cacao",
 grants: [
 {
 source: "Belize NGO registration and partner-NGO / university projects",
 amount: "Program support, unpublished totals",
 year: "2004–",
 certainty: "estimated",
 kind: "grant",
 note: "The farm has partnered with NGOs, CBOs, and universities (including managing the Belizean Maya Ethnobotanical Research Project for the University of Florida). Individual grant lines were not published as a single ledger.",
 },
 ],
 private: [
 {
 source: "Intern and student stays; fine-flavor cacao and agroforestry products",
 amount: "Earned income",
 certainty: "documented",
 kind: "courses",
 note: "Interns, students, and visiting groups pay to live and work on the farm. Cacao and other products from the 25-acre food forest are the agricultural cash.",
 },
 {
 source: "Founder labor and farm equity since 1988",
 amount: "Sweat + land",
 year: "1988–",
 certainty: "estimated",
 kind: "member-equity",
 note: "Christopher Nesbitt restored the hillside for sixteen years before the NGO shell. That is the original capital.",
 },
 ],
 },
 pachamama: {
 overview:
 "A privately purchased cattle farm turned spiritual village. Retreats and workshops are the cash engine; the community says income is reinvested. No government land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Retreats + land",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published government construction or land-purchase grant of record. The village funded itself through the founding purchase, resident life, and retreat income.",
 },
 ],
 private: [
 {
 source: "1999 land purchase (former cattle farm) and resident community",
 amount: "Private land + life",
 year: "1999",
 certainty: "estimated",
 kind: "member-equity",
 note: "Tyohar and fellow travellers took on ~500 acres of pasture. Residents live by membership, not lot sales.",
 },
 {
 source: "Retreats, workshops, and silent sittings",
 amount: "Course and lodging income",
 certainty: "documented",
 kind: "courses",
 note: "The nonprofit centre of transformation hosts visitors; the village says all income is reinvested in operation, maintenance, and growth.",
 },
 ],
 },
 imap: {
 overview:
 "A Maya Kaqchikel ONG funded as an education and seed institute: workshops, a living seed bank, ecological cabins, and prize recognition.",
 grantsHeadline: "Spring Prize shortlist",
 privateHeadline: "Courses + seed",
 grants: [
 {
 source: "Lush Spring Prize shortlist, Instituto Mesoamericano de Permacultura",
 amount: "Recognition (shortlist)",
 certainty: "documented",
 kind: "award",
 note: "Public prize recognition for training 10,000+ smallholder farmers and holding a living seed bank. Shortlist status is documented; a cash award amount is not treated as a land grant here.",
 },
 ],
 private: [
 {
 source: "Workshops, ecological cabins, seed and plant catalogue",
 amount: "Course and lodging income",
 certainty: "documented",
 kind: "courses",
 note: "IMAP sells education, seed, and stays at Pachitulul. Donor support for an Indigenous ONG sits beside earned income; totals unpublished.",
 },
 ],
 },
 "rancho-mastatal": {
 overview:
 "A founder-built teaching ranch. Course fees and an ecolodge pay the 300-acre refuge. No government land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Courses + lodge",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "The wildlife-refuge overlay is a conservation designation. Tim O’Hara and Robin Nunes built it as a private education centre.",
 },
 ],
 private: [
 {
 source: "Permaculture, natural-building, and related courses; ecolodge and farm-to-table stays",
 amount: "Course and lodging income",
 certainty: "documented",
 kind: "courses",
 note: "PDC, earthen and bamboo building, fermentation, agroforestry, wilderness medicine. Apprentices pay with work and fees. This is the ranch’s business.",
 },
 {
 source: "Founders’ purchase and build-out, 2001–",
 amount: "Private farm equity",
 year: "2001",
 certainty: "estimated",
 kind: "member-equity",
 note: "Two former Peace Corps volunteers bought and built the teaching ranch.",
 },
 ],
 },
 "bona-fide": {
 overview:
 "A U.S. 501(c)(3) and Nicaraguan NGO farm on Ometepe. Internship fees and tax-deductible gifts pay a 26-acre demonstration. No government land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Interns + gifts",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Project Bona Fide is a charity farm. U.S. 501(c)(3) status makes gifts deductible.",
 },
 ],
 private: [
 {
 source: "Three-month internships (room, board, Spanish, project seed fund)",
 amount: "Program fees",
 certainty: "documented",
 kind: "courses",
 note: "Interns pay to live and work on the farm. A published seed fund (historically about $300 per intern) is part of the package.",
 },
 {
 source: "Donations to the U.S. 501(c)(3)",
 amount: "Gifts unpublished in aggregate",
 certainty: "estimated",
 kind: "donation",
 note: "Tax-deductible gifts from U.S. supporters. Michael Judd’s 2001 founding is the original equity.",
 },
 ],
 },
 ipes: {
 overview:
 "A farmer NGO on a one-hectare classroom. International volunteers and unpublished NGO support sit beside campesino membership.",
 grantsHeadline: "NGO program support",
 privateHeadline: "Volunteers + farmers",
 grants: [
 {
 source: "International NGO and solidarity support for campesino training",
 amount: "Unpublished totals",
 certainty: "estimated",
 kind: "grant",
 note: "IPES has operated as a grassroots NGO since 2002. Specific government construction grants were not found. Program money, when it arrives, trains farmers, it does not buy a village.",
 },
 ],
 private: [
 {
 source: "Volunteer stays and campesino-a-campesino membership",
 amount: "Labor + modest fees",
 certainty: "estimated",
 kind: "donation",
 note: "Historically ~8 paid staff and ~25 volunteers. Farmers in the network are the members. The hectare was never sold as lots.",
 },
 ],
 },
 "finca-bellavista": {
 overview:
 "A rainforest subdivision funded by parcel sales. Andrews and Hogan bought 62 timber-sale acres in 2006 and grew the finca with lot money and lodging. No government land grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Treehouse parcels",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Saving the original 62 acres from a timber harvest was a private purchase.",
 },
 ],
 private: [
 {
 source: "Freehold parcel sales (¼–3 acres) and treehouse lodging",
 amount: "Lot sales + stays",
 certainty: "documented",
 kind: "member-equity",
 note: "Owners buy title under Community Guidelines and finance their own treehouses. Lodging and tours are the hospitality layer. Expansion from 62 toward 600 acres was paid this way.",
 },
 ],
 },
 "la-ecovilla": {
 overview:
 "A Costa Rican condominio funded by lot sales. Netflix’s Down to Earth with Zac Efron was publicity. San Mateo (2023) is a larger lot-sales expansion on regenerated land.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Condominio lots",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published government land-purchase grant. The original 42 acres were a private cattle-farm conversion.",
 },
 ],
 private: [
 {
 source: "Condominio lot sales (original 48 families; San Mateo expansion)",
 amount: "Lot sales",
 certainty: "documented",
 kind: "member-equity",
 note: "Each family buys a lot and co-owns the commons. Households finance their own houses. San Mateo (~220 ha, 2023) continues the same capital structure at a larger scale.",
 },
 {
 source: "Netflix Down to Earth (Zac Efron) feature",
 amount: "Publicity, not cash",
 certainty: "documented",
 kind: "award",
 note: "International attention. Useful for sales; it did not buy the Machuca land.",
 },
 ],
 },
 "brave-earth": {
 overview:
 "A shareholder commons and retreat centre. Ma Earth donors gave $32,602.43 from 147 people. U.S. gifts go through Amigos de Costa Rica as fiscal sponsor. Shares and lodging are the rest.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Ma Earth $32.6k + shares",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published Costa Rican government land-purchase grant. U.S. 501(c)(3) fiscal sponsorship (Amigos de Costa Rica) makes gifts deductible.",
 },
 ],
 private: [
 {
 source: "Ma Earth donor round, Tierra Valiente / Brave Earth",
 amount: "$32,602.43",
 year: "2020s",
 certainty: "documented",
 kind: "donation",
 note: "Public ledger: 147 unique donors, three projects. Crowdfunding received by Asociación Tierra Valiente Trust via Amigos de Costa Rica. Private gifts.",
 },
 {
 source: "Shareholder buy-in (up to 40 shares) and retreat lodging",
 amount: "Shares + stays",
 certainty: "documented",
 kind: "member-equity",
 note: "Shares fund private living structures on the 80-acre commons. Gaia Domes, tambos, and jungle huts are the earned-income face. Work-exchange is closed.",
 },
 ],
 },
 lama: {
 overview:
 "A mountain 501(c)(3) funded by retreats, summer residencies, and gifts. Be Here Now was produced here; that is cultural capital. The 1996 fire was a disaster that had to be rebuilt from donations and labor.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Retreats + gifts",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published federal or New Mexico land-purchase grant. Lama bought and kept the mountain as a 501(c)(3). Historic-preservation packages of the Sabbathday Lake type are not documented here.",
 },
 ],
 private: [
 {
 source: "Retreats, community camp, and summer steward stays",
 amount: "Stays + teachings",
 certainty: "documented",
 kind: "courses",
 note: "The ordinary cash engine. Guest housing and programs, not lot sales. Call ahead.",
 },
 {
 source: "Donations to Lama Foundation (EIN 85-0202741)",
 amount: "Gifts (990 scale)",
 certainty: "estimated",
 kind: "donation",
 note: "A small 501(c)(3). Public 990s exist; there is no single published capital campaign that bought the 105 acres in 1967. Rebuild after the 5 May 1996 Hondo Fire was gifts and labor.",
 },
 {
 source: "Be Here Now / Lama Foundation Press (historical)",
 amount: "Cultural",
 year: "1971",
 certainty: "documented",
 kind: "business",
 note: "Ram Dass finished and first produced Be Here Now at Lama. Famous, and useful to the Foundation’s identity; it did not endow the mountain as a trust.",
 },
 ],
 },
 arcosanti: {
 overview:
 "An Arizona 501(c)(3) whose prototype town was built by workshop labor and paid for by Soleri windbells, tours, guest rooms, and donations. State land is leased, not granted as freehold. No published federal construction grant built the apses.",
 grantsHeadline: "State land lease",
 privateHeadline: "Bells + tours + workshops",
 grants: [
 {
 source: "Arizona State Land Department, preserve leases",
 amount: "~3,200 acres leased",
 certainty: "documented",
 kind: "other",
 note: "Two state parcels totaling about 3,200 acres leased as open space, plus 860 acres owned by the Foundation. This is tenure. It is the reason the preserve is ~4,060 acres.",
 },
 ],
 private: [
 {
 source: "Soleri bronze and ceramic windbells",
 amount: "Foundry sales (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "The public cash engine for Cosanti and Arcosanti. Bells sold on site and online support the Foundation’s mission. Not member equity.",
 },
 {
 source: "Tours, guest rooms, café, and workshops",
 amount: "Visitors + courses",
 certainty: "documented",
 kind: "courses",
 note: "Daily tours (historically tens of thousands of visitors a year), overnight rooms, and workshop fees. More than 8,000 students and volunteers historically built the place by hand, labor as capital.",
 },
 {
 source: "Donations to The Cosanti Foundation",
 amount: "Gifts",
 certainty: "documented",
 kind: "donation",
 note: "The 501(c)(3) takes gifts. Paolo Soleri’s original 1970 land purchase of 860 acres was Foundation / founder capital.",
 },
 ],
 },
 "alpha-farm": {
 overview:
 "A common-purse Coast Range farm. Caroline Estes put up most of the purchase money in 1972. The Alpha-Bit Café and member labor paid the decades after. No government land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Founder capital + common purse",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published Oregon or federal grant bought the 280 acres. Alpha is a cooperative that pooled private money and work.",
 },
 ],
 private: [
 {
 source: "Caroline Estes and founding members, land purchase",
 amount: "Majority of 1972 purchase",
 year: "1972",
 certainty: "documented",
 kind: "member-equity",
 note: "Friends Journal and University of Oregon archives: Estes contributed the vast majority of the money used to buy Alpha Farm. That became common title, not her private lot.",
 },
 {
 source: "Common purse (farm, mail route, stipends) and Alpha-Bit Café",
 amount: "Pooled earnings",
 certainty: "documented",
 kind: "business",
 note: "Income-sharing: on-farm work and outside jobs (historically a rural mail route) go to the cooperative. The Mapleton café was the public business for years.",
 },
 ],
 },
 sirius: {
 overview:
 "A 501(c)(3) education centre and spiritual community on 90 acres. Courses, internships, and gifts pay the place. No published Massachusetts land-purchase grant.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Courses + gifts",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published state or federal grant bought the Shutesbury land in 1978. The nonprofit holds title; programs and gifts keep it.",
 },
 ],
 private: [
 {
 source: "Educational programs, internships, and exploring-member stays",
 amount: "Courses + stays",
 certainty: "documented",
 kind: "courses",
 note: "The public-benefit half of the 501(c)(3). Tens of thousands of visitors since 1978 paid for programs, not for lots.",
 },
 {
 source: "Donations and resident contribution",
 amount: "Gifts + labor",
 certainty: "estimated",
 kind: "donation",
 note: "Residents maintain households and land. The charity accepts gifts.",
 },
 ],
 },
 huehuecoyotl: {
 overview:
 "A five-acre asociación. Theatre, courses, and gatherings pay a small mountain village. No Mexican federal land-purchase grant of record, and no lot sales.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Courses + culture",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published SEMARNAT or SEDATU grant bought the Tepoztlán five acres. Alberto Ruz and the Illuminated Elephants assembled a small deed.",
 },
 ],
 private: [
 {
 source: "Educational and cultural programs, visiting groups",
 amount: "Courses + stays",
 certainty: "documented",
 kind: "courses",
 note: "Five acres cannot run a CSA at Whole Village scale. Programs and a resident village are the economy.",
 },
 {
 source: "Founding troupe labor (Illuminated Elephants)",
 amount: "Sweat equity",
 year: "1982",
 certainty: "estimated",
 kind: "member-equity",
 note: "A travelling theatre commune settled the mountain. That is founding labor.",
 },
 ],
 },
 "cite-ecologique": {
 overview:
 "A school-centred village whose enterprises (especially Kheops International) pay a hundred residents on 700 acres. A 1990 bankruptcy closed the first legal shell; the businesses and school continued. No Quebec land-purchase grant for the original farm.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Kheops + farm + school",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published Quebec or federal grant bought the Ham-Nord land in 1984. 1988 investigations found no irregularities; 1990 was a bankruptcy.",
 },
 ],
 private: [
 {
 source: "Kheops International (art and metaphysical gifts)",
 amount: "~CAD $2M sales; ~25 staff (c. 2011)",
 year: "2011",
 certainty: "documented",
 kind: "business",
 note: "The best-documented enterprise number: about two million Canadian dollars and 25 people around 2011. Still a village business.",
 },
 {
 source: "Ferme Bio-Maraîchère, maple, boutique, and school",
 amount: "Farm + tuition/enterprise",
 certainty: "documented",
 kind: "business",
 note: "Organic fields (~100 of 700 acres), maple, and a school from kindergarten through graduation. Members live inside the enterprises.",
 },
 ],
 },
 acorn: {
 overview:
 "An income-sharing farm whose cash engine is Southern Exposure Seed Exchange, taken on in 1999. Twin Oaks helped a spin-off get land in 1993. No Virginia land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "SESE seed business",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published USDA or Virginia grant bought the Mineral farm. Do not attach California 501(c)(3) Acorn Community Enterprises EIN 68-0434948, that is a different organization.",
 },
 ],
 private: [
 {
 source: "Southern Exposure Seed Exchange",
 amount: "Seed catalogue (ongoing)",
 year: "1999–present",
 certainty: "documented",
 kind: "business",
 note: "Open-pollinated and heirloom seed for the Southeast, packed on the farm. Taken on from Jeff McCormack in 1999. The reason Acorn can income-share without a tofu plant the size of Twin Oaks.",
 },
 {
 source: "Twin Oaks spin-off support and member labor",
 amount: "Founding help + common purse",
 year: "1993",
 certainty: "estimated",
 kind: "member-equity",
 note: "Twin Oaks was full; a group started Acorn. FEC mutual aid and pooled labor.",
 },
 ],
 },
 "las-canadas": {
 overview:
 "An inherited cattle ranch converted with sweat, trees, courses, cheese, and a seed bank. No published Mexican federal grant bought the 306 hectares.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Courses + dairy + seed",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Ricardo Romero inherited 306 ha. Conversion from 1995 was private and cooperative. Cloud-forest conservation is land use.",
 },
 ],
 private: [
 {
 source: "Inherited ranch title (Ricardo Romero)",
 amount: "306 ha cattle ranch",
 year: "1995",
 certainty: "documented",
 kind: "member-equity",
 note: "The founding capital was land already in the family, then opened to a cooperativa.",
 },
 {
 source: "Courses, cheese, seed bank, and cooperative income",
 amount: "Courses + dairy",
 certainty: "documented",
 kind: "courses",
 note: "PDC, agroecology, bioconstruction, silvopasture, a living seed bank, and cloud-forest dairy. The cooperativa shares income from teaching and food.",
 },
 ],
 },
 "our-ecovillage": {
 overview:
 "A 25-acre teaching co-op paid for by PDCs, cob courses, internships, and a CSA. No published BC land-purchase grant.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "PDC + cob + CSA",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published British Columbia or federal grant bought Baldy Mountain Road. The Community Services Cooperative is the shell; courses are the cash.",
 },
 ],
 private: [
 {
 source: "Permaculture design courses, natural building, internships",
 amount: "Courses + stays",
 certainty: "documented",
 kind: "courses",
 note: "The public face of the 25 acres. Students pay; the demonstration site teaches. Not strata-lot sales.",
 },
 {
 source: "CSA and member co-op equity",
 amount: "Shares + produce",
 certainty: "estimated",
 kind: "member-equity",
 note: "A small adult membership (~12) plus a CSA. Multi-stakeholder co-op equity.",
 },
 ],
 },
 "whole-village": {
 overview:
 "Eight families bought 191 acres in 2002; Greenhaven was built in 2004; a 999-year conservation easement with the Escarpment Biosphere Conservancy restricts use. The easement is a covenant. CSA and co-op shares are the rest.",
 grantsHeadline: "999-year easement (not cash)",
 privateHeadline: "Member buy-in + CSA",
 grants: [
 {
 source: "Escarpment Biosphere Conservancy, 999-year conservation easement",
 amount: "Use restriction",
 certainty: "documented",
 kind: "easement",
 note: "Attached to the deed: farmland, forest, and a provincially significant wetland (27 acres) plus hardwood (14 acres); housing cluster excepted. A conservation covenant. Credit Valley Conservation has been a stewardship partner.",
 },
 ],
 private: [
 {
 source: "Member purchase of 191 acres (Whole Village King Ltd → co-op)",
 amount: "Eight-family buy-in (2002)",
 year: "2002",
 certainty: "documented",
 kind: "member-equity",
 note: "A minority of the original planning group closed on the Caledon farm. Later converted to Whole Village Property Co-operative Inc. Greenhaven (15,000 sq ft, 2004) was member-financed construction.",
 },
 {
 source: "Whole Village CSA and resident meal plan",
 amount: "Harvest shares",
 certainty: "documented",
 kind: "business",
 note: "Young farmers grow; GTA households buy CSA shares (June–October in published descriptions). A resident meal plan has been offered. Operating income, not the land purchase.",
 },
 ],
 },
 botton: {
 overview:
 "The first Camphill village sits inside a national charity whose care contracts dwarf the dale’s café. Public money is local-authority social care for the whole Camphill Village Trust. Private money is the 1955 Macmillan land gift, donations to the charity, and Esk Valley’s pooled Shared Lives households.",
 grantsHeadline: "CVT care contracts £17.3M (all sites)",
 privateHeadline: "Macmillan land + £7.2M gifts (all sites)",
 grants: [
 {
 source: "Local-authority and other government care contracts (Camphill Village Trust, all sites)",
 amount: "£17.3 million",
 year: "FY 2024–25",
 certainty: "documented",
 kind: "contract",
 note: "Charity Commission: £17,250,908 from 121 government contracts in the year ending 31 March 2025, inside total income of £35.4 million. This is the whole Trust (several communities in England and Scotland), not Botton alone. Many people at Botton still live on local-authority support packages. Esk Valley households sit in a Shared Lives scheme with The Avalon Group for North Yorkshire.",
 },
 ],
 private: [
 {
 source: "Macmillan family gift of Botton",
 amount: "600-acre dale",
 year: "1955",
 certainty: "documented",
 kind: "donation",
 note: "The founding capital of the village. Alistair Macmillan, who had a learning disability, later lived there.",
 },
 {
 source: "Donations and legacies (Camphill Village Trust, all sites)",
 amount: "£7.16 million",
 year: "FY 2024–25",
 certainty: "documented",
 kind: "donation",
 note: "Charity Commission figure for the whole charity, not Botton alone. The Trust’s fundraising team has publicly aimed at £1–1.5 million a year in philanthropic income on top of statutory care.",
 },
 {
 source: "Farms, bakery, café, workshops; Esk Valley pooled household income",
 amount: "Earned + Shared Lives",
 certainty: "estimated",
 kind: "business",
 note: "Biodynamic produce, a café, and historically the first Jenga sets. EVCC pools the income each household receives. Lots are not for sale.",
 },
 ],
 },
 limans: {
 overview:
 "A wage-free cooperative whose land sits in a Swiss foundation. Donations through Pro Longo Maï have historically been about half the budget; the rest is produce and agricultural subsidies. The 1973 purchase was 450,000 francs.",
 grantsHeadline: "French agricultural subsidies (unquantified)",
 privateHeadline: "Donations ~50% of budget",
 grants: [
 {
 source: "French / EU agricultural subsidies on the Limans farms",
 amount: "Unpublished share of farm income",
 certainty: "estimated",
 kind: "grant",
 note: "Longo Maï has described each farm’s income as produce, agricultural subsidies, and donations. No published hectare-payment figure for Limans alone.",
 },
 ],
 private: [
 {
 source: "1973 land purchase (three hamlets at Limans)",
 amount: "450,000 francs",
 year: "1973",
 certainty: "documented",
 kind: "member-equity",
 note: "Young people from May ’68 bought unproductive land and three derelict hamlets in July 1973, found with help from Pierre Pellegrin. Title later locked in the Swiss European Land Fund.",
 },
 {
 source: "Pro Longo Maï donations",
 amount: "~50% of budget; ~10,000 donors",
 year: "1974–present",
 certainty: "documented",
 kind: "donation",
 note: "Association founded in 1974 to pool donations. Le Monde diplomatique (2023): donations still represent about half of Longo Maï’s budget. Insulates the cooperative from having to turn a profit. The donor face.",
 },
 {
 source: "Produce, wool, and solidarity among sister farms",
 amount: "Farm income, no wages",
 certainty: "documented",
 kind: "business",
 note: "Sheep, gardens, cereals, wool (Briançon processes tonnes a year). No salaries. Goods and people move among European Longo Maï farms and to Finca Sonador in Costa Rica.",
 },
 ],
 },
 "los-portales": {
 overview:
 "A small Andalusian asociación on a privately held finca. No published Spanish land-purchase grant. Courses, ESC volunteers, and organic agriculture keep the 200 hectares in the association’s work.",
 grantsHeadline: "ESC host (EU volunteer, not land)",
 privateHeadline: "Finca + courses + farm",
 grants: [
 {
 source: "European Solidarity Corps / volunteer hosting",
 amount: "Volunteer placements",
 certainty: "documented",
 kind: "grant",
 note: "Los Portales has been a quality-labelled ESC host. That is EU volunteer support.",
 },
 ],
 private: [
 {
 source: "Finca Los Portales (association land)",
 amount: "200 ha Sierra Morena farm",
 year: "1984",
 certainty: "estimated",
 kind: "member-equity",
 note: "A Brussels circle took the finca in the 1980s. No published auction price. The land is held for the association’s work, not subdivided.",
 },
 {
 source: "Organic agriculture, courses, and association activity",
 amount: "Farm + education",
 certainty: "documented",
 kind: "courses",
 note: "Most of the finca stays wild. Earned income is food, teaching, and volunteers. Lots are not for sale.",
 },
 ],
 },
 "torri-superiore": {
 overview:
 "A restored medieval hamlet paid for by private apartment restorations, a guesthouse cooperative, volunteers, and a mix of public and European project money (including Erasmus+). No published figure for the whole stack.",
 grantsHeadline: "Erasmus+ and public restoration funds",
 privateHeadline: "20 apartments + guesthouse",
 grants: [
 {
 source: "European projects (Erasmus+) and public restoration funds",
 amount: "Unpublished mix",
 certainty: "documented",
 kind: "grant",
 note: "Interreg Europe’s good-practice note: the eco-village was financed through private and public funds as well as European projects (Erasmus+). Amounts for the hamlet as a whole are not published. Volunteers included Legambiente and International Civil Service.",
 },
 ],
 private: [
 {
 source: "Private restoration of about twenty apartments",
 amount: "Member freehold in the stack",
 year: "1989–present",
 certainty: "documented",
 kind: "member-equity",
 note: "The association owns the public half; members restored and own about twenty apartments in the other half. Lime, timber, and decades of work.",
 },
 {
 source: "Ture Nirvane guesthouse, courses, and organic gardens",
 amount: "Eco-tourism income",
 year: "1999",
 certainty: "documented",
 kind: "courses",
 note: "The 1999 social cooperative runs stays and workshops. Member of Legacoop Liguria and Banca Etica. Operating income, not the original ruin.",
 },
 ],
 },
 "krishna-valley": {
 overview:
 "A Hungarian Krishna-conscious farm-village paid for by devotee donations (the 1993 land auction), visitor tickets, and at least one later grant for a reception building. Title sits with the church, not with household lots.",
 grantsHeadline: "Reception-building grant (c. 2012)",
 privateHeadline: "1993 auction + visitor tickets",
 grants: [
 {
 source: "Grant for the brick-and-wood reception building",
 amount: "Unpublished",
 year: "c. 2012",
 certainty: "documented",
 kind: "grant",
 note: "At the 2013 twenty-year celebration: Krishna Valley received a grant the previous year for the entrance building (information, toilets, product showroom) and a themed ecological path. Amount unpublished.",
 },
 ],
 private: [
 {
 source: "Hungarian donations, 120 ha at auction",
 amount: "Founding land purchase",
 year: "1993",
 certainty: "documented",
 kind: "donation",
 note: "Devotees bought about 120 hectares at auction with Hungarian donations; the holding later grew toward 266–300 ha. Sivarama Swami is the founding spiritual figure. Groundbreaking February 1994.",
 },
 {
 source: "Visitor tickets, festivals, guesthouse, and farm products",
 amount: "Temple-village earned income",
 certainty: "documented",
 kind: "business",
 note: "A public eco-farm and cultural centre south of Lake Balaton. Organic produce, cow protection, and donations sit beside ticketed visits.",
 },
 ],
 },
 "brithdir-mawr": {
 overview:
 "An off-grid housing co-op on leased land. The founding capital was Julian Orbach’s farm. In 2024 the farm sold for about £1 million while the co-op was still trying to raise a matching bid.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Lease, then a £1M sale",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "The famous planning fight produced Low Impact Development policy. National Park is a planning overlay or funder of the roundhouse.",
 },
 ],
 private: [
 {
 source: "Julian Orbach farm (lease to the housing co-op)",
 amount: "~80 acres (originally ~160)",
 year: "1993",
 certainty: "documented",
 kind: "member-equity",
 note: "Orbach and Emma Orbach set up on a rundown farm without planning permission. After a split with Tir Ysbrydol, the co-op leased the farmyard half.",
 },
 {
 source: "2024 sale (community bid vs retreat-centre buyer)",
 amount: "~£1 million",
 year: "2024",
 certainty: "documented",
 kind: "other",
 note: "BBC and the community’s own timeline: first refusal, a ten-year attempt to raise £1 million, then a sale to a buyer planning a retreat centre. Eviction notice; some members left by 31 December, others occupied into 2025. This is a title fight.",
 },
 ],
 },
 keuruu: {
 overview:
 "A Finnish registered association that bought and still holds a 53-hectare farm. No published national land-purchase grant. Membership, organic farming, and talkoot are the rest.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Association farm + talkoot",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published Finnish or EU figure for the 1997 land purchase. Hosting a GEN-Europe assembly (2009) is prestige.",
 },
 ],
 private: [
 {
 source: "Keuruun ekokylä ry purchase of the farm",
 amount: "53 ha (25 arable, 17 forest)",
 year: "1997",
 certainty: "documented",
 kind: "member-equity",
 note: "The association owns the land. Members join the ry; they do not buy apartment-company shares. Founding capital is the farm, paid by the people who formed the village.",
 },
 {
 source: "Organic farming, courses, and talkoot labour",
 amount: "Produce + unpaid work bees",
 certainty: "estimated",
 kind: "business",
 note: "Ordinary association income plus the Finnish custom of showing up to work.",
 },
 ],
 },
 hurdal: {
 overview:
 "Two money stories. Phase one: a cooperative on a rented municipal farm, sweat, straw bale. Phase two: Filago AS scaled Huldra Økogrend; ENOVA granted 12.9 million NOK for the first building stage in 2013; households took mortgages on timber houses.",
 grantsHeadline: "ENOVA 12.9 MNOK (2013)",
 privateHeadline: "House sales + mortgages",
 grants: [
 {
 source: "ENOVA, Huldra Økogrend first building stage",
 amount: "12.9 million NOK",
 year: "2013",
 certainty: "documented",
 kind: "grant",
 note: "Norwegian energy-agency support for the plus-energy housing area (første byggetrinn). A grant to the scaled eco-neighbourhood. Municipality of Hurdal had offered Gjøding farm around 2001–02 as a rental.",
 },
 ],
 private: [
 {
 source: "Kilden cooperative, sweat equity on rented Gjøding",
 amount: "Nine straw-bale houses",
 year: "2002–03",
 certainty: "documented",
 kind: "member-equity",
 note: "Equal shares in a cooperative that rented the former rectory farm. Historical form. Not the current title of the 70-house cluster.",
 },
 {
 source: "Filago AS house sales and household mortgages",
 amount: "~64–70 dwellings",
 year: "2010s",
 certainty: "documented",
 kind: "loan",
 note: "The scale-up is ordinary Nordic housing finance with an eco-label: privately owned timber houses, a realsameie for commons, developer debt. Academic papers record financial strain and a shift from spiritual co-op to market eco-housing. You can buy a dwelling when one comes up.",
 },
 ],
 },
 suderbyn: {
 overview:
 "A 5-hectare Gotland lab whose basic infrastructure was an EAFRD rural-development package, topped up by Swedish regional money and private funds. RELEARN’s volunteer and research projects are the operating engine.",
 grantsHeadline: "EAFRD €74k + regional €32k",
 privateHeadline: "€52k private + ESC years",
 grants: [
 {
 source: "EAFRD, community-led development of the ecovillage",
 amount: "€74,347",
 year: "2010s",
 certainty: "documented",
 kind: "grant",
 note: "EU CAP Network good practice: EAFRD €74,347 of a €158,484 total budget for basic infrastructure, landscaping, environmentally friendly accommodation, wastewater, food and energy. A construction/infrastructure grant.",
 },
 {
 source: "Swedish national / regional rural-development match",
 amount: "€31,823",
 year: "2010s",
 certainty: "documented",
 kind: "grant",
 note: "Same EAFRD package. National/regional contribution listed beside the European share.",
 },
 ],
 private: [
 {
 source: "Private contribution to the EAFRD package; 2008 farm purchase",
 amount: "€52,314 + the old farm",
 year: "2008",
 certainty: "documented",
 kind: "member-equity",
 note: "Ingrid Gustafsson and Robert Hall bought an old farm at Västerhejde in 2008 after two years of preparation. The EAFRD sheet lists €52,314 private alongside the public money.",
 },
 {
 source: "RELEARN, ESC / Green Skills volunteers and EU research projects",
 amount: "Volunteer years + project grants",
 year: "2010–present",
 certainty: "documented",
 kind: "courses",
 note: "Since 2010 the NGO has hosted year-long Green Skills programmes. Research and volunteer projects fund some paid NGO posts. Volunteers are not members of the cooperative. Operating income, not the land title.",
 },
 ],
 },
 aardehuis: {
 overview:
 "Twenty-three earthships privately financed after the 2008 crisis, with a municipality as planning partner, a social-housing provider on three units, a recycling firm on materials, and some two thousand volunteers on the build. Total construction about €5 million. No Dutch land-purchase grant of record.",
 grantsHeadline: "Municipal land partnership (not cash)",
 privateHeadline: "€5M private build + 3 social units",
 grants: [
 {
 source: "Municipality of Olst-Wijhe, site and adopted extra hectare",
 amount: "Partnership",
 year: "2012–15",
 certainty: "documented",
 kind: "other",
 note: "After a long search the municipality partnered; the group settled for 1.2 ha when they had wanted five, and later ‘adopted’ an extra hectare for community use. Transition Network and ECOLISE tell that story. It is planning and land access.",
 },
 ],
 private: [
 {
 source: "23 households, private finance of the earthships",
 amount: "~€5 million total construction",
 year: "2012–15",
 certainty: "documented",
 kind: "member-equity",
 note: "Transition Network / published project notes: total cost about €5 million; 4½ years; about 40 residents and 1,500–2,000 volunteers from dozens of countries. ECOLISE: twenty-three families privately financed the project after the 2008 crisis, with no real access to collective financing. Mortgages and savings.",
 },
 {
 source: "Social-housing partner, three of 23 homes",
 amount: "3 units",
 year: "2012–15",
 certainty: "documented",
 kind: "loan",
 note: "A social-housing provider financed three homes so the cluster was not only owner-occupiers. A recycling company supplied materials. Partner finance, not the vereniging’s land title.",
 },
 ],
 },
 "comunidad-del-sur": {
 overview:
 "A 1955 anarchist collective whose money was a common purse, then a press. No Uruguayan land-purchase grant of record. Private money is member labour, Nordan and Tryckop sales, and the agrarian co-op, not lot sales.",
 grantsHeadline: "None documented",
 privateHeadline: "Common purse + Nordan press",
 grants: [noneFound],
 private: [
 {
 source: "Common purse and member labour (classic years)",
 amount: "Internal, unpublished",
 year: "1955–73",
 certainty: "documented",
 kind: "member-equity",
 note: "To each according to need inside the collective’s means. Malvín Norte was a household purchase. The 1973 coup ended that chapter.",
 },
 {
 source: "Editorial Nordan, Tryckop workshops, CODEUCA, ECOSUR",
 amount: "Cooperative sales, not equity",
 year: "1970s–present",
 certainty: "documented",
 kind: "business",
 note: "The Swedish exile founded the press; the return kept it. Publishing, education, and the agrarian co-op are the living economy.",
 },
 ],
 },
 penalolen: {
 overview:
 "An urban-edge copropiedad whose land was bought as parcels on a dry hillside, not granted as a commune. No Chilean construction grant of record for the eco-neighborhood as a whole. Private money is household sitios.",
 grantsHeadline: "None documented",
 privateHeadline: "Private sitios, 1980–",
 grants: [noneFound],
 private: [
 {
 source: "Founders’ purchase of Lo Hermida hillside parcels",
 amount: "About 20 parcels (sitios inside them)",
 year: "1980",
 certainty: "documented",
 kind: "member-equity",
 note: "Young buyers walked onto barren land (no water, no services) and built a copropiedad. Amounts per parcel are not published in the sources assembled here. Adobe and the forest followed.",
 },
 {
 source: "Household building and water on private sitios",
 amount: "Household finance",
 year: "1980s–present",
 certainty: "estimated",
 kind: "member-equity",
 note: "Houses sit closer to freehold-plus-junta than to a housing-co-op share.",
 },
 ],
 },
 "eco-truly": {
 overview:
 "A small Vaishnava beach village whose operating money is visitor tickets, a simple guesthouse, volunteers, and donations. No Peruvian land-purchase grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Visitor tickets + donations",
 grants: [noneFound],
 private: [
 {
 source: "Visitor tickets, guided tours, and a simple guesthouse",
 amount: "Tens of thousands of visits over two decades",
 year: "1994–present",
 certainty: "documented",
 kind: "courses",
 note: "The project has claimed more than 75,000 visitors in its first two decades. Lima day-trippers and international guests. Operating income.",
 },
 {
 source: "Donations, volunteers, and devotee labour on former sand",
 amount: "Unpublished",
 year: "1994–present",
 certainty: "estimated",
 kind: "donation",
 note: "Cone houses and gardens on land that was sand at 2.5 m above sea level. Religious community economy.",
 },
 ],
 },
 "ecovilla-gaia": {
 overview:
 "Asociación Gaia bought a ruined 20.5-hectare dairy at Navarro in May 1996 and ran it as Argentina’s main permaculture demonstration village. Course fees are the operating engine. No Argentine land-purchase grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "20.5 ha dairy, 1996 + courses",
 grants: [noneFound],
 private: [
 {
 source: "Asociación Gaia, purchase of the former Lactona dairy",
 amount: "20.5 hectares (price unpublished)",
 year: "May 1996",
 certainty: "documented",
 kind: "member-equity",
 note: "The association, founded 1991 from Amigos de la Tierra, bought the ruined dairy on RP 41. Founders arrived 5 June. Wind and solar followed.",
 },
 {
 source: "PDCs, bioconstruction workshops, Universidad de Permacultura",
 amount: "Course fees, ongoing",
 year: "1996–present",
 certainty: "documented",
 kind: "courses",
 note: "Twenty-three years as a demonstration centre; the public face is now the university. Course students are not members. Operating income from workshops, not from selling house lots.",
 },
 ],
 },
 ipec: {
 overview:
 "A 25-hectare teaching institute on what was silent cattle pasture. Founders bought degraded Cerrado; courses and the Ecoversidade pay the work. Partnerships with Brasília agencies exist; no major land-purchase grant found.",
 grantsHeadline: "Agency partnerships",
 privateHeadline: "25 ha pasture + course fees",
 grants: [
 {
 source: "University of Brasília and public-agency teaching partnerships",
 amount: "Unpublished",
 year: "1998–present",
 certainty: "estimated",
 kind: "other",
 note: "Connections to the university in Brasília and public agencies are part of the record. They are teaching relationships.",
 },
 ],
 private: [
 {
 source: "André Soares and Lucy Legan, purchase of degraded cattle pasture",
 amount: "25 hectares (price unpublished)",
 year: "1998",
 certainty: "documented",
 kind: "member-equity",
 note: "Soares bought cow-trodden Cerrado instead of intact forest, to show a positive human footprint. Legan planted. Private founding purchase.",
 },
 {
 source: "PDCs, bioconstruction courses, Ecoversidade, volunteers",
 amount: "Course and volunteer economy",
 year: "1998–present",
 certainty: "documented",
 kind: "courses",
 note: "Brazil’s best-known teaching ecovillage of this kind. Students come and go.",
 },
 ],
 },
 piracanga: {
 overview:
 "A peninsula village paid for by a private land purchase around 2000, a later nonprofit statute, a retreat enterprise, and private houses. No Brazilian land-purchase grant of record for the river mouth.",
 grantsHeadline: "None documented",
 privateHeadline: "Ataíde land + Unah retreats",
 grants: [noneFound],
 private: [
 {
 source: "Angelina Ataíde, Maraú Peninsula land",
 amount: "Coastal strip (price unpublished)",
 year: "c. 2000",
 certainty: "documented",
 kind: "member-equity",
 note: "Founder bought land where the Rio Piracanga meets the sea and began a holistic centre. Inkiri’s statute (2011) created a nonprofit form later.",
 },
 {
 source: "Unah and other retreats; private dwellings; nature school",
 amount: "Thousands of visitors a year",
 year: "2010s–present",
 certainty: "documented",
 kind: "courses",
 note: "Retreat economy, local employment, biodegradable products, and private houses. Not income-sharing in the Twin Oaks sense. Operating income and household title.",
 },
 ],
 },
 aldeafeliz: {
 overview:
 "A mountain ecoaldea whose association holds about 90% of the land. Workshops and about a thousand visitors a year are the published engine.",
 grantsHeadline: "None documented",
 privateHeadline: "Association land + workshops",
 grants: [noneFound],
 private: [
 {
 source: "Founders’ land and 2009 asociación",
 amount: "~90% of the ecoaldea in the association (hectares unpublished)",
 year: "2006–09",
 certainty: "documented",
 kind: "member-equity",
 note: "An open call in 2006; the nonprofit was created in 2009 so the land would outlive personal projects. Amounts unpublished.",
 },
 {
 source: "Workshops (permaculture, NVC, sociocracy, natural building) and volunteers",
 amount: "~1,000 visitors a year",
 year: "2009–present",
 certainty: "documented",
 kind: "courses",
 note: "On their own count. Course students are not members. GEN lists the community as not open to new members. Operating income.",
 },
 ],
 },
 nashira: {
 overview:
 "The best-documented public housing package in this South American round: municipal and departmental money bought three hectares; women earned houses with labour; later units used public finance. World Habitat recognised the model.",
 grantsHeadline: "130M COP land + public houses",
 privateHeadline: "1,200 labour hours per house",
 grants: [
 {
 source: "Municipality of Palmira and Valle del Cauca department, land at Bolo San Isidro",
 amount: "130 million COP (~USD 35,000)",
 year: "2003",
 certainty: "documented",
 kind: "grant",
 note: "Four women led by Ángela Cuevas Dolmetsch bought the former Malagana sugarcane ground with municipal and departmental money. The cash figure is in the project’s own and World Habitat accounts.",
 },
 {
 source: "Public finance for the remaining 41 houses",
 amount: "41 dwellings (cash contribution from residents: none)",
 year: "2010s",
 certainty: "documented",
 kind: "grant",
 note: "After the first 39 houses (2007), the remaining 41 used public finance without a cash contribution from future residents. A housing-finance package.",
 },
 {
 source: "World Habitat Awards, finalist",
 amount: "Recognition",
 year: "2015",
 certainty: "documented",
 kind: "award",
 note: "World Habitat documented the 1,200-hour labour bargain and the titles in the women’s names. Prestige and a published case, not the land title.",
 },
 ],
 private: [
 {
 source: "Women’s labour toward the first 39 houses",
 amount: "1,200 hours per house; house ~USD 10,000",
 year: "2003–07",
 certainty: "documented",
 kind: "member-equity",
 note: "World Habitat: houses cost about USD 10,000 and were given in exchange for 1,200 hours of labour. Recycled brick. Title in the woman’s name. Sweat equity.",
 },
 {
 source: "Eleven productive núcleos (food, recycling, restaurant, crafts)",
 amount: "Internal enterprise, not equity",
 year: "2007–present",
 certainty: "documented",
 kind: "business",
 note: "A coordinator and the women of each cluster run the internal economy. Operating income of a matriarchal ecoaldea, not lot sales.",
 },
 ],
 },
 "el-manzano": {
 overview:
 "A 120-hectare family farm bought in 1930 and turned into an eco-school in 2007. No Chilean land-purchase grant, the family already held the title. Private money is blueberries, PDCs, and apprenticeships.",
 grantsHeadline: "None documented (inherited farm)",
 privateHeadline: "1930 farm + eco-school fees",
 grants: [noneFound],
 private: [
 {
 source: "Carrión family, Cabrero farm title from 1930",
 amount: "120 hectares (~80 forest, ~30 pasture/crops, ~5 blueberries, ~5 gardens)",
 year: "1930",
 certainty: "documented",
 kind: "member-equity",
 note: "English great-grandfather of co-founder Javiera Carrión bought the farm. Around 2007 three Carrión Raby siblings returned with partners and parents. Inherited freehold.",
 },
 {
 source: "Ecoescuela El Manzano, PDCs, apprenticeships, organic blueberries",
 amount: "Course fees + farm sales",
 year: "2007–present",
 certainty: "documented",
 kind: "courses",
 note: "About seven hours of guided work a day in season. ERES, with Gaia University, followed in 2016 as a nonprofit school. Operating income.",
 },
 ],
 },
 "finca-sagrada": {
 overview:
 "A private biodynamic farm and a valley asociación. No Ecuadorian land-purchase grant of record. The Mooras’ holding (about 20 irrigated acres plus about 800 of mountain) is the capital.",
 grantsHeadline: "None documented",
 privateHeadline: "Private farm + association work",
 grants: [noneFound],
 private: [
 {
 source: "Walter and Susan Davis Moora, Vilcabamba valley farm",
 amount: "~20 acres irrigated + ~800 acres mountain",
 year: "2008",
 certainty: "documented",
 kind: "member-equity",
 note: "Biodynamic farmers and social investors founded the community in an isolated valley. GEN lists about seven residents. Private title.",
 },
 {
 source: "Asociación projects, Kuntur Wachana reforestation, Tumianuma garden, watershed",
 amount: "Association work, unpublished cash",
 year: "2010s–present",
 certainty: "estimated",
 kind: "donation",
 note: "The asociación lends legal personality to grassroots projects. Visitors by arrangement. Ainachay is a related four-hectare centre.",
 },
 ],
 },
 sekem: {
 overview:
 "A biodynamic social enterprise on 70 hectares of Sharqia desert. Public recognition arrived as the Right Livelihood Award; private money as trading-company revenue and a later development-finance shareholder. Education is the foundation’s work, paid by the companies.",
 grantsHeadline: "Right Livelihood 2003",
 privateHeadline: "100M EGP trading + Oikocredit",
 grants: [
 {
 source: "Right Livelihood Award",
 amount: "Honorific prize (cash unpublished here)",
 year: "2003",
 certainty: "documented",
 kind: "award",
 note: "Awarded to SEKEM and Ibrahim Abouleish. Recognition of the desert-farm and social-enterprise model.",
 },
 ],
 private: [
 {
 source: "SEKEM trading companies, ISIS Organic, ATOS, NatureTex, produce",
 amount: "100 million EGP (2003 trading revenue)",
 year: "2003",
 certainty: "documented",
 kind: "business",
 note: "Company sales of organic and biodynamic produce, teas, cotton, and medicines in Egypt and abroad. The holding was formed in 2001. Operating income, not house sales.",
 },
 {
 source: "Oikocredit shareholding",
 amount: "Shareholder (amount unpublished)",
 year: "2012",
 certainty: "documented",
 kind: "member-equity",
 note: "Development-finance cooperative became a shareholder after the Arab Spring. Associated capital, not the landlord of the original 70 hectares.",
 },
 {
 source: "Ibrahim Abouleish, 70 ha desert purchase at Belbeis",
 amount: "70 hectares of untouched desert",
 year: "1977",
 certainty: "documented",
 kind: "member-equity",
 note: "Founder’s land purchase. Later desert reclamation (Wahat) is a separate holding.",
 },
 ],
 },
 wongsanit: {
 overview:
 "An engaged-Buddhist ashram on donated paddies. The capital event is a 1984 land gift to a Thai public-benefit foundation. Operating money is guesthouse stays, workshops, herbal products, and SNF fundraising.",
 grantsHeadline: "None documented",
 privateHeadline: "34 rai donated + stays",
 grants: [noneFound],
 private: [
 {
 source: "M.R. Saisawatdee Svasti, 34 rai gift to SNF",
 amount: "34 rai (~5.4 ha / ~13 acres) of former rice paddies",
 year: "1984",
 certainty: "documented",
 kind: "donation",
 note: "Land donated to the Sathirakoses-Nagapradipa Foundation (public charity no. 501, founded 1968/69). The ashram lives on foundation land.",
 },
 {
 source: "Guesthouse, EDE courses, herbal products, GlobalGiving / SNF fundraising",
 amount: "Stays, workshops, and gifts (unpublished totals)",
 year: "1984–present",
 certainty: "estimated",
 kind: "courses",
 note: "Operating income of an ashram. Gaia Education’s EDE has been hosted since 2007.",
 },
 ],
 },
 ndem: {
 overview:
 "A Sahel villagers’ association that became an ONG. No Senegalese land-purchase grant of record for a single farm title. Maam Samba crafts and a local agroecology economy are the published money.",
 grantsHeadline: "Lush Spring Prize shortlist",
 privateHeadline: "Maam Samba crafts + village economy",
 grants: [
 {
 source: "Lush Spring Prize (shortlisted)",
 amount: "Honorific shortlist (cash unpublished here)",
 year: "2010s–20s",
 certainty: "documented",
 kind: "award",
 note: "Recognition of regenerative work in the peanut basin.",
 },
 ],
 private: [
 {
 source: "Maam Samba artisan cooperative, crafts and baobab",
 amount: "Export sales (Spain, Italy, US; unpublished totals)",
 year: "2000s–present",
 certainty: "documented",
 kind: "business",
 note: "The craft centre’s brand. The NGO’s stated aim is a local economy that slows rural exodus.",
 },
 {
 source: "Association des Villageois de Ndem, village work since 1985",
 amount: "Member labour, gardens, solar (unpublished cash)",
 year: "1985",
 certainty: "estimated",
 kind: "donation",
 note: "Villagers’ association, ONG since 2006. The village is older than the NGO. GEN lists ~30 in the core; the NGO works with ~20 villages.",
 },
 ],
 },
 songhai: {
 overview:
 "A teaching and production campus whose farm pays for training. Public recognition arrived as the Africa Prize and a UN Centre of Excellence designation. No Beninese housing-lot grant of record.",
 grantsHeadline: "Africa Prize 1993 + UN Excellence 2008",
 privateHeadline: "Farm production funds training",
 grants: [
 {
 source: "Africa Prize (Godfrey Nzamujo)",
 amount: "Honorific prize (cash unpublished here)",
 year: "1993",
 certainty: "documented",
 kind: "award",
 note: "Awarded to the founder. Recognition of the integrated-farm model.",
 },
 {
 source: "United Nations, Centre of Excellence for Agriculture",
 amount: "Designation",
 year: "2008",
 certainty: "documented",
 kind: "award",
 note: "UN named Songhai a Centre of Excellence. Status.",
 },
 ],
 private: [
 {
 source: "Songhai Centre, crops, livestock, aquaculture, processing",
 amount: "Production income funds training (unpublished totals)",
 year: "1985–present",
 certainty: "documented",
 kind: "business",
 note: "Zero-waste farm loops on 22+ ha at Porto-Novo, grown from about one acre. Trainees leave as rural entrepreneurs.",
 },
 ],
 },
 tlholego: {
 overview:
 "A post-apartheid learning village on a former cattle farm. Rucore, a South African nonprofit, is the face. No documented government land-purchase grant for the 150 hectares; courses and stays are the public money.",
 grantsHeadline: "None documented",
 privateHeadline: "Rucore farm + courses",
 grants: [noneFound],
 private: [
 {
 source: "Rucore, 150 ha Magaliesberg farm",
 amount: "150 hectares of former neglected cattle farm",
 year: "1990–91",
 certainty: "documented",
 kind: "member-equity",
 note: "Paul Cohen became involved around 1990; Rucore was founded in 1991. Nonprofit holding.",
 },
 {
 source: "Courses, eco-venue stays, food garden",
 amount: "Course and stay fees (unpublished totals)",
 year: "1990s–present",
 certainty: "estimated",
 kind: "courses",
 note: "The public door. Tshedimosong School for farm-worker children in the early years. Not house sales.",
 },
 ],
 },
 lilleoru: {
 overview:
 "An Estonian MTÜ on 30 hectares at Aruvalla. The capital event is a 1993 land purchase. Operating money is Practical Consciousness courses, events, voluntary work, and donations. No Estonian housing-lot grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "1993 land + courses",
 grants: [noneFound],
 private: [
 {
 source: "Ingvar Villido, Aruvalla land purchase",
 amount: "30 ha (later held by Lilleoru MTÜ 80143446)",
 year: "1993",
 certainty: "documented",
 kind: "member-equity",
 note: "Bought as a family home and a place to receive students. The NGO became the legal holder.",
 },
 {
 source: "Practical Consciousness courses, events, donations",
 amount: "Course fees and gifts (unpublished totals)",
 year: "1993–present",
 certainty: "estimated",
 kind: "courses",
 note: "Visit Estonia lists the Flower of Life garden. About 30 residents; MTÜ membership is larger and mostly non-resident. Operating income, not lot sales.",
 },
 ],
 },
 zmag: {
 overview:
 "A Croatian activist association whose educational estate at Vukomerić has received National Foundation support as a knowledge centre. Courses and workshops are the ordinary money.",
 grantsHeadline: "Nacionalna zaklada knowledge centre",
 privateHeadline: "Courses + member houses nearby",
 grants: [
 {
 source: "Nacionalna zaklada za razvoj civilnoga društva, sustainable-living knowledge centre",
 amount: "Support (amount unpublished here)",
 year: "2010s",
 certainty: "documented",
 kind: "grant",
 note: "Croatian National Foundation support for ZMAG as a knowledge centre. Funder, not the landlord of the Recycled Estate.",
 },
 ],
 private: [
 {
 source: "Courses, workshops, seed library",
 amount: "Workshop fees (unpublished totals)",
 year: "1999–present",
 certainty: "estimated",
 kind: "courses",
 note: "The Recycled Estate is an educational site. Members’ houses sit on nearby village plots. Visit by appointment.",
 },
 ],
 },
 guneskoy: {
 overview:
 "A tiny environmental cooperative that bought stony steppe from the Turkish state and later lost a hectare to a railway. A 2006 UNDP biofuel project is the documented public money; CSA boxes and volunteer years are the private side.",
 grantsHeadline: "State land 2002 + UNDP 2006",
 privateHeadline: "CSA + volunteer labour",
 grants: [
 {
 source: "Republic of Turkey, 75,000 m² state land sale at Yahşihan",
 amount: "7.5 ha (~19 acres); ~2 ha cultivable",
 year: "2002",
 certainty: "documented",
 kind: "other",
 note: "Bought from the state in July 2002 after months of search. A sale. About 1 ha was later expropriated for a high-speed railway (2014–18); the mandala was kept after negotiation.",
 },
 {
 source: "UNDP biofuel project",
 amount: "Project support (amount unpublished here)",
 year: "2006",
 certainty: "documented",
 kind: "grant",
 note: "UNDP-backed biofuel work on the cooperative’s land. Project money.",
 },
 ],
 private: [
 {
 source: "Güneşköy CSA, organic vegetables since 2009",
 amount: "Box-scheme sales (unpublished totals)",
 year: "2009–present",
 certainty: "documented",
 kind: "business",
 note: "Community-supported agriculture. CSA members are not automatically cooperative members. European Voluntary Service from 2018.",
 },
 ],
 },
 kufunda: {
 overview:
 "A learning village on part of a family farm at Ruwa. The capital is family title plus programme hosting. No Zimbabwean land-purchase grant found for a subdivided village.",
 grantsHeadline: "None documented",
 privateHeadline: "Family farm + programmes",
 grants: [noneFound],
 private: [
 {
 source: "Knuth family farm, Ruwa title",
 amount: "Part of a family farm (hectares unpublished)",
 year: "2001 (village use)",
 certainty: "documented",
 kind: "member-equity",
 note: "Maaianne Knuth negotiated to use part of her mother’s farm. Title stays with the family.",
 },
 {
 source: "Hosting, youth and women’s programmes, school, biodynamic produce",
 amount: "Programme fees and farm sales (unpublished totals)",
 year: "2002–present",
 certainty: "estimated",
 kind: "courses",
 note: "First youth leadership training in 2002. Biodynamic farming since 2019. About 28 people / ~15 families. Operating income, not lot sales.",
 },
 ],
 },
 glarisegg: {
 overview:
 "A castle on Lake Constance bought at auction in October 2003. The AG holds the property; seminar income pays the roof; a Verein joining fee is the published path into residence. No Swiss housing-lot grant of record.",
 grantsHeadline: "None documented",
 privateHeadline: "Auction AG + seminars + join fee",
 grants: [noneFound],
 private: [
 {
 source: "Liegenschaft Schloss Glarisegg AG, October 2003 auction",
 amount: "5 ha castle, park, forest, and lake shore",
 year: "2003",
 certainty: "documented",
 kind: "member-equity",
 note: "The group bought Schloss Glarisegg at auction and formed the AG to hold it. Shares in the AG are the land path, not Stockwerkeigentum condominium units.",
 },
 {
 source: "Seminar centre, EDE, Academy for Community Education, school",
 amount: "Venue and course income (unpublished totals)",
 year: "2003–present",
 certainty: "documented",
 kind: "courses",
 note: "The castle earns its keep as a venue. Permaculture garden from 2012; Academy for Community Education in 2023. Operating income that pays the roof.",
 },
 {
 source: "Gemeinschaft Schloss Glarisegg, joining fee",
 amount: "On the order of $5,450 (IC.org listing) plus a trial of a year or more",
 year: "2009–present",
 certainty: "documented",
 kind: "member-equity",
 note: "Residential association founded in 2009. Outer-circle / inner-circle path. A fee to join the Verein.",
 },
 ],
 },
 "los-horcones": {
 overview:
 "A self-financed Sonoran cooperativa. Farm, crafts, camps, and a decades-long autism programme pay a small desert village. No Mexican federal land-purchase grant found.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Co-op farm + autism programme",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "The community has described itself as self-financed. No published SEMARNAT or SEDATU grant bought the km 63 parcel.",
 },
 ],
 private: [
 {
 source: "Autism and special-education programme",
 amount: "Programme fees (ongoing since the 1970s)",
 certainty: "documented",
 kind: "business",
 note: "The 1971 Hermosillo centre is the precursor; the desert village still runs the work. A cash engine and the founding reason.",
 },
 {
 source: "Farm, livestock, crafts, summer camps",
 amount: "Co-op enterprises",
 certainty: "documented",
 kind: "business",
 note: "Cattle, gardens, honey, crafts, camps. The cooperativa holds the cash; members share the work.",
 },
 ],
 },
 tosepan: {
 overview:
 "A union of cooperatives that funds itself through coffee, pepper, a caja, tourism, bamboo, honey, and a foundation. Fair-trade premiums and member savings are the documented engines. Fundación Tosepan takes donations; Tosepantomin holds hundreds of millions of pesos in savings and loans.",
 grantsHeadline: "Fair trade + foundation gifts",
 privateHeadline: "Coffee, caja, Kali",
 grants: [
 {
 source: "Fair-trade coffee premiums (Certimex; Europe, Japan, Mexico, U.S.)",
 amount: "Premiums on organic coffee",
 year: "2004–present",
 certainty: "documented",
 kind: "business",
 note: "Export certification from 2004. Public-ish in the sense of a certified market, booked here as the documented extra on the bean.",
 },
 {
 source: "Fundación Tosepan A.C., donations from social organisations, public and private institutions, national and international foundations",
 amount: "Donations (ongoing)",
 year: "2012–present",
 certainty: "documented",
 kind: "donation",
 note: "The 2012 foundation is the gift door.",
 },
 ],
 private: [
 {
 source: "Tosepantomin savings and credit cooperative",
 amount: "MXN 261 million savings; 246 million in loans (early 2015)",
 year: "2015",
 certainty: "documented",
 kind: "loan",
 note: "“Money of all.” The caja is the union’s financial engine.",
 },
 {
 source: "Tosepan Kali ecotourism, coffee, pepper, honey, bamboo",
 amount: "Lodge + harvest (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "Cabins, hotel, hostel, temazcal; organic coffee and pimienta gorda; pisilnekmej honey. Member enterprises, not lot sales.",
 },
 {
 source: "Tichanchiuaj sustainable housing programme",
 amount: "MXN 655 million invested; ~10,000 families (as of ~2018)",
 year: "2006–18",
 certainty: "documented",
 kind: "member-equity",
 note: "A housing cooperative programme with ecotecnias, members’ houses in their villages.",
 },
 ],
 },
 "teopantli-kalpulli": {
 overview:
 "A family kalpulli on 37 hectares. Permaculture, ceremonies, and gatherings pay a small Jalisco village. No major public land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Families + gatherings",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published Jalisco or federal grant bought the San Isidro Mazatepec pasture. The ashram-kalpulli assembled a private tract.",
 },
 ],
 private: [
 {
 source: "Family economy and internal production cooperatives",
 amount: "Household + farm",
 certainty: "estimated",
 kind: "member-equity",
 note: "About 22 families on internally parceled land. Some members work outside (including the University of Guadalajara).",
 },
 {
 source: "Festivals and Consejo de Visiones gatherings",
 amount: "Event hosting",
 year: "2015",
 certainty: "documented",
 kind: "courses",
 note: "The 14th Vision Council brought about 500 people for a week. Culture is cash offering.",
 },
 ],
 },
 litibu: {
 overview:
 "Eight eco casas on a coastal fideicomiso. Solar, cisterns, dues, and member buy-in. No FONATUR grant built this village, the master plan next door is a different project.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Casa buy-in + dues",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "FONATUR’s Litibú master plan is the adjacent resort. No published federal grant bought the beach forest.",
 },
 ],
 private: [
 {
 source: "Member buy-in to the LLC / fideicomiso",
 amount: "Casa share + dues + ~2 hours/week labour",
 certainty: "documented",
 kind: "member-equity",
 note: "Coastal restricted-zone structure. Houses are privately managed inside the trust.",
 },
 ],
 },
 "u-yits-kaan": {
 overview:
 "A campesino school founded with German MISEREOR money, then kept alive by later foundations, fair-trade honey, and Maya farming families after the church grant ended.",
 grantsHeadline: "MISEREOR + SEMARNAT prize",
 privateHeadline: "Honey, milpa, tianguis",
 grants: [
 {
 source: "MISEREOR (Germany), founding internado",
 amount: "Founding grant (1994–2005)",
 year: "1996",
 certainty: "documented",
 kind: "grant",
 note: "Paid for the campesino school at Maní. Funding ended 2005; the school later became an independent A.C.",
 },
 {
 source: "SEMARNAT, Premio Nacional al Mérito Ecológico",
 amount: "National prize (recognition)",
 year: "2014",
 certainty: "documented",
 kind: "award",
 note: "Mexican environment ministry prize. Recognition.",
 },
 {
 source: "Kellogg Foundation, Heifer, Slow Food, Spore Initiative, PPD/GEF, Panta Rhea, Adveniat",
 amount: "Project grants (various years)",
 certainty: "documented",
 kind: "grant",
 note: "Later project money for bees, seed, solar pumps, theology of the land.",
 },
 ],
 private: [
 {
 source: "Fair-trade honey, milpa produce, tianguis, and campesino fees",
 amount: "Comerciando como Hermanos (from 2002)",
 year: "2002–present",
 certainty: "documented",
 kind: "business",
 note: "Melipona honey, garden goods, and market days. The school’s own trade after MISEREOR left.",
 },
 ],
 },
 "tierra-del-sol": {
 overview:
 "A self-funded dry-tropics teaching farm. Visit fees, apprenticeships, and a small tienda pay four hectares. No Oaxaca land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Visits + apprentices + tienda",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Pablo Ruiz Lavalle bought the first two hectares himself. No published state grant assembled Tlacochahuaya.",
 },
 ],
 private: [
 {
 source: "Guided visits, thematic days, apprenticeships, workshops",
 amount: "From MXN $250 per guided visit; $1,000 thematic days",
 certainty: "documented",
 kind: "courses",
 note: "The published price list is the cash engine. Teaching.",
 },
 {
 source: "Founder’s land purchase",
 amount: "~2 ha in 2001, grown to 4 ha",
 year: "2001",
 certainty: "documented",
 kind: "member-equity",
 note: "A Mexico City pilot’s cambio de vida. Private title, then teaching.",
 },
 ],
 },
 "bosque-village": {
 overview:
 "A founder-owned 83-acre highland forest paid for by retreats, intern labour, and the person who bought the trees. No Michoacán land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Founder + visitors",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published federal or state grant bought the Yotatiro forest. Brian Fey holds title.",
 },
 ],
 private: [
 {
 source: "Founder equity (Brian Fey) and participant labour",
 amount: "83 acres + sweat",
 year: "2004",
 certainty: "documented",
 kind: "member-equity",
 note: "IC.org: a single invested member. Interns and 3,000 visitors are not shareholders.",
 },
 {
 source: "Retreats, events, Workaway stays",
 amount: "Courses + stays",
 certainty: "estimated",
 kind: "courses",
 note: "Campground and eco-retreat income. The public door.",
 },
 ],
 },
 "via-organica": {
 overview:
 "A Mexican A.C. whose ranch, restaurant, and store were built with Organic Consumers Association partnership, farm sales, and restoration-camp energy. Eighty hectares of former pasture.",
 grantsHeadline: "OCA + restoration camp",
 privateHeadline: "Ranch + restaurant + store",
 grants: [
 {
 source: "Organic Consumers Association / Regeneration International partnership",
 amount: "U.S. nonprofit partnership (ongoing)",
 year: "2009–present",
 certainty: "documented",
 kind: "donation",
 note: "Ronnie Cummins and Rose Welch’s network helped found the shop and ranch school. Partners, not the Mexican title holder.",
 },
 ],
 private: [
 {
 source: "Restaurant, tienda, farmers market, and 80 ha production",
 amount: "Farm-to-table (ongoing)",
 year: "2009–present",
 certainty: "documented",
 kind: "business",
 note: "Vegetables, herbs, seed, animal products, cabins, school tours. The cash that pays the Jalpa valley.",
 },
 {
 source: "Billion Agave Project / Ecosystem Restoration Camp",
 amount: "Restoration programme",
 certainty: "documented",
 kind: "courses",
 note: "First Restoration Camp in the Americas. Agave, mesquite, rotational grazing. Teaching and climate work, not house sales.",
 },
 ],
 },
 crisalium: {
 overview:
 "A family A.C. on five hectares inside a private park. Workshops and a 2023 crowdfund for a hall. No Chiapas land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Courses + crowdfund",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published CONANP purchase of the Encuentro five hectares. The park is private (2002); the A.C. inhabits a nested tract.",
 },
 ],
 private: [
 {
 source: "Permaculture, bioconstruction, and NVC courses",
 amount: "Workshops + stays",
 certainty: "documented",
 kind: "courses",
 note: "The public door. GEN: open to visitors, not to new members.",
 },
 {
 source: "GoFundMe multifunctional hall and solar",
 amount: "€22,000 campaign",
 year: "2023",
 certainty: "documented",
 kind: "donation",
 note: "Crowdfund for a hall and batteries. Named-on-the-door gifts.",
 },
 ],
 },
 "inla-kesh": {
 overview:
 "A two-hectare highland biotopo paid for by EDE course fees, community-experience weeks, and a crowdfund. No Chiapas land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "EDE + crowdfund",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published federal grant bought Chichihuistán. The circle has lived on about two hectares since 2012.",
 },
 ],
 private: [
 {
 source: "Gaia Education EDE and community-experience weeks",
 amount: "Course fees",
 certainty: "documented",
 kind: "courses",
 note: "A month-long certified EDE is the public cash. Teaching.",
 },
 {
 source: "Chuffed healing-biotope campaign",
 amount: "Crowdfund",
 certainty: "documented",
 kind: "donation",
 note: "A public ask to grow the biotopo. Donations.",
 },
 ],
 },
 "vicente-guerrero": {
 overview:
 "A campesino A.C. funded by Pan para el Mundo / Brot für die Welt project cycles since 1998, plus a Rockefeller promoter-formation grant, maize-fair seed funds, and family harvests. No SEDATU housing-lot programme.",
 grantsHeadline: "Pan para el Mundo + Rockefeller",
 privateHeadline: "Milpa + maize-fair seed funds",
 grants: [
 {
 source: "Pan para el Mundo / Brot für die Welt, triennial projects",
 amount: "Project cycles from 1998 (ongoing)",
 year: "1998–present",
 certainty: "documented",
 kind: "grant",
 note: "First triennial: Aprovechamiento y Mantenimiento de los Recursos Naturales. Relations from 1993. The documented German engine.",
 },
 {
 source: "Fundación Rockefeller, Formación de promotores comunitarios",
 amount: "Project grant",
 certainty: "documented",
 kind: "grant",
 note: "Promoter formation.",
 },
 ],
 private: [
 {
 source: "Family milpas and maize-fair seed funds",
 amount: "Harvest + criollo seed",
 year: "1998–present",
 certainty: "documented",
 kind: "member-equity",
 note: "Families keep their harvest. Fairs fund scarce maize varieties.",
 },
 ],
 },
 nanciyaga: {
 overview:
 "A family reserve paid by cabins, restaurant, walks, and film location fees. No CONANP purchase of the 14 hectares. Tourism pays the jungle.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Cabins + film + restaurant",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "The Rodríguez family bought at auction. The 1998 biosphere is a designation.",
 },
 ],
 private: [
 {
 source: "Cabin stays, restaurant, temazcal, jungle walks",
 amount: "Eco-tourism (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "Two hectares of visitors pay twelve of selva. The public cash.",
 },
 {
 source: "Film location (Medicine Man, Apocalypto)",
 amount: "Location fees",
 year: "1992; 2006",
 certainty: "documented",
 kind: "business",
 note: "Sean Connery’s jungle and Mel Gibson’s. Associated income.",
 },
 ],
 },
 "pueblo-sacbe": {
 overview:
 "A 54-hectare covenanted freehold. Houses and lots are the cash. No FONATUR grant built this village, Playa’s master plan is a different coastline.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Lot and house sales",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published federal grant assembled the 54 ha. Private jungle lots from 1998.",
 },
 ],
 private: [
 {
 source: "House and lot sales under village bylaws",
 amount: "Freehold + fideicomiso (ongoing)",
 year: "1998–present",
 certainty: "documented",
 kind: "member-equity",
 note: "About 50 families. Listings exist. Covenants run with the lot. real estate.",
 },
 {
 source: "Short-term rentals and retreats",
 amount: "Stays",
 certainty: "documented",
 kind: "courses",
 note: "Jungle Sanctuary Lodge and others. The visitor door on private houses.",
 },
 ],
 },
 ixixtlan: {
 overview:
 "A founder-led hill sanctuary paid by retreats, workshops, and a vegetarian kitchen. No Puebla land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Retreats + kitchen",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Beleni Kumara Inti founded the hill. No published state grant bought Atlixco.",
 },
 ],
 private: [
 {
 source: "Retreats, workshops, PeregrinArte, ceremonies",
 amount: "Course and stay fees",
 certainty: "documented",
 kind: "courses",
 note: "The public door. GEN: open to visitors and members. Teaching.",
 },
 ],
 },
 "huerto-roma-verde": {
 overview:
 "A neighbourhood A.C. on a 1985 rubble lot. Markets, workshops, compost, and donations. No CDMX housing-lot programme, because there is no housing.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Markets + workshops + gifts",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "The lot was abandoned rubble. The A.C. occupies and stewards it. Project grants may exist; none bought Jalapa 234 as a subdivision.",
 },
 ],
 private: [
 {
 source: "Markets, workshops, punto limpio, donations",
 amount: "Civic economy (ongoing)",
 year: "2012–present",
 certainty: "documented",
 kind: "business",
 note: "The weekday cash. Compost and stalls.",
 },
 ],
 },
 "rancho-la-salud": {
 overview:
 "A Jalisco condominio paid by lot-and-home purchases. Common house and pool sit in the deeds. No SEDATU grant built Mexico’s first cohousing.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Deed purchases",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Jaime Navarro’s 3½-acre parcel plus member deeds. No published Jalisco housing grant assembled the lakeshore.",
 },
 ],
 private: [
 {
 source: "Garden Home, Villa, and Townhome purchases",
 amount: "Deed + commons percentage (ongoing)",
 year: "2014–present",
 certainty: "documented",
 kind: "member-equity",
 note: "Six homes, 13 residents as of 2024; 37 units planned. cohousing real estate.",
 },
 ],
 },
 tamarindos: {
 overview:
 "A Jamapa-river ecoaldea paid by cabins, restaurant, EcoClub, and lots from 500 m². Tourism and real estate. No Veracruz land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Cabins + lots",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "No published state grant assembled Mata de Agua. Private lots and hospitality.",
 },
 ],
 private: [
 {
 source: "Lots from 500 m²",
 amount: "Pequeña propiedad (ongoing)",
 certainty: "documented",
 kind: "member-equity",
 note: "The published membership path on the village site is a lot purchase.",
 },
 {
 source: "Cabins, restaurant, temazcal, EcoClub",
 amount: "Stays + courses",
 certainty: "documented",
 kind: "courses",
 note: "The visitor door. You can come without buying.",
 },
 ],
 },
 hapori: {
 overview:
 "A regenerative neighbourhood paid by land-and-home packages. Off-grid solar is in the house price. No Guanajuato grant bought the Águila Real pasture.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Lot-and-home packages",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Mike and Pau’s 8+ ha inside Águila Real. No published SEDATU grant.",
 },
 ],
 private: [
 {
 source: "Land-and-home packages; GEN also lists investors",
 amount: "Freehold + custom eco-build (ongoing)",
 year: "2021–present",
 certainty: "documented",
 kind: "member-equity",
 note: "The published path. Independent solar on every house. real estate with a regeneration brief.",
 },
 ],
 },
 sekkan: {
 overview:
 "Six families bought Rancho Lacayo in 2022. Member fees, labour, and a biodynamic-farm donation door. No SMA land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Founder equity + fees",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Private purchase of 38 acres. No published Guanajuato grant.",
 },
 ],
 private: [
 {
 source: "Six founding families’ purchase of Rancho Lacayo",
 amount: "38 acres (2022)",
 year: "2022",
 certainty: "documented",
 kind: "member-equity",
 note: "LLC or TIC. The dirt. Members are not lot buyers on a portal.",
 },
 {
 source: "Member fees (~$300) and two hours a week; farm donations from visitors",
 amount: "Dues + sweat + gifts",
 certainty: "documented",
 kind: "member-equity",
 note: "Independent finances. The operating compact.",
 },
 ],
 },
 "nuevo-san-juan": {
 overview:
 "A Purépecha community forest paid by timber, resin, furniture, water, and volcano tours. FSC 1999, Equator Prize 2004. No Michoacán lot raise. The 1991 resolution is title.",
 grantsHeadline: "Equator Prize + FSC enterprise",
 privateHeadline: "Forest production",
 grants: [
 {
 source: "Equator Prize (UNDP Equator Initiative)",
 amount: "Award (2004)",
 year: "2004",
 certainty: "documented",
 kind: "award",
 note: "Recognition of the 1982 community forestry enterprise.",
 },
 ],
 private: [
 {
 source: "Timber, furniture, resin, water, and more than twenty production lines",
 amount: "~900 permanent + ~300 temporary jobs (Equator Initiative)",
 certainty: "documented",
 kind: "business",
 note: "The cash engine on 18,138 ha of bienes comunales. FSC 1999.",
 },
 {
 source: "Parícutin and buried-church visits",
 amount: "Tours",
 certainty: "documented",
 kind: "courses",
 note: "The public door. Visitors to the lava do not buy a parcela.",
 },
 ],
 },
 cedicam: {
 overview:
 "A Mixtec campesino school paid by family harvests, nurseries, and a 2008 Goldman Prize. No Oaxaca land-purchase grant assembled the Mixteca Alta.",
 grantsHeadline: "Goldman Prize 2008",
 privateHeadline: "Milpa + nurseries",
 grants: [
 {
 source: "Goldman Environmental Prize (Jesús León Santos)",
 amount: "US$150,000",
 year: "2008",
 certainty: "documented",
 kind: "award",
 note: "North America prize. Recognition and a cheque.",
 },
 ],
 private: [
 {
 source: "Family milpa, nurseries, and campesino-a-campesino labour",
 amount: "Harvest + sweat (ongoing)",
 certainty: "documented",
 kind: "member-equity",
 note: "Families keep their harvest. CEDICAM is the school.",
 },
 ],
 },
 "sierra-gorda": {
 overview:
 "A Jalpan IAP paid by donations, carbon, education, and prizes. The 1997 biosphere is a decree. No Querétaro grant bought 383,567 hectares for the IAP.",
 grantsHeadline: "Prizes + carbon + donations",
 privateHeadline: "Ecotourism + education",
 grants: [
 {
 source: "UNEP Champion of the Earth (Pati Ruiz Corzo)",
 amount: "Award (2013)",
 year: "2013",
 certainty: "documented",
 kind: "award",
 note: "Recognition of the citizen biosphere.",
 },
 {
 source: "Wangari Maathai Forest Champion Award (CPF/FAO)",
 amount: "Award (2014)",
 year: "2014",
 certainty: "documented",
 kind: "award",
 note: "Fourteen international organisations. Associated honour, not the mountain’s landlord.",
 },
 ],
 private: [
 {
 source: "Community ecotourism, education, and nature-based climate work",
 amount: "Trails + carbon + donations (ongoing)",
 certainty: "documented",
 kind: "donation",
 note: "The IAP’s operating mix.",
 },
 ],
 },
 "la-ventanilla": {
 overview:
 "A 25-family canoe cooperative paid by mangrove tours after the turtle-and-crocodile trade closed. UMA 2002. No Oaxaca land-purchase grant of record.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Canoe tickets",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A village cooperativa on a lagoon. No published SEDATU grant bought the mangroves.",
 },
 ],
 private: [
 {
 source: "Canoe tours, nurseries, beach visits",
 amount: "Tickets (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "Twenty-five families. The cash engine.",
 },
 ],
 },
 "punta-laguna": {
 overview:
 "Thirty Maya families dividing spider-monkey tour revenue inside a 5,367 ha ANP. The 2002 decree is a designation. No Quintana Roo grant bought the village a lot map.",
 grantsHeadline: "ANP designation",
 privateHeadline: "Tour revenue",
 grants: [
 {
 source: "Otoch Ma’ax Yetel Kooh ANP (CONANP)",
 amount: "5,367.42 ha designation",
 year: "2002",
 certainty: "documented",
 kind: "easement",
 note: "A flora-and-fauna protection area, petitioned since 1967.",
 },
 ],
 private: [
 {
 source: "Najil Tucha guided tours, revenue divided among ~30 families",
 amount: "Tickets (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "The cash engine.",
 },
 ],
 },
 "yomol-atel": {
 overview:
 "A Tseltal federation paid by coffee, honey, soap, and Capeltic cups. Jesuit solidarity helped found it; the published story is that Bats’il Maya runs without private or government operating funds. No Chiapas lot raise.",
 grantsHeadline: "Jesuit solidarity",
 privateHeadline: "Coffee + cafés",
 grants: [
 {
 source: "Jesuit Province of Mexico (and later Spanish-province solidarity)",
 amount: "Founding partnership (2002–)",
 year: "2002",
 certainty: "documented",
 kind: "donation",
 note: "Partners, not the title holders of Chilón. Associated money.",
 },
 ],
 private: [
 {
 source: "Bats’il Maya roast, Capeltic cafés, honey and soap",
 amount: "Sales (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "341 families in Ts’umbal Xitalha’. Value-add in Tseltal hands.",
 },
 ],
 },
 tierraluz: {
 overview:
 "A Sayulita hillside paid by titled lots and occasional house sales. Off-grid solar is in the house price. No Nayarit grant bought the A.C. commons.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Titled lots",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Private lots plus an A.C. commons. No published FONATUR grant.",
 },
 ],
 private: [
 {
 source: "Ocean-view titled lots (site: from about US$185,000; two of 19 remaining)",
 amount: "Freehold (ongoing)",
 year: "2009–present",
 certainty: "documented",
 kind: "member-equity",
 note: "The published path. real estate with a food forest and an A.C. wrapper.",
 },
 ],
 },
 "huerto-tlatelolco": {
 overview:
 "A civic huerto paid by volunteers, workshops, compost, and partners (including ZEA on waste systems). No Mexico City grant bought the 1985 tower footprint as a lot.",
 grantsHeadline: "Partners + city alliance",
 privateHeadline: "Workshops + compost",
 grants: [
 {
 source: "Borough alliance and civic partners (incl. ZEA Hungry Goods waste work)",
 amount: "In-kind + project (documented partnership)",
 certainty: "documented",
 kind: "grant",
 note: "Compost and worm-farm support. Associated help.",
 },
 ],
 private: [
 {
 source: "Workshops, produce, volunteer labour, donations",
 amount: "Ongoing",
 certainty: "documented",
 kind: "donation",
 note: "The operating mix.",
 },
 ],
 },
 kuyabeh: {
 overview:
 "A 375 ha jungle eco-residencial paid by ½-ha and 1-ha lots from about US$108,000, plus a hotel and restaurant on the commons. No Quintana Roo grant bought km 34.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Jungle lots",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A lot-sales village on the Tulum–Cobá road. No published SEDATU grant.",
 },
 ],
 private: [
 {
 source: "½-ha and 1-ha lots (GEN: 160 owners; from about US$108,000)",
 amount: "Freehold / fideicomiso (ongoing)",
 year: "2015–present",
 certainty: "documented",
 kind: "member-equity",
 note: "The published path on kuyabeh.com and Riviera Maya portals. real estate with a 7% cap.",
 },
 {
 source: "Hotel, restaurant, temazcal, cenote",
 amount: "Stays + tickets",
 certainty: "documented",
 kind: "courses",
 note: "The visitor door. You can come without buying.",
 },
 ],
 },
 "cabo-pulmo": {
 overview:
 "A fishing village that replaced nets with tanks. The park is federal water; the shops are family businesses. No public grant bought the reef for the families.",
 grantsHeadline: "Park is federal",
 privateHeadline: "Dive tourism",
 grants: [
 {
 source: "CONANP operation of Parque Nacional Cabo Pulmo",
 amount: "Federal park budget",
 year: "1995–",
 certainty: "estimated",
 kind: "grant",
 note: "The decree made a no-take park. It did not buy the shore houses. Patronato Cabo del Este (1997) and later funders support park work.",
 },
 ],
 private: [
 {
 source: "Cabo Pulmo Divers and village tourism",
 amount: "Dives, bungalows, meals",
 year: "1990–",
 certainty: "documented",
 kind: "business",
 note: "Mario Castro’s 1990 shop, then others. Smithsonian: local tourism as the weekday.",
 },
 {
 source: "Amigos para la Conservación de Cabo Pulmo A.C.",
 amount: "Memberships + donations",
 year: "2002–",
 certainty: "estimated",
 kind: "donation",
 note: "The civic wrapper. Patrols and education.",
 },
 ],
 },
 "baja-ecovillage": {
 overview:
 "A founder-funded forest on Cantú dirt. Trees from Lurie’s pocket; the A.C. holds the park. No Ensenada grant of record bought the canyon.",
 grantsHeadline: "None documented",
 privateHeadline: "Founder trees + parcels",
 grants: [noneFound],
 private: [
 {
 source: "Mark Lurie tree planting and land purchase",
 amount: "55,000+ trees, mostly self-funded; Cantú parcels from 2003",
 year: "1989–",
 certainty: "documented",
 kind: "donation",
 note: "bajaecovillage.com: most trees purchased from his own pocket. The 2003 Cantú purchases are the residential dirt.",
 },
 {
 source: "Zonas Verdes de Punta Banda A.C.",
 amount: "Volunteer labour + gifts",
 year: "2006–",
 certainty: "estimated",
 kind: "donation",
 note: "The 54-acre park wrapper. Planting days.",
 },
 ],
 },
 "baja-biosana": {
 overview:
 "A small off-grid oasis paid by retreats, workshops, and member homes. No BCS grant of record bought El Chorro.",
 grantsHeadline: "None documented",
 privateHeadline: "Retreats + membership homes",
 grants: [noneFound],
 private: [
 {
 source: "Retreats and natural-building workshops",
 amount: "Programme fees",
 certainty: "estimated",
 kind: "courses",
 note: "The living-and-learning centre is the cash door when it is running.",
 },
 {
 source: "Resident membership / home transfer",
 amount: "A house inside the 11 ha",
 certainty: "estimated",
 kind: "member-equity",
 note: "Public posts offer a home to a new member.",
 },
 ],
 },
 "san-jose-de-la-zorra": {
 overview:
 "A Kumiai community on ancestral territory. Crafts, small agriculture, occasional cultural support. The 2024 decree is personality.",
 grantsHeadline: "INPI / cultural (typical)",
 privateHeadline: "Basketry + valley work",
 grants: [
 {
 source: "INPI and related cultural/indigenous programmes",
 amount: "Not isolated",
 certainty: "estimated",
 kind: "grant",
 note: "INPI has documented the fibre crafts. Typical of a recognized comunidad indígena.",
 },
 ],
 private: [
 {
 source: "Juncus and pine-needle basketry, small agriculture",
 amount: "Earned + household",
 certainty: "estimated",
 kind: "business",
 note: "The weekday.",
 },
 ],
 },
 "rancho-pacifico-baja": {
 overview:
 "A 15-acre homestead paid by bread, pizza, and campground nights. No Todos Santos grant bought the land.",
 grantsHeadline: "None documented",
 privateHeadline: "Bakery + campground",
 grants: [noneFound],
 private: [
 {
 source: "Wood-fired bakery, pizzeria, and fermentary",
 amount: "Earned",
 year: "2019–",
 certainty: "documented",
 kind: "business",
 note: "The public face on ranchopacificobaja.com.",
 },
 {
 source: "Off-grid campground and glamping",
 amount: "Site fees",
 certainty: "documented",
 kind: "business",
 note: "Van, tent, trailer. Guests are not members.",
 },
 ],
 },
 tateikie: {
 overview:
 "A Wixárika comunidad on ancestral sierra. Milpa, livestock, artisan work, and the ceremonial year. INPI and related programmes are typical of a recognized comunidad indígena.",
 grantsHeadline: "INPI / cultural (typical)",
 privateHeadline: "Milpa + artisan work",
 grants: [
 {
 source: "INPI and related indigenous / cultural programmes",
 amount: "Not isolated",
 certainty: "estimated",
 kind: "grant",
 note: "Typical of a recognized comunidad indígena.",
 },
 ],
 private: [
 {
 source: "Milpa, livestock, and artisan work",
 amount: "Household + ceremonial year",
 certainty: "estimated",
 kind: "business",
 note: "The weekday. Pilgrimage to Wirikuta is a duty. Guests do not buy in.",
 },
 ],
 },
 ayotitlan: {
 overview:
 "A Nahua-Otomí ejido of some seven thousand people. Coffee, milpa, forest. The 1963 resolution is paper; about 34,700 ha arrived. The 1987 biosphere is a CONANP designation.",
 grantsHeadline: "Biosphere is a decree",
 privateHeadline: "Coffee + milpa",
 grants: [
 {
 source: "Reserva de la Biosfera Sierra de Manantlán (CONANP)",
 amount: "Designation",
 year: "1987–",
 certainty: "documented",
 kind: "grant",
 note: "139,577 ha around the ejido. It did not buy the undelivered hectáreas. Mining is the fight the mayores name.",
 },
 ],
 private: [
 {
 source: "Coffee, milpa, and forest household economy",
 amount: "Earned + harvest",
 certainty: "estimated",
 kind: "business",
 note: "Eighty-eight localities. Families keep the crop.",
 },
 ],
 },
 "bosque-la-primavera": {
 overview:
 "A 30,500 ha APFF paid by public budgets for fire, trails, and education. The 6 March 1980 decree is a designation.",
 grantsHeadline: "CONANP / SEMADET / OPD",
 privateHeadline: "No house sales",
 grants: [
 {
 source: "CONANP designation and Jalisco SEMADET / OPD Bosque La Primavera",
 amount: "Public operating budget (ongoing)",
 year: "1980–",
 certainty: "documented",
 kind: "grant",
 note: "Fire crews, trails, education. The weekday of the lung.",
 },
 ],
 private: [
 {
 source: "No residential membership or lot sales",
 amount: "None",
 certainty: "documented",
 kind: "other",
 note: "You hike. Donations and public money. Teopantli Kalpulli is a neighbour, not this title.",
 },
 ],
 },
 kasisi: {
 overview:
 "A Jesuit training farm paid by courses, a dairy, partner support, and an Equator Prize, not by Chongwe lots.",
 grantsHeadline: "Equator Prize",
 privateHeadline: "Courses and dairy",
 grants: [
 {
 source: "UNDP Equator Prize",
 amount: "Prize (2014)",
 year: "2014",
 certainty: "documented",
 kind: "award",
 note: "Recognition for training more than 10,000 small-scale farmers in organic and conservation agriculture.",
 },
 ],
 private: [
 {
 source: "Organic agriculture courses (3–5 days and two-week residential)",
 amount: "Course fees (ongoing)",
 year: "1990–present",
 certainty: "documented",
 kind: "courses",
 note: "The public door. Farmers come from Chongwe and central Zambia.",
 },
 {
 source: "Dairy herd and irrigated farm",
 amount: "Milk to a cheese factory; produce",
 certainty: "documented",
 kind: "business",
 note: "About 30 animals in one Jesuit account; 80 ha under irrigation from two dams.",
 },
 ],
 },
 "awra-amba": {
 overview:
 "A Fogera cooperative that lost its farm, survived on cotton-seed stew, and pays itself from weaving and three mills, equal wages.",
 grantsHeadline: "Regional mills",
 privateHeadline: "Weaving",
 grants: [
 {
 source: "Regional Micro and Small Scale Enterprise Development Agency, three grinding mills",
 amount: "Equipment",
 certainty: "documented",
 kind: "grant",
 note: "A milling service for the locality.",
 },
 ],
 private: [
 {
 source: "Weaving cooperative (traditional and modern looms)",
 amount: "Equal annual salary for members",
 year: "1990s–present",
 certainty: "documented",
 kind: "business",
 note: "The cash engine after neighbours took the farm. A later company trades outside the locality.",
 },
 {
 source: "Study visits and guest reception",
 amount: "Visitor fees",
 certainty: "estimated",
 kind: "courses",
 note: "Christian and Muslim leaders, World Bank consultants, journalists. A guest committee.",
 },
 ],
 },
 umoja: {
 overview:
 "A 14-acre women-only village paid by twelve cottages and beadwork on the Isiolo–Marsabit road, not by Samburu lots.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Campsite and beads",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Vital Voices and press have amplified; the published engine is the campsite.",
 },
 ],
 private: [
 {
 source: "12 self-contained cottages on 14 acres (~30 guests)",
 amount: "Camp fees (ongoing)",
 year: "1990s–present",
 certainty: "documented",
 kind: "courses",
 note: "umojawomen.or.ke. The cash that pays the village.",
 },
 {
 source: "Beadwork and jewellery",
 amount: "Craft sales",
 certainty: "documented",
 kind: "business",
 note: "Sold to visitors on the road. Women-only membership; men do not buy in.",
 },
 ],
 },
 "st-jude": {
 overview:
 "A Masaka NGO farm paid by agroecology courses, women’s groups, a dried-fruit plant, and partners such as PWRDF / Alongside Hope, not by Busense lots.",
 grantsHeadline: "Partner NGOs",
 privateHeadline: "Courses and fruit",
 grants: [
 {
 source: "PWRDF / Alongside Hope and other partners",
 amount: "Programme support",
 year: "2010s",
 certainty: "documented",
 kind: "grant",
 note: "Ride for Refuge partner year among them.",
 },
 ],
 private: [
 {
 source: "Integrated organic farming courses (~75% practical)",
 amount: "Course fees (ongoing)",
 year: "1997–present",
 certainty: "documented",
 kind: "courses",
 note: "186,000 farmers trained since 1997 (Alongside Hope, 2019). The public door.",
 },
 {
 source: "Dried-fruit plant and women’s cooperatives",
 amount: "Value-added produce",
 certainty: "documented",
 kind: "business",
 note: "Extension income.",
 },
 ],
 },
 "khula-dhamma": {
 overview:
 "A Wild Coast freehold farm paid by retreats, volunteer stays, and household work, five friends bought the land; no Eastern Cape grant found bought the Quko.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Retreats",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Very little finance in the pioneer years.",
 },
 ],
 private: [
 {
 source: "Five friends’ land purchase",
 amount: "Freehold (2000)",
 year: "2000",
 certainty: "documented",
 kind: "member-equity",
 note: "Just under 300 ha then; the site now says 180 ha. Private title.",
 },
 {
 source: "Retreats, self-catering cob rooms, volunteer stays",
 amount: "Stays + labour exchange",
 certainty: "documented",
 kind: "courses",
 note: "The visitor door. Sometimes paused.",
 },
 ],
 },
 nadeet: {
 overview:
 "A Namibian trust paid by school-group programmes, donations, and UNESCO prizes, a solar classroom on someone else’s reserve.",
 grantsHeadline: "UNESCO prizes",
 privateHeadline: "School programmes",
 grants: [
 {
 source: "UNESCO-Japan Prize on Education for Sustainable Development",
 amount: "Prize (2018)",
 year: "2018",
 certainty: "documented",
 kind: "award",
 note: "Viktoria and Andreas Keding collected it. Recognition, not title to NamibRand.",
 },
 {
 source: "UNESCO Sultan Qaboos Prize for Environmental Conservation",
 amount: "Prize",
 certainty: "documented",
 kind: "award",
 note: "Later conservation prize. The dunes still belong to the reserve.",
 },
 ],
 private: [
 {
 source: "School-group programmes, internships, Teach for ESD",
 amount: "Programme fees + donations",
 year: "2003–present",
 certainty: "documented",
 kind: "courses",
 note: "The engine. Parabolic cookers, biodiversity, waste, water.",
 },
 ],
 },
 kaydara: {
 overview:
 "A Fimela farm-school paid by agroecology training and local produce, Association Jardins d’Afrique.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Farm-school",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "UNESCO Green Citizens and FAO films are recognition.",
 },
 ],
 private: [
 {
 source: "Agroecology courses for Fimela youth (16 villages)",
 amount: "Training + farm produce",
 year: "2006–present",
 certainty: "documented",
 kind: "courses",
 note: "The alternative to Dakar. Kaydara: come to the school of life.",
 },
 ],
 },
 otepic: {
 overview:
 "A Kitale self-help project paid by permaculture trainings, food work, and partners such as Tamera, three gardens, not Trans-Nzoia lots.",
 grantsHeadline: "Partner support",
 privateHeadline: "Trainings and gardens",
 grants: [
 {
 source: "Tamera partnership and allied donors",
 amount: "Programme support",
 year: "2011–present",
 certainty: "documented",
 kind: "grant",
 note: "Inspired the larger Sabwani purchase. Associated capital.",
 },
 ],
 private: [
 {
 source: "Permaculture trainings and garden produce",
 amount: "Courses + food",
 year: "2008–present",
 certainty: "documented",
 kind: "courses",
 note: "Street-child food, water for ~3,000, 22 orphans at Tabasamu.",
 },
 ],
 },
 ndanifor: {
 overview:
 "A Bafut demonstration site paid by trainings and a Gaia Trust award until the Anglophone crisis emptied it, the NGO still teaches; the five acres are raise.",
 grantsHeadline: "Gaia Trust award",
 privateHeadline: "Trainings",
 grants: [
 {
 source: "Gaia Trust Excellence Award",
 amount: "Award (2015)",
 year: "2015",
 certainty: "documented",
 kind: "award",
 note: "The year before the war reached Bafut. Recognition.",
 },
 ],
 private: [
 {
 source: "Permaculture and ecovillage-design trainings; former eco-lodge",
 amount: "Courses + stays (pre-crisis)",
 year: "2012–2016",
 certainty: "documented",
 kind: "courses",
 note: "The visitor door until expulsion. Confirm whether the Bafut site is actually open.",
 },
 ],
 },
 basaisa: {
 overview:
 "A Sharqiya village paid by association enterprises, biogas, rooftop solar, and a physicist who went home, not by Cairo lots.",
 grantsHeadline: "University and partner support",
 privateHeadline: "Village enterprises",
 grants: [
 {
 source: "AUC / research and demonstration support for rural PV and biogas",
 amount: "In-kind and programme (from the 1970s)",
 year: "1974–present",
 certainty: "estimated",
 kind: "grant",
 note: "Arafa taught physics at the American University in Cairo and ran the village as a living lab.",
 },
 ],
 private: [
 {
 source: "Community Development Association enterprises (biogas, solar, women’s training)",
 amount: "Village income (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "2017 solar station on the association roof. New Basaisa later farmed ~750 feddans in Sinai.",
 },
 ],
 },
 "boabeng-fiema": {
 overview:
 "A twin-village sanctuary paid by guided walks and a 1975 bye-law, not by Nkoranza lots.",
 grantsHeadline: "Wildlife Division frame",
 privateHeadline: "Walk tickets",
 grants: [
 {
 source: "Ghana Wildlife Division sanctuary support",
 amount: "Technical / frame (later)",
 certainty: "estimated",
 kind: "grant",
 note: "The bye-law was the villages’. The Division later helped the sanctuary frame.",
 },
 ],
 private: [
 {
 source: "Guided walks through 4.4 km² of village forest",
 amount: "Ticket fees (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "Money to the sanctuary and the two communities. The monkeys are the draw.",
 },
 ],
 },
 fambidzanai: {
 overview:
 "Africa’s first permaculture campus paid by courses, a diploma, and partner support, not by Stapleford lots.",
 grantsHeadline: "Partner and network support",
 privateHeadline: "Courses and diploma",
 grants: [
 {
 source: "Partner and PELUM-network support",
 amount: "Programme (ongoing)",
 certainty: "estimated",
 kind: "grant",
 note: "A PVO campus.",
 },
 ],
 private: [
 {
 source: "Permaculture design courses and Diploma in Agroecology",
 amount: "Course fees (ongoing)",
 year: "1988–present",
 certainty: "documented",
 kind: "courses",
 note: "The public door on Dovedale Road. Farmers come and go home.",
 },
 ],
 },
 guie: {
 overview:
 "A Sahel bocage paid by village perimeters, a farm-school, and Terre Verte.",
 grantsHeadline: "Terre Verte / AZN partners",
 privateHeadline: "Farm and CFAR",
 grants: [
 {
 source: "Terre Verte and AZN partner fundraising",
 amount: "Programme (from 1989)",
 year: "1989–present",
 certainty: "documented",
 kind: "grant",
 note: "French NGO and Burkinabe association. Annual reports from 01 B.P. 551 Ouagadougou.",
 },
 ],
 private: [
 {
 source: "Bocage perimeters, farm produce, CFAR training",
 amount: "Farm and course income (ongoing)",
 certainty: "documented",
 kind: "courses",
 note: "Wégoubri hedges on village fields. Tankouri 100 ha is the largest documented perimeter.",
 },
 ],
 },
 chikukwa: {
 overview:
 "Six Chimanimani villages paid by orchards, a training centre, and partner support, communal land.",
 grantsHeadline: "Partner support",
 privateHeadline: "Centre and produce",
 grants: [
 {
 source: "Partner support for CELUCT / CELUO training",
 amount: "Programme (from the 1990s)",
 certainty: "estimated",
 kind: "grant",
 note: "The Westermanns were catalysts, not purchasers of a ranch. Communal land stayed communal.",
 },
 ],
 private: [
 {
 source: "Orchards, bees, fish, Chitekete training centre",
 amount: "Produce and courses (ongoing)",
 certainty: "documented",
 kind: "courses",
 note: "Gift-economy labour on community works.",
 },
 ],
 },
 "il-ngwesi": {
 overview:
 "A Maasai group ranch paid by a community-owned lodge and an Equator Prize, not by Laikipia lots.",
 grantsHeadline: "Equator Prize / USAID lodge",
 privateHeadline: "Lodge",
 grants: [
 {
 source: "USAID through Kenya Wildlife Service, lodge construction",
 amount: "Lodge (1996)",
 year: "1996",
 certainty: "documented",
 kind: "grant",
 note: "The community owns and runs the lodge. Construction money.",
 },
 {
 source: "UNDP Equator Prize",
 amount: "Prize (2002)",
 year: "2002",
 certainty: "documented",
 kind: "award",
 note: "Recognition for wildlife, solar, and cash back to households (~40% of lodge revenue in the prize account).",
 },
 ],
 private: [
 {
 source: "Il Ngwesi Eco-Lodge",
 amount: "Bandas and walks (ongoing)",
 year: "1996–present",
 certainty: "documented",
 kind: "business",
 note: "Community-owned. You take a bandas.",
 },
 ],
 },
 lynedoch: {
 overview:
 "A Stellenbosch HOA paid by house sales, an Institute, and a 1999 land purchase.",
 grantsHeadline: "Development finance",
 privateHeadline: "Houses and Institute",
 grants: [
 {
 source: "Development and affordable-housing finance for the 6 ha",
 amount: "Land R3 million (1999) plus later infrastructure",
 year: "1999–2004",
 certainty: "documented",
 kind: "loan",
 note: "Nonprofit developer. The municipality required an HOA.",
 },
 ],
 private: [
 {
 source: "Freehold house sales under the LHOA (including an affordable tranche)",
 amount: "Plot transfers from July 2004",
 year: "2004–present",
 certainty: "documented",
 kind: "member-equity",
 note: "A house is the membership path. Confirm which units are actually affordable.",
 },
 {
 source: "Sustainability Institute programmes, Spark school, conference use",
 amount: "Courses and campus (ongoing)",
 year: "1999–present",
 certainty: "documented",
 kind: "courses",
 note: "The public door on the old hotel site.",
 },
 ],
 },
 anja: {
 overview:
 "A 30-hectare granite reserve paid by 12,000 visitors a year and an Equator Prize.",
 grantsHeadline: "UNDP / GEF / Equator Prize",
 privateHeadline: "Gate fees",
 grants: [
 {
 source: "UNDP (reserve 2001) and GEF",
 amount: "Founding support (2001)",
 year: "2001",
 certainty: "documented",
 kind: "grant",
 note: "Helped gazette 30 ha.",
 },
 {
 source: "UNDP Equator Prize",
 amount: "US$5,000 (2012)",
 year: "2012",
 certainty: "documented",
 kind: "award",
 note: "Recognition for community ecotourism. The granite stayed with the association.",
 },
 ],
 private: [
 {
 source: "Guided walks among ~300 ring-tailed lemurs",
 amount: "Gate fees (12,000 visitors in 2011)",
 year: "2001–present",
 certainty: "documented",
 kind: "business",
 note: "Fees pay guides, schools, teacher salaries.",
 },
 ],
 },
 celo: {
 overview:
 "A 1937 land trust paid by a refundable member fee, cottage industry, and leases to a school and a camp, not by Yancey County lots.",
 grantsHeadline: "No founding land grant of record",
 privateHeadline: "Regnery gift, member fees, leases",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Arthur Morgan and William H. Regnery’s private money founded the 1937 purchase. Later school and camp are separate nonprofits on leases.",
 },
 ],
 private: [
 {
 source: "William H. Regnery’s founding capital",
 amount: "Industrialist gift that bought the South Toe land (1937)",
 year: "1937",
 certainty: "documented",
 kind: "donation",
 note: "The origin money.",
 },
 {
 source: "Member land fees (refundable, lifetime-lease style)",
 amount: "Modest one-time fee per family unit (Cause IQ: 53 units)",
 year: "1937–present",
 certainty: "documented",
 kind: "member-equity",
 note: "You pay to be assigned land, not to own it. The fee is refundable.",
 },
 {
 source: "Leases to Arthur Morgan School, Camp Celo, health centre, neighborhood farm",
 amount: "Low-cost leases (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "CCI’s 990 describes these as long-standing endeavours on community land.",
 },
 ],
 },
 "sunrise-ranch": {
 overview:
 "A 123-acre Eden Valley farm bought for $6,000 in 1945, kept by retreat fees and Emissary gifts, not by Front Range lots.",
 grantsHeadline: "No founding public grant found",
 privateHeadline: "Purchase, programmes, gifts",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Meeker bought a barren farm. Later buildings (Pavilion 1986, dome) were community-built.",
 },
 ],
 private: [
 {
 source: "Lloyd Arthur Meeker’s 1945 purchase",
 amount: "US$6,000 for 123 acres",
 year: "1945",
 certainty: "documented",
 kind: "donation",
 note: "The founding number the Ranch still publishes.",
 },
 {
 source: "Retreats, conferences, guest stays",
 amount: "Programme and lodging fees (ongoing)",
 year: "1945–present",
 certainty: "documented",
 kind: "courses",
 note: "sunriseranch.org is the cash door. Resident staff are the labour.",
 },
 ],
 },
 "ananda-village": {
 overview:
 "A 700-acre Sierra colony paid by retreats, member housing investment, and member businesses, not by Nevada County lots.",
 grantsHeadline: "No founding public land grant found",
 privateHeadline: "Land purchases, retreats, housing inventory",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Kriyananda bought 70 acres in 1968, 236 in 1969, 326 in 1974 with movement money.",
 },
 ],
 private: [
 {
 source: "Three land purchases (70 + 236 + 326 acres)",
 amount: "Private / movement capital (1968–74)",
 year: "1968–1974",
 certainty: "documented",
 kind: "member-equity",
 note: "The acreage path the village still publishes.",
 },
 {
 source: "Expanding Light and Meditation Retreat",
 amount: "Course and stay fees (ongoing)",
 certainty: "documented",
 kind: "courses",
 note: "The public cash engine on the same 700 acres.",
 },
 {
 source: "Cooperative housing inventory",
 amount: "Individual investment in community housing (ongoing)",
 certainty: "documented",
 kind: "member-equity",
 note: "You invest in a dwelling, not in a Sierra lot. Speculation is the thing they designed out.",
 },
 ],
 },
 sandhill: {
 overview:
 "A 168-acre Scotland County farm paid by a 1970s common purse, sorghum, and now monthly member contributions, not by lots.",
 grantsHeadline: "No founding public grant found",
 privateHeadline: "FEC labour, sorghum, contributions",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A 1974 egalitarian farm. Dancing Rabbit’s later $190,000 land purchase is next door, not this title.",
 },
 ],
 private: [
 {
 source: "Sorghum syrup and field crops (FEC era)",
 amount: "Farm sales (1974–2010s)",
 certainty: "documented",
 kind: "business",
 note: "The public face in Feast Magazine 2015. The mill is lineage.",
 },
 {
 source: "Monthly member contributions",
 amount: "Taxes, utilities, upkeep (2019–present)",
 year: "2019–present",
 certainty: "documented",
 kind: "member-equity",
 note: "The post-purse compact. Private dwellings, common land.",
 },
 ],
 },
 linnaea: {
 overview:
 "A 314-acre no-sale farm paid by a 1978 land-trust transfer and a 1999 covenant, not by Cortes lots.",
 grantsHeadline: "Covenant",
 privateHeadline: "Cabot / TPL transfer, CSA, courses",
 grants: [
 {
 source: "The Land Conservancy of BC / Quadra Island Conservancy",
 amount: "Conservation covenant on 127 ha (1999)",
 year: "1999",
 certainty: "documented",
 kind: "easement",
 note: "A use restriction.",
 },
 ],
 private: [
 {
 source: "Robert Cabot → Trust for Public Land → Turtle Island Earth Stewards",
 amount: "1978 title transfer into a no-sale trust",
 year: "1978",
 certainty: "documented",
 kind: "donation",
 note: "The Hansen ranch became Linnaea. The dirt was taken off the market.",
 },
 {
 source: "CSA, farm stand, internships, PDC, farmstays",
 amount: "Produce and course fees (ongoing)",
 certainty: "documented",
 kind: "courses",
 note: "linnaeafarm.org. Stewards, not lot sales.",
 },
 ],
 },
 "lost-valley": {
 overview:
 "An 87-acre Dexter campus paid by courses, lodging, and a 501(c)(3), not by Lane County lots.",
 grantsHeadline: "No founding public land grant found",
 privateHeadline: "Courses, lodging, donations",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Shiloh sold in the 1980s to people who wanted an eco-village. Lost Valley opened 1989 as a charity.",
 },
 ],
 private: [
 {
 source: "PDC, EDE, Community Experience Weeks, lodging",
 amount: "Course and stay fees (ongoing from the mid-1990s)",
 certainty: "documented",
 kind: "courses",
 note: "Courses and lodging are the cash door. Meadowsong housing is a programme.",
 },
 ],
 },
 windsong: {
 overview:
 "A 5.8-acre Langley cohousing paid by 34 mortgages and strata fees, honest HOA money.",
 grantsHeadline: "No founding public grant found",
 privateHeadline: "34 mortgages, strata fees",
 grants: [
 {
 source: "No major public construction grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A private cohousing build completed 19 July 1996. The creek setback was a regulatory fight.",
 },
 ],
 private: [
 {
 source: "34 townhome purchases",
 amount: "~CAD $6 million construction-era figure published on windsong.bc.ca",
 year: "1996",
 certainty: "documented",
 kind: "member-equity",
 note: "Individual title. A house is the membership path.",
 },
 {
 source: "Strata fees (gas, heat, Wi-Fi in later listings)",
 amount: "Monthly (ongoing)",
 certainty: "documented",
 kind: "member-equity",
 note: "The HOA layer. Common house, creek setback, two playgrounds.",
 },
 ],
 },
 "camphill-ontario": {
 overview:
 "A 290-acre Simcoe Camphill paid by provincial disability-support contracts and charity gifts, not by Angus lots.",
 grantsHeadline: "Provincial care contracts",
 privateHeadline: "Charity gifts, workshops, farm",
 grants: [
 {
 source: "Ontario disability-support / developmental-services contracts",
 amount: "Ongoing public care funding (undisclosed here)",
 year: "1986–present",
 certainty: "estimated",
 kind: "contract",
 note: "The cash engine of a Camphill charity. Confirm current ministry programmes.",
 },
 ],
 private: [
 {
 source: "Camphill Foundation Canada and donor gifts",
 amount: "Ongoing fundraising",
 certainty: "documented",
 kind: "donation",
 note: "Associated money, not the title. Charity #106835879 RR0001.",
 },
 {
 source: "Wood shop, pottery, biodynamic farm sales",
 amount: "Craft fairs and custom orders (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "Workshop enterprises of the village, not lot sales.",
 },
 ],
 },
 yarrow: {
 overview:
 "A 25-acre Chilliwack dairy paid by a 2002 co-op purchase, 33 strata homes, and farm leases, Canada’s first ecovillage zone.",
 grantsHeadline: "Zoning",
 privateHeadline: "Co-op purchase, strata, farm leases",
 grants: [
 {
 source: "City of Chilliwack Ecovillage zoning",
 amount: "Development rights (2004 commercial-residential; full ecovillage zone July 2006)",
 year: "2006",
 certainty: "documented",
 kind: "other",
 note: "Canada’s first ecovillage zone. A municipal permission.",
 },
 ],
 private: [
 {
 source: "YES Cooperative purchase of the 25-acre dairy",
 amount: "Member equity (2002)",
 year: "2002",
 certainty: "documented",
 kind: "member-equity",
 note: "The umbrella buy.",
 },
 {
 source: "Groundswell 33-home strata",
 amount: "Unit purchases (build 2008–14)",
 year: "2008–2014",
 certainty: "documented",
 kind: "member-equity",
 note: "HOA/strata money after Durrett/McCamant. A unit is the residential door.",
 },
 {
 source: "Farm leases and CSA",
 amount: "Ongoing from 2003",
 certainty: "documented",
 kind: "business",
 note: "Osprey, Ohm, Soban, Ripple Creek, Chubby Roots, The Farmacy over the years. Lessees, not lot owners.",
 },
 ],
 },
 ecoreality: {
 overview:
 "A 43-acre Salt Spring co-op paid by member-funders, still advertising for more.",
 grantsHeadline: "No founding public grant found",
 privateHeadline: "Member-funder shares, farm",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A s. 149(1)(e) agricultural co-op from 1 October 2005. ALR land.",
 },
 ],
 private: [
 {
 source: "Member-funder equity toward the 43 acres",
 amount: "Ongoing; the co-op has publicly sought additional members to help pay the land",
 year: "2005–present",
 certainty: "documented",
 kind: "member-equity",
 note: "Peak Moment 2014 and the wiki. Confirm who is on the land before you wire money.",
 },
 {
 source: "Farm produce and visiting students",
 amount: "Ongoing small farm income",
 certainty: "estimated",
 kind: "business",
 note: "Goats, gardens, Zone 1.",
 },
 ],
 },
  ...asiaFunding,
  ...russiaFunding,
  ...usaMoreFunding,
  ...polandFunding,
  ...volunteerBatchFunding,
  ...formerFunding,
  ...formerMoreFunding,
  ...formerClosedFunding,
  ...livingMoreFunding,
  ...livingBatch2Funding,
  ...livingBatch3Funding,
  ...livingBatch4Funding,
  ...livingBatch5Funding,
  ...livingBatch6Funding,
  ...livingBatch7Funding,
  ...livingBatch8Funding,
  ...livingBatch9Funding,
  ...livingBatch10Funding,
  ...livingBatch11Funding,
  ...livingBatch12Funding,
  ...livingBatch13Funding,
  ...livingBatch14Funding,
  ...livingBatch15Funding,
  ...livingBatch16Funding,
  ...livingBatch17Funding,
  ...livingBatch18Funding,
  ...livingBatch19Funding,
  ...livingBatch20Funding,
  ...livingBatch21Funding,
  ...livingBatch22Funding,
  ...livingBatch23Funding,
  ...livingBatch24Funding,
  ...livingBatch25Funding,
  ...livingBatch26Funding,
  ...livingBatch27Funding,
  ...livingBatch28Funding,
  ...livingBatch29Funding,
  ...livingBatch30Funding,
  ...livingBatch31Funding,
  ...livingBatch32Funding,
  ...livingBatch33Funding,
  ...livingGlampingFunding,
  ...sustainableEcovillageFunding,
  ...maitreyaEcovillageFunding,
};

const empty: CommunityFunding = {
 overview: "No funding record assembled for this community.",
 grantsHeadline: "None assembled",
 privateHeadline: "None assembled",
 grants: [],
 private: []
};

export function fundingFor(slug: string): CommunityFunding {
 return fundingBySlug[slug] ?? empty;
}

export function inferKind(item: FundingItem, side: "grants" | "private"): FundingKind {
 if (item.kind) return item.kind;
 const text = `${item.source} ${item.note}`.toLowerCase();
 if (/easement/.test(text)) return "easement";
 if (/award|prize|recognition|demonstration status/.test(text)) return "award";
 if (/medicaid|opwdd|entitlement|disability service|contract/.test(text)) return "contract";
 if (side === "grants") return "grant";
 if (/share|member equity|co-op|genossenschaft|joining fee|commons fee|lot sale|freehold/.test(text)) {
 return "member-equity";
 }
 if (/loan|revolving|mortgage/.test(text)) return "loan";
 if (/credito|currency/.test(text)) return "currency";
 if (/course|seminar|workshop|guest/.test(text)) return "courses";
 if (/business|hammock|tofu|resin|nut butter|farm income|sales|craft/.test(text)) return "business";
 if (/donation|gift|contribution|990|tzedakah/.test(text)) return "donation";
 return "other";
}

export function yearSortValue(year?: string): number {
 if (!year) return 0;
 const years = (year.match(/\d{4}/g) ?? []).map(Number);
 const short = year.match(/(\d{4})\s*[–-]\s*(\d{2})(?!\d)/);
 if (short) {
 years.push(Number(String(Number(short[1])).slice(0, 2) + short[2]));
 }
 return years.length ? Math.max(...years): 0;
}

export type FundingRow = {
 id: string;
 slug: string;
 community: string;
 country: string;
 side: "public" | "private";
 kind: FundingKind;
 source: string;
 amount: string;
 year?: string;
 yearSort: number;
 certainty: Certainty;
 note: string;
};

export function allFundingRows(): FundingRow[] {
 const rows: FundingRow[] = [];
 for (const community of communities) {
 const money = fundingFor(community.slug);
 const push = (item: FundingItem, side: "grants" | "private", index: number) => {
 if (item.source === "No major public grant found" || item.source === "Not assembled") return;
 rows.push({
 id: `${community.slug}-${side}-${index}`,
 slug: community.slug,
 community: community.name,
 country: community.country,
 side: side === "grants" ? "public": "private",
 kind: inferKind(item, side),
 source: item.source,
 amount: item.amount,
 year: item.year,
 yearSort: yearSortValue(item.year),
 certainty: item.certainty,
 note: item.note,
 });
 };
 money.grants.forEach((item, i) => push(item, "grants", i));
 money.private.forEach((item, i) => push(item, "private", i));
 }
 return rows;
}
