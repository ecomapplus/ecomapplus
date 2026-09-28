import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch32LegalEntities: Record<string, LegalEntity[]> = {
  "the-yurtfarm": [
    { name: "The Yurtfarm", kind: "Working mixed farm", role: "500-acre farm.", status: "current", layer: "enterprise", year: "1996", forms: ["Company"] },
    { name: "Mummel acres", kind: "500-acre farm", role: "500 acres. Teachers Yurt.", status: "current", layer: "land", year: "1996", forms: ["Freehold title"] },
  ],
  "verdon-yourte": [
    { name: "Verdon Yourte", kind: "Farm camping", role: "Farm.", status: "current", layer: "enterprise", year: "2008", forms: ["Company"] },
    { name: "Angles acres", kind: "Farm camping", role: "Camping à la ferme. Six yurts.", status: "current", layer: "land", year: "2008", forms: ["Freehold title"] },
  ],
  "mudita-camel-dairy": [
    { name: "Mudita Camel Dairy", kind: "Camel dairy", role: "35-acre dairy.", status: "current", layer: "enterprise", year: "2014", forms: ["Company"] },
    { name: "Trujillo Canyon acres", kind: "35-acre farm", role: "35 acres. Hard-sided yurt.", status: "current", layer: "land", year: "2018", forms: ["Freehold title"] },
  ],
  "our-farm-strasburg": [
    { name: "Our Farm LLC", kind: "Family livestock farm", role: "Agritourism.", status: "current", layer: "enterprise", year: "2018", forms: ["Company"] },
    { name: "Strasburg acres", kind: "200-acre farm", role: "Over 200 acres. Full-Moon Dome.", status: "current", layer: "land", year: "2018", forms: ["Freehold title"] },
  ],
  "sun-farm-hawaii": [
    { name: "Sun Farm Hawaii", kind: "Regenerative produce farm", role: "Family farm.", status: "current", layer: "enterprise", year: "2019", forms: ["Company"] },
    { name: "Pakala Street acres", kind: "3-acre farm", role: "About 3 acres. Canvas yurts.", status: "current", layer: "land", year: "2019", forms: ["Freehold title"] },
  ],
  "blooming-bus-farms": [
    { name: "Blooming Bus Farms", kind: "Flower and fiber farm", role: "15-acre farm.", status: "current", layer: "enterprise", year: "2021", forms: ["Company"] },
    { name: "Niles acres", kind: "15-acre farm", role: "15 acres. 15-foot yurts.", status: "current", layer: "land", year: "2021", forms: ["Freehold title"] },
  ],
  "creekside-tipis": [
    { name: "Creekside Glamping Tipis", kind: "Working livestock ranch", role: "70-acre ranch.", status: "current", layer: "enterprise", year: "2021", forms: ["Company"] },
    { name: "Tres Piedras acres", kind: "70-acre ranch", role: "70 acres. 18-foot tipis.", status: "current", layer: "land", year: "2021", forms: ["Freehold title"] },
  ],
  "andelyn-farm": [
    { name: "Andelyn Farm", kind: "Rural farm stay", role: "100-acre farm.", status: "current", layer: "enterprise", year: "2022", forms: ["Company"] },
    { name: "Granville acres", kind: "100-acre farm", role: "About 100 acres. Luxury yurts.", status: "current", layer: "land", year: "2022", forms: ["Freehold title"] },
  ],
  "harmony-taos": [
    { name: "Harmony Taos Farm", kind: "Permaculture farm", role: "4-acre farm.", status: "current", layer: "enterprise", year: "2016", forms: ["Company"] },
    { name: "Taos acres", kind: "4-acre farm", role: "About 4 acres. Yurt.", status: "current", layer: "land", year: "2016", forms: ["Freehold title"] },
  ],
  "living-circle-farms": [
    { name: "Living Circle Farms", kind: "Regenerative fruit farm", role: "5-acre farm.", status: "current", layer: "enterprise", year: "2023", forms: ["Company"] },
    { name: "Waialua acres", kind: "5-acre farm", role: "5 acres. Park Pick & Play Yurt.", status: "current", layer: "land", year: "2023", forms: ["Freehold title"] },
  ],
};

export const livingBatch32Land: Record<string, LandOwnership> = {
  "the-yurtfarm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private working farm",
    howHeld: "About 500 acres. Teachers Yurt.",
    narrative: "A Mummel farm.",
    divided: [{ label: "Pasture, dam, yurts", holder: "The farm", share: "Private", what: "Private working farm." }],
  },
  "verdon-yourte": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private farm",
    howHeld: "Camping à la ferme. Six yurts.",
    narrative: "An Angles farm. A yurt night is not Chamatte.",
    divided: [{ label: "Sheepfolds, yurts", holder: "The farm", share: "Private", what: "A booking is not a deed." }],
  },
  "mudita-camel-dairy": {
    owner: "The Stalzers",
    complexity: "simple",
    tenure: "Private camel dairy",
    howHeld: "35 acres. Hard-sided yurt.",
    narrative: "A Capulin dairy.",
    divided: [{ label: "Camel paddock, yurt", holder: "The family", share: "Private", what: "Private camel dairy." }],
  },
  "our-farm-strasburg": {
    owner: "The family",
    complexity: "simple",
    tenure: "Private family farm",
    howHeld: "Over 200 acres. Full-Moon Dome.",
    narrative: "A Strasburg farm.",
    divided: [{ label: "Pasture, dome", holder: "The family", share: "Private", what: "Private family farm." }],
  },
  "sun-farm-hawaii": {
    owner: "The Santos family",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "About 3 acres. Canvas yurts.",
    narrative: "A Hawaii Kai farm.",
    divided: [{ label: "Produce rows, yurts", holder: "The family", share: "Private", what: "Private regenerative farm." }],
  },
  "blooming-bus-farms": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "15 acres. 15-foot yurts.",
    narrative: "A Niles farm.",
    divided: [{ label: "Flower rows, yurts", holder: "The farm", share: "Private", what: "Private regenerative farm." }],
  },
  "creekside-tipis": {
    owner: "The ranch",
    complexity: "simple",
    tenure: "Private working ranch",
    howHeld: "70 acres. 18-foot tipis.",
    narrative: "A Tres Piedras ranch.",
    divided: [{ label: "Pasture, creek, tipis", holder: "The ranch", share: "Private", what: "Private working ranch." }],
  },
  "andelyn-farm": {
    owner: "Andy and Lyn",
    complexity: "simple",
    tenure: "Private farm",
    howHeld: "About 100 acres. Luxury yurts.",
    narrative: "A Granville farm. Woodlands, meadows, streams, and ponds.",
    divided: [{ label: "Meadows, yurts", holder: "The farm", share: "Private", what: "You book a yurt." }],
  },
  "harmony-taos": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "About 4 acres. Yurt.",
    narrative: "A Taos farm.",
    divided: [{ label: "Orchard, gardens, yurt", holder: "The farm", share: "Private", what: "Private regenerative farm." }],
  },
  "living-circle-farms": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "5 acres. Park Pick & Play Yurt.",
    narrative: "A Waialua farm.",
    divided: [{ label: "Fruit, lei garden, yurt", holder: "The farm", share: "Private", what: "Private regenerative farm." }],
  },
};

export const livingBatch32Funding: Record<string, CommunityFunding> = {
  "the-yurtfarm": {
    overview: "Yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Teachers Yurt",
    grants: [],
    private: [{ source: "Guests", amount: "Yurt nights", year: "1996", certainty: "estimated", kind: "business", note: "" }],
  },
  "verdon-yourte": {
    overview: "Yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Six Mongolian yurts",
    grants: [],
    private: [{ source: "Guests", amount: "Online reservation", year: "2008", certainty: "estimated", kind: "business", note: "" }],
  },
  "mudita-camel-dairy": {
    overview: "Camel milk soap, fudge, and yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Hard-sided yurt",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2014", certainty: "estimated", kind: "business", note: "" }],
  },
  "our-farm-strasburg": {
    overview: "Dome nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Full-Moon Dome",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2018", certainty: "estimated", kind: "business", note: "" }],
  },
  "sun-farm-hawaii": {
    overview: "Tours and yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Canvas yurts",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2019", certainty: "estimated", kind: "business", note: "" }],
  },
  "blooming-bus-farms": {
    overview: "U-pick flowers and yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "15-foot yurts",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2021", certainty: "estimated", kind: "business", note: "" }],
  },
  "creekside-tipis": {
    overview: "Tipi nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "18-foot tipis",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2021", certainty: "estimated", kind: "business", note: "" }],
  },
  "andelyn-farm": {
    overview: "Yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Luxury yurts",
    grants: [],
    private: [{ source: "Guests", amount: "Book", year: "2022", certainty: "estimated", kind: "business", note: "" }],
  },
  "harmony-taos": {
    overview: "Yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yurt",
    grants: [],
    private: [{ source: "Guests", amount: "Yurt", year: "2016", certainty: "estimated", kind: "business", note: "" }],
  },
  "living-circle-farms": {
    overview: "Yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Park Pick & Play Yurt",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2023", certainty: "estimated", kind: "business", note: "" }],
  },
};

export const livingBatch32VisitJoin: Record<string, VisitJoin> = {
  "the-yurtfarm": {
    visit: 5,
    join: 1,
    visitProcess: "1688 Range Road, Mummel NSW 2580. Book the Teachers Yurt. A Goulburn drive. 4WD for the village.",
    joinProcess: "Family farm.",
  },
  "verdon-yourte": {
    visit: 5,
    join: 1,
    visitProcess: "719 route de Vergons, 04170 Angles. Book. May–September. A Castellane drive.",
    joinProcess: "Farm family. A yurt night is not Angles.",
  },
  "mudita-camel-dairy": {
    visit: 5,
    join: 1,
    visitProcess: "Trujillo Canyon, Capulin, Colorado. Instant book the yurt. Two-night minimum. An Alamosa drive.",
    joinProcess: "Family dairy.",
  },
  "our-farm-strasburg": {
    visit: 5,
    join: 1,
    visitProcess: "Strasburg, Virginia. Instant book the Full-Moon Dome.",
    joinProcess: "Family farm.",
  },
  "sun-farm-hawaii": {
    visit: 5,
    join: 1,
    visitProcess: "509 Pakala Street, Honolulu, HI 96825. Instant book a canvas yurt. (808) 451-1403. An East Oahu drive.",
    joinProcess: "Farm family.",
  },
  "blooming-bus-farms": {
    visit: 5,
    join: 1,
    visitProcess: "2617 S 17th Street, Niles, MI 49120. Instant book a 15-foot yurt. (574) 310-0170.",
    joinProcess: "Farm staff.",
  },
  "creekside-tipis": {
    visit: 5,
    join: 1,
    visitProcess: "21490 U.S. 64, Tres Piedras, NM 87577. Instant book an 18-foot tipi. (505) 506-4473.",
    joinProcess: "Ranch staff.",
  },
  "andelyn-farm": {
    visit: 5,
    join: 1,
    visitProcess: "Granville, New York. Book a yurt. Two-night minimum. (518) 240-4104. A Glens Falls drive.",
    joinProcess: "Farm family.",
  },
  "harmony-taos": {
    visit: 4,
    join: 1,
    visitProcess: "Taos, New Mexico. Book the yurt.",
    joinProcess: "Farm staff.",
  },
  "living-circle-farms": {
    visit: 5,
    join: 1,
    visitProcess: "Waialua, Oahu. Instant book the Park Pick & Play Yurt. A North Shore drive.",
    joinProcess: "Farm staff.",
  },
};

export const livingBatch32DailyLife: Record<string, DailyLife> = {
  "the-yurtfarm": {
    typical: [
      { title: "Highland cattle", detail: "Scottish Highland cattle." },
      { title: "Farm dam", detail: "Canoe." },
      { title: "Teachers Yurt", detail: "Lodging." },
    ],
    unique: { title: "A yurt village on the Tablelands", detail: "Mike Shepherd’s Back to Basics living camps have run more than thirty years on about 500 acres at Mummel, between Goulburn and Crookwell — first Australian yurt factory, Teachers Yurt lodging, and a yurt village around a farm dam with sheep and Highland cattle." },
  },
  "verdon-yourte": {
    typical: [
      { title: "Sheepfolds", detail: "Do not go into the sheepfolds." },
      { title: "Chamatte", detail: "Chamatte-foot woods." },
      { title: "Mongolian yurts", detail: "Six 28 m² Mongolian yurts." },
    ],
    unique: { title: "A Provençal yurt on the farm", detail: "Farm camping began in 2008 on a Chamatte-foot holding between Angles and Vergons; the public stay is six 28 m² Mongolian yurts, booked online for May–September." },
  },
  "mudita-camel-dairy": {
    typical: [
      { title: "Camel herd", detail: "Camels." },
      { title: "Farm tour", detail: "Farm tour." },
      { title: "Hard-sided yurt", detail: "Instant book." },
    ],
    unique: { title: "A yurt beside the camels", detail: "The Stalzers started the dairy near Moffat in 2014 and moved onto 35 Capulin acres in 2018; the public stay is a hard-sided yurt beside the camel paddock." },
  },
  "our-farm-strasburg": {
    typical: [
      { title: "Grass-fed beef", detail: "Grass-fed beef." },
      { title: "Sheep", detail: "Sheep." },
      { title: "Full-Moon Dome", detail: "30-foot geodesic." },
    ],
    unique: { title: "A geodesic on a century farm", detail: "Family farmland more than a hundred years; agritourism from 2018; the public stay is a Full-Moon 30-foot geodesic from 1974 on 200 Shenandoah acres." },
  },
  "sun-farm-hawaii": {
    typical: [
      { title: "Produce rows", detail: "Working produce farm." },
      { title: "Farm tour", detail: "Farm tours." },
      { title: "Canvas yurts", detail: "Canvas yurts." },
    ],
    unique: { title: "A yurt under Koko Head", detail: "Marcos and Michele Santos founded this regenerative produce farm at the base of Koko Head in 2019; the public stay is a canvas yurt on about 3 acres." },
  },
  "blooming-bus-farms": {
    typical: [
      { title: "U-pick flowers", detail: "U-pick." },
      { title: "Alpaca", detail: "Alpaca on the farm." },
      { title: "15-foot yurts", detail: "15-foot yurts." },
    ],
    unique: { title: "A yurt in the flower rows", detail: "Hosted on Hipcamp from June 2021; a 15-acre Niles regenerative flower-and-fiber farm with 15-foot yurts, alpaca, and chickens." },
  },
  "creekside-tipis": {
    typical: [
      { title: "Horses and cows", detail: "Horses and cows." },
      { title: "Mountain stream", detail: "Mountain stream." },
      { title: "18-foot tipis", detail: "18-foot tipis." },
    ],
    unique: { title: "A tipi on the working ranch", detail: "Hosted on Hipcamp from August 2021; a 70-acre Tres Piedras working ranch with 18-foot tipis, horses, cows, and a mountain stream." },
  },
  "andelyn-farm": {
    typical: [
      { title: "Wildflower meadows", detail: "Woodlands and wildflower meadows." },
      { title: "Streams and ponds", detail: "Streams and ponds on the farm." },
      { title: "Luxury yurts", detail: "Two-night minimum." },
    ],
    unique: { title: "A yurt on 100 Granville acres", detail: "Andy and Lyn. Two-night minimum." },
  },
  "harmony-taos": {
    typical: [
      { title: "Orchard", detail: "Orchards, ponderosas, vegetable gardens, and flowers." },
      { title: "Vegetable gardens", detail: "Vegetable gardens." },
      { title: "Stay yurt", detail: "Yurt lodging." },
    ],
    unique: { title: "A yurt in the Taos orchard", detail: "A 4-acre Taos permaculture farm with yurt lodging among orchards, vegetable gardens, and flowers." },
  },
  "living-circle-farms": {
    typical: [
      { title: "Bananas and papaya", detail: "Bananas and papaya on the trees." },
      { title: "Lei garden", detail: "Lei garden." },
      { title: "Park Pick & Play Yurt", detail: "Hand-sewn yurt." },
    ],
    unique: { title: "A hand-sewn yurt in the fruit", detail: "The public stay is a hand-sewn Park Pick & Play yurt among bananas, papaya, and a lei garden on five Waialua acres, hosted on Hipcamp from September 2023." },
  },
};

export const livingBatch32Informal: Record<string, InformalAgreement[]> = {
  "the-yurtfarm": [
    { kind: "guest-stay", why: "Teachers Yurt." },
    { kind: "animals-stock", why: "Sheep, Highland cattle, horses, chickens." },
    { kind: "land-care", why: "Guests stay off paddocks they were not asked onto." },
  ],
  "verdon-yourte": [
    { kind: "guest-stay", why: "Six Mongolian yurts." },
    { kind: "animals-stock", why: "Sheepfolds." },
    { kind: "land-care", why: "Do not go into the sheepfolds." },
  ],
  "mudita-camel-dairy": [
    { kind: "guest-stay", why: "Hard-sided yurt." },
    { kind: "animals-stock", why: "Camels and donkeys." },
    { kind: "land-care", why: "Farm tour. Guests stay off paddocks they were not asked onto." },
  ],
  "our-farm-strasburg": [
    { kind: "guest-stay", why: "Full-Moon Dome." },
    { kind: "animals-stock", why: "Grass-fed beef and sheep." },
  ],
  "sun-farm-hawaii": [
    { kind: "guest-stay", why: "Canvas yurts." },
    { kind: "land-care", why: "Produce rows. Guests stay off beds they were not asked onto." },
  ],
  "blooming-bus-farms": [
    { kind: "guest-stay", why: "15-foot yurts." },
    { kind: "animals-stock", why: "Alpaca and chickens." },
    { kind: "land-care", why: "Flower rows." },
  ],
  "creekside-tipis": [
    { kind: "guest-stay", why: "18-foot tipis." },
    { kind: "animals-stock", why: "Horses and cows. Keep gates closed." },
  ],
  "andelyn-farm": [
    { kind: "guest-stay", why: "Luxury yurts." },
    { kind: "land-care", why: "Shared 100-acre grounds." },
  ],
  "harmony-taos": [
    { kind: "guest-stay", why: "Yurt." },
    { kind: "land-care", why: "Orchards and gardens. Guests stay off beds they were not asked onto." },
  ],
  "living-circle-farms": [
    { kind: "guest-stay", why: "Park Pick & Play Yurt." },
    { kind: "land-care", why: "Fruit and lei garden." },
    { kind: "animals-stock", why: "Eggs." },
  ],
};

export const livingBatch32Governance: Record<string, Governance> = {
  "the-yurtfarm": {
    model: "founder",
    modelLabel: "Working mixed farm",
    unique: false,
    summary: "Private working farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "The Yurtfarm", role: "The farm." },
      { name: "The yurts", role: "Teachers Yurt." },
    ],
    howItRuns: "Book.",
  },
  "verdon-yourte": {
    model: "founder",
    modelLabel: "Farm camping",
    unique: false,
    summary: "You book a yurt. You do not buy Angles.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Verdon Yourte", role: "Farm camping." },
      { name: "The yurts", role: "Online reservation." },
    ],
    howItRuns: "Book.",
  },
  "mudita-camel-dairy": {
    model: "founder",
    modelLabel: "Camel dairy",
    unique: false,
    summary: "Private camel dairy.",
    whoDecides: "The Stalzers.",
    bodies: [
      { name: "Mudita Camel Dairy", role: "Camel dairy." },
      { name: "The yurt", role: "Hard-sided yurt." },
    ],
    howItRuns: "Book.",
  },
  "our-farm-strasburg": {
    model: "founder",
    modelLabel: "Family livestock farm",
    unique: false,
    summary: "Private family farm.",
    whoDecides: "The family.",
    bodies: [
      { name: "Our Farm", role: "Family farm." },
      { name: "The dome", role: "Full-Moon Dome." },
    ],
    howItRuns: "Book.",
  },
  "sun-farm-hawaii": {
    model: "founder",
    modelLabel: "Regenerative produce farm",
    unique: false,
    summary: "Private regenerative farm.",
    whoDecides: "The Santos family.",
    bodies: [
      { name: "Sun Farm Hawaii", role: "Regenerative produce farm." },
      { name: "The yurts", role: "Canvas yurts." },
    ],
    howItRuns: "Book.",
  },
  "blooming-bus-farms": {
    model: "founder",
    modelLabel: "Flower and fiber farm",
    unique: false,
    summary: "Private regenerative farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Blooming Bus Farms", role: "Flower and fiber farm." },
      { name: "The yurts", role: "15-foot yurts." },
    ],
    howItRuns: "Book.",
  },
  "creekside-tipis": {
    model: "founder",
    modelLabel: "Working livestock ranch",
    unique: false,
    summary: "Private working ranch.",
    whoDecides: "The ranch.",
    bodies: [
      { name: "Creekside Glamping Tipis", role: "Working livestock ranch." },
      { name: "The tipis", role: "18-foot tipis." },
    ],
    howItRuns: "Book.",
  },
  "andelyn-farm": {
    model: "founder",
    modelLabel: "Rural farm stay",
    unique: false,
    summary: "You book a yurt.",
    whoDecides: "Andy and Lyn.",
    bodies: [
      { name: "Andelyn Farm", role: "The farm." },
      { name: "The yurts", role: "Luxury yurts." },
    ],
    howItRuns: "Book.",
  },
  "harmony-taos": {
    model: "founder",
    modelLabel: "Permaculture farm",
    unique: false,
    summary: "Private regenerative farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Harmony Taos Farm", role: "Permaculture farm." },
      { name: "The yurt", role: "Yurt lodging." },
    ],
    howItRuns: "Book.",
  },
  "living-circle-farms": {
    model: "founder",
    modelLabel: "Regenerative fruit farm",
    unique: false,
    summary: "Private regenerative farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Living Circle Farms", role: "5-acre regenerative farm." },
      { name: "The yurt", role: "Park Pick & Play Yurt." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch32Leaders: Record<string, VillageLeaders> = {
  "the-yurtfarm": {
    people: [],
    office: { url: "https://www.hipcamp.com/en-AU/land/new-south-wales-the-yurtfarm-wz6hvowq", address: "1688 Range Road, Mummel NSW 2580" },
  },
  "verdon-yourte": {
    people: [],
    office: { url: "https://www.verdonyourte.com/", address: "719 route de Vergons, 04170 Angles", phone: "06 73 92 67 86" },
  },
  "mudita-camel-dairy": {
    people: [],
    office: { url: "https://www.hipcamp.com/en-US/land/colorado-mudita-camel-s-yurt-49mxh99n", address: "Trujillo Canyon, Capulin, Colorado" },
  },
  "our-farm-strasburg": {
    people: [],
    office: { url: "https://www.hipcamp.com/en-US/land/virginia-our-farm-in-strasburg-va-ex9h819w", address: "Strasburg, Virginia" },
  },
  "sun-farm-hawaii": {
    people: [],
    office: { url: "https://sunfarmhawaii.com/", address: "509 Pakala Street, Honolulu, HI 96825", phone: "(808) 451-1403" },
  },
  "blooming-bus-farms": {
    people: [],
    office: { url: "https://www.bloomingbusfarms.com/", address: "2617 S 17th Street, Niles, MI 49120", phone: "(574) 310-0170" },
  },
  "creekside-tipis": {
    people: [],
    office: { url: "https://tipiglamping.com/", address: "21490 U.S. 64, Tres Piedras, NM 87577", phone: "(505) 506-4473" },
  },
  "andelyn-farm": {
    people: [],
    office: { url: "https://andelynfarm.com/", address: "Granville, New York", phone: "(518) 240-4104" },
  },
  "harmony-taos": {
    people: [],
    office: { url: "https://www.harmonytaosfarm.com/", address: "Taos, New Mexico" },
  },
  "living-circle-farms": {
    people: [],
    office: { url: "https://www.hipcamp.com/en-US/land/hawaii-living-circle-farms-hawaii-mxvhqmqe", address: "Waialua, Hawaii" },
  },
};

export const livingBatch32Accommodations: Record<string, Accommodations> = {
  "the-yurtfarm": {
    visitor: {
      overview: "Teachers Yurt lodging and a yurt village. Confirm current with the farm.",
      camping: { available: true, types: ["yurt", "tent"], detail: "Teachers Yurt lodging. Village tent sites. The unique stay is the yurt." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public unique stay." },
      other: { available: true, types: ["kitchen yurt"], detail: "Kitchen and toilet yurts." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "verdon-yourte": {
    visitor: {
      overview: "Six 28 m² Mongolian yurts. Online reservation. May–September.",
      camping: { available: true, types: ["yurt"], detail: "Six Mongolian yurts. Not a cabin." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public stay." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Family housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "mudita-camel-dairy": {
    visitor: {
      overview: "Hard-sided yurt. Instant book. Two-night minimum.",
      camping: { available: true, types: ["yurt"], detail: "Hard-sided yurt beside the camel paddock. Not a cabin." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public unique stay." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "our-farm-strasburg": {
    visitor: {
      overview: "Full-Moon 30-foot geodesic dome. Instant book.",
      camping: { available: true, types: ["geodesic dome"], detail: "30-foot Full-Moon Dome." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public unique stay." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sun-farm-hawaii": {
    visitor: {
      overview: "Canvas yurts. Instant book.",
      camping: { available: true, types: ["yurt", "tent"], detail: "Canvas yurts. The unique stay is the yurt. Tent sites." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public unique stay." },
      other: { available: true, types: ["communal kitchen"], detail: "Farm kitchen." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "blooming-bus-farms": {
    visitor: {
      overview: "15-foot yurts. Instant book. Confirm current with (574) 310-0170.",
      camping: { available: true, types: ["yurt", "tent"], detail: "15-foot yurts. The unique stay is the yurt. Tent sites." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public unique stay." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "creekside-tipis": {
    visitor: {
      overview: "18-foot tipis. Instant book.",
      camping: { available: true, types: ["tipi"], detail: "18-foot canvas tipis." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public unique stay." },
      other: { available: true, types: ["creek"], detail: "Mountain stream." },
    },
    resident: {
      overview: "Ranch housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Ranch housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "andelyn-farm": {
    visitor: {
      overview: "Luxury yurts. Two-night minimum. Confirm current with (518) 240-4104.",
      camping: { available: true, types: ["yurt", "tent"], detail: "Luxury yurts. The unique stay is the yurt. Campground pitches." },
      rooms: { available: true, types: ["cabin"], detail: "Farm Worker’s Cottage. The featured unique stay is the yurt." },
      other: { available: true, types: ["bathhouse"], detail: "Shared bathhouse." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "harmony-taos": {
    visitor: {
      overview: "Yurt lodging. Confirm current with the farm.",
      camping: { available: true, types: ["yurt", "tent"], detail: "Stay yurt. Tent sites. The unique stay is the yurt." },
      rooms: { available: true, types: ["cottage bedroom"], detail: "Garden cottage bedroom. The featured unique stay is the yurt." },
      other: { available: true, types: ["bathhouse"], detail: "Bathhouse." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "living-circle-farms": {
    visitor: {
      overview: "Park Pick & Play Yurt. Instant book.",
      camping: { available: true, types: ["yurt"], detail: "Hand-sewn yurt. Not a cabin." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public unique stay." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
