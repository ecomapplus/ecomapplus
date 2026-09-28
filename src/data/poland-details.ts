import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const polandLegalEntities: Record<string, LegalEntity[]> = {
 "bhrugu-aranya": [
  {
   name: "Homa Therapy Foundation in Poland (Fundacja Terapii Homa)",
   kind: "Polish foundation",
   role: "Holds the four hectares at Wysoka / Nadlas. Board-driven lock so the Homa farm is not a Jordanów chalet company.",
   status: "current",
   layer: "land",
   year: "1995",
  },
  {
   name: "Bhrugu Aranya resident circle",
   kind: "Unincorporated community association",
   role: "Fourteen adults and four children on the GEN count. Families, Agnihotra, the garden. Occupancy.",
   status: "current",
   layer: "membership",
  },
 ],
 juchowo: [
  {
   name: "Fundacja im. Stanisława Karłowskiego",
   kind: "Polish public-benefit foundation",
   role: "OPP public-benefit foundation. Owns the land, animals, buildings, and machinery of the Juchowo Rural Project. About 1,900 ha.",
   status: "current",
   layer: "land",
   year: "2001",
  },
  {
   name: "Spółka Rolnicza Juchowo Sp. z o.o.",
   kind: "Polish limited-liability company",
   role: "The farm company, commercial arm of the Rural Project. Demeter dairy and the shop. Income, not title of the 1,900 ha.",
   status: "current",
   layer: "enterprise",
  },
  {
   name: "Therapeutic workshops",
   kind: "On-site intern and education program",
   role: "Rehabilitation workshops for people with disabilities, a school, internships. Care and education.",
   status: "current",
   layer: "education",
  },
 ],
 brzozowka: [
  {
   name: "Fundacja Eko-Osada Brzozówka",
   kind: "Polish foundation",
   role: "Holds the social centre of the osada. Workshops, hemp festival, clay-dome gallery. Not the sixteen private plots.",
   status: "current",
   layer: "land",
   year: "2015",
  },
  {
   name: "Sixteen private plots",
   kind: "Polish private plot",
   role: "Families hold their own działki around the centre and join the osadą in the measure they choose.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Prawo Eko-Brzozówki (23 articles)",
   kind: "Unincorporated community association",
   role: "2018 wiec law, consensus. A compact the foundation published.",
   status: "current",
   layer: "covenant",
   year: "2018",
  },
 ],
 "ostoja-natury": [
  {
   name: "Spółdzielnia Ostoja Natury",
   kind: "Polish agricultural cooperative",
   role: "Formed 2018 by eight non-local members and settled in Tomaszyn. Regenerative farm, BIO HUB, earthship housing. Piotr Ostaszewski is the public CEO.",
   status: "current",
   layer: "land",
   year: "2018",
  },
  {
   name: "Village of Tomaszyn",
   kind: "Polish municipal village",
   role: "A hamlet of about 18 people in gmina Olsztynek. The co-op is the agricultural engine, not the municipality.",
   status: "current",
   layer: "covenant",
  },
 ],
 osada: [
  {
   name: "Stowarzyszenie Osada Możliwości",
   kind: "Polish association",
   role: "Established 2021. Legal face of OSADA, Center for Regenerative Living at Prosinko. Membership association.",
   status: "current",
   layer: "land",
   year: "2021",
  },
  {
   name: "OSADA resident and laboratory circle",
   kind: "Unincorporated community association",
   role: "The small household plus seasonal ESC and month-long guests. Occupancy.",
   status: "current",
   layer: "membership",
  },
 ],
};

export const polandLand: Record<string, LandOwnership> = {
 "bhrugu-aranya": {
  owner: "Homa Therapy Foundation, 4 ha at Wysoka / Nadlas, 34-240 Jordanów",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "A Polish foundation holds the certified organic Homa farm. Residents occupy; they do not buy Tatra-foothill lots.",
  narrative: "1995, a cabin and an apple orchard, straw-clay houses, Agnihotra at both twilights. Poland’s first named ecovillage.",
  divided: [],
 },
 juchowo: {
  owner: "Fundacja im. Stanisława Karłowskiego, ~1,900 ha at Juchowo, Silnowo",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "The OPP foundation owns land, animals, buildings, and machinery. The farm company is the commercial arm of house lots.",
  narrative: "Former PGR dirt, 2001 foundation, biodynamic conversion of sandy ground, ten kilometres of hedges. A rural project,900 ha.",
  divided: [],
 },
 brzozowka: {
  owner: "Fundacja Eko-Osada Brzozówka (centre) plus 16 private plots around it, Brzozówka / Cielądz",
  complexity: "split",
  tenure: "Split (foundation + private plots)",
  howHeld: "The foundation holds the social centre. Sixteen families hold their own działki and join by choice.",
  narrative: "2015 zasadźca, 2016 straw dome, 2018 wiec law. Confirm which of the sixteen are lived on.",
  divided: [
   { label: "Social centre", holder: "Fundacja Eko-Osada Brzozówka", share: "Common heart of the village", what: "Dome, gallery, amphitheatre, workshops." },
   { label: "Private plots", holder: "Settler families", share: "16 działki", what: "Household dirt. Join the osadą in the measure you choose." },
  ],
 },
 "ostoja-natury": {
  owner: "Spółdzielnia Ostoja Natury, regenerative farm at Tomaszyn, gmina Olsztynek",
  complexity: "simple",
  tenure: "Cooperative",
  howHeld: "A Polish agricultural cooperative holds and works the farm. Eight founding members from outside the hamlet.",
  narrative: "2018, Green Lungs, lakes and forest, earthship brief, BIO HUB. Confirm who still lives there.",
  divided: [],
 },
 osada: {
  owner: "Stowarzyszenie Osada Możliwości, agricultural land at Prosinko 28, Drawsko lakes",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "A Polish association holds the regenerative farm and cultural centre. Guests of a month occupy; they do not buy a hectare.",
  narrative: "2021 association, market garden, edible forest, water retention. A small centre.",
  divided: [],
 },
};

export const polandFunding: Record<string, CommunityFunding> = {
 "bhrugu-aranya": {
  overview: "A four-hectare Homa farm paid by workshops, volunteer seasons, and the foundation, not by Jordanów lots.",
  grantsHeadline: "None isolated",
  privateHeadline: "Workshops and volunteers",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "Foundation land.",
   },
  ],
  private: [
   {
    source: "Homa workshops, herbs, volunteer stays (meals and a bed in the warm months)",
    amount: "Earned and sweat",
    year: "1995–present",
    certainty: "documented",
    kind: "courses",
    note: "agnihotra.pl.",
   },
  ],
 },
 juchowo: {
  overview: "A 1,900-hectare biodynamic rural project paid by Demeter milk, a farm shop, and foundation purpose, not by Szczecinek lots.",
  grantsHeadline: "NESsT 2025 + EU research",
  privateHeadline: "Dairy and 77 farm products",
  grants: [
   {
    source: "NESsT Central & Eastern Europe accelerator",
    amount: "Programme (joined 2025)",
    year: "2025",
    certainty: "documented",
    kind: "grant",
    note: "Social-enterprise support for disability inclusion and rural employment.",
   },
   {
    source: "EU MIXED / agroforestry research partnerships",
    amount: "On-farm study of tree lines and hedges",
    certainty: "documented",
    kind: "grant",
    note: "About 10 km of hedges planted over two decades. Research.",
   },
  ],
  private: [
   {
    source: "Demeter dairy and farm-shop products (bread, cheese, herbs, syrups, vegetables)",
    amount: "About 77 products; ~700 cattle in a 2016 count",
    year: "2001–present",
    certainty: "documented",
    kind: "business",
    note: "Closed-cycle milk is the published cash. Wages for ~90 plus a therapeutic base.",
   },
  ],
 },
 brzozowka: {
  overview: "A Cielądz osada paid by workshops, a hemp festival, and family plots, not by a Rawa developer map.",
  grantsHeadline: "None isolated",
  privateHeadline: "Workshops, festival, plots",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A foundation centre and sixteen private działki.",
   },
  ],
  private: [
   {
    source: "Natural-building and hemp workshops, KONOPIELKA festival, clay-dome gallery",
    amount: "Earned, seasonal",
    year: "2015–present",
    certainty: "documented",
    kind: "courses",
    note: "eko-brzozowka.pl. Advice to people founding their own siedlisko.",
   },
  ],
 },
 "ostoja-natury": {
  overview: "A Tomaszyn regenerative farm paid by short-chain produce, a bazar, and a spółdzielnia, not by Olsztynek lots.",
  grantsHeadline: "Smart Rural lighthouse",
  privateHeadline: "BIO HUB and bazar",
  grants: [
   {
    source: "EU Smart Rural 21 / 27 lighthouse recognition",
    amount: "Network status",
    year: "2021–27",
    certainty: "documented",
    kind: "award",
    note: "Tomaszyn as a Smart Village. Recognition. Confirm any later capital awards.",
   },
  ],
  private: [
   {
    source: "Regenerative produce, BIO HUB short chain, Sunday seasonal bazar, Olsztyn Saturday market",
    amount: "Earned, ongoing",
    year: "2018–present",
    certainty: "documented",
    kind: "business",
    note: "Workshops in hemp and earthship building.",
   },
  ],
 },
 osada: {
  overview: "A Drawsko regenerative centre paid by ESC placements, laboratories, and garden work, not by Prosinko lots.",
  grantsHeadline: "European Solidarity Corps",
  privateHeadline: "Laboratories and the garden",
  grants: [
   {
    source: "European Solidarity Corps (under-31 EU citizens)",
    amount: "Transport, stay, and pocket money for 1.5–6 month placements",
    year: "2021–present",
    certainty: "documented",
    kind: "grant",
    note: "A volunteer programme.",
   },
  ],
  private: [
   {
    source: "Month-long laboratories, workshops, market-garden work",
    amount: "Sweat and programme fees as published each season",
    year: "2021–present",
    certainty: "documented",
    kind: "courses",
    note: "Stays of at least a month in season.",
   },
  ],
 },
};

export const polandVisitJoin: Record<string, VisitJoin> = {
 "bhrugu-aranya": {
  visit: 3,
  join: 2,
  visitProcess:
   "Nadlas / Wysoka 151, 34-240 Jordanów, Tatra foothills between Kraków and Zakopane. agnihotra.pl. Workshops in Homa farming, herbs, mandala and sound. Warm-month volunteers get meals and a bed. Agnihotra at sunrise and sunset is asked of people who stay. Write (info@agnihotra.pl, +48 502 347 898). Do not drop in on the fire as a viewpoint.",
  joinProcess:
   "A foundation holds the four hectares. Occupancy is a resident-circle yes. Fourteen adults and four children on the last count. Harder than a Zakopane chalet rental.",
 },
 juchowo: {
  visit: 4,
  join: 2,
  visitProcess:
   "Juchowo 54 A, 78-446 Silnowo, near Szczecinek. juchowo.org. The farm shop, a scheduled visit, internships for pupils and students. This is a working dairy and a care workshop. Do not drop in on therapeutic houses. GPS 53°40′38″N 16°29′27″E. Phone +48 94 375 3821, info@juchowo.org.",
  joinProcess:
   "You work here, intern, or are placed in a disability workshop. There is no member share and no private title of the 1,900 ha. A job or a care admission. Harder than a farm-stay listing.",
 },
 brzozowka: {
  visit: 3,
  join: 3,
  visitProcess:
   "Brzozówka 24d, 96-214 Cielądz. eko-brzozowka.pl and the Facebook group. Workshops, KONOPIELKA, a clay-dome gallery, a village amphitheatre. Guests come for an hour, a few days, or longer in summer. Houses on the sixteen plots are homes. Write. +48 574 407 699.",
  joinProcess:
   "Take a private plot after talking to the foundation, or join the centre’s work. The 2018 wiec law is consensus. Easier than a closed commune if a działka is actually open;. Confirm which of the sixteen are lived on.",
 },
 "ostoja-natury": {
  visit: 3,
  join: 2,
  visitProcess:
   "Tomaszyn, gmina Olsztynek. Sunday seasonal BIO HUB bazar (June–September), Olsztyn Saturday market, workshops in regenerative farming, hemp, and earthship building. The farm is a workplace; earthship houses are homes. Arrange.",
  joinProcess:
   "Join the spółdzielnia, or work the farm. Eight people founded it from outside the hamlet. Confirm they are taking members. Harder than a Warmia agritourism listing.",
 },
 osada: {
  visit: 3,
  join: 2,
  visitProcess:
   "Prosinko 28, 78-552, Drawsko lakes. Month-long stays May–October; ESC for under-31 EU citizens. Shared meals, garden, circles. Write osada@osada.earth or +48 791 742 387. Houses are a small household.",
  joinProcess:
   "An association, a small winter household. A month in the garden is not membership. ESC is a placement. Harder than a lake-district rental.",
 },
};

export const polandDailyLife: Record<string, DailyLife> = {
 "bhrugu-aranya": {
  typical: [
   { title: "Agnihotra at both twilights", detail: "Cow-dung fire at sunrise and sunset. The compact of the four hectares. Guests who stay are asked to sit it." },
   { title: "Homa garden", detail: "Certified organic beds, herbs, an old apple orchard. Straw, clay, and wood houses on the forest edge." },
   { title: "Workshop week", detail: "Ayurvedic farming, mandala, sound. Warm-month volunteers eat and sleep here. Winter is the families." },
  ],
  unique: {
   title: "Poland’s first named ecovillage under the Tatras",
   detail: "Bhrugu Aranya is 1995, four hectares, fourteen adults and four children, a foundation.",
  },
 },
 juchowo: {
  typical: [
   { title: "Closed-cycle dairy", detail: "Cows eat what the 1,900 ha grow; manure is composted back. Demeter milk is the published cash. About 700 head in a 2016 count." },
   { title: "Hedges and sandy ground", detail: "Ten kilometres of tree lines against wind and water. Former PGR dirt that would not feed a village until they farmed it as one organism." },
   { title: "Workshop and school", detail: "People with disabilities work beside the dairy. Interns and a pedagogical arm. Care is the second sentence of the Rural Project." },
  ],
  unique: {
   title: "The 1,900-hectare farm that treated soil as the village",
   detail: "Juchowo is Karłowski’s name on former state-farm dirt, a foundation, a dairy, social therapy.",
  },
 },
 brzozowka: {
  typical: [
   { title: "Straw-clay dome", detail: "Kopuła Brzozówki, ~300 bales, clay plaster, 2016. A gallery in a clay dome. Natural building is the weekday teaching." },
   { title: "Wiec when it matters", detail: "Consensus. 23 articles from 2018. Sixteen plots around a centre; each family joins in the measure it chooses." },
   { title: "Hemp and herbs", detail: "KONOPIELKA festival, zielarstwo, yoga and other practice teachers in the centre. An amphitheatre for fire and song." },
  ],
  unique: {
   title: "The osada that wrote its own Prawo",
   detail: "Brzozówka is 2015, a zasadźca, sixteen działki, a foundation centre.",
  },
 },
 "ostoja-natury": {
  typical: [
   { title: "Regenerative beds", detail: "Topsoil, water cycle, a reference farm in the Green Lungs. The co-op’s weekday is the field." },
   { title: "BIO HUB and bazar", detail: "Short chain, Sunday seasonal market on the land, Saturday in Olsztyn. Produce." },
   { title: "Earthship and hemp", detail: "Housing brief and workshops. Confirm what is actually built before you treat a 2026 flyer as a finished hamlet of earthships." },
  ],
  unique: {
   title: "The cooperative that moved into a hamlet of eighteen",
   detail: "Eight people from outside Tomaszyn formed the spółdzielnia in 2018 and settled a hamlet of about eighteen in the Green Lungs: regenerative farm, BIO HUB, earthship-inspired housing, Smart Rural lighthouse.",
  },
 },
 osada: {
  typical: [
   { title: "Market garden and edible forest", detail: "Permaculture beds, water retention, physical work before the circle. The Drawa bioregion is the brief." },
   { title: "Daily circle", detail: "Shared meals, grief work, Hospicing Modernity, Theatre of the Oppressed as named practice. A laboratory." },
   { title: "Seasonal household", detail: "ESC and month-long guests May–October. Winter is whoever actually stays. Confirm before you treat a 2024 invitation as a 2026 village of fifty." },
  ],
  unique: {
   title: "The small centre that asked how to be human in a polycrisis",
   detail: "Stowarzyszenie Osada Możliwości formed in 2021 and planted a market garden and edible forest at Prosinko in the Drawsko lakes, then opened month-long laboratories and ESC placements on that land.",
  },
 },
};

export const polandInformal: Record<string, InformalAgreement[]> = {
 "bhrugu-aranya": [
  { kind: "quiet-practice", why: "Agnihotra at sunrise and sunset. Guests who stay are asked to sit the fire." },
  { kind: "volunteer-intern", why: "Warm-month volunteers, meals and a bed." },
  { kind: "course-host", why: "Homa, herbs, mandala, sound. A workshop week is not the resident circle." },
  { kind: "land-care", why: "Four certified organic hectares, an old orchard, forest on the edge. Guests stay off beds they did not plant." },
 ],
 juchowo: [
  { kind: "care-household", why: "Workshops for people with disabilities beside a dairy. The compact is dignity at work, and that a shop visitor is not a second coworker." },
  { kind: "animals-stock", why: "Closed-cycle cattle. Whose cows, whose milk, who is on the morning round. About 700 head in a 2016 count, confirm." },
  { kind: "volunteer-intern", why: "Internships for pupils and students. A week on 1,900 ha is labour and learning." },
  { kind: "land-care", why: "Hedges, sandy ground, Demeter conversion of former PGR dirt. Guests stay on the visit path. The 1,900 ha are not a park." },
 ],
 brzozowka: [
  { kind: "membership-trial", why: "A plot after talking to the foundation, or work at the centre. Confirm which of the sixteen are lived on." },
  { kind: "building-code", why: "Straw, clay, hemp, a 2016 dome of 300 bales. What a new roof may do without eating the centre. Prawo Eko-Brzozówki sits the wiec." },
  { kind: "course-host", why: "Workshops and KONOPIELKA. Which door is the gallery and which is a family’s kitchen on a private plot." },
  { kind: "land-care", why: "Sixteen plots around a common heart. Guests stay off działki they were not invited onto." },
 ],
 "ostoja-natury": [
  { kind: "membership-trial", why: "A spółdzielnia of eight founders from outside Tomaszyn. Confirm they are taking people." },
  { kind: "building-code", why: "Earthship-inspired houses and hemp construction. What is actually standing, what is a workshop, who lives in which shell." },
  { kind: "land-care", why: "Regenerative beds, topsoil, water cycle, biogas brief. Guests stay off fields they did not plant." },
  { kind: "guest-stay", why: "Workshops and a seasonal market. Houses are homes." },
 ],
 osada: [
  { kind: "volunteer-intern", why: "ESC and month-long laboratories. A placement is not membership of the association. Under-31 EU is a funding door." },
  { kind: "kitchen-table", why: "Shared meals, daily circles. Which table is grief work and which is supper. Guests of a month still have to learn which fridge is whose." },
  { kind: "quiet-practice", why: "Hospicing Modernity, Work That Reconnects, named inner work. A guest is asked; a drop-in is not owed a process." },
  { kind: "land-care", why: "Market garden, edible forest, water retention on Drawsko agricultural land. Guests stay on beds they were rostered to." },
 ],
};
