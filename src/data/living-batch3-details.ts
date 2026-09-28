import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch3LegalEntities: Record<string, LegalEntity[]> = {
  "kibbutz-ketura": [
    { name: "Kibbutz Ketura", kind: "Kibbutz", role: "Cooperative settlement on national land, Kibbutz Movement, founded November 1973.", status: "current", layer: "membership", year: "1973", forms: ["Kibbutz"] },
    { name: "Israel Lands Authority ground", kind: "State land", role: "The dirt under the orchards, solar fields, and houses.", status: "current", layer: "land", forms: ["State land"] },
    { name: "Arava Institute for Environmental Studies", kind: "Educational nonprofit", role: "Founded by members; campus on the kibbutz.", status: "current", layer: "education", year: "1996", forms: ["Nonprofit foundation"] },
    { name: "AlgaTechnologies, Ltd.", kind: "Private company", role: "Haematococcus / AstaPure since 1998.", status: "current", layer: "enterprise", year: "1998", forms: ["Limited company"] }
  ],
  "old-hall": [
    { name: "Old Hall Community", kind: "Nonprofit intentional community", role: "Residential household in a former friary, 1974–present.", status: "current", layer: "membership", year: "1974", forms: ["Nonprofit foundation"] },
    { name: "Old Hall farmland", kind: "Community land", role: "About 65 acres of organic land around the building.", status: "current", layer: "land", forms: ["Property trust"] }
  ],
  commonground: [
    { name: "Commonground", kind: "Not-for-profit social enterprise", role: "Venue and intentional community on 95 acres, 1984.", status: "current", layer: "membership", year: "1984", forms: ["Nonprofit foundation"] },
    { name: "Seymour bush property", kind: "Cooperative land", role: "95 acres bought by original co-op members.", status: "current", layer: "land", forms: ["Housing cooperative"] }
  ],
  breitenbush: [
    { name: "Breitenbush Hot Springs worker cooperative", kind: "Worker cooperative", role: "Owns the retreat business; members live on the land. Formed 1989.", status: "current", layer: "membership", year: "1989", forms: ["Housing cooperative"] },
    { name: "154-acre Cascades site", kind: "Cooperative land", role: "Bought from Alex Beamer in 1985.", status: "current", layer: "land", year: "1985", forms: ["Housing cooperative"] }
  ],
  gyurufu: [
    { name: "Gyűrűfű Foundation", kind: "Hungarian foundation", role: "Registered 1991. Environmental organisation of the eco-villagers.", status: "current", layer: "education", year: "1991", forms: ["Nonprofit foundation"] },
    { name: "Resident families", kind: "Unincorporated community association", role: "About 10 families, ~30 people, on the old village site.", status: "current", layer: "membership", forms: ["Unincorporated community"] }
  ],
  zajezova: [
    { name: "Zaježka network of NGOs and households", kind: "Unincorporated community association", role: "Decentralised eco-settlement around the old village, from 1991.", status: "current", layer: "membership", year: "1991", forms: ["Unincorporated community"] },
    { name: "Vzdelávacie centrum Zaježová", kind: "Educational nonprofit", role: "Courses and volunteer hosting on the hill.", status: "current", layer: "education", forms: ["Nonprofit foundation"] }
  ],
  "sadhana-forest": [
    { name: "Sadhana Forest", kind: "International nonprofit", role: "Reforestation and vegan volunteer community, 2003–present.", status: "current", layer: "education", year: "2003", forms: ["Nonprofit foundation"] },
    { name: "Auroville-area land (70 acres)", kind: "Stewarded project land", role: "Formerly barren laterite restored as forest camp.", status: "current", layer: "land", forms: ["Property trust"] }
  ],

  "living-energy-farm": [
    { name: "Living Energy Farm", kind: "Unincorporated community association", role: "Off-grid egalitarian household and farm, 2010–present. FEC listed.", status: "current", layer: "membership", year: "2010", forms: ["Unincorporated community"] },
    { name: "127 acres, Louisa County", kind: "Community land", role: "Farm, woodland, microgrid.", status: "current", layer: "land", forms: ["Property trust"] }
  ],
  "ecodorp-boekel": [
    { name: "Ecodorp Boekel", kind: "Collective rental eco-village", role: "36 climate-positive rental homes, VrijCoop finance.", status: "current", layer: "membership", year: "2016", forms: ["Housing cooperative"] },
    { name: "VrijCoop", kind: "Cooperative association", role: "Collective ownership and finance vehicle for Dutch eco-villages.", status: "current", layer: "network", forms: ["Housing cooperative"] }
  ]
};

export const livingBatch3Land: Record<string, LandOwnership> = {
  "kibbutz-ketura": {
    owner: "Kibbutz Ketura on Israel Lands Authority ground",
    complexity: "simple",
    tenure: "Kibbutz / national land",
    howHeld: "Date orchards, solar fields, housing, and the Arava Institute campus on settlement land. No private house lots.",
    narrative: "A desert farm that became an institute, an algae plant, and a solar field without splitting the dirt into deeds.",
    divided: []
  },
  "old-hall": {
    owner: "Old Hall Community, East Bergholt",
    complexity: "simple",
    tenure: "Community land around a historic house",
    howHeld: "Former friary plus about 65 acres of organic farmland. Occupancy in the building, not a map of private lots.",
    narrative: "One large house and a farm that have to be lived in to be kept. Fifty years of that bargain.",
    divided: []
  },
  commonground: {
    owner: "Commonground co-op, Seymour",
    complexity: "simple",
    tenure: "Not-for-profit property",
    howHeld: "95 acres of regenerated bush bought in 1984. Venue buildings and a resident household on the same title.",
    narrative: "A movement kitchen with a long driveway. The co-op holds the bush so groups can still book a cheap weekend.",
    divided: []
  },
  breitenbush: {
    owner: "Breitenbush worker cooperative",
    complexity: "simple",
    tenure: "Worker-owned land and business",
    howHeld: "154 acres bought in 1985. The 1989 co-op owns the retreat. Workers live on site.",
    narrative: "A river, wells, and a lodge that only stay a community if the people who make the beds own them.",
    divided: []
  },
  gyurufu: {
    owner: "Gyűrűfű Foundation and resident families",
    complexity: "split",
    tenure: "Foundation plus family holdings",
    howHeld: "Abandoned village site in the Zselic. Foundation 1991. Families on houses. Published area figures do not all match.",
    narrative: "A deserted village that became a handful of houses and a much larger care for the hills.",
    divided: [
      { label: "Village houses", holder: "Resident families", share: "~10 families", what: "Homes and gardens" },
      { label: "Foundation / watershed land", holder: "Gyűrűfű Foundation", share: "Larger than the lived hamlet", what: "Conservation and the public project" }
    ]
  },
  zajezova: {
    owner: "Many small holders plus education centres",
    complexity: "split",
    tenure: "Dispersed private and NGO land",
    howHeld: "An old cadastral village. Houses and meadows in several hands. Centres host the public week.",
    narrative: "No single deed says Zaježka. The name is the people who stayed and the people who came back.",
    divided: [
      { label: "Households", holder: "Families", share: "Scattered houses", what: "Homes and small farms" },
      { label: "Centres", holder: "NGOs", share: "Course and volunteer sites", what: "The public door" }
    ]
  },
  "sadhana-forest": {
    owner: "Sadhana Forest project on Auroville-area land",
    complexity: "simple",
    tenure: "Stewarded restoration land",
    howHeld: "70 acres of formerly barren laterite at Auroville, plus later camps in other countries. Volunteers do not receive title.",
    narrative: "The forest is the holding. People pass through. The trees stay.",
    divided: []
  },

  "living-energy-farm": {
    owner: "Living Energy Farm household",
    complexity: "simple",
    tenure: "Community land",
    howHeld: "127 acres in Louisa County. Off-grid farm, woodland, microgrid. No lots.",
    narrative: "A Piedmont farm whose point is that the energy system can be copied without a fortune.",
    divided: []
  },
  "ecodorp-boekel": {
    owner: "Collective rental vehicle (VrijCoop / Ecodorp Boekel)",
    complexity: "simple",
    tenure: "Rental eco-village",
    howHeld: "36 homes, including care and refugee dwellings, held for rent rather than freehold sale.",
    narrative: "A Brabant wood-edge that tried to make climate-positive houses that you apply for, rather than flip.",
    divided: []
  }
};

export const livingBatch3Funding: Record<string, CommunityFunding> = {
  "kibbutz-ketura": {
    overview: "A kibbutz economy of dates, algae, solar partnership, the Institute, and a guest house.",
    grantsHeadline: "Institute and green-kibbutz programmes",
    privateHeadline: "Dates, algae, solar, guests",
    grants: [
      { source: "Arava Institute (member-founded; student tuition and donations)", amount: "Ongoing campus", certainty: "estimated", kind: "donation", note: "arava.org. Separate books from the kibbutz kitchen." }
    ],
    private: [
      { source: "Date orchards, AlgaTechnologies, Arava Power partnership, Keren Kolot guest house", amount: "Settlement businesses", certainty: "documented", kind: "business", note: "Wikipedia and kibbutz pages." }
    ]
  },
  "old-hall": {
    overview: "A residential nonprofit: household contributions, farm, volunteers.",
    grantsHeadline: "None assembled as a construction grant",
    privateHeadline: "Households and farm",
    grants: [],
    private: [
      { source: "Member contributions and organic farm", amount: "Household of ~60", certainty: "estimated", kind: "member-equity", note: "Confirm current shares before you treat a feature as a fee table." }
    ]
  },
  commonground: {
    overview: "A subsidised social-change venue on co-op land, plus a resident household.",
    grantsHeadline: "Historic co-op purchase support",
    privateHeadline: "Venue hire and resident work",
    grants: [
      { source: "Original 1984 purchase with support from organisations and individuals", amount: "95 acres", year: "1984", certainty: "documented", kind: "donation", note: "common-ground.org.au origin story." }
    ],
    private: [
      { source: "Conference and retreat hire at subsidised rates", amount: "Ongoing", certainty: "documented", kind: "courses", note: "The public till." }
    ]
  },
  breitenbush: {
    overview: "A worker co-op retreat: lodging, workshops, off-grid plant.",
    grantsHeadline: "None assembled as the founding till",
    privateHeadline: "Guest stays and workshops",
    grants: [],
    private: [
      { source: "Retreat lodging, soaks, and workshops", amount: "Seasonal guest economy", certainty: "documented", kind: "courses", note: "Lodging, soaks, and workshops." },
      { source: "Worker-owner shares", amount: "Membership after employment", certainty: "documented", kind: "member-equity", note: "1989 co-op." }
    ]
  },
  gyurufu: {
    overview: "Households, a 1991 foundation, a guesthouse.",
    grantsHeadline: "Foundation programmes",
    privateHeadline: "Families and Lovastanya guesthouse",
    grants: [
      { source: "Gyűrűfű Foundation environmental work", amount: "Ongoing", certainty: "estimated", kind: "grant", note: "Foundation registered 1991. Confirm current funders on the village site." }
    ],
    private: [
      { source: "Guesthouse and household livelihoods", amount: "~30 people", certainty: "estimated", kind: "business", note: "Lovastanya Vendégház in 2018 accounts." }
    ]
  },
  zajezova: {
    overview: "Dispersed livelihoods plus education-centre courses and EU volunteer programmes.",
    grantsHeadline: "Erasmus / ESC volunteer hosting",
    privateHeadline: "Households and small farms",
    grants: [
      { source: "EU youth and volunteer programmes hosted at centres", amount: "Course-by-course", certainty: "documented", kind: "grant", note: "GEN Europe training write-ups." }
    ],
    private: [
      { source: "Household farms and centre fees", amount: "Dispersed", certainty: "estimated", kind: "business", note: "Households and education-centre fees." }
    ]
  },
  "sadhana-forest": {
    overview: "Donation-based volunteer camps. Short-stay food contributions. No lot sales.",
    grantsHeadline: "Awards and donations",
    privateHeadline: "Volunteer food contributions",
    grants: [
      { source: "Humanitarian Water and Food Award (2010) and later responsible-tourism awards", amount: "Recognition plus donations", year: "2010", certainty: "documented", kind: "award", note: "Wikipedia." }
    ],
    private: [
      { source: "Visitor and short-term volunteer meal contributions; long-term supported by the pot", amount: "Donation-based", certainty: "documented", kind: "donation", note: "sadhanaforest.org." }
    ]
  },

  "living-energy-farm": {
    overview: "Seed growing, a small membership, volunteer labour, donations.",
    grantsHeadline: "None assembled as a land-purchase grant",
    privateHeadline: "Seeds and the household",
    grants: [],
    private: [
      { source: "Seed growing for Southern Exposure Seed Exchange and others", amount: "Farm income", certainty: "documented", kind: "business", note: "Seed income for the household." }
    ]
  },
  "ecodorp-boekel": {
    overview: "Social rental and VrijCoop collective finance.",
    grantsHeadline: "Dutch sustainable-building recognition",
    privateHeadline: "Rents",
    grants: [
      { source: "2021 most sustainable organisation in the Netherlands (jury award)", amount: "Recognition", year: "2021", certainty: "documented", kind: "award", note: "GEN Europe / ecodorpboekel.nl." }
    ],
    private: [
      { source: "36 rental homes", amount: "Social / collective rent", certainty: "documented", kind: "other", note: "VrijCoop model. Confirm current rents on the village site." }
    ]
  }
};

export const livingBatch3VisitJoin: Record<string, VisitJoin> = {
  "kibbutz-ketura": {
    visit: 4,
    join: 2,
    visitProcess: "About 50 km north of Eilat. Keren Kolot guest house and the Arava Institute campus. ketura.org.il and arava.org. Book. Members’ houses are the settlement.",
    joinProcess: "Kibbutz membership on national land. Institute students and interns are a semester, not a share of the dates."
  },
  "old-hall": {
    visit: 3,
    join: 3,
    visitProcess: "Rectory Hill, East Bergholt, Suffolk. A lived-in friary. Write. Volunteer stays exist. The farm is work.",
    joinProcess: "The community has been seeking members. Visit, volunteer, then a household conversation. There is no lot to buy."
  },
  commonground: {
    visit: 4,
    join: 2,
    visitProcess: "Near Seymour, Victoria. common-ground.org.au. Book the conference centre. The bush is a venue. Residents live there too.",
    joinProcess: "A resident community of people who live and work on the property. A subsidised workshop weekend is not an application."
  },
  breitenbush: {
    visit: 5,
    join: 2,
    visitProcess: "Willamette National Forest. Book a soak, a cabin, a workshop. Off-grid on purpose. Follow the guest rules.",
    joinProcess: "Employment first, then a path to a worker-owner share. A weekend in the pools is not a membership."
  },
  gyurufu: {
    visit: 3,
    join: 2,
    visitProcess: "Zselic hills, southwest Hungary. Guesthouse: Lovastanya Vendégház. A small living village. Write.",
    joinProcess: "A handful of families. Confirm current openings with the foundation. A guesthouse night is not a house."
  },
  zajezova: {
    visit: 3,
    join: 2,
    visitProcess: "Zaježová, Zvolen District. The education centre. Courses and volunteer stays. Households are private.",
    joinProcess: "Decentralised. You join a household or a centre, not a single co-op of the whole hill. Relationship-led, slow."
  },
  "sadhana-forest": {
    visit: 5,
    join: 2,
    visitProcess: "Near Auroville. sadhanaforest.org. Free day tours, meals, the tea hut. Volunteers welcome year-round with a minimum stay. Vegan campus.",
    joinProcess: "Long-term volunteer is the living path. Auroville membership is a different process through ATR. Sadhana does not sell lots."
  },

  "living-energy-farm": {
    visit: 3,
    join: 2,
    visitProcess: "Louisa County, Virginia. Guided tours about once a month, often Monday afternoons. Book. The farm is a home of a dozen.",
    joinProcess: "Residential volunteers two weeks to three months, 30–35 hours a week. Membership is a small egalitarian household. Write first."
  },
  "ecodorp-boekel": {
    visit: 3,
    join: 3,
    visitProcess: "Boekel, North Brabant. ecodorpboekel.nl. An inhabited rental village of round houses. Arrange. These are homes, including care dwellings.",
    joinProcess: "Apply for a rental home through the village / VrijCoop process. Four informal-care and two refugee houses have their own paths."
  }
};

export const livingBatch3DailyLife: Record<string, DailyLife> = {
  "kibbutz-ketura": {
    typical: [
      { title: "Dates and desert heat", detail: "Orchards, irrigation, the Arava week." },
      { title: "Institute campus", detail: "Students and interns on the same dirt as the dining room." },
      { title: "Pluralist public square", detail: "Kashrut and Sabbath in shared spaces; observant and secular members together." }
    ],
    unique: { title: "Methuselah in the orchard", detail: "A Judean date germinated from a 2,000-year-old seed, planted here, is the story the orchards tell visitors." }
  },
  "old-hall": {
    typical: [
      { title: "Shared kitchen", detail: "A large historic building, about 60 people, meals together." },
      { title: "Organic farm", detail: "Sixty-five acres that still have to be worked." },
      { title: "The building itself", detail: "A former friary that needs residents as much as they need a roof." }
    ],
    unique: { title: "Fifty years in one house", detail: "1974 to now, same hall, same bargain: live here and keep it standing. About 60 people on 65 acres; they have been seeking new members." }
  },
  commonground: {
    typical: [
      { title: "Venue weekends", detail: "Social-change groups in the conference rooms." },
      { title: "Bush work", detail: "95 acres of regenerated country that still needs hands." },
      { title: "Resident week", detail: "A smaller household when the booked groups have gone home." }
    ],
    unique: { title: "A movement kitchen with a long driveway", detail: "The co-op bought the Seymour block so the work of change would have somewhere to sleep." }
  },
  breitenbush: {
    typical: [
      { title: "Guest service", detail: "Meals, cabins, pools. Workers live across the footbridge." },
      { title: "Off-grid plant", detail: "Hydro on the river, geothermal in the buildings, electricity audits." },
      { title: "Co-op meetings", detail: "Handbook, board, a share after you have already been doing the work." }
    ],
    unique: { title: "Heat from the wells, power from the river", detail: "A Cascades co-op that can house guests and workers without a diesel plant as the story of the week." }
  },
  gyurufu: {
    typical: [
      { title: "Few houses, big hills", detail: "About ten families. The Zselic is the rest of the view." },
      { title: "Guesthouse days", detail: "Lovastanya when visitors come." },
      { title: "Foundation paper", detail: "The 1991 organisation that still has to match a living hamlet." }
    ],
    unique: { title: "An abandoned village, refounded", detail: "Hungary’s first eco-village is a handful of people on a name that was already on the map." }
  },
  zajezova: {
    typical: [
      { title: "Dispersed houses", detail: "Small groups of settlements, meadows, timber." },
      { title: "Centre weeks", detail: "Courses, volunteers, Erasmus groups." },
      { title: "Ordinary rural work", detail: "Crafts, gardens, the slow joining of a household." }
    ],
    unique: { title: "A village that is a network", detail: "Zaježka is the name for cooperation, not a single landlord’s map." }
  },
  "sadhana-forest": {
    typical: [
      { title: "Seva in the trees", detail: "Planting, mulching, watering in season. 25–35 hours a week." },
      { title: "Vegan kitchen", detail: "Community meals. Short-stay people contribute; long-term live from the pot." },
      { title: "Tours and the tea hut", detail: "Day visitors. Children’s Land. The sanctuary." }
    ],
    unique: { title: "A forest that outlasts the volunteer", detail: "Twenty thousand people have passed through. The restored acres are what remains of each of them." }
  },

  "living-energy-farm": {
    typical: [
      { title: "Sun-timed domestic life", detail: "DC loads, daylight-drive appliances, a refrigerator that has to match the array." },
      { title: "Seed and garden", detail: "Most of the food. Seed growing for income." },
      { title: "Small table", detail: "A dozen people. Volunteers in season." }
    ],
    unique: { title: "A few hundred watts per person", detail: "In Louisa County, a small egalitarian household has run 127 off-grid acres since about 2010: a DC microgrid, nickel-iron batteries, and seed income instead of the grid." }
  },
  "ecodorp-boekel": {
    typical: [
      { title: "Round timber houses", detail: "36 rentals, some on stilts, forest edge." },
      { title: "Mixed households", detail: "Ordinary renters, informal care, two refugee houses." },
      { title: "Living-lab visitors", detail: "The award brought cameras. The houses still have to be homes." }
    ],
    unique: { title: "Climate-positive as rental", detail: "The founding bet was that you should not have to buy a speculation to live in a round house." }
  }
};

export const livingBatch3Informal: Record<string, InformalAgreement[]> = {
  "kibbutz-ketura": [
    { kind: "quiet-practice", why: "Pluralist public square: kashrut and Sabbath in shared spaces, mixed observance at home." },
    { kind: "guest-stay", why: "Keren Kolot and Institute students. Members’ houses stay the settlement." },
    { kind: "volunteer-intern", why: "Arava Institute internships and campus life. A semester is not membership." },
    { kind: "land-care", why: "Dates, solar, algae. Guests stay off orchard rows they were not asked onto." }
  ],
  "old-hall": [
    { kind: "kitchen-table", why: "One building, about 60 people, shared meals. Whose fridge, whose child, who cooks." },
    { kind: "labour-roster", why: "Organic farm and a historic roof. Someone still has to do both." },
    { kind: "membership-trial", why: "Seeking members. Visit and volunteer first." },
    { kind: "guest-stay", why: "Volunteer stays. The hall is a home." }
  ],
  commonground: [
    { kind: "course-host", why: "Subsidised venue for social-change groups. Residents still need a kitchen when the groups leave." },
    { kind: "membership-trial", why: "Living on the property is a smaller door than booking a weekend." },
    { kind: "land-care", why: "95 acres of bush. Guests stay on the venue paths." },
    { kind: "kitchen-table", why: "Who is resident, who is a workshop, who washes up." }
  ],
  breitenbush: [
    { kind: "guest-stay", why: "A boundaried retreat. Guest rules, worker village across the bridge." },
    { kind: "labour-roster", why: "Housekeepers, cooks, carpenters. The co-op is the roster." },
    { kind: "membership-trial", why: "Employment, then a share. A soak is not the interview." },
    { kind: "land-care", why: "River, wells, 154 acres of forest. Guests stay in the developed core." }
  ],
  gyurufu: [
    { kind: "guest-stay", why: "Published guesthouse. Family houses stay family houses." },
    { kind: "land-care", why: "A small hamlet and a large hill. Guests stay on the path they were given." },
    { kind: "membership-trial", why: "A handful of families. Confirm openings. A photograph is not a plot." },
    { kind: "building-code", why: "Eco-houses on an abandoned village site. What a new wall may do next to an older one." }
  ],
  zajezova: [
    { kind: "volunteer-intern", why: "Centres host ESC and course groups. Households are separate." },
    { kind: "membership-trial", why: "Relationship-led joining of a house, not a single co-op form." },
    { kind: "land-care", why: "Dispersed meadows. Guests stay with the centre that invited them." },
    { kind: "course-host", why: "Education centres are the public week. Residents still have Tuesdays." }
  ],
  "sadhana-forest": [
    { kind: "volunteer-intern", why: "Seva 25–35 hours. Minimum stays. Vegan campus." },
    { kind: "guest-stay", why: "Free day tours and meals. Overnight is the volunteer path." },
    { kind: "land-care", why: "Watering, mulching, earthworks. Guests stay off restoration they were not asked onto." },
    { kind: "animals-stock", why: "Farm animal sanctuary. Consent-based visiting." }
  ],

  "living-energy-farm": [
    { kind: "volunteer-intern", why: "Two weeks to three months, 30–35 hours. Write first." },
    { kind: "labour-roster", why: "Garden, seed, microgrid. A dozen people and whoever is visiting." },
    { kind: "guest-stay", why: "Monthly tours, often Mondays. The farm is not a B&B." },
    { kind: "land-care", why: "127 acres. Guests stay on the tour path." }
  ],
  "ecodorp-boekel": [
    { kind: "membership-trial", why: "Rental application, VrijCoop process. Care and refugee houses have other doors." },
    { kind: "building-code", why: "Circular timber, stilts, climate-positive kit. What a tenant may change." },
    { kind: "children-care", why: "Mixed households including informal care. Safeguarding cannot be only a brochure." },
    { kind: "guest-stay", why: "Living-lab visits. The round houses are homes." }
  ]
};

export const livingBatch3Governance: Record<string, Governance> = {
  "kibbutz-ketura": {
    model: "cooperative",
    modelLabel: "Kibbutz assembly",
    unique: false,
    summary: "A Kibbutz Movement settlement on national land. Pluralist public rules. The Arava Institute has its own academic life on the same ground.",
    whoDecides: "Kibbutz members in the settlement’s assembly and branches.",
    bodies: [
      { name: "Kibbutz assembly", role: "Membership on national land." },
      { name: "Arava Institute", role: "Academic campus founded by members." },
      { name: "Work branches", role: "Dates, kitchen, solar, algae, guests." }
    ],
    howItRuns: "A student semester is study. A guest house night is lodging. Neither is a vote on the dates."
  },
  "old-hall": {
    model: "consensus",
    modelLabel: "Residential community meeting",
    unique: false,
    summary: "About 60 people in one historic building and a farm. Nonprofit. Seeking members.",
    whoDecides: "The residential community.",
    bodies: [
      { name: "Community meeting", role: "Household and farm." },
      { name: "Old Hall as nonprofit", role: "The paper the building sits on." }
    ],
    howItRuns: "A volunteer week is work. Membership is a later conversation."
  },
  commonground: {
    model: "cooperative",
    modelLabel: "Co-op and resident household",
    unique: false,
    summary: "Not-for-profit social enterprise, 1984 land, collaborative decisions, a venue that is also a home.",
    whoDecides: "Co-op and residents. Booked groups do not sit that meeting.",
    bodies: [
      { name: "Commonground co-op", role: "Title and venue." },
      { name: "Resident household", role: "The week when groups have gone." }
    ],
    howItRuns: "A subsidised weekend is a booking. Living on the property is a smaller door."
  },
  breitenbush: {
    model: "cooperative",
    modelLabel: "Worker-owned cooperative",
    unique: false,
    summary: "1989 worker co-op, elected board, Handbook of Agreements. Employment is the path toward a share. Guests are guests.",
    whoDecides: "Worker-owners and the board they elect.",
    bodies: [
      { name: "Worker-owners", role: "Live and work on 154 acres." },
      { name: "Board of directors", role: "Elected from membership." },
      { name: "Managing directors", role: "Accountable to the board." }
    ],
    howItRuns: "Apply for work. Live on site. A share comes after the work is already real."
  },
  gyurufu: {
    model: "hybrid",
    modelLabel: "Foundation and families",
    unique: false,
    summary: "1991 foundation plus about ten families on an abandoned village site. Small enough that the meeting is the hamlet.",
    whoDecides: "Resident families and the foundation’s officers.",
    bodies: [
      { name: "Gyűrűfű Foundation", role: "1991 environmental organisation." },
      { name: "Resident families", role: "The lived village." }
    ],
    howItRuns: "A guesthouse booking is lodging. Ask the foundation about any longer stay."
  },
  zajezova: {
    model: "hybrid",
    modelLabel: "Decentralised households and NGOs",
    unique: false,
    summary: "No single co-op of the hill. Centres run programmes. Houses run houses. GEN lists the network as Zajezka.",
    whoDecides: "Each household and each centre for its own ground.",
    bodies: [
      { name: "Households", role: "Homes and small farms." },
      { name: "Education centres", role: "Courses and volunteers." }
    ],
    howItRuns: "Write to a centre or a household. There is no one form that admits you to the whole village."
  },
  "sadhana-forest": {
    model: "founder",
    modelLabel: "Founders and long-term coordinators",
    unique: false,
    summary: "Yorit and Aviram Rozin, 2003, a volunteer nonprofit. Long-term people hold the week. Short-term people hold watering cans.",
    whoDecides: "Founders and the long-term core.",
    bodies: [
      { name: "Yorit and Aviram Rozin", role: "Founders, 2003." },
      { name: "Long-term volunteers", role: "The living camp." }
    ],
    howItRuns: "Arrive as a volunteer. Stay long enough and the work becomes ordinary. Auroville admissions are elsewhere."
  },

  "living-energy-farm": {
    model: "consensus",
    modelLabel: "Small egalitarian household",
    unique: false,
    summary: "A dozen people, FEC listed, off-grid, seed income. Volunteers for a season. Membership is small on purpose.",
    whoDecides: "The long-term members.",
    bodies: [
      { name: "Resident members", role: "Eight adults in 2024." },
      { name: "Federation of Egalitarian Communities", role: "Network listing, not the landlord." }
    ],
    howItRuns: "Tour, then a volunteer stay, then a conversation if the household has room."
  },
  "ecodorp-boekel": {
    model: "hybrid",
    modelLabel: "Collective rental and residents",
    unique: false,
    summary: "36 rental homes, VrijCoop finance, GEN Europe member. Care and refugee dwellings inside the same cluster.",
    whoDecides: "Residents plus the collective-ownership vehicle.",
    bodies: [
      { name: "Ecodorp Boekel residents", role: "The 36 homes." },
      { name: "VrijCoop", role: "Collective finance and ownership model." }
    ],
    howItRuns: "Apply to rent. The round house is a home, including when journalists want a photograph of stilts."
  }
};

export const livingBatch3Leaders: Record<string, VillageLeaders> = {
  "kibbutz-ketura": {
    people: [],
    office: { url: "https://www.ketura.org.il/en/", address: "Kibbutz Ketura, Hevel Eilot, Israel" }
  },
  "old-hall": {
    people: [],
    office: { url: "https://www.oldhall.org.uk/", address: "Old Hall, Rectory Hill, East Bergholt, Suffolk CO7 6TG" }
  },
  commonground: {
    people: [],
    office: { url: "https://www.common-ground.org.au/commonground", address: "Near Seymour, Central Victoria" }
  },
  breitenbush: {
    people: [{ name: "Alex Beamer", role: "Earlier owner; community bought the land in 1985 (historical)" }],
    office: { url: "https://breitenbush.com/", address: "Breitenbush Hot Springs, Detroit, Oregon area" }
  },
  gyurufu: {
    people: [
      { name: "István Fridrich", role: "Resident family named in 2019 Euronews visit" },
      { name: "Éva Hevér", role: "Resident family named in 2019 Euronews visit" }
    ],
    office: { url: "http://gyurufu.hu" }
  },
  zajezova: {
    people: [],
    office: { url: "https://zajezka.sk/" }
  },
  "sadhana-forest": {
    people: [
      { name: "Yorit Rozin", role: "Co-founder, 2003" },
      { name: "Aviram Rozin", role: "Co-founder, 2003" }
    ],
    office: { url: "https://sadhanaforest.org/" }
  },

  "living-energy-farm": {
    people: [],
    office: { url: "https://livingenergyfarm.org/", address: "Louisa County, Virginia" }
  },
  "ecodorp-boekel": {
    people: [],
    office: { url: "https://www.ecodorpboekel.nl/", address: "Boekel, North Brabant, Netherlands" }
  }
};

export const livingBatch3Accommodations: Record<string, Accommodations> = {
  "kibbutz-ketura": {
    visitor: {
      overview: "Keren Kolot guest house and Arava Institute campus lodging. Book. Members’ houses are the settlement.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest house and Institute housing by arrangement." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Kibbutz members on national land. No private title.",
      camping: { available: false, types: [], detail: "Members live in houses." },
      rooms: { available: true, types: [], detail: "Assigned settlement housing." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "old-hall": {
    visitor: {
      overview: "Write. Volunteer stays. A lived-in friary.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Volunteer rooms in the hall, by arrangement." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 60 people in the historic building and on the farm.",
      camping: { available: false, types: [], detail: "People live in the hall." },
      rooms: { available: true, types: [], detail: "Shared historic house, not private lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  commonground: {
    visitor: {
      overview: "Conference and retreat accommodation for booked groups. common-ground.org.au.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Onsite venue rooms for organisations." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "A small household living and working on the 95 acres.",
      camping: { available: false, types: [], detail: "Residents live in houses." },
      rooms: { available: true, types: [], detail: "Resident dwellings on co-op land." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  breitenbush: {
    visitor: {
      overview: "Booked cabins, lodge rooms, and camping-adjacent rustic lodging at a hot-springs retreat.",
      camping: { available: true, types: ["platform / rustic"], detail: "Rustic overnight options on the guest side. Book. Confirm current types on the site." },
      rooms: { available: true, types: [], detail: "Cabins and lodge rooms for retreat guests." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Workers live in a village of cottages across a footbridge from the guest side.",
      camping: { available: false, types: [], detail: "Staff live in provided cottages." },
      rooms: { available: true, types: [], detail: "Worker housing on the 154 acres." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  gyurufu: {
    visitor: {
      overview: "Lovastanya Vendégház is the published guesthouse. Write.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guesthouse rooms by arrangement." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About ten families in eco-houses on the old village site.",
      camping: { available: false, types: [], detail: "Families live in houses." },
      rooms: { available: true, types: [], detail: "Family dwellings." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  zajezova: {
    visitor: {
      overview: "Education-centre stays and volunteer housing. Households are private.",
      camping: { available: false, types: [], detail: "Confirm with the centre that invited you." },
      rooms: { available: true, types: [], detail: "Centre and volunteer rooms by programme." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Dispersed houses and small farms.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Private dwellings across the old village." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "sadhana-forest": {
    visitor: {
      overview: "Free day tours. Overnight is the volunteer path. sadhanaforest.org.",
      camping: { available: true, types: ["volunteer dorm / tent"], detail: "Volunteer housing on a vegan campus. Minimum stay. Confirm current types on arrival pages." },
      rooms: { available: true, types: [], detail: "Volunteer rooms and dorms. Not a hotel." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Long-term volunteers and a few families. No private title.",
      camping: { available: true, types: ["long-term volunteer housing"], detail: "The camp is the home." },
      rooms: { available: true, types: [], detail: "Long-term rooms in the forest camp." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  "living-energy-farm": {
    visitor: {
      overview: "Monthly tours. Residential volunteers two weeks to three months.",
      camping: { available: false, types: [], detail: "Volunteer housing by arrangement, not a public campground." },
      rooms: { available: true, types: [], detail: "Volunteer stays after writing. Tours are daytime." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "A dozen people in off-grid houses on 127 acres.",
      camping: { available: false, types: [], detail: "Members live in houses." },
      rooms: { available: true, types: [], detail: "Community dwellings, DC microgrid." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "ecodorp-boekel": {
    visitor: {
      overview: "An inhabited rental village. Arrange through ecodorpboekel.nl.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No hotel catalogue this atlas found. Homes are rented to residents." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "36 rental homes, including informal-care and refugee dwellings.",
      camping: { available: false, types: [], detail: "People live in the round houses." },
      rooms: { available: true, types: [], detail: "Climate-positive rental dwellings." },
      other: { available: true, types: ["stilt houses", "circular timber"], detail: "The architecture is the brief. Tenure is rent." }
    }
  }
};
