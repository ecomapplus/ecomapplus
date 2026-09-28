import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch30LegalEntities: Record<string, LegalEntity[]> = {
  "oz-farm": [
    { name: "Oz Farm", kind: "Organic farm retreat", role: "Organic farm and retreat.", status: "current", layer: "enterprise", year: "1971", forms: ["Company"] },
    { name: "Garcia River acres", kind: "240-acre farm", role: "About 240 acres. CCOF apples and pears.", status: "current", layer: "land", year: "1971", forms: ["Freehold title"] },
  ],
  "cherokee-valley-bison": [
    { name: "Cherokee Valley Bison Ranch", kind: "Private family farm", role: "Family bison ranch.", status: "current", layer: "enterprise", year: "1975", forms: ["Company"] },
    { name: "Thornville pasture", kind: "Bison ranch", role: "Working bison pastures. 22-foot tipi.", status: "current", layer: "land", year: "1975", forms: ["Freehold title"] },
  ],
  "good-life-farm": [
    { name: "Good Life Farm / Finger Lakes Cider House", kind: "Private organic farm", role: "Organic farm and cider house.", status: "current", layer: "enterprise", year: "2008", forms: ["Company"] },
    { name: "Interlaken acres", kind: "70-acre farm", role: "70 acres. Orchards and pasture.", status: "current", layer: "land", year: "2008", forms: ["Freehold title"] },
  ],
  "zigzag-mountain-farm": [
    { name: "Zigzag Mountain Farm", kind: "Private farm", role: "Mount Hood farm.", status: "current", layer: "enterprise", year: "2009", forms: ["Company"] },
    { name: "Rhododendron acres", kind: "50-acre farm", role: "50 acres. Organic garden.", status: "current", layer: "land", year: "2009", forms: ["Freehold title"] },
  ],
  "blue-pepper-farm": [
    { name: "Blue Pepper Farm", kind: "Private sheep dairy", role: "Eaton sheep dairy.", status: "current", layer: "enterprise", year: "2011", forms: ["Company"] },
    { name: "Jay pasture", kind: "Sheep dairy", role: "156-acre working sheep dairy. 30-foot yurt.", status: "current", layer: "land", year: "2011", forms: ["Freehold title"] },
  ],
  "bodhi-farms": [
    { name: "Bodhi Farms", kind: "Private permaculture farm", role: "35-acre permaculture farm.", status: "current", layer: "enterprise", year: "2016", forms: ["Company"] },
    { name: "Cottonwood Creek acres", kind: "35-acre farm", role: "35 acres. Nine Nordic tipis.", status: "current", layer: "land", year: "2016", forms: ["Freehold title"] },
  ],
  "the-farm-texas": [
    { name: "The Farm Texas", kind: "Private working farm", role: "15-acre working farm.", status: "current", layer: "enterprise", year: "2018", forms: ["Company"] },
    { name: "San Marcos acres", kind: "15-acre farm", role: "15 acres. Three geodesic domes.", status: "current", layer: "land", year: "2018", forms: ["Freehold title"] },
  ],
  "riverside-oasis": [
    { name: "Riverside Oasis Farm", kind: "Private family farm", role: "21-acre Niagara farm.", status: "current", layer: "enterprise", year: "2020", forms: ["Company"] },
    { name: "Welland River acres", kind: "21-acre farm", role: "21 acres. Three Mongolian yurts.", status: "current", layer: "land", year: "2020", forms: ["Freehold title"] },
  ],
  bereishis: [
    { name: "Bereishis The Farm", kind: "Private regenerative farm", role: "Farmer-owned regenerative farm.", status: "current", layer: "enterprise", year: "2021", forms: ["Company"] },
    { name: "Ellijay land", kind: "Regenerative farm", role: "Produce and pasture livestock. Yurt stay.", status: "current", layer: "land", year: "2021", forms: ["Freehold title"] },
  ],
  "north-star-farm": [
    { name: "North Star Farm", kind: "Private blueberry farm", role: "75-acre organic blueberry farm.", status: "current", layer: "enterprise", year: "2024", forms: ["Company"] },
    { name: "Franklin acres", kind: "75-acre farm", role: "75 acres. Four geodesic domes.", status: "current", layer: "land", year: "2024", forms: ["Freehold title"] },
  ],
};

export const livingBatch30Land: Record<string, LandOwnership> = {
  "oz-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private organic farm",
    howHeld: "About 240 acres. Geodesic Domes.",
    narrative: "A Garcia River farm.",
    divided: [{ label: "Orchard, river, domes", holder: "The farm", share: "Private", what: "Private organic farm." }],
  },
  "cherokee-valley-bison": {
    owner: "The family",
    complexity: "simple",
    tenure: "Private family ranch",
    howHeld: "Bison pastures. 22-foot tipi.",
    narrative: "A Thornville bison ranch. A tipi night is not Lonesome Road.",
    divided: [{ label: "Pasture, bison, tipi", holder: "The family", share: "Private", what: "A booking is not a deed." }],
  },
  "good-life-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private organic farm",
    howHeld: "70 acres. Creek yurts.",
    narrative: "A Cayuga cider farm on Hickok Road.",
    divided: [{ label: "Orchard, pasture, yurts", holder: "The farm", share: "Private", what: "Orchards, pasture, and the two creek yurts." }],
  },
  "zigzag-mountain-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private farm",
    howHeld: "50 acres. Eight yurts.",
    narrative: "A Mount Hood meadow.",
    divided: [{ label: "Garden, meadow, yurts", holder: "The farm", share: "Private", what: "Private farm." }],
  },
  "blue-pepper-farm": {
    owner: "The Eatons",
    complexity: "simple",
    tenure: "Private sheep dairy",
    howHeld: "156-acre sheep dairy. 30-foot yurt.",
    narrative: "A Jay sheep dairy.",
    divided: [{ label: "Pasture, sheep, yurt", holder: "The family", share: "Private", what: "Private sheep dairy." }],
  },
  "bodhi-farms": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private permaculture farm",
    howHeld: "35 acres. Nine Nordic tipis.",
    narrative: "A Cottonwood Creek farm. A tipi night is not the Gallatins.",
    divided: [{ label: "Garden, creek, tipis", holder: "The farm", share: "Private", what: "A booking is not a deed." }],
  },
  "the-farm-texas": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private working farm",
    howHeld: "15 acres. Three geodesic domes.",
    narrative: "A San Marcos farm. A dome night is not Old Bastrop Highway.",
    divided: [{ label: "Paddock, goats, domes", holder: "The farm", share: "Private", what: "A booking is not a deed." }],
  },
  "riverside-oasis": {
    owner: "The Reilly family",
    complexity: "simple",
    tenure: "Private family farm",
    howHeld: "21 acres. Three Mongolian yurts.",
    narrative: "A Welland River farm. Private family title. Yurt stays.",
    divided: [{ label: "River, alpacas, yurts", holder: "The family", share: "Private", what: "Private family farm." }],
  },
  bereishis: {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "Produce and pasture. Yurt.",
    narrative: "An Ellijay regenerative farm.",
    divided: [{ label: "Rows, pasture, yurt", holder: "The farm", share: "Private", what: "Private regenerative farm." }],
  },
  "north-star-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private blueberry farm",
    howHeld: "75 acres. Four geodesic domes.",
    narrative: "A Franklin blueberry farm. A dome night is not Franklin Heights.",
    divided: [{ label: "Blueberries, sheep, domes", holder: "The farm", share: "Private", what: "A booking is not a deed." }],
  },
};

export const livingBatch30Funding: Record<string, CommunityFunding> = {
  "oz-farm": {
    overview: "CSA, market produce, retreats, and dome nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Dome and yurt nights",
    grants: [],
    private: [{ source: "Guests and CSA", amount: "Geodesic Domes", year: "1971", certainty: "estimated", kind: "business", note: "" }],
  },
  "cherokee-valley-bison": {
    overview: "Bison and a tipi night.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Tipi",
    grants: [],
    private: [{ source: "Guests", amount: "22-foot tipi", year: "1975", certainty: "estimated", kind: "business", note: "" }],
  },
  "good-life-farm": {
    overview: "Cider, farm food, and yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yurts",
    grants: [],
    private: [{ source: "Guests and cider", amount: "Walnut Grove and Maple Grove yurts", year: "2008", certainty: "estimated", kind: "business", note: "" }],
  },
  "zigzag-mountain-farm": {
    overview: "Yurt nights, camping, and garden produce.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Eight yurts",
    grants: [],
    private: [{ source: "Guests", amount: "Eight yurts May–September", year: "2009", certainty: "estimated", kind: "business", note: "" }],
  },
  "blue-pepper-farm": {
    overview: "Sheep dairy and a 30-foot yurt.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yurt",
    grants: [],
    private: [{ source: "Guests and dairy", amount: "30-foot pasture yurt", year: "2011", certainty: "estimated", kind: "business", note: "" }],
  },
  "bodhi-farms": {
    overview: "Tipi nights, Field Kitchen, and farm events.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Nine Nordic tipis",
    grants: [],
    private: [{ source: "Guests", amount: "Nine tipis May–September", year: "2016", certainty: "estimated", kind: "business", note: "" }],
  },
  "the-farm-texas": {
    overview: "Geodesic dome nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Three domes",
    grants: [],
    private: [{ source: "Guests", amount: "Three geodesic domes", year: "2018", certainty: "estimated", kind: "business", note: "" }],
  },
  "riverside-oasis": {
    overview: "Mongolian yurt nights. Farm tour with the stay.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Three yurts",
    grants: [],
    private: [{ source: "Guests", amount: "From about $249", year: "2020", certainty: "estimated", kind: "business", note: "Farm tour with the stay." }],
  },
  bereishis: {
    overview: "Farm store, produce, and a yurt.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yurt",
    grants: [],
    private: [{ source: "Guests and store", amount: "Yurt", year: "2021", certainty: "estimated", kind: "business", note: "" }],
  },
  "north-star-farm": {
    overview: "Dome nights and u-pick blueberries.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Four geodesic domes",
    grants: [],
    private: [{ source: "Guests", amount: "Four domes", year: "2024", certainty: "estimated", kind: "business", note: "" }],
  },
};

export const livingBatch30VisitJoin: Record<string, VisitJoin> = {
  "oz-farm": {
    visit: 4,
    join: 1,
    visitProcess: "Point Arena, Garcia River. Book the geodesic Domes, June–October by footbridge. (707) 882-3046. A Highway 1 drive.",
    joinProcess: "Farm staff.",
  },
  "cherokee-valley-bison": {
    visit: 4,
    join: 1,
    visitProcess: "Lonesome Road, Thornville, OH 43076. Book the 22-foot tipi. (740) 403-3763. A Buckeye Lake drive.",
    joinProcess: "Family ranch. A tipi night is not Thornville.",
  },
  "good-life-farm": {
    visit: 5,
    join: 1,
    visitProcess: "4017 Hickok Road, Interlaken, NY 14847. Book Walnut Grove or Maple Grove yurt. (607) 351-3313. An Ithaca drive.",
    joinProcess: "Farm staff. Overnight is a yurt booking.",
  },
  "zigzag-mountain-farm": {
    visit: 4,
    join: 1,
    visitProcess: "70803 E Mountain Drive, Rhododendron, OR 97049. Book a yurt May 1–September 30. (503) 922-3162. A Portland drive.",
    joinProcess: "Farm staff.",
  },
  "blue-pepper-farm": {
    visit: 4,
    join: 1,
    visitProcess: "91 Hazen Road, Jay, NY 12941. Book the 30-foot pasture yurt. (518) 524-1482. Composting outhouse.",
    joinProcess: "Family dairy.",
  },
  "bodhi-farms": {
    visit: 5,
    join: 1,
    visitProcess: "13624 S Cottonwood Road, Bozeman, MT 59718. Book a Nordic tipi May–September. (406) 201-1324. A Bozeman drive.",
    joinProcess: "Farm staff. A tipi night is not Cottonwood Road.",
  },
  "the-farm-texas": {
    visit: 5,
    join: 1,
    visitProcess: "4602 South Old Bastrop Highway, San Marcos, TX. Book a geodesic dome. A 45-minute Austin drive.",
    joinProcess: "Farm staff. A dome night is not San Marcos.",
  },
  "riverside-oasis": {
    visit: 4,
    join: 1,
    visitProcess: "6696 Canborough Road, West Lincoln, ON L0R 2J0. Book a Mongolian yurt. Farm tour with the stay.",
    joinProcess: "Family farm. A stay is a yurt booking.",
  },
  bereishis: {
    visit: 4,
    join: 1,
    visitProcess: "10675 Chatsworth Highway, Ellijay, GA 30540. Book the yurt. (470) 358-4075.",
    joinProcess: "Farm staff.",
  },
  "north-star-farm": {
    visit: 5,
    join: 1,
    visitProcess: "595 Franklin Heights Road, Franklin, NY 13775. Book a geodesic dome. info@northstarfarm.com. A Catskills drive. No Wi-Fi.",
    joinProcess: "Farm staff. A dome night is not Franklin.",
  },
};

export const livingBatch30DailyLife: Record<string, DailyLife> = {
  "oz-farm": {
    typical: [
      { title: "Heirloom apples", detail: "CCOF since 1990." },
      { title: "Garcia River", detail: "Footbridge to the Domes June–October." },
      { title: "Geodesic double-dome", detail: "Five double beds and a wraparound deck." },
    ],
    unique: { title: "Sleep in a river geodesic, not a cabin", detail: "Village Oz in the early 1970s; CCOF apples and pears since 1990; a cooperative bought the 240 Garcia River acres in 2015. The public stay is a geodesic double-dome over the south bank, June–October." },
  },
  "cherokee-valley-bison": {
    typical: [
      { title: "Bison pasture", detail: "Working bison pastures." },
      { title: "22-foot tipi", detail: "Queen platform bed." },
      { title: "Prairie night", detail: "Agritourism." },
    ],
    unique: { title: "A tipi beside the herd", detail: "Fifty-year family ranch. A tipi is not a cabin." },
  },
  "good-life-farm": {
    typical: [
      { title: "Apple orchard", detail: "Apples and cider." },
      { title: "Grass-fed stock", detail: "Turkey, chicken, pigs, sheep, white Angus." },
      { title: "Creek yurts", detail: "Walnut Grove and Maple Grove." },
    ],
    unique: { title: "Maple Grove Yurt, May 2025", detail: "The crew finished the Maple Grove Yurt in May 2025 — an all-season creekside cabin in the farm’s maple grove, beside the older Walnut Grove yurt." },
  },
  "zigzag-mountain-farm": {
    typical: [
      { title: "Organic garden", detail: "One acre plus." },
      { title: "Eight yurts", detail: "Family and dorm yurts." },
      { title: "Mount Hood meadow", detail: "50 acres." },
    ],
    unique: { title: "A yurt village on the mountain farm", detail: "The 50 Rhododendron acres were bought vacant in 2009. Eight yurts — family with a double and bunks, dorms with four bunks — sit May 1–September 30 beside a one-acre-plus organic garden and small orchard, bordering national forest on Mount Hood." },
  },
  "blue-pepper-farm": {
    typical: [
      { title: "Sheep dairy", detail: "Working dairy." },
      { title: "30-foot yurt", detail: "25-acre pasture." },
      { title: "Outdoor kitchen", detail: "Al fresco shower." },
    ],
    unique: { title: "A pasture yurt facing Whiteface", detail: "Tyler and Shannon Eaton bought 46 acres in 2011 and opened the sheep dairy the next year; the 30-foot yurt sits on a 25-acre pasture with Whiteface in the window." },
  },
  "bodhi-farms": {
    typical: [
      { title: "Permaculture beds", detail: "Permaculture beds." },
      { title: "Nine Nordic tipis", detail: "May–September." },
      { title: "Field Kitchen", detail: "Wild-game table." },
    ],
    unique: { title: "Tipis along Cottonwood Creek", detail: "35 acres. A tipi is not a cabin." },
  },
  "the-farm-texas": {
    typical: [
      { title: "Alpacas and goats", detail: "Nigerian Dwarf goats and alpacas on the San Marcos farm." },
      { title: "Heritage chickens", detail: "Heritage chickens on the 15-acre working farm." },
      { title: "Three geodesic domes", detail: "Three insulated geodesic domes, each a standalone rental with a hot tub." },
    ],
    unique: { title: "A Hill Country geodesic, not a bunkhouse", detail: "Opened 2018 on 15 acres at 4602 South Old Bastrop Highway in San Marcos: three insulated geodesic domes, each with a hot tub, plus Nigerian Dwarf goats, alpacas, and heritage chickens." },
  },
  "riverside-oasis": {
    typical: [
      { title: "Evening barn tour", detail: "The farm tour is the evening routine with the animals. Included with a yurt night." },
      { title: "Welland kayaks", detail: "Kayaks and canoes on the Welland, free with the stay." },
      { title: "Three Mongolian yurts", detail: "Kandy, Lyla, and Caspian. Indoor wood stove." },
    ],
    unique: { title: "Groovy Yurts from Mongolia", detail: "The Carltons founded the 21-acre Welland River farm in 2020 after time in Kazakhstan and raised the first Groovy Yurts Mongolian frame in six to eight hours with no tools or nails. Kandy, Lyla, and Caspian are the three all-season yurts." },
  },
  bereishis: {
    typical: [
      { title: "Organic rows", detail: "Organically grown produce." },
      { title: "Pasture livestock", detail: "Grain-free." },
      { title: "One luxury yurt", detail: "Insulated yurt among the trees, wood-fired hot tub and sauna." },
    ],
    unique: { title: "A yurt among the Ellijay trees", detail: "On Chatsworth Highway in Ellijay, a farmer-owned regenerative farm grows organic produce and grain-free pasture livestock, with a farm store and one insulated yurt among the trees — wood-fired hot tub and sauna." },
  },
  "north-star-farm": {
    typical: [
      { title: "Fifteen acres of blueberries", detail: "Fifteen acres of organic blueberries." },
      { title: "Grazing sheep", detail: "Sheep graze." },
      { title: "Four geodesic domes", detail: "Wood-fired hot tubs." },
    ],
    unique: { title: "A blueberry geodesic, not a cabin", detail: "Overnight guests pick free among 15 acres of organic blueberries on a 75-acre western Catskills farm; four geodesic domes with wood-fired hot tubs are the public stay." },
  },
};

export const livingBatch30Informal: Record<string, InformalAgreement[]> = {
  "oz-farm": [
    { kind: "guest-stay", why: "Geodesic Domes." },
    { kind: "land-care", why: "CCOF orchard. Guests stay off rows they were not asked onto." },
    { kind: "course-host", why: "Retreats." },
  ],
  "cherokee-valley-bison": [
    { kind: "guest-stay", why: "22-foot tipi." },
    { kind: "animals-stock", why: "Bison. Guests stay off pastures they were not asked onto." },
    { kind: "land-care", why: "A tipi night is not the herd." },
  ],
  "good-life-farm": [
    { kind: "guest-stay", why: "Creek yurts." },
    { kind: "kitchen-table", why: "Cider house." },
    { kind: "animals-stock", why: "Grass-fed flocks." },
    { kind: "land-care", why: "Orchard. Guests stay off rows they were not asked onto." },
  ],
  "zigzag-mountain-farm": [
    { kind: "guest-stay", why: "Eight yurts." },
    { kind: "land-care", why: "Organic garden. Guests stay off beds they were not asked onto." },
  ],
  "blue-pepper-farm": [
    { kind: "guest-stay", why: "30-foot yurt." },
    { kind: "animals-stock", why: "Sheep dairy." },
    { kind: "land-care", why: "Pasture. Guests stay off paddocks they were not asked onto." },
  ],
  "bodhi-farms": [
    { kind: "guest-stay", why: "Nine Nordic tipis." },
    { kind: "kitchen-table", why: "Field Kitchen." },
    { kind: "land-care", why: "Permaculture beds. Guests stay off rows they were not asked onto." },
  ],
  "the-farm-texas": [
    { kind: "guest-stay", why: "Three geodesic domes." },
    { kind: "animals-stock", why: "Goats, alpacas, chickens." },
    { kind: "land-care", why: "15 acres. Guests stay off paddocks they were not asked onto." },
  ],
  "riverside-oasis": [
    { kind: "guest-stay", why: "Three Mongolian yurts." },
    { kind: "animals-stock", why: "Alpacas and goats." },
    { kind: "land-care", why: "21 acres. Guests stay off paddocks they were not asked onto." },
    { kind: "course-host", why: "Farm tour with the stay." },
  ],
  bereishis: [
    { kind: "guest-stay", why: "Yurt stay." },
    { kind: "land-care", why: "Organic rows. Guests stay off beds they were not asked onto." },
    { kind: "animals-stock", why: "Pasture livestock." },
  ],
  "north-star-farm": [
    { kind: "guest-stay", why: "Four geodesic domes." },
    { kind: "land-care", why: "Fifteen acres of blueberries. Guests stay off rows they were not asked onto." },
    { kind: "animals-stock", why: "Sheep." },
  ],
};

export const livingBatch30Governance: Record<string, Governance> = {
  "oz-farm": {
    model: "founder",
    modelLabel: "Organic farm retreat",
    unique: false,
    summary: "Private organic farm and retreat.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Oz Farm", role: "Organic farm retreat." },
      { name: "The Domes", role: "Geodesic double-dome." },
    ],
    howItRuns: "Book.",
  },
  "cherokee-valley-bison": {
    model: "founder",
    modelLabel: "Family bison ranch",
    unique: false,
    summary: "You book a tipi. You do not buy Thornville.",
    whoDecides: "The family.",
    bodies: [
      { name: "Cherokee Valley Bison Ranch", role: "The ranch." },
      { name: "The tipi", role: "22-foot tipi." },
    ],
    howItRuns: "Book.",
  },
  "good-life-farm": {
    model: "founder",
    modelLabel: "Organic cider farm",
    unique: false,
    summary: "Organic farm and cider house. Walnut Grove and Maple Grove yurts.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Good Life Farm", role: "Organic farm and cider house." },
      { name: "The yurts", role: "Walnut Grove and Maple Grove." },
    ],
    howItRuns: "Book.",
  },
  "zigzag-mountain-farm": {
    model: "founder",
    modelLabel: "Organic garden farm",
    unique: false,
    summary: "You book a yurt. You do not buy Rhododendron.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Zigzag Mountain Farm", role: "Mount Hood farm." },
      { name: "Eight yurts", role: "Family and dorm yurts." },
    ],
    howItRuns: "Book.",
  },
  "blue-pepper-farm": {
    model: "founder",
    modelLabel: "Sheep dairy",
    unique: false,
    summary: "Private Eaton sheep dairy.",
    whoDecides: "The Eatons.",
    bodies: [
      { name: "Blue Pepper Farm", role: "Sheep dairy." },
      { name: "The yurt", role: "30-foot pasture yurt." },
    ],
    howItRuns: "Book.",
  },
  "bodhi-farms": {
    model: "founder",
    modelLabel: "Permaculture farm",
    unique: false,
    summary: "You book a Nordic tipi. You do not buy Cottonwood Road.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Bodhi Farms", role: "Permaculture farm." },
      { name: "Nine tipis", role: "Nine Nordic tipis May–September." },
    ],
    howItRuns: "Book.",
  },
  "the-farm-texas": {
    model: "founder",
    modelLabel: "Working farm",
    unique: false,
    summary: "You book a geodesic dome. You do not buy San Marcos.",
    whoDecides: "The farm.",
    bodies: [
      { name: "The Farm Texas", role: "Working farm." },
      { name: "Three domes", role: "Three geodesic glamping domes." },
    ],
    howItRuns: "Book.",
  },
  "riverside-oasis": {
    model: "founder",
    modelLabel: "Family farm",
    unique: false,
    summary: "Family farm. Mongolian yurt stays.",
    whoDecides: "The family.",
    bodies: [
      { name: "Riverside Oasis Farm", role: "21-acre Welland River farm." },
      { name: "Three yurts", role: "Kandy, Lyla, Caspian." },
    ],
    howItRuns: "Book a yurt. Farm tour with the stay.",
  },
  bereishis: {
    model: "founder",
    modelLabel: "Regenerative family farm",
    unique: false,
    summary: "Private regenerative farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Bereishis The Farm", role: "The farm." },
      { name: "The yurt", role: "Luxury yurt stay." },
    ],
    howItRuns: "Book.",
  },
  "north-star-farm": {
    model: "founder",
    modelLabel: "Organic blueberry farm",
    unique: false,
    summary: "You book a geodesic dome. You do not buy Franklin.",
    whoDecides: "The farm.",
    bodies: [
      { name: "North Star Farm", role: "Organic blueberry farm." },
      { name: "Four domes", role: "Geodesic-dome stay." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch30Leaders: Record<string, VillageLeaders> = {
  "oz-farm": {
    people: [],
    office: { url: "https://www.ozfarm.com/", address: "Point Arena, Mendocino County, California", phone: "(707) 882-3046" },
  },
  "cherokee-valley-bison": {
    people: [],
    office: { url: "https://www.cherokeevalleybisonranch.com/", address: "Lonesome Road, Thornville, OH 43076", phone: "(740) 403-3763" },
  },
  "good-life-farm": {
    people: [],
    office: { url: "https://www.fingerlakesciderhouse.com/", address: "4017 Hickok Road, Interlaken, NY 14847", phone: "(607) 351-3313" },
  },
  "zigzag-mountain-farm": {
    people: [],
    office: { url: "https://www.zigzagmountainfarm.com/", address: "70803 E Mountain Drive, Rhododendron, OR 97049", email: "info@zigzagmountainfarm.com", phone: "(503) 922-3162" },
  },
  "blue-pepper-farm": {
    people: [],
    office: { url: "https://www.bluepepperfarm.com/", address: "91 Hazen Road, Jay, NY 12941", email: "bluepepperfarmstay@gmail.com", phone: "(518) 524-1482" },
  },
  "bodhi-farms": {
    people: [],
    office: { url: "https://www.bodhi-farms.com/", address: "13624 S Cottonwood Road, Bozeman, MT 59718", phone: "(406) 201-1324" },
  },
  "the-farm-texas": {
    people: [],
    office: { url: "https://thefarmtexas.com/", address: "4602 South Old Bastrop Highway, San Marcos, TX 78666" },
  },
  "riverside-oasis": {
    people: [
      { name: "The Carltons", role: "Founded the farm in 2020." },
      { name: "The Reilly family", role: "Current owners." },
    ],
    office: { url: "https://riversideoasisfarm.ca/", address: "6696 Canborough Road, West Lincoln, ON L0R 2J0" },
  },
  bereishis: {
    people: [],
    office: { url: "https://bereishis.us/", address: "10675 Chatsworth Highway, Ellijay, GA 30540", email: "bereishis@hotmail.com", phone: "(470) 358-4075" },
  },
  "north-star-farm": {
    people: [],
    office: { url: "https://www.northstarfarm.com/", address: "595 Franklin Heights Road, Franklin, NY 13775", email: "info@northstarfarm.com" },
  },
};

export const livingBatch30Accommodations: Record<string, Accommodations> = {
  "oz-farm": {
    visitor: {
      overview: "Geodesic double-dome over the Garcia River, June–October by footbridge. Yurts. Confirm current with (707) 882-3046.",
      camping: { available: true, types: ["yurt", "geodesic dome"], detail: "The Domes are a double geodesic. Yurts. Not a cabin as the public unique stay." },
      rooms: { available: false, types: [], detail: "Cabins exist on the farm; the featured overnight is the geodesic and the yurts." },
      other: { available: true, types: ["river deck"], detail: "Wraparound deck." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "cherokee-valley-bison": {
    visitor: {
      overview: "A 22-foot tipi. Queen platform bed. Confirm current with (740) 403-3763.",
      camping: { available: true, types: ["tipi"], detail: "22-foot tipi. Not a cabin." },
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
  "good-life-farm": {
    visitor: {
      overview: "Walnut Grove and Maple Grove yurts. Confirm current with (607) 351-3313.",
      camping: { available: true, types: ["yurt"], detail: "Two hand-built creek yurts. Maple Grove, finished May 2025, is the all-season cabin in the maple grove." },
      rooms: { available: false, types: [], detail: "A loft over the cider house is a separate door. The unique stay is the yurts." },
      other: { available: true, types: ["cider house"], detail: "Tasting room." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "zigzag-mountain-farm": {
    visitor: {
      overview: "Eight yurts May 1–September 30. Confirm current with (503) 922-3162.",
      camping: { available: true, types: ["yurt", "tent"], detail: "Eight yurts. Bring-your-own tent. Not a cabin as the public unique stay." },
      rooms: { available: false, types: [], detail: "A homestead cabin exists; the featured overnight is the yurts." },
      other: { available: true, types: ["garden"], detail: "Organic garden." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "blue-pepper-farm": {
    visitor: {
      overview: "A 30-foot pasture yurt. Outdoor kitchen and al fresco shower. Confirm current with (518) 524-1482.",
      camping: { available: true, types: ["yurt"], detail: "30-foot yurt on a 25-acre pasture. Not a cabin." },
      rooms: { available: false, types: [], detail: "A farmhouse exists; the unique stay is the yurt." },
      other: { available: true, types: ["outdoor kitchen"], detail: "Outdoor kitchen." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "bodhi-farms": {
    visitor: {
      overview: "Nine Nordic tipis May–September. Confirm current with (406) 201-1324.",
      camping: { available: true, types: ["tipi"], detail: "Nine Nordic tipis along Cottonwood Creek. Not a cabin." },
      rooms: { available: false, types: [], detail: "Year-round cabins exist; the unique stay is the tipis." },
      other: { available: true, types: ["farm kitchen"], detail: "Field Kitchen." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "the-farm-texas": {
    visitor: {
      overview: "Three insulated geodesic domes. Book.",
      camping: { available: true, types: ["geodesic dome"], detail: "Three standalone geodesic domes. Not a cabin." },
      rooms: { available: false, types: [], detail: "None listed as a cabin inn." },
      other: { available: true, types: ["hot tub"], detail: "Private hot tub." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "riverside-oasis": {
    visitor: {
      overview: "Three Mongolian yurts. Farm tour with the stay.",
      camping: { available: true, types: ["yurt"], detail: "Kandy, Lyla, and Caspian. Hand-crafted in Mongolia." },
      rooms: { available: false, types: [], detail: "None listed as a cabin inn." },
      other: { available: true, types: ["farm tour"], detail: "Included with overnight." },
    },
    resident: {
      overview: "Family housing not isolated here. A stay is a yurt booking.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  bereishis: {
    visitor: {
      overview: "One luxury yurt. Confirm current with (470) 358-4075.",
      camping: { available: true, types: ["yurt"], detail: "Insulated yurt among the trees." },
      rooms: { available: false, types: [], detail: "None listed as a cabin inn." },
      other: { available: true, types: ["sauna"], detail: "Wood-fired hot tub and sauna." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "north-star-farm": {
    visitor: {
      overview: "Four geodesic domes. Confirm current with info@northstarfarm.com.",
      camping: { available: true, types: ["geodesic dome"], detail: "Four private geodesic domes. Not a cabin." },
      rooms: { available: false, types: [], detail: "None listed as a cabin inn." },
      other: { available: true, types: ["hot tub"], detail: "Wood-fired hot tub per dome." },
    },
    resident: {
      overview: "Staff housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
