import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch31LegalEntities: Record<string, LegalEntity[]> = {
  "wildcat-ridge-farm": [
    { name: "Wildcat Ridge Farm", kind: "Peony farm", role: "Peony farm.", status: "current", layer: "enterprise", year: "1995", forms: ["Company"] },
    { name: "Panther Creek acres", kind: "Peony farm", role: "Peony fields. Yin Yurt.", status: "current", layer: "land", year: "1995", forms: ["Freehold title"] },
  ],
  "tirrito-farm": [
    { name: "Tirrito Farm", kind: "Vineyard farmstead", role: "Farmstead.", status: "current", layer: "enterprise", year: "1998", forms: ["Company"] },
    { name: "Kansas Settlement acres", kind: "Vineyard", role: "About 80 acres. 14-acre vineyard.", status: "current", layer: "land", year: "1998", forms: ["Freehold title"] },
  ],
  "dancing-moose-farm": [
    { name: "Dancing Moose Farm", kind: "Private permaculture farm", role: "17.5-acre farm.", status: "current", layer: "enterprise", year: "2001", forms: ["Company"] },
    { name: "Ogden Valley acres", kind: "17.5-acre farm", role: "17.5 acres. Three overnight yurts.", status: "current", layer: "land", year: "2001", forms: ["Freehold title"] },
  ],
  "come-spring-farm": [
    { name: "Come Spring Farm", kind: "Private alpaca farm", role: "28-acre farm.", status: "current", layer: "enterprise", year: "2013", forms: ["Company"] },
    { name: "Union acres", kind: "28-acre farm", role: "28 acres. Geodesic domes.", status: "current", layer: "land", year: "2013", forms: ["Freehold title"] },
  ],
  "howling-wolf-farm": [
    { name: "Howling Wolf Farm", kind: "Private regenerative farm", role: "88-acre farm.", status: "current", layer: "enterprise", year: "2017", forms: ["Company"] },
    { name: "Tilton Road acres", kind: "88-acre farm", role: "88 acres. Yurt room.", status: "current", layer: "land", year: "2017", forms: ["Freehold title"] },
  ],
  "humble-bee-farm": [
    { name: "Humble Bee Farm", kind: "Private working farm", role: "Yorkshire Wolds farm.", status: "current", layer: "enterprise", year: "2017", forms: ["Company"] },
    { name: "Flixton acres", kind: "Working farm", role: "Arable, sheep and cattle. Nomadic yurts.", status: "current", layer: "land", year: "2017", forms: ["Freehold title"] },
  ],
  "the-tipi-ranch": [
    { name: "The Tipi Ranch", kind: "Private livestock farm", role: "60-acre farm.", status: "current", layer: "enterprise", year: "2020", forms: ["Company"] },
    { name: "Thermopolis acres", kind: "60-acre farm", role: "60 acres. Tipis.", status: "current", layer: "land", year: "2020", forms: ["Freehold title"] },
  ],
  "windy-goat-acres": [
    { name: "Windy Goat Acres", kind: "Private hobby farm", role: "15-acre homestead.", status: "current", layer: "enterprise", year: "2021", forms: ["Company"] },
    { name: "Chelsea acres", kind: "15-acre farm", role: "15 acres. 24-foot yurt.", status: "current", layer: "land", year: "2021", forms: ["Freehold title"] },
  ],
  "quarter-spring-farm": [
    { name: "Quarter Spring Farm", kind: "Private working farm", role: "64-acre homestead.", status: "current", layer: "enterprise", year: "2018", forms: ["Company"] },
    { name: "Davis Hollow acres", kind: "64-acre farm", role: "64 acres. Thunder Dome.", status: "current", layer: "land", year: "2018", forms: ["Freehold title"] },
  ],
  "kaluna-farm": [
    { name: "Kaluna Farm Retreat", kind: "Private family homestead", role: "Mountain homestead.", status: "current", layer: "enterprise", year: "2016", forms: ["Company"] },
    { name: "Cedar Springs acres", kind: "160-acre homestead", role: "160 acres. Wooden yurt.", status: "current", layer: "land", year: "2016", forms: ["Freehold title"] },
  ],
};

export const livingBatch31Land: Record<string, LandOwnership> = {
  "wildcat-ridge-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private peony farm",
    howHeld: "Peony fields. Yin Yurt.",
    narrative: "A Haywood peony farm.",
    divided: [{ label: "Peonies, Yin Yurt", holder: "The farm", share: "Private", what: "Private peony farm." }],
  },
  "tirrito-farm": {
    owner: "The Tirritos",
    complexity: "simple",
    tenure: "Private farmstead",
    howHeld: "About 80 acres. Six geodesic domes.",
    narrative: "A Willcox farmstead.",
    divided: [{ label: "Vineyard, domes", holder: "The family", share: "Private", what: "Private farmstead." }],
  },
  "dancing-moose-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private permaculture farm",
    howHeld: "17.5 acres. Three overnight yurts.",
    narrative: "An Ogden Valley farm.",
    divided: [{ label: "Pasture, yurts", holder: "The farm", share: "Private", what: "Private permaculture farm." }],
  },
  "come-spring-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private alpaca farm",
    howHeld: "28 acres. Geodesic domes.",
    narrative: "A Union alpaca farm.",
    divided: [{ label: "Pond, alpacas, domes", holder: "The farm", share: "Private", what: "Private alpaca farm." }],
  },
  "howling-wolf-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private regenerative farm",
    howHeld: "88 acres. Yurt room.",
    narrative: "A Randolph hillside.",
    divided: [{ label: "Pasture, yurt", holder: "The farm", share: "Private", what: "You book the yurt." }],
  },
  "humble-bee-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private working farm",
    howHeld: "Working arable, sheep and cattle. Nomadic yurts.",
    narrative: "A Yorkshire Wolds farm.",
    divided: [{ label: "Arable, stock, yurts", holder: "The farm", share: "Private", what: "You book a nomadic yurt." }],
  },
  "the-tipi-ranch": {
    owner: "The family",
    complexity: "simple",
    tenure: "Private livestock farm",
    howHeld: "60 acres. Tipis.",
    narrative: "A Thermopolis farm.",
    divided: [{ label: "River, stock, tipis", holder: "The family", share: "Private", what: "Private livestock farm." }],
  },
  "windy-goat-acres": {
    owner: "Jessica and Jim",
    complexity: "simple",
    tenure: "Private hobby farm",
    howHeld: "15 acres. 24-foot yurt.",
    narrative: "A Chelsea homestead.",
    divided: [{ label: "Goats, yurt", holder: "The family", share: "Private", what: "Private hobby farm." }],
  },
  "quarter-spring-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private working farm",
    howHeld: "64 acres. Thunder Dome.",
    narrative: "A Liberty homestead.",
    divided: [{ label: "Goats, soap, dome", holder: "The farm", share: "Private", what: "Private working farm." }],
  },
  "kaluna-farm": {
    owner: "The farm",
    complexity: "simple",
    tenure: "Private family homestead",
    howHeld: "160 acres. Wooden yurt.",
    narrative: "A Talking Rock homestead. A yurt night is not Cedar Springs Hollow.",
    divided: [{ label: "Orchard, spring, yurt", holder: "The farm", share: "Private", what: "A booking is not a deed." }],
  },
};

export const livingBatch31Funding: Record<string, CommunityFunding> = {
  "wildcat-ridge-farm": {
    overview: "Peony plants and Yin Yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yin Yurt",
    grants: [],
    private: [{ source: "Guests and peony sales", amount: "Yin Yurt", year: "1995", certainty: "estimated", kind: "business", note: "" }],
  },
  "tirrito-farm": {
    overview: "Wine, beer, dining, and dome nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Six geodesic glamps",
    grants: [],
    private: [{ source: "Guests", amount: "Six domes", year: "1998", certainty: "estimated", kind: "business", note: "" }],
  },
  "dancing-moose-farm": {
    overview: "Produce, honey, soap, and yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Three overnight yurts",
    grants: [],
    private: [{ source: "Guests", amount: "Peek book", year: "2001", certainty: "estimated", kind: "business", note: "" }],
  },
  "come-spring-farm": {
    overview: "Geodesic dome nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Domes",
    grants: [],
    private: [{ source: "Guests", amount: "Domes", year: "2013", certainty: "estimated", kind: "business", note: "" }],
  },
  "howling-wolf-farm": {
    overview: "Livestock, dinners, and yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yurt room",
    grants: [],
    private: [{ source: "Guests", amount: "Yurt", year: "2017", certainty: "estimated", kind: "business", note: "" }],
  },
  "humble-bee-farm": {
    overview: "Cottages, wigwams, camping, and yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Four nomadic yurts",
    grants: [],
    private: [{ source: "Guests", amount: "Nomadic yurts", year: "2017", certainty: "estimated", kind: "business", note: "" }],
  },
  "the-tipi-ranch": {
    overview: "Tipi nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Tipis",
    grants: [],
    private: [{ source: "Guests", amount: "Tipis", year: "2020", certainty: "estimated", kind: "business", note: "" }],
  },
  "windy-goat-acres": {
    overview: "Yurt nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "24-foot yurt",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2021", certainty: "estimated", kind: "business", note: "" }],
  },
  "quarter-spring-farm": {
    overview: "Soap, stock, and dome nights.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Thunder Dome",
    grants: [],
    private: [{ source: "Guests", amount: "Instant book", year: "2018", certainty: "estimated", kind: "business", note: "" }],
  },
  "kaluna-farm": {
    overview: "Yurt nights and retreats.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Wooden yurt",
    grants: [],
    private: [{ source: "Guests", amount: "Wooden yurt", year: "2016", certainty: "estimated", kind: "business", note: "" }],
  },
};

export const livingBatch31VisitJoin: Record<string, VisitJoin> = {
  "wildcat-ridge-farm": {
    visit: 4,
    join: 1,
    visitProcess: "3553 Panther Creek Road, Clyde, NC 28721. Book the Yin Yurt. (828) 246-7542. An Asheville drive. May peony gates.",
    joinProcess: "Family farm.",
  },
  "tirrito-farm": {
    visit: 5,
    join: 1,
    visitProcess: "6150 S Kansas Settlement Road, Willcox, AZ 85643. Book a geodesic dome. (520) 200-7270.",
    joinProcess: "Farm staff.",
  },
  "dancing-moose-farm": {
    visit: 4,
    join: 1,
    visitProcess: "13485 E Highway 39, Huntsville, UT 84317. Book a 20-foot yurt. Farm tour with the stay. (801) 633-7254. An Ogden drive.",
    joinProcess: "Farm family.",
  },
  "come-spring-farm": {
    visit: 5,
    join: 1,
    visitProcess: "Union, Maine. Book a geodesic dome. A Camden drive. Morning feed.",
    joinProcess: "Farm staff.",
  },
  "howling-wolf-farm": {
    visit: 4,
    join: 1,
    visitProcess: "209 Tilton Road, Randolph, VT 05060. Book the yurt. A White River drive. Seasonal.",
    joinProcess: "Farm staff.",
  },
  "humble-bee-farm": {
    visit: 5,
    join: 1,
    visitProcess: "Flixton, Scarborough YO11 3UJ. Book a nomadic yurt. 01723 890437. A Scarborough drive.",
    joinProcess: "Farm staff.",
  },
  "the-tipi-ranch": {
    visit: 4,
    join: 1,
    visitProcess: "About 5 miles from Thermopolis, Wyoming. Book a tipi. A Hot Springs State Park drive.",
    joinProcess: "Family farm.",
  },
  "windy-goat-acres": {
    visit: 5,
    join: 1,
    visitProcess: "3091 Q Avenue, Chelsea, IA 52215. Instant book the 24-foot yurt. (319) 573-0799. A Cedar Rapids drive.",
    joinProcess: "Family homestead.",
  },
  "quarter-spring-farm": {
    visit: 5,
    join: 1,
    visitProcess: "422 Davis Hollow Road, Liberty, TN 37095. Instant book the Thunder Dome. A Center Hill Lake drive. Short hike.",
    joinProcess: "Farm staff.",
  },
  "kaluna-farm": {
    visit: 5,
    join: 1,
    visitProcess: "462 Cedar Springs Hollow, Talking Rock, GA 30175. Book the wooden yurt. (828) 772-4206. A north-Georgia drive.",
    joinProcess: "Farm staff. A yurt night is not Talking Rock.",
  },
};

export const livingBatch31DailyLife: Record<string, DailyLife> = {
  "wildcat-ridge-farm": {
    typical: [
      { title: "Peony rows", detail: "May bloom." },
      { title: "Yin Yurt", detail: "Kitchen, bath, bedroom." },
      { title: "Wrap-around porch", detail: "The Yin Yurt." },
    ],
    unique: { title: "Sleep above the peonies", detail: "Started as produce for Lomo Grill in the mid-1990s, then peonies — now North Carolina’s largest planted peony farm. The public stay is the Yin Yurt above the rows: kitchen, bath, bedroom, wrap-around porch; May gates." },
  },
  "tirrito-farm": {
    typical: [
      { title: "Italian vines", detail: "14-acre vineyard." },
      { title: "Six geodesic glamps", detail: "Six geodesic glamping domes." },
      { title: "Wine and beer", detail: "Estate." },
    ],
    unique: { title: "A desert geodesic on the vines", detail: "Salvatore and Yuri Tirrito planted the first grapes in 1998 and bottled in 2001 on Kansas Settlement Road in Willcox. Six geodesic glamping domes sit by a 14-acre Italian vineyard, with estate wine, beer, and a restaurant opened in 2022." },
  },
  "dancing-moose-farm": {
    typical: [
      { title: "Grass-fed cattle", detail: "Beef cows." },
      { title: "Eight hives", detail: "Honey and soap." },
      { title: "20-foot yurts", detail: "Farm tour with the stay." },
    ],
    unique: { title: "A permaculture yurt at 5400 feet", detail: "Dan, Addison, and Laurel’s 17.5-acre Ogden Valley parcel, more than twenty-five years: beef cows, pasture pigs, chickens, and eight hives. Three 20-foot overnight yurts and a 24-foot hospitality yurt; a farm tour comes with the stay." },
  },
  "come-spring-farm": {
    typical: [
      { title: "Alpacas", detail: "Alpacas, goats, sheep, and pigs. Morning feed." },
      { title: "Round Pond", detail: "Kayak." },
      { title: "Geodesic domes", detail: "Geodesic domes on 10 acres of the 28-acre farm." },
    ],
    unique: { title: "A dome beside the alpacas", detail: "Thirteen years of glamping as of 2026 on a 28-acre Union alpaca farm: geodesic domes on 10 acres of the same property, Round Pond, and a morning feed of alpacas, goats, sheep, and pigs." },
  },
  "howling-wolf-farm": {
    typical: [
      { title: "Sheep and hens", detail: "Sheep and laying hens." },
      { title: "Grass-fed lamb", detail: "Grass-fed lamb and pork." },
      { title: "Hillside yurt", detail: "Seasonal yurt stay." },
    ],
    unique: { title: "A yurt on the 88-acre slope", detail: "Colby and Sargent. Sheep still graze the 88-acre hillside they opened above Randolph in 2017." },
  },
  "humble-bee-farm": {
    typical: [
      { title: "Sheep and cattle", detail: "Sheep and cattle." },
      { title: "Farm walks", detail: "Farm walks." },
      { title: "Nomadic yurts", detail: "Four 5-metre nomadic yurts." },
    ],
    unique: { title: "A Wolds yurt on a working farm", detail: "Four 5-metre yurts still sit on the Wolds farm between Scarborough and Filey." },
  },
  "the-tipi-ranch": {
    typical: [
      { title: "Goats and ducks", detail: "Goats, chickens, sheep, and ducks on the 60-acre farm." },
      { title: "Wind River", detail: "About 5 miles from Thermopolis, where the Wind River meets the Bighorn." },
      { title: "Canvas tipis", detail: "Canvas tipis on decks." },
    ],
    unique: { title: "A tipi above the confluence", detail: "Groundbreaking 10 October 2020 on 60 acres about 5 miles from Thermopolis, where the Wind River meets the Bighorn; canvas tipis on decks, with goats, chickens, sheep, and ducks." },
  },
  "windy-goat-acres": {
    typical: [
      { title: "Goats", detail: "The homestead." },
      { title: "Bohemie Alps hills", detail: "15 acres." },
      { title: "24-foot yurt", detail: "Instant book." },
    ],
    unique: { title: "A yurt over the Iowa goats", detail: "Jessica and Jim’s 15-acre Chelsea homestead in the Bohemie Alps, built in the last five years as of 2026. Instant-book 24-foot yurt over the goats; cabins and a hobbit house are also listed." },
  },
  "quarter-spring-farm": {
    typical: [
      { title: "Goat milk soap", detail: "Goat milk soap." },
      { title: "Pastured lamb", detail: "Pastured lamb." },
      { title: "Thunder Dome", detail: "Geodesic dome." },
    ],
    unique: { title: "A geodesic on the Plateau knoll", detail: "A 64-acre Liberty homestead with a house more than a hundred years old; the public stay is the Thunder Dome geodesic among goats, sheep, and chicken." },
  },
  "kaluna-farm": {
    typical: [
      { title: "Orchard mosaic", detail: "exploregeorgia.org." },
      { title: "Mountain spring", detail: "That wooden-yurt page." },
      { title: "Wooden yurt", detail: "kalunafarm.com/en/wooden-yurt-at-kaluna-farm-retreat." },
    ],
    unique: { title: "A wooden yurt in the hollow", detail: "160 acres." },
  },
};

export const livingBatch31Informal: Record<string, InformalAgreement[]> = {
  "wildcat-ridge-farm": [
    { kind: "guest-stay", why: "Yin Yurt." },
    { kind: "land-care", why: "Peony rows. Guests stay off beds they were not asked onto." },
  ],
  "tirrito-farm": [
    { kind: "guest-stay", why: "Six geodesic glamps." },
    { kind: "land-care", why: "Vineyard. Guests stay off rows they were not asked onto." },
  ],
  "dancing-moose-farm": [
    { kind: "guest-stay", why: "Three overnight yurts." },
    { kind: "land-care", why: "Farm tour and do-not-harass-the-animals." },
    { kind: "animals-stock", why: "Cows, pigs, chickens, bees." },
  ],
  "come-spring-farm": [
    { kind: "guest-stay", why: "Geodesic domes." },
    { kind: "animals-stock", why: "Alpacas, goats, sheep, pigs." },
  ],
  "howling-wolf-farm": [
    { kind: "guest-stay", why: "Hillside yurt room." },
    { kind: "animals-stock", why: "Sheep and hens." },
  ],
  "humble-bee-farm": [
    { kind: "guest-stay", why: "Nomadic yurts." },
    { kind: "animals-stock", why: "Sheep and cattle." },
    { kind: "land-care", why: "Working arable. Guests stay off fields they were not asked onto." },
  ],
  "the-tipi-ranch": [
    { kind: "guest-stay", why: "Tipis." },
    { kind: "animals-stock", why: "Goats, chickens, sheep, ducks." },
  ],
  "windy-goat-acres": [
    { kind: "guest-stay", why: "24-foot yurt." },
    { kind: "animals-stock", why: "Goats." },
  ],
  "quarter-spring-farm": [
    { kind: "guest-stay", why: "Thunder Dome." },
    { kind: "animals-stock", why: "Goats, sheep, chicken." },
    { kind: "land-care", why: "Guests stay off paddocks they were not asked onto." },
  ],
  "kaluna-farm": [
    { kind: "guest-stay", why: "Wooden yurt." },
    { kind: "land-care", why: "Stay on garden paths." },
  ],
};

export const livingBatch31Governance: Record<string, Governance> = {
  "wildcat-ridge-farm": {
    model: "founder",
    modelLabel: "Peony farm",
    unique: false,
    summary: "Private peony farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Wildcat Ridge Farm", role: "The farm." },
      { name: "The Yin Yurt", role: "Kitchen, bath, bedroom, wrap-around porch." },
    ],
    howItRuns: "Book.",
  },
  "tirrito-farm": {
    model: "founder",
    modelLabel: "Vineyard farmstead",
    unique: false,
    summary: "tirritofarm.com. You book a geodesic. You do not buy Willcox.",
    whoDecides: "The Tirritos.",
    bodies: [
      { name: "Tirrito Farm", role: "tirritofarm.com." },
      { name: "Six domes", role: "Geodesic glamping domes." },
    ],
    howItRuns: "Book.",
  },
  "dancing-moose-farm": {
    model: "founder",
    modelLabel: "Permaculture farm",
    unique: false,
    summary: "Private permaculture farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Dancing Moose Farm", role: "The farm." },
      { name: "The yurts", role: "Three overnight yurts. Farm tour with the stay." },
    ],
    howItRuns: "Book.",
  },
  "come-spring-farm": {
    model: "founder",
    modelLabel: "Alpaca farm",
    unique: false,
    summary: "Private alpaca farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Come Spring Farm", role: "The farm." },
      { name: "The domes", role: "Geodesic dome stays." },
    ],
    howItRuns: "Book.",
  },
  "howling-wolf-farm": {
    model: "founder",
    modelLabel: "Regenerative livestock farm",
    unique: false,
    summary: "You book a yurt.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Howling Wolf Farm", role: "The farm." },
      { name: "The yurt", role: "Seasonal yurt stay." },
    ],
    howItRuns: "Book.",
  },
  "humble-bee-farm": {
    model: "founder",
    modelLabel: "Working mixed farm",
    unique: false,
    summary: "You book a yurt.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Humble Bee Farm", role: "The farm." },
      { name: "Nomadic yurts", role: "Four 5-metre nomadic yurts." },
    ],
    howItRuns: "Book.",
  },
  "the-tipi-ranch": {
    model: "founder",
    modelLabel: "Livestock farm",
    unique: false,
    summary: "Private livestock farm.",
    whoDecides: "The family.",
    bodies: [
      { name: "The Tipi Ranch", role: "Livestock farm." },
      { name: "The tipis", role: "Canvas tipis on decks." },
    ],
    howItRuns: "Book.",
  },
  "windy-goat-acres": {
    model: "founder",
    modelLabel: "Hobby goat farm",
    unique: false,
    summary: "Private hobby farm.",
    whoDecides: "Jessica and Jim.",
    bodies: [
      { name: "Windy Goat Acres", role: "The homestead." },
      { name: "The yurt", role: "24-foot yurt. Instant book." },
    ],
    howItRuns: "Book.",
  },
  "quarter-spring-farm": {
    model: "founder",
    modelLabel: "Goat soap farm",
    unique: false,
    summary: "Private working farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Quarter Spring Farm", role: "Working homestead." },
      { name: "Thunder Dome", role: "Geodesic dome." },
    ],
    howItRuns: "Book.",
  },
  "kaluna-farm": {
    model: "founder",
    modelLabel: "Mountain homestead",
    unique: false,
    summary: "kalunafarm.com. You book a wooden yurt. You do not buy Talking Rock.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Kaluna Farm Retreat", role: "kalunafarm.com." },
      { name: "The wooden yurt", role: "That lodgify page." },
    ],
    howItRuns: "Book.",
  },
};

export const livingBatch31Leaders: Record<string, VillageLeaders> = {
  "wildcat-ridge-farm": {
    people: [],
    office: { url: "https://www.wildcatridgefarm.com/", address: "3553 Panther Creek Road, Clyde, NC 28721", phone: "(828) 246-7542" },
  },
  "tirrito-farm": {
    people: [],
    office: { url: "https://www.tirritofarm.com/", address: "6150 S Kansas Settlement Road, Willcox, AZ 85643", phone: "(520) 200-7270" },
  },
  "dancing-moose-farm": {
    people: [],
    office: { url: "https://www.dancingmoosefarmut.com/", address: "13485 E Highway 39, Huntsville, UT 84317", phone: "(801) 633-7254" },
  },
  "come-spring-farm": {
    people: [],
    office: { url: "https://comespringfarm.holidayfuture.com/", address: "Union, Maine" },
  },
  "howling-wolf-farm": {
    people: [],
    office: { url: "https://www.howlingwolffarm.com/", address: "209 Tilton Road, Randolph, VT 05060" },
  },
  "humble-bee-farm": {
    people: [],
    office: { url: "https://humblebeefarm.co.uk/", address: "Flixton, Scarborough, North Yorkshire YO11 3UJ", phone: "01723 890437" },
  },
  "the-tipi-ranch": {
    people: [],
    office: { url: "https://thetipiretreat.com/", address: "Near Thermopolis, Wyoming" },
  },
  "windy-goat-acres": {
    people: [],
    office: { url: "https://www.hipcamp.com/en-US/land/iowa-windy-goat-acres-ex9hre0r", address: "3091 Q Avenue, Chelsea, IA 52215", phone: "(319) 573-0799" },
  },
  "quarter-spring-farm": {
    people: [],
    office: { url: "https://quarterspringfarm.com/", address: "422 Davis Hollow Road, Liberty, TN 37095" },
  },
  "kaluna-farm": {
    people: [],
    office: { url: "https://kalunafarm.com/", address: "462 Cedar Springs Hollow, Talking Rock, GA 30175", phone: "(828) 772-4206" },
  },
};

export const livingBatch31Accommodations: Record<string, Accommodations> = {
  "wildcat-ridge-farm": {
    visitor: {
      overview: "Yin Yurt with kitchen, bath, bedroom, and wrap-around porch. Confirm current with (828) 246-7542.",
      camping: { available: true, types: ["yurt"], detail: "Yin Yurt. Not a cabin." },
      rooms: { available: false, types: [], detail: "The unique stay is the yurt." },
      other: { available: true, types: ["porch"], detail: "Wrap-around porch." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tirrito-farm": {
    visitor: {
      overview: "Six geodesic glamping domes. Suites and RV. Confirm current with (520) 200-7270.",
      camping: { available: true, types: ["geodesic dome"], detail: "Six luxury geodesic domes. Not a cabin as the public unique stay." },
      rooms: { available: true, types: ["suite"], detail: "Casitas. The featured unique stay is the geodesic." },
      other: { available: true, types: ["RV"], detail: "RV stays." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "dancing-moose-farm": {
    visitor: {
      overview: "Three 20-foot overnight yurts. Farm tour with the stay. Confirm current with (801) 633-7254.",
      camping: { available: true, types: ["yurt"], detail: "Three 20-foot yurts. A 24-foot hospitality yurt is for gatherings. Not a cabin." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public stay." },
      other: { available: true, types: ["hospitality yurt"], detail: "24-foot gathering yurt." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "come-spring-farm": {
    visitor: {
      overview: "Geodesic domes. Confirm current on the stay page.",
      camping: { available: true, types: ["geodesic dome"], detail: "Geodesic domes on 10 acres." },
      rooms: { available: false, types: [], detail: "An Airstream is listed separately. The unique stay is the geodesic." },
      other: { available: true, types: ["pond"], detail: "Round Pond." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "howling-wolf-farm": {
    visitor: {
      overview: "Farm yurt. Book. Seasonal.",
      camping: { available: true, types: ["yurt", "platform tent"], detail: "Yurt and platform tent." },
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
  "humble-bee-farm": {
    visitor: {
      overview: "Four nomadic yurts. Confirm current with 01723 890437.",
      camping: { available: true, types: ["yurt", "tent", "wigwam"], detail: "Four 5-metre nomadic yurts. The unique stay is the yurt. Wigwams and pitches." },
      rooms: { available: true, types: ["cottage"], detail: "Cottages. The featured unique stay is the nomadic yurt." },
      other: { available: true, types: ["hot tub cabin"], detail: "Deluxe wigwams." },
    },
    resident: {
      overview: "Staff housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Staff housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "the-tipi-ranch": {
    visitor: {
      overview: "Canvas tipis. Confirm current with the farm.",
      camping: { available: true, types: ["tipi"], detail: "Deluxe canvas tipis on decks." },
      rooms: { available: false, types: [], detail: "No cabin listed as the public stay." },
      other: { available: true, types: ["deck"], detail: "Deck." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "windy-goat-acres": {
    visitor: {
      overview: "24-foot yurt. Instant book. Confirm current with (319) 573-0799.",
      camping: { available: true, types: ["yurt"], detail: "24-foot yurt. Not a cabin as the public unique stay." },
      rooms: { available: true, types: ["cabin", "hobbit house"], detail: "Cabins and a hobbit house. The unique stay is the yurt." },
      other: { available: false, types: [], detail: "None listed as a hotel block." },
    },
    resident: {
      overview: "Family housing not isolated here.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "quarter-spring-farm": {
    visitor: {
      overview: "Thunder Dome geodesic. Instant book. Queen bed and wood stove.",
      camping: { available: true, types: ["geodesic dome"], detail: "Thunder Dome. No power or wifi. Queen bed and wood stove." },
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
  "kaluna-farm": {
    visitor: {
      overview: "Wooden yurt. Book Now calendar. Confirm current with (828) 772-4206.",
      camping: { available: true, types: ["yurt"], detail: "Wooden yurt with sky dome. Not a cabin as the public unique stay." },
      rooms: { available: true, types: ["cabin", "treehouse"], detail: "Log cabin and treehouse. The unique stay is the wooden yurt." },
      other: { available: true, types: ["spring"], detail: "Sacred Spring." },
    },
    resident: {
      overview: "Family housing not isolated here. A booking is not membership.",
      camping: { available: false, types: [], detail: "People work the land." },
      rooms: { available: false, types: [], detail: "Family housing not isolated here." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
