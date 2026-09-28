import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch25LegalEntities: Record<string, LegalEntity[]> = {
  kalani: [
    { name: "Kalani", kind: "Nonprofit retreat centre", role: "Nonprofit retreat centre.", status: "current", layer: "education", year: "1975", forms: ["Nonprofit corporation"] },
    { name: "Puna coastal land", kind: "Retreat acres", role: "About 40 acres of oceanside forest. Cottages.", status: "current", layer: "land", year: "1975", forms: ["Freehold title"] },
  ],
  "philo-apple-farm": [
    { name: "The Apple Farm", kind: "Private family orchard", role: "Private family orchard.", status: "current", layer: "enterprise", year: "1984", forms: ["Company"] },
    { name: "Greenwood Road orchard", kind: "32-acre orchard", role: "32 acres. Cottages.", status: "current", layer: "land", year: "1984", forms: ["Freehold title"] },
  ],
  milia: [
    { name: "Milia Mountain Retreat", kind: "Private eco-lodge", role: "Private eco-lodge.", status: "current", layer: "enterprise", year: "1993", forms: ["Company"] },
    { name: "Vlatos settlement", kind: "Restored village", role: "16th-century settlement. Organic farms and yards.", status: "current", layer: "land", year: "1993", forms: ["Freehold title", "Historic designation"] },
  ],
  "flora-farms": [
    { name: "Flora Farms", kind: "Private organic farm", role: "Private organic farm.", status: "current", layer: "enterprise", year: "1996", forms: ["Company"] },
    { name: "Las Animas land", kind: "25-acre farm", role: "25 acres. Cottages.", status: "current", layer: "land", year: "1996", forms: ["Freehold title"] },
  ],
  "los-poblanos": [
    { name: "Los Poblanos Inn & Organic Farm", kind: "Private farm inn", role: "Private farm inn.", status: "current", layer: "enterprise", year: "1999", forms: ["Company"] },
    { name: "Rio Grande farm", kind: "25-acre organic farm", role: "25 acres of lavender and organic farmland. Meem 1932.", status: "current", layer: "land", year: "1932", forms: ["Freehold title", "Historic designation"] },
  ],
  "cedar-ridge": [
    { name: "Cedar Ridge Ranch", kind: "Private family ranch", role: "Private family ranch.", status: "current", layer: "enterprise", year: "1999", forms: ["Company"] },
    { name: "County Road 103 land", kind: "67-acre ranch", role: "67 acres. Yurts and safari tents.", status: "current", layer: "land", year: "1999", forms: ["Freehold title"] },
  ],
  "leaping-lamb": [
    { name: "Leaping Lamb Farm", kind: "Private family farm", role: "Private family farm.", status: "current", layer: "enterprise", year: "2003", forms: ["Company"] },
    { name: "Honey Grove land", kind: "40-acre farm", role: "40 acres. Cottage.", status: "current", layer: "land", year: "2003", forms: ["Freehold title"] },
  ],
  "les-amanins": [
    { name: "Les Amanins", kind: "Cooperative agroecological centre", role: "Cooperative agroecological centre.", status: "current", layer: "education", year: "2003", forms: ["Cooperative"] },
    { name: "La Roche-sur-Grane land", kind: "55-hectare farm", role: "55 hectares. Cabins, lodges, camping.", status: "current", layer: "land", year: "2003", forms: ["Freehold title"] },
  ],
  "our-native-village": [
    { name: "Our Native Village", kind: "Private eco-resort", role: "Private eco-resort.", status: "current", layer: "enterprise", year: "2006", forms: ["Company"] },
    { name: "Hesaraghatta farm", kind: "12-acre organic farm", role: "12 acres. Kitchen from the farm.", status: "current", layer: "land", year: "2006", forms: ["Freehold title"] },
  ],
  blisswood: [
    { name: "BlissWood Bed and Breakfast Ranch", kind: "Private ranch inn", role: "Private ranch inn.", status: "current", layer: "enterprise", year: "2010", forms: ["Company"] },
    { name: "Frantz Road ranch", kind: "350-acre ranch", role: "350 acres. Cabins and wagon.", status: "current", layer: "land", year: "2010", forms: ["Freehold title"] },
  ],
};

export const livingBatch25Land: Record<string, LandOwnership> = {
  kalani: {
    owner: "The retreat",
    complexity: "simple",
    tenure: "Nonprofit retreat land",
    howHeld: "About 40 acres of oceanside forest. Cottages.",
    narrative: "A Puna rainforest stay.",
    divided: [
      { label: "Gardens, cottages, hall", holder: "The retreat", share: "Nonprofit title", what: "You book a cottage." },
    ],
  },
  "philo-apple-farm": {
    owner: "The Bates family",
    complexity: "simple",
    tenure: "Private orchard inn",
    howHeld: "32 acres. Cottages.",
    narrative: "An Anderson Valley orchard. A cottage is not Greenwood Road.",
    divided: [
      { label: "Orchard, cottages, farmstand", holder: "The family", share: "Private", what: "A booking is not a deed." },
    ],
  },
  milia: {
    owner: "The lodge",
    complexity: "simple",
    tenure: "Private restored village",
    howHeld: "16th-century settlement. Organic farms and yards.",
    narrative: "A Cretan mountain village. A room is not Vlatos.",
    divided: [
      { label: "Stone houses, yards, kitchen", holder: "The lodge", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "flora-farms": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private organic farm",
    howHeld: "25 acres. Cottages.",
    narrative: "A Cabo kitchen farm.",
    divided: [
      { label: "Rows, shoppes, cottages", holder: "The farm", share: "Private", what: "Private organic farm." },
    ],
  },
  "los-poblanos": {
    owner: "The Rembe family",
    complexity: "simple",
    tenure: "Private historic farm inn",
    howHeld: "25 acres of lavender and organic farmland. Meem 1932.",
    narrative: "A Rio Grande lavender farm. A room is not Los Ranchos.",
    divided: [
      { label: "Lavender, inn, Campo", holder: "The family", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "cedar-ridge": {
    owner: "The family",
    complexity: "simple",
    tenure: "Private horse ranch",
    howHeld: "67 acres. Yurts and safari tents.",
    narrative: "A Roaring Fork ranch.",
    divided: [
      { label: "Pasture, yurts, farmhouse", holder: "The family", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "leaping-lamb": {
    owner: "The Jones family",
    complexity: "simple",
    tenure: "Private sheep farm",
    howHeld: "40 acres. Cottage.",
    narrative: "An Alsea sheep farm. A cottage is not Honey Grove.",
    divided: [
      { label: "Pasture, cottage, creek", holder: "The family", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "les-amanins": {
    owner: "The cooperative",
    complexity: "simple",
    tenure: "Cooperative agroecological farm",
    howHeld: "55 hectares. Cabins, lodges, camping.",
    narrative: "A Drôme teaching farm.",
    divided: [
      { label: "Farm, school, stays", holder: "The cooperative", share: "Cooperative title", what: "A stay is not a share." },
    ],
  },
  "our-native-village": {
    owner: "The resort",
    complexity: "simple",
    tenure: "Private organic eco-resort",
    howHeld: "12 acres. Kitchen from the farm.",
    narrative: "A Hesaraghatta farmstay. A room is not the village.",
    divided: [
      { label: "Farm, rooms, pool", holder: "The resort", share: "Private", what: "A booking is not a deed." },
    ],
  },
  blisswood: {
    owner: "Carol Davis",
    complexity: "simple",
    tenure: "Private working ranch",
    howHeld: "350 acres. Cabins and wagon.",
    narrative: "A Cat Spring ranch.",
    divided: [
      { label: "Pasture, cabins, wagon", holder: "The ranch", share: "Private", what: "A booking is not a deed." },
    ],
  },
};

export const livingBatch25Funding: Record<string, CommunityFunding> = {
  kalani: {
    overview: "Retreat lodging and courses.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cottages and workshops",
    grants: [],
    private: [
      { source: "Guests", amount: "Cottages and workshops", year: "1975", certainty: "estimated", kind: "business", note: "Retreat lodging and courses." },
    ],
  },
  "philo-apple-farm": {
    overview: "Cottages, farmstand, and classes.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Two-night cottage stays",
    grants: [],
    private: [
      { source: "Guests", amount: "Two-night cottage stays", year: "1984", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  milia: {
    overview: "Rooms and restaurant.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Eco-rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Eco-rooms", year: "1993", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "flora-farms": {
    overview: "Farm restaurants, classes, and cottages.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cottages",
    grants: [],
    private: [
      { source: "Guests", amount: "Cottages", year: "1996", certainty: "estimated", kind: "business", note: "Farm-to-table, classes, spa, and overnight cottages." },
    ],
  },
  "los-poblanos": {
    overview: "Inn, Campo, and farm shop.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "About 46 rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "About 46 rooms", year: "1999", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "cedar-ridge": {
    overview: "Glamping and ranch days.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yurts, tents, farmhouse",
    grants: [],
    private: [
      { source: "Guests", amount: "Yurts, tents, farmhouse", year: "1999", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "leaping-lamb": {
    overview: "Farmstay cottage.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cottage",
    grants: [],
    private: [
      { source: "Guests", amount: "Cottage", year: "2003", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "les-amanins": {
    overview: "Farm stays and stages.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Pension complète",
    grants: [],
    private: [
      { source: "Guests", amount: "Pension complète", year: "2003", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "our-native-village": {
    overview: "Rooms and farm kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Rooms", year: "2006", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  blisswood: {
    overview: "Ranch rooms.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cabins",
    grants: [],
    private: [
      { source: "Guests", amount: "Cabins", year: "2010", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
};

export const livingBatch25VisitJoin: Record<string, VisitJoin> = {
  kalani: {
    visit: 5,
    join: 1,
    visitProcess: "12-6870 Kalapana Kapoho Road, Pāhoa. Book. (808) 756-9530.",
    joinProcess: "Retreat staff.",
  },
  "philo-apple-farm": {
    visit: 4,
    join: 1,
    visitProcess: "18501 Greenwood Road, Philo. Book. Two-night minimum. (707) 895-2333.",
    joinProcess: "Family orchard. A cottage is not the title.",
  },
  milia: {
    visit: 5,
    join: 1,
    visitProcess: "Vlatos, Kissamos. Book. +30 694 575 3743.",
    joinProcess: "Lodge staff. A stone room is not Vlatos.",
  },
  "flora-farms": {
    visit: 5,
    join: 1,
    visitProcess: "Las Animas, San José del Cabo. Cottages. Farm restaurants.",
    joinProcess: "Farm and hospitality staff.",
  },
  "los-poblanos": {
    visit: 5,
    join: 1,
    visitProcess: "4803 Rio Grande Boulevard NW. Book. (505) 985-5000.",
    joinProcess: "Family inn. A room is not the title.",
  },
  "cedar-ridge": {
    visit: 4,
    join: 1,
    visitProcess: "3059 County Road 103, Carbondale. Book. (970) 963-3507. Season.",
    joinProcess: "Family ranch.",
  },
  "leaping-lamb": {
    visit: 4,
    join: 1,
    visitProcess: "20368 Honey Grove Road, Alsea. Book. ResNexus. (541) 487-4966.",
    joinProcess: "Family farm. A cottage is not Honey Grove.",
  },
  "les-amanins": {
    visit: 4,
    join: 1,
    visitProcess: "1324 route de Crest, La Roche-sur-Grane. Farm stays. 04 75 43 75 05.",
    joinProcess: "Cooperative staff.",
  },
  "our-native-village": {
    visit: 5,
    join: 1,
    visitProcess: "Hesaraghatta Village. Book. +91 95912 35007.",
    joinProcess: "Resort staff. A room is not Hesaraghatta.",
  },
  blisswood: {
    visit: 5,
    join: 1,
    visitProcess: "13597 Frantz Road, Cat Spring. Book. ThinkReservations. (713) 301-3235.",
    joinProcess: "Ranch staff.",
  },
};

export const livingBatch25DailyLife: Record<string, DailyLife> = {
  kalani: {
    typical: [
      { title: "Tropical gardens", detail: "Fruit trees and gardens." },
      { title: "Cottages", detail: "Lodging." },
      { title: "Workshops", detail: "Wellness and education." },
    ],
    unique: { title: "A rainforest stay on the Red Road", detail: "Cottages still sit in the Puna rainforest they opened on 19 acres in 1975." },
  },
  "philo-apple-farm": {
    typical: [
      { title: "Heirloom orchard", detail: "80-plus apple varieties." },
      { title: "Cottages in the trees", detail: "Just-stay." },
      { title: "Farm breakfast", detail: "Juice, jam, granola." },
    ],
    unique: { title: "Sleep among 80 apple varieties", detail: "Tim and Karen Bates bought the 32-acre Anderson Valley orchard in 1984; cottages sit among 80-plus apple varieties, with a two-night minimum." },
  },
  milia: {
    typical: [
      { title: "Stone eco-rooms", detail: "16th-century settlement." },
      { title: "Organic kitchen", detail: "Farm and yards." },
      { title: "Mountain walks", detail: "Western Crete." },
    ],
    unique: { title: "A village that came back as a kitchen", detail: "Restoration started in 1982; the guesthouses and farm restaurant opened in spring 1993 in the abandoned 16th-century Vlatos settlement." },
  },
  "flora-farms": {
    typical: [
      { title: "Organic rows", detail: "25 acres." },
      { title: "Farm restaurants", detail: "Field kitchen." },
      { title: "Cottages", detail: "Culinary Cottages and Haylofts." },
    ],
    unique: { title: "A Cabo farm that built a village around the rows", detail: "Gloria and Patrick Greene started this Las Animas farm in 1996; the 25 organic acres now hold restaurants, a spa, and straw-bale cottages around the rows." },
  },
  "los-poblanos": {
    typical: [
      { title: "Lavender fields", detail: "25 acres." },
      { title: "Campo", detail: "Field-to-fork." },
      { title: "Inn rooms", detail: "About 46." },
    ],
    unique: { title: "Lavender you can sleep next to", detail: "Rembe B&B 1999. A room is not Rio Grande Boulevard." },
  },
  "cedar-ridge": {
    typical: [
      { title: "Horse ranch", detail: "67 acres." },
      { title: "Glamping", detail: "Yurts and safari tents." },
      { title: "Farm mornings", detail: "Eggs and tours." },
    ],
    unique: { title: "Yurts under Mt. Sopris", detail: "Family ranch. A tent is not County Road 103." },
  },
  "leaping-lamb": {
    typical: [
      { title: "Sheep", detail: "Pasture." },
      { title: "Cottage", detail: "Farm-stay." },
      { title: "Honey Grove Creek", detail: "Honey Grove Creek on the Alsea farm." },
    ],
    unique: { title: "A Coast Range cottage with a flock", detail: "Joneses 2003." },
  },
  "les-amanins": {
    typical: [
      { title: "Polyculture farm", detail: "Cows, pigs, hens, gardens." },
      { title: "École du Colibri", detail: "On the same land." },
      { title: "Farm stays", detail: "Cabins, lodges, camping." },
    ],
    unique: { title: "Rabhi’s farm that is also a school", detail: "Michel Valentin and Pierre Rabhi opened this cooperative agroecological farm in 2003 at La Roche-sur-Grane. Fifty-five hectares of cows, gardens, and cabins share the land with École du Colibri." },
  },
  "our-native-village": {
    typical: [
      { title: "Organic farm", detail: "12 acres." },
      { title: "Farm kitchen", detail: "Vegetables and fruit." },
      { title: "Rooms", detail: "Eco-resort." },
    ],
    unique: { title: "A Bengaluru farm plate you sleep beside", detail: "C. B. Ramkumar opened the 12-acre Hesaraghatta eco-resort in 2006; it took a World Responsible Tourism Award in 2008." },
  },
  blisswood: {
    typical: [
      { title: "Working ranch", detail: "350 acres." },
      { title: "Cabins and wagon", detail: "That accommodations line." },
      { title: "Horses and cattle", detail: "That site." },
    ],
    unique: { title: "A Houston-drive ranch with a covered wagon", detail: "Carol Davis." },
  },
};

export const livingBatch25Informal: Record<string, InformalAgreement[]> = {
  kalani: [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "course-host", why: "Workshops." },
    { kind: "land-care", why: "Gardens and fruit trees. Guests stay off rows they were not asked onto." },
    { kind: "quiet-practice", why: "Wellness." },
  ],
  "philo-apple-farm": [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "kitchen-table", why: "Breakfast of farm juice and jam." },
    { kind: "land-care", why: "Orchard. Guests stay off trees they were not asked onto." },
    { kind: "course-host", why: "Cooking classes." },
    { kind: "animals-stock", why: "Goats and chickens." },
  ],
  milia: [
    { kind: "guest-stay", why: "Stone eco-rooms." },
    { kind: "kitchen-table", why: "Organic restaurant." },
    { kind: "land-care", why: "Farms and yards." },
    { kind: "quiet-practice", why: "No gadgets in the rooms." },
  ],
  "flora-farms": [
    { kind: "guest-stay", why: "Cottages." },
    { kind: "kitchen-table", why: "Farm restaurants." },
    { kind: "land-care", why: "25-acre organic farm. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Cooking and painting classes." },
  ],
  "los-poblanos": [
    { kind: "guest-stay", why: "About 46 rooms." },
    { kind: "kitchen-table", why: "Campo." },
    { kind: "land-care", why: "Lavender and organic farmland. Guests stay off beds they were not asked onto." },
    { kind: "course-host", why: "Farm tours." },
  ],
  "cedar-ridge": [
    { kind: "guest-stay", why: "Yurts and tents." },
    { kind: "animals-stock", why: "Horses and alpacas." },
    { kind: "land-care", why: "67 acres." },
    { kind: "course-host", why: "Farm tours." },
  ],
  "leaping-lamb": [
    { kind: "guest-stay", why: "Cottage." },
    { kind: "animals-stock", why: "Sheep." },
    { kind: "land-care", why: "40 acres." },
    { kind: "kitchen-table", why: "Garden and lamb." },
  ],
  "les-amanins": [
    { kind: "guest-stay", why: "Cabins and lodges." },
    { kind: "course-host", why: "Stages." },
    { kind: "land-care", why: "Polyculture-élevage." },
    { kind: "kitchen-table", why: "Pension complète and bread oven." },
    { kind: "animals-stock", why: "Cows, pigs, hens, horse." },
  ],
  "our-native-village": [
    { kind: "guest-stay", why: "Rooms." },
    { kind: "kitchen-table", why: "Farm vegetables." },
    { kind: "land-care", why: "12-acre organic farm." },
    { kind: "course-host", why: "Eco-resort programmes." },
  ],
  blisswood: [
    { kind: "guest-stay", why: "Cabins." },
    { kind: "animals-stock", why: "Horses and cattle." },
    { kind: "land-care", why: "350 acres." },
    { kind: "course-host", why: "Trail rides." },
  ],
};

export const livingBatch25Governance: Record<string, Governance> = {
  kalani: {
    model: "board",
    modelLabel: "Nonprofit rainforest retreat",
    unique: false,
    summary: "1975. You book a cottage.",
    whoDecides: "The retreat.",
    bodies: [
      { name: "Kalani", role: "Nonprofit retreat centre." },
      { name: "The land", role: "Puna coastal acres." },
    ],
    howItRuns: "Book.",
  },
  "philo-apple-farm": {
    model: "founder",
    modelLabel: "Family orchard inn",
    unique: false,
    summary: "Bates 1984. You book a cottage. You do not buy Greenwood Road.",
    whoDecides: "The family.",
    bodies: [
      { name: "The Apple Farm", role: "Family orchard inn." },
      { name: "The orchard", role: "32 acres." },
    ],
    howItRuns: "Book.",
  },
  milia: {
    model: "founder",
    modelLabel: "Restored village eco-lodge",
    unique: false,
    summary: "1993. You book a room. You do not buy Vlatos.",
    whoDecides: "The lodge.",
    bodies: [
      { name: "Milia Mountain Retreat", role: "Mountain retreat." },
      { name: "The settlement", role: "16th-century houses." },
    ],
    howItRuns: "Book.",
  },
  "flora-farms": {
    model: "founder",
    modelLabel: "Organic farm with cottages",
    unique: false,
    summary: "Gloria and Patrick Greene, 1996. Private organic farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Flora Farms", role: "Organic farm and hospitality." },
      { name: "The cottages", role: "Culinary Cottages and Haylofts." },
    ],
    howItRuns: "Book.",
  },
  "los-poblanos": {
    model: "founder",
    modelLabel: "Family lavender farm inn",
    unique: false,
    summary: "Rembe B&B 1999. You book a room. You do not buy Rio Grande Boulevard.",
    whoDecides: "The family.",
    bodies: [
      { name: "Los Poblanos", role: "lospoblanos.com." },
      { name: "The farm", role: "Lavender." },
    ],
    howItRuns: "Book.",
  },
  "cedar-ridge": {
    model: "founder",
    modelLabel: "Family horse ranch with glamping",
    unique: false,
    summary: "You book a yurt. You do not buy County Road 103.",
    whoDecides: "The family.",
    bodies: [
      { name: "Cedar Ridge Ranch", role: "The ranch." },
      { name: "The ranch", role: "67 acres." },
    ],
    howItRuns: "Book.",
  },
  "leaping-lamb": {
    model: "founder",
    modelLabel: "Family sheep farmstay",
    unique: false,
    summary: "Joneses 2003. You book a cottage. You do not buy Honey Grove Road.",
    whoDecides: "The family.",
    bodies: [
      { name: "Leaping Lamb Farm", role: "Family sheep farm." },
      { name: "The flock", role: "Sheep." },
    ],
    howItRuns: "Book.",
  },
  "les-amanins": {
    model: "hybrid",
    modelLabel: "Cooperative farm, school, and stay",
    unique: false,
    summary: "2003. You book a stay. You do not buy route de Crest.",
    whoDecides: "The cooperative.",
    bodies: [
      { name: "Les Amanins", role: "Cooperative farm." },
      { name: "École du Colibri", role: "On the land." },
    ],
    howItRuns: "Book.",
  },
  "our-native-village": {
    model: "founder",
    modelLabel: "Organic eco-resort",
    unique: false,
    summary: "Ramkumar 2006. You book a room. You do not buy Hesaraghatta.",
    whoDecides: "The resort.",
    bodies: [
      { name: "Our Native Village", role: "Eco-resort." },
      { name: "The farm", role: "12 acres." },
    ],
    howItRuns: "Book.",
  },
  blisswood: {
    model: "founder",
    modelLabel: "Working-ranch B&B",
    unique: false,
    summary: "blisswood.net. You book a cabin. You do not buy Frantz Road.",
    whoDecides: "The ranch.",
    bodies: [
      { name: "BlissWood", role: "blisswood.net." },
      { name: "The ranch", role: "350 acres." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch25Leaders: Record<string, VillageLeaders> = {
  kalani: {
    people: [],
    office: { url: "https://kalani.com/", address: "12-6870 Kalapana Kapoho Road, Pāhoa, HI 96778", email: "guestservices@kalani.com", phone: "(808) 756-9530" },
  },
  "philo-apple-farm": {
    people: [],
    office: { url: "https://www.philoapplefarm.com/", address: "18501 Greenwood Road, Philo, CA 95466", phone: "(707) 895-2333" },
  },
  milia: {
    people: [],
    office: { url: "https://milia.gr/", address: "Vlatos, Kissamos, Chania 73400, Crete", phone: "+30 694 575 3743" },
  },
  "flora-farms": {
    people: [],
    office: { url: "https://www.flora-farms.com/", address: "Las Animas, San José del Cabo, Baja California Sur" },
  },
  "los-poblanos": {
    people: [],
    office: { url: "https://lospoblanos.com/", address: "4803 Rio Grande Boulevard NW, Los Ranchos de Albuquerque, NM 87107", email: "info@lospoblanos.com", phone: "(505) 985-5000" },
  },
  "cedar-ridge": {
    people: [],
    office: { url: "https://www.cedarridgeranch.com/", address: "3059 County Road 103, Carbondale, CO 81623", phone: "(970) 963-3507" },
  },
  "leaping-lamb": {
    people: [],
    office: { url: "https://www.leapinglambfarm.com/", address: "20368 Honey Grove Road, Alsea, OR 97324", phone: "(541) 487-4966" },
  },
  "les-amanins": {
    people: [],
    office: { url: "https://www.lesamanins.com/", address: "1324 route de Crest, 26400 La Roche-sur-Grane", phone: "04 75 43 75 05" },
  },
  "our-native-village": {
    people: [],
    office: { url: "https://www.ournativevillage.com/", address: "Hesaraghatta Village, Bengaluru, Karnataka 560088", email: "reservations@niraamaya.com", phone: "+91 95912 35007" },
  },
  blisswood: {
    people: [],
    office: { url: "https://www.blisswood.net/", address: "13597 Frantz Road, Cat Spring, TX 78933", email: "info@blisswood.net", phone: "(713) 301-3235" },
  },
};

export const livingBatch25Accommodations: Record<string, Accommodations> = {
  kalani: {
    visitor: {
      overview: "Private cottages. King or king-plus-twin. Confirm current with (808) 756-9530.",
      camping: { available: false, types: [], detail: "Camping not isolated as a public campground." },
      rooms: { available: true, types: ["cottage"], detail: "Cottages throughout the Puna land." },
      other: { available: true, types: ["workshop"], detail: "Wellness and education." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "philo-apple-farm": {
    visitor: {
      overview: "Cottages among the orchard. Two-night minimum, $415. Breakfast of farm juice and jam. Confirm current with (707) 895-2333.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage"], detail: "Four cottages. Fireplaces." },
      other: { available: true, types: ["cooking class"], detail: "Cooking classes." },
    },
    resident: {
      overview: "Family housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  milia: {
    visitor: {
      overview: "Stone eco-rooms in a restored settlement. Reserve-online. Confirm current with +30 694 575 3743.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["eco-room", "family room"], detail: "16th-century houses. Standard, large, suite, family." },
      other: { available: true, types: ["farm restaurant"], detail: "Organic kitchen." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "flora-farms": {
    visitor: {
      overview: "Culinary Cottages and Haylofts. Straw-bale houses. Confirm current with the farm.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "hayloft"], detail: "Cottages." },
      other: { available: true, types: ["farm spa", "cooking class"], detail: "Spa and classes." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "los-poblanos": {
    visitor: {
      overview: "About 46 rooms. Field rooms, farm rooms, Meem rooms. Confirm current with (505) 985-5000.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "suite"], detail: "Hacienda and field rooms." },
      other: { available: true, types: ["spa", "Campo"], detail: "Spa and field-to-fork." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "cedar-ridge": {
    visitor: {
      overview: "Yurt, two safari tents, farmhouse, and cabin. Rezstream. Confirm current with (970) 963-3507. Cabin year-round.",
      camping: { available: true, types: ["yurt", "safari tent"], detail: "Cozy Yurt and safari tents." },
      rooms: { available: true, types: ["farmhouse", "cabin"], detail: "The Farmhouse and Mountain Cabin." },
      other: { available: true, types: ["farm tour"], detail: "Farm tours and alpaca yoga." },
    },
    resident: {
      overview: "Family housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "leaping-lamb": {
    visitor: {
      overview: "Private cottage about 500 feet from the farmhouse. ResNexus. Confirm current with (541) 487-4966.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage"], detail: "Cottage. Farmhouse also sleeps guests." },
      other: { available: true, types: ["day visit"], detail: "Day retreats." },
    },
    resident: {
      overview: "Family housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "les-amanins": {
    visitor: {
      overview: "Eco-buildings, wooden cabins, lodges, and camping. Pension complète. Confirm current with 04 75 43 75 05.",
      camping: { available: true, types: ["tent", "lodge", "cabin"], detail: "Camping, lodges, and cabanes. High season 92 beds." },
      rooms: { available: true, types: ["shared room"], detail: "36 beds in eco-buildings." },
      other: { available: true, types: ["stage", "school stay"], detail: "Séjours et stages." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "our-native-village": {
    visitor: {
      overview: "Eco-resort rooms. Natural pool. Confirm current with +91 95912 35007.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["hotel room"], detail: "Deluxe rooms / Avathi." },
      other: { available: true, types: ["spa"], detail: "Spa." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  blisswood: {
    visitor: {
      overview: "B&B rooms, cabins, historic houses, and a covered wagon. ThinkReservations. Confirm current with (713) 301-3235.",
      camping: { available: true, types: ["covered wagon", "glamping"], detail: "Covered wagon." },
      rooms: { available: true, types: ["cabin", "farmhouse"], detail: "Cabins and historic Texas houses." },
      other: { available: true, types: ["trail ride"], detail: "Horseback." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
