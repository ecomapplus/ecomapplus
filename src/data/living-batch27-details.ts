import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch27LegalEntities: Record<string, LegalEntity[]> = {
  "hacienda-zuleta": [
    { name: "Hacienda Zuleta", kind: "Working-farm hacienda", role: "Working-farm hacienda.", status: "current", layer: "enterprise", year: "1691", forms: ["Company"] },
    { name: "Angochagua farm", kind: "4,000-acre working farm", role: "4,000 acres of dairy, trout, sheep, cheese, and horses.", status: "current", layer: "land", year: "1691", forms: ["Freehold title"] },
  ],
  "rancho-la-puerta": [
    { name: "Rancho La Puerta", kind: "Destination spa farm", role: "Destination spa and organic farm.", status: "current", layer: "enterprise", year: "1940", forms: ["Company"] },
    { name: "Kuchumaa acres", kind: "4,000-acre ranch", role: "4,000 acres. Tres Estrellas organic farm.", status: "current", layer: "land", year: "1940", forms: ["Freehold title"] },
  ],
  "gibbs-farm": [
    { name: "Gibb's Farm", kind: "Coffee-farm lodge", role: "Coffee-farm lodge.", status: "current", layer: "enterprise", year: "1929", forms: ["Company"] },
    { name: "Karatu plantation", kind: "80-acre organic farm", role: "Over 80 acres of coffee, gardens, dairy, and pigs.", status: "current", layer: "land", year: "1929", forms: ["Freehold title"] },
  ],
  "blackberry-farm": [
    { name: "Blackberry Farm", kind: "Farm resort", role: "Relais & Châteaux farm resort.", status: "current", layer: "enterprise", year: "1976", forms: ["Company"] },
    { name: "Millers Cove farm", kind: "4,200-acre farm", role: "4,200 acres. Gardens and sheep.", status: "current", layer: "land", year: "1940", forms: ["Freehold title"] },
  ],
  "four-seasons-chiang-mai": [
    { name: "Four Seasons Resort Chiang Mai", kind: "Rice-paddy resort", role: "Rice-paddy resort.", status: "current", layer: "enterprise", year: "1995", forms: ["Company"] },
    { name: "Mae Rim paddies", kind: "32-acre rice farm", role: "32 acres of working rice paddies of Indagare / Condé Nast Traveler.", status: "current", layer: "land", year: "1995", forms: ["Freehold title"] },
  ],
  "bambu-indah": [
    { name: "Bambu Indah", kind: "Permaculture hotel", role: "Permaculture hotel.", status: "current", layer: "enterprise", year: "2005", forms: ["Company"] },
    { name: "Sayan hillside", kind: "Rice and garden land", role: "Permaculture gardens, rice, and river.", status: "current", layer: "land", year: "2005", forms: ["Freehold title"] },
  ],
  "borgo-santo-pietro": [
    { name: "Relais Borgo Santo Pietro S.p.A.", kind: "Organic-farm hotel", role: "Organic-farm hotel.", status: "current", layer: "enterprise", year: "2008", forms: ["Company"] },
    { name: "Palazzetto estate", kind: "300-acre organic farm", role: "300 acres of market gardens, vines, pigs, and dairy.", status: "current", layer: "land", year: "2001", forms: ["Freehold title"] },
  ],
  "inkaterra-urubamba": [
    { name: "Inkaterra Hacienda Urubamba", kind: "Organic-farm hacienda", role: "Organic-farm hacienda.", status: "current", layer: "enterprise", year: "2015", forms: ["Company"] },
    { name: "Huayoccari farm", kind: "100-acre hacienda", role: "100 acres. 10-acre organic farm.", status: "current", layer: "land", year: "2015", forms: ["Freehold title"] },
  ],
  "chable-yucatan": [
    { name: "Chablé Yucatán", kind: "Hacienda farm hotel", role: "Hacienda farm hotel.", status: "current", layer: "enterprise", year: "2016", forms: ["Company"] },
    { name: "Chocholá hacienda", kind: "750-acre jungle farm", role: "750 acres. La Granja de Abu.", status: "current", layer: "land", year: "2016", forms: ["Freehold title"] },
  ],
  "lodge-at-blue-sky": [
    { name: "The Lodge at Blue Sky", kind: "Working-ranch resort", role: "Working-ranch resort.", status: "current", layer: "enterprise", year: "2019", forms: ["Company"] },
    { name: "Wanship ranch", kind: "4,000-acre ranch", role: "4,000 acres. Gracie’s Farm.", status: "current", layer: "land", year: "2019", forms: ["Freehold title"] },
  ],
};

export const livingBatch27Land: Record<string, LandOwnership> = {
  "hacienda-zuleta": {
    owner: "The Plaza Lasso family",
    complexity: "simple",
    tenure: "Private working farm",
    howHeld: "4,000 acres. Rooms.",
    narrative: "An Andean working farm. Dairy, cheese, horses, rooms.",
    divided: [
      { label: "Dairy, cheese, horses, rooms", holder: "The hacienda", share: "Private", what: "You book a room." },
    ],
  },
  "rancho-la-puerta": {
    owner: "The Szekely family",
    complexity: "simple",
    tenure: "Private spa ranch",
    howHeld: "4,000 acres. Tres Estrellas.",
    narrative: "A Tecate spa farm. A casita is not Kuchumaa.",
    divided: [
      { label: "Farm, gardens, casitas", holder: "The ranch", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "gibbs-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private coffee plantation",
    howHeld: "Over 80 acres. Cottages.",
    narrative: "A Karatu coffee farm.",
    divided: [
      { label: "Coffee, gardens, dairy, cottages", holder: "The farm", share: "Private", what: "Private coffee plantation." },
    ],
  },
  "blackberry-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private farm resort",
    howHeld: "4,200 acres. Cottages.",
    narrative: "A Smoky Mountain farmstay.",
    divided: [
      { label: "Gardens, sheep, cottages", holder: "The farm", share: "Private", what: "Private farm resort." },
    ],
  },
  "four-seasons-chiang-mai": {
    owner: "The resort",
    complexity: "simple",
    tenure: "Private rice-paddy resort",
    howHeld: "32 acres of Indagare. Pavilions.",
    narrative: "A Mae Rim rice stay. A pavilion is not the valley.",
    divided: [
      { label: "Paddies, pavilions, gardens", holder: "The resort", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "bambu-indah": {
    owner: "The Hardys",
    complexity: "simple",
    tenure: "Private permaculture hotel",
    howHeld: "Hillside rice and gardens. Houses.",
    narrative: "A Sayan permaculture stay. Gardens, rice, houses.",
    divided: [
      { label: "Gardens, rice, houses", holder: "The hotel", share: "Private", what: "You book a house." },
    ],
  },
  "borgo-santo-pietro": {
    owner: "The Thottrups",
    complexity: "simple",
    tenure: "Private organic estate",
    howHeld: "300 acres. Suites.",
    narrative: "A Chiusdino farmstay. A suite is not Palazzetto.",
    divided: [
      { label: "Gardens, vines, pigs, suites", holder: "The borgo", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "inkaterra-urubamba": {
    owner: "Inkaterra",
    complexity: "simple",
    tenure: "Private organic hacienda",
    howHeld: "100 acres. Casitas.",
    narrative: "A Sacred Valley farmstay.",
    divided: [
      { label: "Farm, casitas, forest", holder: "The hacienda", share: "Private", what: "You book a casita." },
    ],
  },
  "chable-yucatan": {
    owner: "The hotel",
    complexity: "simple",
    tenure: "Private hacienda farm",
    howHeld: "750 acres. Casitas.",
    narrative: "A Chocholá farmstay. A casita is not the cenote.",
    divided: [
      { label: "Farm, jungle, casitas", holder: "The hotel", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "lodge-at-blue-sky": {
    owner: "The Phillips family / Auberge",
    complexity: "simple",
    tenure: "Private working ranch",
    howHeld: "4,000 acres. Suites.",
    narrative: "A Wanship ranch stay. A suite is not Old Lincoln Highway.",
    divided: [
      { label: "Ranch, farm, suites", holder: "The lodge", share: "Private", what: "A booking is not a deed." },
    ],
  },
};

export const livingBatch27Funding: Record<string, CommunityFunding> = {
  "hacienda-zuleta": {
    overview: "Full-board rooms and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Twenty-one rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Twenty-one rooms", year: "1691", certainty: "estimated", kind: "business", note: "Full-board rooms, farm tours, and riding." },
    ],
  },
  "rancho-la-puerta": {
    overview: "All-inclusive spa weeks.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Casitas",
    grants: [],
    private: [
      { source: "Guests", amount: "Casitas", year: "1940", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "gibbs-farm": {
    overview: "Full-board cottages and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Seventeen cottages",
    grants: [],
    private: [
      { source: "Guests", amount: "Seventeen cottages", year: "1929", certainty: "estimated", kind: "business", note: "Full-board cottages." },
    ],
  },
  "blackberry-farm": {
    overview: "Rooms, Farmstead dining, and spa.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 68 rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "About 68 rooms", year: "1976", certainty: "estimated", kind: "business", note: "Rooms, Farmstead dining, and spa." },
    ],
  },
  "four-seasons-chiang-mai": {
    overview: "Pavilions and dining.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 98 pavilions of Condé Nast Traveler",
    grants: [],
    private: [
      { source: "Guests", amount: "About 98 pavilions of Condé Nast Traveler", year: "1995", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "bambu-indah": {
    overview: "Houses and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Javanese houses and bamboo rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Javanese houses and bamboo rooms", year: "2005", certainty: "estimated", kind: "business", note: "Houses and farm kitchen." },
    ],
  },
  "borgo-santo-pietro": {
    overview: "Suites, restaurants, and spa.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "22 rooms and suites",
    grants: [],
    private: [
      { source: "Guests", amount: "22 rooms and suites", year: "2008", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "inkaterra-urubamba": {
    overview: "Casitas and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Casa Hacienda and about 24 casitas",
    grants: [],
    private: [
      { source: "Guests", amount: "Casa Hacienda and about 24 casitas", year: "2015", certainty: "estimated", kind: "business", note: "Casitas and farm kitchen." },
    ],
  },
  "chable-yucatan": {
    overview: "Casitas, spa, and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 40 casitas",
    grants: [],
    private: [
      { source: "Guests", amount: "About 40 casitas", year: "2016", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "lodge-at-blue-sky": {
    overview: "Suites, ranch days, and Yuta.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 46 rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "About 46 rooms", year: "2019", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
};

export const livingBatch27VisitJoin: Record<string, VisitJoin> = {
  "hacienda-zuleta": {
    visit: 4,
    join: 1,
    visitProcess: "Angochagua, Imbabura. Book, 72 hours ahead.",
    joinProcess: "Hacienda staff.",
  },
  "rancho-la-puerta": {
    visit: 5,
    join: 1,
    visitProcess: "Carretera Mexicali–Tijuana Km 136.5, Tecate. Book. (800) 443-7565. A San Diego shuttle.",
    joinProcess: "Ranch staff. A casita is not Kuchumaa.",
  },
  "gibbs-farm": {
    visit: 4,
    join: 1,
    visitProcess: "Karatu, P.O. Box 280. Book. +255 272 970 438.",
    joinProcess: "Farm staff.",
  },
  "blackberry-farm": {
    visit: 5,
    join: 1,
    visitProcess: "1471 W Millers Cove Rd, Walland. Book. (800) 557-8864.",
    joinProcess: "Farm staff.",
  },
  "four-seasons-chiang-mai": {
    visit: 5,
    join: 1,
    visitProcess: "502 Moo 1, Mae Rim–Samoeng Old Road. Book. +66 (53) 298 181.",
    joinProcess: "Resort staff. A pavilion is not Mae Rim.",
  },
  "bambu-indah": {
    visit: 5,
    join: 1,
    visitProcess: "Jl. Baung, Sayan, Ubud. Book.",
    joinProcess: "Hotel staff.",
  },
  "borgo-santo-pietro": {
    visit: 5,
    join: 1,
    visitProcess: "Borgo Santo Pietro 110, Palazzetto, Chiusdino. Book. +39 0577 75 1222.",
    joinProcess: "Hotel staff. A suite is not Palazzetto.",
  },
  "inkaterra-urubamba": {
    visit: 4,
    join: 1,
    visitProcess: "Km 63, Cusco–Urubamba highway, Huayoccari. Book. +51 1 610-0400. A Cusco drive.",
    joinProcess: "Hacienda staff.",
  },
  "chable-yucatan": {
    visit: 5,
    join: 1,
    visitProcess: "Tablaje 642, Chocholá. Book. A Mérida drive.",
    joinProcess: "Hotel staff. A casita is not Chocholá.",
  },
  "lodge-at-blue-sky": {
    visit: 5,
    join: 1,
    visitProcess: "27649 Old Lincoln Highway, Wanship. Book. (866) 296-8998.",
    joinProcess: "Ranch staff. A suite is not Wanship.",
  },
};

export const livingBatch27DailyLife: Record<string, DailyLife> = {
  "hacienda-zuleta": {
    typical: [
      { title: "Cheese factory", detail: "Cheese from the farm dairy." },
      { title: "Zuleteño horses", detail: "About 90 horses." },
      { title: "Twenty-one rooms", detail: "Book 72 hours ahead." },
    ],
    unique: { title: "Sleep on a presidential working farm", detail: "Plaza Lasso family. Cheese factory, horses, Condor Huasi." },
  },
  "rancho-la-puerta": {
    typical: [
      { title: "Tres Estrellas farm", detail: "Six organic acres." },
      { title: "Cooking school", detail: "La Cocina Que Canta." },
      { title: "Casitas", detail: "4,000 acres." },
    ],
    unique: { title: "A fitness week that starts in the rows", detail: "Edmond and Deborah Szekely opened the ranch in 1940; Tres Estrellas, a six-acre organic farm, feeds the kitchen, and La Cocina Que Canta is the cooking school on 4,000 Tecate acres." },
  },
  "gibbs-farm": {
    typical: [
      { title: "Arabica coffee", detail: "30 acres." },
      { title: "Garden and dairy", detail: "Kitchen garden, dairy, and pigs." },
      { title: "Seventeen cottages", detail: "Seventeen cottages and two family houses." },
    ],
    unique: { title: "A Ngorongoro coffee farm you can sleep on", detail: "A 1920s German-settler coffee estate on Karatu’s Ngorongoro slope; James and Margaret Gibb made it a guesthouse in the 1970s. Seventeen cottages sit on 80 organic acres of Arabica, kitchen garden, dairy, and pigs." },
  },
  "blackberry-farm": {
    typical: [
      { title: "Heirloom gardens", detail: "Working heirloom gardens." },
      { title: "Sheep cheese", detail: "East Friesian." },
      { title: "Cottages", detail: "About 68 rooms." },
    ],
    unique: { title: "Foothills Cuisine beside the hoop houses", detail: "The Bealls opened a six-room inn in 1976; the 4,200 Walland acres now run heirloom gardens, East Friesian sheep, and Foothills Cuisine beside the cottages." },
  },
  "four-seasons-chiang-mai": {
    typical: [
      { title: "Working rice paddies", detail: "fourseasons.com/chiangmai." },
      { title: "Lanna pavilions", detail: "About 98 of Condé Nast Traveler." },
      { title: "Valley kitchen", detail: "That dining line." },
    ],
    unique: { title: "Sleep looking onto the paddies", detail: "1995 of Condé Nast Traveler. A pavilion is not Mae Rim." },
  },
  "bambu-indah": {
    typical: [
      { title: "Permaculture gardens", detail: "Edible gardens and replanted rice." },
      { title: "Mushroom farm", detail: "Underground mushroom farm." },
      { title: "Javanese houses", detail: "Eleven gladaks beside the Hardy home." },
    ],
    unique: { title: "An accidental hotel that grew a farm", detail: "Friends stayed in the gladaks first. Public doors 2010." },
  },
  "borgo-santo-pietro": {
    typical: [
      { title: "Market gardens", detail: "borgosantopietro.com estate line." },
      { title: "Pigs and dairy", detail: "That estate page." },
      { title: "Twenty-two suites", detail: "That hotel page." },
    ],
    unique: { title: "A pilgrim farmhouse that became a kitchen", detail: "Thottrup 2008. A suite is not Palazzetto." },
  },
  "inkaterra-urubamba": {
    typical: [
      { title: "Ten-acre organic farm", detail: "On the 100-acre Huayoccari hacienda." },
      { title: "Earth-to-table kitchen", detail: "Farm produce at the table." },
      { title: "Casitas", detail: "Casa Hacienda rooms and about 24 casitas." },
    ],
    unique: { title: "A Sacred Valley table that starts in the rows", detail: "The kitchen still pulls from the 10-acre organic farm on those 100 Huayoccari acres." },
  },
  "chable-yucatan": {
    typical: [
      { title: "La Granja de Abu", detail: "Farm." },
      { title: "Melipona honey", detail: "Organic kitchen." },
      { title: "Jungle casitas", detail: "About 40 casitas." },
    ],
    unique: { title: "A hacienda that still keeps a farm", detail: "2016. A casita is not Chocholá." },
  },
  "lodge-at-blue-sky": {
    typical: [
      { title: "Gracie’s Farm", detail: "No-till garden." },
      { title: "Horses", detail: "Ranch line." },
      { title: "Suites and a yurt", detail: "Creek houses and a mountaintop yurt." },
    ],
    unique: { title: "A Wasatch ranch that grows for the kitchen", detail: "Mike and Barb Phillips opened this Auberge ranch lodge in 2019 on 4,000 Wanship acres. Gracie’s no-till farm still grows for Yuta; suites, creek houses, and a mountaintop yurt sit on the same ranch." },
  },
};

export const livingBatch27Informal: Record<string, InformalAgreement[]> = {
  "hacienda-zuleta": [
    { kind: "guest-stay", why: "Rooms." },
    { kind: "kitchen-table", why: "Farm kitchen and cheese." },
    { kind: "animals-stock", why: "Dairy, sheep, trout, and horses." },
    { kind: "land-care", why: "4,000 acres and Condor Huasi. Guests stay off pastures they were not asked onto." },
    { kind: "course-host", why: "Cheese, embroidery, and cookery." },
  ],
  "rancho-la-puerta": [
    { kind: "guest-stay", why: "Casitas." },
    { kind: "kitchen-table", why: "Tres Estrellas kitchen." },
    { kind: "land-care", why: "6-acre organic farm. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "La Cocina Que Canta." },
    { kind: "quiet-practice", why: "Fitness and spa week." },
  ],
  "gibbs-farm": [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "kitchen-table", why: "Garden and dairy kitchen." },
    { kind: "animals-stock", why: "Cows and pigs." },
    { kind: "land-care", why: "80 organic acres. Guests stay off coffee they were not asked onto." },
    { kind: "course-host", why: "Coffee roast." },
  ],
  "blackberry-farm": [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "kitchen-table", why: "Foothills Cuisine." },
    { kind: "animals-stock", why: "East Friesian sheep." },
    { kind: "land-care", why: "Gardens. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Farmstead School." },
  ],
  "four-seasons-chiang-mai": [
    { kind: "guest-stay", why: "Pavilions." },
    { kind: "kitchen-table", why: "Valley kitchen." },
    { kind: "land-care", why: "Working rice paddies of Indagare. Guests stay off paddies they were not asked onto." },
    { kind: "course-host", why: "Artisan workshops of Condé Nast Traveler." },
  ],
  "bambu-indah": [
    { kind: "guest-stay", why: "Houses." },
    { kind: "kitchen-table", why: "Farm kitchen." },
    { kind: "land-care", why: "Permaculture gardens and rice. Guests stay off beds they were not asked onto." },
    { kind: "course-host", why: "Harvest and regeneration." },
  ],
  "borgo-santo-pietro": [
    { kind: "guest-stay", why: "Suites." },
    { kind: "kitchen-table", why: "Farm-to-plate." },
    { kind: "animals-stock", why: "Pigs and dairy." },
    { kind: "land-care", why: "300 organic acres. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Cooking school." },
  ],
  "inkaterra-urubamba": [
    { kind: "guest-stay", why: "Casitas." },
    { kind: "kitchen-table", why: "Earth-to-table." },
    { kind: "land-care", why: "10-acre organic farm. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Farm tour." },
  ],
  "chable-yucatan": [
    { kind: "guest-stay", why: "Casitas." },
    { kind: "kitchen-table", why: "Abu’s Kitchen." },
    { kind: "animals-stock", why: "Farm animals." },
    { kind: "land-care", why: "La Granja de Abu. Guests stay off rows they were not asked onto." },
    { kind: "quiet-practice", why: "Spa." },
  ],
  "lodge-at-blue-sky": [
    { kind: "guest-stay", why: "Suites." },
    { kind: "kitchen-table", why: "Yuta from Gracie’s Farm." },
    { kind: "animals-stock", why: "Horses." },
    { kind: "land-care", why: "No-till garden. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Farm tours." },
  ],
};

export const livingBatch27Governance: Record<string, Governance> = {
  "hacienda-zuleta": {
    model: "founder",
    modelLabel: "Family working-farm hacienda",
    unique: false,
    summary: "You book a room.",
    whoDecides: "The Plaza Lasso family.",
    bodies: [
      { name: "Hacienda Zuleta", role: "Working-farm hacienda." },
      { name: "The farm", role: "4,000 acres." },
    ],
    howItRuns: "Book.",
  },
  "rancho-la-puerta": {
    model: "founder",
    modelLabel: "Family destination spa farm",
    unique: false,
    summary: "Szekely 1940. You book a week. You do not buy Kuchumaa.",
    whoDecides: "The ranch.",
    bodies: [
      { name: "Rancho La Puerta", role: "Family destination spa." },
      { name: "Tres Estrellas", role: "Organic farm." },
    ],
    howItRuns: "Book.",
  },
  "gibbs-farm": {
    model: "founder",
    modelLabel: "Coffee-farm lodge",
    unique: false,
    summary: "gibbsfarm.com. You book a cottage. You do not buy Karatu.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Gibb's Farm", role: "gibbsfarm.com." },
      { name: "The plantation", role: "80 organic acres." },
    ],
    howItRuns: "Book.",
  },
  "blackberry-farm": {
    model: "founder",
    modelLabel: "Farm resort",
    unique: false,
    summary: "Private Relais & Châteaux farm resort.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Blackberry Farm", role: "Farm resort." },
      { name: "The Farmstead", role: "Gardens and sheep." },
    ],
    howItRuns: "Book.",
  },
  "four-seasons-chiang-mai": {
    model: "founder",
    modelLabel: "Rice-paddy resort",
    unique: false,
    summary: "fourseasons.com/chiangmai. You book a pavilion. You do not buy Mae Rim.",
    whoDecides: "The resort.",
    bodies: [
      { name: "Four Seasons Chiang Mai", role: "fourseasons.com/chiangmai." },
      { name: "The paddies", role: "32 acres of Indagare." },
    ],
    howItRuns: "Book.",
  },
  "bambu-indah": {
    model: "founder",
    modelLabel: "Permaculture hotel",
    unique: false,
    summary: "You book a house.",
    whoDecides: "The hotel.",
    bodies: [
      { name: "Bambu Indah", role: "The hotel." },
      { name: "The gardens", role: "Permaculture." },
    ],
    howItRuns: "Book.",
  },
  "borgo-santo-pietro": {
    model: "founder",
    modelLabel: "Organic-farm hotel",
    unique: false,
    summary: "Thottrup 2008. You book a suite. You do not buy Palazzetto.",
    whoDecides: "The borgo.",
    bodies: [
      { name: "Borgo Santo Pietro", role: "borgosantopietro.com." },
      { name: "The estate", role: "300 organic acres." },
    ],
    howItRuns: "Book.",
  },
  "inkaterra-urubamba": {
    model: "founder",
    modelLabel: "Organic-farm hacienda",
    unique: false,
    summary: "2015. You book a casita.",
    whoDecides: "Inkaterra.",
    bodies: [
      { name: "Inkaterra Hacienda Urubamba", role: "The hacienda." },
      { name: "The farm", role: "10-acre organic farm." },
    ],
    howItRuns: "Book.",
  },
  "chable-yucatan": {
    model: "founder",
    modelLabel: "Hacienda farm hotel",
    unique: false,
    summary: "You book a casita. You do not buy Chocholá.",
    whoDecides: "The hotel.",
    bodies: [
      { name: "Chablé Yucatán", role: "The hotel." },
      { name: "La Granja de Abu", role: "Farm." },
    ],
    howItRuns: "Book.",
  },
  "lodge-at-blue-sky": {
    model: "founder",
    modelLabel: "Working ranch with a farm",
    unique: false,
    summary: "You book a suite. You do not buy Wanship.",
    whoDecides: "The lodge.",
    bodies: [
      { name: "The Lodge at Blue Sky", role: "Auberge ranch lodge." },
      { name: "Gracie’s Farm", role: "No-till garden." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch27Leaders: Record<string, VillageLeaders> = {
  "hacienda-zuleta": {
    people: [],
    office: { url: "https://zuleta.com/", address: "Angochagua, Imbabura 100150, Ecuador" },
  },
  "rancho-la-puerta": {
    people: [],
    office: { url: "https://rancholapuerta.com/", address: "Carretera Mexicali–Tijuana Km 136.5, Tecate, Baja California 21447", phone: "(800) 443-7565" },
  },
  "gibbs-farm": {
    people: [],
    office: { url: "https://www.gibbsfarm.com/", address: "Gibb's Farm, Karatu, Tanzania, P.O. Box 280", email: "reservations@gibbsfarm.com", phone: "+255 272 970 438" },
  },
  "blackberry-farm": {
    people: [],
    office: { url: "https://www.blackberryfarm.com/", address: "1471 W Millers Cove Rd, Walland, TN 37886", phone: "(800) 557-8864" },
  },
  "four-seasons-chiang-mai": {
    people: [],
    office: { url: "https://www.fourseasons.com/chiangmai/", address: "502 Moo 1, Mae Rim–Samoeng Old Road, Chiang Mai 50180", phone: "+66 (53) 298 181" },
  },
  "bambu-indah": {
    people: [],
    office: { url: "https://www.bambuindah.com/", address: "Jl. Baung, Sayan, Kecamatan Ubud, Gianyar, Bali 80571" },
  },
  "borgo-santo-pietro": {
    people: [],
    office: { url: "https://borgosantopietro.com/", address: "Borgo Santo Pietro 110, Loc. Palazzetto, 53012 Chiusdino (SI)", email: "info@borgosantopietro.com", phone: "+39 0577 75 1222" },
  },
  "inkaterra-urubamba": {
    people: [],
    office: { url: "https://www.inkaterra.com/inkaterra/inkaterra-hacienda-urubamba/", address: "Km 63, Cusco–Urubamba–Pisac–Calca Highway, Huayoccari, Urubamba", email: "sales@inkaterra.com", phone: "+51 1 610-0400" },
  },
  "chable-yucatan": {
    people: [],
    office: { url: "https://yucatan.chablehotels.com/", address: "Tablaje Catastral 642, Chocholá, Yucatán, Mexico" },
  },
  "lodge-at-blue-sky": {
    people: [],
    office: { url: "https://auberge.com/blue-sky/", address: "27649 Old Lincoln Highway, Wanship, UT 84017", phone: "(866) 296-8998" },
  },
};

export const livingBatch27Accommodations: Record<string, Accommodations> = {
  "hacienda-zuleta": {
    visitor: {
      overview: "Twenty-one rooms in the colonial hacienda. Book 72 hours ahead. Confirm current with the hacienda.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "suite"], detail: "Standard, deluxe, and suite rooms." },
      other: { available: true, types: ["cheese tour", "riding"], detail: "Cheese factory and Zuleteño horses." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rancho-la-puerta": {
    visitor: {
      overview: "Casitas on the Tecate ranch. Typical week Saturday to Saturday; shorter stays on space. Confirm current with (800) 443-7565.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["casita", "cottage"], detail: "Garden casitas." },
      other: { available: true, types: ["spa", "cooking school", "farm kitchen"], detail: "Tres Estrellas and La Cocina Que Canta." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "gibbs-farm": {
    visitor: {
      overview: "Seventeen cottages and two family houses. Full board. Confirm current with +255 272 970 438.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "house"], detail: "Farm cottages among the coffee." },
      other: { available: true, types: ["farm walk", "coffee roast"], detail: "Garden, dairy, and coffee." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "blackberry-farm": {
    visitor: {
      overview: "Historic rooms, estate rooms, cottage suites, hill cottages, and houses. About 68. Confirm current with (800) 557-8864.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "cottage", "house"], detail: "Historic rooms, cottages, and houses." },
      other: { available: true, types: ["spa", "farm kitchen"], detail: "Farmstead." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "four-seasons-chiang-mai": {
    visitor: {
      overview: "Lanna pavilions among the rice. About 98 of Condé Nast Traveler. Confirm current with +66 (53) 298 181.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["pavilion", "villa"], detail: "Garden and rice-terrace pavilions." },
      other: { available: true, types: ["spa", "paddy walk"], detail: "Spa and working paddies of Indagare." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "bambu-indah": {
    visitor: {
      overview: "Antique Javanese houses, bamboo rooms, and a treehouse. Confirm current with the hotel.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["house", "treehouse"], detail: "Gladak houses and bamboo rooms." },
      other: { available: true, types: ["farm kitchen", "river pool"], detail: "Permaculture gardens and spring-fed pool." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "borgo-santo-pietro": {
    visitor: {
      overview: "22 rooms and suites in the farmhouse and cottages. Confirm current with +39 0577 75 1222.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "suite", "cottage"], detail: "Main house and garden cottages." },
      other: { available: true, types: ["spa", "cooking school", "farm kitchen"], detail: "Seed spa and cooking school." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "inkaterra-urubamba": {
    visitor: {
      overview: "Casa Hacienda rooms and stand-alone casitas. Confirm current with +51 1 610-0400.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "casita"], detail: "About 24 casitas." },
      other: { available: true, types: ["farm tour", "farm kitchen"], detail: "10-acre organic farm." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "chable-yucatan": {
    visitor: {
      overview: "About 40 casitas and villas with private pools. Confirm current with the hotel.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["casita", "villa"], detail: "Jungle casitas." },
      other: { available: true, types: ["spa", "farm kitchen"], detail: "La Granja de Abu." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lodge-at-blue-sky": {
    visitor: {
      overview: "Sky, Earth, and Creek suites. About 46 rooms. Mountaintop yurt for dining. Confirm current with (866) 296-8998.",
      camping: { available: true, types: ["yurt"], detail: "Mountaintop yurt — dining and tastings, not a public campground." },
      rooms: { available: true, types: ["suite", "creek house"], detail: "Lodge suites and creek houses." },
      other: { available: true, types: ["ranch day", "farm tour"], detail: "Gracie’s Farm." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
