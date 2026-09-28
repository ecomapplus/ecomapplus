import { communities } from "./communities";
import { compareCountries } from "@/lib/country-scope";
import { legalFormsFor } from "./legal-entities";
import { charterKinds, type CharterKind } from "./charter";

export type Jurisdiction = {
 country: string;
 adjective: string;
 landUnit: "acres" | "hectares";
 filingDesk: string;
 language: string;
 nativeNote?: string;
};

export const jurisdictions: Jurisdiction[] = [
 {
 country: "United States",
 adjective: "U.S.",
 landUnit: "acres",
 filingDesk: "the state corporations office and, for tax-exempt status, the Internal Revenue Service",
 language: "English",
 },
 {
 country: "United Kingdom",
 adjective: "U.K.",
 landUnit: "hectares",
 filingDesk: "Companies House, the FCA Mutuals Public Register, and/or OSCR in Scotland",
 language: "English",
 },
 {
 country: "Ireland",
 adjective: "Irish",
 landUnit: "hectares",
 filingDesk: "the Companies Registration Office and, if a charity, the Charities Regulator",
 language: "English",
 },
 {
 country: "Australia",
 adjective: "Australian",
 landUnit: "hectares",
 filingDesk: "ASIC, the state titles office, and (in Queensland) the body-corporate records under the BCCM Act",
 language: "English",
 },
 {
 country: "New Zealand",
 adjective: "New Zealand",
 landUnit: "hectares",
 filingDesk: "the Companies Office and Charities Services",
 language: "English",
 },
 {
 country: "Germany",
 adjective: "German",
 landUnit: "hectares",
 filingDesk: "the Vereinsregister or Handelsregister, and the Finanzamt for charitable status",
 language: "German",
 nativeNote:
 "Official filings in Germany must be in German. This is an English working draft a notary or solicitor will translate.",
 },
 {
 country: "Austria",
 adjective: "Austrian",
 landUnit: "hectares",
 filingDesk:
 "the Vereinsbehörde (district authority / Magistrat) for a Verein, the Firmenbuch for a company or cooperative, and the Grundbuch for title",
 language: "German",
 nativeNote:
 "Official filings in Austria must be in German. This is an English working draft a notary will translate.",
 },
 {
 country: "Denmark",
 adjective: "Danish",
 landUnit: "hectares",
 filingDesk: "Erhvervsstyrelsen (Danish Business Authority) and the relevant andelsbolig / association rules",
 language: "Danish",
 nativeNote: "Official filings in Denmark are in Danish. This is an English working draft.",
 },
 {
 country: "Spain",
 adjective: "Spanish",
 landUnit: "hectares",
 filingDesk: "the Registro de Asociaciones and, for land, the municipal or regional administration",
 language: "Spanish",
 nativeNote:
 "Official filings in Spain must be in Spanish (and, where required, a co-official language). This is an English working draft.",
 },
 {
 country: "Portugal",
 adjective: "Portuguese",
 landUnit: "hectares",
 filingDesk: "the Conservatória do Registo Comercial",
 language: "Portuguese",
 nativeNote: "Official filings in Portugal must be in Portuguese. This is an English working draft.",
 },
 {
 country: "Italy",
 adjective: "Italian",
 landUnit: "hectares",
 filingDesk: "the Registro delle Imprese and, for a social cooperative, the cooperative section",
 language: "Italian",
 nativeNote: "Official filings in Italy must be in Italian. This is an English working draft.",
 },
 {
 country: "Greece",
 adjective: "Greek",
 landUnit: "hectares",
 filingDesk:
 "the General Commercial Registry (GEMI) for a company, the court of first instance / Ministry of Interior for an association or AMKE, and the Hellenic Cadastre (Κτηματολόγιο) for title",
 language: "Greek",
 nativeNote: "Official filings in Greece must be in Greek. This is an English working draft.",
 },
 {
 country: "Iceland",
 adjective: "Icelandic",
 landUnit: "hectares",
 filingDesk: "the Icelandic register of self-governing institutions",
 language: "Icelandic",
 nativeNote: "Official filings in Iceland are in Icelandic. This is an English working draft.",
 },
 {
 country: "India",
 adjective: "Indian",
 landUnit: "hectares",
 filingDesk: "the Registrar of Societies (Societies Registration Act, 1860) or, where an Act of Parliament created the body, that statutory desk, and the State where the land sits",
 language: "English",
 },
 {
 country: "Israel",
 adjective: "Israeli",
 landUnit: "hectares",
 filingDesk: "the Registrar of Cooperative Societies and the Israel Land Authority",
 language: "Hebrew",
 nativeNote: "Official filings in Israel are typically in Hebrew. This is an English working draft.",
 },
 {
 country: "Japan",
 adjective: "Japanese",
 landUnit: "hectares",
 filingDesk: "the prefectural government for a specified nonprofit corporation, or the legal-affairs bureau for a general incorporated foundation",
 language: "Japanese",
 nativeNote: "Official filings in Japan must be in Japanese. This is an English working draft.",
 },
 {
 country: "Colombia",
 adjective: "Colombian",
 landUnit: "hectares",
 filingDesk: "the Cámara de Comercio and the municipal/DIAN regime for ESAL nonprofits",
 language: "Spanish",
 nativeNote: "Official filings in Colombia must be in Spanish. This is an English working draft.",
 },
 {
 country: "Costa Rica",
 adjective: "Costa Rican",
 landUnit: "hectares",
 filingDesk: "the Registro Nacional (asociaciones, fundaciones, sociedades, and folio real) and, for a cooperativa, INFOCOOP",
 language: "Spanish",
 nativeNote:
 "Official filings in Costa Rica must be in Spanish. This is an English working draft a notary will translate.",
 },
 {
 country: "Nicaragua",
 adjective: "Nicaraguan",
 landUnit: "hectares",
 filingDesk: "the Registro de Personas Jurídicas sin Fines de Lucro (Ley 147) and the Registro Público de la Propiedad",
 language: "Spanish",
 nativeNote: "Official filings in Nicaragua must be in Spanish. This is an English working draft.",
 },
 {
 country: "Guatemala",
 adjective: "Guatemalan",
 landUnit: "hectares",
 filingDesk: "the Registro de Personas Jurídicas and the Registro General de la Propiedad",
 language: "Spanish",
 nativeNote: "Official filings in Guatemala must be in Spanish. This is an English working draft.",
 },
 {
 country: "Belize",
 adjective: "Belizean",
 landUnit: "acres",
 filingDesk: "the ministry responsible for NGOs under the Non-Governmental Organisations Act, and the Land Registry",
 language: "English",
 },
 {
 country: "El Salvador",
 adjective: "Salvadoran",
 landUnit: "hectares",
 filingDesk: "the Registro de Asociaciones y Fundaciones sin Fines de Lucro and the Centro Nacional de Registros",
 language: "Spanish",
 nativeNote: "Official filings in El Salvador must be in Spanish. This is an English working draft.",
 },
 {
 country: "Canada",
 adjective: "Canadian",
 landUnit: "acres",
 filingDesk:
 "the provincial corporate or co-operative registrar (in Quebec, the Registraire des entreprises) and the land-titles office; CRA if a registered charity",
 language: "English",
 nativeNote:
 "In Quebec, official filings are typically in French. This is an English working draft a notary will translate.",
 },
 {
 country: "Mexico",
 adjective: "Mexican",
 landUnit: "hectares",
 filingDesk:
 "the Registro Público de la Propiedad and, for an asociación civil or cooperativa, a notary plus the relevant public registry and SAT/RFC",
 language: "Spanish",
 nativeNote: "Official filings in Mexico must be in Spanish. This is an English working draft a notary will translate.",
 },
 {
 country: "France",
 adjective: "French",
 landUnit: "hectares",
 filingDesk:
 "the greffe du tribunal de commerce / INPI, the prefecture for a loi 1901 association, and the service de publicité foncière for land",
 language: "French",
 nativeNote: "Official filings in France must be in French. This is an English working draft a notaire will translate.",
 },
 {
 country: "Hungary",
 adjective: "Hungarian",
 landUnit: "hectares",
 filingDesk: "the Hungarian company / civil-organisation court register and the land registry (Földhivatal)",
 language: "Hungarian",
 nativeNote: "Official filings in Hungary are in Hungarian. This is an English working draft.",
 },
 {
 country: "Finland",
 adjective: "Finnish",
 landUnit: "hectares",
 filingDesk: "the Finnish Patent and Registration Office (PRH) for associations and companies, and the National Land Survey for title",
 language: "Finnish",
 nativeNote:
 "Official filings in Finland are in Finnish or Swedish. This is an English working draft.",
 },
 {
 country: "Norway",
 adjective: "Norwegian",
 landUnit: "hectares",
 filingDesk: "Brønnøysundregistrene (Enhetsregisteret / Foretaksregisteret) and the land registry (Kartverket)",
 language: "Norwegian",
 nativeNote: "Official filings in Norway are in Norwegian. This is an English working draft.",
 },
 {
 country: "Sweden",
 adjective: "Swedish",
 landUnit: "hectares",
 filingDesk: "Bolagsverket for economic associations and companies, Länsstyrelsen for foundations, and Lantmäteriet for title",
 language: "Swedish",
 nativeNote: "Official filings in Sweden are in Swedish. This is an English working draft.",
 },
 {
 country: "Netherlands",
 adjective: "Dutch",
 landUnit: "hectares",
 filingDesk: "the Kamer van Koophandel (KVK) and the Kadaster for land",
 language: "Dutch",
 nativeNote: "Official filings in the Netherlands must be in Dutch. This is an English working draft.",
 },
 {
 country: "Brazil",
 adjective: "Brazilian",
 landUnit: "hectares",
 filingDesk:
 "the Junta Comercial / CNPJ, a cartório de registro de pessoas jurídicas for an associação or instituto, and the Registro de Imóveis for title",
 language: "Portuguese",
 nativeNote: "Official filings in Brazil must be in Portuguese. This is an English working draft.",
 },
 {
 country: "Argentina",
 adjective: "Argentine",
 landUnit: "hectares",
 filingDesk:
 "the Inspección General de Justicia (CABA) or the provincial personería jurídica office, INAES for a cooperativa, and the Registro de la Propiedad Inmueble",
 language: "Spanish",
 nativeNote: "Official filings in Argentina must be in Spanish. This is an English working draft.",
 },
 {
 country: "Chile",
 adjective: "Chilean",
 landUnit: "hectares",
 filingDesk:
 "the Registro Civil (asociaciones and fundaciones), the Conservador de Bienes Raíces for title, and the copropiedad / junta de vecinos rules that actually apply",
 language: "Spanish",
 nativeNote: "Official filings in Chile must be in Spanish. This is an English working draft.",
 },
 {
 country: "Peru",
 adjective: "Peruvian",
 landUnit: "hectares",
 filingDesk: "SUNARP for associations and title, and the religious-entity or asociación filing that fits the community",
 language: "Spanish",
 nativeNote: "Official filings in Peru must be in Spanish. This is an English working draft.",
 },
 {
 country: "Uruguay",
 adjective: "Uruguayan",
 landUnit: "hectares",
 filingDesk: "INACOOP for cooperatives, the Ministry of Education and Culture for civil associations, and the Registro de la Propiedad",
 language: "Spanish",
 nativeNote: "Official filings in Uruguay must be in Spanish. This is an English working draft.",
 },
 {
 country: "Ecuador",
 adjective: "Ecuadorian",
 landUnit: "hectares",
 filingDesk:
 "the Superintendencia (economía popular y solidaria, or companies) for the chosen form, and the Registro de la Propiedad for title",
 language: "Spanish",
 nativeNote: "Official filings in Ecuador must be in Spanish. This is an English working draft.",
 },
 {
 country: "Egypt",
 adjective: "Egyptian",
 landUnit: "hectares",
 filingDesk:
 "GAFI for companies and the Ministry of Social Solidarity for associations and foundations; the real-estate registry for title",
 language: "Arabic",
 nativeNote: "Official filings in Egypt are in Arabic. This is an English working draft.",
 },
 {
 country: "Thailand",
 adjective: "Thai",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of Interior for a public-benefit foundation, and the Land Department for title",
 language: "Thai",
 nativeNote: "Official filings in Thailand must be in Thai. This is an English working draft.",
 },
 {
 country: "Senegal",
 adjective: "Senegalese",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of the Interior for an ONG or association, and the land registry / OHADA commercial register as the form requires",
 language: "French",
 nativeNote: "Official filings in Senegal are in French. This is an English working draft.",
 },
 {
 country: "Benin",
 adjective: "Beninese",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of the Interior for an ONG, the RCCM for a commercial form, and the land registry for title",
 language: "French",
 nativeNote: "Official filings in Benin are in French. This is an English working draft.",
 },
 {
 country: "South Africa",
 adjective: "South African",
 landUnit: "hectares",
 filingDesk:
 "CIPC for a nonprofit company, the NPO Directorate if you register there, and the Deeds Office for title",
 language: "English",
 },
 {
 country: "Estonia",
 adjective: "Estonian",
 landUnit: "hectares",
 filingDesk: "the e-Äriregister for an MTÜ or company, and the Land Register for title",
 language: "Estonian",
 nativeNote: "Official filings in Estonia are in Estonian. This is an English working draft.",
 },
 {
 country: "Croatia",
 adjective: "Croatian",
 landUnit: "hectares",
 filingDesk:
 "the Register of Associations (Registar udruga) and the land registry / cadastre for title",
 language: "Croatian",
 nativeNote: "Official filings in Croatia are in Croatian. This is an English working draft.",
 },
 {
 country: "Turkey",
 adjective: "Turkish",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of Trade for a cooperative, and Tapu Kadastro for title",
 language: "Turkish",
 nativeNote: "Official filings in Turkey are in Turkish. This is an English working draft.",
 },
 {
 country: "Zimbabwe",
 adjective: "Zimbabwean",
 landUnit: "hectares",
 filingDesk:
 "the Registrar of Companies or the Private Voluntary Organisations Act desk for the chosen shell, and the Deeds Registry for title",
 language: "English",
 },
 {
 country: "Switzerland",
 adjective: "Swiss",
 landUnit: "hectares",
 filingDesk:
 "the cantonal Handelsregister / Zefix for an AG or Verein with commercial activity, and the Grundbuch for title",
 language: "German",
 nativeNote:
 "Official filings in German-speaking cantons are in German. This is an English working draft a notary will translate.",
 },
 {
 country: "Zambia",
 adjective: "Zambian",
 landUnit: "hectares",
 filingDesk:
 "the Patents and Companies Registration Agency (PACRA) for a company or NGO, the Registrar of Societies, and the Ministry of Lands for title",
 language: "English",
 },
 {
 country: "Ethiopia",
 adjective: "Ethiopian",
 landUnit: "hectares",
 filingDesk:
 "the Federal Cooperative Agency or a regional cooperative office, and the rural land administration desk, land is constitutionally state-and-people title",
 language: "Amharic",
 nativeNote: "Official filings in Ethiopia are typically in Amharic. This is an English working draft.",
 },
 {
 country: "Kenya",
 adjective: "Kenyan",
 landUnit: "hectares",
 filingDesk:
 "the NGO Coordination Board or the Registrar of Societies for a CBO or self-help group, and the Ministry of Lands / county lands office for title",
 language: "English",
 },
 {
 country: "Uganda",
 adjective: "Ugandan",
 landUnit: "hectares",
 filingDesk:
 "the NGO Bureau (National Bureau for NGOs) under the NGO Act, and the land registry / district land board for title",
 language: "English",
 },
 {
 country: "Ghana",
 adjective: "Ghanaian",
 landUnit: "hectares",
 filingDesk:
 "the Registrar-General’s Department for a company or cooperative, the Forestry Commission / Wildlife Division for a CREMA, and the Lands Commission for title",
 language: "English",
 },
 {
 country: "Namibia",
 adjective: "Namibian",
 landUnit: "hectares",
 filingDesk:
 "the Master of the High Court for a trust, BIPA for a company or association, and the Deeds Registry for title",
 language: "English",
 },
 {
 country: "Cameroon",
 adjective: "Cameroonian",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of Territorial Administration for an association or NGO, and the land registry (conservation foncière) for title",
 language: "French",
 nativeNote:
 "Official filings in Cameroon are in French or English depending on the region. This is an English working draft.",
 },
 {
 country: "Burkina Faso",
 adjective: "Burkinabe",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of Territorial Administration for an association, and the land registry / customary authorities for rural title",
 language: "French",
 nativeNote: "Official filings in Burkina Faso are in French. This is an English working draft.",
 },
 {
 country: "Eswatini",
 adjective: "Eswatini",
 landUnit: "hectares",
 filingDesk:
 "the Registrar of Companies for a company or association, and the Ministry of Natural Resources / Swazi Nation Land authorities for title",
 language: "English",
 },
 {
 country: "Madagascar",
 adjective: "Malagasy",
 landUnit: "hectares",
 filingDesk:
 "the service des associations / Ministry of the Interior for an association, and the land registry (foncier) for title",
 language: "French",
 nativeNote:
 "Official filings in Madagascar are typically in French or Malagasy. This is an English working draft.",
 },
 {
 country: "South Korea",
 adjective: "Korean",
 landUnit: "hectares",
 filingDesk:
 "the cooperative registry under the Framework Act on Cooperatives, or the court registry for an association / nonprofit, and the registry office for title",
 language: "Korean",
 nativeNote: "Official filings in South Korea must be in Korean. This is an English working draft.",
 },
 {
 country: "Sri Lanka",
 adjective: "Sri Lankan",
 landUnit: "hectares",
 filingDesk:
 "the Registrar of Companies or Registrar of Societies for the chosen shell, and the Land Registry for title",
 language: "Sinhala",
 nativeNote:
 "Official filings in Sri Lanka are typically in Sinhala (or Tamil). This is an English working draft.",
 },
 {
 country: "Taiwan",
 adjective: "Taiwanese",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of the Interior for a community development association or foundation, and the land office (地政) for title",
 language: "Chinese",
 nativeNote:
 "Official filings in Taiwan are in Traditional Chinese. This is an English working draft.",
 },
 {
 country: "Indonesia",
 adjective: "Indonesian",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of Law for a yayasan (foundation) or perkumpulan, and ATR/BPN for title",
 language: "Indonesian",
 nativeNote: "Official filings in Indonesia must be in Indonesian. This is an English working draft.",
 },
 {
 country: "China",
 adjective: "Chinese",
 landUnit: "hectares",
 filingDesk:
 "the civil-affairs bureau for a social organization, and the natural-resources / land bureau for rural or peri-urban land-use rights",
 language: "Chinese",
 nativeNote: "Official filings in China must be in Chinese. This is an English working draft.",
 },
 {
 country: "Russia",
 adjective: "Russian",
 landUnit: "hectares",
 filingDesk:
 "the Ministry of Justice for an NPO, ANO, public association, or religious organization, and Rosreestr for land",
 language: "Russian",
 nativeNote: "Official filings in Russia must be in Russian. This is an English working draft.",
 },
 {
 country: "Poland",
 adjective: "Polish",
 landUnit: "hectares",
 filingDesk:
 "KRS (Krajowy Rejestr Sądowy) for a fundacja, stowarzyszenie, spółdzielnia, or spółka z o.o., and the land-and-mortgage register (księga wieczysta) for title",
 language: "Polish",
 nativeNote: "Official filings in Poland must be in Polish. This is an English working draft.",
 },
 {
 country: "Philippines",
 adjective: "Philippine",
 landUnit: "hectares",
 filingDesk:
 "the Securities and Exchange Commission for a foundation or nonstock corporation, and the Registry of Deeds for title",
 language: "English",
 },
];

export function jurisdictionFor(country: string): Jurisdiction | undefined {
 return jurisdictions.find((j) => j.country === country);
}

export const allCountries = jurisdictions.map((j) => j.country);

export function countriesInAtlas() {
 return Array.from(new Set(communities.map((c) => c.country))).sort(compareCountries);
}

export function communitiesInCountry(country: string) {
 return communities.filter((c) => c.country === country);
}

export function formsUsedInCountry(country: string) {
 const set = new Set<string>();
 for (const c of communitiesInCountry(country)) {
 for (const form of legalFormsFor(c.slug)) set.add(form);
 }
 return set;
}

export function kindsForCountry(country: string): { used: CharterKind[]; other: CharterKind[] } {
 const usedSet = formsUsedInCountry(country);
 const used = charterKinds.filter((k) => usedSet.has(k.form));
 const other = charterKinds.filter((k) => !usedSet.has(k.form));
 return { used, other };
}

/** Governing statute / filing line that actually changes with country. */
export function statuteFor(form: string, country: string, state: string): string {
 const st = state.trim();
 const usState = st ? `the State of ${st}`: "the State of incorporation";
 const table: Record<string, Partial<Record<string, string>>> = {
 "501(c)(3)": {
 "United States": `State nonprofit corporation law of ${usState}; Internal Revenue Code § 501(c)(3); IRS Form 1023 or 1023-EZ.`,
 },
 "501(c)(2)": {
 "United States": `State corporation law of ${usState}; Internal Revenue Code § 501(c)(2); IRS Form 1024. Parent must be a 501(c)(3).`,
 },
 "501(d) corporation": {
 "United States": `State corporation law of ${usState}; Internal Revenue Code § 501(d) (apostolic / communal). Members report allocated income.`,
 },
 "Community land trust": {
 "United States": `State nonprofit corporation law of ${usState}; ground leases recorded in the county land records; often paired with IRS 501(c)(3).`,
 "United Kingdom": `Typically a Community Benefit Society or a company limited by guarantee, with an asset lock, registered with the FCA or Companies House.`,
 Australia: `Usually a company limited by guarantee (ASIC) holding freehold, with registered leases and a restrictive covenant on title.`,
 "New Zealand": `Charitable trust or incorporated society holding land, registered with Charities Services; occupation by licence or lease.`,
 },
 "Ground lease": {
 "United States": `Recorded leasehold under the real-property law of ${usState}; often 99 years, renewable.`,
 "United Kingdom": `Long lease under English/Scottish land law; register at the Land Registry / Registers of Scotland.`,
 Australia: `Lease registered on title under the state Torrens system.`,
 },
 "Housing cooperative": {
 "United States": `State cooperative-corporation or nonprofit law of ${usState}; occupancy (proprietary) lease; optional IRC § 216.`,
 Germany: `Genossenschaft under the Genossenschaftsgesetz (GenG), or occupancy inside an e.V.; one member, one vote.`,
 Austria: `Genossenschaft under the Genossenschaftsgesetz, registered in the Firmenbuch; one member, one vote. Occupancy by membership, not a Wohnungseigentum lot unless you choose that form.`,
 Denmark: `Andelsboligforening (cooperative housing association) under Danish housing-cooperative practice.`,
 Australia: `Co-operative under the Co-operatives National Law as adopted in the State; or a company limited by shares with co-op rules.`,
 "United Kingdom": `Co-operative society under the Co-operative and Community Benefit Societies Act 2014 (FCA Mutuals Register).`,
 "New Zealand": `Co-operative company or industrial and provident society; occupancy by share, not a unit title.`,
 Ireland: `Industrial and provident society or CLG with co-operative rules, filed at the CRO.`,
 "Costa Rica": `Cooperativa under Ley de Asociaciones Cooperativas (Ley 4179) and INFOCOOP; one member, one vote. An agricultural cooperativa may also house its members on cooperative land.`,
 Canada: `Provincial co-operative statute, in Ontario, the Co-operative Corporations Act; in British Columbia, the Cooperative Association Act (including a Community Services / non-profit cooperative). One member, one vote; occupancy by share, not a condominium unit.`,
 Mexico: `Sociedad cooperativa under the Ley General de Sociedades Cooperativas; estatutos before a notary; one member, one vote. Housing may sit on cooperative land rather than subdivided lots.`,
 France: `Société coopérative (SCOP, SCIC, or agricultural cooperative under the rural code) filed at the greffe; one member, one vote. Land may sit in the cooperative or in a separate foncière / foundation. Occupancy by membership, not a lot sale.`,
 Hungary: `Szövetkezet under the Civil Code / cooperative statute; one member, one vote. Residential occupancy by membership, not a condominium unit.`,
 Finland: `Osuuskunta registered at PRH; one member, one vote. Occupancy by share, not an asunto-osakeyhtiö apartment.`,
 Norway: `Borettslag or boligkooperativ registered at Brønnøysund; one member, one vote. Occupancy by share, not a freehold eierseksjon unless you choose that form instead.`,
 Sweden: `Ekonomisk förening (or bostadsrättsförening if you mean condo-like shares) registered at Bolagsverket; one member, one vote.`,
 Netherlands: `Wooncoöperatie or other cooperative association at the KVK; one member, one vote. Occupancy by membership, not a VvE apartment unless you choose that form.`,
 Spain: `Cooperativa under the state Cooperatives Act and the relevant Autonomous Community law; one member, one vote. Occupancy by membership, not a propiedad horizontal lot.`,
 Italy: `Società cooperativa (including a cooperativa sociale di comunità) under the Civil Code and cooperative legislation; Registro delle Imprese, cooperative section; one member, one vote.`,
 Brazil: `Cooperativa under Lei 5.764/1971 and the Civil Code, registered in the OCB system / Junta Comercial; one member, one vote. Occupancy by membership, not a condomínio lot unless you choose that form.`,
 Argentina: `Cooperativa under the Ley de Cooperativas, registered at INAES; one member, one vote. Occupancy by membership, not a propiedad horizontal unit.`,
 Uruguay: `Cooperativa under Ley 18.407 de Cooperativas; INACOOP is the national institute. One member, one vote. This is not a FUCVAM housing-cooperative apartment unless you actually form one.`,
 Chile: `Cooperativa de vivienda under the Ley General de Cooperativas; one member, one vote. Distinct from copropiedad (Ley 21.442) and from a junta de vecinos.`,
 Colombia: `Cooperativa under Ley 79 de 1988 and the Cámara de Comercio; one member, one vote. Occupancy by membership, not a copropiedad lot unless you choose that form.`,
 Ecuador: `Cooperativa under the Ley Orgánica de Economía Popular y Solidaria; Superintendencia de Economía Popular y Solidaria. One member, one vote.`,
 Peru: `Cooperativa under the Ley General de Cooperativas; registered as required. One member, one vote. Occupancy by membership, not a SUNARP lot sale.`,
 Egypt: `Cooperative under Egyptian cooperative legislation, filed as required. One member, one vote. Occupancy by membership, not a Sharqia lot sale. A holding of trading companies is a different form.`,
 Thailand: `Cooperative under the Cooperative Act, registered with the Cooperative Promotion Department. One member, one vote. Occupancy by membership, not a Land Department lot sale.`,
 Senegal: `Coopérative or GIE under OHADA / Senegalese cooperative practice; one member, one vote. Occupancy by membership, not a titled lot sale.`,
 Benin: `Coopérative under Beninese / OHADA cooperative practice; one member, one vote. A teaching NGO campus is a different form.`,
 "South Africa": `Co-operative under the Co-operatives Act 14 of 2005, registered at CIPC; one member, one vote. Occupancy by membership, not a sectional-title unit unless you choose that form.`,
 Estonia: `Tulundusühistu (commercial association / cooperative) at the Äriregister; one member, one vote. Occupancy by membership, not a korteriühistu apartment.`,
 Croatia: `Zadruga under the Cooperatives Act; one member, one vote. Occupancy by membership, not a etažirano apartment. An udruga (association) is a different form.`,
 Turkey: `Kooperatif under the Cooperatives Law (Kooperatifler Kanunu, Law 1163) and the Ministry of Trade; one member, one vote. An environmental cooperative is still a cooperative, not a Toplu Konut housing-block of apartments.`,
 Zimbabwe: `Co-operative under the Co-operative Societies Act; one member, one vote. Occupancy by membership, not a Deeds Registry lot sale.`,
 Switzerland: `Wohnbaugenossenschaft / cooperative under the Code of Obligations and cantonal practice; one member, one vote. Occupancy by membership, not Stockwerkeigentum unless you choose that form.`,
 "South Korea": `Cooperative under the Framework Act on Cooperatives (협동조합 기본법, 2012). One member, one vote. Occupancy by cooperation, not a mountain lot of Seongmisan.`,
 Poland: `Spółdzielnia under the Cooperative Law (Prawo spółdzielcze), registered in KRS; one member, one vote. An agricultural spółdzielnia is occupancy and produce by membership, not a księga wieczysta lote sale.`,
 },
 "Limited-equity co-op": {
 "United States": `State co-op or nonprofit law of ${usState}; resale formula in the bylaws; often stacked with a community land trust.`,
 },
 LLC: {
 "United States": `Limited Liability Company Act of ${usState}; this operating agreement; optional partnership tax election.`,
 },
 "Homeowners association": {
 "United States": `Recorded declaration (CC&Rs) under the real-property law of ${usState}; incorporated association; state HOA / planned-community statute where it applies.`,
 "Costa Rica": `Condominio under Ley Reguladora de la Propiedad en Condominio (Ley 7933) and the Reglamento de Condominio y Urbanizaciones; recorded at the Registro Nacional. Private unit plus an undivided share of common property.`,
 Norway: `Realsameie or eierseksjonssameie for roads, commons, and internals; recorded at Kartverket. Households own dwellings; the joint ownership is the commons layer, not a housing cooperative.`,
 Netherlands: `Vereniging van Eigenaars (VvE) under the Dutch Civil Code for apartment rights; or a recorded association of freehold houses sharing internals. Private house plus common rules.`,
 Chile: `Copropiedad inmobiliaria under Ley 21.442 (and the reglamento de copropiedad) recorded at the Conservador de Bienes Raíces. Private unit or sitio plus common rules, not a cooperativa de vivienda or junta de vecinos.`,
 Brazil: `Condomínio edilício under the Civil Code / Lei 4.591, plus a convenção recorded on the matrícula. Private unit plus an undivided share of common property.`,
 Argentina: `Propiedad horizontal under the Código Civil y Comercial; reglamento de copropiedad recorded at the Registro de la Propiedad Inmueble.`,
 Colombia: `Régimen de propiedad horizontal (Ley 675 de 2001); private unit plus an undivided share of common property.`,
 Ecuador: `Propiedad horizontal under the Civil Code and the relevant municipal ordinance; reglamento recorded on title.`,
 },
 "Body corporate": {
 Australia: `Body Corporate and Community Management Act 1997 (Qld) or the equivalent community-titles statute of the State; lots are Torrens freehold.`,
 },
 "Freehold title": {
 Australia: `Torrens freehold plus a deed of running covenants recorded on each title.`,
 "United States": `Fee simple plus recorded restrictive covenants in ${usState}.`,
 "United Kingdom": `Registered freehold plus a deed of covenant / real burden.`,
 Ireland: `Freehold plus deed of covenant registered at the Property Registration Authority.`,
 "Costa Rica": `Folio real at the Registro Nacional; for a condominio, a private unit plus an undivided share of common property. Covenants and the reglamento run with the title.`,
 Belize: `Registered land under the Registered Land Act, plus any recorded restrictions.`,
 Nicaragua: `Title at the Registro Público de la Propiedad, plus any recorded restrictions.`,
 Canada: `Fee simple (or the provincial equivalent) registered in the land-titles / registry office of the province; covenants and conservation easements run with the title.`,
 Mexico: `Escritura pública recorded at the Registro Público de la Propiedad; restrictions and servidumbres run with the folio.`,
 France: `Freehold (pleine propriété) recorded at the service de publicité foncière; covenants and servitudes run with the title.`,
 Netherlands: `Eigendom registered at the Kadaster; an association / VvE may hold commons. Covenants run with the title.`,
 Norway: `Grunnbok title at Kartverket (including eierseksjon); joint ownership of internals may sit in a realsameie or eierseksjonssameie.`,
 Sweden: `Lagfart at Lantmäteriet; covenants and easements run with the title.`,
 Finland: `Lainhuuto at the National Land Survey; easements and restrictions run with the title.`,
 Hungary: `Ingtatlan-nyilvántartás (Földhivatal) title; restrictions run with the folio.`,
 Spain: `Registro de la Propiedad; hipotecas and limitaciones run with the finca.`,
 Italy: `Conservatoria / Catasto title; vincoli and servitù run with the immobile.`,
 Brazil: `Matrícula at the Registro de Imóveis; ônus and restrições run with the folio. A condomínio unit is not the same as a cooperativa share.`,
 Argentina: `Título at the Registro de la Propiedad Inmueble; hipotecas and restricciones run with the folio.`,
 Chile: `Inscripción at the Conservador de Bienes Raíces; hipotecas and prohibiciones run with the finca. Copropiedad is a layer on top, not a substitute for title.`,
 Peru: `SUNARP title; gravámenes and restricciones run with the partida.`,
 Uruguay: `Registro de la Propiedad; hipotecas and restricciones run with the folio.`,
 Ecuador: `Registro de la Propiedad; gravámenes and restricciones run with the folio.`,
 Colombia: `Oficina de Registro de Instrumentos Públicos; hipotecas and limitaciones run with the folio. A house in a woman’s name is still freehold, not a community land trust.`,
 Egypt: `Title at the real-estate registry; restrictions run with the parcel. A holding company’s desert farm is still title, not a housing cooperative of lots.`,
 Thailand: `Chanote / Land Department title; restrictions run with the parcel. Foundation land is not a household lot.`,
 Senegal: `Title at the land registry; restrictions run with the parcel. A village older than its ONG is not a lot map.`,
 Benin: `Title at the land registry; restrictions run with the parcel. An NGO campus is not a condominium of lots.`,
 "South Africa": `Deed at the Deeds Office; conditions and servitudes run with the title. A nonprofit company’s farm is not a sectional-title scheme.`,
 Estonia: `Land Register title; restrictions run with the kinnistu. An MTÜ may hold land; that is not a korteriühistu apartment.`,
 Croatia: `Land registry / cadastre title; restrictions run with the parcel. An association’s educational estate is not etažno vlasništvo of apartments.`,
 Turkey: `Tapu title at Tapu Kadastro; restrictions run with the parcel. State-land purchase is still title, not a housing-block of apartments.`,
 Zimbabwe: `Deed of transfer at the Deeds Registry. Covenants and restrictions run with the title. A family farm that hosts a learning village is still freehold, not a community land trust.`,
 Switzerland: `Grundbuch title; Dienstbarkeiten and restrictions run with the parcel. An AG that owns a castle is still title, not Stockwerkeigentum of condos.`,
 "South Korea": `Deunggi title at the registry; ordinary Seoul lease or freehold. A village of co-ops is not a single mountain title.`,
 "Sri Lanka": `Land Registry title; a restored puranagama on a private estate is still title, not a housing cooperative of lots.`,
 Taiwan: `Land-office (地政) title; houses stay with families. A community development association is not the folio of the li.`,
 Indonesia: `Sertifikat hak milik at ATR/BPN; a family hillside used as an institute is still title, not a housing cooperative of lots.`,
 China: `Land-use right under the natural-resources bureau; peri-urban CSA land is not household freehold of a Beijing condominium.`,
 Philippines: `Title at the Registry of Deeds; foundation land and beneficiary houses are not a housing cooperative of lots you can list.`,
 Russia: `Rosreestr title or a land-use right; a kin’s-domain hectare is family dirt with a settlement filter, not a community land trust and not a Moscow condominium.`,
 Poland: `Księga wieczysta title at the land-and-mortgage register; a fundacja’s farm is still title, not a spółdzielnia of house lots and not a Szczecinek condominium.`,
 },
 "Charitable trust": {
 "New Zealand": `Charitable Trusts Act 1957; Charities Act 2005; register with Charities Services.`,
 "United Kingdom": `Trust law of Scotland or England and Wales; OSCR or the Charity Commission; consider a SCIO or CIO instead of a bare trust.`,
 Australia: `State trustee legislation and the Australian Charities and Not-for-profits Commission if a charity.`,
 "United States": `State trust law of ${usState}; charitable purpose and attorney-general oversight; 501(c)(3) if tax exemption is sought.`,
 },
 SCIO: {
 "United Kingdom": `Charities and Trustee Investment (Scotland) Act 2005; constitution filed with OSCR.`,
 },
 "Community Benefit Society": {
 "United Kingdom": `Co-operative and Community Benefit Societies Act 2014; rules registered with the FCA; optional statutory asset lock.`,
 },
 "Company limited by guarantee": {
 Ireland: `Companies Act 2014; constitution filed with the CRO; optional charitable status with the Charities Regulator.`,
 "United Kingdom": `Companies Act 2006; articles at Companies House; optional charity registration.`,
 Australia: `Corporations Act 2001 (Cth) company limited by guarantee; ACNC if a charity.`,
 },
 "Registered association": {
 Germany: `Bürgerliches Gesetzbuch (BGB) §§ 21 ff.; Vereinsregister at the Amtsgericht; optional Gemeinnützigkeit under the Abgabenordnung.`,
 "Costa Rica": `Asociación civil under Ley de Asociaciones (Ley 218); estatutos filed at the Registro de Asociaciones, Registro Nacional.`,
 Guatemala: `Asociación civil / ONG under the Civil Code; registered at the Registro de Personas Jurídicas.`,
 "El Salvador": `Asociación under the Ley de Asociaciones y Fundaciones sin Fines de Lucro; registered where that law requires.`,
 Nicaragua: `Asociación or ONG under Ley 147 (Ley General sobre Personas Jurídicas sin Fines de Lucro).`,
 Mexico: `Asociación civil under the Código Civil; estatutos in a escritura pública before a notary; RFC with SAT. Members do not take dividends; land may sit in the asociación or in named persons.`,
 France: `Association loi 1901; statuts declared at the prefecture / RNA. Members do not take dividends. Land may sit in the association or in a separate company or foundation.`,
 Hungary: `Egyesület under the Civil Code; registered at the competent court. Membership association, not a company of shares.`,
 Finland: `Rekisteröity yhdistys (ry) under the Associations Act; registered at PRH. One member, one vote. The association may own land.`,
 Norway: `Forening; may register at Brønnøysund if it has rights and duties as a legal person. Membership, not shares.`,
 Sweden: `Ideell förening; registration as needed for the activity. Membership, not an ekonomisk förening unless you choose that form.`,
 Netherlands: `Vereniging under the Dutch Civil Code, registered at the KVK if it has legal personality in dealings. Members do not take profits.`,
 Spain: `Asociación under Ley Orgánica 1/2002; estatutos at the Registro de Asociaciones. Members do not take dividends.`,
 Brazil: `Associação civil under the Código Civil; estatutos at a cartório de registro de pessoas jurídicas and a CNPJ. Members do not take dividends. Land may sit in the associação or in a separate instituto.`,
 Argentina: `Asociación civil under the Código Civil y Comercial; personería jurídica at IGJ (CABA) or the provincial registry. Members do not take dividends.`,
 Chile: `Asociación or corporación under Ley 20.500 and the Civil Code; registered as required. Members do not take dividends. Distinct from a junta de vecinos (Ley 19.418) and from copropiedad.`,
 Peru: `Asociación under the Código Civil; registered at SUNARP. Members do not take dividends.`,
 Uruguay: `Asociación civil; personería jurídica as required (often MEC). Members do not take dividends. Distinct from a cooperativa under Ley 18.407.`,
 Ecuador: `Organización social / asociación with personería jurídica; Superintendencia or the ministry that fits the purpose. Members do not take dividends.`,
 Colombia: `Asociación sin ánimo de lucro (ESAL) under the Civil Code, Cámara de Comercio, and DIAN. Members do not take dividends. Land may sit in the asociación so it outlasts the founders.`,
 Egypt: `Association or NGO under the Law on NGOs (Law 149 of 2019) and the Ministry of Social Solidarity. Members do not take dividends. Distinct from a holding company.`,
 Thailand: `Association under the Civil and Commercial Code, registered as required. Members do not take dividends. A public-benefit foundation is a different, board-driven form.`,
 Senegal: `Association or ONG filed with the Ministry of the Interior. Members do not take dividends.`,
 Benin: `Association or ONG filed as required. Members do not take dividends. A teaching campus NGO is board-driven public benefit.`,
 "South Africa": `Nonprofit company (NPC) members if you elect a membership NPC, or a voluntary association. Members do not take dividends. Distinct from a sectional-title body corporate.`,
 Estonia: `Mittetulundusühing (MTÜ) under the Non-profit Associations Act, registered at the Äriregister. One member, one vote. The association may own land. Not an apartment association (korteriühistu) unless you choose that form.`,
 Croatia: `Udruga under the Associations Act (Zakon o udrugama), registered in the Register of Associations. Members do not take dividends. The association may hold an educational estate; it is not a housing cooperative of apartments.`,
 Turkey: `Dernek under the Law on Associations; members do not take dividends. A kooperatif is a different form.`,
 Zimbabwe: `A membership association or PVO as elected; members do not take dividends. Land should not stay in members’ personal names alone.`,
 Switzerland: `Verein under the Swiss Civil Code (ZGB Arts. 60 ff.), with statutes and a board. Members do not take dividends. A Verein that lives in a castle owned by an AG is a tenant/community, not the landlord of record.`,
 "South Korea": `Association or cooperative under the Civil Act / Framework Act on Cooperatives; members do not take a mountain as lots. A childcare co-op is occupancy by cooperation, not a Mapo condominium company.`,
 Taiwan: `Community Development Association (社區發展協會) registered with the Ministry of the Interior. Members do not take dividends. The association is the visitor face of a li, not a housing cooperative of lots.`,
 China: `Social organization registered with the civil-affairs bureau. Members do not take dividends. A CSA farm is a different form.`,
 Philippines: `Nonstock corporation or association at the Securities and Exchange Commission. Members do not take dividends.`,
 Russia: `Obshchestvennaya organizatsiya / public association registered with the Ministry of Justice. Members do not take dividends. A dacha partnership of family hectares is a different form.`,
 Poland: `Stowarzyszenie under the Law on Associations (Prawo o stowarzyszeniach), registered in KRS / the starosta’s register. Members do not take dividends. A fundacja is a different, board-driven form.`,
 Indonesia: `Perkumpulan / association under the Civil Code, registered as required. Members do not take dividends. A yayasan is a different, board-driven form.`,
 "Sri Lanka": `Society or association registered as required. Members do not take dividends. A private estate is a different form.`,
 },
 "Nonprofit gGmbH": {
 Germany: `GmbHG; Handelsregister; Gemeinnützigkeit under AO §§ 51–68; no profit distributions.`,
 },
 "Limited company": {
 Portugal: `Código das Sociedades Comerciais (Lda / company limited); Conservatória do Registo Comercial.`,
 Germany: `GmbHG (if a GmbH) or the equivalent.`,
 "United Kingdom": `Companies Act 2006 private company.`,
 "Costa Rica": `Sociedad Anónima or SRL under the Código de Comercio; registered at the Registro Nacional.`,
 Nicaragua: `Sociedad Anónima under the Código de Comercio; Registro Público.`,
 Canada: `Federal CBCA corporation or a provincial business corporation; articles filed with Corporations Canada or the provincial registrar.`,
 Mexico: `Sociedad Anónima de C.V. or S. de R.L. under the Ley General de Sociedades Mercantiles; notary and Registro Público de Comercio.`,
 Netherlands: `Besloten vennootschap (BV) under Book 2 of the Dutch Civil Code; KVK registration.`,
 Norway: `Aksjeselskap (AS) under the Companies Act; Brønnøysund registration.`,
 France: `SAS or SARL under the Code de commerce; greffe / INPI.`,
 Hungary: `Korlátolt felelősségű társaság (Kft.) under the Civil Code; company-court registration.`,
 Chile: `Sociedad de responsabilidad limitada (Limitada) under the Código de Comercio; Registro de Comercio. A school or booking company is not the land title.`,
 Brazil: `Sociedade limitada (Ltda.) under the Código Civil; Junta Comercial / CNPJ.`,
 Argentina: `Sociedad de responsabilidad limitada (S.R.L.) under the Ley General de Sociedades; IGJ or provincial registry.`,
 Colombia: `Sociedad limitada or S.A.S. under the Código de Comercio; Cámara de Comercio.`,
 Ecuador: `Compañía de responsabilidad limitada or similar under the Companies Act; Superintendencia de Compañías.`,
 Peru: `Sociedad comercial de responsabilidad limitada; SUNARP / registry as required.`,
 Uruguay: `Sociedad de responsabilidad limitada under Uruguayan company law; DGI / registry as required.`,
 Egypt: `Sharikat musahima or limited-liability company under the Companies Law (Law 159) / Investment Law 72, filed at GAFI. A holding company of trading firms is not a housing cooperative of desert lots.`,
 Thailand: `Company limited under the Civil and Commercial Code, registered as required. A company is not a public-benefit foundation.`,
 Senegal: `Société under OHADA / Senegalese company law; RCCM as required. Distinct from an ONG.`,
 Benin: `Société under OHADA / Beninese company law; RCCM as required. Distinct from an ONG teaching campus.`,
 "South Africa": `Private company or nonprofit company under the Companies Act 71 of 2008, registered at CIPC. A (Pty) Ltd is not a sectional-title scheme.`,
 Estonia: `Osaühing (OÜ) at the Äriregister. Shares, not an MTÜ membership.`,
 Croatia: `Društvo s ograničenom odgovornošću (d.o.o.) at the court register. Shares, not an udruga.`,
 Turkey: `Limited şirket (Ltd. Şti.) or anonim şirket under the Turkish Commercial Code. Distinct from a kooperatif.`,
 Zimbabwe: `Private company at the Registrar of Companies. Distinct from a PVO and from a family-farm deed.`,
 Switzerland: `Aktiengesellschaft (AG) under the Code of Obligations, registered at the cantonal Handelsregister / Zefix. Shares in a property company are the land path; they are not Stockwerkeigentum condominium units.`,
 },
 "Cultural association": {
 Spain: `Ley Orgánica 1/2002 reguladora del Derecho de Asociación; estatutos filed with the Registro de Asociaciones.`,
 Italy: `Associazione culturale under the Civil Code / Third Sector Code as applicable; registration where the activity requires it. Cultural purpose, not a housing co-op.`,
 Greece: `Somateio (σωματείο) or AMKE under the Civil Code; court of first instance / GEMI as the activity requires. A cultural or development association, not a housing co-op of lots.`,
 Austria: `Verein under the Vereinsgesetz 2002; statutes notified to the Vereinsbehörde. Membership association, not a housing cooperative of lots.`,
 },
 "Concejo / recovered village": {
 Spain: `Municipal / concejo abierto practice of the Autonomous Community (e.g. Navarra); this is a compact, not a deed.`,
 },
 Kibbutz: {
 Israel: `Cooperative Societies Ordinance and kibbutz regulations; land typically Israel Land Authority leasehold.`,
 },
 "State land": {
 Israel: `Israel Land Authority allocation / lease.`,
 Spain: `Public domain or municipal property; occupancy by concession or tolerance, not freehold.`,
 India: `Union or State title; occupation under the statutory foundation or a licence.`,
 "United States": `State land department lease or allocation under the law of ${usState} (e.g. Arizona State Land Department); occupancy by lease, not freehold.`,
 },
 "Statutory foundation": {
 India: `Auroville Foundation Act, 1988 (or a like Act of Parliament creating the body). Internal rules cannot amend the Act.`,
 },
 "Self-governing institution": {
 Iceland: `Icelandic law of sjálfseignarstofnanir (self-owning institutions). No shareholders.`,
 },
 NPO: {
 Japan: `Act on Promotion of Specified Nonprofit Activities (特定非営利活動促進法).`,
 },
 "Sole proprietorship": {
 Japan: `Each person remains a sole proprietor for tax; this agreement is a private pooling contract.`,
 },
 "Religious society": {
 "United States": `State religious-corporation or nonprofit law of ${usState}; the covenant itself is ecclesiastical.`,
 Iceland: `Church or independent-institution law as the founders elect.`,
 Hungary: `Registered church (bevett egyház or a listed religious community) under Hungarian church law. Membership is vocational; property is held for the religious purpose, not as household lots.`,
 Peru: `Asociación religiosa or registered religious entity under Peruvian law; SUNARP as required. Membership is vocational; property is held for the religious purpose, not as household lots.`,
 Brazil: `Organização religiosa under the Civil Code; CNPJ as required. Membership is vocational; property is held for the religious purpose, not as condomínio lots.`,
 Argentina: `Iglesia or asociación religiosa under the relevant registry; property is held for the religious purpose, not as household lots.`,
 Chile: `Entidad religiosa de derecho público or asociación; property is held for the religious purpose, not as copropiedad lots.`,
 Colombia: `Personería jurídica eclesiástica or asociación religiosa; property is held for the religious purpose, not as household lots.`,
 Ecuador: `Entidad religiosa or asociación; property is held for the religious purpose, not as household lots.`,
 Uruguay: `Asociación religiosa or church body as elected; property is held for the religious purpose, not as household lots.`,
 Egypt: `Religious association or endowment (waqf) as elected; property is held for the religious or public-benefit purpose, not as household lots.`,
 Thailand: `A Buddhist ashram community living on foundation land. Membership is vocational; property is held by the foundation for the religious and educational purpose, not as household lots. The Civil and Commercial Code and the foundation regime still apply.`,
 Senegal: `Religious association or brotherhood structure as elected; property is held for the religious purpose, not as household lots.`,
 Benin: `Religious association or church body as elected; property is held for the religious purpose, not as household lots.`,
 "South Africa": `Religious organisation under the relevant NPO / church law; property is held for the religious purpose, not as sectional-title lots.`,
 Estonia: `Religious association under Estonian law; property is held for the religious purpose, not as household lots.`,
 Croatia: `Religious community under Croatian law; property is held for the religious purpose, not as household lots.`,
 Turkey: `Vakıf or religious association as elected; property is held for the religious purpose, not as household lots.`,
 Zimbabwe: `Religious organisation or church body as elected; property is held for the religious purpose, not as household lots.`,
 Switzerland: `Religious Verein or church body as elected; property is held for the religious purpose, not as Stockwerkeigentum lots.`,
 },
 "Income-sharing": {
 "United States": `A contract that still needs a shell, often IRC § 501(d).`,
 Germany: `A contract inside an e.V. or gGmbH; labour and social-insurance law still apply.`,
 Denmark: `A contract inside a forening; tax treatment is not determined by this draft.`,
 Canada: `A contract inside a co-operative or nonprofit corporation; tax treatment is not determined by this draft.`,
 Mexico: `A contract inside a cooperativa or asociación civil; SAT and labour law still apply.`,
 Uruguay: `A contract inside a cooperativa (Ley 18.407) or asociación civil; BPS and DGI still apply. Common purse is not a substitute for a legal person.`,
 Brazil: `A contract inside an associação, cooperativa, or instituto; CLT and CNPJ still apply.`,
 Argentina: `A contract inside an asociación civil or cooperativa; tax and labour law still apply.`,
 Chile: `A contract inside an asociación, cooperativa, or company; tax and labour law still apply.`,
 Colombia: `A contract inside an asociación or cooperativa; DIAN and labour law still apply.`,
 Ecuador: `A contract inside an asociación or cooperativa; tax and labour law still apply.`,
 Peru: `A contract inside an asociación or cooperativa; SUNAT and labour law still apply.`,
 },
 "Unincorporated community": {
 "New Zealand": `A private compact. Title must sit in a trust or named persons, the community has no legal personality.`,
 Japan: `A household compact. Tax and labour stay with the named individuals.`,
 "United States": `An unincorporated association under the law of ${usState}; land should not stay in members’ personal names.`,
 },
 "Membership association": {
 "United Kingdom": `May be unincorporated, a SCIO, a CBS, or a company limited by guarantee.`,
 "United States": `State nonprofit or unincorporated-association law of ${usState}.`,
 Portugal: `Associação under the Civil Code, registered where required.`,
 "Costa Rica": `Asociación under Ley 218, or an unincorporated compact sitting under a company or trust.`,
 Nicaragua: `Asociación under Ley 147, or a private compact under a named title holder.`,
 Canada: `A federal or provincial nonprofit corporation, or an unincorporated association; occupancy should not rest on members’ personal names alone.`,
 Mexico: `Asociación civil under the Código Civil, or a private compact under a named title holder.`,
 France: `Association loi 1901, or an unincorporated compact sitting under a company or foundation.`,
 Finland: `Yhdistys under the Associations Act, or an unincorporated compact; land should not stay in members’ personal names alone.`,
 Netherlands: `Vereniging, or an unincorporated compact under a stichting or company.`,
 Chile: `Junta de vecinos under Ley 19.418, or an unincorporated compact sitting under a copropiedad or named title holder. A junta is not a cooperativa and not the landlord.`,
 Brazil: `Associação, or an unincorporated compact; land should not stay in members’ personal names alone.`,
 Argentina: `Asociación civil, or an unincorporated compact under a named title holder.`,
 Uruguay: `Asociación civil, or an unincorporated compact; land should not stay in members’ personal names alone.`,
 Peru: `Asociación, or an unincorporated compact under a named title holder.`,
 Ecuador: `Asociación / organización social, or an unincorporated compact under a named title holder.`,
 Colombia: `Asociación, or an unincorporated compact; land should not stay in members’ personal names alone.`,
 Egypt: `Association under Law 149 of 2019, or an unincorporated compact under a named title holder.`,
 Thailand: `Association, or an unincorporated compact sitting under a foundation.`,
 Senegal: `Association or ONG, or an unincorporated compact; land should not stay in members’ personal names alone.`,
 Benin: `Association or ONG, or an unincorporated compact under a named title holder.`,
 "South Africa": `Voluntary association or NPC membership, or an unincorporated compact; land should not stay in members’ personal names alone.`,
 Estonia: `MTÜ, or an unincorporated compact; land should not stay in members’ personal names alone.`,
 Croatia: `Udruga, or an unincorporated compact under a named title holder.`,
 Turkey: `Dernek, or an unincorporated compact under a named title holder.`,
 Zimbabwe: `Association or PVO, or an unincorporated compact under a named title holder.`,
 Switzerland: `Verein, or an unincorporated compact sitting under an AG or Stiftung.`,
 Greece: `Somateio or an unincorporated compact of households; land should not stay only in members’ personal names if the point is a commons.`,
 Austria: `Verein under the Vereinsgesetz, or an unincorporated compact; title should sit in the Verein, a pool, or named trustees, not only in the last residents.`,
 },
 "Nonprofit foundation": {
 Colombia: `Fundación / ESAL under the Civil Code and DIAN public-benefit rules.`,
 Italy: `Fondazione or ETS under the Third Sector Code.`,
 Germany: `Stiftung under BGB / state foundation law, or a gGmbH used as a foundation-like lock.`,
 "United States": `State nonprofit plus IRS 501(c)(3); a true foundation is a board-driven charity, not a membership co-op.`,
 Belize: `Non-Governmental Organisation under the Non-Governmental Organisations Act, or a company limited by guarantee with a public-benefit purpose.`,
 "Costa Rica": `Fundación under Costa Rican foundation law, registered at the Registro Nacional; not a membership cooperativa.`,
 Nicaragua: `Fundación or asociación under Ley 147; board-driven, not a housing co-op.`,
 Guatemala: `Fundación or asociación civil; Registro de Personas Jurídicas.`,
 "El Salvador": `Fundación under the Ley de Asociaciones y Fundaciones sin Fines de Lucro.`,
 Canada: `Federal (CNCA) or provincial nonprofit corporation; in Quebec an OSBL / Partie III company. Optional registered-charity status with CRA. Board-driven public benefit, not a housing co-op unless a separate co-op holds the homes.`,
 Mexico: `Asociación civil or institución de asistencia privada; notary, registry, and SAT. Board-driven public benefit, not a sociedad cooperativa unless you choose that form.`,
 France: `Fondation reconnue d’utilité publique, fonds de dotation, or a Swiss foundation holding French land. Board-driven lock, not a membership co-op.`,
 Sweden: `Stiftelse under the Foundations Act; registered as required (often Länsstyrelsen). No members; a board and a purpose.`,
 Netherlands: `Stichting under the Dutch Civil Code, registered at the KVK. Board-driven, no members.`,
 Norway: `Stiftelse registered at Brønnøysund / Stiftelsestilsynet. No members; a purpose and a board.`,
 Finland: `Säätiö under the Foundations Act, registered at PRH. Board-driven public purpose.`,
 Hungary: `Alapítvány under the Civil Code; court registration. Board-driven, not a membership egyesület unless you choose that form.`,
 Brazil: `Instituto or fundação under the Código Civil; cartório / CNPJ, with Ministério Público oversight if a fundação. Board-driven public benefit, not a cooperativa of lots.`,
 Chile: `Fundación or corporación under Ley 20.500 and the Civil Code; Registro Civil. Board-driven, not a copropiedad or cooperativa de vivienda.`,
 Argentina: `Fundación under the Código Civil y Comercial; IGJ or provincial registry. Board-driven public benefit, not a cooperativa.`,
 Ecuador: `Fundación or corporación with personería jurídica; Superintendencia or the ministry that fits. Board-driven, not a housing co-op.`,
 Peru: `Fundación or asociación de fines no lucrativos; SUNARP. Board-driven public benefit.`,
 Uruguay: `Fundación or asociación civil of public benefit; not a cooperativa under Ley 18.407 unless you choose that form.`,
 Egypt: `Foundation or developmental NGO under Law 149 of 2019 / Ministry of Social Solidarity. Board-driven public benefit, not a housing cooperative of lots.`,
 Thailand: `Public-benefit foundation (มูลนิธิ) under the Civil and Commercial Code and the Ministry of Interior; registered as a public charity. Board-driven lock, not a housing cooperative of lots.`,
 Senegal: `ONG / association under Senegalese law on associations and NGOs, filed with the Ministry of the Interior. Board-driven public-benefit work, not a housing cooperative of lots.`,
 Benin: `ONG under Beninese law on associations and NGOs, filed as required. Board-driven teaching campus, not a housing cooperative of lots.`,
 "South Africa": `Nonprofit company (NPC) under the Companies Act 71 of 2008, registered at CIPC; optional NPO Directorate registration. Board-driven public benefit, not a sectional-title scheme.`,
 Estonia: `Sihtasutus (foundation) under the Foundations Act, registered at the Äriregister. Board-driven, no members. Distinct from an MTÜ.`,
 Croatia: `Zaklada or a public-benefit udruga; board-driven public benefit, not a housing cooperative of apartments.`,
 Turkey: `Vakıf under the Foundations Law, or a public-benefit dernek. Board-driven lock, not a kooperatif of apartments.`,
 Zimbabwe: `Private voluntary organisation under the Private Voluntary Organisations Act, or a trust / company limited by guarantee as elected. Board-driven learning village, not a housing cooperative of lots.`,
 Switzerland: `Stiftung under the Swiss Civil Code (ZGB Arts. 80 ff.), registered as required. Board-driven lock, no members. Distinct from a Verein and from an AG.`,
 Japan: `General incorporated foundation (一般財団法人) under the Act on General Incorporated Associations and Foundations, or a specified nonprofit corporation. Board-driven lock, not a housing cooperative of lots.`,
 India: `Society under the Societies Registration Act, 1860 (and State amendments), or a public charitable trust. Board-driven public benefit, not a housing cooperative of plots.`,
 Indonesia: `Yayasan under the Foundation Law (Undang-Undang Yayasan); board-driven, not a housing cooperative of lots.`,
 Philippines: `Foundation or nonstock nonprofit corporation at the Securities and Exchange Commission. Board-driven public benefit, not a housing cooperative of lots.`,
 "South Korea": `Nonprofit corporation or social cooperative as elected. Board- or membership-driven public purpose, not a mountain lot.`,
 "Sri Lanka": `Trust, company limited by guarantee, or society as elected. Board-driven public benefit, not a housing cooperative of lots.`,
 Taiwan: `Foundation (財團法人) under the Civil Code / Foundations Act. Board-driven, not a community development association unless you choose that form.`,
 China: `Foundation or social-service organization under civil-affairs rules. Board-driven, not household freehold.`,
 Russia: `Autonomous non-profit organization (ANO) or a non-commercial partnership registered with the Ministry of Justice. Board-driven public benefit, not a hectare you list.`,
 Poland: `Fundacja under the Law on Foundations (Ustawa o fundacjach), registered in KRS; optional public-benefit (OPP) status. Board-driven lock, not a spółdzielnia of lots.`,
 },
 "Supporting foundation": {
 "United States": `IRC § 509(a)(3) supporting organization, or an ordinary 501(c)(3) with a support purpose.`,
 },
 "Property trust": {
 "United Kingdom": `Trust deed under Scots or English trust law; may sit under a SCIO or CBS.`,
 "New Zealand": `Trusts Act 2019; charitable registration if the purpose is charitable.`,
 France: `A Swiss foundation, a French fondation, or a foncière / SCI holding land for a cooperative so the dirt cannot be split among members. Not a U.S.-style community land trust. Record at the service de publicité foncière.`,
 },
 "Conservation covenant": {
 "United States": `Conservation easement under the law of ${usState} (Uniform Conservation Easement Act where adopted); recorded; often IRC § 170(h) if a gift.`,
 Australia: `Statutory covenant or conservation agreement recorded on Torrens title (state statute).`,
 "New Zealand": `Conservation covenant (e.g. QEII National Trust or council covenant) registered on title.`,
 "United Kingdom": `Conservation covenant (England, Environment Act 2021) or a real burden / conservation agreement in Scotland.`,
 "Costa Rica": `Refugio de Vida Silvestre (private wildlife refuge) under MINAE / SINAC, or a servidumbre ecológica recorded on folio real.`,
 Belize: `Private protected area or conservation restriction recorded on title; Forest Department / Department of the Environment as relevant.`,
 Guatemala: `Área protegida privada or conservation agreement; CONAP as relevant.`,
 Canada: `Conservation easement or covenant under provincial statute (e.g. Ontario Conservation Land Act / a conservancy as holder), registered on title for the stated term, including a 999-year easement.`,
 Mexico: `Servidumbre ecológica or a private conservation agreement recorded on the folio; CONANP or the state environment ministry as relevant. Practice on the land is not the same as a recorded instrument.`,
 },
 "Historic designation": {
 "United States": `National Historic Landmark / National Register listing is a public act; a preservation covenant is separately recorded.`,
 },
 CSA: {
 "United States": `A private membership contract; land stays in the farm’s entity. Food-safety and securities rules still apply.`,
 Ireland: `A membership contract; the farm entity (often a co-op or CLG) holds the land.`,
 China: `A private membership contract for vegetable shares and rented plots; land-use stays with the farm entity. A box is not a Fenghuangling condominium.`,
 },
 "Community finance": {
 "United Kingdom": `Community share offer under a CBS; FCA registration; withdrawable share capital, not a land title.`,
 Austria: `Direktkredit / Vermögenspool under Austrian civil and investment-contract practice; a loan or asset pool from supporters, not a Grundbuch lot. Confirm prospectus and Vereins / Firmenbuch papers.`,
 },
 "Trading company": {
 "United States": `State corporation or LLC of ${usState}, or an internal department of the nonprofit (UBIT may apply).`,
 Germany: `GmbH / gGmbH or a Zweckbetrieb of the Verein.`,
 Colombia: `Commercial company or a productive arm of the foundation.`,
 Canada: `Federal or provincial business corporation, or an internal arm of a nonprofit / co-operative.`,
 Mexico: `Sociedad mercantil (S.A. de C.V. or S. de R.L.) or a productive arm of an asociación or cooperativa.`,
 Norway: `Aksjeselskap (AS) at Brønnøysund, or an internal arm of a cooperative or association.`,
 Netherlands: `Besloten vennootschap (BV) at the KVK, or an internal arm of a vereniging or stichting.`,
 France: `Société (SAS, SARL) at the greffe, or an internal activity of an association or cooperative.`,
 Brazil: `Sociedade empresária (Ltda. or S.A.) at the Junta Comercial, or a productive arm of an instituto or associação.`,
 Uruguay: `A cooperativa de trabajo or commercial company (Nordan / workshops), or an internal arm of the collective.`,
 Argentina: `Sociedad comercial or a productive arm of an asociación civil.`,
 Chile: `Sociedad de responsabilidad limitada or an internal arm of a fundación or copropiedad.`,
 Peru: `Sociedad comercial or an internal arm of an asociación religiosa.`,
 Ecuador: `Compañía or a productive arm of an asociación.`,
 Egypt: `Joint-stock or limited company under the Companies Law / Investment Law, GAFI, or a productive arm of a holding or foundation.`,
 Thailand: `Company limited, or a productive arm of a public-benefit foundation.`,
 Senegal: `GIE (groupement d’intérêt économique) or artisan cooperative / société under OHADA / Senegalese commercial law; a productive arm of a village NGO, not a housing-lot company.`,
 Benin: `Société under OHADA, or a productive arm of an ONG campus.`,
 "South Africa": `Private company at CIPC, or a productive arm of an NPC.`,
 Estonia: `OÜ at the Äriregister, or an internal arm of an MTÜ.`,
 Croatia: `D.o.o., or a productive arm of an udruga.`,
 Turkey: `Limited şirket, or a productive arm of a kooperatif or dernek.`,
 Zimbabwe: `Private company, or a productive arm of a PVO or family farm.`,
 Switzerland: `AG or GmbH at the Handelsregister, or an internal arm of a Verein or Stiftung.`,
 "South Korea": `Company under the Commercial Act, or a cooperative enterprise. Not a mountain title.`,
 Indonesia: `Perseroan terbatas, or a productive arm of a farm or yayasan.`,
 Philippines: `Stock corporation, or a social enterprise of a foundation.`,
 China: `Company or social enterprise; a CSA packing arm is not household title.`,
 Poland: `Spółka z o.o. at KRS, or a productive arm of a fundacja (as Juchowo’s farm company sits under the Karłowski Foundation). Income, not a lote map.`,
 },
 "Federation of cooperatives": {
 Italy: `Cooperative federation under the Civil Code and cooperative legislation; each co-op remains a separate person.`,
 },
 };

 return (table[form]?.[country] ??
 `File and record this under the law of ${country}${st ? `, ${st}`: ""}, with a local solicitor or notary.`);
}
