import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch22LegalEntities: Record<string, LegalEntity[]> = {
  "ballymaloe": [
    { name: "Ballymaloe Cookery School", kind: "Private cookery school", role: "Private cookery school.", status: "current", layer: "education", year: "1983", forms: ["Company"] },
    { name: "Kinoith organic farm", kind: "100-acre farm", role: "100 acres. Cottages in converted farm buildings.", status: "current", layer: "land", year: "1983", forms: ["Freehold title"] },
  ],
  "embercombe": [
    { name: "Embercombe", kind: "UK educational charity 1116793", role: "UK educational charity 1116793.", status: "current", layer: "education", year: "1999", forms: ["Charitable incorporated organisation"] },
    { name: "Higher Ashton land", kind: "50-acre rewilding site", role: "50 acres. Yurt villages. Rewilding since 2017.", status: "current", layer: "land", year: "1999", forms: ["Freehold title"] },
  ],
  "serenbe": [
    { name: "The Inn at Serenbe", kind: "Private farm inn", role: "Private farm inn.", status: "current", layer: "enterprise", year: "2004", forms: ["Company"] },
    { name: "Serenbe hamlets", kind: "Planned community", role: "36-acre inn farm. Larger Serenbe. Farm tours.", status: "current", layer: "land", year: "2004", forms: ["Freehold title", "HOA"] },
  ],
  "vale-da-lama": [
    { name: "Quinta Vale da Lama", kind: "Regenerative farm and training centre", role: "Regenerative farm and training centre.", status: "current", layer: "education", year: "2006", forms: ["Company"] },
    { name: "Odiáxere land", kind: "43 hectares", role: "43 hectares. Ecosystem Restoration Communities hub.", status: "current", layer: "land", year: "2006", forms: ["Freehold title"] },
  ],
  "eumelia": [
    { name: "Eumelia Organic Agrotourism Farm", kind: "Private agritourism", role: "Private agritourism.", status: "current", layer: "enterprise", year: "2008", forms: ["Company"] },
    { name: "Gouves groves", kind: "Olive, vine, gardens", role: "Olive groves and eco-houses. Biodynamic and permaculture.", status: "current", layer: "land", year: "2008", forms: ["Freehold title"] },
  ],
  "playa-viva": [
    { name: "Playa Viva", kind: "B Corp regenerative hotel", role: "B Corp regenerative hotel.", status: "current", layer: "enterprise", year: "2009", forms: ["Company"] },
    { name: "Gente Viva farm", kind: "20-acre permaculture", role: "Beach lodge and 20-acre farm. Turtle sanctuary.", status: "current", layer: "land", year: "2009", forms: ["Freehold title"] },
  ],
  "babylonstoren": [
    { name: "Babylonstoren Farm Hotel", kind: "Private farm hotel", role: "Private farm hotel.", status: "current", layer: "enterprise", year: "2010", forms: ["Company"] },
    { name: "Babylonstoren werf", kind: "Cape Dutch farm from 1692", role: "200-hectare farm. 33 rooms. Fruit-and-vegetable garden.", status: "current", layer: "land", year: "1692", forms: ["Freehold title", "Historic designation"] },
  ],
  "la-donaira": [
    { name: "Finca La Donaira", kind: "Private organic farm retreat", role: "Private organic farm retreat.", status: "current", layer: "enterprise", year: "2014", forms: ["Company"] },
    { name: "Montecorto estate", kind: "700 hectares", role: "700 hectares of Kiwa No / Forbes. Nine rooms. Lusitano stud.", status: "current", layer: "land", year: "2014", forms: ["Freehold title"] },
  ],
  "copal-tree": [
    { name: "Copal Tree Lodge", kind: "Muy’Ono eco-lodge", role: "Muy’Ono eco-lodge.", status: "current", layer: "enterprise", year: "2016", forms: ["Company"] },
    { name: "Toledo farm", kind: "3,000-acre farm", role: "3,000-acre farm and 15,000-acre preserve. Suites.", status: "current", layer: "land", year: "2016", forms: ["Freehold title"] },
  ],
  "the-newt": [
    { name: "The Newt in Somerset", kind: "Private estate hotel", role: "Private estate hotel.", status: "current", layer: "enterprise", year: "2019", forms: ["Company"] },
    { name: "Hadspen estate", kind: "Gardens and farm", role: "Hadspen gardens, farm, cyder. Hotel 2019.", status: "current", layer: "land", year: "2019", forms: ["Freehold title", "Historic designation"] },
  ],
};

export const livingBatch22Land: Record<string, LandOwnership> = {
  "ballymaloe": {
    owner: "The Allens",
    complexity: "simple",
    tenure: "Private organic farm school",
    howHeld: "100 acres. Cottages in converted farm buildings.",
    narrative: "A Shanagarry farm school. A course is not Kinoith.",
    divided: [
      { label: "Farm, school, cottages", holder: "The family", share: "Private", what: "A course is not a deed." },
    ],
  },
  "embercombe": {
    owner: "The charity",
    complexity: "simple",
    tenure: "Educational charity estate",
    howHeld: "50 acres. Yurt villages. Rewilding since 2017.",
    narrative: "A Devon teaching land. Charitable title. Courses and yurt stays.",
    divided: [
      { label: "Yurts, hall, rewilding ground", holder: "The charity", share: "Charitable title", what: "Educational charity 1116793." },
    ],
  },
  "serenbe": {
    owner: "The inn / hamlets",
    complexity: "split",
    tenure: "Private inn farm inside hamlets",
    howHeld: "36-acre inn farm. Larger Serenbe. Farm tours.",
    narrative: "A Georgia farm inn inside planned hamlets. Private title. Rooms are bookings.",
    divided: [
      { label: "Inn grounds, farm, hamlets", holder: "The inn and lot owners", share: "Split: inn farm and residential lots", what: "Private inn farm and hamlet lots." },
    ],
  },
  "vale-da-lama": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "43 hectares. Ecosystem Restoration Communities hub.",
    narrative: "A Lagos restoration farm. A camp is not Odiáxere.",
    divided: [
      { label: "Agroforestry, camp, houses", holder: "The farm", share: "Private", what: "A camp week is not a deed." },
    ],
  },
  "eumelia": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private organic agritourism",
    howHeld: "Olive groves and eco-houses. Biodynamic and permaculture.",
    narrative: "A Laconian farmstay. Olive groves and eco-houses.",
    divided: [
      { label: "Groves, houses, kitchen", holder: "The family", share: "Private", what: "Book a cottage or a harvest retreat." },
    ],
  },
  "playa-viva": {
    owner: "The hotel",
    complexity: "simple",
    tenure: "Private regenerative lodge",
    howHeld: "Beach lodge and 20-acre farm. Turtle sanctuary.",
    narrative: "A Guerrero farm beach. A treehouse is not Juluchuca.",
    divided: [
      { label: "Beach, farm, rooms", holder: "The hotel", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "babylonstoren": {
    owner: "Bekker / Roos",
    complexity: "simple",
    tenure: "Private historic farm",
    howHeld: "200-hectare farm. 33 rooms. Fruit-and-vegetable garden.",
    narrative: "A Cape Dutch farm hotel in Simondium. You book a room.",
    divided: [
      { label: "Garden, farm, hotel, cellar", holder: "The owners", share: "Private", what: "A booking is a stay." },
    ],
  },
  "la-donaira": {
    owner: "The finca",
    complexity: "simple",
    tenure: "Private organic farm",
    howHeld: "700 hectares of Kiwa No / Forbes. Nine rooms. Lusitano stud.",
    narrative: "An Andalusian horse farm.",
    divided: [
      { label: "Farm, stud, nine rooms", holder: "The finca", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "copal-tree": {
    owner: "The lodge",
    complexity: "simple",
    tenure: "Private jungle farm",
    howHeld: "3,000-acre farm and 15,000-acre preserve. Suites.",
    narrative: "A Toledo farm lodge. A suite is not Big Falls.",
    divided: [
      { label: "Farm, rainforest, lodge", holder: "The lodge", share: "Private", what: "A booking is not a deed." },
    ],
  },
  "the-newt": {
    owner: "Bekker family",
    complexity: "simple",
    tenure: "Private estate",
    howHeld: "Hadspen gardens, farm, cyder. Hotel 2019.",
    narrative: "A Somerset cyder estate. A room is not Hadspen.",
    divided: [
      { label: "Gardens, farm, hotel, cyder", holder: "The owners", share: "Private", what: "A membership is not a deed." },
    ],
  },
};

export const livingBatch22Funding: Record<string, CommunityFunding> = {
  "ballymaloe": {
    overview: "Cookery school. Courses.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Course fees and cottages",
    grants: [],
    private: [
      { source: "Guests", amount: "Course fees and cottages", year: "1983", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "embercombe": {
    overview: "Educational charity. Course fees.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "The Journey, Catalyst, Rewilding Training",
    grants: [],
    private: [
      { source: "Guests", amount: "The Journey, Catalyst, Rewilding Training", year: "1999", certainty: "estimated", kind: "business", note: "Course fees include a yurt." },
    ],
  },
  "serenbe": {
    overview: "Inn rooms and events.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Rooms, cottages, events",
    grants: [],
    private: [
      { source: "Guests", amount: "Rooms, cottages, events", year: "2004", certainty: "estimated", kind: "business", note: "Farm tours. Confirm current rates." },
    ],
  },
  "vale-da-lama": {
    overview: "Camps and internships.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Ecosystem Regeneration Camp and intern year",
    grants: [],
    private: [
      { source: "Guests", amount: "Ecosystem Regeneration Camp and intern year", year: "2006", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "eumelia": {
    overview: "Cottages and harvest retreats.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Eco-houses",
    grants: [],
    private: [
      { source: "Guests", amount: "Eco-houses", year: "2008", certainty: "estimated", kind: "business", note: "Cottages and harvest retreats." },
    ],
  },
  "playa-viva": {
    overview: "Hotel rooms and retreats.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Treehouses and yoga weeks",
    grants: [],
    private: [
      { source: "Guests", amount: "Treehouses and yoga weeks", year: "2009", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "babylonstoren": {
    overview: "Hotel, restaurants, farm shop.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Garden hotel rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "33 rooms", year: "2010", certainty: "estimated", kind: "business", note: "Hotel, restaurants, farm shop." },
    ],
  },
  "la-donaira": {
    overview: "Nine rooms.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Relais & Châteaux stay",
    grants: [],
    private: [
      { source: "Guests", amount: "Relais & Châteaux stay", year: "2014", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "copal-tree": {
    overview: "Lodge suites.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "All-inclusive",
    grants: [],
    private: [
      { source: "Guests", amount: "All-inclusive", year: "2016", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
  "the-newt": {
    overview: "Hotel and garden membership.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Rooms",
    grants: [],
    private: [
      { source: "Guests", amount: "Rooms", year: "2019", certainty: "estimated", kind: "business", note: "A visit is not a closing." },
    ],
  },
};

export const livingBatch22VisitJoin: Record<string, VisitJoin> = {
  "ballymaloe": {
    visit: 4,
    join: 1,
    visitProcess: "Shanagarry. Book a course. Cottages. A course week is not a job.",
    joinProcess: "Family farm school. A course is not membership.",
  },
  "embercombe": {
    visit: 4,
    join: 1,
    visitProcess: "Higher Ashton EX6 7QQ. Book a training. Yurts.",
    joinProcess: "Charity staff.",
  },
  "serenbe": {
    visit: 5,
    join: 1,
    visitProcess: "10950 Hutcheson Ferry Road. Book. Events. Farm tours $15. 770.463.2610.",
    joinProcess: "Hamlets. A stay is an inn booking.",
  },
  "vale-da-lama": {
    visit: 3,
    join: 1,
    visitProcess: "Odiáxere, Lagos. Open days and Tuesdays of Regen. Camps. +351 963 014 026.",
    joinProcess: "Six-month intern. A Tuesday is not a share.",
  },
  "eumelia": {
    visit: 5,
    join: 1,
    visitProcess: "Gouves, Laconia 23055. Book. Olive Harvest Retreat. Reserve-online.",
    joinProcess: "Family farm.",
  },
  "playa-viva": {
    visit: 5,
    join: 1,
    visitProcess: "Juluchuca. Book. Farm tour. Yoga.",
    joinProcess: "Hotel and farm staff. A treehouse is not a share.",
  },
  "babylonstoren": {
    visit: 5,
    join: 1,
    visitProcess: "Simondium. Book a stay. Garden day. Morning harvest and bread baking.",
    joinProcess: "A private farm hotel.",
  },
  "la-donaira": {
    visit: 4,
    join: 1,
    visitProcess: "Montecorto. Book. EcoMaratón. Riding.",
    joinProcess: "A private finca.",
  },
  "copal-tree": {
    visit: 5,
    join: 1,
    visitProcess: "Big Falls Village. Book. 1-877-417-9478.",
    joinProcess: "Lodge staff. A suite is not the farm.",
  },
  "the-newt": {
    visit: 5,
    join: 1,
    visitProcess: "Hadspen, Bruton. Book a room. Garden membership.",
    joinProcess: "A private estate. A membership is not the title.",
  },
};

export const livingBatch22DailyLife: Record<string, DailyLife> = {
  "ballymaloe": {
    typical: [
      { title: "Organic farm", detail: "100 acres." },
      { title: "Cookery courses", detail: "Short courses and the 12-week certificate." },
      { title: "Farm school", detail: "Hens, soil, homesteading." },
    ],
    unique: { title: "The farm that taught Ireland to cook", detail: "Darina and Tim Allen, 1983. A course is not Kinoith." },
  },
  "embercombe": {
    typical: [
      { title: "Rewilding acres", detail: "50 acres." },
      { title: "Yurt villages", detail: "Wood stoves." },
      { title: "Trainings", detail: "The Journey, The Catalyst, The Rewilding Training." },
    ],
    unique: { title: "The Children’s Fire", detail: "Mac Macartney founded this educational charity in 1999 on 50 Teign Valley acres at the edge of Dartmoor; yurt stays sit on land that has been rewilding since 2017." },
  },
  "serenbe": {
    typical: [
      { title: "Inn farm", detail: "36 acres." },
      { title: "Hamlet events", detail: "Kids’ gardening and drawing." },
      { title: "Farm tours", detail: "$15. Confirm current." },
    ],
    unique: { title: "Twenty miles of trails", detail: "Serenbe’s 2,000 acres: forest, meadows, two waterfalls, an animal village." },
  },
  "vale-da-lama": {
    typical: [
      { title: "Agroforestry", detail: "43 ha." },
      { title: "Restoration camps", detail: "November 2026." },
      { title: "Volunteer Tuesdays", detail: "Tuesdays of Regen." },
    ],
    unique: { title: "A restoration camp on 43 Algarve hectares", detail: "Quinta Vale da Lama is a 43-hectare regenerative farm outside Lagos that trains agroforestry through residential camps, a six-month intern year, and Tuesdays of Regen, as an Ecosystem Restoration Communities hub." },
  },
  "eumelia": {
    typical: [
      { title: "Olive groves", detail: "Olives, vines, gardens." },
      { title: "Eco-houses", detail: "Bioclimatic cottages." },
      { title: "Harvest retreats", detail: "Olive Harvest." },
    ],
    unique: { title: "Olive harvest as the guest calendar", detail: "Solar, geothermal, rainwater. Olive Harvest Retreat." },
  },
  "playa-viva": {
    typical: [
      { title: "Permaculture farm", detail: "20 acres." },
      { title: "Turtle beach", detail: "Sanctuary." },
      { title: "Farm-to-table", detail: "Food as Medicine." },
    ],
    unique: { title: "Turtle beach with a 20-acre kitchen farm", detail: "David Leventhal opened the Juluchuca lodge in 2009; Gente Viva grows the kitchen on 20 permaculture acres and walks guests to a sea-turtle sanctuary on the same sand — about 20 rooms, two Michelin Keys." },
  },
  "babylonstoren": {
    typical: [
      { title: "The garden", detail: "Fruit-and-vegetable garden by Patrice Taravella." },
      { title: "Hotel", detail: "33 rooms. Garden hotel from 2010." },
      { title: "Harvest morning", detail: "With the gardeners." },
    ],
    unique: { title: "The Cape Dutch garden you can sleep in", detail: "Karen Roos commissioned Patrice Taravella in 2007. The layout takes a cue from Cape Town’s Company’s Garden." },
  },
  "la-donaira": {
    typical: [
      { title: "Organic farm", detail: "700 ha of Forbes / Kiwa No." },
      { title: "Lusitanos", detail: "Stud." },
      { title: "Nine rooms", detail: "That site / Forbes." },
    ],
    unique: { title: "Nine rooms, 700 hectares, Lusitanos", detail: "Soil Academy. A room is not Montecorto." },
  },
  "copal-tree": {
    typical: [
      { title: "Farm table", detail: "3,000 acres." },
      { title: "Jungle suites", detail: "copaltreelodge.com." },
      { title: "All-inclusive", detail: "That package page." },
    ],
    unique: { title: "A 3,000-acre farm table in Toledo", detail: "Michelin Key. A suite is not Big Falls." },
  },
  "the-newt": {
    typical: [
      { title: "Gardens", detail: "Hadspen estate gardens." },
      { title: "Farm-to-table", detail: "Hadspen soil." },
      { title: "Cyder", detail: "Estate cyder." },
    ],
    unique: { title: "Hadspen cyder and a garden membership", detail: "The Bekker family opened the 2019 hotel on the Hadspen estate at Bruton; the same family as Babylonstoren." },
  },
};

export const livingBatch22Informal: Record<string, InformalAgreement[]> = {
  "ballymaloe": [
    { kind: "course-host", why: "Courses." },
    { kind: "guest-stay", why: "Cottages." },
    { kind: "land-care", why: "100-acre organic farm." },
    { kind: "kitchen-table", why: "Farm produce in the kitchen." },
  ],
  "embercombe": [
    { kind: "course-host", why: "2026 trainings." },
    { kind: "guest-stay", why: "Yurts." },
    { kind: "land-care", why: "Rewilding since 2017." },
    { kind: "quiet-practice", why: "The Children’s Fire." },
  ],
  "serenbe": [
    { kind: "guest-stay", why: "Inn and cottages." },
    { kind: "course-host", why: "Events." },
    { kind: "land-care", why: "Inn farm. Guests stay off rows they were not asked onto." },
    { kind: "animals-stock", why: "Animals on the inn grounds." },
  ],
  "vale-da-lama": [
    { kind: "course-host", why: "Camps." },
    { kind: "volunteer-intern", why: "Intern year and Tuesdays of Regen." },
    { kind: "land-care", why: "Agroforestry." },
    { kind: "guest-stay", why: "Residential camp. Casa Vale da Lama." },
  ],
  "eumelia": [
    { kind: "guest-stay", why: "Eco-houses." },
    { kind: "course-host", why: "Olive harvest retreat." },
    { kind: "land-care", why: "Permaculture and biodynamic." },
    { kind: "kitchen-table", why: "Farm-to-table." },
  ],
  "playa-viva": [
    { kind: "guest-stay", why: "Treehouses." },
    { kind: "land-care", why: "20-acre farm of Regenerative Travel." },
    { kind: "course-host", why: "Yoga and farm tours." },
    { kind: "kitchen-table", why: "Food as Medicine." },
  ],
  "babylonstoren": [
    { kind: "guest-stay", why: "33 rooms." },
    { kind: "land-care", why: "Garden. Guests stay off beds they were not asked onto." },
    { kind: "kitchen-table", why: "Babel and Greenhouse." },
    { kind: "course-host", why: "Harvest, bread, cellar." },
  ],
  "la-donaira": [
    { kind: "guest-stay", why: "Nine rooms." },
    { kind: "animals-stock", why: "Lusitanos." },
    { kind: "land-care", why: "Organic / regenerative of Forbes." },
    { kind: "course-host", why: "Soil Academy of Kiwa No." },
  ],
  "copal-tree": [
    { kind: "guest-stay", why: "Suites." },
    { kind: "kitchen-table", why: "Farm-to-table." },
    { kind: "land-care", why: "3,000-acre farm." },
    { kind: "course-host", why: "Farm visits." },
  ],
  "the-newt": [
    { kind: "guest-stay", why: "Hotel." },
    { kind: "land-care", why: "Gardens and farm." },
    { kind: "kitchen-table", why: "Farm-to-table." },
    { kind: "course-host", why: "Seasonal events." },
  ],
};

export const livingBatch22Governance: Record<string, Governance> = {
  "ballymaloe": {
    model: "founder",
    modelLabel: "Family organic farm school",
    unique: false,
    summary: "1983. You book a course. You do not buy Kinoith.",
    whoDecides: "The school.",
    bodies: [
      { name: "The school", role: "Courses." },
      { name: "The farm", role: "100 acres." },
    ],
    howItRuns: "Book a course.",
  },
  "embercombe": {
    model: "board",
    modelLabel: "Educational charity on rewilding land",
    unique: false,
    summary: "Charity 1116793. Courses and yurt stays on the land.",
    whoDecides: "Trustees.",
    bodies: [
      { name: "The charity", role: "1116793." },
      { name: "The land", role: "50 acres." },
    ],
    howItRuns: "Trustees. Courses and yurt stays.",
  },
  "serenbe": {
    model: "hybrid",
    modelLabel: "Farm inn inside planned hamlets",
    unique: false,
    summary: "Nygren 2004. Inn rooms and events on the farm.",
    whoDecides: "The inn and the hamlets.",
    bodies: [
      { name: "The Inn at Serenbe", role: "36-acre inn farm." },
      { name: "Serenbe", role: "Hamlets." },
    ],
    howItRuns: "Book. 770.463.2610.",
  },
  "vale-da-lama": {
    model: "founder",
    modelLabel: "Regenerative farm and restoration hub",
    unique: false,
    summary: "You book a camp. You do not buy Odiáxere.",
    whoDecides: "The farm team.",
    bodies: [
      { name: "The farm", role: "43 ha." },
      { name: "ERC hub", role: "Ecosystem Restoration Communities." },
    ],
    howItRuns: "Register.",
  },
  "eumelia": {
    model: "founder",
    modelLabel: "Family biodynamic agritourism",
    unique: false,
    summary: "You book a cottage or an olive-harvest retreat.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Eumelia", role: "Family agritourism." },
      { name: "The groves", role: "Olives and vines." },
    ],
    howItRuns: "Book.",
  },
  "playa-viva": {
    model: "founder",
    modelLabel: "Regenerative beach lodge with a farm",
    unique: false,
    summary: "Leventhal 2009. You book a treehouse. You do not buy Juluchuca.",
    whoDecides: "The hotel.",
    bodies: [
      { name: "Playa Viva", role: "B Corp regenerative hotel." },
      { name: "Gente Viva", role: "Farm team." },
    ],
    howItRuns: "Book.",
  },
  "babylonstoren": {
    model: "founder",
    modelLabel: "Historic farm garden hotel",
    unique: false,
    summary: "Karen Roos and Koos Bekker. You book a room or a garden day.",
    whoDecides: "The farm hotel.",
    bodies: [
      { name: "The hotel", role: "babylonstoren.com" },
      { name: "The garden", role: "Patrice Taravella’s fruit-and-vegetable garden." },
    ],
    howItRuns: "Book.",
  },
  "la-donaira": {
    model: "founder",
    modelLabel: "Organic farm, stud, nine-room retreat",
    unique: false,
    summary: "ladonaira.com. You book a room. You do not buy Montecorto.",
    whoDecides: "The finca.",
    bodies: [
      { name: "La Donaira", role: "ladonaira.com." },
      { name: "The stud", role: "Lusitanos." },
    ],
    howItRuns: "Book.",
  },
  "copal-tree": {
    model: "founder",
    modelLabel: "Jungle lodge on a working farm",
    unique: false,
    summary: "copaltreelodge.com. You book a suite. You do not buy Big Falls.",
    whoDecides: "The lodge.",
    bodies: [
      { name: "Copal Tree Lodge", role: "Muy’Ono." },
      { name: "The farm", role: "3,000 acres." },
    ],
    howItRuns: "Book.",
  },
  "the-newt": {
    model: "founder",
    modelLabel: "Garden estate hotel with a farm",
    unique: false,
    summary: "2019. You book a room. You do not buy Hadspen.",
    whoDecides: "The estate.",
    bodies: [
      { name: "The Newt", role: "Farm estate hotel." },
      { name: "The gardens", role: "Membership." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch22Leaders: Record<string, VillageLeaders> = {
  "ballymaloe": {
    people: [],
    office: { url: "https://www.ballymaloecookeryschool.ie/", address: "Kinoith, Shanagarry, Co. Cork P25 R297" },
  },
  "embercombe": {
    people: [
      { name: "Mac Macartney", role: "Founder." },
    ],
    office: { url: "https://www.embercombe.org/", address: "Higher Ashton, Devon EX6 7QQ" },
  },
  "serenbe": {
    people: [
      { name: "Steve Nygren", role: "Founder, Serenbe." },
    ],
    office: { url: "https://www.serenbeinn.com/", address: "10950 Hutcheson Ferry Road, Chattahoochee Hills, GA 30268", email: "stay@serenbeinn.com", phone: "770.463.2610" },
  },
  "vale-da-lama": {
    people: [],
    office: { url: "https://www.valedalama.net/", address: "Odiáxere, Lagos, Algarve", email: "andre@valedalama.net", phone: "+351 963 014 026" },
  },
  "eumelia": {
    people: [],
    office: { url: "https://eumelia.com/en/", address: "Gouves, Laconia 23055, Peloponnese" },
  },
  "playa-viva": {
    people: [],
    office: { url: "https://www.playaviva.com/", address: "Juluchuca, Guerrero" },
  },
  "babylonstoren": {
    people: [
      { name: "Karen Roos", role: "Owner. Commissioned the garden in 2007." },
      { name: "Koos Bekker", role: "Owner." },
    ],
    office: { url: "https://babylonstoren.com/", address: "Babylonstoren Road, Simondium, Franschhoek" },
  },
  "la-donaira": {
    people: [],
    office: { url: "https://www.ladonaira.com/", address: "Montecorto, Serranía de Ronda, Málaga" },
  },
  "copal-tree": {
    people: [],
    office: { url: "https://www.copaltreelodge.com/", address: "Big Falls Village, Toledo", email: "reservations@copaltreelodge.com", phone: "1-877-417-9478" },
  },
  "the-newt": {
    people: [],
    office: { url: "https://thenewtinsomerset.com/", address: "Hadspen, Bruton, Somerset BA7 7NG", email: "s@thenewtinsomerset.com" },
  },
};

export const livingBatch22Accommodations: Record<string, Accommodations> = {
  "ballymaloe": {
    visitor: {
      overview: "Cottages in converted farm buildings. Short-course rooms. Confirm current with the school. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cottage", "course room"], detail: "On-site cottages. Self-catering. Farm eggs and vegetables." },
      other: { available: false, types: [], detail: "Ballymaloe House is a six-minute drive, same family. Confirm current." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "embercombe": {
    visitor: {
      overview: "Shared or single yurts, or bring a tent. Course fees include board. Compost toilets. Confirm current with the charity.",
      camping: { available: true, types: ["yurt", "tent"], detail: "Yurt villages. Bring-your-own tent." },
      rooms: { available: false, types: [], detail: "Main building showers. Not a public inn." },
      other: { available: false, types: [], detail: "None listed as a hotel." },
    },
    resident: {
      overview: "Staff housing not isolated here. A stay is a course booking.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "serenbe": {
    visitor: {
      overview: "Main house, cottages, stone cottage accommodations. Pool, breakfast, evening sweets. Confirm current with 770.463.2610. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["inn room", "cottage"], detail: "Main house and cottages. Stone Cottage eight bedrooms." },
      other: { available: true, types: ["event lawn"], detail: "Events. Farm photography permits." },
    },
    resident: {
      overview: "Staff housing not isolated here. A stay is an inn booking.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "vale-da-lama": {
    visitor: {
      overview: "Residential regeneration camps. Casa Vale da Lama eco resort on the same permaculture land. Confirm current lodging with the farm. Interns.",
      camping: { available: true, types: ["camp", "volunteer"], detail: "Ecosystem Regeneration Camp. Month of Regeneration." },
      rooms: { available: true, types: ["eco-resort room"], detail: "Casa Vale da Lama sits on the farm. Confirm current with the farm." },
      other: { available: true, types: ["internship"], detail: "Six-month intern." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "eumelia": {
    visitor: {
      overview: "Eco-houses. Olive-harvest retreats. Confirm current with the farm. Not a public campground of record.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["eco-house"], detail: "Cottages. Reserve-online." },
      other: { available: true, types: ["harvest retreat"], detail: "Olive Harvest Retreat." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "playa-viva": {
    visitor: {
      overview: "About 20 eco-luxury rooms and treehouses. Yoga, farm tours, turtle sanctuary. Confirm current with the hotel.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["treehouse", "eco-room"], detail: "About 20 rooms." },
      other: { available: true, types: ["yoga retreat"], detail: "Retreats." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "babylonstoren": {
    visitor: {
      overview: "33 rooms and cottages. Garden access, harvest, bread, cellar. Spa. Confirm current with the hotel.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["hotel room", "cottage"], detail: "33 rooms." },
      other: { available: true, types: ["spa", "garden day"], detail: "Garden and restaurants." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "la-donaira": {
    visitor: {
      overview: "Nine rooms / Forbes. Riding, hammam, yoga of Artful Living. EcoMaratón. Confirm current with the finca. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["farm room"], detail: "Nine rooms." },
      other: { available: true, types: ["trail run", "riding"], detail: "EcoMaratón. Lusitano rides." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "copal-tree": {
    visitor: {
      overview: "Twelve to seventeen suites and a villa / visittoledobelize.com. Infinity pool, spa. Confirm current with reservations@copaltreelodge.com.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["jungle suite", "villa"], detail: "Suites." },
      other: { available: true, types: ["spa"], detail: "Spa." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "the-newt": {
    visitor: {
      overview: "Hotel rooms. Garden membership. Farm shop and restaurants. Confirm current with the estate.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["hotel room"], detail: "Hotel of two halves." },
      other: { available: true, types: ["garden membership"], detail: "12-month garden ticket." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};

