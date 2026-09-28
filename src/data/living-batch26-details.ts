import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch26LegalEntities: Record<string, LegalEntity[]> = {
  "dawn-ranch": [
    { name: "Dawn Ranch", kind: "Private farm retreat", role: "Private farm retreat.", status: "current", layer: "enterprise", year: "2005", forms: ["Company"] },
    { name: "Russian River acres", kind: "22-acre orchard retreat", role: "22 acres of redwoods, orchard, and kitchen garden.", status: "current", layer: "land", year: "1905", forms: ["Freehold title"] },
  ],
  "langdon-hall": [
    { name: "Langdon Hall Country House Hotel & Spa", kind: "Private country-house hotel", role: "Private country-house hotel.", status: "current", layer: "enterprise", year: "1989", forms: ["Company"] },
    { name: "Langdon Drive gardens", kind: "75-acre garden estate", role: "About 75 acres of vegetable and flower gardens.", status: "current", layer: "land", year: "1987", forms: ["Freehold title"] },
  ],
  wharekauhau: [
    { name: "Wharekauhau Country Estate", kind: "Working sheep-station lodge", role: "Working sheep-station lodge.", status: "current", layer: "enterprise", year: "1997", forms: ["Company"] },
    { name: "Palliser Bay station", kind: "3,000-acre sheep station", role: "3,000 acres of pasture, forest, and coast. Sheep and cattle.", status: "current", layer: "land", year: "1840", forms: ["Freehold title"] },
  ],
  "farm-san-benito": [
    { name: "The Farm at San Benito", kind: "Private organic spa farm", role: "Private organic spa farm.", status: "current", layer: "enterprise", year: "2002", forms: ["Company"] },
    { name: "Tipacan garden", kind: "48-hectare organic farm", role: "48 hectares. Vegetable garden.", status: "current", layer: "land", year: "2002", forms: ["Freehold title"] },
  ],
  segera: [
    { name: "Segera Retreat", kind: "Regenerative conservancy lodge", role: "Regenerative conservancy lodge.", status: "current", layer: "enterprise", year: "2010", forms: ["Company"] },
    { name: "Segera ranch", kind: "50,000-acre conservancy", role: "50,000 acres / Jacada Travel. Zeitz Foundation conservation.", status: "current", layer: "land", year: "2005", forms: ["Freehold title"] },
  ],
  "rock-creek-ranch": [
    { name: "The Ranch at Rock Creek", kind: "Private working ranch resort", role: "Private working ranch resort.", status: "current", layer: "enterprise", year: "2010", forms: ["Company"] },
    { name: "Rock Creek ranchland", kind: "6,600-acre ranch", role: "6,600 acres. Canvas cabins.", status: "current", layer: "land", year: "2010", forms: ["Freehold title"] },
  ],
  "hacienda-bambusa": [
    { name: "Hacienda Bambusa", kind: "Private working-farm hacienda", role: "Private working-farm hacienda.", status: "current", layer: "enterprise", year: "2013", forms: ["Company"] },
    { name: "La Bella farm", kind: "Working farm", role: "About 250 acres of banana, cacao, coffee, and cattle. Kitchen garden.", status: "current", layer: "land", year: "2013", forms: ["Freehold title"] },
  ],
  "satoyama-jujo": [
    { name: "Satoyama Jujo", kind: "Private satoyama inn", role: "Private satoyama inn.", status: "current", layer: "enterprise", year: "2012", forms: ["Company"] },
    { name: "Nagatani satoyama", kind: "Rice-country inn land", role: "Satoyama rice, pasture, and woodland of Minamiuonuma.", status: "current", layer: "land", year: "2012", forms: ["Freehold title"] },
  ],
  "vira-vira": [
    { name: "&Beyond Vira Vira", kind: "Working-farm lodge", role: "Working-farm lodge.", status: "current", layer: "enterprise", year: "2014", forms: ["Company"] },
    { name: "Palguín farm", kind: "22-hectare working farm", role: "About 22 hectares of working farm, organic garden, and cheese dairy.", status: "current", layer: "land", year: "2014", forms: ["Freehold title"] },
  ],
  "wildflower-farms": [
    { name: "Wildflower Farms", kind: "Regenerative farm resort", role: "Regenerative farm resort.", status: "current", layer: "enterprise", year: "2022", forms: ["Company"] },
    { name: "Gardiner acres", kind: "140-acre farm resort", role: "140 acres. 6-acre regenerative farm. Conservation easement.", status: "current", layer: "land", year: "2022", forms: ["Freehold title"] },
  ],
};

export const livingBatch26Land: Record<string, LandOwnership> = {
  "dawn-ranch": {
    owner: "The retreat",
    complexity: "simple",
    tenure: "Private orchard retreat",
    howHeld: "22 acres. Cabins.",
    narrative: "A Russian River orchard stay.",
    divided: [
      { label: "Orchard, garden, cabins", holder: "The retreat", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "langdon-hall": {
    owner: "The hotel",
    complexity: "simple",
    tenure: "Private country-house gardens",
    howHeld: "About 75 acres. Vegetable and flower gardens.",
    narrative: "A Cambridge garden hotel.",
    divided: [
      { label: "Gardens, woods, house", holder: "The hotel", share: "Private", what: "Private country-house gardens." },
    ],
  },
  wharekauhau: {
    owner: "The estate",
    complexity: "simple",
    tenure: "Private working sheep station",
    howHeld: "3,000 acres. Cottages.",
    narrative: "A Palliser Bay station. A cottage is not the Rimutakas.",
    divided: [
      { label: "Pasture, forest, cottages", holder: "The estate", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "farm-san-benito": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private organic spa farm",
    howHeld: "48 hectares. Villas.",
    narrative: "A Lipa kitchen farm. A villa is not Tipacan.",
    divided: [
      { label: "Garden, villas, spa", holder: "The farm", share: "Private", what: "A booking is not a deed." },
    ],
  },
  segera: {
    owner: "The Zeitz ranch",
    complexity: "simple",
    tenure: "Private regenerative conservancy",
    howHeld: "50,000 acres. Villas.",
    narrative: "A Laikipia garden lodge. A villa is not the plateau.",
    divided: [
      { label: "Gardens, villas, conservancy", holder: "The ranch", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "rock-creek-ranch": {
    owner: "The ranch",
    complexity: "simple",
    tenure: "Private working ranch",
    howHeld: "6,600 acres. Canvas cabins.",
    narrative: "A Philipsburg ranch.",
    divided: [
      { label: "Pasture, lodge, canvas cabins", holder: "The ranch", share: "Private", what: "Private working ranch." },
    ],
  },
  "hacienda-bambusa": {
    owner: "The hacienda",
    complexity: "simple",
    tenure: "Private working farm",
    howHeld: "About 250 acres. Rooms.",
    narrative: "A Quindío farmstay. A room is not La Bella.",
    divided: [
      { label: "Cacao, garden, rooms", holder: "The hacienda", share: "Private", what: "Private working farm." },
    ],
  },
  "satoyama-jujo": {
    owner: "The inn",
    complexity: "simple",
    tenure: "Private satoyama inn",
    howHeld: "Rice-country inn. Rooms.",
    narrative: "A Minamiuonuma satoyama stay. A room is not Nagatani.",
    divided: [
      { label: "Inn, onsen, rice country", holder: "The inn", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "vira-vira": {
    owner: "The lodge",
    complexity: "simple",
    tenure: "Private working-farm lodge",
    howHeld: "About 22 hectares. Suites.",
    narrative: "A Pucón farm lodge. A suite is not Palguín.",
    divided: [
      { label: "Garden, cheese, suites", holder: "The lodge", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "wildflower-farms": {
    owner: "Auberge Resorts",
    complexity: "simple",
    tenure: "Private regenerative farm resort",
    howHeld: "140 acres. 6-acre farm. Cabins.",
    narrative: "A Gardiner farmstay.",
    divided: [
      { label: "Farm, meadows, cabins", holder: "The resort", share: "Private", what: "A booking is not a deed." },
    ],
  },
};

export const livingBatch26Funding: Record<string, CommunityFunding> = {
  "dawn-ranch": {
    overview: "Retreat lodging and orchard dinners.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cabins, chalets, and tents",
    grants: [],
    private: [
      { source: "Guests", amount: "Cabins, chalets, and tents", year: "2005", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "langdon-hall": {
    overview: "Rooms, dining, and spa.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Country-house rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Country-house rooms", year: "1989", certainty: "estimated", kind: "business", note: "Rooms, Relais & Châteaux dining, spa, and garden tours." },
    ],
  },
  wharekauhau: {
    overview: "Lodge cottages and station dining.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cottages",
    grants: [],
    private: [
      { source: "Guests", amount: "Cottages", year: "1997", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "farm-san-benito": {
    overview: "Villas, spa, and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Villas",
    grants: [],
    private: [
      { source: "Guests", amount: "Villas", year: "2002", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  segera: {
    overview: "Villas and safari.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Villas",
    grants: [],
    private: [
      { source: "Guests", amount: "Villas", year: "2010", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "rock-creek-ranch": {
    overview: "All-inclusive ranch lodging.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Lodge rooms, homes, and canvas cabins",
    grants: [],
    private: [
      { source: "Guests", amount: "Lodge rooms, homes, and canvas cabins", year: "2010", certainty: "estimated", kind: "business", note: "All-inclusive ranch lodging." },
    ],
  },
  "hacienda-bambusa": {
    overview: "Rooms and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Eight rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Eight rooms", year: "2013", certainty: "estimated", kind: "business", note: "Rooms and farm kitchen." },
    ],
  },
  "satoyama-jujo": {
    overview: "Rooms and organic dining.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 13–17 rooms of Condé Nast Traveler / Design Hotels",
    grants: [],
    private: [
      { source: "Guests", amount: "About 13–17 rooms of Condé Nast Traveler / Design Hotels", year: "2012", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "vira-vira": {
    overview: "Lodge suites and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Suites",
    grants: [],
    private: [
      { source: "Guests", amount: "Suites", year: "2014", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "wildflower-farms": {
    overview: "Cabins, Clay, and spa.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 65 cabins",
    grants: [],
    private: [
      { source: "Guests", amount: "About 65 cabins", year: "2022", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
};

export const livingBatch26VisitJoin: Record<string, VisitJoin> = {
  "dawn-ranch": {
    visit: 5,
    join: 1,
    visitProcess: "16467 CA-116, Guerneville. Book. (707) 869-0656. A cabin night is not a job.",
    joinProcess: "Retreat staff.",
  },
  "langdon-hall": {
    visit: 5,
    join: 1,
    visitProcess: "1 Langdon Drive, Cambridge. Book. 519.740.2100. Garden tours.",
    joinProcess: "Hotel staff.",
  },
  wharekauhau: {
    visit: 5,
    join: 1,
    visitProcess: "Western Lake Road, Palliser Bay. Book. Station tour.",
    joinProcess: "Lodge staff. A cottage is not the station.",
  },
  "farm-san-benito": {
    visit: 5,
    join: 1,
    visitProcess: "119 Barangay Tipacan, Lipa. Book. +63 917 572 2222.",
    joinProcess: "Farm and spa staff. A villa is not Tipacan.",
  },
  segera: {
    visit: 4,
    join: 1,
    visitProcess: "Laikipia Plateau. Book. Charter from Nairobi of Travel Curator. A villa night is not a job.",
    joinProcess: "Conservancy staff. A villa is not the ranch.",
  },
  "rock-creek-ranch": {
    visit: 5,
    join: 1,
    visitProcess: "79 Carriage House Lane, Philipsburg. Book. (877) 786-1545.",
    joinProcess: "Ranch staff.",
  },
  "hacienda-bambusa": {
    visit: 5,
    join: 1,
    visitProcess: "Vereda La Bella, Armenia. Book. +57 300 7788897.",
    joinProcess: "Hacienda staff. A room is not La Bella.",
  },
  "satoyama-jujo": {
    visit: 5,
    join: 1,
    visitProcess: "555 Nagatani, Minamiuonuma. Book. Ōsawa station of Condé Nast Traveler.",
    joinProcess: "Inn staff. A room is not Nagatani.",
  },
  "vira-vira": {
    visit: 5,
    join: 1,
    visitProcess: "Camino a Palguín, Pucón. Book. Cheese tour.",
    joinProcess: "Lodge staff. A suite is not Palguín.",
  },
  "wildflower-farms": {
    visit: 5,
    join: 1,
    visitProcess: "2702 Main Street, Gardiner. Book. (855) 472-3188.",
    joinProcess: "Resort staff.",
  },
};

export const livingBatch26DailyLife: Record<string, DailyLife> = {
  "dawn-ranch": {
    typical: [
      { title: "Apple orchard", detail: "Century-old trees." },
      { title: "Kitchen garden", detail: "Flowers and vegetables." },
      { title: "Cabins and tents", detail: "Cabins, chalets, and glamping tents." },
    ],
    unique: { title: "Farm dinners under the apple trees", detail: "Murphy’s Ranch, early 1900s." },
  },
  "langdon-hall": {
    typical: [
      { title: "Vegetable and flower gardens", detail: "Vegetable and flower gardens." },
      { title: "Greenhouse tours", detail: "Daily 9:30." },
      { title: "Country-house rooms", detail: "Country-house rooms." },
    ],
    unique: { title: "A kitchen that starts in the cloister garden", detail: "William Bennett and Mary Beaton bought the Cambridge house in 1987 and opened the hotel in 1989; the kitchen still draws from vegetable and flower gardens on about 75 acres." },
  },
  wharekauhau: {
    typical: [
      { title: "Sheep station", detail: "About 6,000 sheep." },
      { title: "Cattle", detail: "About 300." },
      { title: "Lodge cottages", detail: "Palliser Bay." },
    ],
    unique: { title: "Sleep on a working Romney station", detail: "3,000 acres. A cottage is not Palliser Bay." },
  },
  "farm-san-benito": {
    typical: [
      { title: "Organic vegetable garden", detail: "5,700-plus sq m." },
      { title: "Plant-based kitchen", detail: "Homegrown." },
      { title: "Villas", detail: "Wellness farm." },
    ],
    unique: { title: "A Lipa farm that is also a sanctuary", detail: "2002. A villa is not Tipacan." },
  },
  segera: {
    typical: [
      { title: "Organic gardens", detail: "Waste-to-garden of Journeys by Design." },
      { title: "Conservancy", detail: "50,000 acres." },
      { title: "Villas", detail: "Botanical garden of Condé Nast Traveler." },
    ],
    unique: { title: "A cattle ranch turned into a garden lodge", detail: "Jochen Zeitz bought this former Laikipia cattle ranch in 2005; the lodge now sits in a botanical garden on 50,000 regenerative acres with organic rows, waste-to-compost, and a two-million-tree restoration." },
  },
  "rock-creek-ranch": {
    typical: [
      { title: "Working ranch", detail: "6,600 acres." },
      { title: "Canvas cabins", detail: "Glamping." },
      { title: "Horses", detail: "Ranch days." },
    ],
    unique: { title: "Glamping on a Granite County ranch", detail: "A 19th-century homestead in the Rock Creek valley, now a 6,600-acre Philipsburg working ranch with lodge rooms, homes, and classic canvas cabins." },
  },
  "hacienda-bambusa": {
    typical: [
      { title: "Kitchen garden", detail: "Seasonal vegetables." },
      { title: "Cacao and coffee", detail: "Banana, cacao, coffee, citrus, pineapple, and cattle." },
      { title: "Eight rooms", detail: "Bookable on the working farm." },
    ],
    unique: { title: "A Quindío table that starts in the rows", detail: "Chef Paula Serna cooks from the kitchen garden on a Quindío working farm in Vereda La Bella: eight rooms among banana, cacao, coffee, citrus, pineapple, and cattle, with a cacao tour. About 250 acres. A room is not La Bella." },
  },
  "satoyama-jujo": {
    typical: [
      { title: "Uonuma rice", detail: "Koshihikari of Condé Nast Traveler." },
      { title: "Wild plants", detail: "Sanaburi of Design Hotels." },
      { title: "Onsen rooms", detail: "en.satoyama-jujo.com." },
    ],
    unique: { title: "A satoyama inn that cooks the valley", detail: "Organic Express started in 2004; the 2012 inn takeover put farm-to-table Sanaburi, Uonuma Koshihikari, wild plants, and an onsen into a Minamiuonuma satoyama stay." },
  },
  "vira-vira": {
    typical: [
      { title: "Organic garden", detail: "Working farm garden." },
      { title: "Cheese dairy", detail: "Parmesan, gruyère, blue, camembert." },
      { title: "Lodge suites", detail: "Liucura." },
    ],
    unique: { title: "Sleep beside the cheese room", detail: "2014. A suite is not Palguín." },
  },
  "wildflower-farms": {
    typical: [
      { title: "Six-acre farm", detail: "Feeding Clay." },
      { title: "Clay restaurant", detail: "Wood fire." },
      { title: "Cabins", detail: "About 65." },
    ],
    unique: { title: "Hudson Valley cabins beside the rows", detail: "2022." },
  },
};

export const livingBatch26Informal: Record<string, InformalAgreement[]> = {
  "dawn-ranch": [
    { kind: "guest-stay", why: "Cabins, chalets, and tents." },
    { kind: "kitchen-table", why: "Chef-led farm dinners in the orchard." },
    { kind: "land-care", why: "Orchard and kitchen garden. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Yoga, foraging, and herbal workshops." },
  ],
  "langdon-hall": [
    { kind: "guest-stay", why: "Country-house rooms." },
    { kind: "kitchen-table", why: "Dining from the vegetable garden." },
    { kind: "land-care", why: "Vegetable and flower gardens. Guests stay off beds they were not asked onto." },
    { kind: "course-host", why: "Garden and greenhouse tours." },
  ],
  wharekauhau: [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "animals-stock", why: "Sheep and cattle." },
    { kind: "land-care", why: "3,000 acres." },
    { kind: "kitchen-table", why: "Farm-to-table." },
    { kind: "course-host", why: "Station tours." },
  ],
  "farm-san-benito": [
    { kind: "guest-stay", why: "Villas." },
    { kind: "kitchen-table", why: "Organic garden kitchen." },
    { kind: "land-care", why: "48 hectares. Guests stay off rows they were not asked onto." },
    { kind: "quiet-practice", why: "Wellness programmes." },
  ],
  segera: [
    { kind: "guest-stay", why: "Villas." },
    { kind: "land-care", why: "50,000-acre restoration / Journeys by Design." },
    { kind: "kitchen-table", why: "Organic garden." },
    { kind: "course-host", why: "Conservation and C4C of Journeys by Design." },
  ],
  "rock-creek-ranch": [
    { kind: "guest-stay", why: "Canvas cabins and lodge rooms." },
    { kind: "animals-stock", why: "Horses and ranch stock." },
    { kind: "land-care", why: "6,600 acres." },
    { kind: "kitchen-table", why: "Ranch kitchen." },
  ],
  "hacienda-bambusa": [
    { kind: "guest-stay", why: "Rooms." },
    { kind: "kitchen-table", why: "Garden vegetables." },
    { kind: "land-care", why: "Cacao, coffee, banana. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Cacao tour." },
  ],
  "satoyama-jujo": [
    { kind: "guest-stay", why: "Rooms." },
    { kind: "kitchen-table", why: "Uonuma rice and wild plants of Condé Nast Traveler / Design Hotels." },
    { kind: "land-care", why: "Satoyama." },
    { kind: "quiet-practice", why: "Onsen." },
  ],
  "vira-vira": [
    { kind: "guest-stay", why: "Suites." },
    { kind: "kitchen-table", why: "Organic garden and cheese." },
    { kind: "land-care", why: "Working farm. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Cheese tour." },
    { kind: "animals-stock", why: "Dairy for the cheese room." },
  ],
  "wildflower-farms": [
    { kind: "guest-stay", why: "Cabins." },
    { kind: "kitchen-table", why: "Clay from the six-acre farm." },
    { kind: "land-care", why: "140 acres and a conservation easement. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Farm tours." },
  ],
};

export const livingBatch26Governance: Record<string, Governance> = {
  "dawn-ranch": {
    model: "founder",
    modelLabel: "Private orchard retreat",
    unique: false,
    summary: "You book a cabin. You do not buy Highway 116.",
    whoDecides: "The retreat.",
    bodies: [
      { name: "Dawn Ranch", role: "The retreat." },
      { name: "The orchard", role: "22 acres." },
    ],
    howItRuns: "Book.",
  },
  "langdon-hall": {
    model: "founder",
    modelLabel: "Country-house garden hotel",
    unique: false,
    summary: "Bennett and Beaton 1989. Private country-house hotel.",
    whoDecides: "The hotel.",
    bodies: [
      { name: "Langdon Hall", role: "Country-house hotel." },
      { name: "The gardens", role: "Vegetable and flower gardens." },
    ],
    howItRuns: "Book.",
  },
  wharekauhau: {
    model: "founder",
    modelLabel: "Working sheep-station lodge",
    unique: false,
    summary: "You book a cottage. You do not buy Palliser Bay.",
    whoDecides: "The estate.",
    bodies: [
      { name: "Wharekauhau Country Estate", role: "Working sheep-station lodge." },
      { name: "The station", role: "3,000 acres." },
    ],
    howItRuns: "Book.",
  },
  "farm-san-benito": {
    model: "founder",
    modelLabel: "Organic spa farm",
    unique: false,
    summary: "thefarmatsanbenito.com. You book a villa. You do not buy Tipacan.",
    whoDecides: "The farm.",
    bodies: [
      { name: "The Farm at San Benito", role: "thefarmatsanbenito.com." },
      { name: "The garden", role: "Organic rows." },
    ],
    howItRuns: "Book.",
  },
  segera: {
    model: "founder",
    modelLabel: "Regenerative conservancy lodge",
    unique: false,
    summary: "Zeitz. You book a villa. You do not buy Laikipia.",
    whoDecides: "The retreat.",
    bodies: [
      { name: "Segera Retreat", role: "segera.com." },
      { name: "The ranch", role: "50,000 acres." },
    ],
    howItRuns: "Book.",
  },
  "rock-creek-ranch": {
    model: "founder",
    modelLabel: "Working ranch with glamping",
    unique: false,
    summary: "Private working ranch resort.",
    whoDecides: "The ranch.",
    bodies: [
      { name: "The Ranch at Rock Creek", role: "Working ranch resort." },
      { name: "The ranchland", role: "6,600 acres." },
    ],
    howItRuns: "Book.",
  },
  "hacienda-bambusa": {
    model: "founder",
    modelLabel: "Working-farm hacienda",
    unique: false,
    summary: "You book a room. You do not buy La Bella.",
    whoDecides: "The hacienda.",
    bodies: [
      { name: "Hacienda Bambusa", role: "Working-farm hacienda." },
      { name: "The farm", role: "Kitchen garden and cacao." },
    ],
    howItRuns: "Book.",
  },
  "satoyama-jujo": {
    model: "founder",
    modelLabel: "Satoyama inn",
    unique: false,
    summary: "2012. You book a room. You do not buy Nagatani.",
    whoDecides: "The inn.",
    bodies: [
      { name: "Satoyama Jujo", role: "en.satoyama-jujo.com." },
      { name: "The valley", role: "Uonuma rice country." },
    ],
    howItRuns: "Book.",
  },
  "vira-vira": {
    model: "founder",
    modelLabel: "Working-farm lodge",
    unique: false,
    summary: "2014. You book a suite. You do not buy Palguín.",
    whoDecides: "The lodge.",
    bodies: [
      { name: "&Beyond Vira Vira", role: "Working-farm lodge." },
      { name: "The farm", role: "Garden and cheese." },
    ],
    howItRuns: "Book.",
  },
  "wildflower-farms": {
    model: "founder",
    modelLabel: "Regenerative farm resort",
    unique: false,
    summary: "2022. You book a cabin. You do not buy Main Street.",
    whoDecides: "The resort.",
    bodies: [
      { name: "Wildflower Farms", role: "The resort." },
      { name: "The farm", role: "Six acres." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch26Leaders: Record<string, VillageLeaders> = {
  "dawn-ranch": {
    people: [],
    office: { url: "https://dawnranch.com/", address: "16467 CA-116, Guerneville, CA 95446", email: "hello@dawnranch.com", phone: "(707) 869-0656" },
  },
  "langdon-hall": {
    people: [],
    office: { url: "https://langdonhall.ca/", address: "1 Langdon Drive, Cambridge, ON N3H 4R8", email: "reservations@langdonhall.ca", phone: "519.740.2100" },
  },
  wharekauhau: {
    people: [],
    office: { url: "https://wharekauhau.co.nz/", address: "Western Lake Road, Palliser Bay, Featherston 5773, Wairarapa" },
  },
  "farm-san-benito": {
    people: [],
    office: { url: "https://www.thefarmatsanbenito.com/", address: "119 Barangay Tipacan, 4217 Lipa City, Batangas", phone: "+63 917 572 2222" },
  },
  segera: {
    people: [],
    office: { url: "https://segera.com/", address: "Segera, Laikipia Plateau, Nanyuki, Kenya" },
  },
  "rock-creek-ranch": {
    people: [],
    office: { url: "https://theranchatrockcreek.com/", address: "79 Carriage House Lane, Philipsburg, MT 59858", email: "welcome@theranchatrockcreek.com", phone: "(877) 786-1545" },
  },
  "hacienda-bambusa": {
    people: [],
    office: { url: "https://www.haciendabambusa.com/", address: "Vereda La Bella, Armenia, Quindío, Colombia", email: "bambusa@haciendabambusa.com", phone: "+57 300 7788897" },
  },
  "satoyama-jujo": {
    people: [],
    office: { url: "https://en.satoyama-jujo.com/", address: "555 Nagatani, Minamiuonuma, Niigata 949-6361" },
  },
  "vira-vira": {
    people: [],
    office: { url: "https://www.andbeyond.com/our-lodges/south-america/chile/lake-district/andbeyond-vira-vira/", address: "Camino a Palguín, Pucón, Araucanía, Chile" },
  },
  "wildflower-farms": {
    people: [],
    office: { url: "https://auberge.com/wildflower-farms/", address: "2702 Main Street, Gardiner, NY 12525", phone: "(855) 472-3188" },
  },
};

export const livingBatch26Accommodations: Record<string, Accommodations> = {
  "dawn-ranch": {
    visitor: {
      overview: "Cabins, chalets, and glamping tents. About 81 keys. Confirm current with (707) 869-0656.",
      camping: { available: true, types: ["glamping tent"], detail: "Glamping-style tents." },
      rooms: { available: true, types: ["cabin", "chalet"], detail: "Cabins and chalets across the 22 acres." },
      other: { available: true, types: ["spa", "orchard dinner"], detail: "Spa and chef-led farm dinners." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "langdon-hall": {
    visitor: {
      overview: "Country-house rooms. Garden tours. Confirm current with 519.740.2100.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "suite"], detail: "House and wing rooms." },
      other: { available: true, types: ["spa", "garden tour"], detail: "Spa and daily garden tours." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  wharekauhau: {
    visitor: {
      overview: "Freestanding cottages on the Palliser Bay station. Confirm current with the lodge.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "suite"], detail: "Edwardian-style cottages." },
      other: { available: true, types: ["station tour"], detail: "Sheep-station tour." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "farm-san-benito": {
    visitor: {
      overview: "Villas on the Lipa organic farm. Confirm current with +63 917 572 2222.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["villa", "suite"], detail: "Wellness villas." },
      other: { available: true, types: ["spa", "farm kitchen"], detail: "Spa and plant-based dining." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  segera: {
    visitor: {
      overview: "Private villas and a family house in the botanical garden / Condé Nast Traveler. Confirm current with the retreat.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["villa", "house"], detail: "Six villas plus a larger house of Condé Nast Traveler." },
      other: { available: true, types: ["safari", "spa"], detail: "Game drives and spa / Travel Curator." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rock-creek-ranch": {
    visitor: {
      overview: "Lodge rooms, luxury homes, historic barn, and classic canvas cabins. Confirm current with (877) 786-1545.",
      camping: { available: true, types: ["glamping tent"], detail: "Classic canvas cabins." },
      rooms: { available: true, types: ["lodge room", "home", "cabin"], detail: "Lodge studios to five-bedroom homes." },
      other: { available: true, types: ["ranch day", "spa"], detail: "All-inclusive ranch activities." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hacienda-bambusa": {
    visitor: {
      overview: "Eight rooms on the Quindío working farm. Confirm current with +57 300 7788897.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room"], detail: "Eight-room hacienda." },
      other: { available: true, types: ["cacao tour", "farm kitchen"], detail: "Cacao tour and garden dining." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "satoyama-jujo": {
    visitor: {
      overview: "Inn rooms and a farmhouse villa. About 13–17 rooms of Condé Nast Traveler / Design Hotels. Confirm current with the inn.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "villa"], detail: "The House farmhouse villa." },
      other: { available: true, types: ["onsen", "farm kitchen"], detail: "Onsen and Sanaburi of Design Hotels." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "vira-vira": {
    visitor: {
      overview: "Lodge suites on the Palguín working farm. Confirm current with the lodge.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["suite", "villa"], detail: "Suites." },
      other: { available: true, types: ["cheese tour", "farm kitchen"], detail: "Cheese dairy." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "wildflower-farms": {
    visitor: {
      overview: "Freestanding cabins under the Shawangunk Ridge. About 65. Confirm current with (855) 472-3188.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cabin", "cottage"], detail: "Cabins and cottages." },
      other: { available: true, types: ["spa", "farm kitchen"], detail: "Thistle Spa and Clay." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
