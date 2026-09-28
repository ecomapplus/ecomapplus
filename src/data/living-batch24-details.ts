import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch24LegalEntities: Record<string, LegalEntity[]> = {
  polyface: [
    { name: "Polyface Farm", kind: "Private family farm", role: "Private Salatin farm.", status: "current", layer: "enterprise", year: "1961", forms: ["Company"] },
    { name: "Swoope pasture", kind: "500-acre farm", role: "500 acres. Pastured livestock.", status: "current", layer: "land", year: "1961", forms: ["Freehold title"] },
  ],
  wilderland: [
    { name: "Wilderland Trust", kind: "Charitable trust", role: "Trust holding the Coromandel farm.", status: "current", layer: "membership", year: "1964", forms: ["Charitable trust"] },
    { name: "Kaimarama land", kind: "64-hectare farm", role: "64 hectares. Gardens and shop.", status: "current", layer: "land", year: "1964", forms: ["Charitable trust"] },
  ],
  "green-gulch": [
    { name: "San Francisco Zen Center", kind: "Soto Zen religious nonprofit", role: "Religious nonprofit. Green Gulch is a practice center.", status: "current", layer: "covenant", year: "1972", forms: ["Religious society"] },
    { name: "Green Gulch land", kind: "Organic farm inholding", role: "Seven organic acres and about 90 acres around. Golden Gate Recreation Area inholding.", status: "current", layer: "land", year: "1972", forms: ["Freehold title"] },
  ],
  "hawthorne-valley": [
    { name: "Hawthorne Valley Association", kind: "Educational 501(c)(3)", role: "Nonprofit. Farm, school, and store.", status: "current", layer: "education", year: "1971", forms: ["501(c)(3)"] },
    { name: "Ghent biodynamic land", kind: "900-acre farm", role: "900 acres. Demeter biodynamic.", status: "current", layer: "land", year: "1972", forms: ["Freehold title"] },
  ],
  triform: [
    { name: "Triform Camphill Community", kind: "Camphill 501(c)(3)", role: "Lifesharing community.", status: "current", layer: "membership", year: "1979", forms: ["501(c)(3)"] },
    { name: "Triform Road land", kind: "420-acre farm", role: "420 acres. Homestead farm.", status: "current", layer: "land", year: "1979", forms: ["Freehold title"] },
  ],
  "full-belly": [
    { name: "Full Belly Farm", kind: "Private organic farm", role: "Family farm.", status: "current", layer: "enterprise", year: "1984", forms: ["Company"] },
    { name: "Capay Valley land", kind: "400-acre organic farm", role: "400 acres. Certified organic 1985.", status: "current", layer: "land", year: "1984", forms: ["Freehold title"] },
  ],
  glynwood: [
    { name: "Glynwood Center", kind: "Educational nonprofit", role: "Regional-food nonprofit.", status: "current", layer: "education", year: "1993", forms: ["501(c)(3)"] },
    { name: "Cold Spring campus", kind: "Working farm", role: "About 225 acres of A Greener World. 250-acre campus.", status: "current", layer: "land", year: "1993", forms: ["Freehold title"] },
  ],
  "camphill-california": [
    { name: "Camphill Communities California", kind: "Camphill 501(c)(3)", role: "Lifesharing community.", status: "current", layer: "membership", year: "1998", forms: ["501(c)(3)"] },
    { name: "Soquel properties", kind: "Garden land", role: "About seven acres on six properties. Orchard and gardens.", status: "current", layer: "land", year: "1998", forms: ["Freehold title"] },
  ],
  "deck-family": [
    { name: "Deck Family Farm", kind: "Private family farm", role: "Private regenerative livestock farm.", status: "current", layer: "enterprise", year: "2004", forms: ["Company"] },
    { name: "Willamette pasture", kind: "500-acre farm", role: "Over 500 certified organic acres.", status: "current", layer: "land", year: "2004", forms: ["Freehold title"] },
  ],
  "hungry-world": [
    { name: "Hungry World Farm", kind: "Educational 501(c)(3)", role: "Nonprofit teaching farm.", status: "current", layer: "education", year: "2017", forms: ["501(c)(3)"] },
    { name: "Plow Creek land", kind: "175-acre farm", role: "175 acres. Former Plow Creek Fellowship.", status: "current", layer: "land", year: "1971", forms: ["Freehold title"] },
  ],
};

export const livingBatch24Land: Record<string, LandOwnership> = {
  polyface: {
    owner: "The Salatins",
    complexity: "simple",
    tenure: "Private family farm",
    howHeld: "500 acres. Bought 1961.",
    narrative: "A Swoope pasture farm. Private Salatin title. Stewardship is a summer placement.",
    divided: [{ label: "Pasture, poultry, cattle", holder: "The family", share: "Private", what: "Private family farm." }],
  },
  wilderland: {
    owner: "Wilderland Trust",
    complexity: "simple",
    tenure: "Charitable trust",
    howHeld: "64 hectares. Trust.",
    narrative: "A Coromandel farm. A four-week term is not Kaimarama.",
    divided: [{ label: "Gardens, shop, bush", holder: "The trust", share: "Held in trust", what: "A stay is not a share." }],
  },
  "green-gulch": {
    owner: "San Francisco Zen Center",
    complexity: "simple",
    tenure: "Religious nonprofit farm",
    howHeld: "Seven organic acres and about 90 acres around. Golden Gate inholding.",
    narrative: "A Muir Beach valley. An apprenticeship is not the gulch.",
    divided: [{ label: "Fields, garden, watershed", holder: "The Zen Center", share: "Nonprofit", what: "" }],
  },
  "hawthorne-valley": {
    owner: "Hawthorne Valley Association",
    complexity: "simple",
    tenure: "Nonprofit biodynamic farm",
    howHeld: "900 acres. Association 1971.",
    narrative: "A Ghent farm. A year in the barn is not the title.",
    divided: [{ label: "Dairy, vegetables, CSA", holder: "The Association", share: "Nonprofit", what: "A year is not a deed." }],
  },
  triform: {
    owner: "Triform Camphill Community",
    complexity: "simple",
    tenure: "Camphill nonprofit farm",
    howHeld: "420 acres. Ten homes and a homestead farm.",
    narrative: "A Hudson Camphill. A volunteer year is not a house.",
    divided: [{ label: "Homes, gardens, farm", holder: "The community", share: "Nonprofit", what: "A year is not a deed." }],
  },
  "full-belly": {
    owner: "The Muller–Rivers family",
    complexity: "simple",
    tenure: "Private organic farm",
    howHeld: "400 acres. Organic 1985.",
    narrative: "A Capay Valley farm. A year in the shed is not Guinda.",
    divided: [{ label: "Vegetables, fruit, flowers, animals", holder: "The family", share: "Private", what: "A year is not a deed." }],
  },
  glynwood: {
    owner: "Glynwood Center",
    complexity: "simple",
    tenure: "Nonprofit teaching farm",
    howHeld: "About 225 acres of A Greener World. Campus 1993.",
    narrative: "A Cold Spring farm.",
    divided: [{ label: "Livestock, vegetables, campus", holder: "The Center", share: "Nonprofit", what: "" }],
  },
  "camphill-california": {
    owner: "Camphill Communities California",
    complexity: "split",
    tenure: "Camphill on several Soquel lots",
    howHeld: "About seven acres on six properties.",
    narrative: "A Soquel Camphill. A volunteer year is not a house.",
    divided: [{ label: "Homes, orchard, gardens", holder: "The community", share: "Nonprofit", what: "A year is not a deed." }],
  },
  "deck-family": {
    owner: "The Decks",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "Over 500 certified organic acres.",
    narrative: "A Junction City farm.",
    divided: [{ label: "Pasture, dairy, market garden", holder: "The family", share: "Private", what: "Private family farm." }],
  },
  "hungry-world": {
    owner: "Hungry World Farm",
    complexity: "simple",
    tenure: "Nonprofit teaching farm",
    howHeld: "175 acres. Former Plow Creek.",
    narrative: "A Tiskilwa farm.",
    divided: [{ label: "Market garden, livestock, farmstay", holder: "The nonprofit", share: "Nonprofit", what: "You apply for a summer internship." }],
  },
};

export const livingBatch24Funding: Record<string, CommunityFunding> = {
  polyface: {
    overview: "Direct meat sales and a summer stewardship.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Farm sales",
    grants: [],
    private: [{ source: "Customers and stewards", amount: "Meat sales and a $150 monthly steward stipend", year: "1961", certainty: "estimated", kind: "business", note: "" }],
  },
  wilderland: {
    overview: "Farm products and volunteer labour.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Shop and harvest",
    grants: [],
    private: [{ source: "Shop and volunteers", amount: "Four-week free terms", year: "1964", certainty: "estimated", kind: "business", note: "A stay is not a closing." }],
  },
  "green-gulch": {
    overview: "Produce, guests, and apprenticeships.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Zen Center",
    grants: [],
    private: [{ source: "Guests and the Center", amount: "Farm apprenticeships", year: "1972", certainty: "estimated", kind: "business", note: "" }],
  },
  "hawthorne-valley": {
    overview: "CSA, creamery, store, and apprenticeships.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Farm and Association",
    grants: [],
    private: [{ source: "CSA and store", amount: "900-acre farm", year: "1972", certainty: "estimated", kind: "business", note: "A year is not a closing." }],
  },
  triform: {
    overview: "Lifesharing and a farm.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Camphill",
    grants: [],
    private: [{ source: "Community and gifts", amount: "Room and board for volunteers", year: "1979", certainty: "estimated", kind: "business", note: "A year is not a closing." }],
  },
  "full-belly": {
    overview: "CSA, markets, and internships.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Organic sales",
    grants: [],
    private: [{ source: "CSA and markets", amount: "400-acre farm", year: "1984", certainty: "estimated", kind: "business", note: "A year is not a closing." }],
  },
  glynwood: {
    overview: "Programs, farm store, and apprenticeships.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Nonprofit",
    grants: [],
    private: [{ source: "Programs and store", amount: "Apprenticeships", year: "1993", certainty: "estimated", kind: "business", note: "" }],
  },
  "camphill-california": {
    overview: "Lifesharing.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Camphill",
    grants: [],
    private: [{ source: "Community and gifts", amount: "Room and board for volunteers", year: "1998", certainty: "estimated", kind: "business", note: "A year is not a closing." }],
  },
  "deck-family": {
    overview: "Markets, CSA, grocers, and internships.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Livestock sales",
    grants: [],
    private: [{ source: "Markets and CSA", amount: "One-year intern stipend", year: "2004", certainty: "estimated", kind: "business", note: "Room, board, and a $10,000 stipend." }],
  },
  "hungry-world": {
    overview: "CSA, farmstay, classes, and internships.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Nonprofit",
    grants: [],
    private: [{ source: "Guests and CSA", amount: "Summer intern stipend", year: "2017", certainty: "estimated", kind: "business", note: "CSA, farmstay, classes, and internships." }],
  },
};

export const livingBatch24VisitJoin: Record<string, VisitJoin> = {
  polyface: {
    visit: 4,
    join: 1,
    visitProcess: "43 Pure Meadows Lane, Swoope. Farm tours. Stewardship. 540-885-3590.",
    joinProcess: "Five-month summer stewardship. U.S. citizens.",
  },
  wilderland: {
    visit: 4,
    join: 1,
    visitProcess: "Tairua Whitianga Road, Kaimarama. Volunteer. visit@wilderland.org.nz.",
    joinProcess: "Four-week free term. A stay is not a share.",
  },
  "green-gulch": {
    visit: 4,
    join: 1,
    visitProcess: "1601 Shoreline Highway, Muir Beach. Guest program. Farm apprenticeship.",
    joinProcess: "Farm and Land Steward apprenticeship. Sitting is part of the week.",
  },
  "hawthorne-valley": {
    visit: 5,
    join: 1,
    visitProcess: "327 County Route 21C, Ghent. Farm store and CSA. 518-672-7500.",
    joinProcess: "One-year apprenticeship. A year is not the title.",
  },
  triform: {
    visit: 2,
    join: 2,
    visitProcess: "20 Triform Road, Hudson. Write volunteer@triform.org. 518-851-9320.",
    joinProcess: "Twelve-month volunteer year, last week of August. A year is not a house.",
  },
  "full-belly": {
    visit: 3,
    join: 1,
    visitProcess: "Capay Valley, Guinda. CSA. Internships. 530-796-2214.",
    joinProcess: "One-year internship. Short terms not currently offered. A year is not Guinda.",
  },
  glynwood: {
    visit: 4,
    join: 1,
    visitProcess: "362 Glynwood Road, Cold Spring. Farm store. 845-265-3338.",
    joinProcess: "Residential apprenticeship.",
  },
  "camphill-california": {
    visit: 2,
    join: 2,
    visitProcess: "3920 Fairway Drive, Soquel. Volunteer inquiry. coworker@camphillca.org, 831-476-7194.",
    joinProcess: "Six to twelve months. Private room and board. A year is not a house.",
  },
  "deck-family": {
    visit: 3,
    join: 1,
    visitProcess: "25362 High Pass Road, Junction City. Markets. Internships. 541-998-4697.",
    joinProcess: "One-year internship. Call Christine.",
  },
  "hungry-world": {
    visit: 4,
    join: 1,
    visitProcess: "19183 Plow Creek Road, Tiskilwa. Farmstay and classes. 815-200-8688.",
    joinProcess: "Summer internship. applications@hungryworldfarm.com.",
  },
};

export const livingBatch24DailyLife: Record<string, DailyLife> = {
  polyface: {
    typical: [
      { title: "Pastured poultry", detail: "Broilers." },
      { title: "Cattle and pigs", detail: "Movement and husbandry." },
      { title: "Stewardship summer", detail: "May–September." },
    ],
    unique: { title: "The most worn-out farm near Staunton", detail: "William and Lucille Salatin bought the most worn-out, eroded farm near Staunton in 1961; Joel’s pasture model still runs on 500 Shenandoah acres, with a five-month summer stewardship as the public door." },
  },
  wilderland: {
    typical: [
      { title: "Gardens", detail: "Sowing, syntropics, harvest." },
      { title: "Shop shifts", detail: "Twenty hours a week." },
      { title: "Honey and tea", detail: "Processing." },
    ],
    unique: { title: "Four free weeks on the Coromandel", detail: "Hansens 1964. A term is not Kaimarama." },
  },
  "green-gulch": {
    typical: [
      { title: "Organic rows", detail: "Seven acres." },
      { title: "Land stewardship", detail: "Ninety acres around." },
      { title: "Zendo", detail: "Sitting and soji." },
    ],
    unique: { title: "A Zen farm in the Golden Gate", detail: "1972." },
  },
  "hawthorne-valley": {
    typical: [
      { title: "Dairy", detail: "About 65 head." },
      { title: "CSA vegetables", detail: "Biodynamic." },
      { title: "Apprentices", detail: "One-year." },
    ],
    unique: { title: "A 900-acre biodynamic year", detail: "1972. A year is not Ghent." },
  },
  triform: {
    typical: [
      { title: "Homestead farm", detail: "Cows, pigs, horses, chickens." },
      { title: "Houses", detail: "Ten homes." },
      { title: "Crafts", detail: "Bakery, weavery, pottery." },
    ],
    unique: { title: "A Camphill year on 420 acres", detail: "Triform opened in 1979 as a Camphill for young adults; twelve-month volunteers start the last week of August with room and board in ten shared houses, a homestead farm, bakery, weavery, and pottery." },
  },
  "full-belly": {
    typical: [
      { title: "Vegetable rows", detail: "400 acres." },
      { title: "Packing shed", detail: "Interns." },
      { title: "CSA and markets", detail: "One market or delivery a week." },
    ],
    unique: { title: "A Capay intern year", detail: "Rivers and Muller 1984. A year is not Guinda." },
  },
  glynwood: {
    typical: [
      { title: "Livestock", detail: "Beef, pork, lamb, poultry." },
      { title: "Vegetables", detail: "Hudson Valley Apprenticeship." },
      { title: "Farm store", detail: "glynwood.org." },
    ],
    unique: { title: "A Highlands apprenticeship", detail: "Campus 1993." },
  },
  "camphill-california": {
    typical: [
      { title: "Gardens", detail: "Biodynamic orchard and vegetables." },
      { title: "Houses", detail: "Six Soquel properties." },
      { title: "Crews", detail: "Kitchen, weaving, herbs." },
    ],
    unique: { title: "A Monterey Bay Camphill year", detail: "1998. A year is not Soquel." },
  },
  "deck-family": {
    typical: [
      { title: "Heritage livestock", detail: "Red Wattle, Galloway, Jersey." },
      { title: "Markets", detail: "About eight." },
      { title: "Interns", detail: "One-year." },
    ],
    unique: { title: "A Willamette intern year", detail: "Decks 2004. Christine still takes the intern call. The one-year internship comes with room, board, and a $10,000 stipend on over 500 certified-organic acres of heritage livestock and a market garden." },
  },
  "hungry-world": {
    typical: [
      { title: "Market garden", detail: "No-till beds." },
      { title: "Livestock", detail: "Sheep, Red Devon, layers." },
      { title: "Farmstay", detail: "Guests." },
    ],
    unique: { title: "Plow Creek dirt, a new teaching farm", detail: "Interns still spend the summer on the Plow Creek dirt that was a Mennonite fellowship before 2017." },
  },
};

export const livingBatch24Informal: Record<string, InformalAgreement[]> = {
  polyface: [
    { kind: "volunteer-intern", why: "Five-month summer stewardship." },
    { kind: "animals-stock", why: "Pastured poultry, pigs, cattle." },
    { kind: "land-care", why: "500 acres. Stewards stay off paddocks they were not asked onto." },
    { kind: "guest-stay", why: "Farm tours." },
  ],
  wilderland: [
    { kind: "volunteer-intern", why: "Four-week free terms." },
    { kind: "labour-roster", why: "Twenty hours a week." },
    { kind: "land-care", why: "Gardens and syntropics." },
    { kind: "kitchen-table", why: "Cooking lunches." },
  ],
  "green-gulch": [
    { kind: "volunteer-intern", why: "Farm and Land Steward apprenticeship." },
    { kind: "quiet-practice", why: "Sitting, walking, soji." },
    { kind: "land-care", why: "Seven organic acres." },
    { kind: "guest-stay", why: "Guest program." },
  ],
  "hawthorne-valley": [
    { kind: "volunteer-intern", why: "One-year apprenticeship." },
    { kind: "animals-stock", why: "Dairy herd." },
    { kind: "land-care", why: "900 biodynamic acres." },
    { kind: "course-host", why: "Visiting students." },
  ],
  triform: [
    { kind: "volunteer-intern", why: "Twelve-month volunteer year." },
    { kind: "care-household", why: "Young adults and coworkers." },
    { kind: "animals-stock", why: "Cows, pigs, horses, chickens." },
    { kind: "kitchen-table", why: "Shared houses." },
  ],
  "full-belly": [
    { kind: "volunteer-intern", why: "One-year internship." },
    { kind: "land-care", why: "400 organic acres." },
    { kind: "kitchen-table", why: "Interns cook lunch." },
    { kind: "labour-roster", why: "Packing shed, markets, animals." },
  ],
  glynwood: [
    { kind: "volunteer-intern", why: "Residential apprenticeship." },
    { kind: "animals-stock", why: "Livestock." },
    { kind: "land-care", why: "About 225 acres of A Greener World." },
    { kind: "course-host", why: "Hudson Valley Apprenticeship." },
  ],
  "camphill-california": [
    { kind: "volunteer-intern", why: "Six to twelve months." },
    { kind: "care-household", why: "Adults with developmental disabilities." },
    { kind: "land-care", why: "Orchard and gardens." },
    { kind: "kitchen-table", why: "Shared houses." },
  ],
  "deck-family": [
    { kind: "volunteer-intern", why: "One-year internship." },
    { kind: "animals-stock", why: "Heritage livestock." },
    { kind: "land-care", why: "500 organic acres." },
    { kind: "labour-roster", why: "Markets and CSA." },
  ],
  "hungry-world": [
    { kind: "volunteer-intern", why: "Summer internship." },
    { kind: "land-care", why: "175 acres." },
    { kind: "animals-stock", why: "Sheep, Red Devon, layers." },
    { kind: "guest-stay", why: "Farmstay." },
  ],
};

export const livingBatch24Governance: Record<string, Governance> = {
  polyface: {
    model: "founder",
    modelLabel: "Family pasture farm",
    unique: false,
    summary: "Salatins 1961. Five-month summer stewardship.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Polyface Farm", role: "Family pasture farm." },
      { name: "Stewardship", role: "Summer crew." },
    ],
    howItRuns: "Apply. 540-885-3590.",
  },
  wilderland: {
    model: "board",
    modelLabel: "Trust farm with volunteer terms",
    unique: false,
    summary: "Hansens 1964. You apply for four weeks. You do not buy Kaimarama.",
    whoDecides: "The trust.",
    bodies: [
      { name: "Wilderland Trust", role: "Holds the Coromandel farm." },
      { name: "Volunteer terms", role: "Four weeks." },
    ],
    howItRuns: "Apply.",
  },
  "green-gulch": {
    model: "spiritual",
    modelLabel: "Zen temple on an organic farm",
    unique: false,
    summary: "1972. You apply for a farm apprenticeship. You do not buy Muir Beach.",
    whoDecides: "The Zen Center.",
    bodies: [
      { name: "Green Gulch", role: "Practice center." },
      { name: "The farm", role: "Seven organic acres." },
    ],
    howItRuns: "Apply.",
  },
  "hawthorne-valley": {
    model: "board",
    modelLabel: "Association biodynamic farm",
    unique: false,
    summary: "1972. You apply for a year. You do not buy Ghent.",
    whoDecides: "The Association.",
    bodies: [
      { name: "Hawthorne Valley Association", role: "farm.hawthornevalley.org." },
      { name: "The farm", role: "900 acres." },
    ],
    howItRuns: "Apply.",
  },
  triform: {
    model: "spiritual",
    modelLabel: "Camphill lifesharing farm",
    unique: false,
    summary: "You apply for a year. You do not buy Triform Road.",
    whoDecides: "The community.",
    bodies: [
      { name: "Triform", role: "Camphill community." },
      { name: "The farm", role: "420 acres." },
    ],
    howItRuns: "Apply. 518-851-9320.",
  },
  "full-belly": {
    model: "founder",
    modelLabel: "Family organic farm",
    unique: false,
    summary: "Rivers and Muller 1984. You apply for a year. You do not buy Guinda.",
    whoDecides: "The family.",
    bodies: [
      { name: "Full Belly Farm", role: "fullbellyfarm.com." },
      { name: "Interns", role: "One-year." },
    ],
    howItRuns: "Apply.",
  },
  glynwood: {
    model: "board",
    modelLabel: "Nonprofit teaching farm",
    unique: false,
    summary: "1993. You apply for a season. You do not buy Cold Spring.",
    whoDecides: "The Center.",
    bodies: [
      { name: "Glynwood Center", role: "glynwood.org." },
      { name: "Apprenticeship", role: "glynwood.org/apprenticeship." },
    ],
    howItRuns: "Apply. 845-265-3338.",
  },
  "camphill-california": {
    model: "spiritual",
    modelLabel: "Camphill lifesharing",
    unique: false,
    summary: "1998. You apply for six to twelve months. You do not buy Soquel.",
    whoDecides: "The community.",
    bodies: [
      { name: "Camphill California", role: "Camphill 501(c)(3)." },
      { name: "The gardens", role: "Orchard." },
    ],
    howItRuns: "Apply.",
  },
  "deck-family": {
    model: "founder",
    modelLabel: "Family regenerative farm",
    unique: false,
    summary: "Decks 2004. You apply for a year. You do not buy High Pass.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Deck Family Farm", role: "The farm." },
      { name: "Interns", role: "One-year." },
    ],
    howItRuns: "Call Christine.",
  },
  "hungry-world": {
    model: "board",
    modelLabel: "Nonprofit teaching farm",
    unique: false,
    summary: "2017. You apply for a summer.",
    whoDecides: "The nonprofit.",
    bodies: [
      { name: "Hungry World Farm", role: "Nonprofit teaching farm." },
      { name: "Interns", role: "Summer." },
    ],
    howItRuns: "Email applications@hungryworldfarm.com.",
  },
};

export const livingBatch24Leaders: Record<string, VillageLeaders> = {
  polyface: {
    people: [
      { name: "William Salatin", role: "Co-founder. Bought the land in 1961." },
      { name: "Lucille Salatin", role: "Co-founder. Bought the land in 1961." },
      { name: "Joel Salatin", role: "Family farmer. Pastured livestock model." },
    ],
    office: { url: "https://polyfacefarm.com/", address: "43 Pure Meadows Lane, Swoope, VA 24479", email: "Wendy@polyfacefarm.com", phone: "540-885-3590" },
  },
  wilderland: {
    people: [],
    office: { url: "https://www.wilderland.org.nz/", address: "RD1/2486 Tairua Whitianga Road, Kaimarama 3591", email: "visit@wilderland.org.nz" },
  },
  "green-gulch": {
    people: [],
    office: { url: "https://www.sfzc.org/locations/green-gulch-farm", address: "1601 Shoreline Highway, Muir Beach, CA 94965" },
  },
  "hawthorne-valley": {
    people: [],
    office: { url: "https://farm.hawthornevalley.org/", address: "327 County Route 21C, Ghent, NY 12075", phone: "518-672-7500" },
  },
  triform: {
    people: [],
    office: { url: "https://www.triform.org/", address: "20 Triform Road, Hudson, NY 12534", email: "volunteer@triform.org", phone: "518-851-9320" },
  },
  "full-belly": {
    people: [],
    office: { url: "https://fullbellyfarm.com/", address: "Capay Valley, Guinda, CA", email: "produce@fullbellyfarm.com", phone: "530-796-2214" },
  },
  glynwood: {
    people: [],
    office: { url: "https://www.glynwood.org/", address: "362 Glynwood Road, Cold Spring, NY 10516", email: "info@glynwood.org", phone: "845-265-3338" },
  },
  "camphill-california": {
    people: [],
    office: { url: "https://camphillca.org/", address: "3920 Fairway Drive, Soquel, CA 95073", email: "coworker@camphillca.org", phone: "831-476-7194" },
  },
  "deck-family": {
    people: [],
    office: { url: "https://www.deckfamilyfarm.com/", address: "25362 High Pass Road, Junction City, OR 97448", email: "info@deckfamilyfarm.com", phone: "541-998-4697" },
  },
  "hungry-world": {
    people: [],
    office: { url: "https://hungryworldfarm.com/", address: "19183 Plow Creek Road, Tiskilwa, IL 61368", email: "applications@hungryworldfarm.com", phone: "815-200-8688" },
  },
};

export const livingBatch24Accommodations: Record<string, Accommodations> = {
  polyface: {
    visitor: {
      overview: "Farm tours. Stewardship housing. Confirm current with 540-885-3590. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["steward housing"], detail: "Room and most board for summer stewards." },
      other: { available: true, types: ["farm tour"], detail: "Tours." },
    },
    resident: {
      overview: "Family housing on the farm. Stewardship is a summer placement.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  wilderland: {
    visitor: {
      overview: "Four-week volunteer stays. Confirm current with visit@wilderland.org.nz.",
      camping: { available: false, types: [], detail: "Volunteer housing, not a public campground." },
      rooms: { available: true, types: ["volunteer bunk"], detail: "Four-week terms." },
      other: { available: true, types: ["shop"], detail: "Farm shop." },
    },
    resident: {
      overview: "Trust residents not isolated here. A four-week term is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Resident housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "green-gulch": {
    visitor: {
      overview: "Guest program and farm apprenticeships. Confirm current with Green Gulch.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["guest room", "apprentice room"], detail: "Guest program and residential apprenticeships." },
      other: { available: true, types: ["zendo"], detail: "Sitting." },
    },
    resident: {
      overview: "Temple residents. An apprenticeship is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: true, types: ["practice room"], detail: "Residential practice." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hawthorne-valley": {
    visitor: {
      overview: "Farm store and visiting-students. Apprentice housing. Confirm current with 518-672-7500.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["apprentice room"], detail: "Private bedroom in shared farm housing." },
      other: { available: true, types: ["farm store"], detail: "Store." },
    },
    resident: {
      overview: "Staff housing not isolated here. A year is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  triform: {
    visitor: {
      overview: "Twelve-month volunteers with full room and board. Confirm current with volunteer@triform.org.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["volunteer room"], detail: "Room and board in shared houses." },
      other: { available: true, types: ["workshop"], detail: "Bakery, weavery, pottery." },
    },
    resident: {
      overview: "Coworkers and villagers in ten homes. A volunteer year is not a house.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: true, types: ["household room"], detail: "Ten homes." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "full-belly": {
    visitor: {
      overview: "One-year intern housing. Confirm current with 530-796-2214. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["intern room"], detail: "Live on the farm. Washroom, laundry, community kitchen." },
      other: { available: true, types: ["CSA pickup"], detail: "CSA." },
    },
    resident: {
      overview: "Family housing on the farm. A year is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  glynwood: {
    visitor: {
      overview: "Residential apprenticeship housing. Farm store. Confirm current with 845-265-3338.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["apprentice housing"], detail: "Housing included for the livestock apprenticeship." },
      other: { available: true, types: ["farm store"], detail: "Store." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "camphill-california": {
    visitor: {
      overview: "Live-in volunteers six to twelve months, private room and board. Confirm current with coworker@camphillca.org.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["volunteer room"], detail: "Private room." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "About 40 residents on six properties. A volunteer year is not a house.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: true, types: ["household room"], detail: "Shared Camphill homes." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "deck-family": {
    visitor: {
      overview: "One-year intern housing. Confirm current with 541-998-4697. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["intern housing"], detail: "Room and board." },
      other: { available: true, types: ["farmers market"], detail: "Markets." },
    },
    resident: {
      overview: "Family housing on the farm.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hungry-world": {
    visitor: {
      overview: "Summer intern housing and a farmstay. Confirm current with 815-200-8688.",
      camping: { available: true, types: ["campground"], detail: "Farmstay camping. Confirm current with the farm." },
      rooms: { available: true, types: ["intern room", "farmstay"], detail: "Shared apartment for interns. Farmstay." },
      other: { available: true, types: ["class"], detail: "Classes." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
