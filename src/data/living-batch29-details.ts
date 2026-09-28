import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch29LegalEntities: Record<string, LegalEntity[]> = {
  "white-oak-pastures": [
    { name: "White Oak Pastures", kind: "Private family farm", role: "Harris family farm.", status: "current", layer: "enterprise", year: "1866", forms: ["Company"] },
    { name: "Bluffton pasture", kind: "3,000-acre farm", role: "About 3,000 acres of regenerative pasture.", status: "current", layer: "land", year: "1866", forms: ["Freehold title"] },
  ],
  "isabella-freedman": [
    { name: "Adamah / Isabella Freedman", kind: "Educational 501(c)(3)", role: "Nonprofit Jewish retreat.", status: "current", layer: "education", year: "1893", forms: ["501(c)(3)"] },
    { name: "Falls Village campus", kind: "400-acre farm", role: "400-acre Connecticut Berkshires campus.", status: "current", layer: "land", year: "1893", forms: ["Freehold title"] },
  ],
  esalen: [
    { name: "Esalen Institute", kind: "Educational 501(c)(3)", role: "California educational nonprofit.", status: "current", layer: "education", year: "1962", forms: ["501(c)(3)"] },
    { name: "Big Sur cliff", kind: "27-acre lease", role: "About 27 acres on an 87-year lease through 2049.", status: "current", layer: "land", year: "1962", forms: ["Ground lease"] },
  ],
  "sivananda-yoga-farm": [
    { name: "Sivananda Ashram Yoga Farm", kind: "501(c)(3) ashram", role: "501(c)(3) ashram (EIN 95-3190863).", status: "current", layer: "membership", year: "1971", identifier: "EIN 95-3190863", forms: ["501(c)(3)"] },
    { name: "Grass Valley acres", kind: "80-acre farm", role: "80 acres in the Sierra foothills.", status: "current", layer: "land", year: "1971", forms: ["Freehold title"] },
  ],
  "heifer-ranch": [
    { name: "Heifer International", kind: "Educational 501(c)(3)", role: "Training ranch.", status: "current", layer: "education", year: "1971", forms: ["501(c)(3)"] },
    { name: "Perryville ranch", kind: "1,200-acre farm", role: "1,200-acre regenerative training ranch.", status: "current", layer: "land", year: "1971", forms: ["Freehold title"] },
  ],
  yogaville: [
    { name: "Satchidananda Ashram–Yogaville Inc.", kind: "Religious society", role: "Ashram.", status: "current", layer: "membership", year: "1980", forms: ["Religious society"] },
    { name: "Buckingham acres", kind: "750-acre farm", role: "750 acres on the James River.", status: "current", layer: "land", year: "1979", forms: ["Freehold title"] },
  ],
  heartbeet: [
    { name: "Heartbeet Lifesharing", kind: "Camphill 501(c)(3)", role: "Vermont Camphill 501(c)(3) / heartbeet.org.", status: "current", layer: "membership", year: "2000", forms: ["501(c)(3)"] },
    { name: "Hardwick acres", kind: "150-acre farm", role: "150-acre biodynamic-inspired farm of Idealist / camphill.org.", status: "current", layer: "land", year: "2000", forms: ["Freehold title"] },
  ],
  "panya-project": [
    { name: "Panya Project", kind: "Unincorporated community association", role: "Volunteer-run permaculture education centre.", status: "current", layer: "education", year: "2002", forms: ["Membership association"] },
    { name: "Mae Taeng acres", kind: "10-acre farm", role: "10 acres (four hectares).", status: "current", layer: "land", year: "2002", forms: ["Freehold title"] },
  ],
  laakea: [
    { name: "La'akea Permaculture Community", kind: "Unincorporated community association", role: "Small egalitarian household.", status: "current", layer: "membership", year: "2005", forms: ["Membership association"] },
    { name: "Pāhoa acres", kind: "23-acre farm", role: "23 acres of rainforest gardens.", status: "current", layer: "land", year: "2005", forms: ["Freehold title"] },
  ],
  "finca-tierra": [
    { name: "Finca Tierra", kind: "Private family farm", role: "Private teaching farm.", status: "current", layer: "enterprise", year: "2008", forms: ["Company"] },
    { name: "Puerto Viejo acres", kind: "9-acre farm", role: "Nine-acre off-grid tropical farm.", status: "current", layer: "land", year: "2008", forms: ["Freehold title"] },
  ],
};

export const livingBatch29Land: Record<string, LandOwnership> = {
  "white-oak-pastures": {
    owner: "The Harris family",
    complexity: "simple",
    tenure: "Private family farm",
    howHeld: "About 3,000 acres. Cabins.",
    narrative: "A Bluffton pasture farm. A cabin night is not Heron Road.",
    divided: [{ label: "Pasture, garden, cabins", holder: "The family", share: "Private", what: "A booking is not a deed." }],
  },
  "isabella-freedman": {
    owner: "Adamah",
    complexity: "simple",
    tenure: "Nonprofit retreat farm",
    howHeld: "400 acres. Farm Fellowship.",
    narrative: "A Falls Village retreat. A fellowship summer is not Johnson Road.",
    divided: [{ label: "Farm, lodges, kitchen", holder: "The nonprofit", share: "Nonprofit", what: "" }],
  },
  esalen: {
    owner: "Esalen Institute (lease)",
    complexity: "simple",
    tenure: "Nonprofit on a long lease",
    howHeld: "About 27 acres on an 87-year lease through 2049. Farm & Garden.",
    narrative: "A Big Sur cliff farm on a long lease through 2049.",
    divided: [{ label: "Cliff, farm, baths", holder: "The Institute", share: "Lease", what: "" }],
  },
  "sivananda-yoga-farm": {
    owner: "The ashram",
    complexity: "simple",
    tenure: "Nonprofit ashram farm",
    howHeld: "80 acres. Karma Yoga.",
    narrative: "A Grass Valley ashram. A month of seva is not Ballantree Lane.",
    divided: [{ label: "Gardens, tents, dorms", holder: "The ashram", share: "Nonprofit", what: "A month is not a deed." }],
  },
  "heifer-ranch": {
    owner: "Heifer International",
    complexity: "simple",
    tenure: "Nonprofit training ranch",
    howHeld: "1,200 acres. Intern housing.",
    narrative: "A Perryville ranch.",
    divided: [{ label: "Pasture, gardens, intern housing", holder: "Heifer", share: "Nonprofit", what: "" }],
  },
  yogaville: {
    owner: "Satchidananda Ashram–Yogaville Inc.",
    complexity: "simple",
    tenure: "Religious ashram farm",
    howHeld: "750 acres. Farm Yogi.",
    narrative: "A Buckingham ashram. 750 acres on the James River.",
    divided: [{ label: "Farm, retreat rooms, LOTUS", holder: "The ashram", share: "Religious society", what: "Volunteer terms and retreat rooms." }],
  },
  heartbeet: {
    owner: "Heartbeet Lifesharing",
    complexity: "simple",
    tenure: "Camphill nonprofit farm",
    howHeld: "150 acres of Idealist / camphill.org. Volunteer year.",
    narrative: "A Hardwick Camphill. A volunteer year is not Town Farm Road.",
    divided: [{ label: "Homes, gardens, workshops", holder: "The community", share: "Nonprofit", what: "A year is not a deed." }],
  },
  "panya-project": {
    owner: "The household",
    complexity: "simple",
    tenure: "Private teaching farm",
    howHeld: "10 acres. Volunteer week.",
    narrative: "A Mae Taeng permaculture camp. A week is not Ban Mae Jo.",
    divided: [{ label: "Gardens, earth buildings, camp", holder: "The household", share: "Private", what: "A week is not a deed." }],
  },
  laakea: {
    owner: "The household",
    complexity: "simple",
    tenure: "Private household farm",
    howHeld: "23 acres. Farm-support month.",
    narrative: "A Pāhoa rainforest household. A month is not Kalapana road.",
    divided: [{ label: "Taro, orchards, cabins", holder: "The household", share: "Private", what: "A month is not a deed." }],
  },
  "finca-tierra": {
    owner: "The teaching farm",
    complexity: "simple",
    tenure: "Private teaching farm",
    howHeld: "Nine acres. Bamboo cabinas.",
    narrative: "A Puerto Viejo food forest.",
    divided: [{ label: "Food forest, cabinas, kitchen", holder: "The farm", share: "Private", what: "Private teaching farm." }],
  },
};

export const livingBatch29Funding: Record<string, CommunityFunding> = {
  "white-oak-pastures": {
    overview: "Meat, store, restaurant, cabin nights, and intern labour.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Farm sales and lodging",
    grants: [],
    private: [{ source: "Customers and guests", amount: "Cabins", year: "1866", certainty: "estimated", kind: "business", note: "" }],
  },
  "isabella-freedman": {
    overview: "Retreats, rentals, farm produce, and the fellowship.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Nonprofit",
    grants: [],
    private: [{ source: "Guests and the fellowship", amount: "Retreats", year: "1893", certainty: "estimated", kind: "business", note: "" }],
  },
  esalen: {
    overview: "Workshops, lodging, baths, and a paid Work Scholar season.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Institute",
    grants: [],
    private: [{ source: "Guests and scholars", amount: "Workshops", year: "1962", certainty: "estimated", kind: "business", note: "" }],
  },
  "sivananda-yoga-farm": {
    overview: "Yoga vacations, teacher training, and Karma Yoga months.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Ashram",
    grants: [],
    private: [{ source: "Guests and seva", amount: "Tent $700 / dorm $900 a month", year: "1971", certainty: "estimated", kind: "business", note: "A month is not a closing." }],
  },
  "heifer-ranch": {
    overview: "Farmer training, livestock, and intern labour.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Heifer",
    grants: [],
    private: [{ source: "Programs and gifts", amount: "On-site internships", year: "1971", certainty: "estimated", kind: "business", note: "" }],
  },
  yogaville: {
    overview: "Retreats, teacher training, and volunteer terms.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Ashram",
    grants: [],
    private: [{ source: "Guests and volunteers", amount: "Residential volunteer", year: "1980", certainty: "estimated", kind: "business", note: "Retreats, teacher training, and volunteer terms." }],
  },
  heartbeet: {
    overview: "Disability-services funding, a biodynamic farm, crafts, and volunteer years.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Camphill",
    grants: [],
    private: [{ source: "Community and gifts", amount: "Volunteer year", year: "2000", certainty: "estimated", kind: "business", note: "A year is not a closing." }],
  },
  "panya-project": {
    overview: "Volunteer contributions, PDCs, and building workshops.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Volunteer weeks",
    grants: [],
    private: [{ source: "Volunteers and courses", amount: "3,000 THB first week, then 400 THB a day", year: "2002", certainty: "estimated", kind: "courses", note: "A week is not a closing." }],
  },
  laakea: {
    overview: "Farm-support tuition, farmstays, classes, and a household garden.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Household",
    grants: [],
    private: [{ source: "Farm support and farmstays", amount: "$12 a day, one month", year: "2005", certainty: "estimated", kind: "business", note: "A month is not a closing." }],
  },
  "finca-tierra": {
    overview: "Retreats, PDCs, and farm-to-table.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Teaching farm",
    grants: [],
    private: [{ source: "Guests and courses", amount: "Eight bamboo cabinas a week", year: "2008", certainty: "estimated", kind: "business", note: "Retreats, PDCs, and farm-to-table." }],
  },
};

export const livingBatch29VisitJoin: Record<string, VisitJoin> = {
  "white-oak-pastures": {
    visit: 5,
    join: 2,
    visitProcess: "2275 Heron Road, Bluffton, GA 39824. Cabins. (229) 641-2081. A Bainbridge drive.",
    joinProcess: "Twelve-week intern. brandi.hilton@whiteoakpastures.com.",
  },
  "isabella-freedman": {
    visit: 5,
    join: 2,
    visitProcess: "116 Johnson Road, Falls Village, CT 06031. Retreat lodges. A New York drive.",
    joinProcess: "Three-month Adamah Farm Fellowship. Housing included.",
  },
  esalen: {
    visit: 4,
    join: 2,
    visitProcess: "55000 Highway 1, Big Sur, CA 93920. Workshop lodging. (831) 667-3000. Confirm road access.",
    joinProcess: "Three-month Work Scholar season.",
  },
  "sivananda-yoga-farm": {
    visit: 4,
    join: 2,
    visitProcess: "14651 Ballantree Lane, Grass Valley, CA 95949. Yoga vacation. (530) 272-9322.",
    joinProcess: "Karma Yoga one to three months. First week on trial. yogafarm@sivananda.org. A month is not 80 acres.",
  },
  "heifer-ranch": {
    visit: 2,
    join: 2,
    visitProcess: "55 Heifer Road, Perryville, AR 72126. Write HeiferRanch@heifer.org. (501) 889-7001. Not a drop-in inn.",
    joinProcess: "On-site internship with housing.",
  },
  yogaville: {
    visit: 4,
    join: 2,
    visitProcess: "108 Yogaville Way, Buckingham, VA 23921. Retreat rooms. (800) 858-9642.",
    joinProcess: "Residential volunteer one week to three months. Farm Yogi is a separate farm-hours door.",
  },
  heartbeet: {
    visit: 2,
    join: 2,
    visitProcess: "218 Town Farm Road, Hardwick, VT 05843. Write coworker@heartbeet.org. (802) 472-3285. Care community; do not drop in.",
    joinProcess: "Live-in volunteer year. A year is not a house.",
  },
  "panya-project": {
    visit: 3,
    join: 2,
    visitProcess: "Ban Mae Jo, Mae Taeng, Chiang Mai. Write panyaproject@gmail.com. They close intake during courses.",
    joinProcess: "Volunteer week, 3,000 baht then 400 baht a day. A week is not four hectares.",
  },
  laakea: {
    visit: 3,
    join: 2,
    visitProcess: "Four miles south of Pāhoa. Tours and farmstays. Write first. (808) 443-4076.",
    joinProcess: "One-month farm-support term, $12 a day. A month is not 23 acres.",
  },
  "finca-tierra": {
    visit: 4,
    join: 1,
    visitProcess: "Near Puerto Viejo de Talamanca, Limón. Bamboo cabinas. A Limón drive.",
    joinProcess: "A cabina week or a PDC.",
  },
};

export const livingBatch29DailyLife: Record<string, DailyLife> = {
  "white-oak-pastures": {
    typical: [
      { title: "Pasture livestock", detail: "Cattle, hogs, poultry." },
      { title: "Organic garden", detail: "Kitchen gardens." },
      { title: "Cabins", detail: "Lodging." },
    ],
    unique: { title: "A fifth-generation pasture with a twelve-week intern course", detail: "Harris 1866." },
  },
  "isabella-freedman": {
    typical: [
      { title: "Organic farm", detail: "Vegetables, fruit, herbs." },
      { title: "Goats and chickens", detail: "Farm Fellowship." },
      { title: "Kosher kitchen", detail: "Farm-to-table." },
    ],
    unique: { title: "A Berkshires Jewish retreat with a farm fellowship", detail: "1893." },
  },
  esalen: {
    typical: [
      { title: "Farm & Garden", detail: "Vegetables and kitchen gardens." },
      { title: "Work Scholar season", detail: "Kitchen, cabins, six farm hours." },
      { title: "Cliff baths", detail: "Workshops." },
    ],
    unique: { title: "Cliff baths on Slates Hot Springs", detail: "Murphy and Price opened the institute in 1962 on this Big Sur cliff. Workshops and baths are the guest path; Farm & Garden still feeds the kitchen." },
  },
  "sivananda-yoga-farm": {
    typical: [
      { title: "Gardens", detail: "Kitchen gardens." },
      { title: "Karma Yoga", detail: "Four hours of seva a day." },
      { title: "Tents and dorms", detail: "May–Oct tent." },
    ],
    unique: { title: "An 80-acre Sierra ashram of seva-study", detail: "Swami Vishnudevananda opened the 80-acre Grass Valley Yoga Farm in 1971; the public work door is a one-to-three-month Karma Yoga stay with four hours of seva a day." },
  },
  "heifer-ranch": {
    typical: [
      { title: "Pasture livestock", detail: "Cows and sheep." },
      { title: "Organic gardens", detail: "Organic gardens." },
      { title: "Training classroom", detail: "2019 regenerative turn." },
    ],
    unique: { title: "A 1,200-acre living classroom, not an inn", detail: "Heifer International opened this Perryville site in 1971 as a breeding and quarantine ranch; it is now a 1,200-acre regenerative training campus where on-site interns work gardens and livestock." },
  },
  yogaville: {
    typical: [
      { title: "One-acre organic farm / Farm Yogi", detail: "Farm Yogi is a 20–24-hour-a-week farm door." },
      { title: "Residential volunteer", detail: "33 hours a week for a week to three months, dorm included." },
      { title: "Retreat rooms", detail: "Book with (800) 858-9642." },
    ],
    unique: { title: "LOTUS on the James", detail: "Swami Satchidananda bought the first 600 acres in Buckingham in 1979 and opened the ashram in 1980. The lotus-shaped LOTUS shrine — altars for a dozen world faiths — was dedicated in 1986." },
  },
  heartbeet: {
    typical: [
      { title: "Biodynamic gardens", detail: "Idealist / camphill.org." },
      { title: "Workshops", detail: "Crafts." },
      { title: "Shared houses", detail: "Villagers and coworkers." },
    ],
    unique: { title: "A Northeast Kingdom Camphill year", detail: "2000 of Idealist / heartbeet.org. A year is not Hardwick." },
  },
  "panya-project": {
    typical: [
      { title: "Food forest", detail: "Gardens." },
      { title: "Earth buildings", detail: "Workshops." },
      { title: "Volunteer week", detail: "One-week minimum." },
    ],
    unique: { title: "A Mae Taeng camp that closes for courses", detail: "Christian Shearer proposed Baan Thai in 2002; volunteer stays are at least one week (3,000 THB first week, then 400 THB a day), and they close intake during courses." },
  },
  laakea: {
    typical: [
      { title: "Taro and orchards", detail: "Taro and rainforest orchards." },
      { title: "Bees, chickens, ducks", detail: "Bees, chickens, and ducks." },
      { title: "Farm-support month", detail: "One-month farm-support term, $12 a day." },
    ],
    unique: { title: "A Pāhoa rainforest household with a $12 day", detail: "In March 2005 six people bought the 23-acre Puna parcel that became La'akea intentional community (permaculture-hawaii.com Oct 2024 update)." },
  },
  "finca-tierra": {
    typical: [
      { title: "Food forest", detail: "Roots, fruit, vegetables." },
      { title: "Bamboo cabinas", detail: "Eight a week." },
      { title: "PDC weeks", detail: "Plant · Harvest · Cook and PDC weeks." },
    ],
    unique: { title: "A Puerto Viejo pasture turned food forest", detail: "Nine acres of off-grid tropical farm near Puerto Viejo de Talamanca, started on degraded cattle pasture in 2008. Eight bamboo cabinas a week; the public stay door is the Plant · Harvest · Cook retreat." },
  },
};

export const livingBatch29Informal: Record<string, InformalAgreement[]> = {
  "white-oak-pastures": [
    { kind: "guest-stay", why: "Cabins." },
    { kind: "volunteer-intern", why: "Twelve-week intern." },
    { kind: "animals-stock", why: "Cattle, hogs, poultry." },
    { kind: "kitchen-table", why: "Pasture restaurant." },
    { kind: "land-care", why: "About 3,000 acres. Guests stay off paddocks they were not asked onto." },
  ],
  "isabella-freedman": [
    { kind: "guest-stay", why: "Retreat lodges." },
    { kind: "volunteer-intern", why: "Three-month Farm Fellowship." },
    { kind: "animals-stock", why: "Goats and chickens." },
    { kind: "kitchen-table", why: "Kosher farm-to-table." },
    { kind: "land-care", why: "400 acres." },
  ],
  esalen: [
    { kind: "guest-stay", why: "Workshop lodging." },
    { kind: "volunteer-intern", why: "Three-month Work Scholar." },
    { kind: "kitchen-table", why: "Kitchen and Farm & Garden." },
    { kind: "land-care", why: "Cliff farm. Scholars stay off beds they were not asked onto." },
    { kind: "quiet-practice", why: "Workshops and baths." },
    { kind: "course-host", why: "Institute programs." },
  ],
  "sivananda-yoga-farm": [
    { kind: "guest-stay", why: "Yoga vacation." },
    { kind: "volunteer-intern", why: "Karma Yoga one to three months." },
    { kind: "quiet-practice", why: "Ashram schedule." },
    { kind: "kitchen-table", why: "Seva kitchen." },
    { kind: "land-care", why: "80 acres." },
  ],
  "heifer-ranch": [
    { kind: "volunteer-intern", why: "On-site internships." },
    { kind: "animals-stock", why: "Cows and sheep." },
    { kind: "land-care", why: "1,200 acres of Savory." },
    { kind: "course-host", why: "Farmer training. Not a drop-in inn." },
  ],
  yogaville: [
    { kind: "guest-stay", why: "Retreat rooms." },
    { kind: "volunteer-intern", why: "Residential volunteer and Farm Yogi." },
    { kind: "quiet-practice", why: "Ashram." },
    { kind: "land-care", why: "One-acre organic farm." },
    { kind: "kitchen-table", why: "Shared meals." },
  ],
  heartbeet: [
    { kind: "volunteer-intern", why: "Volunteer year." },
    { kind: "care-household", why: "Adults with developmental disabilities of Idealist / heartbeet.org." },
    { kind: "kitchen-table", why: "Shared houses." },
    { kind: "land-care", why: "150 acres of Idealist. Do not drop in." },
  ],
  "panya-project": [
    { kind: "volunteer-intern", why: "Week-long volunteers." },
    { kind: "land-care", why: "10 acres." },
    { kind: "course-host", why: "PDCs. They close intake during courses." },
    { kind: "kitchen-table", why: "Volunteer kitchen." },
  ],
  laakea: [
    { kind: "guest-stay", why: "Farmstays." },
    { kind: "volunteer-intern", why: "One-month farm support." },
    { kind: "animals-stock", why: "Bees, chickens, ducks." },
    { kind: "land-care", why: "Taro and orchards." },
    { kind: "kitchen-table", why: "Household table." },
  ],
  "finca-tierra": [
    { kind: "guest-stay", why: "Bamboo cabinas." },
    { kind: "course-host", why: "PDC weeks." },
    { kind: "land-care", why: "Nine-acre food forest. Guests stay off rows they were not asked onto." },
    { kind: "kitchen-table", why: "Farm-to-table." },
  ],
};

export const livingBatch29Governance: Record<string, Governance> = {
  "white-oak-pastures": {
    model: "founder",
    modelLabel: "Family pasture farm",
    unique: false,
    summary: "Harris family. You book a cabin or apply for twelve weeks. You do not buy Bluffton.",
    whoDecides: "The farm.",
    bodies: [
      { name: "White Oak Pastures", role: "Harris family farm." },
      { name: "Intern course", role: "Twelve weeks." },
    ],
    howItRuns: "Book. Apply. (229) 641-2081.",
  },
  "isabella-freedman": {
    model: "board",
    modelLabel: "Nonprofit Jewish retreat farm",
    unique: false,
    summary: "Adamah. You book a retreat or apply for the Farm Fellowship. You do not buy Falls Village.",
    whoDecides: "The nonprofit.",
    bodies: [
      { name: "Isabella Freedman", role: "Falls Village retreat campus." },
      { name: "Adamah Farm Fellowship", role: "Three months." },
    ],
    howItRuns: "Book. Apply.",
  },
  esalen: {
    model: "board",
    modelLabel: "Educational nonprofit on a cliff lease",
    unique: false,
    summary: "You book a workshop or apply for Work Scholar. You do not buy Slates Hot Springs.",
    whoDecides: "The Institute.",
    bodies: [
      { name: "Esalen Institute", role: "California educational nonprofit." },
      { name: "Farm & Garden", role: "Work Scholar kitchen and garden hours." },
    ],
    howItRuns: "Apply. (831) 667-3000.",
  },
  "sivananda-yoga-farm": {
    model: "spiritual",
    modelLabel: "Yoga ashram farm",
    unique: false,
    summary: "You book a yoga vacation or apply for Karma Yoga. You do not buy Ballantree Lane.",
    whoDecides: "The ashram.",
    bodies: [
      { name: "Sivananda Ashram Yoga Farm", role: "Yoga ashram farm." },
      { name: "Karma Yoga", role: "One to three months." },
    ],
    howItRuns: "Apply. yogafarm@sivananda.org / (530) 272-9322.",
  },
  "heifer-ranch": {
    model: "board",
    modelLabel: "Nonprofit training ranch",
    unique: false,
    summary: "On-site internship with housing.",
    whoDecides: "Heifer International.",
    bodies: [
      { name: "Heifer Ranch", role: "Training ranch." },
      { name: "Interns", role: "On-site housing." },
    ],
    howItRuns: "Write HeiferRanch@heifer.org. (501) 889-7001. Not a drop-in inn.",
  },
  yogaville: {
    model: "spiritual",
    modelLabel: "Yoga ashram farm",
    unique: false,
    summary: "Retreats, residential volunteer, Farm Yogi.",
    whoDecides: "The ashram.",
    bodies: [
      { name: "Satchidananda Ashram–Yogaville", role: "The ashram." },
      { name: "Farm Yogi", role: "Farm hours." },
    ],
    howItRuns: "Apply. (800) 858-9642.",
  },
  heartbeet: {
    model: "spiritual",
    modelLabel: "Camphill lifesharing farm",
    unique: false,
    summary: "heartbeet.org. You apply for a volunteer year. You do not buy Town Farm Road.",
    whoDecides: "The community.",
    bodies: [
      { name: "Heartbeet Lifesharing", role: "heartbeet.org." },
      { name: "Camphill", role: "Volunteer year." },
    ],
    howItRuns: "Write coworker@heartbeet.org. (802) 472-3285. Do not drop in.",
  },
  "panya-project": {
    model: "founder",
    modelLabel: "Volunteer permaculture camp",
    unique: false,
    summary: "You register for a week. You do not buy Mae Taeng.",
    whoDecides: "The household.",
    bodies: [
      { name: "Panya Project", role: "Permaculture education centre." },
      { name: "Volunteer week", role: "Get-involved." },
    ],
    howItRuns: "Email panyaproject@gmail.com first. They close intake during courses.",
  },
  laakea: {
    model: "founder",
    modelLabel: "Household permaculture farm",
    unique: false,
    summary: "You apply for a farm-support month or write for a farmstay. You do not buy Pāhoa.",
    whoDecides: "The household.",
    bodies: [
      { name: "La'akea", role: "Household." },
      { name: "Farm support", role: "One month." },
    ],
    howItRuns: "Apply. (808) 443-4076.",
  },
  "finca-tierra": {
    model: "founder",
    modelLabel: "Tropical teaching farm",
    unique: false,
    summary: "You book a cabina or a PDC. You do not buy Puerto Viejo.",
    whoDecides: "The teaching farm.",
    bodies: [
      { name: "Finca Tierra", role: "Teaching farm." },
      { name: "Nature retreat", role: "Eight cabinas a week." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch29Leaders: Record<string, VillageLeaders> = {
  "white-oak-pastures": {
    people: [],
    office: { url: "https://whiteoakpastures.com/", address: "2275 Heron Road, Bluffton, GA 39824", email: "brandi.hilton@whiteoakpastures.com", phone: "(229) 641-2081" },
  },
  "isabella-freedman": {
    people: [],
    office: { url: "https://adamah.org/isabella-freedman/", address: "116 Johnson Road, Falls Village, CT 06031" },
  },
  esalen: {
    people: [],
    office: { url: "https://www.esalen.org/", address: "55000 Highway 1, Big Sur, CA 93920", phone: "(831) 667-3000" },
  },
  "sivananda-yoga-farm": {
    people: [],
    office: { url: "https://sivanandayogafarm.org/", address: "14651 Ballantree Lane, Grass Valley, CA 95949", email: "yogafarm@sivananda.org", phone: "(530) 272-9322" },
  },
  "heifer-ranch": {
    people: [],
    office: { url: "https://www.heifer.org/usa/ranch", address: "55 Heifer Road, Perryville, AR 72126", email: "HeiferRanch@heifer.org", phone: "(501) 889-7001" },
  },
  yogaville: {
    people: [
      { name: "Sri Swami Satchidananda", role: "Founder. Bought the land in 1979. Opened the ashram in 1980." },
      { name: "Karuna Marcotte", role: "Executive Director." },
    ],
    office: { url: "https://www.yogaville.org/", address: "108 Yogaville Way, Buckingham, VA 23921", phone: "(800) 858-9642" },
  },
  heartbeet: {
    people: [],
    office: { url: "https://heartbeet.org/", address: "218 Town Farm Road, Hardwick, VT 05843", email: "coworker@heartbeet.org", phone: "(802) 472-3285" },
  },
  "panya-project": {
    people: [],
    office: { url: "https://www.panyaproject.org/", address: "Ban Mae Jo, Mae Taeng District, Chiang Mai, Thailand", email: "panyaproject@gmail.com" },
  },
  laakea: {
    people: [],
    office: { url: "https://permaculture-hawaii.com/", address: "Four miles south of Pāhoa, Island of Hawai'i", phone: "(808) 443-4076" },
  },
  "finca-tierra": {
    people: [],
    office: { url: "https://fincatierra.com/", address: "Near Puerto Viejo de Talamanca, Limón, Costa Rica" },
  },
};

export const livingBatch29Accommodations: Record<string, Accommodations> = {
  "white-oak-pastures": {
    visitor: {
      overview: "Four cabins, a Pond House, and downtown Bluffton houses. Confirm current with (229) 641-2081.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cabin", "house"], detail: "Cabins, Pond House, and downtown houses." },
      other: { available: true, types: ["restaurant"], detail: "Pasture restaurant." },
    },
    resident: {
      overview: "Family housing on the farm. A cabin night is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "isabella-freedman": {
    visitor: {
      overview: "Retreat lodges on the Falls Village campus. Farm Fellowship housing.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["retreat lodge", "fellowship housing"], detail: "Lodges and three-month fellowship housing." },
      other: { available: true, types: ["kosher kitchen"], detail: "Farm-to-table." },
    },
    resident: {
      overview: "Staff housing not isolated here. A fellowship is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  esalen: {
    visitor: {
      overview: "Workshop lodging on the Big Sur cliff. Work Scholar shared rooms. Confirm current with (831) 667-3000.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["workshop room", "work-scholar room"], detail: "Shared rooms for Work Scholars. Workshop lodging." },
      other: { available: true, types: ["hot springs"], detail: "Baths. Confirm road access." },
    },
    resident: {
      overview: "Work Scholar shared rooms for the three-month season.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sivananda-yoga-farm": {
    visitor: {
      overview: "Yoga vacation rooms and tents. Karma Yoga tent $700 a month May–Oct, dorm $900. Confirm current with (530) 272-9322.",
      camping: { available: true, types: ["tent"], detail: "Tent $700 a month May–Oct." },
      rooms: { available: true, types: ["dorm", "yoga vacation room"], detail: "Dorm $900 a month. Vacation rooms." },
      other: { available: true, types: ["ashram hall"], detail: "Practice." },
    },
    resident: {
      overview: "Ashram residents. A Karma Yoga month is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: true, types: ["practice room"], detail: "Residential practice." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "heifer-ranch": {
    visitor: {
      overview: "Intern housing. Not a drop-in inn. Confirm current with HeiferRanch@heifer.org / (501) 889-7001.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["intern housing"], detail: "On-site intern housing. Not a public inn." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  yogaville: {
    visitor: {
      overview: "Retreat rooms. Residential volunteer dorm included. Confirm current with (800) 858-9642.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["retreat room", "volunteer dorm"], detail: "Retreat. Dorm for residential volunteers." },
      other: { available: true, types: ["ashram hall"], detail: "Practice." },
    },
    resident: {
      overview: "Ashram residents.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: true, types: ["practice room"], detail: "Residential practice." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  heartbeet: {
    visitor: {
      overview: "Live-in volunteer year / heartbeet.org. Care community; do not drop in. Confirm current with coworker@heartbeet.org.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["volunteer room"], detail: "Room in shared houses. Not a cabin listing." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Villagers and coworkers. A volunteer year is not a house.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: true, types: ["household room"], detail: "Shared Camphill homes." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "panya-project": {
    visitor: {
      overview: "Volunteer stays of at least one week. Confirm current with panyaproject@gmail.com. They close intake during courses.",
      camping: { available: true, types: ["volunteer camp"], detail: "Camp-style volunteer housing. Confirm current with the household." },
      rooms: { available: true, types: ["volunteer bunk"], detail: "Week-long volunteer stays." },
      other: { available: true, types: ["course"], detail: "PDCs. Intake closes during courses." },
    },
    resident: {
      overview: "Small volunteer household. A week is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Resident housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  laakea: {
    visitor: {
      overview: "Tours and farmstays. Farm-support month. Cabin $5 a day extra. Write first. (808) 443-4076.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["farmstay", "cabin"], detail: "Farmstays. Cabin $5 a day extra." },
      other: { available: true, types: ["tour"], detail: "Tours." },
    },
    resident: {
      overview: "Small household. A month is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Household housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "finca-tierra": {
    visitor: {
      overview: "Eight bamboo cabinas a week. PDC weeks.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["bamboo cabina"], detail: "Eight cabinas a week." },
      other: { available: true, types: ["course"], detail: "PDC." },
    },
    resident: {
      overview: "Teaching homestead.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
