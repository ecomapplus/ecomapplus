import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const formerLegalEntities: Record<string, LegalEntity[]> = {
 "drop-city": [
  {
   name: "Drop City land (historical)",
   kind: "Unincorporated community association",
   role: "A few acres of Las Animas County pasture bought in 1965 by four artists. No 501(c)(3). No lots. Sold after the commune emptied.",
   status: "historical",
   layer: "land",
   year: "1965–late 1970s",
  },
  {
   name: "Founder artists’ circle",
   kind: "Unincorporated community association",
   role: "Gene and JoAnn Bernofsky, Richard Kallweit, Clark Richert. Drop art, geodesic domes.",
   status: "historical",
   layer: "membership",
   year: "1965",
  },
 ],
 "morningstar-ranch": [
  {
   name: "Morningstar Ranch (Gottlieb title)",
   kind: "California private organic farm",
   role: "Lou Gottlieb’s 32-acre Sonoma ranch. He tried to deed it to God; California would not record that. Later private land.",
   status: "historical",
   layer: "land",
   year: "1966–1973 as Open Land",
  },
  {
   name: "Open Land household",
   kind: "Unincorporated community association",
   role: "No membership filter. County health and building cases ended the residential commune. Dwellings demolished.",
   status: "historical",
   layer: "membership",
   year: "1966–1973",
  },
 ],
 rajneeshpuram: [
  {
   name: "City of Rajneeshpuram",
   kind: "Dissolved municipal corporation",
   role: "Oregon municipal corporation 1982–1985 on the Big Muddy Ranch. Disincorporated.",
   status: "historical",
   layer: "membership",
   year: "1982–1985",
  },
  {
   name: "Big Muddy Ranch / Chidvilas purchase",
   kind: "Religious society",
   role: "64,229 acres bought in 1981. Later sold. Washington Family Ranch (Young Life) is a later landlord, not the commune.",
   status: "historical",
   layer: "land",
   year: "1981–1985",
  },
  {
   name: "Rajneesh Foundation International",
   kind: "Religious society",
   role: "The parallel theocratic household. Immigration and criminal cases ended the Oregon experiment.",
   status: "historical",
   layer: "covenant",
   year: "1981–1985",
  },
 ], "source-family": [
  {
   name: "The Source Restaurant",
   kind: "Trading company",
   role: "8301 Sunset Boulevard vegetarian restaurant, 1969. The till of the Los Feliz household. Not operating as theirs.",
   status: "historical",
   layer: "enterprise",
   year: "1969–1974",
  },
  {
   name: "The Source Family household",
   kind: "Religious society",
   role: "Father Yod / Jim Baker. About 150 people. Hawaii 1974. Dispersed after 25 August 1975.",
   status: "historical",
   layer: "membership",
   year: "1969–1975",
  },
 ], "brook-farm": [
  {
   name: "Brook Farm Association / Phalanx",
   kind: "Unincorporated community association",
   role: "1841 Transcendentalist association, 1844 Fourierist phalanx. Dissolved 1847 after the Phalanstery fire.",
   status: "historical",
   layer: "membership",
   year: "1841–1847",
  },
  {
   name: "Ellis Farm, West Roxbury",
   kind: "Massachusetts private organic farm",
   role: "About 200 acres. Now a National Historic Landmark and cemetery landscape.",
   status: "historical",
   layer: "land",
   year: "1841–1847",
  },
 ],
};

export const formerLand: Record<string, LandOwnership> = {
 "drop-city": {
  owner: "Historical: four artists’ pasture east of Trinidad, later sold",
  complexity: "simple",
  tenure: "Private (historical)",
  howHeld: "A few acres bought for $450 in 1965. No lots. Sold after the commune emptied. Domes went for scrap.",
  narrative: "Goat pasture, geodesic car-top domes, Las Animas County.",
  divided: [],
 },
 "morningstar-ranch": {
  owner: "Historical: Lou Gottlieb’s 32-acre Occidental ranch, later private",
  complexity: "simple",
  tenure: "Private (historical)",
  howHeld: "Gottlieb held title and tried to deed it to God. The county treated Open Land as an illegal camp. Dwellings were demolished. The acreage remains private land.",
  narrative: "Sonoma apple and redwood ranch. Open Land 1966–1973. Not OAEC.",
  divided: [],
 },
 rajneeshpuram: {
  owner: "Historical: Big Muddy Ranch / City of Rajneeshpuram; later Washington Family Ranch",
  complexity: "simple",
  tenure: "Dissolved city / later camp",
  howHeld: "64,229 acres purchased 1981. City 1982–85. Sold after collapse. Young Life’s Washington Family Ranch is a later use, not the commune.",
  narrative: "Wasco County high desert. A city that lasted three years. Not Antelope.",
  divided: [],
 }, "source-family": {
  owner: "Historical: The Source Restaurant and Los Feliz / Oahu households",
  complexity: "split",
  tenure: "Restaurant + houses (historical)",
  howHeld: "A Sunset Strip lease and communal houses, then a short Oahu compound. Baker’s 1975 death ended the holding as a Family.",
  narrative: "The restaurant is not theirs. Hawaii was a year.",
  divided: [
   { label: "The Source, 8301 Sunset", holder: "Historical restaurant", share: "Till of the household", what: "1969–1974." },
   { label: "Oahu compound", holder: "Historical Family", share: "1974–75", what: "Ended with Baker’s death." },
  ],
 }, "brook-farm": {
  owner: "Historical: Brook Farm Association on the Ellis Farm, West Roxbury",
  complexity: "simple",
  tenure: "Association (historical)",
  howHeld: "About 200 acres, 1841–1847. Fire and debt. Now a National Historic Landmark and cemetery landscape.",
  narrative: "Transcendentalist meadow, then a Fourierist phalanx. Six years.",
  divided: [],
 },
};

export const formerFunding: Record<string, CommunityFunding> = {
 "drop-city": {
  overview: "A goat-pasture art commune paid by whatever four artists and whoever arrived could raise. Closed.",
  grantsHeadline: "None isolated",
  privateHeadline: "Art, a festival, and a Fuller award",
  grants: [
   {
    source: "No public land-purchase grant found",
    amount: "$450 land purchase from the founders’ pockets",
    year: "1965",
    certainty: "documented",
    kind: "other",
    note: "A pasture.",
   },
  ],
  private: [
   {
    source: "Droppings / Joy Festival and the 1967 Dymaxion Award",
    amount: "Attention",
    year: "1966–67",
    certainty: "documented",
    kind: "award",
    note: "Press and a Fuller prize. The commune still emptied.",
   },
  ],
 },
 "morningstar-ranch": {
  overview: "Open Land paid by Gottlieb’s music money and whoever arrived, not by Occidental lots. Ended by eviction.",
  grantsHeadline: "None isolated",
  privateHeadline: "Founder’s resources and garden food",
  grants: [
   {
    source: "No county grant to Open Land",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "The county spent on inspections and demolition, not on a village grant.",
   },
  ],
  private: [
   {
    source: "Lou Gottlieb (Limeliters) and resident labor",
    amount: "The 32 acres and the table",
    year: "1966–1973",
    certainty: "documented",
    kind: "donation",
    note: "Hospitality.",
   },
  ],
 },
 rajneeshpuram: {
  overview: "A ranch-city paid by sannyasin labor, courses, and a municipal experiment that did not survive 1985.",
  grantsHeadline: "None that survived the collapse",
  privateHeadline: "Ashram labor and course fees",
  grants: [
   {
    source: "No clean public development grant of record for the city",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Wasco County was an adversary.",
   },
  ],
  private: [
   {
    source: "Rajneesh movement labor, courses, ranch and city enterprises",
    amount: "Enough to build a city; not enough to outrun 1985",
    year: "1981–1985",
    certainty: "documented",
    kind: "business",
    note: "Airstrip, mall, agriculture. Criminal cases ended the till as a village.",
   },
  ],
 }, "source-family": {
  overview: "A household paid by a Sunset Strip vegetarian restaurant, not by lots. Ended 1975.",
  grantsHeadline: "None isolated",
  privateHeadline: "The Source Restaurant",
  grants: [
   {
    source: "No land-purchase grant",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "A restaurant lease and houses.",
   },
  ],
  private: [
   {
    source: "The Source, 8301 Sunset Boulevard",
    amount: "The Family’s till, 1969–1974",
    year: "1969–1974",
    certainty: "documented",
    kind: "business",
    note: "When the household left for Hawaii, the LA till ended. Baker’s death ended the rest.",
   },
  ],
 }, "brook-farm": {
  overview: "A six-year association paid by member shares, a school, and farm labor, then a fire and debts.",
  grantsHeadline: "None",
  privateHeadline: "Member stock and the school",
  grants: [
   {
    source: "No public grant",
    amount: "—",
    year: "1841–1847",
    certainty: "documented",
    kind: "other",
    note: "A private association. The Phalanstery was uninsured.",
   },
  ],
  private: [
   {
    source: "Member shares, school fees, farm produce, Fourierist stock",
    amount: "Enough for six years; not enough after 1846",
    year: "1841–1847",
    certainty: "documented",
    kind: "member-equity",
    note: "Hawthorne left early. The fire closed the arithmetic.",
   },
  ],
 },
};

export const formerVisitJoin: Record<string, VisitJoin> = {
 "drop-city": {
  visit: 1,
  join: 1,
  visitProcess:
   "The domes are gone.",
  joinProcess:
   "There is no membership. The commune emptied in the 1970s. You cannot join Drop City.",
 },
 "morningstar-ranch": {
  visit: 1,
  join: 1,
  visitProcess:
   "The 32 acres are private Sonoma land, not Open Land. The county ended the residential commune in 1973. Do not drop in. OAEC is the living Occidental teaching farm in this atlas.",
  joinProcess:
   "There is no Open Land membership left. Gottlieb’s experiment is historical. You cannot join Morningstar as a village.",
 },
 rajneeshpuram: {
  visit: 1,
  join: 1,
  visitProcess:
   "The Big Muddy is a Young Life camp (Washington Family Ranch). It is not Antelope.",
  joinProcess:
   "The City of Rajneeshpuram was disincorporated in 1985. There is no sannyasin membership of that city to join.",
 }, "source-family": {
  visit: 1,
  join: 1,
  visitProcess:
   "The Source Restaurant is not theirs. An archive and a documentary trail remain. There is no household to visit.",
  joinProcess:
   "Father Yod died in 1975. The Family dispersed. There is no robe to put on as membership.",
 }, "brook-farm": {
  visit: 2,
  join: 1,
  visitProcess:
   "The Ellis Farm site in West Roxbury is a National Historic Landmark and cemetery landscape. nps.gov notes the place.",
  joinProcess:
   "Brook Farm dissolved in 1847. There is no phalanx share to buy. Hawthorne already left.",
 },
};

export const formerDailyLife: Record<string, DailyLife> = {
 "drop-city": {
  typical: [
   { title: "Raising geodesic domes", detail: "Car-top sheet metal on Fuller frames. The architecture was the week." },
   { title: "Drop art", detail: "Happenings, painting, the Joy Festival. A pasture as a stage." },
   { title: "Goat-pasture chores", detail: "A few acres, whoever had arrived, a kitchen that had to eat." },
  ],
  unique: {
   title: "The first rural dome commune, and one of the first to empty",
   detail: "Drop City is 1965–late 1970s, Trinidad pasture, gone. Fuller gave them a Dymaxion Award in 1967; the car-top domes later went for scrap.",
  },
 },
 "morningstar-ranch": {
  typical: [
   { title: "Open Land arrivals", detail: "No one turned away. Gardens, music, whoever had hitchhiked to Occidental." },
   { title: "Ranch chores", detail: "Apples, redwood edge, a kitchen for hundreds on some weekends." },
   { title: "County inspections", detail: "Health and building cases were as much the week as the garden, by the end." },
  ],
  unique: {
   title: "The ranch Gottlieb tried to deed to God",
   detail: "Lou Gottlieb opened his 32-acre Occidental ranch as Open Land in 1966, tried to deed it to God, and Sonoma County demolished the residential commune by 1973.",
  },
 },
 rajneeshpuram: {
  typical: [
   { title: "Ranch and city building", detail: "Airstrip, mall, houses, agriculture on Big Muddy. Thousands of sannyasins." },
   { title: "Darshan and work", detail: "Ashram schedule inside a municipal corporation. Sheela’s office and the Bhagwan’s silence." },
   { title: "Conflict with the county", detail: "Wasco politics, Antelope, then the 1984 crimes. That is the historical week." },
  ],
  unique: {
   title: "The Oregon city that lasted three years",
   detail: "Rajneeshpuram is 1981–85, incorporated and disincorporated. Listed as closed.",
  },
 }, "source-family": {
  typical: [
   { title: "The Source Restaurant", detail: "Vegetarian service on the Sunset Strip. The till and the public face." },
   { title: "Household and band", detail: "White robes, Los Feliz houses, Ya Ho Wha 13." },
   { title: "Hawaii year", detail: "1974–75 compound, then a hang-gliding death and dispersal." },
  ],
  unique: {
   title: "The Strip household that ended in a Hawaiian canyon",
   detail: "Baker died in a hang-gliding accident on 25 August 1975; the Family dispersed that year after a 1974 move from Los Feliz to Hawaii.",
  },
 }, "brook-farm": {
  typical: [
   { title: "Farm labor and the school", detail: "Intellectuals milking, a school that paid, West Roxbury meadows." },
   { title: "Association meetings", detail: "Transcendentalist table, then Fourierist groups after 1844." },
   { title: "Building the Phalanstery", detail: "The uninsured hall that burned in 1846 and closed the arithmetic." },
  ],
  unique: {
   title: "The six-year phalanx Hawthorne left",
   detail: "Brook Farm is 1841–1847. A landmark now.",
  },
 },
};

export const formerInformal: Record<string, InformalAgreement[]> = {
 "drop-city": [
  { kind: "media-story", why: "Every history of hippie communes wants the same dome photograph. The site is gone." },
  { kind: "land-care", why: "A few acres of pasture, then scrap. There is no current land compact because there is no village." },
  { kind: "quiet-practice", why: "Drop art was the practice. It ended. This page is a record." },
 ],
 "morningstar-ranch": [
  { kind: "guest-stay", why: "Open Land meant anyone. The county ended that. There is no guest compact left." },
  { kind: "land-care", why: "A 32-acre ranch that was demolished as a camp. Private now." },
  { kind: "media-story", why: "Gottlieb, the Limeliters, a deed to God. Journalists still want the story. The village is over." },
 ],
 rajneeshpuram: [
  { kind: "media-story", why: "Bioterror, a city, a guru. The compact here is not to treat a crime site as an ecovillage you can still join." },
  { kind: "quiet-practice", why: "Ashram schedule inside a municipal corporation. Historical." },
  { kind: "land-care", why: "64,000 acres that became a camp for a different landlord." },
 ], "source-family": [
  { kind: "quiet-practice", why: "Father Yod, robes, a diet. Ended 1975." },
  { kind: "kitchen-table", why: "The Source Restaurant was the table. Not theirs now." },
  { kind: "media-story", why: "Documentary and archive." },
 ], "brook-farm": [
  { kind: "labour-roster", why: "Intellectuals on the Ellis Farm. Six years of milking and a school." },
  { kind: "membership-trial", why: "Shares in an association, then a phalanx. Dissolved 1847." },
  { kind: "media-story", why: "Hawthorne already wrote it. The site is a landmark." },
 ],
};
