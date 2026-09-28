import { asiaLegalEntities } from "./asia-details";
import { russiaLegalEntities } from "./russia-details";
import { usaMoreLegalEntities } from "./usa-details";
import { polandLegalEntities } from "./poland-details";
import { volunteerBatchLegalEntities } from "./volunteer-batch-details";
import { formerLegalEntities } from "./former-details";
import { formerMoreLegalEntities } from "./former-more-details";
import { formerClosedLegalEntities } from "./former-closed-details";
import { livingMoreLegalEntities } from "./living-more-details";
import { livingBatch2LegalEntities } from "./living-batch2-details";
import { livingBatch3LegalEntities } from "./living-batch3-details";
import { livingBatch4LegalEntities } from "./living-batch4-details";
import { livingBatch5LegalEntities } from "./living-batch5-details";
import { livingBatch6LegalEntities } from "./living-batch6-details";
import { livingBatch7LegalEntities } from "./living-batch7-details";
import { livingBatch8LegalEntities } from "./living-batch8-details";
import { livingBatch9LegalEntities } from "./living-batch9-details";
import { livingBatch10LegalEntities } from "./living-batch10-details";
import { livingBatch11LegalEntities } from "./living-batch11-details";
import { livingBatch12LegalEntities } from "./living-batch12-details";
import { livingBatch13LegalEntities } from "./living-batch13-details";
import { livingBatch14LegalEntities } from "./living-batch14-details";
import { livingBatch15LegalEntities } from "./living-batch15-details";
import { livingBatch16LegalEntities } from "./living-batch16-details";
import { livingBatch17LegalEntities } from "./living-batch17-details";
import { livingBatch18LegalEntities } from "./living-batch18-details";
import { livingBatch19LegalEntities } from "./living-batch19-details";
import { livingBatch20LegalEntities } from "./living-batch20-details";
import { livingBatch21LegalEntities } from "./living-batch21-details";
import { livingBatch22LegalEntities } from "./living-batch22-details";
import { livingBatch23LegalEntities } from "./living-batch23-details";
import { livingBatch24LegalEntities } from "./living-batch24-details";
import { livingBatch25LegalEntities } from "./living-batch25-details";
import { livingBatch26LegalEntities } from "./living-batch26-details";
import { livingBatch27LegalEntities } from "./living-batch27-details";
import { livingBatch28LegalEntities } from "./living-batch28-details";
import { livingBatch29LegalEntities } from "./living-batch29-details";
import { livingBatch30LegalEntities } from "./living-batch30-details";
import { livingBatch31LegalEntities } from "./living-batch31-details";
import { livingBatch32LegalEntities } from "./living-batch32-details";
import { livingBatch33LegalEntities } from "./living-batch33-details";

export type EntityStatus = "current" | "historical" | "associated";
export type EntityLayer =
 | "land"
 | "membership"
 | "education"
 | "enterprise"
 | "network"
 | "covenant";

export type LegalEntity = {
 name: string;
 kind: string;
 role: string;
 status: EntityStatus;
 layer: EntityLayer;
 year?: string;
 identifier?: string;
 notes?: string;
 /** Canonical structure tags. Overrides the kind→form map when set. */
 forms?: string[];
};

export const layerOrder: EntityLayer[] = [
 "land",
 "membership",
 "education",
 "enterprise",
 "covenant",
 "network"
];

export const layerLabels: Record<EntityLayer, string> = {
 land: "Land & title",
 membership: "Membership & governance",
 education: "Education & charity",
 enterprise: "Enterprises",
 covenant: "Covenants & designations",
 network: "Networks & spin-offs"
};

export const statusLabels: Record<EntityStatus, string> = {
 current: "Current",
 historical: "Historical",
 associated: "Associated"
};

/** Canonical legal-structure tags derived from each entity's `kind`. Empty = not a structure. */
const formsByKind: Record<string, string[]> = {
 "501(c)(2) community land trust": ["Community land trust", "501(c)(2)"],
 "501(c)(2) title-holding corporation": ["501(c)(2)"],
 "501(c)(3) Christian nonprofit": ["501(c)(3)"],
 "501(c)(3) community land trust": ["Community land trust", "501(c)(3)"],
 "501(c)(3) community-development nonprofit": ["501(c)(3)"],
 "501(c)(3) educational nonprofit": ["501(c)(3)"],
 "501(c)(3) nonprofit": ["501(c)(3)"],
 "501(c)(3) nonprofit (formerly Dancing Rabbit, Inc.)": ["501(c)(3)"],
 "501(c)(3) nonprofit corporation": ["501(c)(3)"],
 "501(c)(3) public charity": ["501(c)(3)"],
 "501(c)(3) relief and development nonprofit": ["501(c)(3)"],
 "California limited liability company": ["LLC"],
 "Church body (historical purchaser)": ["Religious society"],
 "Colombian nonprofit foundation": ["Nonprofit foundation"],
 "Community Benefit Society (CBS); later also a charity": ["Community Benefit Society"],
 "Community enterprise": ["Trading company"],
 "Community finance / share vehicle": ["Community finance"],
 "Community land / development company": ["Property trust"],
 "Community trading company": ["Trading company"],
 "Community-development loan fund (program of CRSP)": [],
 "Community-owned press": ["Trading company"],
 "Community-owned tofu enterprise": ["Trading company"],
 "Company limited by guarantee; educational charity": ["Company limited by guarantee"],
 "Complementary currency": [],
 "Cooperative agricultural settlement (Israeli kibbutz law)": ["Kibbutz"],
 "Corporation (community-originated)": ["Trading company"],
 "Danish association with limited-partnership ownership": ["Income-sharing"],
 "Developer company": ["Trading company"],
 "Educational arm of the kibbutz": [],
 "Educational institute (founded on site)": [],
 "Environmental education centre (program of Sólheimar)": [],
 "Federal historic designation": ["Historic designation"],
 "Freehold residential and commercial lots": ["Freehold title"],
 "German nonprofit limited company (gemeinnützige GmbH)": ["Nonprofit gGmbH"],
 "German registered association": ["Registered association"],
 "German registered association (eingetragener Verein)": ["Registered association"],
 "German registered charitable association": ["Registered association"],
 "German settlement / housing cooperative": ["Housing cooperative"],
 "Ground leases + personal building title": ["Ground lease"],
 "Icelandic self-governing institution (sjálfseignarstofnun)": ["Self-governing institution"],
 "Independent 501(c)(3) (spun out)": ["501(c)(3)"],
 "Independent religious congregation": ["Religious society"],
 "Indian society (historical landholder)": ["Membership association"],
 "Individual dwellings on company land": ["Freehold title"],
 "Internal collectives of the storkollektiv": ["Trading company"],
 "Internal constitutional federation": ["Federation of cooperatives"],
 "Internal enterprises of the e.V.": ["Trading company"],
 "Internal enterprises under the Foundation": ["Trading company"],
 "Internal governance of the gGmbH community": [],
 "Interracial Christian commune": ["Income-sharing"],
 "Italian cooperatives": ["Federation of cooperatives"],
 "Italian nonprofit (ANBI status)": ["Nonprofit foundation"],
 "Japanese nonprofit organization": ["NPO"],
 "Japanese tax / labour-law workaround": ["Sole proprietorship"],
 "Land-conservation nonprofit": ["Conservation covenant"],
 "Lateral movement association": [],
 "Limited-equity housing cooperative; 501(c)(3)": ["Limited-equity co-op", "501(c)(3)"],
 "Member-owned CSA / not-for-profit social enterprise": ["CSA"],
 "Membership community holding land in common": ["Income-sharing"],
 "Municipal zoning overlay": [],
 "National federation of kibbutzim": ["Kibbutz"],
 "National land tenure under kibbutz law": ["State land"],
 "Neighborhood / property trust": ["Property trust"],
 "Neighborhood legal entities": ["Housing cooperative", "LLC"],
 "Network of German political communes": [],
 "Network of income-sharing communities": ["Income-sharing"],
 "New York housing cooperative": ["Housing cooperative"],
 "New Zealand charitable trust": ["Charitable trust"],
 "Non-exempt nonprofit": ["Membership association"],
 "Nonprofit corporation (common-purse era)": ["Income-sharing"],
 "Nonprofit limited company (gGmbH)": ["Nonprofit gGmbH"],
 "North Carolina homeowners association": ["Homeowners association"],
 "On-site education program": [],
 "Open municipal council": ["Concejo / recovered village"],
 "Ordinary freehold plus running covenants": ["Freehold title"],
 "Portuguese association (50% shareholder of ILOS)": ["Membership association"],
 "Portuguese limited company (not-for-profit social enterprise)": ["Limited company"],
 "Previous landowner": [],
 "Private house title on co-op land": ["Freehold title"],
 "Private residential title / tenancy": ["Freehold title"],
 "Production arm of the centre": ["Trading company"],
 "Program of Tamera": [],
 "Publishing house": ["Trading company"],
 "Queensland body corporate (BCCM Act)": ["Body corporate"],
 "Queensland body corporate / community titles scheme": ["Body corporate"],
 "Queensland land-settlement / community co-operative": ["Housing cooperative"],
 "Recorded private land-use regime": ["Conservation covenant"],
 "Regional government (title holder)": ["State land"],
 "Regional land trust": ["Conservation covenant"],
 "Religious society / covenant": ["Religious society"],
 "Residential clusters in shared buildings": [],
 "Revolving no-interest housing fund": [],
 "Scottish Charitable Incorporated Organisation": ["SCIO"],
 "Scottish charitable trust (predecessor)": ["Charitable trust"],
 "Second registered association": ["Registered association"],
 "Secular egalitarian corporation holding assets in common": ["Income-sharing"],
 "Spanish cultural association (CIF)": ["Cultural association"],
 "Statutory authority of the Foundation": ["Statutory foundation"],
 "Statutory body corporate (Act of Parliament of India)": ["Statutory foundation"],
 "Statutory conservation trust": ["Conservation covenant"],
 "Subsidiary body corporate": ["Body corporate"],
 "Subsidiary body corporates for remaining stages": ["Body corporate"],
 "Supporting foundation": ["Supporting foundation"],
 "Supporting nonprofit": ["501(c)(3)"],
 "Trading company of the Foundation": ["Trading company"],
 "Training program": [],
 "Unincorporated community association": ["Membership association"],
 "Religious society": ["Religious society"],
 "Trading company": ["Trading company"],
 "Homeowners association": ["Homeowners association"],
 "California private organic farm": ["Freehold title"],
 "Massachusetts private organic farm": ["Freehold title"],
 "Cooperative agricultural settlement": ["Membership association"],
 "Dissolved municipal corporation": ["Historic designation"],
 "National Historic Landmark designation": ["Historic designation"],
 "Unincorporated family-style commune": ["Unincorporated community"],
 "Unincorporated membership under the trust": ["Unincorporated community"],
 "Victorian co-operative (originally a Community Settlement Society)": ["Housing cooperative"],
 "Virginia corporation with IRC 501(d) apostolic tax status": ["501(d) corporation", "Income-sharing"],
 "Worker-owned community enterprise": ["Trading company"],
 "Costa Rican agricultural cooperative": ["Housing cooperative"],
 "Costa Rican registered association (asociación)": ["Registered association"],
 "Costa Rican condominio": ["Homeowners association", "Freehold title"],
 "Costa Rican private wildlife refuge": ["Conservation covenant"],
 "Costa Rican limited company (S.A. / SRL)": ["Limited company"],
 "Belize NGO": ["Nonprofit foundation"],
 "Guatemalan asociación civil / ONG": ["Registered association"],
 "Nicaraguan NGO (Ley 147)": ["Nonprofit foundation"],
 "Salvadoran asociación / ONG": ["Registered association"],
 "U.S. 501(c)(3) fiscal sponsor": ["501(c)(3)"],
 "Shareholder commons": ["Membership association"],
 "Freehold rainforest parcels": ["Freehold title"],
 "Treehouse community guidelines": ["Homeowners association"],
 "Spiritual membership community": ["Membership association"],
 "Private farm title": ["Freehold title"],
 "European Longo Maï cooperative movement": ["Housing cooperative"],
 "On-site intern and education program": [],
 "Regional environmental association": ["Registered association"],
 "Arizona State Land Department lease": ["State land"],
 "Oregon income-sharing cooperative": ["Income-sharing", "Housing cooperative"],
 "Mexican asociación civil": ["Registered association"],
 "Quebec nonprofit / OSBL": ["Nonprofit foundation"],
 "Quebec community enterprise": ["Trading company"],
 "Mexican cooperativa": ["Housing cooperative"],
 "Mexican producer cooperative": ["Housing cooperative"],
 "Mexican unión de cooperativas": ["Federation of cooperatives"],
 "Mexican savings cooperative": ["Community finance"],
 "Mexican bank trust (fideicomiso)": ["Property trust"],
 "Mexican ecological easement": ["Conservation covenant"],
 "Mexican diocesan / pastoral school": ["Nonprofit foundation"],
 "Jalisco condominium regime": ["Homeowners association", "Freehold title"],
 "Mexican limited company / LLC": ["LLC"],
 "Mexican biosphere reserve designation": ["Conservation covenant"],
 "Mexican bienes comunales": ["Housing cooperative"],
 "Mexican IAP (institución de asistencia privada)": ["Nonprofit foundation"],
 "Mexican flora-and-fauna protected area": ["Conservation covenant"],
 "Mexican national park (CONANP)": ["Conservation covenant"],
 "Mexican Sujeto de Derecho Público": ["Housing cooperative"],
 "Ananda Marga ashram community": ["Religious society"],
 "BC Community Services Cooperative": ["Housing cooperative"],
 "Ontario co-operative corporation": ["Housing cooperative"],
 "French agricultural cooperative": ["Housing cooperative"],
 "Swiss land foundation": ["Property trust"],
 "French donor association": ["Registered association"],
 "Spanish cooperative association": ["Registered association"],
 "Italian cultural association": ["Cultural association"],
 "Italian community social cooperative": ["Housing cooperative"],
 "Hungarian registered church": ["Religious society"],
 "Welsh housing cooperative": ["Housing cooperative"],
 "UK company limited by guarantee / charity": ["Company limited by guarantee"],
 "Finnish registered association": ["Registered association"],
 "Norwegian housing cooperative": ["Housing cooperative"],
 "Norwegian joint ownership of commons": ["Homeowners association"],
 "Norwegian developer company": ["Trading company"],
 "Swedish economic association": ["Housing cooperative"],
 "Swedish nonprofit association": ["Registered association"],
 "Swedish foundation": ["Nonprofit foundation"],
 "Dutch association": ["Registered association"],
 "Dutch social-housing partner": ["Housing cooperative"],
 "UK Shared Lives scheme": [],
 "Welsh building trust": ["Charitable trust"],
 "Norwegian freehold dwelling": ["Freehold title"],
 "Dutch freehold dwelling": ["Freehold title"],
 "Uruguayan anarchist cooperative": ["Income-sharing", "Housing cooperative"],
 "Uruguayan publishing cooperative": ["Trading company"],
 "Uruguayan agrarian cooperative": ["Housing cooperative"],
 "Chilean copropiedad": ["Homeowners association", "Freehold title"],
 "Chilean junta de vecinos": ["Membership association"],
 "Chilean limited company": ["Limited company"],
 "Chilean nonprofit educational corporation": ["Nonprofit foundation"],
 "Chilean family farm title": ["Freehold title"],
 "Peruvian Vaishnava community": ["Religious society"],
 "Argentine civil association": ["Registered association"],
 "Brazilian nonprofit institute": ["Nonprofit foundation"],
 "Brazilian nonprofit association": ["Registered association"],
 "Brazilian community enterprise": ["Trading company"],
 "Brazilian private dwellings": ["Freehold title"],
 "Colombian nonprofit association": ["Registered association"],
 "Colombian women's housing foundation": ["Nonprofit foundation"],
 "Colombian freehold dwellings": ["Freehold title"],
 "Ecuadorian civil association": ["Registered association"],
 "Ecuadorian private farm title": ["Freehold title"],
 "Egyptian holding company": ["Limited company"],
 "Egyptian developmental foundation": ["Nonprofit foundation"],
 "Egyptian biodynamic association": ["Registered association"],
 "Thai public-benefit foundation": ["Nonprofit foundation"],
 "Thai Buddhist ashram community": ["Religious society"],
 "Senegalese NGO": ["Nonprofit foundation"],
 "Senegalese artisan cooperative": ["Trading company"],
 "Beninese NGO": ["Nonprofit foundation"],
 "South African nonprofit company": ["Nonprofit foundation"],
 "Estonian nonprofit association": ["Registered association"],
 "Croatian association": ["Registered association"],
 "Turkish environmental cooperative": ["Housing cooperative"],
 "Zimbabwean family farm title": ["Freehold title"],
 "Zimbabwean learning-village nonprofit": ["Nonprofit foundation"],
 "Swiss property company": ["Limited company"],
 "Swiss community association": ["Registered association"],
 "Zambian Jesuit training centre": ["Nonprofit foundation", "Religious society"],
 "Ethiopian producer cooperative": ["Housing cooperative"],
 "Ethiopian trading company": ["Trading company"],
 "Kenyan community-based organization": ["Registered association"],
 "Ugandan NGO": ["Nonprofit foundation"],
 "Ghanaian community sanctuary": ["Conservation covenant"],
 "South African private farm title": ["Freehold title"],
 "Namibian nonprofit trust": ["Charitable trust"],
 "Namibian private reserve": ["Conservation covenant"],
 "Senegalese association": ["Registered association"],
 "Kenyan self-help group": ["Registered association"],
 "Cameroonian NGO": ["Nonprofit foundation"],
 "Egyptian community development association": ["Registered association"],
 "Zimbabwean private voluntary organisation": ["Nonprofit foundation"],
 "Burkinabe village association": ["Registered association"],
 "French rural-development NGO": ["Nonprofit foundation"],
 "Zimbabwean community trust": ["Charitable trust"],
 "Ugandan community-based organization": ["Registered association"],
 "Kenyan group ranch": ["Housing cooperative"],
 "South African Section 21 company": ["Nonprofit foundation"],
 "South African homeowners association": ["Homeowners association"],
 "Eswatini community tourism association": ["Registered association"],
 "Malagasy community association": ["Registered association"],
 "California homeowners association": ["Homeowners association"],
 "Colorado homeowners association": ["Homeowners association"],
 "Washington cohousing HOA": ["Homeowners association"],
 "Pennsylvania homestead nonprofit": ["Community land trust"],
 "Pennsylvania homestead corporation": ["Community land trust"],
 "Florida member-owned corporation": ["Housing cooperative"],
 "Virginia land-and-housing trust": ["Community land trust"],
 "Florida member-owned land cooperative": ["Housing cooperative"],
 "Virginia land and housing trust": ["Community land trust"],
 "Ohio community land trust": ["Community land trust"],
 "School of Living land trust": ["Community land trust"],
 "Pennsylvania 501(c)(3) Camphill village": ["501(c)(3)"],
 "New York 501(c)(3) urban community": ["501(c)(3)"],
 "Associated public funder": [],
 "Japanese general incorporated foundation": ["Nonprofit foundation"],
 "Indian charitable society": ["Nonprofit foundation"],
 "Korean childcare cooperative": ["Housing cooperative"],
 "Korean village association": ["Registered association"],
 "Sri Lankan private estate": ["Freehold title"],
 "Taiwan community development association": ["Registered association"],
 "Thai private organic farm": ["Freehold title"],
 "Indonesian private farm title": ["Freehold title"],
 "Indonesian permaculture institute": ["Nonprofit foundation"],
 "Chinese CSA social enterprise": ["CSA"],
 "Chinese villagers' committee": ["Membership association"],
 "Chinese private non-enterprise unit": ["Registered association"],
 "Chinese limited company": ["LLC"],
 "Chinese social organization": ["Registered association"],
 "Chinese foundation": ["Nonprofit foundation"],
 "Chinese rural collective": ["Housing cooperative"],
 "Russian non-commercial partnership": ["Membership association"],
 "Russian autonomous non-profit organization": ["Nonprofit foundation"],
 "Russian public association": ["Registered association"],
 "Russian religious organization": ["Religious society"],
 "Russian dacha non-profit partnership": ["Housing cooperative"],
 "Russian private land plot": ["Freehold title"],
 "Russian municipal rural settlement": ["Membership association"],
 "Philippine community development foundation": ["Nonprofit foundation"],
 "North Carolina 501(c)(4) land-holding nonprofit": ["Community land trust"],
 "Emissaries of Divine Light church": ["Religious society"],
 "Colorado retreat centre": ["501(c)(3)"],
 "California church corporation": ["Religious society"],
 "Ananda cooperative housing": ["Housing cooperative"],
 "Missouri nonprofit land project": ["Membership association"],
 "BC land trust society": ["Charitable trust"],
 "BC conservation covenant": ["Conservation covenant"],
 "BC strata corporation": ["Homeowners association", "Freehold title"],
 "Canadian registered charity": ["Nonprofit foundation"],
 "BC agricultural cooperative": ["Housing cooperative"],
 "BC farm cooperative": ["CSA"],
 "Polish public-benefit foundation": ["Nonprofit foundation"],
 "Polish foundation": ["Nonprofit foundation"],
 "Polish limited-liability company": ["LLC"],
 "Polish agricultural cooperative": ["Housing cooperative"],
 "Polish association": ["Registered association"],
 "Polish private plot": ["Freehold title"],
 "Polish municipal village": ["Membership association"]
};

export function formsFromKind(kind: string): string[] {
 const mapped = formsByKind[kind];
 if (mapped === undefined) return [];
 return mapped;
}

export function formsForEntity(entity: LegalEntity): string[] {
 if (entity.forms && entity.forms.length > 0) return entity.forms;
 return formsFromKind(entity.kind);
}

export function legalFormsFor(slug: string): string[] {
 const forms = new Set<string>();
 for (const entity of entitiesFor(slug)) {
 for (const form of formsForEntity(entity)) forms.add(form);
 }
 return [...forms].sort((a, b) => a.localeCompare(b));
}

export function allLegalForms(): string[] {
 const forms = new Set<string>();
 for (const list of Object.values(legalEntitiesBySlug)) {
 for (const entity of list) {
 for (const form of formsForEntity(entity)) forms.add(form);
 }
 }
 return [...forms].sort((a, b) => a.localeCompare(b));
}

export function sharedLegalForms(slugA: string, slugB: string): string[] {
 const other = new Set(legalFormsFor(slugB));
 return legalFormsFor(slugA).filter((form) => other.has(form));
}

export const legalEntitiesBySlug: Record<string, LegalEntity[]> = {
 "sabbathday-lake": [
 {
 name: "United Society of Shakers, Sabbathday Lake, Inc.",
 kind: "501(c)(3) nonprofit corporation",
 role: "Holds the village, museum, library, farm, and historic buildings. The legal face of the last active Shaker society.",
 status: "current",
 layer: "land",
 year: "Religious society 1794; tax entity 1976",
 identifier: "EIN 01-0317232",
 notes:
 "A nonprofit educational corporation in Maine law. Covenanted Shakers, still govern inward life.",
 },
 {
 name: "United Society of Believers in Christ’s Second Appearing",
 kind: "Religious society / covenant",
 role: "The Shaker covenant that new members still sign. Distinct from the 1957 Canterbury vote that tried to close membership elsewhere.",
 status: "current",
 layer: "membership",
 year: "Organized 1794",
 },
 {
 name: "Friends of the Shakers",
 kind: "Supporting nonprofit",
 role: "Public education, retreats, and fundraising that help the tiny residential society keep the village open.",
 status: "associated",
 layer: "education",
 },
 {
 name: "Sabbathday Lake Shaker Village National Historic Landmark District",
 kind: "Federal historic designation",
 role: "Landmark status on the land and buildings. Does not itself own title.",
 status: "current",
 layer: "covenant",
 year: "NHL listing",
 },
 ],

 solheimar: [
 {
 name: "Sólheimar ses",
 kind: "Icelandic self-governing institution (sjálfseignarstofnun)",
 role: "Independent nonprofit that operates the village, workplaces, guesthouse, and workshops.",
 status: "current",
 layer: "land",
 year: "Village founded 1930",
 notes:
 "Residents work inside the institution; they do not hold private title to houses or lots.",
 },
 {
 name: "Church of Iceland Childcare Committee",
 kind: "Church body (historical purchaser)",
 role: "Bought Hverakot on 31 March 1930 for ISK 8,000 and leased it to founder Sesselja Sigmundsdóttir.",
 status: "historical",
 layer: "land",
 year: "1930",
 },
 {
 name: "Sesseljuhús",
 kind: "Environmental education centre (program of Sólheimar)",
 role: "Turf-roofed visitor and environment centre opened in 2002.",
 status: "current",
 layer: "education",
 year: "2002",
 },
 ],

 riverside: [
 {
 name: "Religious Charitable Riverside Community Trust",
 kind: "New Zealand charitable trust",
 role: "Owns all land, houses, and major assets. There is no private title to houses or cars. Members pay rent to the trust.",
 status: "current",
 layer: "land",
 year: "1953",
 notes:
 "The trust and the residential community are legally distinct but designed to work together. Trustees administer the deed.",
 },
 {
 name: "Riverside residential community",
 kind: "Unincorporated membership under the trust",
 role: "Weekly consensus meetings run daily life. No leader. Membership has shifted from Christian-pacifist founding to a secular, pluralist group living under the same deed.",
 status: "current",
 layer: "membership",
 year: "Settlement 1941",
 },
 ],

 koinonia: [
 {
 name: "Koinonia Partners, Inc.",
 kind: "501(c)(3) Christian nonprofit",
 role: "Holds the farm, ministries, catalog business, and land. Members receive a needs-based allowance rather than individual title.",
 status: "current",
 layer: "land",
 year: "Farm 1942; reincorporated 1969",
 notes:
 "Tried a staff-and-board nonprofit model in 1993 (dropped the common purse); reorganized toward an intentional Christian community in 2005. Georgia Historic Site since 2005.",
 },
 {
 name: "Koinonia Farm (original common-purse community)",
 kind: "Interracial Christian commune",
 role: "Founding form: common purse, equal pay for Black and white workers, pacifist. Survived Klan boycotts via pecan mail-order.",
 status: "historical",
 layer: "membership",
 year: "1942–1969",
 },
 {
 name: "Fund for Humanity / Partnership Housing",
 kind: "Revolving no-interest housing fund",
 role: "Built 194 no-interest houses (1969–92). The template Millard and Linda Fuller took global as Habitat for Humanity.",
 status: "historical",
 layer: "enterprise",
 year: "1969–1992",
 },
 {
 name: "Habitat for Humanity International",
 kind: "Independent 501(c)(3) (spun out)",
 role: "Founded from Koinonia’s partnership-housing idea in Americus in 1976. Now a separate global charity.",
 status: "associated",
 layer: "network",
 year: "1976",
 },
 ],

 "camphill-copake": [
 {
 name: "Camphill Village U.S.A., Inc.",
 kind: "501(c)(3) public charity",
 role: "Owns land, houses, and workshops. The oldest and largest Camphill community in North America. Tax-exempt since 1963.",
 status: "current",
 layer: "land",
 year: "Village 1961; exempt 1963",
 notes:
 "Renamed Camphill Village Copake after its 60th anniversary to match the place-name custom of other Camphills.",
 },
 {
 name: "Camphill Village Copake Foundation",
 kind: "Supporting foundation",
 role: "Raises and holds funds in support of the village; does not replace the operating charity as landowner.",
 status: "current",
 layer: "education",
 },
 {
 name: "Camphill Association of North America",
 kind: "Lateral movement association",
 role: "Network of 100+ Camphill places worldwide. Copake helped seed later villages in Pennsylvania, Minnesota, California, and elsewhere.",
 status: "associated",
 layer: "network",
 year: "1983",
 },
 {
 name: "Camphill Academy",
 kind: "Training program",
 role: "Trains coworkers in anthroposophical social therapy.",
 status: "current",
 layer: "education",
 },
 {
 name: "The Christian Community (local chapter)",
 kind: "Independent religious congregation",
 role: "Close on-site relationship with the village; a separate church, not the landholding charity.",
 status: "associated",
 layer: "network",
 },
 ],

 findhorn: [
 {
 name: "Ecovillage Findhorn Community Benefit Society",
 kind: "Community Benefit Society (CBS); later also a charity",
 role: "Democratic community-ownership vehicle. Bought major land and buildings (including Universal Hall) from the Foundation; first stages completed 18 November 2024.",
 status: "current",
 layer: "land",
 year: "Founded May 2023",
 notes:
 "Open to Park residents. Elected board formed November 2023. Partners with Moray Council, the Scottish Government, and OSCR.",
 },
 {
 name: "Findhorn Foundation SCIO",
 kind: "Scottish Charitable Incorporated Organisation",
 role: "Historically held core Park assets and ran education. Ceased operations in November 2023 after financial collapse; the SCIO remains a registered charity while assets transfer.",
 status: "historical",
 layer: "land",
 year: "Trust 1968; Foundation 1972; SCIO later",
 identifier: "SC051938",
 notes: "The original hub of the ecovillage; more than 150 jobs ended when operations stopped.",
 },
 {
 name: "Findhorn Trust",
 kind: "Scottish charitable trust (predecessor)",
 role: "First formal container for the community’s assets before the Findhorn Foundation replaced it.",
 status: "historical",
 layer: "land",
 year: "1968–1972",
 },
 {
 name: "New Findhorn Association",
 kind: "Unincorporated community association",
 role: "Membership body for individuals and organisations connected with the Park, whether or not they were Foundation staff. Common Ground values statement.",
 status: "current",
 layer: "membership",
 year: "1999",
 },
 {
 name: "New Findhorn Directions Ltd",
 kind: "Trading company of the Foundation",
 role: "Historical commercial arm (eco-building, early wind turbine, ecological wastewater). Not the current community landholder.",
 status: "historical",
 layer: "enterprise",
 },
 {
 name: "Phoenix Community Stores Ltd",
 kind: "Community trading company",
 role: "Park-based retailer of organic produce and goods; one of the larger organic shops in northern Scotland.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Park Ecovillage Trust",
 kind: "Neighborhood / property trust",
 role: "One of the neighborhood-level entities that sat alongside the Foundation as land was sold down over decades.",
 status: "current",
 layer: "land",
 },
 {
 name: "Duneland Ltd",
 kind: "Community land / development company",
 role: "Holds or has held parts of the wider Findhorn/Duneland landscape as the Foundation sold parcels.",
 status: "current",
 layer: "land",
 },
 {
 name: "Ekopia Resource Exchange",
 kind: "Community finance / share vehicle",
 role: "Local investment vehicle used to spread economic risk across Park enterprises.",
 status: "associated",
 layer: "enterprise",
 },
 ],

 "twin-oaks": [
 {
 name: "Twin Oaks Community, Inc.",
 kind: "Virginia corporation with IRC 501(d) apostolic tax status",
 role: "Owns the land, houses, and businesses in common. Members are not individual title holders. 501(d) treats the community somewhat like a religious order for federal tax: the corporation is not taxed on community income; members report a small taxable ‘dividend’.",
 status: "current",
 layer: "land",
 year: "1967",
 notes:
 "A for-profit corporation in form. Income-sharing and labor-credit rules live in bylaws or in a charity’s exempt purpose.",
 },
 {
 name: "Twin Oaks Community Foods",
 kind: "Community-owned tofu enterprise",
 role: "Flagship income business (tofu). Assets sit with the community corporation, not with private shareholders.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Federation of Egalitarian Communities",
 kind: "Network of income-sharing communities",
 role: "Twin Oaks is a founding-era member. The FEC is a mutual-aid network.",
 status: "associated",
 layer: "network",
 },
 ],

 auroville: [
 {
 name: "Auroville Foundation",
 kind: "Statutory body corporate (Act of Parliament of India)",
 role: "Holds all movable and immovable assets of Auroville. Residents have no private land title. Created under the Auroville Foundation Act, 1988; assets vested 1 April 1992.",
 status: "current",
 layer: "land",
 year: "Act 1988; Foundation 1991; vesting 1992",
 notes:
 "The Act acquired Auroville’s assets in the public interest without compensation. Unique in this atlas: land tenure is a statute.",
 },
 {
 name: "Governing Board",
 kind: "Statutory authority of the Foundation",
 role: "Seven members appointed by the Government of India. General superintendence, direction, and management of the Foundation.",
 status: "current",
 layer: "membership",
 year: "1988 Act, §11",
 },
 {
 name: "Residents’ Assembly",
 kind: "Statutory authority of the Foundation",
 role: "All listed residents. Admission and termination of residents; advises on development. Acts through a Working Committee.",
 status: "current",
 layer: "membership",
 },
 {
 name: "International Advisory Council",
 kind: "Statutory authority of the Foundation",
 role: "Up to five members nominated by the Central Government. Advises the Governing Board; has no independent title.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Sri Aurobindo Society",
 kind: "Indian society (historical landholder)",
 role: "Resolved in 1964 to found the city and held early assets. After the Mother’s death (1973) a conflict over control led to the Emergency Provisions Act 1980 and then the 1988 Foundation Act.",
 status: "historical",
 layer: "land",
 year: "1964–1980",
 },
 {
 name: "Auroville commercial units / Central Fund",
 kind: "Internal enterprises under the Foundation",
 role: "Handmade paper, food, incense, construction, IT, guesthouses. Units contribute a share of profits to a Central Fund; residents receive a maintenance stipend, not wages as private owners.",
 status: "current",
 layer: "enterprise",
 },
 ],

 "the-farm": [
 {
 name: "The Farm Community (cooperative village)",
 kind: "Membership community holding land in common",
 role: "After the 1983 Changeover: land stays common, members pay monthly dues and keep personal assets. Town-meeting / board governance rather than a common purse.",
 status: "current",
 layer: "land",
 year: "Village 1971; cooperative form 1983",
 },
 {
 name: "The Foundation",
 kind: "Nonprofit corporation (common-purse era)",
 role: "Original container: members contributed all income. Recollectivization ended in 1983 when the bank pressed for loan repayment and the community required each adult to earn their own keep.",
 status: "historical",
 layer: "membership",
 year: "1971–1983",
 },
 {
 name: "Plenty International",
 kind: "501(c)(3) relief and development nonprofit",
 role: "Founded 1974 by Farm members after a local tornado. Still headquartered on the land; a separate charity, not the village landowner.",
 status: "associated",
 layer: "education",
 year: "1974",
 },
 {
 name: "Book Publishing Company",
 kind: "Community-owned press",
 role: "Long-running Farm enterprise (vegetarian, midwifery, and related titles). Community-owned rather than a member’s private firm.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Swan Conservation Trust",
 kind: "Land-conservation nonprofit",
 role: "Holds the 1,358-acre Big Swan Headwaters Preserve adjoining Farm country. Associated conservation vehicle, not the residential village.",
 status: "associated",
 layer: "covenant",
 },
 {
 name: "SE International",
 kind: "Corporation (community-originated)",
 role: "Geiger-counter manufacturer that grew out of Farm enterprises. Managers hold stock; related by origin.",
 status: "associated",
 layer: "enterprise",
 },
 {
 name: "Ecovillage Training Center",
 kind: "On-site education program",
 role: "Courses and demonstration on Farm land after the Changeover diversified livelihoods.",
 status: "current",
 layer: "education",
 },
 ],

 gaviotas: [
 {
 name: "Centro las Gaviotas",
 kind: "Colombian nonprofit foundation",
 role: "Holds the settlement, planted forest, hospital campus, and appropriate-technology work. Residents work inside the research-and-production nonprofit; they are not co-op shareholders.",
 status: "current",
 layer: "land",
 year: "1971",
 notes:
 "Deliberately apolitical during Colombia’s conflict (no weapons; treated combatants of every side in its hospital).",
 },
 {
 name: "Gaviotas Bogotá factory",
 kind: "Production arm of the centre",
 role: "Makes dual-action water pumps and windmills sold into the national market. Income sits with the nonprofit, not with private inventors.",
 status: "current",
 layer: "enterprise",
 },
 ],

 "moora-moora": [
 {
 name: "Moora Moora Co-operative Community",
 kind: "Victorian co-operative (originally a Community Settlement Society)",
 role: "Owns the 245 hectares in common. Members hold shares and a right to build in a designated cluster; houses are privately owned on co-op land.",
 status: "current",
 layer: "land",
 year: "1974",
 notes:
 "Registered under Victoria’s Co-operative Act 1959 as a Community Settlement Society. Seven directors elected annually.",
 },
 {
 name: "Cluster households",
 kind: "Private house title on co-op land",
 role: "Six to eight clusters of four to six houses. Livelihoods stay with households; this is not income-sharing.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Trust for Nature (Victoria)",
 kind: "Statutory conservation trust",
 role: "Holds a covenant over the forest. Restricts clearing and subdivision; does not own the co-op’s title.",
 status: "current",
 layer: "covenant",
 },
 ],

 "east-wind": [
 {
 name: "East Wind Community, Inc.",
 kind: "Secular egalitarian corporation holding assets in common",
 role: "Owns the Ozarks land, houses, and the nut-butter plant. Members have no private title. Direct democracy; managers elected annually.",
 status: "current",
 layer: "land",
 year: "1 May 1974",
 notes:
 "Sister community to Twin Oaks in the Federation of Egalitarian Communities. Income-sharing; labor is allocated collectively.",
 },
 {
 name: "East Wind Nut Butters",
 kind: "Worker-owned community enterprise",
 role: "Flagship income since about 1981 (peanut, almond, cashew, tahini). Assets belong to the community corporation, not to outside investors.",
 status: "current",
 layer: "enterprise",
 year: "1980–81",
 },
 {
 name: "Federation of Egalitarian Communities",
 kind: "Network of income-sharing communities",
 role: "Mutual-aid network.",
 status: "associated",
 layer: "network",
 },
 ],

 damanhur: [
 {
 name: "Federation of Damanhur",
 kind: "Internal constitutional federation",
 role: "Umbrella of nucleos (residential groups). A living constitution (rewritten from 130+ articles down to 15 since 1981) governs internal life. Citizens, not lot owners.",
 status: "current",
 layer: "membership",
 year: "Founded 1975; settled 1979; constitution 1981",
 },
 {
 name: "Damanhur cooperatives",
 kind: "Italian cooperatives",
 role: "Legal owners of land, houses, and enterprises. Citizens hold shares in the co-ops, not individual title to the land.",
 status: "current",
 layer: "land",
 notes:
 "The Federation is the social form; the cooperatives are the property form. Damanhur is a federation of nucleos, not one company.",
 },
 {
 name: "Damanhur Foundation",
 kind: "Italian nonprofit (ANBI status)",
 role: "Founded 2017 to inspire outward-facing cultural and educational work. Does not replace the co-ops as landowners.",
 status: "current",
 layer: "education",
 year: "2017",
 },
 {
 name: "Credito",
 kind: "Complementary currency",
 role: "Internal unit of account among citizens and co-op businesses.",
 status: "current",
 layer: "enterprise",
 },
 ],

 svanholm: [
 {
 name: "Svanholm Storkollektiv",
 kind: "Danish association with limited-partnership ownership",
 role: "Joint owner of the historic estate. Members are limited partners (kommanditister) in the legal entity, so there is no individual title. All members sit on the board.",
 status: "current",
 layer: "land",
 year: "1978",
 notes:
 "An association of more than 100 people bought the manor (mentioned 1346; rebuilt 1744) together and took on the debt. Direct democracy and consensus.",
 },
 {
 name: "Svanholm organic farm, forestry, and small enterprises",
 kind: "Internal collectives of the storkollektiv",
 role: "Organic agriculture (a Danish pioneer), forestry, and several small businesses sit inside the same collective rather than as private firms on leased lots.",
 status: "current",
 layer: "enterprise",
 },
 ],

 lakabe: [
 {
 name: "Government of Navarra",
 kind: "Regional government (title holder)",
 role: "Legal title to the recovered medieval hamlet. Occupied 21 March 1980; later regularized rather than sold to members.",
 status: "current",
 layer: "land",
 notes:
 "There is no private sale of houses.",
 },
 {
 name: "Concejo abierto de Lakabe",
 kind: "Open municipal council",
 role: "Village-level public administration. One resident has served as president-alcalde. Handles the municipal face of the concejo.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Asociación cultural de Lakabe",
 kind: "Spanish cultural association (CIF)",
 role: "The private-law vehicle with a tax ID for courses, visiting groups, and projects that a concejo cannot run as a cultural business.",
 status: "current",
 layer: "education",
 },
 ],

 "kibbutz-lotan": [
 {
 name: "Kibbutz Lotan",
 kind: "Cooperative agricultural settlement (Israeli kibbutz law)",
 role: "The residential and productive community. Members share production and, in Lotan’s case, a remaining collective economy. No private suburban real-estate title.",
 status: "current",
 layer: "membership",
 year: "1983",
 notes:
 "Second kibbutz founded by Israel’s Reform movement. Kept a stronger ecological and egalitarian identity than kibbutzim that fully privatized in the 1990s–2000s.",
 },
 {
 name: "Israel Land Authority / state settlement land",
 kind: "National land tenure under kibbutz law",
 role: "Classic kibbutz land is not freehold lots. Usage rights sit with the cooperative settlement on nationally administered land.",
 status: "current",
 layer: "land",
 },
 {
 name: "Center for Creative Ecology",
 kind: "Educational arm of the kibbutz",
 role: "Opened 1997. Courses in organic farming, alternative architecture, energy, and permaculture.",
 status: "current",
 layer: "education",
 year: "1997",
 },
 {
 name: "Kibbutz Movement",
 kind: "National federation of kibbutzim",
 role: "Lotan sits inside the wider movement. A network, not the title holder of the Arava land.",
 status: "associated",
 layer: "network",
 },
 ],

 lebensgarten: [
 {
 name: "Lebensgarten Steyerberg e.V.",
 kind: "German registered association (eingetragener Verein)",
 role: "The community body for village issues. Residents typically own or rent the restored brick houses individually; the e.V. is not a housing co-op that owns every dwelling.",
 status: "current",
 layer: "membership",
 year: "1986",
 },
 {
 name: "Individual house owners and tenants",
 kind: "Private residential title / tenancy",
 role: "58–62 restored houses on a former munitions-workers’ settlement. Households are financially independent. Not income-sharing.",
 status: "current",
 layer: "land",
 },
 {
 name: "PaLS gGmbH (Permakulturpark am Lebensgarten Steyerberg)",
 kind: "Nonprofit limited company (gGmbH)",
 role: "Runs the permaculture park, CSA vegetable boxes, and agroforestry on former sandy farmland. Incorporated 2013.",
 status: "current",
 layer: "enterprise",
 year: "Park from 2003; gGmbH 2013",
 },
 {
 name: "Heilhaus / seminar house",
 kind: "Community enterprise",
 role: "Main shared economic engine (courses, guests). Separate from household livelihoods.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Permaculture Institute of Europe",
 kind: "Educational institute (founded on site)",
 role: "Margrit and Declan Kennedy founded it here. Associated by origin with Lebensgarten.",
 status: "associated",
 layer: "network",
 },
 ],

 niederkaufungen: [
 {
 name: "Kommune Niederkaufungen e.V.",
 kind: "German registered association",
 role: "Owns all land, buildings, vehicles, and means of production. Every communard is a member. Communal property cannot be privatized, even if membership fell below the seven people needed to found a Verein.",
 status: "current",
 layer: "land",
 year: "December 1986",
 forms: ["Registered association", "Income-sharing"],
 },
 {
 name: "Verein für Ökologie, Gesundheit und Bildung e.V.",
 kind: "Second registered association",
 role: "Runs the seminar house, kindergarten, and horticulture enterprises that need a separate charitable/educational vehicle.",
 status: "current",
 layer: "education",
 },
 {
 name: "Commune collectives (KOMM-BAU, Komm-Menu, Rote Rübe, and others)",
 kind: "Internal enterprises of the e.V.",
 role: "Building firm, organic catering, Bioland market garden, orchard and juice, dairy and cheese, day care, consultancy. Surplus stays collective.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Kommuja network",
 kind: "Network of German political communes",
 role: "Niederkaufungen is a member. A political network.",
 status: "associated",
 layer: "network",
 },
 ],

 "crystal-waters": [
 {
 name: "Crystal Waters Permaculture Village Body Corporate (GTP 1833)",
 kind: "Queensland body corporate / community titles scheme",
 role: "Lot owners together own and manage the 80% common property (farming, forestry, recreation, habitat). Created under the Building Units and Group Titles Act; now sits under the Body Corporate and Community Management Act.",
 status: "current",
 layer: "land",
 year: "Titles sealed June 1988",
 identifier: "Group Title Plan No. 1833",
 notes:
 "83 freehold residential lots and 2 commercial lots occupy about 20% of the 259 hectares. Buying a lot is ordinary freehold plus the by-laws.",
 },
 {
 name: "Crystal Waters Community Co-operative",
 kind: "Queensland land-settlement / community co-operative",
 role: "Entrepreneurial arm for the village centre, camping, and community house. Registered 1981, years before freehold titles were issued.",
 status: "current",
 layer: "enterprise",
 year: "1981",
 },
 {
 name: "Individual freehold lot owners",
 kind: "Freehold residential and commercial lots",
 role: "Households finance their own homes.",
 status: "current",
 layer: "membership",
 year: "1988",
 },
 ],

 "ecovillage-ithaca": [
 {
 name: "EcoVillage at Ithaca, Inc.",
 kind: "501(c)(3) nonprofit",
 role: "Owns the property outside the boundaries of the cohousing neighborhoods, the farms, woods, and open land that make the site an ecovillage rather than three condo clusters.",
 status: "current",
 layer: "land",
 year: "Project 1991; land 1992",
 },
 {
 name: "FROG Housing Cooperative",
 kind: "New York housing cooperative",
 role: "First neighborhood (30 duplex homes, 1996–97). Owns its buildings and the land beneath them. New York’s first cohousing neighborhood.",
 status: "current",
 layer: "membership",
 year: "1996–97",
 },
 {
 name: "SONG Housing Cooperative",
 kind: "New York housing cooperative",
 role: "Second neighborhood (completed 2006). Owns its buildings; unlike FROG and TREE, SONG does not own the land beneath (that stays with the village-level entities).",
 status: "current",
 layer: "membership",
 year: "2006",
 },
 {
 name: "TREE Housing Cooperative",
 kind: "New York housing cooperative",
 role: "Third neighborhood (construction 2012–13). Owns its buildings and the land beneath them.",
 status: "current",
 layer: "membership",
 year: "2012–15",
 },
 {
 name: "EcoVillage at Ithaca Village Association (EVIVA)",
 kind: "Non-exempt nonprofit",
 role: "Owns and manages roads, water and sewer lines, parking lots, the swimming pond, and the land immediately around the FROG and TREE neighborhoods.",
 status: "current",
 layer: "land",
 },
 {
 name: "Center for Transformative Consciousness",
 kind: "501(c)(3) nonprofit",
 role: "Helped develop each neighborhood and runs educational programs. Second charity on the site, alongside EcoVillage at Ithaca, Inc.",
 status: "current",
 layer: "education",
 },
 {
 name: "Finger Lakes Land Trust",
 kind: "Regional land trust",
 role: "Holds a conservation easement on open land. Restricts development; does not own the village’s operating title.",
 status: "associated",
 layer: "covenant",
 },
 {
 name: "Town of Ithaca Special Land Use District",
 kind: "Municipal zoning overlay",
 role: "The local-government frame that made a three-neighborhood ecovillage legal in a rural town.",
 status: "current",
 layer: "covenant",
 },
 ],

 zegg: [
 {
 name: "ZEGG gGmbH",
 kind: "German nonprofit limited company (gemeinnützige GmbH)",
 role: "Holds the 15-hectare former GDR intelligence-training site and hosts the seminar business. Members live on the land as a residential community using sociocracy, not as shareholders of private lots.",
 status: "current",
 layer: "land",
 year: "Community 1991; nonprofit status 2015",
 notes:
 "Zentrum für experimentelle Gesellschaftsgestaltung. Bought for 2.1 million D-Marks in 1991. Seminar centre became the economic core from about 2001.",
 },
 {
 name: "Visionsrat (vision board) and sociocratic circles",
 kind: "Internal governance of the gGmbH community",
 role: "Self-organizing teams, a management circle for finance, and a Visionsrat for longer-term community interest. Important social and money decisions still aim at consensus.",
 status: "current",
 layer: "membership",
 },
 ],

 "los-angeles-eco-village": [
 {
 name: "Cooperative Resources and Services Project (CRSP)",
 kind: "501(c)(3) community-development nonprofit",
 role: "Founding developer (1980). Acquired two apartment buildings in the 1990s and a third in 2011. Still a resource centre in the neighborhood. “Los Angeles Eco-Village” is a place name, not this corporation’s legal name.",
 status: "current",
 layer: "education",
 year: "1980",
 identifier: "EIN 95-3900435",
 },
 {
 name: "Ecological Revolving Loan Fund (ELF)",
 kind: "Community-development loan fund (program of CRSP)",
 role: "Financed building acquisition, rehabilitation, and ecological retrofits.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Urban Soil–Tierra Urbana (USTU)",
 kind: "Limited-equity housing cooperative; 501(c)(3)",
 role: "Resident-organized LEHC. Acquired two buildings from CRSP in 2012. Members share legal and social ownership of those buildings; resale prices are capped so housing stays permanently affordable.",
 status: "current",
 layer: "membership",
 year: "Founded 2010; buildings 2012",
 },
 {
 name: "Beverly-Vermont Community Land Trust",
 kind: "501(c)(3) community land trust",
 role: "Owns the land under the co-op buildings. CRSP donated that land in 2012. Separating dirt from buildings is the classic CLT move against speculation.",
 status: "current",
 layer: "land",
 year: "Land transfer 2012",
 },
 ],

 earthaven: [
 {
 name: "Earthaven Community Association",
 kind: "North Carolina homeowners association",
 role: "Owns the common land (roads, Council Hall, shared infrastructure) and runs village-level membership (including nonresident contributing members). CC&Rs govern sustainability practice.",
 status: "current",
 layer: "land",
 year: "1994",
 },
 {
 name: "Residential pods (housing cooperatives and LLCs)",
 kind: "Neighborhood legal entities",
 role: "Each pod owns the land for one or more neighborhoods. A housing-co-op pod makes members shareholders with a residential site; an LLC pod uses company membership instead. About 12 neighborhoods.",
 status: "current",
 layer: "membership",
 notes:
 "A person may need both ECA membership and pod membership to live on a site. Pods received deeds as they formed.",
 },
 {
 name: "School of Integrated Living (SOIL)",
 kind: "501(c)(3) educational nonprofit",
 role: "Tours, workshops, and whole-life-skills programs. Cultural and educational work sits with the charity, not with the HOA. Previously associated with Culture’s Edge.",
 status: "current",
 layer: "education",
 },
 {
 name: "Earthaven Covenants, Conditions & Restrictions",
 kind: "Recorded private land-use regime",
 role: "Sustainability building and land-use rules that run with the land in Rutherford County records.",
 status: "current",
 layer: "covenant",
 },
 ],

 konohana: [
 {
 name: "Konohana Family (one-household community)",
 kind: "Unincorporated family-style commune",
 role: "About a hundred unrelated people live as one family with one wallet.",
 status: "current",
 layer: "membership",
 year: "21 March 1994",
 },
 {
 name: "Members as sole proprietors",
 kind: "Japanese tax / labour-law workaround",
 role: "Japanese labour and tax law did not fit a single communal employer, so after negotiation each member is registered as a sole proprietor while the community still pools money.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "NPO Green Grass",
 kind: "Japanese nonprofit organization",
 role: "Outward legal face for visits, education, and ecological programs. Does not replace the one-wallet household.",
 status: "current",
 layer: "education",
 },
 ],

 oaec: [
 {
 name: "Sowing Circle LLC",
 kind: "California limited liability company",
 role: "Owns the 80 acres and buildings. The closed residential intentional community. Shares are not linked to market land value.",
 status: "current",
 layer: "land",
 year: "July 1994",
 notes:
 "Nine OAEC board members have also been members of the LLC. The LLC’s purpose is to hold title, not to speculate.",
 },
 {
 name: "Occidental Arts & Ecology Center",
 kind: "501(c)(3) nonprofit",
 role: "Public education, research, and advocacy on the same land. Legally separate from the residential LLC; mutually supporting in practice.",
 status: "current",
 layer: "education",
 year: "1994",
 identifier: "EIN 68-0359676",
 },
 {
 name: "Sonoma Land Trust",
 kind: "Regional land trust",
 role: "Co-author and holder of the Organic Agricultural Easement that keeps gardens and orchards in organic production in perpetuity.",
 status: "associated",
 layer: "covenant",
 year: "1994",
 },
 {
 name: "Warsh-Mott Legacy",
 kind: "Previous landowner",
 role: "Collaborated with Sowing Circle and Sonoma Land Trust on one of the country’s first organic agricultural easements when the land changed hands.",
 status: "historical",
 layer: "covenant",
 year: "1994",
 },
 ],

 tamera: [
 {
 name: "ILOS, Peace Research Center, Lda.",
 kind: "Portuguese limited company (not-for-profit social enterprise)",
 role: "Owns Tamera’s property and infrastructure. Manages maintenance, planning, lodging, and course administration. No individual can buy, sell, or transfer a share of Tamera.",
 status: "current",
 layer: "land",
 year: "Land 1995",
 identifier: "NIPC PT 503 436 445",
 },
 {
 name: "G.R.A.C.E., Associação Grupo para a Reconciliação em Áreas de Crise e Educação",
 kind: "Portuguese association (50% shareholder of ILOS)",
 role: "Equal owner of ILOS. Finances peace-education and reconciliation work through seminars, donations, and grants. Community members belong to one of the two associations.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Associação para um Mundo Humanitário",
 kind: "Portuguese association (50% shareholder of ILOS)",
 role: "Equal owner of ILOS. Responsible for environmental, ecological, and technological research projects. The 50/50 split is the lock that keeps the land off the private market.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Institute for Global Peacework",
 kind: "Program of Tamera",
 role: "Outward peace-research and networking arm.",
 status: "current",
 layer: "education",
 },
 {
 name: "Verlag Meiga",
 kind: "Publishing house",
 role: "Publishes the community’s peace-research and ecology titles. An associated enterprise, not the title holder.",
 status: "associated",
 layer: "enterprise",
 },
 ],

 "dancing-rabbit": [
 {
 name: "Dancing Rabbit Land Trust",
 kind: "501(c)(2) community land trust",
 role: "Owns the 280 acres. Members lease small residential plots and own their buildings, which can be sold to other members. Land cannot be speculated. A 501(c)(2) must turn income over to its parent 501(c)(3). This is the village’s community land trust.",
 status: "current",
 layer: "land",
 year: "1 October 1997",
 notes: "Purchase price $190,000, borrowed from members and family. No land buy-in for new members.",
 },
 {
 name: "Center for Sustainable and Cooperative Culture",
 kind: "501(c)(3) nonprofit (formerly Dancing Rabbit, Inc.)",
 role: "Education, demonstration, tours, and the public face of the village. Everyone who lives at Dancing Rabbit participates in this sustainability project.",
 status: "current",
 layer: "education",
 identifier: "EIN 43-1762592",
 },
 {
 name: "Residential leases and member-owned buildings",
 kind: "Ground leases + personal building title",
 role: "Monthly lease fees support the trust (historically about $25/month for a tiny plot). Buildings can be sold to other members; the land cannot.",
 status: "current",
 layer: "membership",
 },
 ],

 "sieben-linden": [
 {
 name: "Siedlungsgenossenschaft Ökodorf e.G.",
 kind: "German settlement / housing cooperative",
 role: "Owns the land, now more than 100 hectares of woods, fields, gardens, and a small building zone. Members are co-owners of the commons rather than freehold lot holders. Long-term residents are asked to buy a minimum number of shares (historically 11 shares / €11,275, with solidarity paths if someone cannot).",
 status: "current",
 layer: "land",
 year: "Co-op 1993; site 1997",
 },
 {
 name: "Nachbarschaften (neighborhoods)",
 kind: "Residential clusters in shared buildings",
 role: "Straw-bale, cob, and timber neighborhoods occupy the building zone. Not income-sharing: each adult finances their own life.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Freundeskreis Ökodorf e.V.",
 kind: "German registered charitable association",
 role: "Nationwide friends’ association that carries public education, the seminar/guesthouse learning place, and outreach for Sieben Linden.",
 status: "current",
 layer: "education",
 },
 ],

 cloughjordan: [
 {
 name: "Sustainable Projects Ireland CLG",
 kind: "Company limited by guarantee; educational charity",
 role: "Owns the 67-acre site and shared infrastructure (roads, district heating, amenities). Run on co-operative principles. Members develop and occupy individual eco-homes on serviced sites.",
 status: "current",
 layer: "land",
 year: "Incorporated 1999",
 identifier: "CRA RCN 20041182 · Revenue CHY 13328",
 notes:
 "About 55 of a planned 114–130 homes built. A board of directors oversees the company; membership decisions aim at mutual agreement.",
 },
 {
 name: "Member households (eco-homes on serviced sites)",
 kind: "Individual dwellings on company land",
 role: "Members paid deposits to buy into the land and services, then finance their own houses. Livelihoods stay with households.",
 status: "current",
 layer: "membership",
 year: "First residents December 2009",
 },
 {
 name: "Cloughjordan Community Farm",
 kind: "Member-owned CSA / not-for-profit social enterprise",
 role: "Organic/biodynamic community-supported agriculture. Leases land from the ecovillage (about 12 acres) and additional off-site acres. Separate from SPI’s land company.",
 status: "current",
 layer: "enterprise",
 year: "2008",
 },
 ],

 currumbin: [
 {
 name: "Principal Body Corporate",
 kind: "Queensland body corporate (BCCM Act)",
 role: "Village-wide commons, design covenants, and shared infrastructure for 147 freehold lots on 270 acres (80% open space). Elected committee plus a Village Design Panel that assesses building applications.",
 status: "current",
 layer: "land",
 year: "First home 2006",
 },
 {
 name: "Creek Ecohamlets subsidiary body corporate",
 kind: "Subsidiary body corporate",
 role: "Sub-precinct governance for Creek Ecohamlets lots, nested under the Principal Body Corporate.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Valley Terraces subsidiary body corporate",
 kind: "Subsidiary body corporate",
 role: "Sub-precinct governance for Valley Terraces.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Highlands subsidiary body corporate",
 kind: "Subsidiary body corporate",
 role: "Sub-precinct governance for the Highlands stage.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Further subsidiary body corporates",
 kind: "Subsidiary body corporates for remaining stages",
 role: "Currumbin uses a principal-plus-four-subsidiaries model so each sub-region can manage its own commons without splitting the whole village into unrelated HOAs.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Individual freehold lot owners",
 kind: "Ordinary freehold plus running covenants",
 role: "Buying and selling is treated as ordinary freehold. Covenants on energy, water, materials, and landscape run with the lot.",
 status: "current",
 layer: "land",
 },
 {
 name: "Landmatters Currumbin Valley Property Ltd.",
 kind: "Developer company",
 role: "Site-led subdivision rather than a commune. Signed a Memorandum of Understanding with the Kombumerri Gold Coast People before construction. Historical developer, not the ongoing landowner of sold lots.",
 status: "historical",
 layer: "enterprise",
 year: "Late 1990s–build-out",
 },
 ],

 "longo-mai": [
 {
 name: "Cooperativa Longo Maï / Finca Sonador",
 kind: "Costa Rican agricultural cooperative",
 role: "Holds the settlement, farmland, and housing in common for several hundred residents. Founded 1979 with United Nations support as a refugee cooperative.",
 status: "current",
 layer: "land",
 year: "1979",
 notes:
 "A Costa Rican cooperativa in the European Longo Maï family. Members farm and live on cooperative land; there is no private sale of the commons.",
 },
 {
 name: "Longo Maï European cooperatives",
 kind: "European Longo Maï cooperative movement",
 role: "The 1973 French and European Longo Maï settlements that launched the Costa Rican finca and still send visitors and solidarity.",
 status: "associated",
 layer: "network",
 year: "1973",
 },
 {
 name: "UNAPROA",
 kind: "Regional environmental association",
 role: "Regional environmental organization based on the finca. Organizes resistance to pineapple-plantation expansion and water defense. Not the landowner of the whole 2,200 acres.",
 status: "current",
 layer: "covenant",
 },
 {
 name: "United Nations (founding support)",
 kind: "On-site intern and education program",
 role: "Supported the 1979 founding as a project for a region torn by civil wars. Historical funder.",
 status: "historical",
 layer: "network",
 year: "1979",
 },
 ],

 "maya-mountain": [
 {
 name: "Maya Mountain Research Farm (Belize NGO)",
 kind: "Belize NGO",
 role: "Registered 2004. Holds the public-benefit work of the 70-acre demonstration farm: agroforestry, internships, carbon farming, and community education.",
 status: "current",
 layer: "education",
 year: "NGO 2004; farm 1988",
 },
 {
 name: "Finca / farm title (Toledo)",
 kind: "Private farm title",
 role: "The 70-acre hillside above the Columbia River. A working research farm, not subdivided lots and.",
 status: "current",
 layer: "land",
 year: "1988",
 },
 {
 name: "Intern and visiting-researcher program",
 kind: "On-site intern and education program",
 role: "Interns, students, and visiting groups live and work on the farm. They do not take title.",
 status: "current",
 layer: "education",
 },
 ],

 pachamama: [
 {
 name: "PachaMama Eco-Village (private land)",
 kind: "Private farm title",
 role: "Holds the ~500 acres of former cattle land in Guanacaste. Privately owned, reforested since 1999.",
 status: "current",
 layer: "land",
 year: "1999",
 },
 {
 name: "PachaMama resident community",
 kind: "Spiritual membership community",
 role: "About 70 residents living by membership in a founder-led spiritual village, not by buying a lot. Tyohar remains the public spiritual guide.",
 status: "current",
 layer: "membership",
 year: "1999",
 },
 {
 name: "PachaMama centre of transformation",
 kind: "On-site intern and education program",
 role: "Retreats, silent sittings, and workshops. The village says income is reinvested in the land and operations, a nonprofit centre in practice, beside the residential community.",
 status: "current",
 layer: "education",
 },
 ],

 imap: [
 {
 name: "Instituto Mesoamericano de Permacultura (IMAP)",
 kind: "Guatemalan asociación civil / ONG",
 role: "Maya Kaqchikel education and seed-sovereignty institute at Pachitulul, San Lucas Tolimán. Trains farmers; holds the teaching centre and living seed bank.",
 status: "current",
 layer: "education",
 year: "2000",
 },
 {
 name: "IMAP Permaculture Centre, Pachitulul",
 kind: "Private farm title",
 role: "Lakeshore site with ecological cabins, seed bank, and workshops. Site acres unpublished. Serves the institute.",
 status: "current",
 layer: "land",
 },
 {
 name: "Living seed bank and farmer network",
 kind: "On-site intern and education program",
 role: "Native-seed catalogue and training for more than 10,000 smallholder farmers in the Atitlán basin and Mesoamerica.",
 status: "current",
 layer: "network",
 },
 ],

 "rancho-mastatal": [
 {
 name: "Rancho Mastatal (farm and ecolodge)",
 kind: "Private farm title",
 role: "Holds the 300+ acres at Mastatal. Founded 2001 by Tim O’Hara and Robin Nunes. Teaching ranch subdivision.",
 status: "current",
 layer: "land",
 year: "2001",
 },
 {
 name: "Private wildlife refuge (MINAE / SINAC overlay)",
 kind: "Costa Rican private wildlife refuge",
 role: "Conservation overlay on most of the ranch, backing La Cangreja National Park. Protects water, trails, and habitat. About 10 acres stay in active farm and housing.",
 status: "current",
 layer: "covenant",
 },
 {
 name: "Rancho Mastatal Sustainability Education Center",
 kind: "On-site intern and education program",
 role: "PDC, natural building, fermentation, agroforestry, wilderness medicine. Apprentices and course residents live on site without taking title.",
 status: "current",
 layer: "education",
 year: "2001",
 },
 ],

 "bona-fide": [
 {
 name: "Project Bona Fide (U.S. 501(c)(3))",
 kind: "501(c)(3) educational nonprofit",
 role: "U.S. public charity that raises tax-deductible gifts for the Ometepe agroecology farm and internships.",
 status: "current",
 layer: "education",
 year: "2001",
 },
 {
 name: "Project Bona Fide (Nicaraguan NGO)",
 kind: "Nicaraguan NGO (Ley 147)",
 role: "On-island nonprofit face of the 26-acre Finca Bona Fide in Balgüe. Holds the Nicaraguan work under Ley 147.",
 status: "current",
 layer: "land",
 year: "2001",
 },
 {
 name: "Internship program",
 kind: "On-site intern and education program",
 role: "Three-month minimum stays: room, board, Spanish, a farm-system project, and a project seed fund. Interns are not members with title.",
 status: "current",
 layer: "education",
 },
 ],

 ipes: [
 {
 name: "Instituto de Permacultura de El Salvador (IPES)",
 kind: "Salvadoran asociación / ONG",
 role: "Grassroots farmer NGO founded 2002. The Suchitoto hectare is the classroom; the campesino-a-campesino network is the body.",
 status: "current",
 layer: "education",
 year: "2002",
 },
 {
 name: "Suchitoto teaching hectare",
 kind: "Private farm title",
 role: "Stony hillside demonstration site above Suchitoto, about one hectare with thatched teaching space.",
 status: "current",
 layer: "land",
 year: "2002",
 },
 {
 name: "Campesino-a-campesino network",
 kind: "On-site intern and education program",
 role: "Small-scale farmer members across El Salvador. Volunteers and interns support communications and field work; they do not buy lots.",
 status: "current",
 layer: "network",
 },
 ],

 "finca-bellavista": [
 {
 name: "Finca Bellavista parcel owners",
 kind: "Freehold rainforest parcels",
 role: "Individual title to garden, forest, or riverfront parcels of ¼–3 acres inside the ~140-acre residential community. Buying and selling is ordinary (covenanted) real estate.",
 status: "current",
 layer: "land",
 year: "From 2006",
 },
 {
 name: "Finca Bellavista Community Guidelines",
 kind: "Treehouse community guidelines",
 role: "Written building and land-use rules for treehouses, solar, materials, and canopy protection. Costa Rica’s closest cousin to an HOA, covenants.",
 status: "current",
 layer: "covenant",
 year: "2006",
 },
 {
 name: "Andrews / Hogan founding holding",
 kind: "Costa Rican limited company (S.A. / SRL)",
 role: "Erica Andrews and Mateo Hogan assembled the original 62 acres (a timber-sale site) in 2006 and expanded toward ~600 acres. Historical developer-stewards of unsold reserve land.",
 status: "current",
 layer: "enterprise",
 year: "2006",
 },
 ],

 "la-ecovilla": [
 {
 name: "La Ecovilla Original condominio",
 kind: "Costa Rican condominio",
 role: "48 families each own a lot plus an undivided share of the food forest, river edge, and shared buildings on 42 acres. Ley Reguladora de la Propiedad en Condominio, HOA plus freehold.",
 status: "current",
 layer: "land",
 year: "2012",
 },
 {
 name: "Lot owners (reglamento de condominio)",
 kind: "Freehold rainforest parcels",
 role: "Private house title on a condominio lot. Membership in the assembly comes with the deed. Resale is ordinary condominio conveyancing plus the reglamento.",
 status: "current",
 layer: "membership",
 year: "2012",
 },
 {
 name: "Ecovilla San Mateo (expansion)",
 kind: "Costa Rican condominio",
 role: "2023 expansion on ~220 hectares of regenerated land (former petting zoo) near the Machuca River. Same founder, larger lot-sales and neighborhood plan. Associated with, the original 42 acres.",
 status: "current",
 layer: "land",
 year: "2023",
 },
 {
 name: "Marcelo Valansi / development entity",
 kind: "Costa Rican limited company (S.A. / SRL)",
 role: "Founder and ongoing developer, especially of San Mateo. Historical purchaser of the original cattle farm in 2012.",
 status: "current",
 layer: "enterprise",
 year: "2012",
 },
 ],

 "brave-earth": [
 {
 name: "Asociación Tierra Valiente Trust",
 kind: "Costa Rican registered association (asociación)",
 role: "Costa Rican nonprofit entity for the 80-acre commons, farm, and healing-arts centre at San Isidro de Peñas Blancas.",
 status: "current",
 layer: "land",
 year: "2016",
 },
 {
 name: "Shareholder commons (up to 40 shares)",
 kind: "Shareholder commons",
 role: "Individuals, couples, or families hold shares with a private living structure on communal land. Shares are membership in a commons.",
 status: "current",
 layer: "membership",
 year: "2016",
 notes:
 "Porvenir Design (2019): 40-share plan; about half sold at that date. Residential build-out continued into the 2020s.",
 },
 {
 name: "Amigos de Costa Rica (fiscal sponsor)",
 kind: "U.S. 501(c)(3) fiscal sponsor",
 role: "U.S. public charity that fiscally sponsors Asociación Tierra Valiente Trust so U.S. donors can give tax-deductible gifts. Not the landowner.",
 status: "associated",
 layer: "education",
 },
 {
 name: "Ma Earth donor round",
 kind: "On-site intern and education program",
 role: "Public ledger: $32,602.43 from 147 donors across three projects. Crowdfunding.",
 status: "associated",
 layer: "network",
 },
 ],

 lama: [
 {
 name: "Lama Foundation",
 kind: "501(c)(3) educational nonprofit",
 role: "Holds the mountain land, buildings, and retreat programs. Educational, religious, and scientific 501(c)(3). No private lots and no permanent members.",
 status: "current",
 layer: "land",
 year: "Founded 1967; tax entity 1968–69",
 identifier: "EIN 85-0202741",
 notes:
 "A New Mexico nonprofit corporation. A board of mostly past residents holds legal authority and treats itself as advisory; a resident circle runs daily life.",
 },
 {
 name: "Resident circle and summer stewards",
 kind: "Spiritual membership community",
 role: "People who live on the mountain for a season or longer.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Lama Foundation Press / Be Here Now",
 kind: "Publishing house",
 role: "Historical spiritual publishing from the mountain. Ram Dass finished and first produced Be Here Now here in 1971. Not the current landowner.",
 status: "historical",
 layer: "enterprise",
 year: "1971",
 },
 ],

 arcosanti: [
 {
 name: "The Cosanti Foundation",
 kind: "501(c)(3) nonprofit corporation",
 role: "Arizona 501(c)(3) founded in 1965. Owns about 860 acres at Arcosanti, the Cosanti studio in Paradise Valley, the bell foundries, tours, and workshops. Parent of the arcology project.",
 status: "current",
 layer: "land",
 year: "Foundation 1965; Arcosanti 1970",
 },
 {
 name: "Arizona State Land Department leases",
 kind: "Arizona State Land Department lease",
 role: "Two state parcels totaling about 3,200 acres leased as open-space preserve. Combined with the Foundation’s 860 acres this is the ~4,060-acre sanctuary. Occupancy by lease, not freehold.",
 status: "current",
 layer: "land",
 notes:
 "The experimental town sits on fewer than 25 acres of the owned land. Agua Fria National Monument bounds the east.",
 },
 {
 name: "Soleri windbell foundry (bronze and ceramic)",
 kind: "Community trading company",
 role: "The cash engine: bells sold at Arcosanti, Cosanti, and online. Every purchase supports the Foundation. An internal enterprise.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Cosanti (Paradise Valley studio)",
 kind: "Federal historic designation",
 role: "Soleri’s original earth-cast studio and home, an Arizona Historic Site under the same Foundation. Associated, not the Arcosanti mesa title.",
 status: "associated",
 layer: "covenant",
 year: "Studios from 1955",
 },
 ],

 "alpha-farm": [
 {
 name: "Alpha Farm cooperative",
 kind: "Oregon income-sharing cooperative",
 role: "Members own the 280-acre Deadwood farm equally and pool income. Quaker consensus.",
 status: "current",
 layer: "land",
 year: "1972",
 notes:
 "Caroline Estes contributed most of the original purchase money; that did not become private title. Jim Estes died 2013; Caroline died at the farm 13 July 2022.",
 },
 {
 name: "Common purse and member labor",
 kind: "Membership community holding land in common",
 role: "On-farm work and any outside earnings go to the cooperative; members receive a stipend. No individual house title.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Alpha-Bit Café (Mapleton)",
 kind: "Community trading company",
 role: "Historical public café that helped pay the farm. A community business.",
 status: "historical",
 layer: "enterprise",
 },
 ],

 sirius: [
 {
 name: "Sirius Community, Inc.",
 kind: "501(c)(3) educational nonprofit",
 role: "Holds the 90 acres in Shutesbury and runs the education centre, internships, and visitor programs. Public-benefit shell of a spiritual residential community.",
 status: "current",
 layer: "land",
 year: "September 1978",
 },
 {
 name: "Resident and exploring members",
 kind: "Spiritual membership community",
 role: "Findhorn-lineage attunement community. Exploring-member path between intern and resident. Associate members live nearby. Not lot owners.",
 status: "current",
 layer: "membership",
 },
 ],

 huehuecoyotl: [
 {
 name: "Comunidad Huehuecoyotl",
 kind: "Mexican asociación civil",
 role: "Mexico’s first ecovillage, organized as an asociación on five acres in the Sierra del Tepozteco. Cultural and educational association.",
 status: "current",
 layer: "membership",
 year: "6 March 1982",
 },
 {
 name: "Huehuecoyotl land (Tepoztlán)",
 kind: "Private farm title",
 role: "About two hectares held for the village. Small enough that title is a household-scale deed.",
 status: "current",
 layer: "land",
 year: "1982",
 },
 {
 name: "Illuminated Elephants / GEN",
 kind: "Lateral movement association",
 role: "The travelling theatre commune that founded the village, and later GEN networking. Associated history, not the landowner.",
 status: "historical",
 layer: "network",
 year: "1982",
 },
 ],

 "cite-ecologique": [
 {
 name: "La Cité Écologique de Ham-Nord",
 kind: "Quebec nonprofit / OSBL",
 role: "The village, school, and land at 689 rang 8. A Quebec nonprofit community rather than a housing co-op of lots. Successor to the 1984 Cité écologique de l’ère du Verseau after the 1990 bankruptcy.",
 status: "current",
 layer: "land",
 year: "Village 1984; reorganized after 1990",
 },
 {
 name: "Kheops International",
 kind: "Quebec community enterprise",
 role: "Art and metaphysical-gift importer/wholesaler rooted in the Cité. Historically about CAD $2 million sales and 25 staff around 2011. A trading arm, not the school.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Ferme Bio-Maraîchère / Jardins de la Cité and RespecTerre",
 kind: "Quebec community enterprise",
 role: "Organic farm, maple, and other village enterprises that employ residents and stock the boutique.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Cité écologique de l’ère du Verseau",
 kind: "Quebec nonprofit / OSBL",
 role: "The first legal shell, founded 1984. Bankruptcy in 1990 ended this name; the community continued.",
 status: "historical",
 layer: "land",
 year: "1984–1990",
 },
 ],

 acorn: [
 {
 name: "Acorn Community Farm",
 kind: "Secular egalitarian corporation holding assets in common",
 role: "Holds the ~72 acres, houses, and seed business in common. Income-sharing, consensus, FEC member. Twin Oaks’s 501(d) tax status is not documented here and is not assumed.",
 status: "current",
 layer: "land",
 year: "1993",
 notes:
 "Do not confuse with the California 501(c)(3) Acorn Community Enterprises (EIN 68-0434948), a different organization.",
 },
 {
 name: "Southern Exposure Seed Exchange",
 kind: "Worker-owned community enterprise",
 role: "Open-pollinated and heirloom seed cooperative taken on in 1999 from Jeff McCormack. The income engine of the farm. Assets sit with the community, not with private shareholders.",
 status: "current",
 layer: "enterprise",
 year: "1999",
 },
 {
 name: "Federation of Egalitarian Communities",
 kind: "Network of income-sharing communities",
 role: "Acorn is a Twin Oaks spin-off and FEC member. Mutual aid.",
 status: "associated",
 layer: "network",
 year: "1993",
 },
 ],

 "las-canadas": [
 {
 name: "Cooperativa agroecológica Las Cañadas",
 kind: "Mexican cooperativa",
 role: "Horizontal cooperative of about two dozen members who share votes and income on the Huatusco ranch.",
 status: "current",
 layer: "membership",
 year: "1990s (ranch conversion 1995)",
 },
 {
 name: "Rancho Las Cañadas",
 kind: "Private farm title",
 role: "306 hectares inherited by agronomist Ricardo Romero as extensive cattle land. Title began as private ranch land; the cooperativa is the social structure on it.",
 status: "current",
 layer: "land",
 year: "1995",
 },
 {
 name: "Centro de agroecología y permacultura (courses and seed bank)",
 kind: "On-site intern and education program",
 role: "Courses, a living seed bank, cheese, and bioconstruction teaching.",
 status: "current",
 layer: "education",
 },
 ],

 "our-ecovillage": [
 {
 name: "O.U.R. Eco Village Cooperative",
 kind: "BC Community Services Cooperative",
 role: "British Columbia Community Services (Non-Profit) Cooperative holding the 25-acre Shawnigan Lake demonstration site. Multi-stakeholder; sociocracy. Members hold co-op membership, not strata lots.",
 status: "current",
 layer: "land",
 year: "1999",
 notes:
 "Not Treehouse Village Ecohousing (Bridgewater, Nova Scotia, 2023), a different project.",
 },
 {
 name: "Sociocratic circles",
 kind: "Unincorporated community association",
 role: "Internal governance of the co-op. Course students and interns are not automatically members.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Permaculture and natural-building school",
 kind: "On-site intern and education program",
 role: "PDC, cob, internships, and CSA. The earned-income face of the 25 acres.",
 status: "current",
 layer: "education",
 },
 ],

 "whole-village": [
 {
 name: "Whole Village Property Co-operative Inc.",
 kind: "Ontario co-operative corporation",
 role: "Holds the 191-acre Caledon farm. Successor to Whole Village King Ltd. Members occupy Greenhaven and steward the land; they do not hold eleven freehold lots.",
 status: "current",
 layer: "land",
 year: "Land 2002; Greenhaven 2004",
 },
 {
 name: "Greenhaven ecoresidence",
 kind: "Ontario co-operative corporation",
 role: "15,000 sq ft house for eleven families (2004). Shared common space, private quarters, one building. A legal-precedent ‘single family’ dwelling used as cohousing.",
 status: "current",
 layer: "membership",
 year: "2004",
 },
 {
 name: "Escarpment Biosphere Conservancy easement",
 kind: "Land-conservation nonprofit",
 role: "999-year conservation easement attached to the deed: farmland, forest, and a provincially significant wetland. Housing cluster excepted. A conservation covenant and not the operating owner.",
 status: "current",
 layer: "covenant",
 },
 {
 name: "Whole Village CSA",
 kind: "Member-owned CSA / not-for-profit social enterprise",
 role: "Community-supported agriculture on the organic farm. Young farmers grow; GTA households buy shares.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Whole Village King Ltd",
 kind: "Ontario co-operative corporation",
 role: "The company that first held the 2002 purchase, later converted into the property co-operative.",
 status: "historical",
 layer: "land",
 year: "2002",
 },
 ],

 botton: [
 {
 name: "Camphill Village Trust Ltd",
 kind: "UK company limited by guarantee / charity",
 role: "Company limited by guarantee and registered charity holding most of the 600-acre dale and still running part of Botton as a professional social-care service.",
 status: "current",
 layer: "land",
 year: "1954",
 identifier: "Company 00539694; charity 232402",
 notes:
 "Incorporated October 1954. The Macmillan family offered Botton in 1955. The Trust now runs several communities in England and Scotland; Botton is the first village, not the whole charity.",
 },
 {
 name: "Esk Valley Camphill Community",
 kind: "UK Shared Lives scheme",
 role: "About 19 households at Botton and nearby Ainthorpe and Castleton living on the original Camphill pattern: shared lives, no employment contracts, pooled household income. Recognised Shared Lives scheme in partnership with The Avalon Group for North Yorkshire. Rents properties from the Trust; does not hold the dale.",
 status: "current",
 layer: "membership",
 year: "2010s",
 notes:
 "Formed after the Trust professionalised care. A legal fight left EVCC with the households, not the freehold.",
 },
 {
 name: "The Avalon Group (Shared Lives provider)",
 kind: "UK Shared Lives scheme",
 role: "Approved Shared Lives provider for North Yorkshire County Council. Partnership face that lets EVCC households sit inside the statutory care system. Not the landowner.",
 status: "associated",
 layer: "membership",
 },
 {
 name: "Macmillan family gift",
 kind: "Previous landowner",
 role: "Offered Botton at the head of Danby Dale in 1955. Alistair Macmillan, who had a learning disability, later lived in the village. Historical title.",
 status: "historical",
 layer: "land",
 year: "1955",
 },
 {
 name: "North York Moors National Park",
 kind: "Municipal zoning overlay",
 role: "Planning overlay on the dale. Not the owner of the farms or houses.",
 status: "associated",
 layer: "covenant",
 },
 {
 name: "Camphill movement",
 kind: "Lateral movement association",
 role: "Karl König’s 1939 Scottish beginning. Botton was the first village for adults. Network.",
 status: "associated",
 layer: "network",
 year: "1939",
 },
 ],

 limans: [
 {
 name: "Coopérative agricole Longo Maï Limans",
 kind: "French agricultural cooperative",
 role: "The mother cooperative of the Longo Maï network. Daily life on about 270–290 ha at Limans: no wages, no private lots, self-administration. Does not hold title in members’ names.",
 status: "current",
 layer: "membership",
 year: "1973",
 notes:
 "Bought in July 1973 for 450,000 francs with help from Pierre Pellegrin. The Provençal name means “may it last long.” Finca Sonador in Costa Rica is a later sister, listed separately in this atlas.",
 },
 {
 name: "European Land Fund (Swiss foundation)",
 kind: "Swiss land foundation",
 role: "Holds the land and means of production so the farm cannot be subdivided or sold privately. A lock against private sale.",
 status: "current",
 layer: "land",
 year: "1970s",
 },
 {
 name: "Pro Longo Maï",
 kind: "French donor association",
 role: "Association founded in 1974 to pool donations. About 10,000 donors; donations have historically been about half the network budget. The donor face, not the village council.",
 status: "current",
 layer: "education",
 year: "1974",
 },
 {
 name: "Longo Maï European cooperatives",
 kind: "European Longo Maï cooperative movement",
 role: "Sister farms in France, Germany, Switzerland, Austria, Ukraine, and Costa Rica. People and goods move among them.",
 status: "associated",
 layer: "network",
 year: "1973",
 },
 ],

 "los-portales": [
 {
 name: "Asociación El Espacio Cooperativo, sede Los Portales",
 kind: "Spanish cooperative association",
 role: "Spanish asociación on a 200-hectare Sierra Morena finca. Agriculture, education, and dream research.",
 status: "current",
 layer: "land",
 year: "1984",
 },
 {
 name: "Resident circle",
 kind: "Unincorporated community association",
 role: "About 30 people deciding by consensus. Guests and ESC volunteers are not members.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Red Ibérica de Ecoaldeas / GEN",
 kind: "Lateral movement association",
 role: "RIE and GEN membership. Network.",
 status: "associated",
 layer: "network",
 },
 ],

 "torri-superiore": [
 {
 name: "Associazione Culturale Torri Superiore",
 kind: "Italian cultural association",
 role: "Founded 1989 to restore and repopulate the abandoned 14th-century hamlet. Owns the public half of the stone village (guesthouse / cultural centre).",
 status: "current",
 layer: "land",
 year: "1989",
 },
 {
 name: "Ture Nirvane Società Cooperativa Sociale di Comunità",
 kind: "Italian community social cooperative",
 role: "Founded 1999 by association members to run eco-tourism, courses, and the guesthouse as a non-profit cooperative. Member of Legacoop Liguria and Banca Etica. Does not own the private apartments.",
 status: "current",
 layer: "enterprise",
 year: "1999",
 },
 {
 name: "Private restored apartments",
 kind: "Private residential title / tenancy",
 role: "About twenty apartments in the other half of the stack, privately owned and restored by members, freehold inside a medieval hamlet.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Resident community (consensus)",
 kind: "Unincorporated community association",
 role: "Twice-weekly meetings of about twenty residents. Apartment owners are members of the village.",
 status: "current",
 layer: "membership",
 year: "c. 2000",
 },
 ],

 "krishna-valley": [
 {
 name: "Magyarországi Krisna-tudatú Hívők Közössége / ISKCON Hungary",
 kind: "Hungarian registered church",
 role: "Registered church holding the ~266–300 ha organic farm as New Vraja-dhama (Krisna-völgy). Title sits with the religious organisation, not with household lots.",
 status: "current",
 layer: "land",
 year: "1993",
 notes:
 "About 120 ha bought at auction in 1993 with Hungarian donations; groundbreaking February 1994. Sivarama Swami is the founding spiritual figure.",
 },
 {
 name: "New Vraja-dhama residential community",
 kind: "Religious society / covenant",
 role: "Monks and families living a Vaishnava religious life on church land. Membership is vocational.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Radha-Syamsundara temple and guesthouse",
 kind: "On-site intern and education program",
 role: "Public face: visitor tickets, festivals, organic-garden tours, cow protection, and a guesthouse.",
 status: "current",
 layer: "education",
 },
 ],

 "brithdir-mawr": [
 {
 name: "Brithdir Mawr Housing Co-op",
 kind: "Welsh housing cooperative",
 role: "Housing cooperative that leased about 80 acres and the farmyard from Julian Orbach after the split with Tir Ysbrydol. As of 2025 the community was still occupying after a 2024 sale.",
 status: "current",
 layer: "membership",
 year: "1993",
 notes:
 "The farm was sold in 2024 to a buyer planning a retreat centre. Some members left by a 31 December deadline; others refused. The co-op is the residential form, not freehold lots.",
 },
 {
 name: "Julian Orbach (freehold, then sale)",
 kind: "Previous landowner",
 role: "Architectural historian who, with Emma Orbach, set up on a rundown farm in 1993. Retained the farmyard half after the split; sold in 2024. The community had first refusal and spent years trying to raise about £1 million.",
 status: "historical",
 layer: "land",
 year: "1993–2024",
 },
 {
 name: "That Roundhouse Trust",
 kind: "Welsh building trust",
 role: "The 1997 turf-roofed roundhouse (Tony Wrench and Jane Faith) later sat in its own trust, separate from the farmyard lease. The planning fight helped put Low Impact Development into Pembrokeshire policy.",
 status: "associated",
 layer: "covenant",
 year: "1997",
 },
 {
 name: "Pembrokeshire Coast National Park",
 kind: "Municipal zoning overlay",
 role: "Planning overlay that made the unauthorised eco-buildings famous. Not the owner.",
 status: "associated",
 layer: "covenant",
 },
 ],

 keuruu: [
 {
 name: "Keuruun ekokylä ry",
 kind: "Finnish registered association",
 role: "Finnish registered association (rekisteröity yhdistys) that owns the 53-hectare farm: about 25 ha organic arable and 17 ha forest. Politically and religiously unaffiliated. You join the association.",
 status: "current",
 layer: "land",
 year: "1997",
 },
 {
 name: "Village membership",
 kind: "Unincorporated community association",
 role: "One member, one vote plus talkoot (the Finnish work bee). About 30–35 inhabitants. No private title to the fields.",
 status: "current",
 layer: "membership",
 },
 {
 name: "GEN Finland / SKEY",
 kind: "Lateral movement association",
 role: "Finnish ecovillage network and GEN membership. Hosted a GEN-Europe assembly in 2009. Network, not the landowner.",
 status: "associated",
 layer: "network",
 year: "2009",
 },
 ],

 hurdal: [
 {
 name: "Kilden eco-community cooperative",
 kind: "Norwegian housing cooperative",
 role: "Phase one: rented Gjøding farm from the municipality and built straw-bale houses from 2002. Members held equal shares. Historical form of the village, not the current title of the 70-house cluster.",
 status: "historical",
 layer: "membership",
 year: "2002",
 },
 {
 name: "Filago AS",
 kind: "Norwegian developer company",
 role: "Developer that scaled Huldra Økogrend into a larger eco-housing project. Not the village council. The scale-up brought debt and a shift from spiritual co-op to market eco-housing.",
 status: "associated",
 layer: "enterprise",
 year: "2010s",
 },
 {
 name: "Huldra Økogrend Fellesareal (realsameie)",
 kind: "Norwegian joint ownership of commons",
 role: "Joint ownership of roads, commons, and internals for the timber-house cluster. Closer to a homeowners association than to a housing cooperative.",
 status: "current",
 layer: "covenant",
 },
 {
 name: "Private timber houses",
 kind: "Norwegian freehold dwelling",
 role: "Households own dwellings. Houses can change hands. About 64–70 houses and ~150 residents.",
 status: "current",
 layer: "land",
 year: "2010s",
 },
 {
 name: "Hurdal municipality (Gjøding farm)",
 kind: "Municipal zoning overlay",
 role: "Invited an ecovillage onto the former rectory farm around 2001–02 and rented it to Kilden. Partner and former landlord, not the current freehold of the houses.",
 status: "associated",
 layer: "land",
 year: "2001",
 },
 ],

 suderbyn: [
 {
 name: "Suderbyn People-Care (economic association)",
 kind: "Swedish economic association",
 role: "Cooperative for membership and housing on the 5 ha farm at Västerhejde. You join the cooperative.",
 status: "current",
 layer: "membership",
 year: "2008",
 },
 {
 name: "RELEARN Suderbyn",
 kind: "Swedish nonprofit association",
 role: "Education NGO (from 2007): ESC / Green Skills volunteers, courses, advocacy, and EU research projects. The public face. Volunteers are not automatically members of the cooperative.",
 status: "current",
 layer: "education",
 year: "2007",
 },
 {
 name: "Suderbyn Earth-Care",
 kind: "Swedish foundation",
 role: "Foundation for land and ecology on the old farm.",
 status: "current",
 layer: "land",
 },
 {
 name: "GEN Europe node",
 kind: "Lateral movement association",
 role: "Network and teaching lab.",
 status: "associated",
 layer: "network",
 },
 ],

 aardehuis: [
 {
 name: "Vereniging Aardehuis Oost-Nederland",
 kind: "Dutch association",
 role: "Dutch association of the 23 households. Common house, gardens, sociocratic board. Founded 2006. Holds the common life.",
 status: "current",
 layer: "membership",
 year: "2006",
 },
 {
 name: "23 earthships (private finance)",
 kind: "Dutch freehold dwelling",
 role: "Households privately financed 23 earthships on 1.2 ha at Olst. Occupancy is closer to freehold plus an association than to a housing-cooperative share. Houses can change hands.",
 status: "current",
 layer: "land",
 year: "2012–15",
 notes:
 "Total construction about €5 million. Built 2012–15 with help from some 1,500–2,000 volunteers from dozens of countries.",
 },
 {
 name: "Social-housing partner (three units)",
 kind: "Dutch social-housing partner",
 role: "A social-housing provider financed three of the twenty-three homes so the cluster was not only owner-occupiers. Partner, not the village landlord.",
 status: "associated",
 layer: "membership",
 year: "2012–15",
 },
 {
 name: "Municipality of Olst-Wijhe",
 kind: "Municipal zoning overlay",
 role: "Found land after a long search and later let the group “adopt” an extra hectare for community use. Partner, not the landlord of the houses.",
 status: "associated",
 layer: "covenant",
 },
 ],

 "comunidad-del-sur": [
 {
 name: "Comunidad del Sur",
 kind: "Uruguayan anarchist cooperative",
 role: "The 1955 Montevideo anarchist commune: common ownership, shared production and consumption, rotation of work. Never became a housing-lot company, a FUCVAM apartment co-op, or a community land trust. A small collective.",
 status: "current",
 layer: "membership",
 year: "20 August 1955",
 notes:
 "Malvín Norte household from 1964. Dictatorship exile in Peru and Sweden 1973–85. Returned as an eco-community. Civil-society maps still list La Paz 1988, Tres Cruces.",
 },
 {
 name: "Editorial Nordan and Tryckop",
 kind: "Uruguayan publishing cooperative",
 role: "Anarchist press and graphic workshops founded in Swedish exile and continued after the return. The trading face of the family.",
 status: "current",
 layer: "enterprise",
 year: "1970s (Sweden) / return",
 },
 {
 name: "Cooperativa de Educación y Comunicación Alternativa (CODEUCA)",
 kind: "Educational institute (founded on site)",
 role: "Education and alternative-communication cooperative in the same family. Not the land title.",
 status: "current",
 layer: "education",
 },
 {
 name: "Cooperativa de Producción Agraria ECOSUR",
 kind: "Uruguayan agrarian cooperative",
 role: "Agrarian arm of the family. Cooperative production.",
 status: "current",
 layer: "land",
 },
 {
 name: "Federación Anarquista Uruguaya",
 kind: "Lateral movement association",
 role: "Some members helped found FAU in 1956. Network and politics, not the title holder.",
 status: "associated",
 layer: "network",
 year: "1956",
 },
 ],

 penalolen: [
 {
 name: "Copropiedad, Comunidad Ecológica de Peñalolén",
 kind: "Chilean copropiedad",
 role: "About twenty parcels on the old Lo Hermida hillside, with sitios inside them that the state does not always recognise as lots. Houses sit closer to freehold-plus-association than to a housing-cooperative share.",
 status: "current",
 layer: "land",
 year: "1980",
 },
 {
 name: "Junta de Vecinos de la Comunidad Ecológica",
 kind: "Chilean junta de vecinos",
 role: "Neighborhood association under Chilean junta law. Civic face of the eco-neighborhood.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Municipality of Peñalolén",
 kind: "Municipal zoning overlay",
 role: "Planning overlay for the precordillera neighborhood. Partner and regulator, not the landlord. A 2003 conflict with a neighboring toma is public record.",
 status: "associated",
 layer: "covenant",
 year: "2003 (toma conflict)",
 },
 ],

 "eco-truly": [
 {
 name: "Eco Truly Park (Vaishnava community)",
 kind: "Peruvian Vaishnava community",
 role: "Hare Krishna / Vaishnava ecological and artistic community on the Chacra y Mar beach strip. Title and temple life sit with the religious community, not with household lots.",
 status: "current",
 layer: "land",
 year: "1 January 1994",
 },
 {
 name: "ISKCON / Vaishnava temple life",
 kind: "Independent religious congregation",
 role: "Bhakti religious life inside the cones. Volunteers and day visitors are not members of the covenant.",
 status: "current",
 layer: "membership",
 },
 ],

 "ecovilla-gaia": [
 {
 name: "Asociación Gaia",
 kind: "Argentine civil association",
 role: "Argentine asociación civil founded in 1991 (from Amigos de la Tierra, 1984). Holds the 20.5-hectare former Lactona dairy at Navarro. Members of the association, not lot owners.",
 status: "current",
 layer: "land",
 year: "1991 (association); land May 1996",
 },
 {
 name: "Universidad Internacional de Permacultura",
 kind: "On-site education program",
 role: "Teaching face built on twenty-three years as a demonstration centre. Course students are not automatically members of the association.",
 status: "current",
 layer: "education",
 },
 {
 name: "CASA Latina / GEN",
 kind: "Lateral movement association",
 role: "Gaia helped seed the Latin American ecovillage network. Network, not the title holder.",
 status: "associated",
 layer: "network",
 },
 ],

 ipec: [
 {
 name: "Instituto de Permacultura e Ecovilas do Cerrado (IPEC)",
 kind: "Brazilian nonprofit institute",
 role: "Brazilian nonprofit institute holding a 25-hectare teaching site on former degraded cattle pasture at Pirenópolis.",
 status: "current",
 layer: "land",
 year: "1998",
 notes:
 "Founded by Lucy Legan and André Soares. Soares bought cow-trodden Cerrado instead of intact forest, to show a positive human footprint.",
 },
 {
 name: "Ecoversidade",
 kind: "On-site education program",
 role: "Educational arm: PDCs, bioconstruction, volunteers. Students come and go.",
 status: "current",
 layer: "education",
 },
 {
 name: "GEN / CASA Latina",
 kind: "Lateral movement association",
 role: "Network and teaching reputation. Not the landowner.",
 status: "associated",
 layer: "network",
 },
 ],

 piracanga: [
 {
 name: "Instituto Inkiri",
 kind: "Brazilian nonprofit institute",
 role: "Brazilian nonprofit (statute 2011) and the intentional-community face founded by Angelina Ataíde.",
 status: "current",
 layer: "membership",
 year: "c. 2000 land; statute 2011",
 forms: ["Nonprofit foundation", "Registered association"],
 },
 {
 name: "Unah",
 kind: "Brazilian community enterprise",
 role: "Retreat enterprise on the same peninsula, employing local people. The main visitor organisation. Not the Inkiri membership door.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Private dwellings on the Maraú strip",
 kind: "Brazilian private dwellings",
 role: "Houses among the Inkiri and Unah ground. Living here can mean Inkiri membership, a job, or a private dwelling, three doors, not one.",
 status: "current",
 layer: "land",
 },
 {
 name: "GEN / CASA Latina",
 kind: "Lateral movement association",
 role: "Treats Piracanga as a reference site. Network.",
 status: "associated",
 layer: "network",
 },
 ],

 aldeafeliz: [
 {
 name: "Asociación Aldeafeliz",
 kind: "Colombian nonprofit association",
 role: "Colombian asociación sin ánimo de lucro created in 2009. Owns about 90% of the ecoaldea so the land outlasts the founders. Gloria Acosta is listed as legal representative.",
 status: "current",
 layer: "land",
 year: "2009",
 },
 {
 name: "Resident families (sociocracy)",
 kind: "On-site education program",
 role: "About ten families. Sociocracy since 2013, they say the first self-governed Colombian community to adopt it. A convivencia manual by consent. Volunteers and visitors are not members. GEN lists the community as not open to new members.",
 status: "current",
 layer: "membership",
 year: "2013 (sociocracy)",
 },
 {
 name: "GEN / CASA Latina",
 kind: "Lateral movement association",
 role: "Network listing.",
 status: "associated",
 layer: "network",
 },
 ],

 nashira: [
 {
 name: "Asociación / Fundación Nashira",
 kind: "Colombian women's housing foundation",
 role: "Organizing nonprofit led from the start by lawyer Ángela Cuevas Dolmetsch. Eleven productive núcleos (a coordinator and the women of that cluster) run the internal economy. Board-driven housing project.",
 status: "current",
 layer: "education",
 year: "2003",
 },
 {
 name: "88 houses in the women’s names",
 kind: "Colombian freehold dwellings",
 role: "Houses are titled to the women heads of household, freehold of a dwelling earned by labour hours or Colombian cooperativa of shares. Title to a house is the point of the project.",
 status: "current",
 layer: "land",
 year: "2007 (first 39); 2010s (remaining 41)",
 notes:
 "About USD 10,000 a house in exchange for 1,200 hours of labour (World Habitat).",
 },
 {
 name: "Municipality of Palmira and Valle del Cauca department",
 kind: "Municipal zoning overlay",
 role: "Public partners on the land purchase (130 million Colombian pesos, about USD 35,000) and later house finance. Partners, not the landlords of the titled houses.",
 status: "associated",
 layer: "covenant",
 year: "2003–2010s",
 },
 ],

 "el-manzano": [
 {
 name: "El Manzano family farm",
 kind: "Chilean family farm title",
 role: "120 hectares at Cabrero bought in 1930 by an English great-grandfather of co-founder Javiera Carrión. Family freehold. You cannot buy a share of the 120 hectares.",
 status: "current",
 layer: "land",
 year: "1930 (farm); 2007 (this generation)",
 },
 {
 name: "Ecoescuela El Manzano Limitada",
 kind: "Chilean limited company",
 role: "Chilean limited company, the booking and school face. PDCs, apprenticeships, gardens. Apprentices are not members.",
 status: "current",
 layer: "enterprise",
 year: "2007",
 },
 {
 name: "ERES (with Gaia University)",
 kind: "Chilean nonprofit educational corporation",
 role: "Nonprofit educational corporation co-founded in 2016 with Gaia University for regenerative learning in Latin America. Board-driven school.",
 status: "current",
 layer: "education",
 year: "2016",
 },
 ],

 "finca-sagrada": [
 {
 name: "Asociación Finca Sagrada",
 kind: "Ecuadorian civil association",
 role: "Ecuadorian asociación with personería jurídica, the legal and organising anchor for regenerative work in the Vilcabamba valley.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Finca Sagrada biodynamic farm",
 kind: "Ecuadorian private farm title",
 role: "Private biodynamic holding of Walter and Susan Davis Moora: about 20 irrigated acres plus about 800 acres of mountain. Freehold plus association. GEN lists about seven residents.",
 status: "current",
 layer: "land",
 year: "2008",
 },
 {
 name: "Ainachay",
 kind: "On-site education program",
 role: "A related four-hectare centre beside the finca. Associated project.",
 status: "associated",
 layer: "education",
 },
 ],

 sekem: [
 {
 name: "SEKEM Holding",
 kind: "Egyptian holding company",
 role: "Holding formed in 2001 to administer ISIS Organic, ATOS Pharma, NatureTex, and the produce arms. Companies, not household lots.",
 status: "current",
 layer: "enterprise",
 year: "2001",
 },
 {
 name: "SEKEM Developmental Foundation",
 kind: "Egyptian developmental foundation",
 role: "Board-driven cultural and educational nonprofit: school, clinic, and later Heliopolis University. Paid by the companies, not by house sales.",
 status: "current",
 layer: "education",
 year: "1980s (foundation work); university later",
 },
 {
 name: "Cooperative of SEKEM Employees",
 kind: "Egyptian biodynamic association",
 role: "Employee cooperative beside the holding. Workplace membership.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Heliopolis University for Sustainable Development",
 kind: "On-site education program",
 role: "The later teaching face of the Sharqia campus. A university.",
 status: "current",
 layer: "education",
 },
 {
 name: "Oikocredit",
 kind: "Development-finance shareholder",
 role: "Became a shareholder in 2012 after the Arab Spring. Associated capital, not the landlord of the 70 hectares.",
 status: "associated",
 layer: "enterprise",
 year: "2012",
 },
 ],

 wongsanit: [
 {
 name: "Sathirakoses-Nagapradipa Foundation (SNF)",
 kind: "Thai public-benefit foundation",
 role: "Thai public-benefit foundation founded by Sulak Sivaraksa in 1968/69 (public charity no. 501). Holds the 34 rai donated in 1984. Board-driven lock.",
 status: "current",
 layer: "land",
 year: "1968–69 (foundation); 1984 (land gift)",
 identifier: "Public charity no. 501",
 },
 {
 name: "Wongsanit Ashram community",
 kind: "Thai Buddhist ashram community",
 role: "Engaged-Buddhist ashram living by unanimous consensus on foundation land. Membership is vocational. Quiet hours; no alcohol or indoor smoking.",
 status: "current",
 layer: "membership",
 year: "1984",
 },
 {
 name: "GENOA / Gaia Education EDE",
 kind: "Lateral movement association",
 role: "Wongsanit is a GENOA core member and has hosted Ecovillage Design Education since 2007. Network listing, not the title holder.",
 status: "associated",
 layer: "network",
 year: "2007",
 },
 ],

 ndem: [
 {
 name: "ONG de Ndem (Association des Villageois de Ndem)",
 kind: "Senegalese NGO",
 role: "Villagers’ association founded 1985; ONG since 2006. Organising nonprofit for gardens, water, school, and neighbouring villages. The Bayfall village is older than the NGO.",
 status: "current",
 layer: "education",
 year: "1985 (association); 2006 (ONG)",
 },
 {
 name: "Maam Samba",
 kind: "Senegalese artisan cooperative",
 role: "Artisan cooperative and brand attached to the craft centre. Sold as far as Spain, Italy, and the US. Productive arm.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Neighbour-village GIEs",
 kind: "Senegalese artisan cooperative",
 role: "Groupements in neighbouring villages in the same family. The NGO’s map is about twenty villages, not one farm title.",
 status: "associated",
 layer: "network",
 },
 ],

 songhai: [
 {
 name: "Centre Songhai",
 kind: "Beninese NGO",
 role: "Beninese non-governmental organisation (UN civil-society profile; B.P. 597 Porto-Novo). Land and the integrated farm sit with the centre, not with household lots.",
 status: "current",
 layer: "land",
 year: "1985",
 },
 {
 name: "United Nations Centre of Excellence for Agriculture",
 kind: "Municipal zoning overlay",
 role: "UN designation in 2008. Recognition.",
 status: "associated",
 layer: "covenant",
 year: "2008",
 },
 ],

 tlholego: [
 {
 name: "Rural Educational Development Corporation (Rucore)",
 kind: "South African nonprofit company",
 role: "South African nonprofit founded in 1991. Paul Cohen is executive director. Established Tlholego as a living-and-learning site on 150 ha of former cattle farm.",
 status: "current",
 layer: "land",
 year: "1991",
 },
 {
 name: "Tshedimosong School",
 kind: "On-site education program",
 role: "Early-years school for farm-worker children on the same land. A program of the village.",
 status: "historical",
 layer: "education",
 year: "1990s",
 },
 ],

 lilleoru: [
 {
 name: "Lilleoru MTÜ",
 kind: "Estonian nonprofit association",
 role: "Estonian mittetulundusühing (registry 80143446) that owns and runs the 30 ha at Aruvalla. Land sits with the NGO, not with household lots. You join the association.",
 status: "current",
 layer: "land",
 year: "1993",
 identifier: "80143446",
 },
 {
 name: "Lilleoru residential circle",
 kind: "Estonian nonprofit association",
 role: "About 30 people live on site; MTÜ membership has been ~125–180, many of whom do not live there. Residents are a subset of members. Course students are not automatically members.",
 status: "current",
 layer: "membership",
 },
 ],

 zmag: [
 {
 name: "Zelena mreža aktivističkih grupa (ZMAG)",
 kind: "Croatian association",
 role: "Croatian udruga founded in 2002 (OIB 27906908289). The Recycled Estate is the association’s educational site at Vukomerić.",
 status: "current",
 layer: "education",
 year: "2002",
 identifier: "OIB 27906908289",
 },
 {
 name: "Recycled Estate",
 kind: "Croatian association",
 role: "The 1999 permaculture experiment (straw-bale, tires, a common garden) imagined as an ekoselo. Members’ houses sit on nearby village plots.",
 status: "current",
 layer: "land",
 year: "1999",
 },
 {
 name: "Nacionalna zaklada za razvoj civilnoga društva",
 kind: "Associated public funder",
 role: "Croatian National Foundation support as a knowledge centre in sustainable living. Funder, not the landlord.",
 status: "associated",
 layer: "covenant",
 year: "2010s",
 },
 ],

 guneskoy: [
 {
 name: "Güneşköy Kooperatifi",
 kind: "Turkish environmental cooperative",
 role: "Turkey’s first ‘environmental cooperative’, founded in 2000 by eight people, most linked to Middle East Technical University. Non-profit-oriented. Bought 75,000 m² from the state in July 2002. You join the cooperative.",
 status: "current",
 layer: "land",
 year: "2000 (cooperative); 2002 (land)",
 },
 ],

 kufunda: [
 {
 name: "Knuth family farm, Ruwa",
 kind: "Zimbabwean family farm title",
 role: "Part of the founder’s mother’s family farm at Ruwa. Title stays with the family; the village lives on it.",
 status: "current",
 layer: "land",
 year: "Family title; village 2001",
 },
 {
 name: "Kufunda Learning Village",
 kind: "Zimbabwean learning-village nonprofit",
 role: "A Zimbabwean nonprofit practice community, youth and women’s programmes, a Waldorf-inspired school, biodynamic farming since 2019. Board and practice.",
 status: "current",
 layer: "education",
 year: "2001",
 },
 ],

 glarisegg: [
 {
 name: "Liegenschaft Schloss Glarisegg AG",
 kind: "Swiss property company",
 role: "Has owned the castle, park, forest, and lake shore since the October 2003 auction. A Swiss Aktiengesellschaft. Shares in the AG are the land path.",
 status: "current",
 layer: "land",
 year: "2003",
 },
 {
 name: "Gemeinschaft Schloss Glarisegg",
 kind: "Swiss community association",
 role: "Swiss Verein founded in 2009, the residential community. Circle culture; outer-circle / inner-circle path. IC.org has listed a joining fee on the order of $5,450 and a trial of a year or more. The Verein lives in the castle; the AG owns the stones.",
 status: "current",
 layer: "membership",
 year: "2009",
 },
 {
 name: "Seminar centre, school, and permaculture Vereine",
 kind: "Swiss community association",
 role: "Other associations rent from the AG: seminar centre, school and forest kindergarten, permaculture. The castle earns its keep as a venue. Associated operating layer.",
 status: "current",
 layer: "enterprise",
 year: "2012 (garden); 2023 (Academy for Community Education)",
 },
 ],

 "los-horcones": [
 {
 name: "Comunidad de los Horcones, Sociedad Cooperativa de Producción",
 kind: "Mexican producer cooperative",
 role: "Holds the ~100 ha Sonoran desert parcel, houses, farm, and enterprises in common. Walden Two experimental village.",
 status: "current",
 layer: "land",
 year: "Community 1973; cooperativa November 1977; present parcel October 1981",
 },
 {
 name: "Centro para Niños con Déficit Conductual / autism programme",
 kind: "On-site intern and education program",
 role: "The 1971 Hermosillo precursor and the on-site special-education programme. A cash engine and the founding reason.",
 status: "current",
 layer: "education",
 year: "1971 (Hermosillo); continued on the desert parcel",
 },
 {
 name: "Asociación Internacional Walden Two",
 kind: "Lateral movement association",
 role: "Founded 1980 as a Walden Two network. Associated history, not the Sonora landowner.",
 status: "associated",
 layer: "network",
 year: "1980",
 },
 ],

 tosepan: [
 {
 name: "Unión de Cooperativas Tosepan Titataniske",
 kind: "Mexican unión de cooperativas",
 role: "The 2007 federation that binds about nine cooperatives while each keeps its own books. Mexico’s largest indigenous cooperative movement.",
 status: "current",
 layer: "membership",
 year: "Movement 1977; regional cooperativa 1980; unión 2007",
 },
 {
 name: "Sociedad Cooperativa Agropecuaria Regional Tosepan Titataniske",
 kind: "Mexican cooperativa",
 role: "The 1980 agricultural cooperative (coffee, pepper, milpa, nursery) that the later union grew from.",
 status: "current",
 layer: "enterprise",
 year: "20 February 1980",
 },
 {
 name: "Tosepantomin (Caja Solidaria)",
 kind: "Mexican savings cooperative",
 role: "Savings, credit, remittances, and insurance. “Money of all.” CNBV-authorized. The wallet of the union, not the landowner of Cuetzalan.",
 status: "current",
 layer: "enterprise",
 year: "1998 (CNBV authorization later)",
 },
 {
 name: "Tosepan Kali",
 kind: "Mexican cooperativa",
 role: "Ecotourism cooperative: hotel, hostel, and bamboo cabins at Nahuiogpan. The visitable campus. Lots are not for sale.",
 status: "current",
 layer: "enterprise",
 year: "2004",
 },
 {
 name: "Yeknemilis A.C. and Fundación Tosepan A.C.",
 kind: "Mexican asociación civil",
 role: "Technical assistance and the donation-receiving foundation. Associated education and charity layer, not house-lot landlords.",
 status: "current",
 layer: "education",
 year: "Yeknemilis 2002; Fundación 2012",
 },
 {
 name: "Tosepan Kalnemachtiloyan (school) and Kaltaixpetaniloyan (training centre)",
 kind: "On-site intern and education program",
 role: "Bilingual preschool through secondary plus music, and the 2003 training house.",
 status: "current",
 layer: "education",
 year: "Centre 2003; school 2006",
 },
 ],

 "teopantli-kalpulli": [
 {
 name: "Teopantli Kalpulli A.C.",
 kind: "Mexican asociación civil",
 role: "The civil-association wrapper of the Jalisco kalpulli. About 37 ha at San Isidro Mazatepec, internally parceled for families, with farm and reserve held in common.",
 status: "current",
 layer: "land",
 year: "Ashram 7 March 1983; A.C. ongoing",
 },
 {
 name: "Internal family parcels (~55 of ~500 m²)",
 kind: "Private farm title",
 role: "Residential lots inside the A.C. tract, a cohousing-style split.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Ananda Marga ashram (founding form)",
 kind: "Ananda Marga ashram community",
 role: "The 1983 spiritual origin. The village later lived as a Mexica kalpulli. Historical form, not today’s public face.",
 status: "historical",
 layer: "membership",
 year: "1983",
 },
 {
 name: "Consejo de Visiones – Guardianes de la Tierra",
 kind: "Lateral movement association",
 role: "The 14th Vision Council (Llamado de la Salvia, November 2015) met here. CASA Latina traces a seed to that week. Associated network, not the landowner.",
 status: "associated",
 layer: "network",
 year: "2015 (14th council on this land)",
 },
 ],

 litibu: [
 {
 name: "Litibú EcoVillage fideicomiso and LLC",
 kind: "Mexican bank trust (fideicomiso)",
 role: "Coastal restricted-zone structure: a bank trust holds title; an LLC is the collective beneficiary. Eight eco casas sit inside that wrapper.",
 status: "current",
 layer: "land",
 year: "Planning 1988; living together 1990",
 },
 {
 name: "Eight eco-casa households",
 kind: "Private farm title",
 role: "Privately managed houses bound by community agreements, dues, and labour. Membership is not automatic with a casa key.",
 status: "current",
 layer: "membership",
 },
 {
 name: "FONATUR Litibú master plan (adjacent)",
 kind: "Developer company",
 role: "The government-sponsored resort, golf, and condo plan on the same coastline. Associated geography, not the eight-casa village.",
 status: "associated",
 layer: "network",
 },
 ],

 "u-yits-kaan": [
 {
 name: "Escuela de Agricultura Ecológica U Yits Ka'an A.C.",
 kind: "Mexican diocesan / pastoral school",
 role: "The campesino school and ~15 ha internado at Maní. Founded by Pastoral de la Tierra priests; independent A.C. after 2008.",
 status: "current",
 layer: "education",
 year: "11 January 1996 (A.C. independent after 2008)",
 },
 {
 name: "Maní internado land (~15 ha)",
 kind: "Private farm title",
 role: "Terrain purchased by the founding priests for the school.",
 status: "current",
 layer: "land",
 year: "c. 1994–96",
 },
 {
 name: "Pastoral de la Tierra / founding priests",
 kind: "Religious society / covenant",
 role: "Liberation-theology priests (Atilano Ceballos Loeza and others) bought the land and founded the internado. Historical church link; the school later became an independent A.C.",
 status: "historical",
 layer: "membership",
 year: "1994–2008",
 },
 ],

 "tierra-del-sol": [
 {
 name: "Villa Agroecológica Tierra del Sol",
 kind: "Private farm title",
 role: "Four hectares at Paraje Langueche, Tlacochahuaya, held as a private regenerative farm and teaching villa.",
 status: "current",
 layer: "land",
 year: "Land 2001; farm May 2002",
 },
 {
 name: "Instituto de Permacultura / teaching programmes",
 kind: "On-site intern and education program",
 role: "Guided visits, apprenticeships, immersives, and workshops. The earned-income face.",
 status: "current",
 layer: "education",
 },
 ],

 "bosque-village": [
 {
 name: "Bosque Village land (Brian Fey)",
 kind: "Private farm title",
 role: "Eighty-three acres of pine, oak, and madrone near Yotatiro held in a founder’s name (or family trust). A 2016 nonprofit was intended to take staged control; the named A.C. is not in public sources reviewed.",
 status: "current",
 layer: "land",
 year: "2004",
 },
 {
 name: "Bosque Village project / registered nonprofit intent",
 kind: "Mexican asociación civil",
 role: "The educational and retreat project. Interns and visitors are not lot owners. IC.org lists a single invested member.",
 status: "current",
 layer: "education",
 year: "2004 (nonprofit intent 2016)",
 },
 ],

 "via-organica": [
 {
 name: "Vía Regenerativa y Orgánica A.C.",
 kind: "Mexican asociación civil",
 role: "Mexican nonprofit holding the 80 ha Jalpa-valley demonstration ranch and running the farm school. Rosana Álvarez Martínez.",
 status: "current",
 layer: "land",
 year: "Store 2009; ranch 2012–13",
 },
 {
 name: "Vía Orgánica restaurant, tienda, and farmers market",
 kind: "Community enterprise",
 role: "Town and ranch food businesses that sell what the 80 ha grows. Trading arms.",
 status: "current",
 layer: "enterprise",
 year: "2009",
 },
 {
 name: "Organic Consumers Association / Regeneration International",
 kind: "U.S. 501(c)(3) fiscal sponsor",
 role: "U.S. partners (Ronnie Cummins, Rose Welch; Billion Agave; Ecosystem Restoration Communities). Associated network, not the Mexican title holder.",
 status: "associated",
 layer: "network",
 year: "2009–",
 },
 ],

 crisalium: [
 {
 name: "Crisalium, educación, naturaleza y transición A.C.",
 kind: "Mexican asociación civil",
 role: "The 2012 civil association of families inhabiting five hectares inside Parque Natural El Encuentro. Consensus.",
 status: "current",
 layer: "membership",
 year: "2012",
 },
 {
 name: "Five hectares inside Parque Natural El Encuentro",
 kind: "Private farm title",
 role: "Forest inhabited by the ecoaldea, nested in a ~143 ha private park (from 2002). The park-owning persons and the A.C. Collaborate.",
 status: "current",
 layer: "land",
 year: "Park 2002; collaboration 2017; easement 2020",
 },
 {
 name: "Servidumbre ecológica (2020)",
 kind: "Mexican ecological easement",
 role: "Notarial ecological easement zoning conservation, restoration, recreation, and limited building on georeferenced polygons. A covenant on the land.",
 status: "current",
 layer: "covenant",
 year: "2020",
 },
 ],

 "inla-kesh": [
 {
 name: "Inla Kesh / Biotopo de Sanación",
 kind: "Unincorporated community association",
 role: "A Tamera-inspired healing biotope on about two hectares at Chichihuistán, Teopisca municipality. Small residential circle. Named Mexican moral person not in public sources reviewed.",
 status: "current",
 layer: "membership",
 year: "2012",
 },
 {
 name: "Chichihuistán highland parcel (~2 ha)",
 kind: "Private farm title",
 role: "The land the circle has lived on since 2012. Teaching (EDE) sits on it; guests do not buy an Altos lot.",
 status: "current",
 layer: "land",
 year: "2012",
 },
 {
 name: "Gaia Education EDE / Tamera lineage",
 kind: "On-site intern and education program",
 role: "Month-long Ecovillage Design Education and healing-biotope practice. Associated pedagogy.",
 status: "current",
 layer: "education",
 },
 ],

 "vicente-guerrero": [
 {
 name: "Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C.",
 kind: "Mexican asociación civil",
 role: "The 1997 civil association of campesino promoters from Vicente Guerrero, Españita. Trains, holds maize fairs, and channels project grants. Not the landlord of members’ milpas.",
 status: "current",
 layer: "membership",
 year: "Comité 1973; A.C. December 1997",
 },
 {
 name: "Member milpas (pequeña propiedad and village plots)",
 kind: "Private farm title",
 role: "Families farm their own dirt in Españita and neighbouring municipalities. The A.C. is the school and the fair.",
 status: "current",
 layer: "land",
 },
 {
 name: "Comité de Servicio de los Amigos / SEDEPAC (founding path)",
 kind: "Lateral movement association",
 role: "1973 Quaker-linked village committee; 1980–88 work inside SEDEPAC. Historical shells, not today’s A.C.",
 status: "historical",
 layer: "membership",
 year: "1973; SEDEPAC 1980–88",
 },
 {
 name: "Katoque Ketzal / campesino-a-campesino exchange",
 kind: "On-site intern and education program",
 role: "Guatemalan soil-and-water school whose promoters stayed in Vicente Guerrero 1979–84. Associated pedagogy.",
 status: "associated",
 layer: "education",
 year: "1978–84",
 },
 ],

 nanciyaga: [
 {
 name: "Reserva Ecológica Nanciyaga (Rodríguez family title)",
 kind: "Private farm title",
 role: "About 14 ha on Laguna Catemaco, bought at auction when Carlos Rodríguez Mouriño was thirteen. Family reserve.",
 status: "current",
 layer: "land",
 year: "Late 1980s purchase",
 },
 {
 name: "Nanciyaga eco-tourism operation",
 kind: "Community enterprise",
 role: "Cabins, restaurant, walks, temazcal, film location. The cash engine. Carlos Rodríguez Mouriño directs.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Reserva de la Biósfera Los Tuxtlas",
 kind: "Mexican biosphere reserve designation",
 role: "1998 biosphere wrapping the region. A designation on the geography, not the owner of the 14 ha.",
 status: "current",
 layer: "covenant",
 year: "1998",
 },
 ],

 "pueblo-sacbe": [
 {
 name: "Pueblo Sacbé lot holders",
 kind: "Private farm title",
 role: "About 54 ha of jungle west of Playa del Carmen, held as private parcels (foreigners typically via fideicomiso in the coastal zone). A covenanted freehold village.",
 status: "current",
 layer: "land",
 year: "1998",
 },
 {
 name: "Sacbé village bylaws (no grid, biodigesters, jungle and water)",
 kind: "Treehouse community guidelines",
 role: "Resident covenants that run with the lots: off-grid power, biodigesters, jungle conservation. A private code.",
 status: "current",
 layer: "covenant",
 },
 {
 name: "Bank fideicomiso (foreign holders)",
 kind: "Mexican bank trust (fideicomiso)",
 role: "Coastal restricted-zone structure for non-Mexican beneficial owners. Associated title path, not the village corporation.",
 status: "associated",
 layer: "land",
 },
 ],

 ixixtlan: [
 {
 name: "Ecoaldea Ixixtlán SanArte",
 kind: "Unincorporated community association",
 role: "Founder-led hill sanctuary at Atlixco. Beleni Kumara Inti. Named Mexican moral person not in public sources reviewed. GEN lists it as an ecovillage.",
 status: "current",
 layer: "membership",
 year: "2006",
 },
 {
 name: "Atlixco hill parcel (sacred-geometry cabins)",
 kind: "Private farm title",
 role: "The hill facing Popocatépetl and Iztaccíhuatl. Retreats sit on it; guests do not buy an Atlixco lot.",
 status: "current",
 layer: "land",
 year: "2006",
 },
 {
 name: "Retreat and recreational-education programmes",
 kind: "On-site intern and education program",
 role: "Workshops, camps, PeregrinArte, ceremonies. The public cash.",
 status: "current",
 layer: "education",
 },
 ],

 "huerto-roma-verde": [
 {
 name: "La Cuadra A.C. / Huerto Roma Verde",
 kind: "Mexican asociación civil",
 role: "The neighbourhood civil association that, with volunteers, cleared Jalapa 234 in 2012 and still runs the urban permaculture lab.",
 status: "current",
 layer: "membership",
 year: "2012",
 },
 {
 name: "Jalapa 234 lot (former Multifamiliar Juárez rubble)",
 kind: "Private farm title",
 role: "A city lot left empty for 27 years after the 1985 earthquake. The huerto occupies it.",
 status: "current",
 layer: "land",
 year: "Abandoned 1985; occupied 2012",
 },
 ],

 "rancho-la-salud": [
 {
 name: "Rancho La Salud Village condominio (Jalisco)",
 kind: "Jalisco condominium regime",
 role: "Mexico’s first cohousing, on paper a Jalisco condominio. Each home is deeded; a percentage of ownership includes common ground. Annual budget meeting by law.",
 status: "current",
 layer: "land",
 year: "2014",
 },
 {
 name: "Jaime Navarro founding parcel (~3½ acres)",
 kind: "Private farm title",
 role: "The lakeshore dirt the condominio sits on. Founding member’s holding.",
 status: "current",
 layer: "land",
 year: "2014",
 },
 {
 name: "Cohousing common house, palapa, and pool",
 kind: "Neighborhood / property trust",
 role: "3,000 sq ft common house, palapa, salt-water lap pool, garden. Commons of the condominio.",
 status: "current",
 layer: "membership",
 },
 ],

 tamarindos: [
 {
 name: "EcoAldea Tamarindos lots (Mata de Agua)",
 kind: "Private farm title",
 role: "Selva baja caducifolia on the Río Jamapa. Lots from 500 m² offered on the village site. Pequeña propiedad.",
 status: "current",
 layer: "land",
 year: "c. 2015",
 },
 {
 name: "Tamarindos cabins, EcoClub, and hospitality",
 kind: "Community enterprise",
 role: "Cabins, restaurant, temazcal, zip-line, camping, observatory, courses. The tourism face.",
 status: "current",
 layer: "enterprise",
 },
 ],

 hapori: [
 {
 name: "Hapori Eco Aldea lots (Águila Real)",
 kind: "Private farm title",
 role: "More than eight hectares of former pasture at km 13.5 of the SMA–Guanajuato libramiento, inside Fraccionamiento Águila Real. Custom eco-homes, independently off-grid.",
 status: "current",
 layer: "land",
 year: "2018–21",
 },
 {
 name: "Fraccionamiento Águila Real (enclosing eco-residencial)",
 kind: "Developer company",
 role: "The gated eco-residencial Hapori sits inside. Associated geography and covenants, not the Hapori houses themselves.",
 status: "associated",
 layer: "covenant",
 },
 {
 name: "Hapori common house, palapa, biopool, temazcal",
 kind: "Neighborhood / property trust",
 role: "Shared infrastructure of the neighbourhood. A casa key is a lot purchase, not automatic membership of a commons purse.",
 status: "current",
 layer: "membership",
 },
 ],

 sekkan: [
 {
 name: "Rancho Ecológico Sekkan LLC / tenancy in common",
 kind: "Mexican limited company / LLC",
 role: "IC.org: 38 acres of former Rancho Lacayo held by several individuals through an LLC or a TIC. Six founding families.",
 status: "current",
 layer: "land",
 year: "Purchase 2022",
 },
 {
 name: "Six founding families",
 kind: "Unincorporated community association",
 role: "Weekly meetings, letter-of-intent membership, independent finances, ~$300 fees, two hours a week. The residential circle.",
 status: "current",
 layer: "membership",
 year: "Core group January 2022; living together 2026",
 },
 {
 name: "Biodynamic farm (visitor door)",
 kind: "On-site intern and education program",
 role: "The public face for guests. Donation requested.",
 status: "current",
 layer: "education",
 },
 ],

 "nuevo-san-juan": [
 {
 name: "Comunidad Indígena de Nuevo San Juan Parangaricutiro (bienes comunales)",
 kind: "Mexican bienes comunales",
 role: "Presidential resolution of 25 November 1991 titled 18,138.32 ha as terrenos comunales (inalienable, imprescriptible, unseizable) to 1,229 comuneros. Purépecha comunidad indígena with personalidad jurídica.",
 status: "current",
 layer: "land",
 year: "DOF 25 November 1991",
 notes:
 "Colonial títulos primordiales precede the resolution. The asamblea, is membership.",
 },
 {
 name: "Community forestry enterprise",
 kind: "Mexican producer cooperative",
 role: "Sawmill, furniture, resin, water, and more than twenty production lines on about 6,443 ha of pine-oak. FSC 1999. The cash engine.",
 status: "current",
 layer: "enterprise",
 year: "1982–83",
 },
 {
 name: "Comisariado and asamblea de comuneros",
 kind: "Unincorporated community association",
 role: "Monthly first-Sunday asamblea; autoridades comunales on three-year terms. The governance of the 1,282 comuneros.",
 status: "current",
 layer: "membership",
 },
 ],

 cedicam: [
 {
 name: "Centro de Desarrollo Integral Campesino de la Mixteca (CEDICAM)",
 kind: "Mexican asociación civil",
 role: "Mixtec campesino-to-campesino organisation co-founded 1983 by Jesús León Santos and neighbours. Training, nurseries, contour ditches.",
 status: "current",
 layer: "education",
 year: "1983",
 },
 {
 name: "Member families’ milpas and contour ditches",
 kind: "Private farm title",
 role: "Families farm their own Mixteca Alta plots. CEDICAM is the school, not the landlord of every hillside.",
 status: "current",
 layer: "land",
 },
 {
 name: "Goldman Environmental Prize (Jesús León Santos)",
 kind: "Lateral movement association",
 role: "2008 North America prize, US$150,000. Associated recognition and money, not the title holder.",
 status: "associated",
 layer: "network",
 year: "2008",
 },
 ],

 "sierra-gorda": [
 {
 name: "Grupo Ecológico Sierra Gorda I.A.P.",
 kind: "Mexican IAP (institución de asistencia privada)",
 role: "Citizen public-benefit institution co-founded 5 December 1987 by Pati Ruiz Corzo, Roberto Pedraza Muñoz, and Jalpan neighbours. Education, carbon, trails. Not the owner of the biosphere.",
 status: "current",
 layer: "education",
 year: "5 December 1987",
 },
 {
 name: "Reserva de la Biosfera Sierra Gorda",
 kind: "Mexican biosphere reserve designation",
 role: "383,567 ha gazetted in the Diario Oficial on 19 May 1997, with eleven core zones. A CONANP designation on the mountains, not the IAP’s ranch.",
 status: "current",
 layer: "covenant",
 year: "19 May 1997",
 },
 {
 name: "Communities inside the reserve",
 kind: "Private farm title",
 role: "Pequeña propiedad, ejido, and comunidad titles stay with the people who live in the sierra. The IAP is the alliance, not their landlord.",
 status: "current",
 layer: "land",
 },
 ],

 "la-ventanilla": [
 {
 name: "Servicios Ecoturísticos de La Ventanilla, S.C. de R.L. de C.V.",
 kind: "Mexican producer cooperative",
 role: "About 25 Zapotec families on the Tonameca lagoon. Canoe tours, nurseries. Formed 1998, UMA 2002.",
 status: "current",
 layer: "land",
 year: "1998; UMA 2002",
 },
 {
 name: "Uma Island nurseries (mangrove and crocodile)",
 kind: "Community enterprise",
 role: "The conservation face of the tour. Associated operations.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Lagarto Real (second lagoon cooperative)",
 kind: "Mexican cooperativa",
 role: "Another tour cooperative on the same lagoon. Associated neighbour, not the Ventanilla S.C.",
 status: "associated",
 layer: "network",
 },
 ],

 "punta-laguna": [
 {
 name: "Najil Tucha cooperativa",
 kind: "Mexican producer cooperative",
 role: "About 30 Maya families at Punta Laguna, founded 2002, collectively running tours. Revenue divided among families.",
 status: "current",
 layer: "membership",
 year: "2002",
 },
 {
 name: "Otoch Ma’ax Yetel Kooh Área de Protección de Flora y Fauna",
 kind: "Mexican flora-and-fauna protected area",
 role: "5,367.42 ha CONANP designation (2002; petitions from 1967). Maya: the house of the spider monkey and the puma. A designation on the forest.",
 status: "current",
 layer: "covenant",
 year: "2002",
 },
 {
 name: "Punta Laguna village lands",
 kind: "Mexican bienes comunales",
 role: "The families live in the reserve in thatch houses and farm a little milpa. Village dirt under the ANP.",
 status: "current",
 layer: "land",
 },
 ],

 "yomol-atel": [
 {
 name: "Yomol A’tel (group of cooperatives)",
 kind: "Mexican unión de cooperativas",
 role: "Tseltal “working together”: the 2002 Jesuit-and-grower federation.",
 status: "current",
 layer: "membership",
 year: "2002",
 },
 {
 name: "Ts’umbal Xitalha’",
 kind: "Mexican cooperativa",
 role: "341 Tseltal coffee-and-honey families. The producer cooperative. Families keep their own plots.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Bats’il Maya and Capeltic",
 kind: "Community enterprise",
 role: "Solidarity roaster and the university cafés that sell the cup. Value-add, not the landlord of Chilón.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Jesuit Province of Mexico (founding partner)",
 kind: "Lateral movement association",
 role: "2002 partnership with Tseltal growers; later Spanish-province solidarity. Associated history, not the title holder.",
 status: "associated",
 layer: "network",
 year: "2002",
 },
 ],

 tierraluz: [
 {
 name: "TierraLuz titled lots",
 kind: "Private farm title",
 role: "19 ocean-view lots of about 400–600 m² above Sayulita. Transferable titled property.",
 status: "current",
 layer: "land",
 year: "2009",
 },
 {
 name: "TierraLuz Asociación Civil (commons)",
 kind: "Mexican asociación civil",
 role: "GEN: common land (~8,500 m², trails, food forest, yoga platform, garden, roads) co-owned via an A.C. of which lot-holders are members.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Off-grid solar and well",
 kind: "Neighborhood / property trust",
 role: "Shared well, solar pump, community storage. Infrastructure of the neighbourhood.",
 status: "current",
 layer: "covenant",
 },
 ],

 "huerto-tlatelolco": [
 {
 name: "Cultiva Ciudad A.C. / Huerto Tlatelolco",
 kind: "Mexican asociación civil",
 role: "The 2013 nonprofit occupying ~1,650 m² on a demolished 1985-quake tower footprint in Nonoalco-Tlatelolco. Civic garden.",
 status: "current",
 layer: "land",
 year: "2013",
 },
 {
 name: "Neighbour and volunteer programme",
 kind: "On-site intern and education program",
 role: "Workshops, compost, seed bank, edible forest. The public door.",
 status: "current",
 layer: "education",
 },
 ],

 kuyabeh: [
 {
 name: "Kuyabeh lot holders",
 kind: "Private farm title",
 role: "375 ha at km 34 of the Tulum–Cobá road, held as ½-ha and 1-ha private lots (foreigners typically via fideicomiso). A covenanted freehold village.",
 status: "current",
 layer: "land",
 year: "2015",
 },
 {
 name: "Kuyabeh commons and amenities (~25 ha)",
 kind: "Neighborhood / property trust",
 role: "Amphitheatre, school, market garden, restaurant, temazcal, pool, hotel, spa, lagoon, cenote, towers. Shared amenities of a lot-sales village.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Construction covenant (~7% buildable)",
 kind: "Treehouse community guidelines",
 role: "Owners apply and accept a roughly 7% construction cap and off-grid rules. A private code.",
 status: "current",
 layer: "covenant",
 },
 ],

 "cabo-pulmo": [
 {
 name: "Parque Nacional Cabo Pulmo (CONANP)",
 kind: "Mexican national park (CONANP)",
 role: "71.11 km² of reef and water decreed 5 June 1995, IUCN II. No-take. The commons the village dives.",
 status: "current",
 layer: "covenant",
 year: "5 June 1995",
 notes: "UNESCO World Heritage 2005 (Gulf islands); Ramsar 2008.",
 },
 {
 name: "Amigos para la Conservación de Cabo Pulmo A.C.",
 kind: "Mexican asociación civil",
 role: "Community conservation face from 2002. Patrols, education, the civic wrapper. Not the landlord of the village houses.",
 status: "current",
 layer: "education",
 year: "2002",
 },
 {
 name: "Cabo Pulmo Divers and family dive shops",
 kind: "Community enterprise",
 role: "Mario Castro Lucero opened the first shop in 1990. Tourism replaced nets. Family enterprises.",
 status: "current",
 layer: "enterprise",
 year: "1990",
 },
 {
 name: "Village households (pequeña propiedad)",
 kind: "Private farm title",
 role: "Houses on the East Cape shore. The park is water; the lots are not sold by CONANP.",
 status: "current",
 layer: "land",
 },
 ],

 "baja-ecovillage": [
 {
 name: "Zonas Verdes de Punta Banda, A.C.",
 kind: "Mexican asociación civil",
 role: "Manages El Rinconcito Verde, the ~54-acre experimental botanical forest park. Formed 2006. Conservation wrapper.",
 status: "current",
 layer: "education",
 year: "2006",
 },
 {
 name: "El Rinconcito Verde forest park",
 kind: "Mexican ecological easement",
 role: "Branching canyon protected from development with the town of Cantú in 2005. Named by a schoolchild. Mark Lurie’s 200-year plan.",
 status: "current",
 layer: "covenant",
 year: "2005",
 },
 {
 name: "Cantú residential parcels",
 kind: "Private farm title",
 role: "Houses sit on land purchased from the town of Cantú from 2003. The A.C. does not sell a share of the canyon.",
 status: "current",
 layer: "land",
 year: "2003",
 },
 ],

 "baja-biosana": [
 {
 name: "Baja BioSana resident membership",
 kind: "Spiritual membership community",
 role: "About nine people in about eleven natural-building homes on 11 ha. A house that opens is a membership transfer.",
 status: "current",
 layer: "membership",
 year: "2006",
 },
 {
 name: "11-hectare El Chorro oasis",
 kind: "Private farm title",
 role: "Shared desert oasis at the foot of the Sierra de la Laguna. Off-grid.",
 status: "current",
 layer: "land",
 year: "2006",
 },
 {
 name: "Living-and-learning / retreat centre",
 kind: "Mexican asociación civil",
 role: "Natural-building workshops and retreats are the public door. Confirm the current civil wrapper; GEN filmed the ecoaldea in 2014.",
 status: "current",
 layer: "education",
 },
 ],

 "san-jose-de-la-zorra": [
 {
 name: "Comunidad Indígena Kumiai de San José de la Zorra",
 kind: "Mexican Sujeto de Derecho Público",
 role: "Traditional Kumiai authority. 2024 decree as Sujeto de Derecho Público. One of five Kumiai communities in Baja California. Ancestral territory.",
 status: "current",
 layer: "membership",
 year: "2024 (public-subject decree)",
 notes: "People were here long before the decree. The decree is civil personality.",
 },
 {
 name: "Kumiai communal territory (~1,740 ha)",
 kind: "Mexican bienes comunales",
 role: "About 1,740 hectares described as sitting in the jurisdiction of Ejido El Porvenir. Inalienable community dirt.",
 status: "current",
 layer: "land",
 },
 {
 name: "Ejido El Porvenir (agrarian neighbour)",
 kind: "Mexican cooperativa",
 role: "The ejido whose jurisdiction agrarian maps use for the 1,740 ha. Neighbour and wrapper of the Kumiai houses.",
 status: "associated",
 layer: "covenant",
 },
 ],

 "rancho-pacifico-baja": [
 {
 name: "Rancho Pacífico Baja homestead",
 kind: "Private farm title",
 role: "15 acres east of El Pescadero, zoned agriculture and eco-tourism. A forming eco-village on private desert land.",
 status: "current",
 layer: "land",
 year: "2019",
 },
 {
 name: "Wood-fired bakery, pizzeria, and campground",
 kind: "Community enterprise",
 role: "The public door: bread, pizza, fermentary, off-grid sites. Guests are not members.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Eco-village membership path",
 kind: "Spiritual membership community",
 role: "A published PDF invite to join the forming village. Confirm who is actually on the land this season.",
 status: "current",
 layer: "membership",
 year: "2019",
 },
 ],

 tateikie: [
 {
 name: "Comunidad Indígena Wixárika de San Andrés Cohamiata (TateiKie)",
 kind: "Mexican bienes comunales",
 role: "Ceremonial and communal headquarters of sixteen agencies in Mezquitic. Ancestral Wixárika territory.",
 status: "current",
 layer: "land",
 notes: "The asamblea is older than the mid-century agrarian wrapper.",
 },
 {
 name: "Asamblea comunitaria and Gobernador Tradicional",
 kind: "Unincorporated community association",
 role: "Highest figure. Cargos are civil and religious. Consensus.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Autoridad agraria and Delegado Municipal",
 kind: "Mexican Sujeto de Derecho Público",
 role: "The civil offices that sit beside the ceremonial year.",
 status: "current",
 layer: "covenant",
 },
 ],

 ayotitlan: [
 {
 name: "Ejido Ayotitlán",
 kind: "Mexican cooperativa",
 role: "Presidential resolution August 1963. ~50,332 ha on paper; about 34,700 ha delivered. Nahua-Otomí sierra of ~88 localities.",
 status: "current",
 layer: "land",
 year: "August 1963",
 },
 {
 name: "Consejo de Mayores",
 kind: "Unincorporated community association",
 role: "Traditional authority. The agrarian and mining fight sits here.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Reserva de la Biosfera Sierra de Manantlán",
 kind: "Mexican biosphere reserve designation",
 role: "139,577 ha, 23 March 1987. CONANP designation on the mountain, not the ejido’s landlord.",
 status: "associated",
 layer: "covenant",
 year: "23 March 1987",
 },
 ],

 "bosque-la-primavera": [
 {
 name: "Área de Protección de Flora y Fauna La Primavera",
 kind: "Mexican flora-and-fauna protected area",
 role: "30,500 ha west of Guadalajara, decreed 6 March 1980. The lung.",
 status: "current",
 layer: "covenant",
 year: "6 March 1980",
 },
 {
 name: "CONANP / SEMADET directorate",
 kind: "Mexican asociación civil",
 role: "Fire, trails, education. The weekday government of the forest.",
 status: "current",
 layer: "education",
 },
 {
 name: "Edge ejidos and pequeña propiedad",
 kind: "Private farm title",
 role: "Zapopan, Tala, Tlajomulco, El Arenal. Their titles stay theirs. The politics is the urban edge.",
 status: "associated",
 layer: "land",
 },
 ],

 kasisi: [
 {
 name: "Kasisi Agricultural Training Centre",
 kind: "Zambian Jesuit training centre",
 role: "Jesuit training farm of the Zambia-Malawi Province at Kasisi Mission, Chongwe. Land, dairy, irrigation, and classrooms sit with the centre.",
 status: "current",
 layer: "land",
 year: "1974 (centre); organic turn 1990",
 },
 {
 name: "Jesuits of the Zambia-Malawi Province",
 kind: "Zambian Jesuit training centre",
 role: "Parent body. Founded KATC in 1974. Br. Paul Desmarais SJ directed for decades. Institutional ownership, not household lots.",
 status: "current",
 layer: "membership",
 year: "1974",
 },
 {
 name: "UNDP Equator Initiative",
 kind: "Associated public funder",
 role: "Equator Prize 2014 for training more than 10,000 small-scale farmers. Recognition, not the Chongwe landlord.",
 status: "associated",
 layer: "covenant",
 year: "2014",
 },
 ],

 "awra-amba": [
 {
 name: "Awra Amba village cooperative",
 kind: "Ethiopian producer cooperative",
 role: "The 1990s cooperative that holds about 17.5 hectares and runs weaving and mills. Ethiopian land is constitutionally state-and-people title.",
 status: "current",
 layer: "land",
 year: "Village 1980; cooperative early 1990s",
 },
 {
 name: "Awra Amba trading company",
 kind: "Ethiopian trading company",
 role: "Created because Ethiopian cooperatives cannot operate outside their locality (awraamba.net). The outward trading face.",
 status: "current",
 layer: "enterprise",
 },
 {
 name: "Education, guest, health, and elder committees",
 kind: "On-site intern and education program",
 role: "Formal committees of the village: school, library, guests, patients, elders and children, community health. Governance layer, not title.",
 status: "current",
 layer: "membership",
 },
 ],

 umoja: [
 {
 name: "Umoja Uaso Women Group",
 kind: "Kenyan community-based organization",
 role: "The CBO and women-only village at Archers Post. Fourteen-acre campsite, manyattas, beadwork.",
 status: "current",
 layer: "land",
 year: "1990",
 },
 {
 name: "Umoja campsite (12 cottages)",
 kind: "Community enterprise",
 role: "Twelve self-contained cottages on the Waso, about 30 guests. The cash engine.",
 status: "current",
 layer: "enterprise",
 },
 ],

 "st-jude": [
 {
 name: "St. Jude Family Projects",
 kind: "Ugandan NGO",
 role: "Ugandan NGO S.5914/2000. The Busense farm is the teaching site. Founded by Josephine Kizza Aliddeki and the late John Kizza.",
 status: "current",
 layer: "land",
 year: "Farm 1997; NGO 2000",
 identifier: "S.5914/2000",
 },
 {
 name: "Women’s farmer groups and dried-fruit plant",
 kind: "On-site intern and education program",
 role: "Extension, cooperatives, and a value-added plant. The public door.",
 status: "current",
 layer: "education",
 },
 ],

 "khula-dhamma": [
 {
 name: "Khula Dharma farm, Haga Haga",
 kind: "South African private farm title",
 role: "Freehold bushveld near Haga Haga bought by five friends in 2000. Just under 300 ha then; the village site now says 180 ha.",
 status: "current",
 layer: "land",
 year: "Purchase 2000; living together 2002",
 },
 {
 name: "Retreat and volunteer programme",
 kind: "On-site intern and education program",
 role: "Self-catering cob rooms, camping, volunteer weeks, yoga and writing retreats. The visitor door.",
 status: "current",
 layer: "education",
 },
 ],

 nadeet: [
 {
 name: "Namib Desert Environmental Education Trust (NaDEET)",
 kind: "Namibian nonprofit trust",
 role: "Namibian trust T168/2003. Runs the solar education centre.",
 status: "current",
 layer: "education",
 year: "2003",
 identifier: "T168/2003",
 },
 {
 name: "NamibRand Nature Reserve",
 kind: "Namibian private reserve",
 role: "Private reserve of former sheep farms, on the order of 202,000 ha, on which the Centre sits by arrangement. Associated land, not the trust’s title to the dunes.",
 status: "associated",
 layer: "land",
 },
 ],

 kaydara: [
 {
 name: "Association Jardins d’Afrique",
 kind: "Senegalese association",
 role: "Senegalese association; Gora Ndiaye is president. Runs Ferme-école Kaydara at Fimela.",
 status: "current",
 layer: "land",
 year: "UNESCO project 21 June 2006; association listed from 1994",
 },
 {
 name: "Kaydara Agroecology School Farm",
 kind: "On-site intern and education program",
 role: "The farm-school itself, students, 16 villages, agroecology against salinisation. A programme of the association.",
 status: "current",
 layer: "education",
 year: "2006",
 },
 ],

 otepic: [
 {
 name: "OTEPIC (Organic Technology Extension and Promotion of Initiative Center)",
 kind: "Kenyan self-help group",
 role: "Kitale self-help / CBO founded 2008 by Philip Odhiambo Munyasia. Three gardens including 10 ha at Sabwani.",
 status: "current",
 layer: "land",
 year: "2008 (project); Sabwani 2014",
 },
 {
 name: "Tabasamu orphan household",
 kind: "On-site intern and education program",
 role: "22 orphans living in the work. Care programme.",
 status: "current",
 layer: "education",
 },
 {
 name: "Tamera partnership",
 kind: "Lateral movement association",
 role: "Partner since 2011. Associated network, not the Kitale landlord.",
 status: "associated",
 layer: "network",
 year: "2011",
 },
 ],

 ndanifor: [
 {
 name: "Better World Cameroon",
 kind: "Cameroonian NGO",
 role: "NGO Joshua Konkankoh founded after 1996 Yaoundé organising. Ran Ndanifor Permaculture Ecovillage at Bafut from 2012 until the Anglophone crisis emptied it.",
 status: "current",
 layer: "education",
 year: "1996 (NGO work); site 2012",
 },
 {
 name: "Ndanifor Permaculture Ecovillage site, Bafut",
 kind: "Cameroonian NGO",
 role: "About five acres of demonstration gardens and a lodge. Looted and emptied in the 2016 Anglophone crisis. The dirt is not currently a functioning village of lots.",
 status: "historical",
 layer: "land",
 year: "2012–2016",
 },
 {
 name: "Global Ecovillage Network / Gaia Trust",
 kind: "Lateral movement association",
 role: "GEN membership; Gaia Trust Excellence Award 2015. Network recognition, not the Bafut landlord.",
 status: "associated",
 layer: "network",
 year: "2015 (award)",
 },
 ],

 basaisa: [
 {
 name: "Basaisa Community Development Association",
 kind: "Egyptian community development association",
 role: "The village association that is the public face of Arafa’s Sharqiya work. Rooftop PV, biogas, a 2017 solar station on its own roof.",
 status: "current",
 layer: "membership",
 year: "1970s (work from 1974)",
 },
 {
 name: "Basaisa village, Sharqiya",
 kind: "Egyptian community development association",
 role: "An existing Nile-Delta village ~95 km northeast of Cairo. Arafa began work here in 1974.",
 status: "current",
 layer: "land",
 year: "Village older; project 1974",
 },
 {
 name: "New Basaisa, Ras Sudr",
 kind: "Egyptian community development association",
 role: "Desert offshoot from 1992 in South Sinai: ~750 feddans of agriculture, 200 km from the old village. Associated holding.",
 status: "associated",
 layer: "land",
 year: "1992",
 },
 ],

 "boabeng-fiema": [
 {
 name: "Boabeng-Fiema Monkey Sanctuary",
 kind: "Ghanaian community sanctuary",
 role: "4.4 km² of forest and village where ~700 monkeys live in the streets. 1975 bye-law plus older sacred-animal law.",
 status: "current",
 layer: "land",
 year: "Bye-law 1975",
 },
 {
 name: "Boabeng and Fiema traditional authorities",
 kind: "Ghanaian community sanctuary",
 role: "Twin villages that passed the 1975 bye-law. Monkeys buried as children of the gods. You are of the village.",
 status: "current",
 layer: "membership",
 year: "1975 (bye-law)",
 },
 {
 name: "Ghana Wildlife Division",
 kind: "Associated public funder",
 role: "Later sanctuary frame and technical support. Associated, not the village landlord.",
 status: "associated",
 layer: "covenant",
 },
 ],

 fambidzanai: [
 {
 name: "Fambidzanai Permaculture Centre / Zimbabwe Institute of Permaculture",
 kind: "Zimbabwean private voluntary organisation",
 role: "ZIP-PVO12/92. Africa’s first dedicated permaculture centre, founded 1988 by John Wilson. The Stapleford campus is the teaching site.",
 status: "current",
 layer: "land",
 year: "1988 (centre); PVO 1992",
 },
 {
 name: "PELUM Zimbabwe",
 kind: "Lateral movement association",
 role: "Participatory Ecological Land Use Management network that grew in the same soil. Associated network, not the Stapleford landlord.",
 status: "associated",
 layer: "network",
 },
 ],

 guie: [
 {
 name: "Association Zoramb Naagtaaba (AZN)",
 kind: "Burkinabe village association",
 role: "Inter-village association founded 27 January 1989. Holds the Guiè work with neighbouring villages.",
 status: "current",
 layer: "membership",
 year: "1989",
 },
 {
 name: "Ferme pilote de Guiè",
 kind: "Burkinabe village association",
 role: "Pilot farm launched 14 December 1989. Hosts CFAR, the bocage-builders’ school. Wégoubri hedges, ponds, bunds.",
 status: "current",
 layer: "land",
 year: "1989",
 },
 {
 name: "Terre Verte",
 kind: "French rural-development NGO",
 role: "Associated French NGO (Landrecies). Publishes with AZN.",
 status: "associated",
 layer: "network",
 year: "From the 1989 work",
 },
 ],

 chikukwa: [
 {
 name: "Chikukwa Ecological Land Use Organisation (CELUO)",
 kind: "Zimbabwean community trust",
 role: "Successor face of CELUCT (1995). Six villages on Chimanimani communal land. Training centre at Chitekete.S. sense and.",
 status: "current",
 layer: "membership",
 year: "Trust 1995; clubs 1991",
 },
 {
 name: "Chikukwa communal lands",
 kind: "Zimbabwean community trust",
 role: "Six villages along ~15 km of hills. Communal tenure, not freehold plots. Springs, contours, woodlots.",
 status: "current",
 layer: "land",
 year: "Work from 1991",
 },
 {
 name: "CELUCT training centre, Chitekete",
 kind: "Zimbabwean community trust",
 role: "Kitchen, dormitory, halls. The public door for trainees.",
 status: "current",
 layer: "education",
 year: "1990s",
 },
 ],

 "il-ngwesi": [
 {
 name: "Ranchi Ya Il Ngwesi (Il Ngwesi Group Ranch)",
 kind: "Kenyan group ranch",
 role: "Maasai group ranch of the Il Lakipiak on Mukogodo. Committee and chairman for ~6,000 members. Equator Initiative: 8,645 ha conserved.",
 status: "current",
 layer: "land",
 year: "Conserved core 1995",
 },
 {
 name: "Il Ngwesi Eco-Lodge",
 kind: "Community enterprise",
 role: "Community-owned and community-run lodge built 1996 with USAID/KWS. Bandas on a rocky outcrop. Enterprise of the ranch.",
 status: "current",
 layer: "enterprise",
 year: "1996",
 },
 {
 name: "UNDP Equator Initiative",
 kind: "Associated public funder",
 role: "Equator Prize 2002. Recognition, not the Mukogodo landlord.",
 status: "associated",
 layer: "covenant",
 year: "2002",
 },
 ],

 lynedoch: [
 {
 name: "Lynedoch Development Company",
 kind: "South African Section 21 company",
 role: "Nonprofit developer. Bought 6 ha in 1999 for R3 million (old Drie Gewels Hotel). Took the development rights.",
 status: "current",
 layer: "land",
 year: "1999",
 },
 {
 name: "Lynedoch Home Owners Association",
 kind: "South African homeowners association",
 role: "Section 21 company required by the municipality. Every owner is a member, including the development company. Code of conduct is the daily law. An HOA.",
 status: "current",
 layer: "membership",
 year: "By 2004 transfer",
 },
 {
 name: "Sustainability Institute",
 kind: "South African Section 21 company",
 role: "Teaching and research campus founded 1999 by Eve Annecke and Mark Swilling on the same 6 ha. Associated education.",
 status: "current",
 layer: "education",
 year: "1999",
 },
 ],

 anja: [
 {
 name: "Association Anja Miray",
 kind: "Malagasy community association",
 role: "Village association founded 1999. Manages the 30-hectare reserve. Equator Prize 2012.",
 status: "current",
 layer: "membership",
 year: "1999",
 },
 {
 name: "Anja Community Reserve",
 kind: "Malagasy community association",
 role: "30 ha of woodland and lake at the Three Sisters granite. UNDP 2001. Ring-tailed lemurs, a gate, local guides.",
 status: "current",
 layer: "land",
 year: "2001",
 },
 {
 name: "UNDP Equator Initiative / GEF",
 kind: "Associated public funder",
 role: "UNDP helped found the reserve in 2001; Equator Prize 2012; GEF support.",
 status: "associated",
 layer: "covenant",
 year: "2001; prize 2012",
 },
 ],

 celo: [
 {
 name: "Celo Community, Inc.",
 kind: "North Carolina 501(c)(4) land-holding nonprofit",
 role: "Holds ~1,100–1,200 acres in the South Toe. Assigns land to members for a modest one-time refundable fee, like a lifetime lease. Members may own the house; they never own the land. EIN 56-6049967; tax-exempt April 1940 as a 501(c)(4) civic league.",
 status: "current",
 layer: "land",
 year: "1937; exempt 1940",
 identifier: "EIN 56-6049967",
 },
 {
 name: "Arthur Morgan School",
 kind: "501(c)(3) educational nonprofit",
 role: "Quaker boarding school, grades 7–9, founded 1962 by Elizabeth and Ernest Morgan on community land. Lessee, not the South Toe landlord.",
 status: "associated",
 layer: "education",
 year: "1962",
 },
 {
 name: "Camp Celo",
 kind: "501(c)(3) educational nonprofit",
 role: "Quaker farm camp on community land since 1948. A lease, not title.",
 status: "associated",
 layer: "education",
 year: "1948",
 },
 ],

 "sunrise-ranch": [
 {
 name: "Emissaries of Divine Light",
 kind: "Emissaries of Divine Light church",
 role: "Spiritual network founded 1932 by Lloyd Arthur Meeker (Uranda). Trustees elected by an international congress. The legal face of Sunrise Ranch.",
 status: "current",
 layer: "membership",
 year: "1932; ranch 1945",
 },
 {
 name: "Sunrise Ranch",
 kind: "Colorado retreat centre",
 role: "123-acre Eden Valley farm bought 1945 for $6,000. Conference and retreat centre staffed by a residential community of about 85. You come for a programme.",
 status: "current",
 layer: "land",
 year: "1945",
 },
 ],

 "ananda-village": [
 {
 name: "Ananda Church of Self-Realization",
 kind: "California church corporation",
 role: "Owns and controls non-residential land inside the Ananda Village Planned Development. The church layer of a cooperative spiritual community.",
 status: "current",
 layer: "land",
 year: "Village 1968–69",
 },
 {
 name: "Ananda Village housing",
 kind: "Ananda cooperative housing",
 role: "Community land plus individual investment in the housing inventory. Group housing and stand-alone homes. Speculation in the lot market is the thing they designed out.",
 status: "current",
 layer: "membership",
 },
 {
 name: "The Expanding Light Retreat / Ananda Meditation Retreat",
 kind: "501(c)(3) educational nonprofit",
 role: "The public doors on the same 700 acres. Courses and guest stays. Not the residential landlord.",
 status: "current",
 layer: "education",
 },
 ],

 sandhill: [
 {
 name: "Sandhill Farm (current nonprofit land project)",
 kind: "Missouri nonprofit land project",
 role: "Members are the board. 168 acres of fields and forest held in common. Monthly contributions cover taxes, utilities, and upkeep. Private dwellings since 2019.",
 status: "current",
 layer: "land",
 year: "Restructure 2019",
 },
 {
 name: "Sandhill Farm (FEC income-sharing era)",
 kind: "Nonprofit corporation (common-purse era)",
 role: "1974–2019 egalitarian commune, Federation of Egalitarian Communities, famous for sorghum syrup. The common purse ended; the 168 acres did not become parcels.",
 status: "historical",
 layer: "membership",
 year: "1974–2019",
 },
 ],

 linnaea: [
 {
 name: "Turtle Island Earth Stewards / Linnaea Farm Society",
 kind: "BC land trust society",
 role: "No-sale land trust on 314 acres / 127 ha at Gunflint Lake. Title path: Hansen ranch → Robert Cabot 1978 → Trust for Public Land → Turtle Island Earth Stewards. You steward.",
 status: "current",
 layer: "land",
 year: "1978",
 },
 {
 name: "The Land Conservancy of BC / Quadra Island Conservancy covenant",
 kind: "BC conservation covenant",
 role: "1999 conservation covenant on the 127 hectares. A use restriction, not the operating farm and of house lots.",
 status: "current",
 layer: "covenant",
 year: "1999",
 },
 {
 name: "Trust for Public Land",
 kind: "BC land trust society",
 role: "U.S. charitable land trust that took Cabot’s title in 1978 and passed it, restricted, to Turtle Island Earth Stewards. Historical conveyor, not today’s Cortes landlord.",
 status: "historical",
 layer: "land",
 year: "1978",
 },
 ],

 "lost-valley": [
 {
 name: "Lost Valley Education Center",
 kind: "501(c)(3) educational nonprofit",
 role: "Oregon 501(c)(3) on 87 acres at Dexter. Courses, Community Experience Weeks, lodging.",
 status: "current",
 layer: "education",
 year: "1989",
 },
 {
 name: "Meadowsong Ecovillage",
 kind: "501(c)(3) educational nonprofit",
 role: "Residential community on the same title: affordable housing and land access for staff, renters, and volunteers. A programme of the charity.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Shiloh Youth Revival Centers (“The Land”)",
 kind: "Independent religious congregation",
 role: "Late-1960s builder of the Dexter site from recycled houses. Sold in the 1980s to people who wanted an eco-village. Historical, not the current landlord.",
 status: "historical",
 layer: "land",
 year: "Late 1960s–1980s",
 },
 ],

 windsong: [
 {
 name: "WindSong Cohousing strata corporation",
 kind: "BC strata corporation",
 role: "34 individually owned townhomes on 5.8 acres in Walnut Grove, completed 19 July 1996. A condo/HOA with a cohousing common house and a consensus culture. Homes sell when a household leaves.",
 status: "current",
 layer: "membership",
 year: "1996",
 },
 {
 name: "Yorkson Creek setback / protected greenspace",
 kind: "BC conservation covenant",
 role: "About 4 of 5.8 acres kept as forest, wetland, and salmon-creek setback after a year-long fight with the federal environment ministry. A use restriction.",
 status: "current",
 layer: "covenant",
 year: "1995–96",
 },
 ],

 "camphill-ontario": [
 {
 name: "Camphill Communities Ontario",
 kind: "Canadian registered charity",
 role: "Registered charity #106835879 RR0001. Supports adults with intellectual and developmental disabilities in Simcoe County. Nottawasaga farm (290 acres) plus Sophia Creek in Barrie.",
 status: "current",
 layer: "land",
 year: "1986",
 identifier: "Charity #106835879 RR0001",
 },
 {
 name: "Camphill Foundation Canada",
 kind: "Canadian registered charity",
 role: "Associated fundraising, not the Angus title.",
 status: "associated",
 layer: "network",
 },
 {
 name: "Camphill Association of North America",
 kind: "Lateral movement association",
 role: "Full-member affiliation. Network, not the Nottawasaga landlord. Distinct from Camphill Village Copake in this atlas.",
 status: "associated",
 layer: "network",
 },
 ],

 yarrow: [
 {
 name: "Yarrow Ecovillage Society (YES) Cooperative",
 kind: "BC Community Services Cooperative",
 role: "Bought the 25-acre Yarrow dairy in 2002. Umbrella co-op. Chilliwack’s 2006 Ecovillage zoning sits on this project.",
 status: "current",
 layer: "land",
 year: "August 2002",
 },
 {
 name: "Groundswell Cohousing strata",
 kind: "BC strata corporation",
 role: "33 homes. A BC condo association with a cohousing culture, in place by 2013 after Durrett/McCamant. You may buy a unit if one is for sale.",
 status: "current",
 layer: "membership",
 year: "2013",
 },
 {
 name: "Yarrow farm cooperative / CSA",
 kind: "BC farm cooperative",
 role: "About 20 acres certified organic, leased to a succession of farm entities (Osprey, Ohm, Soban, Ripple Creek, Chubby Roots, The Farmacy). CSA and a food forest on Stewart Creek. Not the housing landlord.",
 status: "current",
 layer: "enterprise",
 year: "Farm 2003",
 },
 ],

 ecoreality: [
 {
 name: "EcoReality Co-op",
 kind: "BC agricultural cooperative",
 role: "Not-for-profit agricultural co-op, tax-exempt under Income Tax Act s. 149(1)(e). Holds 43 acres of Class 2 ALR soil on Fulford-Ganges Road. Member-funders, not strata lots.",
 status: "current",
 layer: "land",
 year: "1 October 2005",
 },
 {
 name: "Adjoining 61-acre community farmland",
 kind: "BC farm cooperative",
 role: "Neighbour site, not EcoReality’s title. The co-op’s published map puts parkland behind and this farmland beside.",
 status: "associated",
 layer: "covenant",
 },
 ],

  ...asiaLegalEntities,
  ...russiaLegalEntities,
  ...usaMoreLegalEntities,
  ...polandLegalEntities,
  ...volunteerBatchLegalEntities,
  ...formerLegalEntities,
  ...formerMoreLegalEntities,
  ...formerClosedLegalEntities,
  ...livingMoreLegalEntities,
  ...livingBatch2LegalEntities,
  ...livingBatch3LegalEntities,
  ...livingBatch4LegalEntities,
  ...livingBatch5LegalEntities,
  ...livingBatch6LegalEntities,
  ...livingBatch7LegalEntities,
  ...livingBatch8LegalEntities,
  ...livingBatch9LegalEntities,
  ...livingBatch10LegalEntities,
  ...livingBatch11LegalEntities,
  ...livingBatch12LegalEntities,
  ...livingBatch13LegalEntities,
  ...livingBatch14LegalEntities,
  ...livingBatch15LegalEntities,
  ...livingBatch16LegalEntities,
  ...livingBatch17LegalEntities,
  ...livingBatch18LegalEntities,
  ...livingBatch19LegalEntities,
  ...livingBatch20LegalEntities,
  ...livingBatch21LegalEntities,
  ...livingBatch22LegalEntities,
  ...livingBatch23LegalEntities,
  ...livingBatch24LegalEntities,
  ...livingBatch25LegalEntities,
  ...livingBatch26LegalEntities,
  ...livingBatch27LegalEntities,
  ...livingBatch28LegalEntities,
  ...livingBatch29LegalEntities,
  ...livingBatch30LegalEntities,
  ...livingBatch31LegalEntities,
  ...livingBatch32LegalEntities,
  ...livingBatch33LegalEntities,
};

export function entitiesFor(slug: string): LegalEntity[] {
 return legalEntitiesBySlug[slug] ?? [];
}

export function entityCount(slug: string): number {
 return entitiesFor(slug).length;
}

export function groupEntities(entities: LegalEntity[]) {
 return layerOrder
.map((layer) => ({
 layer,
 label: layerLabels[layer],
 items: entities.filter((e) => e.layer === layer),
 }))
.filter((group) => group.items.length > 0);
}
