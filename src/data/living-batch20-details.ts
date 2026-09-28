import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch20LegalEntities: Record<string, LegalEntity[]> = {
  "hidden-villa": [
    { name: "The Trust for Hidden Villa", kind: "501(c)(3) nonprofit corporation", role: "Incorporated 1960. Teaching farm, hostel, camp.", status: "current", layer: "land", year: "1960", forms: ["501(c)(3)"] },
    { name: "26870 Moody Road", kind: "Farm and open space", role: "About 1,600 acres. Duveneck purchase 1924.", status: "current", layer: "land", year: "1924", forms: ["501(c)(3)", "Conservation covenant"] },
  ],
  "journeys-end": [
    { name: "Journey’s End Farm Camp, Inc.", kind: "Family farm corporation", role: "Camp 1939–2020. Cabins.", status: "current", layer: "land", year: "1939", forms: ["Freehold title"] },
    { name: "364 Sterling Road", kind: "Woods, pastures, cabins", role: "Over 100 acres. Newfoundland, PA.", status: "current", layer: "land", year: "1939", forms: ["Freehold title"] },
  ],
  "monkton-wyld": [
    { name: "Monkton Wyld School Limited", kind: "UK educational charity", role: "Charity Commission. Courses and B&B.", status: "current", layer: "membership", year: "1940", forms: ["Charitable trust"] },
    { name: "Monkton Wyld Court", kind: "Grade II rectory and 11 acres", role: "1848 house. 14 bedrooms. Charmouth.", status: "current", layer: "land", year: "1848", forms: ["Charitable trust", "Historic designation"] },
  ],
  "shelburne-farms": [
    { name: "Shelburne Farms", kind: "501(c)(3) education nonprofit", role: "Founded 1972. Bequest 1986.", status: "current", layer: "land", year: "1972", forms: ["501(c)(3)"] },
    { name: "Shelburne Farms Inn", kind: "Historic inn on the farm", role: "99 Inn Road. Seasonal.", status: "current", layer: "enterprise", year: "1972", forms: ["501(c)(3)", "Historic designation"] },
  ],
  "willow-witt": [
    { name: "Willow-Witt Ranch", kind: "Private organic ranch", role: "445 acres from 1985. Suzanne Willow.", status: "current", layer: "land", year: "1985", forms: ["Freehold title"] },
    { name: "The Crest", kind: "Legacy nonprofit", role: "People and nature. Confirm current filings with the ranch.", status: "current", layer: "education", year: "2022", forms: ["Nonprofit foundation"] },
  ],
  "punta-mona": [
    { name: "Punta Mona Center", kind: "Family education centre", role: "Founded 1997. 85 acres.", status: "current", layer: "land", year: "1997", forms: ["Freehold title"] },
    { name: "Ecoversity", kind: "Campus partner", role: "Campus partner. Confirm the current relationship with the farm.", status: "associated", layer: "education", year: "1997", forms: ["Nonprofit foundation"] },
  ],
  zaytuna: [
    { name: "Zaytuna Farm", kind: "Private demonstration farm", role: "Geoff and Nadia Lawton. 27 ha.", status: "current", layer: "land", year: "2006", forms: ["Freehold title"] },
    { name: "1158 Pinchin Road", kind: "Campsites and education centre", role: "The Channon. Hipcamp.", status: "current", layer: "land", year: "2006", forms: ["Freehold title"] },
  ],
  "juneberry-ridge": [
    { name: "Juneberry Ridge", kind: "Private regenerative farm", role: "Judy Carpenter. About 750 acres. Founded 2008 as Lucky Clays.", status: "current", layer: "land", year: "2008", forms: ["Freehold title"] },
    { name: "40120 Old Cottonville Road", kind: "Cabins and farm", role: "Norwood, NC. Farm stays on scheduled weekends.", status: "current", layer: "land", year: "2008", forms: ["Freehold title"] },
  ],
  henbant: [
    { name: "Henbant Permaculture", kind: "Private agriwilding farm", role: "Founded 2012 of LinkedIn. 80 acres.", status: "current", layer: "land", year: "2012", forms: ["Freehold title"] },
    { name: "Tain Lon, Clynnog-fawr", kind: "Camp and venue", role: "LL54 5DF. Camping.", status: "current", layer: "land", year: "2012", forms: ["Freehold title"] },
  ],
  "on-the-hill": [
    { name: "On The Hill C.I.C.", kind: "Community interest company", role: "Founded 2017. Family camps.", status: "current", layer: "membership", year: "2017", forms: ["Limited company"] },
    { name: "Oxen Park Farm", kind: "55-acre working farm", role: "Lower Ashton EX6 7QW. Organic and biodynamic.", status: "current", layer: "land", year: "2017", forms: ["Freehold title"] },
  ],
};

export const livingBatch20Land: Record<string, LandOwnership> = {
  "hidden-villa": {
    owner: "The Trust for Hidden Villa",
    complexity: "simple",
    tenure: "501(c)(3) open space and farm",
    howHeld: "About 1,600 acres. Moody Road. Hostel cabins.",
    narrative: "A Los Altos teaching farm.",
    divided: [
      { label: "Farm, hostel, camp, open space", holder: "The Trust", share: "Nonprofit title", what: "Hostel cabins and camp stays." },
    ],
  },
  "journeys-end": {
    owner: "The family",
    complexity: "simple",
    tenure: "Private farm",
    howHeld: "Over 100 acres. Two cabins in the farm hub. Tent sites.",
    narrative: "A Wayne County farm.",
    divided: [
      { label: "Woods, pastures, cabins", holder: "The family", share: "Private", what: "You book a cabin." },
    ],
  },
  "monkton-wyld": {
    owner: "The charity",
    complexity: "simple",
    tenure: "Educational charity",
    howHeld: "Eleven acres and a 14-bedroom rectory. Residents keep the house. Guests book rooms.",
    narrative: "A Charmouth rectory. Educational charity with a resident community.",
    divided: [
      { label: "House and 11 acres", holder: "The charity", share: "Charitable title", what: "Courses, B&B, and self-catering." },
    ],
  },
  "shelburne-farms": {
    owner: "The nonprofit",
    complexity: "simple",
    tenure: "501(c)(3) historic farm",
    howHeld: "About 1,400 acres. Inn, dairy, cheddar. Landmark.",
    narrative: "A Champlain dairy. Nonprofit title. Inn nights are bookings.",
    divided: [
      { label: "Farm, inn, barns", holder: "Shelburne Farms", share: "Nonprofit title", what: "Seasonal inn at 99 Inn Road." },
    ],
  },
  "willow-witt": {
    owner: "The ranch",
    complexity: "simple",
    tenure: "Private organic ranch",
    howHeld: "445 acres from 1985. Wall tents and farmhouse. The Crest.",
    narrative: "A Cascade-Siskiyou ranch above Ashland. Private title. Stays are bookings.",
    divided: [
      { label: "445 acres, farm, campground", holder: "The ranch", share: "Private", what: "ReservationKey books a stay." },
    ],
  },
  "punta-mona": {
    owner: "The family centre",
    complexity: "split",
    tenure: "Private farm plus national-forest habitat",
    howHeld: "85 acres: 35 cultivated, the rest habitat reservation. Cabins.",
    narrative: "A Caribbean point. 35 acres cultivated; the rest is habitat reservation.",
    divided: [
      { label: "35 cultivated acres, cabins", holder: "The centre", share: "Private", what: "Bungalows, casitas, and farm stays." },
      { label: "Remaining habitat", holder: "National forest reservation", share: "Protected", what: "National-forest habitat reservation." },
    ],
  },
  zaytuna: {
    owner: "The Lawtons",
    complexity: "simple",
    tenure: "Private demonstration farm",
    howHeld: "27 hectares. Campsites and education centre. The Channon.",
    narrative: "A hinterland demonstration. A campsite is not Pinchin Road.",
    divided: [
      { label: "Farm, dams, campsites", holder: "The family", share: "Private", what: "Hipcamp is not a deed." },
    ],
  },
  "juneberry-ridge": {
    owner: "Judy Carpenter",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "About 750 acres. Cabins on Old Cottonville Road, Norwood.",
    narrative: "A privately held regenerative farm. You book a farm-stay weekend.",
    divided: [
      { label: "750 acres, cabins, farm", holder: "Judy Carpenter", share: "Private", what: "Farm stays and Jams. Title stays with the farm." },
    ],
  },
  henbant: {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private agriwilding farm",
    howHeld: "80 acres. Camping. Cabins.",
    narrative: "A Llŷn farm. A pitch is not Tain Lon.",
    divided: [
      { label: "80 acres, camp, cabins", holder: "The farm", share: "Private", what: "Hipcamp is not a deed." },
    ],
  },
  "on-the-hill": {
    owner: "Oxen Park Farm / the CIC",
    complexity: "split",
    tenure: "Working farm plus CIC programmes",
    howHeld: "55 acres. On The Hill C.I.C. Family camps.",
    narrative: "A Teign Valley farm. A camp is not Oxen Park.",
    divided: [
      { label: "55-acre farm", holder: "The farm", share: "Private land", what: "Confirm title with the CIC." },
      { label: "Camps and education", holder: "The CIC", share: "Programmes", what: "A booking is not a share." },
    ],
  },
};

export const livingBatch20Funding: Record<string, CommunityFunding> = {
  "hidden-villa": {
    overview: "Education nonprofit. Hostel, camp, farm, and gifts.",
    grantsHeadline: "No major construction grant isolated here",
    privateHeadline: "Donations, camp fees, hostel",
    grants: [],
    private: [
      { source: "Guests and donors", amount: "Hostel and camp fees", year: "1960", certainty: "estimated", kind: "courses", note: "Hostel, camp, farm, and gifts." },
    ],
  },
  "journeys-end": {
    overview: "Family farm. Cabins.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cabin and tent stays",
    grants: [],
    private: [
      { source: "Guests", amount: "Hipcamp", year: "1939", certainty: "estimated", kind: "courses", note: "Cabin and tent stays." },
    ],
  },
  "monkton-wyld": {
    overview: "Educational charity. Courses and B&B.",
    grantsHeadline: "No cash construction grant isolated here",
    privateHeadline: "B&B, self-catering, courses",
    grants: [],
    private: [
      { source: "Guests and course fees", amount: "Affordable rooms", year: "1940", certainty: "estimated", kind: "courses", note: "Courses, B&B, and self-catering." },
    ],
  },
  "shelburne-farms": {
    overview: "Nonprofit education campus. Inn, cheddar, tours.",
    grantsHeadline: "Donor support — amounts not isolated here",
    privateHeadline: "Inn, dining, cheddar, tours",
    grants: [],
    private: [
      { source: "Inn guests and donors", amount: "Seasonal inn", year: "1972", certainty: "estimated", kind: "business", note: "Inn, dining, cheddar, tours." },
    ],
  },
  "willow-witt": {
    overview: "Private ranch. Farm stay and events.",
    grantsHeadline: "Pacific Forest Trust conservation work — confirm current money with the ranch",
    privateHeadline: "Wall tents, farmhouse, campground",
    grants: [],
    private: [
      { source: "Guests", amount: "ReservationKey", year: "1985", certainty: "estimated", kind: "courses", note: "Farm stay, campground, events." },
    ],
  },
  "punta-mona": {
    overview: "Family centre. Lodging, meals, courses.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Bungalows and Saturday dinners",
    grants: [],
    private: [
      { source: "Guests", amount: "Saturday dinner rates — confirm current", year: "1997", certainty: "documented", kind: "courses", note: "Lodging, meals, courses, and Saturday dinners." },
    ],
  },
  zaytuna: {
    overview: "Demonstration farm. Courses and Hipcamp.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "PDC fees and camping",
    grants: [],
    private: [
      { source: "Students and campers", amount: "Hipcamp", year: "2006", certainty: "estimated", kind: "courses", note: "A Channon walk is not a closing." },
    ],
  },
  "juneberry-ridge": {
    overview: "Private regenerative farm. Farm stays and Jams.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "All-inclusive farm stays",
    grants: [],
    private: [
      { source: "Guests", amount: "Scheduled weekends", year: "2008", certainty: "estimated", kind: "courses", note: "All-inclusive farm stays on scheduled weekends." },
    ],
  },
  henbant: {
    overview: "Private farm. Hipcamp and Airbnb.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Camping",
    grants: [],
    private: [
      { source: "Guests", amount: "Hipcamp", year: "2012", certainty: "estimated", kind: "courses", note: "A Clynnog walk is not a closing." },
    ],
  },
  "on-the-hill": {
    overview: "CIC programmes on a working farm. Family camps.",
    grantsHeadline: "TNL Community Fund — amount not isolated here",
    privateHeadline: "Family-camp fees",
    grants: [
      { source: "The National Lottery Community Fund", amount: "Funder listed", year: "2017", certainty: "documented", kind: "grant", note: "Confirm current awards with the CIC." },
    ],
    private: [
      { source: "Campers", amount: "Spring and summer camps", year: "2017", certainty: "estimated", kind: "courses", note: "A Lower Ashton walk is not a share." },
    ],
  },
};

export const livingBatch20VisitJoin: Record<string, VisitJoin> = {
  "hidden-villa": {
    visit: 4,
    join: 1,
    visitProcess: "26870 Moody Road. Hostel September–May. Summer camp. The farm is open to visitors.",
    joinProcess: "Staff, volunteers, camp.",
  },
  "journeys-end": {
    visit: 4,
    join: 1,
    visitProcess: "364 Sterling Road. Two cabins farm-stays page. Hipcamp. Tent sites. Drive to the cabin door.",
    joinProcess: "A family farm.",
  },
  "monkton-wyld": {
    visit: 4,
    join: 2,
    visitProcess: "Charmouth. B&B and self-catering. Courses. 01297 560342.",
    joinProcess: "Resident community and volunteers. Door in is usually a two-week volunteer visit.",
  },
  "shelburne-farms": {
    visit: 5,
    join: 1,
    visitProcess: "99 Inn Road. Inn reservations 802-985-8498. Dining season. Wagon tours.",
    joinProcess: "Nonprofit staff. A stay is an inn booking.",
  },
  "willow-witt": {
    visit: 5,
    join: 1,
    visitProcess: "658 Shale City Road. Wall tents, tent sites, farmhouse. ReservationKey. Farm tours.",
    joinProcess: "A private ranch. A stay is a booking.",
  },
  "punta-mona": {
    visit: 4,
    join: 2,
    visitProcess: "Manzanillo boat or hike. Stay-with-us. Saturday dinners. Rates — confirm current.",
    joinProcess: "Resident crew. Write the farm.",
  },
  zaytuna: {
    visit: 4,
    join: 1,
    visitProcess: "1158 Pinchin Road, The Channon. Camping. Hipcamp. Courses. Geoff’s farm tour — confirm it is still offered.",
    joinProcess: "A family demonstration. A campsite is not a share.",
  },
  "juneberry-ridge": {
    visit: 4,
    join: 1,
    visitProcess: "40120 Old Cottonville Road, Norwood. Farm stays on scheduled weekends. Juneberry Jams.",
    joinProcess: "A private farm.",
  },
  henbant: {
    visit: 4,
    join: 1,
    visitProcess: "Clynnog-fawr. Hipcamp. Cabins — that page has said they can be full. Confirm a pitch, not a 2012 founding.",
    joinProcess: "A private farm. A Hipcamp night is not a share.",
  },
  "on-the-hill": {
    visit: 3,
    join: 2,
    visitProcess: "Oxen Park Farm, Lower Ashton. Family camps 26–30 May and 11–16 August 2026. Farm camping.",
    joinProcess: "Volunteer days. A family camp is not CIC membership.",
  },
};

export const livingBatch20DailyLife: Record<string, DailyLife> = {
  "hidden-villa": {
    typical: [
      { title: "A teaching farm", detail: "Organic. Animals and gardens." },
      { title: "Hostel cabins, September–May", detail: "Nine cabins." },
      { title: "A Los Altos week", detail: "School groups. Then Moody Road." },
    ],
    unique: { title: "The West’s first youth hostel", detail: "Frank and Josephine Duveneck bought this Los Altos Hills land in 1924, opened the West’s first American youth hostel here in 1937, and started a multicultural summer camp in 1945. Hostel cabins still run September–May; summer is camp." },
  },
  "journeys-end": {
    typical: [
      { title: "Two cabins in the farm hub", detail: "Two rustic sleeping cabins in the farm hub." },
      { title: "Gardens and the old cow barn", detail: "Gardens, woods, and pastures." },
      { title: "A Wayne County week", detail: "You drive to the cabin door." },
    ],
    unique: { title: "A 1939 camp that kept the cabins", detail: "Two cabins still sit in the farm hub that ran as Journey’s End Farm Camp from 1939 to 2020." },
  },
  "monkton-wyld": {
    typical: [
      { title: "Walled organic garden", detail: "Kitchen fed from the enclosure." },
      { title: "Courses and rooms", detail: "B&B and self-catering in the 14-bedroom rectory." },
      { title: "Jurassic coast", detail: "Charmouth. Confirm current with the Court." },
    ],
    unique: { title: "A charity rectory that still has residents", detail: "You book a room. You do not buy the Court." },
  },
  "shelburne-farms": {
    typical: [
      { title: "Dairy and cheddar", detail: "Brown Swiss herd. Farmhouse cheddar." },
      { title: "The inn", detail: "99 Inn Road. Seasonal." },
      { title: "Education programs", detail: "Tours. Institute for Sustainable Schools." },
    ],
    unique: { title: "Brown Swiss cheddar on Champlain", detail: "A grass-based dairy of about 125 Brown Swiss cows still makes farmhouse cheddar on this 1,400-acre National Historic Landmark. The seasonal Inn at 99 Inn Road puts overnight guests on the same shore." },
  },
  "willow-witt": {
    typical: [
      { title: "Goats, chickens, cold-hardy vegetables", detail: "Organic farm above Ashland." },
      { title: "Wall tents and a campground cookhouse", detail: "Farm-stay bookings." },
      { title: "A Cascade week", detail: "Hikes. Then the farmhouse." },
    ],
    unique: { title: "Pack goats on the high country", detail: "Hand-raised goats carry about 25–30% of their weight, about 30–65 pounds." },
  },
  "punta-mona": {
    typical: [
      { title: "Jungle-fresh meals", detail: "Three meals a day." },
      { title: "Bamboo cabins", detail: "Built from bamboo and fallen trees." },
      { title: "A Manzanillo week", detail: "Boat or hike. Then Saturday dinner." },
    ],
    unique: { title: "An 85-acre point you reach by boat", detail: "Stephen Brooks started this off-grid Caribbean farm in 1997. Bamboo cabins are built from fallen trees; you arrive by boat from Manzanillo or on foot. Farm tours run Wednesday and Saturday, and Saturday dinner is farm-to-table." },
  },
  zaytuna: {
    typical: [
      { title: "Food forest and dams", detail: "Dams, food forest, kitchen garden." },
      { title: "Campsites by the kitchen garden", detail: "Camping on the demonstration farm." },
      { title: "A Channon week", detail: "A course, or a Hipcamp night." },
    ],
    unique: { title: "Lawton’s demonstration on Terania Creek", detail: "You book a site. You do not buy Pinchin Road." },
  },
  "juneberry-ridge": {
    typical: [
      { title: "Wooded cabins", detail: "All-inclusive farm stays on scheduled weekends." },
      { title: "Farm-to-fork weekends", detail: "Aquaponics and harvest on the ridge." },
      { title: "A Norwood week", detail: "Juneberry Jams, or a booked cabin stay." },
    ],
    unique: { title: "Lucky Clays, then the farm", detail: "National champion clay shooter Judy Carpenter was told to find her own place for competitive shooting. She built Lucky Clays five-stand on this land; Juneberry Ridge grew from that. She still runs farm-stay weekends on the ridge she opened as Lucky Clays in 2008." },
  },
  henbant: {
    typical: [
      { title: "Eggs, pigs, sheep", detail: "henbant.org." },
      { title: "A meadow camp", detail: "Hipcamp." },
      { title: "A Clynnog week", detail: "Venue nights of Instagram. Then the pitch." },
    ],
    unique: { title: "An 80-acre agriwilding camp", detail: "You book a pitch. You do not buy Tain Lon." },
  },
  "on-the-hill": {
    typical: [
      { title: "Organic and biodynamic rows", detail: "Teign Greens." },
      { title: "Family camps", detail: "May and August 2026." },
      { title: "A Teign Valley week", detail: "Sheep, pigs, chickens, cider." },
    ],
    unique: { title: "A CIC that still grows the camp food", detail: "On The Hill C.I.C. has run family camps on 55-acre Oxen Park Farm in the Teign Valley since 2017, with 2026 camps listed for 26–30 May and 11–16 August." },
  },
};

export const livingBatch20Informal: Record<string, InformalAgreement[]> = {
  "hidden-villa": [
    { kind: "guest-stay", why: "Hostel cabins September–May. Not a private house." },
    { kind: "course-host", why: "Outdoor education and camp." },
    { kind: "land-care", why: "Organic farm. Guests stay off rows they were not asked onto." },
    { kind: "animals-stock", why: "A teaching farm still has animals." },
  ],
  "journeys-end": [
    { kind: "guest-stay", why: "Two cabins. Hipcamp." },
    { kind: "land-care", why: "Gardens. Guests stay off rows they were not asked onto." },
    { kind: "animals-stock", why: "A family farm." },
    { kind: "kitchen-table", why: "Small farm hub. The cabin is next to the work." },
  ],
  "monkton-wyld": [
    { kind: "guest-stay", why: "B&B and self-catering. Not membership." },
    { kind: "volunteer-intern", why: "Volunteers. Write the Court." },
    { kind: "course-host", why: "Low-impact courses." },
    { kind: "kitchen-table", why: "Kitchen from the walled garden. Residents still eat." },
  ],
  "shelburne-farms": [
    { kind: "guest-stay", why: "Inn. Seasonal." },
    { kind: "course-host", why: "Tours and Institute." },
    { kind: "animals-stock", why: "Brown Swiss herd." },
    { kind: "land-care", why: "Market garden. Guests stay off rows they were not asked onto." },
  ],
  "willow-witt": [
    { kind: "guest-stay", why: "Wall tents and farmhouse." },
    { kind: "animals-stock", why: "Goats and chickens." },
    { kind: "land-care", why: "Organic beds." },
    { kind: "course-host", why: "Farm tours and events." },
  ],
  "punta-mona": [
    { kind: "guest-stay", why: "Bungalows. Saturday dinners." },
    { kind: "kitchen-table", why: "Three meals. The crew still eats." },
    { kind: "course-host", why: "Permaculture and herbalism." },
    { kind: "volunteer-intern", why: "Resident crew." },
  ],
  zaytuna: [
    { kind: "guest-stay", why: "Campsites. Hipcamp." },
    { kind: "course-host", why: "PDC." },
    { kind: "land-care", why: "Food forest. Guests stay off beds they were not asked onto." },
    { kind: "kitchen-table", why: "Shared kitchen." },
  ],
  "juneberry-ridge": [
    { kind: "guest-stay", why: "Scheduled farm stays." },
    { kind: "course-host", why: "Workshops and Jams." },
    { kind: "land-care", why: "Regenerative farm." },
    { kind: "animals-stock", why: "Farm workshops with animals." },
  ],
  henbant: [
    { kind: "guest-stay", why: "Hipcamp. Cabins." },
    { kind: "animals-stock", why: "Chickens, pigs, sheep." },
    { kind: "land-care", why: "Agriwilding." },
    { kind: "course-host", why: "Venue nights of Instagram." },
  ],
  "on-the-hill": [
    { kind: "guest-stay", why: "Family camps. Farm camping." },
    { kind: "course-host", why: "Land-based education." },
    { kind: "volunteer-intern", why: "Volunteer days." },
    { kind: "animals-stock", why: "Sheep, pigs, chickens." },
  ],
};

export const livingBatch20Governance: Record<string, Governance> = {
  "hidden-villa": {
    model: "board",
    modelLabel: "501(c)(3) teaching farm",
    unique: false,
    summary: "Trust for Hidden Villa. Hostel and camp. You book a cabin.",
    whoDecides: "Board and staff of the Trust.",
    bodies: [
      { name: "The Trust for Hidden Villa", role: "1960. Farm." },
      { name: "Hostel and camp", role: "September–May cabins. Summer camp." },
    ],
    howItRuns: "Book a hostel cabin or a summer camp.",
  },
  "journeys-end": {
    model: "founder",
    modelLabel: "Family farm",
    unique: false,
    summary: "Camp 1939–2020. Cabins. You book a cabin.",
    whoDecides: "The family.",
    bodies: [
      { name: "The farm", role: "364 Sterling Road." },
      { name: "The cabins", role: "Two in the hub." },
    ],
    howItRuns: "Hipcamp.",
  },
  "monkton-wyld": {
    model: "hybrid",
    modelLabel: "Charity plus resident community",
    unique: true,
    summary: "Educational charity. Residents. You book a room. You do not buy the Court.",
    whoDecides: "Trustees and the resident community.",
    bodies: [
      { name: "The charity", role: "Monkton Wyld School Limited." },
      { name: "The residents", role: "Volunteers." },
    ],
    howItRuns: "Courses and rooms. Write the Court.",
    dive: {
      title: "How a Dorset rectory stayed a charity with residents",
      lead: "Monkton Wyld put a small resident community onto an 1848 rectory so an educational charity still grows the kitchen garden, and so a B&B night remains a booking, not a share.",
      organs: [
        { name: "The charity", what: "Courses. Commission listing." },
        { name: "The house", what: "Eleven acres. 14 bedrooms." },
      ],
      path: "B&B or volunteer. Write the Court.",
      history: "Charity from 1940. House 1848.",
      tension: "A small community versus a 14-bedroom house. Confirm a bed with the Court, not a 1940 origin story.",
    },
  },
  "shelburne-farms": {
    model: "board",
    modelLabel: "Education nonprofit on a historic dairy",
    unique: false,
    summary: "Nonprofit 1972. Seasonal inn at 99 Inn Road.",
    whoDecides: "Board and staff.",
    bodies: [
      { name: "Shelburne Farms", role: "501(c)(3)." },
      { name: "The inn", role: "99 Inn Road." },
    ],
    howItRuns: "Call 802-985-8498.",
  },
  "willow-witt": {
    model: "founder",
    modelLabel: "Private ranch plus a legacy nonprofit",
    unique: false,
    summary: "1985. Suzanne Willow. A private ranch. Stays are bookings.",
    whoDecides: "The ranch. The Crest.",
    bodies: [
      { name: "Willow-Witt Ranch", role: "445 acres." },
      { name: "The Crest", role: "Legacy nonprofit." },
    ],
    howItRuns: "ReservationKey for stays. The ranch household runs the farm.",
  },
  "punta-mona": {
    model: "founder",
    modelLabel: "Family permaculture centre",
    unique: false,
    summary: "Stephen Brooks started the farm in 1997. Resident crew. You book a casita or a Saturday dinner.",
    whoDecides: "The centre and the crew.",
    bodies: [
      { name: "Punta Mona Center", role: "85 acres." },
      { name: "The crew", role: "International residents." },
    ],
    howItRuns: "Stay-with-us. Book a bungalow or a Saturday dinner.",
  },
  zaytuna: {
    model: "founder",
    modelLabel: "Family demonstration farm",
    unique: false,
    summary: "Geoff and Nadia Lawton. You book a site. You do not buy Pinchin Road.",
    whoDecides: "The Lawtons.",
    bodies: [
      { name: "Zaytuna Farm", role: "27 ha." },
      { name: "Courses", role: "PDC." },
    ],
    howItRuns: "Hipcamp or a course. A Channon walk is not a closing.",
  },
  "juneberry-ridge": {
    model: "founder",
    modelLabel: "Private regenerative farm stay",
    unique: false,
    summary: "Judy Carpenter’s private farm. About 750 acres. You book a weekend.",
    whoDecides: "Judy Carpenter.",
    bodies: [
      { name: "Juneberry Ridge", role: "Farm stays and the working farm." },
      { name: "Juneberry Jams", role: "Festival on the ridge." },
    ],
    howItRuns: "The farm-stay calendar.",
  },
  henbant: {
    model: "founder",
    modelLabel: "Private agriwilding farm",
    unique: false,
    summary: "2012 of LinkedIn. Hipcamp. You book a pitch. You do not buy Tain Lon.",
    whoDecides: "The farm. Matt.",
    bodies: [
      { name: "Henbant", role: "80 acres." },
      { name: "The camp", role: "Hipcamp." },
    ],
    howItRuns: "Hipcamp. Cabins may be full.",
  },
  "on-the-hill": {
    model: "board",
    modelLabel: "Community interest company on a working farm",
    unique: false,
    summary: "CIC 2017. 55 acres. You book a camp. You do not buy Oxen Park.",
    whoDecides: "The CIC.",
    bodies: [
      { name: "On The Hill C.I.C.", role: "Family camps." },
      { name: "Oxen Park Farm", role: "55 acres." },
    ],
    howItRuns: "A camp is not a share.",
  },
};

export const livingBatch20Leaders: Record<string, VillageLeaders> = {
  "hidden-villa": {
    people: [],
    office: { url: "https://www.hiddenvilla.org/", phone: "(650) 949-8650", address: "26870 Moody Road, Los Altos Hills, CA 94022" },
  },
  "journeys-end": {
    people: [],
    office: { url: "https://www.journeysendfarm.org/", phone: "570-689-3911", address: "364 Sterling Road, Newfoundland, PA 18445" },
  },
  "monkton-wyld": {
    people: [],
    office: { url: "https://monktonwyldcourt.co.uk/", email: "info@monktonwyldcourt.org", phone: "01297 560342", address: "Monkton Wyld Court, Charmouth, Bridport, Dorset" },
  },
  "shelburne-farms": {
    people: [
      { name: "Alec Webb", role: "President." },
    ],
    office: { url: "https://shelburnefarms.org/", phone: "802-985-8498", address: "99 Inn Road, Shelburne, VT 05482" },
  },
  "willow-witt": {
    people: [
      { name: "Suzanne Willow", role: "Co-founder. Continues the ranch." },
      { name: "Lanita Witt", role: "Co-founder.", note: "Died 15 December 2022." },
    ],
    office: { url: "https://willowwittranch.com/", phone: "541-890-1998", address: "658 Shale City Road, Ashland, OR 97520" },
  },
  "punta-mona": {
    people: [],
    office: { url: "https://www.puntamona.org/", address: "Punta Mona, Manzanillo, Limón, Costa Rica" },
  },
  zaytuna: {
    people: [],
    office: { url: "https://www.zaytunafarm.com/", address: "1158 Pinchin Road, The Channon, NSW" },
  },
  "juneberry-ridge": {
    people: [
      { name: "Judy Carpenter", role: "Founder and owner", note: "National champion clay shooter. Built Lucky Clays five-stand on the land that became Juneberry Ridge." },
    ],
    office: { url: "https://juneberry.com/", address: "40120 Old Cottonville Road, Norwood, NC 28128" },
  },
  henbant: {
    people: [],
    office: { url: "https://www.henbant.org/", email: "matt@henbant.org", phone: "07786 316413", address: "Tain Lon, Clynnog-fawr, Caernarfon, LL54 5DF" },
  },
  "on-the-hill": {
    people: [],
    office: { url: "https://onthehill.camp/", address: "Oxen Park Farm, Lower Ashton, Exeter EX6 7QW" },
  },
};

export const livingBatch20Accommodations: Record<string, Accommodations> = {
  "hidden-villa": {
    visitor: {
      overview: "Hostel of nine rustic cabins, September–May. Summer is camp, not a drop-in inn.",
      camping: { available: false, types: [], detail: "Overnight camp is a programme, not a public campground." },
      rooms: { available: true, types: ["hostel cabin"], detail: "Nine cabins. September–May." },
      other: { available: false, types: [], detail: "None listed as a public inn." },
    },
    resident: {
      overview: "Staff of the Trust. Not a housing coop.",
      camping: { available: false, types: [], detail: "People work the farm." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "journeys-end": {
    visitor: {
      overview: "Two rustic sleeping cabins in the farm hub, plus tent sites. Book on Hipcamp.",
      camping: { available: true, types: ["tent site"], detail: "Tent camp sites." },
      rooms: { available: true, types: ["cabin"], detail: "Two cabins. Drive to the door." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A family farm.",
      camping: { available: false, types: [], detail: "The family lives on the farm." },
      rooms: { available: true, types: [], detail: "Private farmhouse." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "monkton-wyld": {
    visitor: {
      overview: "Bed-and-breakfast and self-catering in simple rooms. Affordable. Write the Court.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["B&B", "self-catering"], detail: "14-bedroom rectory. Book." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small resident community.",
      camping: { available: false, types: [], detail: "People live in the house." },
      rooms: { available: true, types: [], detail: "Resident rooms. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "shelburne-farms": {
    visitor: {
      overview: "Shelburne Farms Inn. Reserve 802-985-8498. Dining open 8 May–19 October 2026. Not a year-round drop-in.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: ["inn room", "cottage"], detail: "Historic inn. Cottages." },
      other: { available: false, types: [], detail: "None listed as camping." },
    },
    resident: {
      overview: "Nonprofit staff. Not a housing coop.",
      camping: { available: false, types: [], detail: "People work the campus." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "willow-witt": {
    visitor: {
      overview: "Furnished wall tents, tent sites, farmhouse studio. Book via ReservationKey.",
      camping: { available: true, types: ["wall tent", "tent site"], detail: "Campground with cookhouse and bathhouse." },
      rooms: { available: true, types: ["farmhouse", "studio"], detail: "Meadow House and Farmhouse Studio. Year-round." },
      other: { available: true, types: ["glamping tent"], detail: "Furnished wall tents." },
    },
    resident: {
      overview: "The ranch household.",
      camping: { available: false, types: [], detail: "People live on the ranch." },
      rooms: { available: true, types: [], detail: "Private. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "punta-mona": {
    visitor: {
      overview: "Hand-built bungalows and casitas. Meals included. Saturday dinner rates — confirm current. Tent hike-in.",
      camping: { available: true, types: ["tent"], detail: "Hike in and bring your own tent. Confirm it still holds." },
      rooms: { available: true, types: ["bungalow", "casita", "shared room"], detail: "Bamboo and fallen-tree cabins." },
      other: { available: true, types: ["treehouse"], detail: "Treehouse. Confirm it is bookable." },
    },
    resident: {
      overview: "Resident crew.",
      camping: { available: false, types: [], detail: "People live in the cabins." },
      rooms: { available: true, types: [], detail: "Community house. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  zaytuna: {
    visitor: {
      overview: "Camping. Hipcamp. Shared kitchen and toilets. Courses have their own lodging — confirm current.",
      camping: { available: true, types: ["campsite"], detail: "Ten large campsites." },
      rooms: { available: false, types: [], detail: "No public inn of record. Course lodging — confirm." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The Lawtons.",
      camping: { available: false, types: [], detail: "People live on the farm." },
      rooms: { available: true, types: [], detail: "Private. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "juneberry-ridge": {
    visitor: {
      overview: "Wooded cabins. All-inclusive farm stays on scheduled weekends. Jams.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["cabin"], detail: "Book the farm-stay calendar." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Farm staff.",
      camping: { available: false, types: [], detail: "People work the ridge." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  henbant: {
    visitor: {
      overview: "Meadow camping. Handbuilt cabins — that page has said they can be full. Confirm a pitch.",
      camping: { available: true, types: ["tent", "RV"], detail: "Hipcamp: 10 units." },
      rooms: { available: true, types: ["cabin"], detail: "Airbnb. May be full." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A home and a farm.",
      camping: { available: false, types: [], detail: "People live on the farm." },
      rooms: { available: true, types: [], detail: "Private. Not a listing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "on-the-hill": {
    visitor: {
      overview: "Family camps 26–30 May and 11–16 August 2026. Bring tents or vans. Fully catered. Not a drop-in B&B.",
      camping: { available: true, types: ["tent", "van"], detail: "Farm camping. No hook-ups." },
      rooms: { available: false, types: [], detail: "No public inn of record." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "CIC and farm.",
      camping: { available: false, types: [], detail: "People work Oxen Park." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
