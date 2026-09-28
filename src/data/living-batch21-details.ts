import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch21LegalEntities: Record<string, LegalEntity[]> = {
  hawkwood: [
    { name: "Hawkwood College Limited", kind: "UK educational charity", role: "Registered arts and education charity. Companies House.", status: "current", layer: "education", year: "1947", forms: ["Company limited by guarantee"] },
    { name: "Painswick Old Road estate", kind: "Grade II house and 42 acres", role: "Grade II house, 42 acres. Stroud Community Agriculture on the grounds.", status: "current", layer: "land", year: "1947", forms: ["Historic designation", "Freehold title"] },
  ],
  keveral: [
    { name: "Keveral Farm Community", kind: "Housing co-operative", role: "Founded 1973. Ten adults.", status: "current", layer: "membership", year: "1973", forms: ["Housing cooperative"] },
    { name: "Keveral Farm, Looe", kind: "Organic farm and campsite", role: "30 acres. Soil Association.", status: "current", layer: "land", year: "1973", forms: ["Freehold title"] },
  ],
  "lower-shaw": [
    { name: "Foundation for Alternatives", kind: "Educational lease", role: "1975 lease. Borough land.", status: "current", layer: "education", year: "1975", forms: ["Ground lease"] },
    { name: "Old Shaw Lane smallholding", kind: "3.5-acre oasis", role: "Organic vegetables, herbs, flowers.", status: "current", layer: "land", year: "1975", forms: ["Ground lease"] },
  ],
  "liberty-hill": [
    { name: "Liberty Hill Farm & Inn", kind: "Private dairy and inn", role: "Kennett dairy 1979. Inn 1984.", status: "current", layer: "land", year: "1979", forms: ["Freehold title"] },
    { name: "511 Liberty Hill", kind: "1825 farmhouse and 240 acres", role: "240 acres. Seven rooms.", status: "current", layer: "enterprise", year: "1825", forms: ["Freehold title", "Historic designation"] },
  ],
  djanbung: [
    { name: "Djanbung Gardens", kind: "Private permaculture college", role: "Robyn Francis 1993. Permaculture College Australia.", status: "current", layer: "education", year: "1993", forms: ["Freehold title"] },
    { name: "74 Cecil Street", kind: "Five-acre demonstration", role: "2.16 ha. Hipcamp.", status: "current", layer: "land", year: "1993", forms: ["Freehold title"] },
  ],
  "luna-nueva": [
    { name: "Finca Luna Nueva Lodge", kind: "Private regenerative lodge", role: "Farming 1994. 127 acres.", status: "current", layer: "land", year: "1994", forms: ["Freehold title"] },
    { name: "Sacred Seeds Sanctuary", kind: "Botanical collection", role: "Over 300 tropical species.", status: "current", layer: "education", year: "1994", forms: ["Freehold title"] },
  ],
  "la-loma": [
    { name: "La Loma Jungle Lodge", kind: "Private cacao farm lodge", role: "Purchase 2003. 55 acres.", status: "current", layer: "land", year: "2003", forms: ["Freehold title"] },
    { name: "Bahía Honda, Bastimentos", kind: "Rainforest and farmland", role: "Boat only. Cacao tour.", status: "current", layer: "enterprise", year: "2003", forms: ["Freehold title"] },
  ],
  "rancho-margot": [
    { name: "Rancho Margot", kind: "Private regenerative ranch", role: "Juan Sostheim 2004. About 400 acres.", status: "current", layer: "land", year: "2004", forms: ["Freehold title"] },
    { name: "El Castillo lodge", kind: "Bungalows and bunkhouse", role: "Nineteen bungalows and twenty bunks.", status: "current", layer: "enterprise", year: "2004", forms: ["Freehold title"] },
  ],
  "fat-sheep": [
    { name: "Fat Sheep Farm & Cabins", kind: "Private sheep farm", role: "Kaplan and Heyman 2016 of Edible Vermont. 60 acres.", status: "current", layer: "land", year: "2016", forms: ["Freehold title"] },
    { name: "122 Best Road", kind: "Five cabins", role: "ThinkReservations.", status: "current", layer: "enterprise", year: "2016", forms: ["Freehold title"] },
  ],
  wonderfield: [
    { name: "Wonderfield Farm", kind: "Private regenerative farm", role: "Co-founded 2018. 66 acres.", status: "current", layer: "land", year: "2018", forms: ["Freehold title"] },
    { name: "10707 E Gobbler Drive", kind: "Glamping, cottages, farmhouse", role: "Glamping, cottages, farmhouse. Gatherings.", status: "current", layer: "enterprise", year: "2018", forms: ["Freehold title"] },
  ],
};

export const livingBatch21Land: Record<string, LandOwnership> = {
  hawkwood: {
    owner: "The charity",
    complexity: "simple",
    tenure: "Educational charity estate",
    howHeld: "42 acres. Grade II house. Stroud Community Agriculture on the grounds.",
    narrative: "A Stroud teaching estate. Grade II house, 42 acres, community farm on the grounds.",
    divided: [
      { label: "House, gardens, pastures, woodland", holder: "The charity", share: "Charitable title", what: "Courses and rooms." },
    ],
  },
  keveral: {
    owner: "The housing co-op",
    complexity: "simple",
    tenure: "Co-operative organic farm",
    howHeld: "30 acres. Members rent plots and buildings. Camping by email.",
    narrative: "A Looe co-op.",
    divided: [
      { label: "Farm, orchard, meadow, campsite", holder: "The co-op", share: "Co-operative title", what: "Housing co-operative." },
    ],
  },
  "lower-shaw": {
    owner: "The borough, leased",
    complexity: "simple",
    tenure: "Council lease",
    howHeld: "Compulsory purchase 1974. Foundation for Alternatives lease 1975. About 3.5 acres.",
    narrative: "A Swindon smallholding on a lease. A weekend is not Old Shaw Lane.",
    divided: [
      { label: "Farmhouse, gardens, outbuildings", holder: "Borough, leased to the farm", share: "Lease", what: "Confirm current tenure with the farm." },
    ],
  },
  "liberty-hill": {
    owner: "The Kennetts",
    complexity: "simple",
    tenure: "Private dairy farm",
    howHeld: "About 240 acres. Inn in the 1825 house.",
    narrative: "A Rochester dairy. A room is not Liberty Hill.",
    divided: [
      { label: "Farm, barns, inn", holder: "The family", share: "Private", what: "A booking is not a deed." },
    ],
  },
  djanbung: {
    owner: "The college",
    complexity: "simple",
    tenure: "Private demonstration",
    howHeld: "Five acres. 74 Cecil Street. Hipcamp.",
    narrative: "A Nimbin college.",
    divided: [
      { label: "Food forest, ponds, campsite", holder: "The college", share: "Private", what: "Private demonstration." },
    ],
  },
  "luna-nueva": {
    owner: "The lodge",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "127 acres. Sacred Seeds. Casitas.",
    narrative: "A Chachagua finca. A casita is not the farm.",
    divided: [
      { label: "Farm, rainforest, lodge", holder: "The lodge", share: "Private", what: "SimpleBooking is not a deed." },
    ],
  },
  "la-loma": {
    owner: "The lodge",
    complexity: "simple",
    tenure: "Private cacao farm",
    howHeld: "55 acres. Boat only.",
    narrative: "A Bastimentos cacao farm. A bungalow is not Bahía Honda.",
    divided: [
      { label: "Rainforest, cacao, bungalows", holder: "The lodge", share: "Private", what: "A boat is not a deed." },
    ],
  },
  "rancho-margot": {
    owner: "The ranch",
    complexity: "simple",
    tenure: "Private regenerative ranch",
    howHeld: "About 400 acres. Bungalows and bunkhouse.",
    narrative: "An Arenal ranch.",
    divided: [
      { label: "Ranch, gardens, lodge", holder: "The ranch", share: "Private", what: "Private regenerative ranch." },
    ],
  },
  "fat-sheep": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private sheep farm",
    howHeld: "60 acres. Five cabins.",
    narrative: "A Hartland sheep farm.",
    divided: [
      { label: "Pasture, dairy, cabins", holder: "The farm", share: "Private", what: "ThinkReservations is not a deed." },
    ],
  },
  wonderfield: {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private regenerative grove",
    howHeld: "66 acres. Glamping and cottages.",
    narrative: "A Floral City grove.",
    divided: [
      { label: "Grove, food forest, lodgings", holder: "The farm", share: "Private", what: "Private regenerative farm." },
    ],
  },
};

export const livingBatch21Funding: Record<string, CommunityFunding> = {
  hawkwood: {
    overview: "Education charity. Courses and venue hire.",
    grantsHeadline: "No cash construction grant isolated here",
    privateHeadline: "Course and retreat fees",
    grants: [],
    private: [
      { source: "Course guests", amount: "2026 programmes", year: "1947", certainty: "estimated", kind: "courses", note: "Courses, retreats, and venue hire." },
    ],
  },
  keveral: {
    overview: "Housing co-op. Member enterprises and camping.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Veg boxes since 1997 and camping",
    grants: [],
    private: [
      { source: "Campers and box customers", amount: "Email camping", year: "1973", certainty: "estimated", kind: "business", note: "" },
    ],
  },
  "lower-shaw": {
    overview: "Course smallholding. Weekend fees.",
    grantsHeadline: "No cash construction grant isolated here",
    privateHeadline: "Listed 2026 events",
    grants: [],
    private: [
      { source: "Course guests", amount: "Farmhouse rooms", year: "1975", certainty: "estimated", kind: "courses", note: "A Swindon walk is not a closing." },
    ],
  },
  "liberty-hill": {
    overview: "Dairy inn. Lodging and meals.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "From $172 an adult a night, meals included",
    grants: [],
    private: [
      { source: "Inn guests", amount: "Two-night minimum", year: "1984", certainty: "documented", kind: "business", note: "A Rochester walk is not a closing." },
    ],
  },
  djanbung: {
    overview: "Permaculture college. Courses, tours, Hipcamp.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "PDC and Hipcamp",
    grants: [],
    private: [
      { source: "Students and campers", amount: "Hipcamp", year: "1993", certainty: "estimated", kind: "courses", note: "Courses, tours, and Hipcamp." },
    ],
  },
  "luna-nueva": {
    overview: "Regenerative lodge. Rooms and tours.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Casitas. SimpleBooking",
    grants: [],
    private: [
      { source: "Lodge guests", amount: "Rooms and farm tours", year: "1994", certainty: "estimated", kind: "business", note: "A Fortuna drive is not a closing." },
    ],
  },
  "la-loma": {
    overview: "Cacao farm lodge. All-inclusive.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Bungalow stays",
    grants: [],
    private: [
      { source: "Lodge guests", amount: "All-inclusive", year: "2003", certainty: "estimated", kind: "business", note: "A Bocas boat is not a closing." },
    ],
  },
  "rancho-margot": {
    overview: "Regenerative ranch lodge. Cloudbeds.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Bungalows and bunkhouse",
    grants: [],
    private: [
      { source: "Guests", amount: "Cloudbeds", year: "2004", certainty: "estimated", kind: "business", note: "Lodge, meals, ranch tours." },
    ],
  },
  "fat-sheep": {
    overview: "Sheep farm. Five cabins.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cabin nights of ThinkReservations",
    grants: [],
    private: [
      { source: "Cabin guests", amount: "Five cabins", year: "2016", certainty: "estimated", kind: "business", note: "A Hartland walk is not a closing." },
    ],
  },
  wonderfield: {
    overview: "Regenerative agritourism. Stays and gatherings.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Glamping, cottages, events",
    grants: [],
    private: [
      { source: "Guests and gatherings", amount: "Direct booking", year: "2018", certainty: "estimated", kind: "business", note: "" },
    ],
  },
};

export const livingBatch21VisitJoin: Record<string, VisitJoin> = {
  hawkwood: {
    visit: 4,
    join: 1,
    visitProcess: "Painswick Old Road. Book a course or ask about rooms. 01453 759034.",
    joinProcess: "Work here is through the charity, not by booking a room.",
  },
  keveral: {
    visit: 3,
    join: 2,
    visitProcess: "Looe. Camping by email. Pitchup has said it does not currently take bookings there. Write keveralfarm@yahoo.co.uk. Confirm a pitch, not a 1973 origin story.",
    joinProcess: "Housing co-op. Ten adults.",
  },
  "lower-shaw": {
    visit: 4,
    join: 1,
    visitProcess: "Old Shaw Lane. 2026 events calendar. Farmhouse rooms. 01793 771080. Not a nightly inn.",
    joinProcess: "WWOOF weekends. A listed weekend is not membership.",
  },
  "liberty-hill": {
    visit: 5,
    join: 1,
    visitProcess: "511 Liberty Hill. Contact. Two-night minimum. Dinner 6 pm, breakfast 8 am. (802) 767-3926.",
    joinProcess: "A family dairy. An inn night is not a share.",
  },
  djanbung: {
    visit: 4,
    join: 1,
    visitProcess: "74 Cecil Street. Hipcamp. Guided tours. Course camping.",
    joinProcess: "Residential volunteers, often former students.",
  },
  "luna-nueva": {
    visit: 5,
    join: 1,
    visitProcess: "Chachagua. SimpleBooking. Farm tour and workshops. About 25 minutes from La Fortuna.",
    joinProcess: "Lodge staff. A casita is not membership.",
  },
  "la-loma": {
    visit: 4,
    join: 1,
    visitProcess: "Bahía Honda. Boat only. Book. Cacao tour in the stay.",
    joinProcess: "Lodge crew. A bungalow is not a share.",
  },
  "rancho-margot": {
    visit: 5,
    join: 1,
    visitProcess: "El Castillo. Cloudbeds. Bungalows and bunkhouse. Forty minutes from La Fortuna.",
    joinProcess: "Ranch staff.",
  },
  "fat-sheep": {
    visit: 5,
    join: 1,
    visitProcess: "122 Best Road. ThinkReservations. Five cabins. (802) 436-4696.",
    joinProcess: "A family farm.",
  },
  wonderfield: {
    visit: 5,
    join: 1,
    visitProcess: "10707 E Gobbler Drive. Glamping, cottages, farmhouse. Gatherings.",
    joinProcess: "A private farm.",
  },
};

export const livingBatch21DailyLife: Record<string, DailyLife> = {
  hawkwood: {
    typical: [
      { title: "Biodynamic estate", detail: "42 acres of gardens, pastures, woodland." },
      { title: "Courses and retreats", detail: "27 bedrooms, up to 47 guests. Rooms on the same grounds." },
      { title: "Estate kitchen / SCA", detail: "Stroud Community Agriculture grows vegetables and keeps cows and sheep on the grounds." },
    ],
    unique: { title: "A college that kept the farm", detail: "Lily Whincop and Margaret Bennell opened this Stroud country house for adult education in 1947. In 2019 it rebranded as the Hawkwood Centre for Future Thinking; the 42 acres still run biodynamic, and Stroud Community Agriculture grows food on the same grounds the courses sleep on." },
  },
  keveral: {
    typical: [
      { title: "Organic plots", detail: "Polytunnels and orchard." },
      { title: "Veg boxes", detail: "Since 1997." },
      { title: "A meadow camp", detail: "Book by email." },
    ],
    unique: { title: "A co-op that still camps", detail: "A Looe housing co-op on 30 Soil Association acres, founded 1973. Members rent the land for their own work — vegetables, firewood, a meadow camp — and the weekly veg box has run since 1997." },
  },
  "lower-shaw": {
    typical: [
      { title: "Organic beds", detail: "Vegetables, herbs, flowers." },
      { title: "A listed weekend", detail: "2026 calendar." },
      { title: "Farmhouse rooms", detail: "Book a listed 2026 weekend." },
    ],
    unique: { title: "A WWOOF tea that stayed", detail: "Mid-1970s. A weekend is not Old Shaw Lane." },
  },
  "liberty-hill": {
    typical: [
      { title: "A dairy round", detail: "Holsteins." },
      { title: "Dinner at 6", detail: "Family-style." },
      { title: "Breakfast at 8", detail: "Included." },
    ],
    unique: { title: "An inn on the milking", detail: "Beth and Bob Kennett started this Rochester dairy in 1979 and opened the 1825 farmhouse to guests in 1984. Seven rooms, dinner at six, Holsteins still in the parlour." },
  },
  djanbung: {
    typical: [
      { title: "A food forest", detail: "Five acres." },
      { title: "Tours", detail: "Guided tours." },
      { title: "A Hipcamp pitch", detail: "Camping." },
    ],
    unique: { title: "A college on a cow pasture", detail: "1993. She took possession in 1994; Hipcamp still sits on that pasture." },
  },
  "luna-nueva": {
    typical: [
      { title: "Ginger and turmeric", detail: "1994." },
      { title: "Sacred Seeds", detail: "Over 300 species." },
      { title: "A casita", detail: "Casitas and bungalows." },
    ],
    unique: { title: "A lodge that still farms", detail: "Organic ginger and turmeric farming started in 1994; the lodge now sits on 127 regenerative Chachagua acres with a Sacred Seeds Sanctuary of more than 300 tropical species." },
  },
  "la-loma": {
    typical: [
      { title: "Cacao", detail: "Tour in the stay." },
      { title: "A boat", detail: "Boat only. There is no road." },
      { title: "Farm-to-table", detail: "Kitchen fed from the farm." },
    ],
    unique: { title: "A farm that grew a lodge", detail: "Purchase 2003. A bungalow is not Bahía Honda." },
  },
  "rancho-margot": {
    typical: [
      { title: "A 400-acre ranch", detail: "About 400 acres at El Castillo." },
      { title: "Dairy, pigs, chickens, gardens", detail: "Dairy, pigs, chickens, and gardens on the ranch." },
      { title: "Bungalow or bunk", detail: "Nineteen bungalows and twenty bunkhouse quarters." },
    ],
    unique: { title: "Carbon-neutral 2012", detail: "Juan Sostheim opened this El Castillo ranch in 2004; more than four hundred acres by Lake Arenal now run dairy, pigs, chickens, and gardens beside nineteen bungalows, and the ranch put a carbon-neutral mark on the door in 2012." },
  },
  "fat-sheep": {
    typical: [
      { title: "Sheep and cheese", detail: "Edible Vermont / fatsheepfarmvermont.com." },
      { title: "Five cabins", detail: "That page." },
      { title: "Optional chores", detail: "TripAdvisor / Edible Vermont." },
    ],
    unique: { title: "A farm that built cabins", detail: "2016 of Edible Vermont." },
  },
  wonderfield: {
    typical: [
      { title: "A 66-acre grove", detail: "Food forest, gardens, pasture." },
      { title: "Glamping and cottages", detail: "Tents, cottages, farmhouse." },
      { title: "Gatherings", detail: "Events and farm tours." },
    ],
    unique: { title: "A grove that hosts", detail: "Sixty-six acres of a retired Floral City grove, bought in 2016, now pasture, gardens, and glamping beside Flying Eagle Preserve. Co-founded in 2018 after Tara Hubbard’s first yoga retreat; tents, cottages, and the farmhouse." },
  },
};

export const livingBatch21Informal: Record<string, InformalAgreement[]> = {
  hawkwood: [
    { kind: "course-host", why: "2026 programmes." },
    { kind: "guest-stay", why: "Residential courses and B&B rooms." },
    { kind: "land-care", why: "Biodynamic estate." },
    { kind: "animals-stock", why: "Community farm." },
  ],
  keveral: [
    { kind: "guest-stay", why: "Camping by email. Pitchup has said it does not currently take bookings there." },
    { kind: "land-care", why: "Organic plots." },
    { kind: "kitchen-table", why: "A small co-op. Visitors Barn." },
    { kind: "volunteer-intern", why: "WWOOF history." },
  ],
  "lower-shaw": [
    { kind: "course-host", why: "2026 calendar." },
    { kind: "guest-stay", why: "Farmhouse rooms. Not a nightly inn." },
    { kind: "volunteer-intern", why: "WWOOF weekends." },
    { kind: "land-care", why: "Organic gardens." },
  ],
  "liberty-hill": [
    { kind: "guest-stay", why: "Seven rooms. Two-night minimum." },
    { kind: "kitchen-table", why: "Dinner and breakfast." },
    { kind: "animals-stock", why: "Dairy." },
    { kind: "land-care", why: "240 acres. Guests stay off rows they were not asked onto." },
  ],
  djanbung: [
    { kind: "guest-stay", why: "Hipcamp." },
    { kind: "course-host", why: "PDC." },
    { kind: "land-care", why: "Food forest." },
    { kind: "volunteer-intern", why: "Residential volunteers." },
  ],
  "luna-nueva": [
    { kind: "guest-stay", why: "Casitas." },
    { kind: "course-host", why: "Farm tour and workshops." },
    { kind: "land-care", why: "127 acres. Guests stay off beds they were not asked onto." },
    { kind: "animals-stock", why: "Cow milking — confirm current." },
  ],
  "la-loma": [
    { kind: "guest-stay", why: "Bungalows. Boat only." },
    { kind: "course-host", why: "Cacao and permaculture tour." },
    { kind: "land-care", why: "55 acres." },
    { kind: "kitchen-table", why: "Farm-to-table." },
  ],
  "rancho-margot": [
    { kind: "guest-stay", why: "Bungalows and bunkhouse." },
    { kind: "animals-stock", why: "Dairy, pigs, chickens." },
    { kind: "land-care", why: "400 acres." },
    { kind: "course-host", why: "Ranch tours." },
  ],
  "fat-sheep": [
    { kind: "guest-stay", why: "Five cabins." },
    { kind: "animals-stock", why: "Sheep / Edible Vermont." },
    { kind: "course-host", why: "Cheese and sourdough of Edible Vermont." },
    { kind: "land-care", why: "60 acres." },
  ],
  wonderfield: [
    { kind: "guest-stay", why: "Glamping and cottages." },
    { kind: "course-host", why: "Gatherings and events." },
    { kind: "land-care", why: "66-acre grove." },
    { kind: "volunteer-intern", why: "Volunteer with us." },
  ],
};

export const livingBatch21Governance: Record<string, Governance> = {
  hawkwood: {
    model: "board",
    modelLabel: "Educational charity on a biodynamic estate",
    unique: false,
    summary: "Arts and education charity on 42 acres. You book a course or a room.",
    whoDecides: "Trustees and staff.",
    bodies: [
      { name: "Hawkwood College Limited", role: "The registered charity. Courses and rooms." },
      { name: "The estate", role: "42 acres. Community farm." },
    ],
    howItRuns: "Book a course or a room.",
  },
  keveral: {
    model: "cooperative",
    modelLabel: "Organic housing co-op with a campsite",
    unique: false,
    summary: "1973. Ten adults.",
    whoDecides: "The co-op.",
    bodies: [
      { name: "The housing co-op", role: "Members." },
      { name: "The campsite", role: "Book by email." },
    ],
    howItRuns: "Write keveralfarm@yahoo.co.uk. Pitchup has said it does not currently take bookings there.",
  },
  "lower-shaw": {
    model: "hybrid",
    modelLabel: "Leased smallholding of weekend courses",
    unique: false,
    summary: "1975 lease. 2026 calendar. You book a weekend. You do not buy Old Shaw Lane.",
    whoDecides: "The farm.",
    bodies: [
      { name: "The farm", role: "Events." },
      { name: "The lease", role: "Borough land." },
    ],
    howItRuns: "01793 771080. Not a nightly inn.",
  },
  "liberty-hill": {
    model: "founder",
    modelLabel: "Family dairy inn",
    unique: false,
    summary: "Kennetts 1979. Inn 1984. You book a room. You do not buy Liberty Hill.",
    whoDecides: "The family.",
    bodies: [
      { name: "The farm", role: "240 acres." },
      { name: "The inn", role: "Seven rooms." },
    ],
    howItRuns: "beth@libertyhillfarm.com. Two-night minimum.",
  },
  djanbung: {
    model: "founder",
    modelLabel: "Permaculture college on five acres",
    unique: false,
    summary: "Robyn Francis 1993. You book a pitch. You do not buy Cecil Street.",
    whoDecides: "The college.",
    bodies: [
      { name: "Permaculture College Australia", role: "The college." },
      { name: "The gardens", role: "Five acres." },
    ],
    howItRuns: "Hipcamp or a course.",
  },
  "luna-nueva": {
    model: "founder",
    modelLabel: "Regenerative farm lodge",
    unique: false,
    summary: "1994. You book a casita. You do not buy the finca.",
    whoDecides: "The lodge.",
    bodies: [
      { name: "Finca Luna Nueva", role: "127 acres." },
      { name: "The lodge", role: "SimpleBooking." },
    ],
    howItRuns: "Reserve.",
  },
  "la-loma": {
    model: "founder",
    modelLabel: "Cacao farm lodge",
    unique: false,
    summary: "2003. You book a bungalow. You do not buy Bahía Honda.",
    whoDecides: "The lodge.",
    bodies: [
      { name: "La Loma", role: "55 acres." },
      { name: "The kitchen", role: "Farm-to-table." },
    ],
    howItRuns: "Boat. Book.",
  },
  "rancho-margot": {
    model: "founder",
    modelLabel: "Regenerative ranch lodge",
    unique: false,
    summary: "Sostheim 2004. Private regenerative ranch and lodge.",
    whoDecides: "The ranch.",
    bodies: [
      { name: "Rancho Margot", role: "400 acres." },
      { name: "The lodge", role: "Cloudbeds." },
    ],
    howItRuns: "Check availability.",
  },
  "fat-sheep": {
    model: "founder",
    modelLabel: "Family sheep farm with cabins",
    unique: false,
    summary: "Kaplan and Heyman 2016 of Edible Vermont. You book a cabin. You do not buy Best Road.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Fat Sheep Farm", role: "60 acres." },
      { name: "The cabins", role: "Five." },
    ],
    howItRuns: "ThinkReservations.",
  },
  wonderfield: {
    model: "founder",
    modelLabel: "Regenerative grove and gatherings",
    unique: false,
    summary: "2018. Private regenerative farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Wonderfield Farm", role: "66 acres." },
      { name: "The stay", role: "Glamping and cottages." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch21Leaders: Record<string, VillageLeaders> = {
  hawkwood: {
    people: [
      { name: "Alicia Carey", role: "Chief Executive Officer." },
      { name: "Lord Michael Bichard", role: "Chair of Trustees." },
    ],
    office: { url: "https://www.hawkwoodcollege.co.uk/", email: "info@hawkwoodcollege.co.uk", phone: "01453 759034", address: "Painswick Old Road, Stroud GL6 7QW" },
  },
  keveral: {
    people: [],
    office: { url: "https://diggersanddreamers.org.uk/community/keveral-farm-community", email: "keveralfarm@yahoo.co.uk", address: "Keveral Farm, Looe, Cornwall PL13 1PA" },
  },
  "lower-shaw": {
    people: [],
    office: { url: "https://www.lowershawfarm.co.uk/", phone: "01793 771080", address: "Old Shaw Lane, West Swindon SN5 5PJ" },
  },
  "liberty-hill": {
    people: [],
    office: { url: "https://www.libertyhillfarm.com/", email: "beth@libertyhillfarm.com", phone: "(802) 767-3926", address: "511 Liberty Hill, Rochester, VT 05767" },
  },
  djanbung: {
    people: [],
    office: { url: "https://permaculture.com.au/", address: "74 Cecil Street, Nimbin, NSW" },
  },
  "luna-nueva": {
    people: [],
    office: { url: "https://fincalunanuevalodge.com/", address: "Chachagua, near La Fortuna, Alajuela, Costa Rica" },
  },
  "la-loma": {
    people: [],
    office: { url: "https://www.thejunglelodge.com/", address: "Bahía Honda, Isla Bastimentos, Bocas del Toro, Panama" },
  },
  "rancho-margot": {
    people: [],
    office: { url: "https://www.ranchomargot.com/", address: "El Castillo, Lake Arenal, Alajuela, Costa Rica" },
  },
  "fat-sheep": {
    people: [],
    office: { url: "https://www.fatsheepfarmvermont.com/", email: "info@fatsheepfarmvermont.com", phone: "(802) 436-4696", address: "122 Best Road, Hartland, VT 05089" },
  },
  wonderfield: {
    people: [],
    office: { url: "https://wonderfieldfarm.com/", email: "info@wonderfieldfarm.com", address: "10707 E Gobbler Drive, Floral City, FL 34436" },
  },
};

export const livingBatch21Accommodations: Record<string, Accommodations> = {
  hawkwood: {
    visitor: {
      overview: "Twenty-seven bedrooms, up to 47 guests. Courses. B&B and venue hire. Confirm current with 01453 759034. Not a public campground.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["course room", "B&B"], detail: "27 bedrooms. Shared bathrooms on corridors. Confirm current." },
      other: { available: false, types: [], detail: "None listed as a public inn." },
    },
    resident: {
      overview: "Charity staff. Not a housing coop.",
      camping: { available: false, types: [], detail: "People work the estate." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  keveral: {
    visitor: {
      overview: "Camping by email. Pitchup has said it does not currently take bookings there. Confirm a pitch with keveralfarm@yahoo.co.uk.",
      camping: { available: true, types: ["tent"], detail: "Meadow camping. Book by email." },
      rooms: { available: false, types: [], detail: "Visitors Barn has been used for groups. Not a public inn of record." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Housing co-op. Ten adults.",
      camping: { available: false, types: [], detail: "People live on the farm." },
      rooms: { available: true, types: [], detail: "Member dwellings. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lower-shaw": {
    visitor: {
      overview: "Farmhouse and veranda rooms booking page. Book a listed 2026 weekend, not a nightly inn. Some events non-residential.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["farmhouse", "veranda room"], detail: "Bring towels." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Farm residents.",
      camping: { available: false, types: [], detail: "People live in the house." },
      rooms: { available: true, types: [], detail: "Private. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "liberty-hill": {
    visitor: {
      overview: "Seven guest rooms. Shared bathrooms. Dinner and breakfast included. Two-night minimum. From $172 an adult — confirm current.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: ["inn room"], detail: "Five queens, one twin room, one four-twin." },
      other: { available: false, types: [], detail: "None listed as camping." },
    },
    resident: {
      overview: "The Kennett household.",
      camping: { available: false, types: [], detail: "People live on the farm." },
      rooms: { available: true, types: [], detail: "Private farmhouse. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  djanbung: {
    visitor: {
      overview: "Hipcamp tent site. Course camping. Railway carriages at times for volunteers — confirm current.",
      camping: { available: true, types: ["tent", "campervan"], detail: "Hipcamp: a private clearing. Free camping on PDCs." },
      rooms: { available: false, types: [], detail: "No public inn. Volunteer carriages — confirm." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The college.",
      camping: { available: false, types: [], detail: "People work the gardens." },
      rooms: { available: true, types: [], detail: "Private. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "luna-nueva": {
    visitor: {
      overview: "Casitas, bungalows, Casa Luna, earth-bag house rooms page. SimpleBooking.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["casita", "bungalow", "suite"], detail: "About 40 beds." },
      other: { available: true, types: ["earth-bag house"], detail: "Casa de Barro." },
    },
    resident: {
      overview: "Lodge staff.",
      camping: { available: false, types: [], detail: "People work the finca." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "la-loma": {
    visitor: {
      overview: "Open-air bungalows. All-inclusive. Boat only.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["bungalow", "lodge suite"], detail: "Treetop bungalows." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Lodge crew.",
      camping: { available: false, types: [], detail: "People work the cacao." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rancho-margot": {
    visitor: {
      overview: "Nineteen bungalows and twenty bunkhouse quarters. Cloudbeds. Meals often included — confirm current.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["bungalow", "bunkhouse"], detail: "Nineteen bungalows and twenty bunkhouse quarters." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Ranch staff.",
      camping: { available: false, types: [], detail: "People work the ranch." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "fat-sheep": {
    visitor: {
      overview: "Five private cabins. ThinkReservations. Optional chores.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cabin"], detail: "Sunrise, Four Corners, Ascutney, Lull Brook, Sunset." },
      other: { available: false, types: [], detail: "Horse stalls are not lodging." },
    },
    resident: {
      overview: "The farm household.",
      camping: { available: false, types: [], detail: "People live on the farm." },
      rooms: { available: true, types: [], detail: "Private. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  wonderfield: {
    visitor: {
      overview: "Glamping tents, Kitschy Cottage, Quaint Cottage, farmhouse. Direct booking.",
      camping: { available: true, types: ["glamping tent"], detail: "Magnolia, Dragonfly, Butterfly, Citrus tents." },
      rooms: { available: true, types: ["cottage", "farmhouse"], detail: "Kitschy Cottage, Quaint Cottage, farmhouse." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The farm.",
      camping: { available: false, types: [], detail: "People work the grove." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
