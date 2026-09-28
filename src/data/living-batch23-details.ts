import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch23LegalEntities: Record<string, LegalEntity[]> = {
  "rancho-la-puerta": [
    { name: "Rancho La Puerta", kind: "Private destination spa", role: "Private family destination spa.", status: "current", layer: "enterprise", year: "1940", forms: ["Company"] },
    { name: "Kuchumaa land", kind: "4,000-acre ranch", role: "4,000 acres. Organic farm and La Cocina Que Canta. 2,000 acres a nature preserve.", status: "current", layer: "land", year: "1940", forms: ["Freehold title"] },
  ],
  "blackberry-farm": [
    { name: "Blackberry Farm", kind: "Private Relais farm resort", role: "Private Relais & Châteaux farm resort.", status: "current", layer: "enterprise", year: "1976", forms: ["Company"] },
    { name: "Millers Cove land", kind: "4,200-acre farm", role: "4,200 acres. Garden.", status: "current", layer: "land", year: "1976", forms: ["Freehold title"] },
  ],
  "finca-rosa-blanca": [
    { name: "Finca Rosa Blanca Coffee Farm & Inn", kind: "Private coffee farm inn", role: "Private family coffee farm and inn.", status: "current", layer: "enterprise", year: "1985", forms: ["Company"] },
    { name: "Santa Bárbara coffee land", kind: "Organic coffee farm", role: "Additional 30 acres reforested. Organic coffee.", status: "current", layer: "land", year: "1985", forms: ["Freehold title"] },
  ],
  spannocchia: [
    { name: "Tenuta di Spannocchia", kind: "Private organic agriturismo", role: "Private Cinelli farm estate.", status: "current", layer: "enterprise", year: "1925", forms: ["Company"] },
    { name: "Friends of Spannocchia", kind: "U.S. educational nonprofit", role: "U.S. nonprofit supporting education and conservation.", status: "current", layer: "education", year: "1992", forms: ["501(c)(3)"] },
    { name: "Chiusdino land", kind: "1,100-acre organic farm", role: "1,100 acres. Organic 1994.", status: "current", layer: "land", year: "1925", forms: ["Freehold title"] },
  ],
  fforest: [
    { name: "fforest", kind: "Private farm hospitality", role: "Private farm and glamping.", status: "current", layer: "enterprise", year: "2005", forms: ["Company"] },
    { name: "Cardigan farm", kind: "200-acre farm", role: "200 acres of Visit Wales / Aspire. Teifi Gorge.", status: "current", layer: "land", year: "2004", forms: ["Freehold title"] },
  ],
  "bambu-indah": [
    { name: "Bambu Indah", kind: "Private regenerative hotel", role: "Private regenerative hotel.", status: "current", layer: "enterprise", year: "2005", forms: ["Company"] },
    { name: "Sayan ridge", kind: "Permaculture gardens and rice", role: "Permaculture gardens, rice, mushroom farm.", status: "current", layer: "land", year: "2005", forms: ["Freehold title"] },
  ],
  thyme: [
    { name: "Thyme", kind: "Private farm estate hotel", role: "Private family farm estate.", status: "current", layer: "enterprise", year: "2007", forms: ["Company"] },
    { name: "Southrop estate", kind: "150-acre farm", role: "150 acres. Cookery school in the Tithe Barn.", status: "current", layer: "land", year: "2002", forms: ["Freehold title", "Historic designation"] },
  ],
  "hacienda-urubamba": [
    { name: "Inkaterra Hacienda Urubamba", kind: "Private hacienda hotel", role: "Private Inkaterra hotel.", status: "current", layer: "enterprise", year: "2015", forms: ["Company"] },
    { name: "Sacred Valley farm", kind: "100-acre hacienda", role: "About 100 acres of CN Traveler. 10-acre organic plantation of Inhabitat.", status: "current", layer: "land", year: "2015", forms: ["Freehold title"] },
  ],
  barrocal: [
    { name: "São Lourenço do Barrocal", kind: "Private farm hotel", role: "Private family farm hotel of barrocal.pt.", status: "current", layer: "enterprise", year: "2016", forms: ["Company"] },
    { name: "Monsaraz estate", kind: "2,000-acre farm", role: "2,000 acres of Leading Hotels. Cereals, olive oil, wine, cattle since 1820.", status: "current", layer: "land", year: "1820", forms: ["Freehold title"] },
  ],
  "heckfield-place": [
    { name: "Heckfield Place", kind: "Private country-house hotel", role: "Private country-house hotel.", status: "current", layer: "enterprise", year: "2018", forms: ["Company"] },
    { name: "Heckfield Home Farm", kind: "Biodynamic farm", role: "438 acres. Organic Home Farm and biodynamic market garden.", status: "current", layer: "land", year: "2018", forms: ["Freehold title", "Historic designation"] },
  ],
};

export const livingBatch23Land: Record<string, LandOwnership> = {
  "rancho-la-puerta": {
    owner: "The Szekely family",
    complexity: "simple",
    tenure: "Private destination-spa ranch",
    howHeld: "4,000 acres. Organic farm and La Cocina Que Canta. 2,000 acres a nature preserve.",
    narrative: "A Tecate ranch. A week is not Kuchumaa.",
    divided: [
      { label: "Farm, gardens, spa, preserve", holder: "The family", share: "Private", what: "A week is not a deed." },
    ],
  },
  "blackberry-farm": {
    owner: "The Bealls",
    complexity: "simple",
    tenure: "Private Relais farm",
    howHeld: "4,200 acres. Garden.",
    narrative: "A Walland farm resort.",
    divided: [
      { label: "Garden, cottages, restaurants", holder: "The owners", share: "Private", what: "" },
    ],
  },
  "finca-rosa-blanca": {
    owner: "The Jampols",
    complexity: "simple",
    tenure: "Private coffee farm inn",
    howHeld: "Additional 30 acres reforested. Organic coffee.",
    narrative: "A Santa Bárbara coffee farm. A villa is not the finca.",
    divided: [
      { label: "Coffee, inn, forest", holder: "The family", share: "Private", what: "" },
    ],
  },
  spannocchia: {
    owner: "The Cinellis",
    complexity: "split",
    tenure: "Private organic farm with a U.S. education nonprofit",
    howHeld: "1,100 acres. Friends of Spannocchia supports education, not the title.",
    narrative: "A Chiusdino tenuta. A room is not Località Spannocchia.",
    divided: [
      { label: "Farm, forest, farmhouses", holder: "The family", share: "Private", what: "An internship is not a deed." },
      { label: "Education programmes", holder: "Friends of Spannocchia", share: "Nonprofit support", what: "A gift is not the land." },
    ],
  },
  fforest: {
    owner: "Lynch and Tucker",
    complexity: "simple",
    tenure: "Private glamping farm",
    howHeld: "200 acres of Visit Wales / Aspire. Teifi Gorge.",
    narrative: "A Cardigan farm. A dome is not the Teifi.",
    divided: [
      { label: "Domes, shacs, farmhouse", holder: "The owners", share: "Private", what: "" },
    ],
  },
  "bambu-indah": {
    owner: "The Hardys",
    complexity: "simple",
    tenure: "Private regenerative hotel",
    howHeld: "Sayan ridge of permaculture gardens, rice, mushrooms.",
    narrative: "A Sayan hotel. A house is not the ridge.",
    divided: [
      { label: "Houses, gardens, rice", holder: "The owners", share: "Private", what: "" },
    ],
  },
  thyme: {
    owner: "The Hibberts",
    complexity: "simple",
    tenure: "Private farm estate",
    howHeld: "150 acres. Tithe Barn cookery school.",
    narrative: "A Southrop farm. A class is not the manor.",
    divided: [
      { label: "Farm, cottages, barns", holder: "The family", share: "Private", what: "" },
    ],
  },
  "hacienda-urubamba": {
    owner: "Inkaterra",
    complexity: "simple",
    tenure: "Private hacienda hotel",
    howHeld: "About 100 acres of CN Traveler. 10-acre organic plantation of Inhabitat.",
    narrative: "A Sacred Valley hacienda. A casita is not the valley.",
    divided: [
      { label: "Lodge, casitas, farm", holder: "Inkaterra", share: "Private", what: "" },
    ],
  },
  barrocal: {
    owner: "The Uva family",
    complexity: "simple",
    tenure: "Private farm hotel",
    howHeld: "2,000 acres of Leading Hotels. Cereals, olive oil, wine, cattle.",
    narrative: "A Monsaraz monte. A room is not Monsaraz.",
    divided: [
      { label: "Farm, wine, rooms", holder: "The family", share: "Private", what: "" },
    ],
  },
  "heckfield-place": {
    owner: "Gerald Chan",
    complexity: "simple",
    tenure: "Private country-house hotel with a farm",
    howHeld: "438 acres. Home Farm.",
    narrative: "A Hampshire house.",
    divided: [
      { label: "House, Home Farm, gardens", holder: "The owner", share: "Private", what: "" },
    ],
  },
};

export const livingBatch23Funding: Record<string, CommunityFunding> = {
  "rancho-la-puerta": {
    overview: "Seven-night stays.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Week rates and cooking school",
    grants: [],
    private: [
      { source: "Guests", amount: "Seven-night stays", year: "1940", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "blackberry-farm": {
    overview: "Cottages and events.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Relais rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Cottages and events", year: "1976", certainty: "estimated", kind: "business", note: "Rooms, cottages, restaurants, seasonal events." },
    ],
  },
  "finca-rosa-blanca": {
    overview: "Villas and coffee tours.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Inn and cupping",
    grants: [],
    private: [
      { source: "Guests", amount: "Villas and coffee tours", year: "1985", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  spannocchia: {
    overview: "Agriturismo and internships / spannocchia.org.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Farmhouses",
    grants: [],
    private: [
      { source: "Guests", amount: "Farmhouses", year: "1992", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  fforest: {
    overview: "Glamping and Gather.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Domes and shacs",
    grants: [],
    private: [
      { source: "Guests", amount: "Domes, shacs, Gather", year: "2005", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "bambu-indah": {
    overview: "Houses.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Stay",
    grants: [],
    private: [
      { source: "Guests", amount: "Houses", year: "2005", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  thyme: {
    overview: "Rooms, classes, Ox Barn.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "31 bedrooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Rooms, classes, Ox Barn", year: "2007", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "hacienda-urubamba": {
    overview: "Casitas.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Lodge and casitas",
    grants: [],
    private: [
      { source: "Guests", amount: "Casitas", year: "2015", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  barrocal: {
    overview: "Farm rooms of barrocal.pt.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Guest rooms and cottages",
    grants: [],
    private: [
      { source: "Guests", amount: "Farm rooms of barrocal.pt", year: "2016", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "heckfield-place": {
    overview: "Rooms.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "45 rooms of The Hotel Guru",
    grants: [],
    private: [
      { source: "Guests", amount: "Rooms", year: "2018", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
};

export const livingBatch23VisitJoin: Record<string, VisitJoin> = {
  "rancho-la-puerta": {
    visit: 5,
    join: 1,
    visitProcess: "Tecate. Saturday arrival FAQ. Book a seven-night week. 800-443-7565. Farm and La Cocina Que Canta.",
    joinProcess: "Family ranch. A week is not membership.",
  },
  "blackberry-farm": {
    visit: 5,
    join: 1,
    visitProcess: "1471 West Millers Cove Road, Walland. Book. Events. 800-557-8864.",
    joinProcess: "A private farm resort.",
  },
  "finca-rosa-blanca": {
    visit: 5,
    join: 1,
    visitProcess: "Calle Rosa Blanca, Santa Bárbara de Heredia. Book. Coffee tour. +506 2269 9392.",
    joinProcess: "Family farm. A villa is not membership.",
  },
  spannocchia: {
    visit: 4,
    join: 1,
    visitProcess: "Località Spannocchia 169, Chiusdino. Book a farmhouse. Farm tours.",
    joinProcess: "Three-month intern. Eight places a session. A week is not a share.",
  },
  fforest: {
    visit: 5,
    join: 1,
    visitProcess: "Near Cardigan. Book. Gather. Feasts.",
    joinProcess: "A private farm. A dome is not a share.",
  },
  "bambu-indah": {
    visit: 5,
    join: 1,
    visitProcess: "Jl. Baung, Sayan, Ubud. Book.",
    joinProcess: "A private hotel. A house is not the ridge.",
  },
  thyme: {
    visit: 5,
    join: 1,
    visitProcess: "Southrop. Book a room. Cookery school. Ox Barn. 01367 850174.",
    joinProcess: "Family estate. A class is not the manor.",
  },
  "hacienda-urubamba": {
    visit: 5,
    join: 1,
    visitProcess: "Sacred Valley, Urubamba. Book. Farm.",
    joinProcess: "Inkaterra staff. A casita is not the valley.",
  },
  barrocal: {
    visit: 5,
    join: 1,
    visitProcess: "7200-177 Monsaraz. Book of barrocal.pt. reservations@barrocal.pt, +351 266 247 140.",
    joinProcess: "A private monte.",
  },
  "heckfield-place": {
    visit: 5,
    join: 1,
    visitProcess: "Heckfield, Hampshire RG27 0LD. Book. Home Farm. +44 118 932 6868.",
    joinProcess: "A private house.",
  },
};

export const livingBatch23DailyLife: Record<string, DailyLife> = {
  "rancho-la-puerta": {
    typical: [
      { title: "Organic farm", detail: "Orchards and raised beds." },
      { title: "Cooking school", detail: "La Cocina Que Canta." },
      { title: "Trail week", detail: "40 miles. Saturday arrival." },
    ],
    unique: { title: "A farm week under Kuchumaa", detail: "The Szekely family opened the ranch at the foot of Mount Kuchumaa in 1940; an organic farm and La Cocina Que Canta sit on 4,000 acres, with Saturday arrivals for a seven-night week." },
  },
  "blackberry-farm": {
    typical: [
      { title: "The garden", detail: "Foothills Cuisine." },
      { title: "Cottages", detail: "About 62 guest rooms." },
      { title: "Events", detail: "Seasonal calendar." },
    ],
    unique: { title: "Foothills Cuisine on a Smoky farm", detail: "The Bealls opened a six-room inn in 1976; the 4,200 Walland acres now run heirloom gardens, East Friesian sheep, and Foothills Cuisine beside the cottages." },
  },
  "finca-rosa-blanca": {
    typical: [
      { title: "Coffee rows", detail: "Organic." },
      { title: "Cupping", detail: "Tour." },
      { title: "Villas", detail: "About 14 of Booking." },
    ],
    unique: { title: "A motocross field that became coffee", detail: "Jampols 1985. A villa is not Santa Bárbara." },
  },
  spannocchia: {
    typical: [
      { title: "Cinta Senese", detail: "Free-range." },
      { title: "Olives", detail: "About 600 trees." },
      { title: "Interns", detail: "Eight a session." },
    ],
    unique: { title: "A tenuta that takes eight interns", detail: "Three 3-month sessions. A week is not Chiusdino." },
  },
  fforest: {
    typical: [
      { title: "Domes", detail: "Geodesic and onsen." },
      { title: "Shacs", detail: "Hill Shacs and crog lofts of Visit Wales." },
      { title: "Gather", detail: "Summer festival." },
    ],
    unique: { title: "A Welsh farm that throws Gather", detail: "Lynch and Tucker. A dome is not the Teifi." },
  },
  "bambu-indah": {
    typical: [
      { title: "Bamboo houses", detail: "bambuindah.com." },
      { title: "Permaculture", detail: "Gardens and rice." },
      { title: "Mushrooms", detail: "Underground farm." },
    ],
    unique: { title: "An accidental hotel of Javanese houses", detail: "Hardys 2005. A house is not Sayan." },
  },
  thyme: {
    typical: [
      { title: "Cookery school", detail: "Tithe Barn." },
      { title: "Ox Barn", detail: "Farm-to-fork." },
      { title: "Kitchen garden", detail: "150 acres." },
    ],
    unique: { title: "A Tithe Barn that became the village table", detail: "Caryn Hibbert 2007. A class is not Southrop." },
  },
  "hacienda-urubamba": {
    typical: [
      { title: "Organic farm", detail: "10-acre plantation of Inhabitat." },
      { title: "Casitas", detail: "inkaterra.com." },
      { title: "Valley table", detail: "Hacienda kitchen." },
    ],
    unique: { title: "A Sacred Valley farm you sleep in", detail: "Koechlin 2015. A casita is not the valley." },
  },
  barrocal: {
    typical: [
      { title: "Olives and wine", detail: "barrocal.pt / Leading Hotels." },
      { title: "Cattle", detail: "Since 1820." },
      { title: "Monte rooms", detail: "About 40 of Indagare." },
    ],
    unique: { title: "A 2,000-acre monte that opened the doors", detail: "Uva 2016 of barrocal.pt. A room is not Monsaraz." },
  },
  "heckfield-place": {
    typical: [
      { title: "Home Farm", detail: "Biodynamic." },
      { title: "Marle and Hearth", detail: "Kitchen from the farm." },
      { title: "Assembly", detail: "Events." },
    ],
    unique: { title: "It begins with the soil", detail: "Home Farm. A room is not Heckfield." },
  },
};

export const livingBatch23Informal: Record<string, InformalAgreement[]> = {
  "rancho-la-puerta": [
    { kind: "guest-stay", why: "Seven-night weeks." },
    { kind: "course-host", why: "La Cocina Que Canta." },
    { kind: "land-care", why: "Organic farm. Guests stay off rows they were not asked onto." },
    { kind: "kitchen-table", why: "Farm-to-table." },
  ],
  "blackberry-farm": [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "course-host", why: "Events." },
    { kind: "land-care", why: "Garden. Guests stay off rows they were not asked onto." },
    { kind: "kitchen-table", why: "Foothills Cuisine." },
  ],
  "finca-rosa-blanca": [
    { kind: "guest-stay", why: "Villas." },
    { kind: "course-host", why: "Coffee tour and cupping." },
    { kind: "land-care", why: "Organic coffee." },
    { kind: "kitchen-table", why: "Farm-to-table." },
  ],
  spannocchia: [
    { kind: "volunteer-intern", why: "Three 3-month internships." },
    { kind: "guest-stay", why: "Farmhouses." },
    { kind: "land-care", why: "Organic farm." },
    { kind: "animals-stock", why: "Cinta Senese." },
    { kind: "kitchen-table", why: "Salumi, oil, garden." },
  ],
  fforest: [
    { kind: "guest-stay", why: "Domes and shacs." },
    { kind: "course-host", why: "Gather." },
    { kind: "land-care", why: "200 acres of Visit Wales." },
    { kind: "kitchen-table", why: "Feasts." },
  ],
  "bambu-indah": [
    { kind: "guest-stay", why: "Houses." },
    { kind: "land-care", why: "Permaculture and rice." },
    { kind: "kitchen-table", why: "Garden kitchen." },
    { kind: "course-host", why: "Green School next door. A stay is not a term." },
  ],
  thyme: [
    { kind: "guest-stay", why: "31 rooms." },
    { kind: "course-host", why: "Cookery school." },
    { kind: "land-care", why: "Farm and gardens." },
    { kind: "kitchen-table", why: "Ox Barn." },
  ],
  "hacienda-urubamba": [
    { kind: "guest-stay", why: "Casitas." },
    { kind: "land-care", why: "Organic plantation of Inhabitat." },
    { kind: "kitchen-table", why: "Hacienda table." },
    { kind: "course-host", why: "Farm visits." },
  ],
  barrocal: [
    { kind: "guest-stay", why: "Farm rooms of barrocal.pt." },
    { kind: "land-care", why: "2,000-acre farm of Leading Hotels." },
    { kind: "kitchen-table", why: "Estate kitchen of barrocal.pt." },
    { kind: "animals-stock", why: "Cattle." },
  ],
  "heckfield-place": [
    { kind: "guest-stay", why: "Rooms." },
    { kind: "land-care", why: "Home Farm. Guests stay off rows they were not asked onto." },
    { kind: "kitchen-table", why: "Marle and Hearth." },
    { kind: "course-host", why: "Assembly." },
  ],
};

export const livingBatch23Governance: Record<string, Governance> = {
  "rancho-la-puerta": {
    model: "founder",
    modelLabel: "Family destination spa on a working farm",
    unique: false,
    summary: "1940. You book a week. You do not buy Kuchumaa.",
    whoDecides: "The ranch.",
    bodies: [
      { name: "The ranch", role: "Family destination spa." },
      { name: "The farm", role: "Organic farm and La Cocina Que Canta." },
    ],
    howItRuns: "Book. 800-443-7565.",
  },
  "blackberry-farm": {
    model: "founder",
    modelLabel: "Family Relais farm resort",
    unique: false,
    summary: "Bealls 1976. Private Relais farm resort.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Blackberry Farm", role: "Farm resort." },
      { name: "The garden", role: "Foothills Cuisine." },
    ],
    howItRuns: "Book. 800-557-8864.",
  },
  "finca-rosa-blanca": {
    model: "founder",
    modelLabel: "Family organic coffee inn",
    unique: false,
    summary: "Jampols 1985. You book a villa. You do not buy Santa Bárbara.",
    whoDecides: "The family.",
    bodies: [
      { name: "The inn", role: "fincarosablanca.com." },
      { name: "The farm", role: "Organic coffee." },
    ],
    howItRuns: "Book.",
  },
  spannocchia: {
    model: "hybrid",
    modelLabel: "Family farm with a U.S. education nonprofit",
    unique: false,
    summary: "Cinellis. Friends of Spannocchia. You book a room. You do not buy Chiusdino.",
    whoDecides: "The estate, with the nonprofit on education.",
    bodies: [
      { name: "The tenuta", role: "spannocchia.com." },
      { name: "Friends of Spannocchia", role: "spannocchia.org." },
    ],
    howItRuns: "Book. Intern.",
  },
  fforest: {
    model: "founder",
    modelLabel: "Farm glamping and Gather",
    unique: false,
    summary: "Lynch and Tucker. You book a dome. You do not buy the Teifi.",
    whoDecides: "The farm.",
    bodies: [
      { name: "fforest", role: "coldatnight.co.uk." },
      { name: "Gather", role: "fforestgather.co.uk." },
    ],
    howItRuns: "Book.",
  },
  "bambu-indah": {
    model: "founder",
    modelLabel: "Regenerative bamboo hotel",
    unique: false,
    summary: "Hardys. You book a house. You do not buy Sayan.",
    whoDecides: "The hotel.",
    bodies: [
      { name: "Bambu Indah", role: "bambuindah.com." },
      { name: "The gardens", role: "Permaculture." },
    ],
    howItRuns: "Book.",
  },
  thyme: {
    model: "founder",
    modelLabel: "Family farm cookery estate",
    unique: false,
    summary: "Hibberts. You book a room. You do not buy Southrop.",
    whoDecides: "The family.",
    bodies: [
      { name: "Thyme", role: "thyme.co.uk." },
      { name: "The school", role: "Tithe Barn." },
    ],
    howItRuns: "Book. 01367 850174.",
  },
  "hacienda-urubamba": {
    model: "founder",
    modelLabel: "Hacienda hotel on an organic farm",
    unique: false,
    summary: "Inkaterra. You book a casita. You do not buy the valley.",
    whoDecides: "Inkaterra.",
    bodies: [
      { name: "Hacienda Urubamba", role: "inkaterra.com." },
      { name: "The farm", role: "Organic plantation of Inhabitat." },
    ],
    howItRuns: "Book.",
  },
  barrocal: {
    model: "founder",
    modelLabel: "Family monte farm hotel",
    unique: false,
    summary: "Uva of barrocal.pt. You book a room. You do not buy Monsaraz.",
    whoDecides: "The estate.",
    bodies: [
      { name: "São Lourenço do Barrocal", role: "barrocal.pt." },
      { name: "The farm", role: "2,000 acres of Leading Hotels." },
    ],
    howItRuns: "Book of barrocal.pt.",
  },
  "heckfield-place": {
    model: "founder",
    modelLabel: "Country house with a biodynamic farm",
    unique: false,
    summary: "2018. You book a room. You do not buy Heckfield.",
    whoDecides: "The hotel.",
    bodies: [
      { name: "Heckfield Place", role: "heckfieldplace.com." },
      { name: "Home Farm", role: "heckfieldhomefarm.com." },
    ],
    howItRuns: "Book. +44 118 932 6868.",
  },
};

export const livingBatch23Leaders: Record<string, VillageLeaders> = {
  "rancho-la-puerta": {
    people: [],
    office: { url: "https://rancholapuerta.com/", address: "Tecate, Baja California", phone: "800-443-7565" },
  },
  "blackberry-farm": {
    people: [],
    office: { url: "https://www.blackberryfarm.com/", address: "1471 West Millers Cove Road, Walland, TN 37886", phone: "800-557-8864" },
  },
  "finca-rosa-blanca": {
    people: [],
    office: { url: "https://fincarosablanca.com/en/", address: "Calle Rosa Blanca, Santa Bárbara de Heredia", email: "info@fincarosablanca.com", phone: "+506 2269 9392" },
  },
  spannocchia: {
    people: [],
    office: { url: "https://www.spannocchia.com/", address: "Località Spannocchia 169, 53012 Chiusdino, Siena" },
  },
  fforest: {
    people: [],
    office: { url: "https://www.coldatnight.co.uk/", address: "fforest farm, near Cardigan, Ceredigion" },
  },
  "bambu-indah": {
    people: [],
    office: { url: "https://www.bambuindah.com/", address: "Jl. Baung, Sayan, Ubud 80571" },
  },
  thyme: {
    people: [],
    office: { url: "https://www.thyme.co.uk/", address: "Southrop, Cotswolds, Gloucestershire", email: "reservations@thyme.co.uk", phone: "01367 850174" },
  },
  "hacienda-urubamba": {
    people: [],
    office: { url: "https://www.inkaterra.com/inkaterra/inkaterra-hacienda-urubamba/the-experience/", address: "Sacred Valley of the Incas, Urubamba", phone: "+51 1 610 0400" },
  },
  barrocal: {
    people: [],
    office: { url: "https://barrocal.pt/", address: "7200-177 Monsaraz, Alentejo", email: "reservations@barrocal.pt", phone: "+351 266 247 140" },
  },
  "heckfield-place": {
    people: [],
    office: { url: "https://www.heckfieldplace.com/", address: "Heckfield, Hampshire RG27 0LD", email: "enquiries@heckfieldplace.com", phone: "+44 118 932 6868" },
  },
};

export const livingBatch23Accommodations: Record<string, Accommodations> = {
  "rancho-la-puerta": {
    visitor: {
      overview: "Seven-night cottage stays. Saturday arrival. Confirm current with 800-443-7565. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "casita"], detail: "Week cottages. About 100–125 guests of Serenity Ways." },
      other: { available: true, types: ["cooking school"], detail: "La Cocina Que Canta." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "blackberry-farm": {
    visitor: {
      overview: "About 62 guest rooms and cottages. Events. Confirm current with 800-557-8864. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "hotel room"], detail: "Cottages and rooms." },
      other: { available: true, types: ["event"], detail: "Seasonal events." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "finca-rosa-blanca": {
    visitor: {
      overview: "About 14 villas and suites of Booking / fincarosablanca.com. Coffee tour. Confirm current with +506 2269 9392.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["villa", "suite"], detail: "Villas." },
      other: { available: true, types: ["coffee tour"], detail: "Cupping." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  spannocchia: {
    visitor: {
      overview: "Farmhouses and B&B rooms. About 38 rooms. Interns. Confirm current with the estate.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["farmhouse", "B&B room"], detail: "Casetta, Montecchino, Palazze." },
      other: { available: true, types: ["internship"], detail: "Three 3-month sessions." },
    },
    resident: {
      overview: "Family and intern housing on the tenuta. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: true, types: ["intern room"], detail: "Eight intern places a session." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  fforest: {
    visitor: {
      overview: "Geodesic domes, onsen domes, crog lofts, Hill Shacs, Tŷ Fforest / Visit Wales. Confirm current with the farm. Gather weeks.",
      camping: { available: true, types: ["glamping tent", "dome"], detail: "Geodesic and onsen domes." },
      rooms: { available: true, types: ["shac", "crog loft", "farmhouse"], detail: "Hill Shacs, crog lofts, Tŷ Fforest of Visit Wales." },
      other: { available: true, types: ["festival"], detail: "Gather." },
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
      overview: "Antique Javanese houses and bamboo structures. Confirm current with the hotel.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["bamboo house", "Javanese house"], detail: "Houses." },
      other: { available: false, types: [], detail: "None listed as a separate hotel block." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  thyme: {
    visitor: {
      overview: "31 bedrooms across houses and cottages. Cookery school. Confirm current with 01367 850174.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["hotel room", "cottage"], detail: "31 bedrooms." },
      other: { available: true, types: ["cookery class"], detail: "Tithe Barn school." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hacienda-urubamba": {
    visitor: {
      overview: "Lodge and casitas / Michelin Guide. Confirm current with Inkaterra.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["casita", "lodge room"], detail: "Casitas." },
      other: { available: true, types: ["farm visit"], detail: "Organic farm / Inhabitat." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  barrocal: {
    visitor: {
      overview: "Guest farm rooms and cottages of barrocal.pt. About 40 rooms of Indagare. Confirm current with reservations@barrocal.pt.",
      camping: { available: false, types: [], detail: "None listed as a public campground of barrocal.pt." },
      rooms: { available: true, types: ["farm room", "cottage"], detail: "Guest rooms of barrocal.pt." },
      other: { available: true, types: ["wine"], detail: "Estate wine of Leading Hotels." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "heckfield-place": {
    visitor: {
      overview: "About 45 rooms of The Hotel Guru / heckfieldplace.com. Home Farm tours. Confirm current with +44 118 932 6868.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["hotel room", "cottage"], detail: "Rooms." },
      other: { available: true, types: ["spa", "farm tour"], detail: "Little Bothy and Home Farm." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
