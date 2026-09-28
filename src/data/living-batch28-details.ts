import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch28LegalEntities: Record<string, LegalEntity[]> = {
  "heckfield-place": [
    { name: "Heckfield Place", kind: "Biodynamic-farm hotel", role: "Farm-estate hotel.", status: "current", layer: "enterprise", year: "2018", forms: ["Company"] },
    { name: "Home Farm", kind: "438-acre estate", role: "438 acres. Organic farm and biodynamic garden.", status: "current", layer: "land", year: "1763", forms: ["Freehold title"] },
  ],
  barrocal: [
    { name: "São Lourenço do Barrocal", kind: "Working-farm hotel", role: "Working-farm hotel.", status: "current", layer: "enterprise", year: "2016", forms: ["Company"] },
    { name: "Monsaraz estate", kind: "2,000-acre farm", role: "2,000 acres. Olives, vines, fruit, and horses.", status: "current", layer: "land", year: "1820", forms: ["Freehold title"] },
  ],
  "brush-creek-ranch": [
    { name: "Brush Creek Ranch", kind: "Working-ranch resort", role: "Working-ranch resort.", status: "current", layer: "enterprise", year: "2011", forms: ["Company"] },
    { name: "Saratoga ranch", kind: "30,000-acre cattle ranch", role: "30,000 acres. Greenhouse and Wagyu.", status: "current", layer: "land", year: "1884", forms: ["Freehold title"] },
  ],
  "hidden-vale": [
    { name: "Spicers Hidden Vale", kind: "Cattle-station retreat", role: "Cattle-station retreat of worldsapart.club.", status: "current", layer: "enterprise", year: "1894", forms: ["Company"] },
    { name: "Grandchester station", kind: "12,000-acre cattle farm", role: "12,000 acres. Market garden of petitpasseport.", status: "current", layer: "land", year: "1894", forms: ["Freehold title"] },
  ],
  "tea-trails": [
    { name: "Ceylon Tea Trails", kind: "Tea-estate bungalows", role: "Tea-bungalow resort.", status: "current", layer: "enterprise", year: "2005", forms: ["Company"] },
    { name: "Dilmah estates", kind: "Working tea estates", role: "Three working tea estates.", status: "current", layer: "land", year: "2005", forms: ["Freehold title"] },
  ],
  "awasi-mendoza": [
    { name: "Awasi Mendoza", kind: "Vineyard lodge", role: "Vineyard lodge.", status: "current", layer: "enterprise", year: "2005", forms: ["Company"] },
    { name: "Agrelo vineyard", kind: "55-acre vineyard", role: "55 acres of vines and a vegetable garden.", status: "current", layer: "land", year: "2005", forms: ["Freehold title"] },
  ],
  "winvian-farm": [
    { name: "Winvian Farm", kind: "Farm cottage hotel", role: "Relais farm hotel.", status: "current", layer: "enterprise", year: "2006", forms: ["Company"] },
    { name: "Morris acres", kind: "113-acre farm", role: "113 acres. Three-acre organic farm.", status: "current", layer: "land", year: "2006", forms: ["Freehold title"] },
  ],
  "cape-kidnappers": [
    { name: "Rosewood Cape Kidnappers", kind: "Sheep-station lodge", role: "Sheep-station lodge.", status: "current", layer: "enterprise", year: "2007", forms: ["Company"] },
    { name: "Hawke's Bay station", kind: "6,000-acre farm", role: "6,000-acre sheep and beef station.", status: "current", layer: "land", year: "2007", forms: ["Freehold title"] },
  ],
  "fellah-hotel": [
    { name: "Fellah Hotel", kind: "Farm hotel", role: "Farm hotel.", status: "current", layer: "enterprise", year: "2011", forms: ["Company"] },
    { name: "Ourika park", kind: "14-acre farm garden", role: "6-hectare park. Working farm.", status: "current", layer: "land", year: "2011", forms: ["Freehold title"] },
  ],
  "hacienda-altagracia": [
    { name: "Hacienda AltaGracia", kind: "Coffee-farm resort", role: "Coffee-farm resort.", status: "current", layer: "enterprise", year: "2021", forms: ["Company"] },
    { name: "Pérez Zeledón farm", kind: "180-acre coffee farm", role: "180 acres of coffee, gardens, and horses.", status: "current", layer: "land", year: "2021", forms: ["Freehold title"] },
  ],
};

export const livingBatch28Land: Record<string, LandOwnership> = {
  "heckfield-place": {
    owner: "The estate",
    complexity: "simple",
    tenure: "Private farm estate",
    howHeld: "438 acres. Rooms.",
    narrative: "A Hampshire farmstay.",
    divided: [
      { label: "Farm, garden, rooms", holder: "The hotel", share: "Private", what: "Private farm estate." },
    ],
  },
  barrocal: {
    owner: "The Uva family",
    complexity: "simple",
    tenure: "Private working farm",
    howHeld: "2,000 acres. Cottages.",
    narrative: "An Alentejo farmstay. A cottage is not Monsaraz.",
    divided: [
      { label: "Olives, vines, cottages", holder: "The estate", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "brush-creek-ranch": {
    owner: "The White family",
    complexity: "simple",
    tenure: "Private working ranch",
    howHeld: "30,000 acres. Cabins.",
    narrative: "A Saratoga ranch stay.",
    divided: [
      { label: "Cattle, greenhouse, cabins", holder: "The ranch", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "hidden-vale": {
    owner: "The retreat",
    complexity: "simple",
    tenure: "Private cattle station",
    howHeld: "12,000 acres. Cottages of worldsapart.club.",
    narrative: "A Grandchester cattle stay. A cottage is not the vale.",
    divided: [
      { label: "Cattle, garden, cottages", holder: "The retreat", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "tea-trails": {
    owner: "Dilmah / Resplendent Ceylon",
    complexity: "simple",
    tenure: "Private tea estates",
    howHeld: "Working tea. Bungalows.",
    narrative: "A Hatton tea stay.",
    divided: [
      { label: "Tea, gardens, bungalows", holder: "The estates", share: "Private", what: "Private tea estates." },
    ],
  },
  "awasi-mendoza": {
    owner: "Awasi",
    complexity: "simple",
    tenure: "Private vineyard",
    howHeld: "55 acres. Villas.",
    narrative: "A Mendoza vineyard stay. Vines, garden, villas.",
    divided: [
      { label: "Vines, garden, villas", holder: "The lodge", share: "Private", what: "You book a villa." },
    ],
  },
  "winvian-farm": {
    owner: "The Smith family",
    complexity: "simple",
    tenure: "Private farm hotel",
    howHeld: "113 acres. Cottages.",
    narrative: "A Morris farmstay. A cottage is not Alain White Road.",
    divided: [
      { label: "Garden, cottages, woods", holder: "The farm", share: "Private", what: "Private farm hotel." },
    ],
  },
  "cape-kidnappers": {
    owner: "The station / Rosewood",
    complexity: "simple",
    tenure: "Private sheep station",
    howHeld: "6,000 acres. Suites.",
    narrative: "A Hawke's Bay farmstay. A suite is not Te Awanga.",
    divided: [
      { label: "Sheep, beef, suites", holder: "The lodge", share: "Private", what: "Private sheep station." },
    ],
  },
  "fellah-hotel": {
    owner: "The hotel",
    complexity: "simple",
    tenure: "Private farm garden",
    howHeld: "14 acres. Villas.",
    narrative: "A Marrakech farmstay.",
    divided: [
      { label: "Garden, farm, villas", holder: "The hotel", share: "Private", what: "Private farm garden." },
    ],
  },
  "hacienda-altagracia": {
    owner: "Auberge",
    complexity: "simple",
    tenure: "Private coffee farm",
    howHeld: "180 acres. Casitas.",
    narrative: "A Pérez Zeledón coffee stay.",
    divided: [
      { label: "Coffee, gardens, casitas", holder: "The hacienda", share: "Private", what: "Private coffee farm." },
    ],
  },
};

export const livingBatch28Funding: Record<string, CommunityFunding> = {
  "heckfield-place": {
    overview: "Rooms and farm restaurants.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 45 rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "About 45 rooms", year: "2018", certainty: "estimated", kind: "business", note: "Rooms and farm restaurants." },
    ],
  },
  barrocal: {
    overview: "Rooms, cottages, and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Guest rooms and cottages",
    grants: [],
    private: [
      { source: "Guests", amount: "Rooms and cottages", year: "2016", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "brush-creek-ranch": {
    overview: "All-inclusive ranch stays.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Up to 155 guests",
    grants: [],
    private: [
      { source: "Guests", amount: "Up to 155 guests", year: "2011", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "hidden-vale": {
    overview: "Cottages and farm kitchen of worldsapart.club.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cottages and cabins",
    grants: [],
    private: [
      { source: "Guests", amount: "Cottages of worldsapart.club", year: "1894", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "tea-trails": {
    overview: "All-inclusive bungalow rooms.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "27 rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "27 rooms", year: "2005", certainty: "estimated", kind: "business", note: "All-inclusive bungalow rooms." },
    ],
  },
  "awasi-mendoza": {
    overview: "Villas and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "17 villas",
    grants: [],
    private: [
      { source: "Guests", amount: "17 villas", year: "2005", certainty: "estimated", kind: "business", note: "Villas and farm kitchen." },
    ],
  },
  "winvian-farm": {
    overview: "Cottages and seed-to-table.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "18 cottages",
    grants: [],
    private: [
      { source: "Guests", amount: "18 cottages", year: "2006", certainty: "estimated", kind: "business", note: "Cottages and seed-to-table dining." },
    ],
  },
  "cape-kidnappers": {
    overview: "Suites and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 22 suites",
    grants: [],
    private: [
      { source: "Guests", amount: "About 22 suites", year: "2007", certainty: "estimated", kind: "business", note: "Suites, farm kitchen, and golf." },
    ],
  },
  "fellah-hotel": {
    overview: "Villa rooms and garden kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 10 villas",
    grants: [],
    private: [
      { source: "Guests", amount: "Villa rooms", year: "2011", certainty: "estimated", kind: "business", note: "Villa rooms, garden kitchen, and spa." },
    ],
  },
  "hacienda-altagracia": {
    overview: "Casitas and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "50 casitas",
    grants: [],
    private: [
      { source: "Guests", amount: "50 casitas", year: "2021", certainty: "estimated", kind: "business", note: "Casitas, farm kitchen, and riding." },
    ],
  },
};

export const livingBatch28VisitJoin: Record<string, VisitJoin> = {
  "heckfield-place": {
    visit: 5,
    join: 1,
    visitProcess: "Heckfield, Hook RG27 0LD. Book. +44 (0) 118 932 6868.",
    joinProcess: "Hotel staff.",
  },
  barrocal: {
    visit: 5,
    join: 1,
    visitProcess: "7200-177 Monsaraz. Book. +351 266 247 140. An Évora drive.",
    joinProcess: "Estate staff. A cottage is not Monsaraz.",
  },
  "brush-creek-ranch": {
    visit: 5,
    join: 1,
    visitProcess: "66 Brush Creek Ranch Road, Saratoga. Book. (307) 327-5284.",
    joinProcess: "Ranch staff.",
  },
  "hidden-vale": {
    visit: 4,
    join: 1,
    visitProcess: "617 Grandchester Mount Mort Road. Book of worldsapart.club/spicers/hidden-vale. 1300 179 413. A Brisbane drive.",
    joinProcess: "Retreat staff. A cottage is not Grandchester.",
  },
  "tea-trails": {
    visit: 5,
    join: 1,
    visitProcess: "Dunkeld Estate, Hatton. Book. A Colombo drive then the highlands.",
    joinProcess: "Estate staff.",
  },
  "awasi-mendoza": {
    visit: 4,
    join: 1,
    visitProcess: "Calle Costa Flores, Alto Agrelo, Luján de Cuyo. Book. +(54-9) 2615-335203.",
    joinProcess: "Lodge staff.",
  },
  "winvian-farm": {
    visit: 5,
    join: 1,
    visitProcess: "155 Alain White Road, Morris. Book. Synxis. (860) 567-9600.",
    joinProcess: "Farm staff. A cottage is not Morris.",
  },
  "cape-kidnappers": {
    visit: 5,
    join: 1,
    visitProcess: "446 Clifton Road, Te Awanga. Book. +64 6 875 1900. A Napier drive.",
    joinProcess: "Lodge staff. A suite is not the station.",
  },
  "fellah-hotel": {
    visit: 4,
    join: 1,
    visitProcess: "Km 13, Route de l'Ourika, Marrakech. Book. +212 5243-84300.",
    joinProcess: "Hotel staff.",
  },
  "hacienda-altagracia": {
    visit: 5,
    join: 1,
    visitProcess: "Santa Teresa, Cajón, Pérez Zeledón. Book. (855) 812-2212.",
    joinProcess: "Hacienda staff.",
  },
};

export const livingBatch28DailyLife: Record<string, DailyLife> = {
  "heckfield-place": {
    typical: [
      { title: "Home Farm", detail: "Organic dairy and stock." },
      { title: "Biodynamic garden", detail: "Market Garden." },
      { title: "Marle and Hearth", detail: "Kitchens from the rows." },
    ],
    unique: { title: "A Georgian house that still milks", detail: "The Georgian house was built 1763–66; the hotel opened in September 2018. Organic Home Farm and the biodynamic Market Garden feed Marle and Hearth on 438 Hampshire acres, with a Guernsey dairy, pigs, sheep, and an orchard." },
  },
  barrocal: {
    typical: [
      { title: "Olive groves", detail: "Working estate groves." },
      { title: "Estate vines", detail: "Winery." },
      { title: "Cottages in the monte", detail: "Guest cottages." },
    ],
    unique: { title: "Sleep in a farming village that still farms", detail: "Uva 1820. A cottage is not Monsaraz." },
  },
  "brush-creek-ranch": {
    typical: [
      { title: "Wagyu cattle", detail: "brushcreekranch.com cuisine line." },
      { title: "Greenhouse", detail: "20,000 square feet." },
      { title: "Lodge cabins", detail: "72 bedrooms." },
    ],
    unique: { title: "A cattle ranch that grows under glass", detail: "2011 of White Lodging." },
  },
  "hidden-vale": {
    typical: [
      { title: "Cattle station", detail: "12,000 acres." },
      { title: "Market garden", detail: "petitpasseport." },
      { title: "Queenslander cottages", detail: "worldsapart.club." },
    ],
    unique: { title: "A cattle vale with a kitchen garden", detail: "1894 farmhouse of Travel Weekly. A cottage is not Grandchester." },
  },
  "tea-trails": {
    typical: [
      { title: "Working tea", detail: "Dilmah estates." },
      { title: "Five bungalows", detail: "Castlereagh, Summerville, Dunkeld, Norwood, and Tientsin." },
      { title: "Castlereagh Lake", detail: "Three working tea estates around the lake." },
    ],
    unique: { title: "Sleep in a planter's house on living tea", detail: "Resplendent Ceylon opened the world's first tea-bungalow resort in 2005. Five planters' bungalows — Castlereagh, Summerville, Dunkeld, Norwood, and Tientsin — sit on working Dilmah tea around Castlereagh Lake, with about six acres of garden at each house." },
  },
  "awasi-mendoza": {
    typical: [
      { title: "Malbec rows", detail: "55 acres." },
      { title: "Vegetable garden", detail: "Kitchen garden on the estate." },
      { title: "Seventeen villas", detail: "Villas in the vineyard rows." },
    ],
    unique: { title: "A vineyard lodge that still grows supper", detail: "Opened 2005 as Cavas Wine Lodge. Awasi from 2025. The kitchen still pulls from the garden they planted beside those Agrelo Malbec rows." },
  },
  "winvian-farm": {
    typical: [
      { title: "Three-acre organic farm", detail: "Three organic acres." },
      { title: "Four greenhouses", detail: "Seed-to-table." },
      { title: "Eighteen cottages", detail: "18 cottages." },
    ],
    unique: { title: "Architect cottages beside the rows", detail: "Maggie Smith and Heather Smith Winkelmann opened the 18 architect cottages in December 2006 on 113 Litchfield Hills acres. A three-acre organic farm and four greenhouses feed the kitchen." },
  },
  "cape-kidnappers": {
    typical: [
      { title: "Sheep and beef", detail: "6,000 acres." },
      { title: "Shepherding", detail: "Farm dogs." },
      { title: "Clifftop suites", detail: "Over the Pacific." },
    ],
    unique: { title: "A Pacific lodge on a working station", detail: "Julian and Josie Robertson opened the lodge in 2007 on a 6,000-acre Hawke's Bay sheep and beef station. Rosewood took the public stay door in December 2023. The peninsula is predator-proof fenced; shepherding still runs with farm dogs." },
  },
  "fellah-hotel": {
    typical: [
      { title: "Kitchen garden", detail: "Kitchen garden on the farm." },
      { title: "Goats and hens", detail: "Goats, hens, and a donkey." },
      { title: "Park villas", detail: "About 10 villas in a 6-hectare park." },
    ],
    unique: { title: "A Marrakech farm at the foot of the Atlas", detail: "A farm-and-art hotel on the Ourika road: about 10 villas in a 6-hectare park, with a kitchen garden, goats, hens, and a donkey on about 14 acres." },
  },
  "hacienda-altagracia": {
    typical: [
      { title: "Coffee farm", detail: "180 acres of coffee." },
      { title: "Chef's gardens", detail: "Organic chef's gardens." },
      { title: "Fifty casitas", detail: "50 casitas." },
    ],
    unique: { title: "A Talamanca coffee farm you can sleep on", detail: "Auberge opened this Pérez Zeledón coffee-farm resort in November 2021; 50 casitas sit on 180 acres of coffee, chef's gardens, and horses." },
  },
};

export const livingBatch28Informal: Record<string, InformalAgreement[]> = {
  "heckfield-place": [
    { kind: "guest-stay", why: "Rooms." },
    { kind: "kitchen-table", why: "Marle and Hearth from Home Farm." },
    { kind: "animals-stock", why: "Guernsey cows, pigs, and sheep." },
    { kind: "land-care", why: "Biodynamic garden. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Farm tours." },
  ],
  barrocal: [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "kitchen-table", why: "Farm restaurants." },
    { kind: "animals-stock", why: "Horses." },
    { kind: "land-care", why: "Olives and vines. Guests stay off groves they were not asked onto." },
    { kind: "course-host", why: "Winery." },
  ],
  "brush-creek-ranch": [
    { kind: "guest-stay", why: "Cabins." },
    { kind: "kitchen-table", why: "Cheyenne Club from the greenhouse." },
    { kind: "animals-stock", why: "Wagyu cattle." },
    { kind: "land-care", why: "30,000 acres. Guests stay off pastures they were not asked onto." },
    { kind: "course-host", why: "Ranch days." },
  ],
  "hidden-vale": [
    { kind: "guest-stay", why: "Cottages of worldsapart.club." },
    { kind: "kitchen-table", why: "Homage of SMH." },
    { kind: "animals-stock", why: "Cattle and chickens of petitpasseport." },
    { kind: "land-care", why: "12,000 acres. Guests stay off paddocks they were not asked onto." },
    { kind: "course-host", why: "Farm and koala walks of petitpasseport." },
  ],
  "tea-trails": [
    { kind: "guest-stay", why: "Bungalows." },
    { kind: "kitchen-table", why: "Bungalow kitchens." },
    { kind: "land-care", why: "Working tea. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Estate walks." },
  ],
  "awasi-mendoza": [
    { kind: "guest-stay", why: "Villas." },
    { kind: "kitchen-table", why: "Garden and estate wine." },
    { kind: "land-care", why: "55-acre vineyard. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Harvest." },
  ],
  "winvian-farm": [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "kitchen-table", why: "Seed-to-table." },
    { kind: "land-care", why: "Three-acre farm. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Garden walks." },
  ],
  "cape-kidnappers": [
    { kind: "guest-stay", why: "Suites." },
    { kind: "kitchen-table", why: "Farm kitchen." },
    { kind: "animals-stock", why: "Sheep and cattle." },
    { kind: "land-care", why: "6,000 acres. Guests stay off paddocks they were not asked onto." },
    { kind: "course-host", why: "Shepherding." },
  ],
  "fellah-hotel": [
    { kind: "guest-stay", why: "Villas." },
    { kind: "kitchen-table", why: "Garden kitchen." },
    { kind: "animals-stock", why: "Goats, hens, and a donkey." },
    { kind: "land-care", why: "Kitchen garden. Guests stay off beds they were not asked onto." },
    { kind: "quiet-practice", why: "Spa and yoga." },
  ],
  "hacienda-altagracia": [
    { kind: "guest-stay", why: "Casitas." },
    { kind: "kitchen-table", why: "Chef's gardens." },
    { kind: "animals-stock", why: "About 40 horses." },
    { kind: "land-care", why: "Coffee farm. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Riding and farm walks." },
  ],
};

export const livingBatch28Governance: Record<string, Governance> = {
  "heckfield-place": {
    model: "founder",
    modelLabel: "Biodynamic farm hotel",
    unique: false,
    summary: "heckfieldplace.com. You book a room. You do not buy Heckfield.",
    whoDecides: "The estate.",
    bodies: [
      { name: "Heckfield Place", role: "heckfieldplace.com." },
      { name: "Home Farm", role: "Organic farm." },
    ],
    howItRuns: "Book.",
  },
  barrocal: {
    model: "founder",
    modelLabel: "Family working-farm hotel",
    unique: false,
    summary: "Uva family. You book a cottage. You do not buy Monsaraz.",
    whoDecides: "The family estate.",
    bodies: [
      { name: "São Lourenço do Barrocal", role: "Working-farm hotel." },
      { name: "The farm", role: "2,000 acres." },
    ],
    howItRuns: "Book.",
  },
  "brush-creek-ranch": {
    model: "founder",
    modelLabel: "Working ranch with a farm",
    unique: false,
    summary: "brushcreekranch.com. You book a cabin. You do not buy Saratoga.",
    whoDecides: "The ranch.",
    bodies: [
      { name: "Brush Creek Ranch", role: "brushcreekranch.com." },
      { name: "The Farm", role: "Greenhouse and cattle." },
    ],
    howItRuns: "Book.",
  },
  "hidden-vale": {
    model: "founder",
    modelLabel: "Cattle-station retreat",
    unique: false,
    summary: "worldsapart.club. You book a cottage. You do not buy Grandchester.",
    whoDecides: "The retreat.",
    bodies: [
      { name: "Spicers Hidden Vale", role: "worldsapart.club." },
      { name: "The station", role: "12,000 acres." },
    ],
    howItRuns: "Book of worldsapart.club/spicers/hidden-vale.",
  },
  "tea-trails": {
    model: "founder",
    modelLabel: "Tea-estate bungalows",
    unique: false,
    summary: "Private tea-estate bungalows.",
    whoDecides: "Resplendent Ceylon.",
    bodies: [
      { name: "Ceylon Tea Trails", role: "resplendentceylon.com." },
      { name: "Dilmah estates", role: "Working tea." },
    ],
    howItRuns: "Book.",
  },
  "awasi-mendoza": {
    model: "founder",
    modelLabel: "Vineyard lodge",
    unique: false,
    summary: "You book a villa.",
    whoDecides: "Awasi.",
    bodies: [
      { name: "Awasi Mendoza", role: "The lodge." },
      { name: "The vineyard", role: "55 acres." },
    ],
    howItRuns: "Book.",
  },
  "winvian-farm": {
    model: "founder",
    modelLabel: "Farm cottage hotel",
    unique: false,
    summary: "You book a cottage. You do not buy Morris.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Winvian Farm", role: "Farm cottage hotel." },
      { name: "The garden", role: "Three organic acres." },
    ],
    howItRuns: "Book.",
  },
  "cape-kidnappers": {
    model: "founder",
    modelLabel: "Sheep-station lodge",
    unique: false,
    summary: "You book a suite. You do not buy Te Awanga.",
    whoDecides: "The lodge.",
    bodies: [
      { name: "The Farm at Cape Kidnappers", role: "The lodge." },
      { name: "The station", role: "6,000 acres." },
    ],
    howItRuns: "Book.",
  },
  "fellah-hotel": {
    model: "founder",
    modelLabel: "Farm hotel",
    unique: false,
    summary: "Private farm hotel.",
    whoDecides: "The hotel.",
    bodies: [
      { name: "Fellah Hotel", role: "Farm hotel." },
      { name: "The farm", role: "Kitchen garden." },
    ],
    howItRuns: "Book.",
  },
  "hacienda-altagracia": {
    model: "founder",
    modelLabel: "Coffee-farm resort",
    unique: false,
    summary: "Private coffee-farm resort.",
    whoDecides: "The hacienda.",
    bodies: [
      { name: "Hacienda AltaGracia", role: "Coffee-farm resort." },
      { name: "The coffee farm", role: "180 acres." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch28Leaders: Record<string, VillageLeaders> = {
  "heckfield-place": {
    people: [],
    office: { url: "https://www.heckfieldplace.com/", address: "Heckfield Place, Heckfield, Hook RG27 0LD, United Kingdom", email: "enquiries@heckfieldplace.com", phone: "+44 (0) 118 932 6868" },
  },
  barrocal: {
    people: [],
    office: { url: "https://barrocal.pt/", address: "São Lourenço do Barrocal, 7200-177 Monsaraz, Portugal", email: "reservations@barrocal.pt", phone: "+351 266 247 140" },
  },
  "brush-creek-ranch": {
    people: [],
    office: { url: "https://www.brushcreekranch.com/", address: "66 Brush Creek Ranch Road, Saratoga, WY 82331", email: "guestservices@brushcreekranch.com", phone: "(307) 327-5284" },
  },
  "hidden-vale": {
    people: [],
    office: { url: "https://www.worldsapart.club/spicers/hidden-vale", address: "617 Grandchester Mount Mort Road, Grandchester QLD 4340", phone: "1300 179 413" },
  },
  "tea-trails": {
    people: [],
    office: { url: "https://www.resplendentceylon.com/resort/ceylon-tea-trails/", address: "Dunkeld Estate, Hatton, Central Province, Sri Lanka" },
  },
  "awasi-mendoza": {
    people: [],
    office: { url: "https://awasi.com/mendoza/", address: "Calle Costa Flores, Alto Agrelo, Luján de Cuyo, Mendoza 5507, Argentina", phone: "+(54-9) 2615-335203" },
  },
  "winvian-farm": {
    people: [],
    office: { url: "https://www.winvian.com/", address: "155 Alain White Road, Morris, CT 06763", email: "info@winvian.com", phone: "(860) 567-9600" },
  },
  "cape-kidnappers": {
    people: [],
    office: { url: "https://www.rosewoodhotels.com/en/cape-kidnappers", address: "446 Clifton Road, Te Awanga, Hawke's Bay 4180, New Zealand", email: "capekidnappers@rosewoodhotels.com", phone: "+64 6 875 1900" },
  },
  "fellah-hotel": {
    people: [],
    office: { url: "https://www.fellah-hotel.com/", address: "Km 13, Route de l'Ourika, Canal Zarraba, 40000 Marrakech, Morocco", email: "info@fellah-hotel.com", phone: "+212 5243-84300" },
  },
  "hacienda-altagracia": {
    people: [],
    office: { url: "https://auberge.com/altagracia/", address: "Santa Teresa, Cajón, Pérez Zeledón, Costa Rica", phone: "(855) 812-2212" },
  },
};

export const livingBatch28Accommodations: Record<string, Accommodations> = {
  "heckfield-place": {
    visitor: {
      overview: "About 38 rooms, 6 suites, and a cottage. Confirm current with +44 (0) 118 932 6868.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "suite", "cottage"], detail: "Six room types." },
      other: { available: true, types: ["spa", "farm kitchen"], detail: "Marle, Hearth, and Home Farm." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  barrocal: {
    visitor: {
      overview: "Guest rooms and cottages in the restored monte. Confirm current with +351 266 247 140.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "cottage"], detail: "Farm rooms and barn cottages." },
      other: { available: true, types: ["spa", "winery", "farm kitchen"], detail: "Susanne Kaufmann spa and winery." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "brush-creek-ranch": {
    visitor: {
      overview: "Lodge rooms, log cabins, Magee Homestead, and glamping. Confirm current with (307) 327-5284.",
      camping: { available: true, types: ["glamping"], detail: "Platte Canyon glamping — a booked camp, not a public campground." },
      rooms: { available: true, types: ["lodge room", "cabin", "house"], detail: "72 bedrooms at the Lodge." },
      other: { available: true, types: ["ranch day", "farm kitchen"], detail: "Greenhouse and creamery." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hidden-vale": {
    visitor: {
      overview: "Queenslander cottages and cabins of worldsapart.club / petitpasseport. Confirm current with 1300 179 413.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "cabin"], detail: "Heritage cottages and contemporary cabins of SMH." },
      other: { available: true, types: ["farm kitchen", "outdoor bath"], detail: "Homage and private decks of petitpasseport." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tea-trails": {
    visitor: {
      overview: "27 rooms in five planters' bungalows. Confirm current with resplendentceylon.com.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["bungalow room", "suite"], detail: "Castlereagh, Summerville, Dunkeld, Norwood, and Tientsin." },
      other: { available: true, types: ["estate walk", "bungalow kitchen"], detail: "Working tea." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "awasi-mendoza": {
    visitor: {
      overview: "17 private villas in the vineyard. Confirm current with +(54-9) 2615-335203.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["villa"], detail: "Villas among the Malbec." },
      other: { available: true, types: ["farm kitchen", "wine tasting"], detail: "Garden and estate wine." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "winvian-farm": {
    visitor: {
      overview: "18 distinctive cottages and a master suite. Confirm current with (860) 567-9600.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "suite"], detail: "Architect cottages." },
      other: { available: true, types: ["spa", "farm kitchen"], detail: "Seed-to-table." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "cape-kidnappers": {
    visitor: {
      overview: "About 22 suites and a villa. Confirm current with +64 6 875 1900.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["suite", "villa"], detail: "Lodge suites." },
      other: { available: true, types: ["farm walk", "golf"], detail: "Shepherding." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "fellah-hotel": {
    visitor: {
      overview: "Villa rooms in a 6-hectare park. Confirm current with +212 5243-84300.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["villa", "inn room"], detail: "About 10 villas." },
      other: { available: true, types: ["spa", "farm kitchen"], detail: "Garden and farm." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hacienda-altagracia": {
    visitor: {
      overview: "50 casitas on the coffee farm. Confirm current with (855) 812-2212.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["casita"], detail: "Casitas." },
      other: { available: true, types: ["spa", "riding", "farm kitchen"], detail: "Coffee farm and horses." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
