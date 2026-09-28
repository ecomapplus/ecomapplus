import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const russiaLegalEntities: Record<string, LegalEntity[]> = {
 kitezh: [
  {
   name: "Non-commercial partnership of Kitezh foster parents",
   kind: "Russian non-commercial partnership",
   role: "Holds the forest village and the experimental school. Foster homes, not hectares for sale.",
   status: "current",
   layer: "land",
   year: "1992",
  },
  {
   name: "Kitezh experimental school",
   kind: "Russian autonomous non-profit organization",
   role: "Registered experimental school. Teachers are also parents.",
   status: "current",
   layer: "education",
  },
  {
   name: "Ecologia Youth Trust",
   kind: "Associated public funder",
   role: "Scottish charity; Findhorn-linked. Paid and sent volunteers 1995–2022. Support, not title.",
   status: "historical",
   layer: "network",
   year: "1995–2022",
  },
 ],
 "nevo-ecoville": [
  {
   name: "Centre for Ecological Initiatives ‘Nevo-Ecoville’",
   kind: "Russian public association",
   role: "26 ha of organisation land at Reuskula. The public face of the settlement.",
   status: "current",
   layer: "land",
   year: "1995",
  },
  {
   name: "Settlers’ private plots",
   kind: "Russian private land plot",
   role: "16 ha in private hands beside the association.",
   status: "current",
   layer: "membership",
  },
 ],
 grishino: [
  {
   name: "Grishino eco-settlement circle",
   kind: "Unincorporated community association",
   role: "Two community izbas, gardens, seminars. A hamlet host.",
   status: "current",
   layer: "membership",
   year: "1994",
  },
  {
   name: "Village of Grishino",
   kind: "Russian municipal rural settlement",
   role: "The older hamlet at the confluence.",
   status: "current",
   layer: "land",
  },
 ],
 tiberkul: [
  {
   name: "Church of the Last Testament",
   kind: "Russian religious organization",
   role: "The legal wrapper of the taiga settlements. A church.",
   status: "current",
   layer: "land",
   year: "1991; settlement 1994",
  },
  {
   name: "Abode of Dawn / Tiberkul mountain town",
   kind: "Russian religious organization",
   role: "Wooden town on ~2.5 km². Three tiers.",
   status: "current",
   layer: "membership",
   year: "1994",
  },
  {
   name: "Sergey Torop (Vissarion)",
   kind: "Unincorporated community association",
   role: "Founding teacher. Arrested 2020; twelve-year sentence reported 2025. Not the cadastre.",
   status: "historical",
   layer: "covenant",
   year: "1991–2020",
  },
 ],
 kovcheg: [
  {
   name: "Village of Kovcheg (Ilyinskoye rural settlement)",
   kind: "Russian municipal rural settlement",
   role: "Mapped village in Maloyaroslavets District. 121 ha on the public split.",
   status: "current",
   layer: "land",
   year: "2001–",
  },
  {
   name: "Family one-hectare plots",
   kind: "Russian private land plot",
   role: "78 plots of 1 ha. Voted in by 75% of existing members.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Common land (pond, farmland, roads)",
   kind: "Russian non-commercial partnership",
   role: "7 ha common with pond, 21 ha common farmland, 15 ha roads. The settlement core.",
   status: "current",
   layer: "covenant",
  },
 ],
 vedrussiya: [
  {
   name: "Vedrussiya kin’s-domain settlement",
   kind: "Russian dacha non-profit partnership",
   role: "353 ha on the current public count; 275 plots of 1–2 ha. A settlement of family dirt.",
   status: "current",
   layer: "land",
   year: "2003",
  },
  {
   name: "Family domains",
   kind: "Russian private land plot",
   role: "265 families on the settlement count. A hectare is a family’s if they are in and they work it.",
   status: "current",
   layer: "membership",
  },
 ],
 rodnoe: [
  {
   name: "Rodnoe Kin Domain Settlement",
   kind: "Russian dacha non-profit partnership",
   role: "70 ha officially recognised June 2004. Among the first such papers in the country.",
   status: "current",
   layer: "land",
   year: "2004",
  },
  {
   name: "Family homestead permits",
   kind: "Russian private land plot",
   role: "Permits from 2006. About 60 permanent families.",
   status: "current",
   layer: "membership",
  },
 ],
 orion: [
  {
   name: "Orion children’s village",
   kind: "Russian non-commercial partnership",
   role: "Second Kitezh. Foster houses, not hectares for sale.",
   status: "current",
   layer: "land",
   year: "2004",
  },
  {
   name: "Foster families",
   kind: "Unincorporated community association",
   role: "10 families and ~40 children. Confirm the roll.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Kitezh (sister)",
   kind: "Russian non-commercial partnership",
   role: "The 1992 mother village. A sister, not this title.",
   status: "associated",
   layer: "network",
   year: "1992",
  },
 ],
 zdravoe: [
  {
   name: "Zdravoe kin’s-domain settlement",
   kind: "Russian dacha non-profit partnership",
   role: "145 ha beside stanitsa Grigoryevskaya. Common core plus family hectares.",
   status: "current",
   layer: "land",
   year: "2013",
  },
  {
   name: "Family domains and guest core",
   kind: "Russian private land plot",
   role: "120 ha family plots and roads; 7 ha common; 15 ha organic fields. Cabins are the public door.",
   status: "current",
   layer: "membership",
  },
 ]
};

export const russiaLand: Record<string, LandOwnership> = {
 kitezh: {
  owner: "Kitezh non-commercial partnership, ~70 ha of Kaluga forest clearing",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "A foster-parent partnership holds the wooden village and school. Houses are homes for children.",
  narrative: "Morozov, 1992, empty ground 10 km from Baryatino.",
  divided: [],
 },
 "nevo-ecoville": {
  owner: "Nevo-Ecoville public association (26 ha) plus settlers’ private plots (16 ha) at Reuskula",
  complexity: "split",
  tenure: "Lease / partnership",
  howHeld: "Organisation land and private hectares sit beside each other on Ladoga.",
  narrative: "Idea 1987, work 1993, association 1995. Confirm who winters.",
  divided: [
   { label: "Association", holder: "Centre for Ecological Initiatives", share: "26 ha", what: "The public farm and houses." },
   { label: "Private plots", holder: "Settlers", share: "16 ha", what: "Family dirt beside the association." }
  ],
 },
 grishino: {
  owner: "Village of Grishino; eco-circle in two community izbas",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "A living hamlet. Community houses and gardens.",
  narrative: "1994 eco-settlement in an older village. Seven year-round.",
  divided: [],
 },
 tiberkul: {
  owner: "Church of the Last Testament, original ~2.5 km² at Lake Tiberkul, later neighbouring villages",
  complexity: "split",
  tenure: "Religious society",
  howHeld: "A church settlement on taiga. Wooden town, not family hectares you buy. Confirm who holds what after 2020.",
  narrative: "1994 Tiberkul. Petropavlovka and Cheremshanka beside it. A faith. The founder is in prison.",
  divided: [
   { label: "Mountain town", holder: "Church of the Last Testament", share: "~2.5 km² original", what: "Abode of Dawn, Heavenly Abode, Temple Peak." },
   { label: "Linked villages", holder: "Followers in Petropavlovka, Cheremshanka and others", share: "Expanded settlement", what: "Dirt roads between villages." }
  ],
 },
 kovcheg: {
  owner: "Village of Kovcheg, 121 ha split among family plots and common land",
  complexity: "split",
  tenure: "Cooperative (common title)",
  howHeld: "78 one-hectare family plots, 7 ha common with a pond, 21 ha common farmland, 15 ha roads. Membership vote.",
  narrative: "2001 Maloyaroslavets field. You are voted in.",
  divided: [
   { label: "Family plots", holder: "Member families", share: "78 × 1 ha", what: "A hectare after 75% say yes." },
   { label: "Common", holder: "Settlement", share: "7 + 21 + 15 ha", what: "Pond, farmland, roads." }
  ],
 },
 vedrussiya: {
  owner: "Vedrussiya settlement, 353 ha on the current public count (older accounts ~554 ha)",
  complexity: "split",
  tenure: "Freehold title",
  howHeld: "275 plots of 1–2 ha as family domains. A settlement of private homesteads.",
  narrative: "2003 Seversky. Excursions by booking. Confirm the cadastre.",
  divided: [
   { label: "Family domains", holder: "265 families (settlement count)", share: "1–2 ha plots", what: "Worked hectares, not listings." },
   { label: "Settlement common", holder: "Vedrussiya", share: "Remainder of 353 ha", what: "Roads and common. Confirm." }
  ],
 },
 rodnoe: {
  owner: "Rodnoe Kin Domain Settlement, 70 ha recognised 2004, later write-ups ~300 ha",
  complexity: "split",
  tenure: "Freehold title",
  howHeld: "Officially recognised kin’s-domain settlement. Family permits from 2006.",
  narrative: "Vladimir dirt, June 2004 paper. About 60 permanent families.",
  divided: [
   { label: "Recognised core", holder: "Rodnoe settlement", share: "70 ha (2004)", what: "The first paper." },
   { label: "Family permits", holder: "Homesteaders", share: "Later ~300 ha write-up", what: "Permits." }
  ],
 },
 orion: {
  owner: "Orion children’s village, foster houses on Kaluga dirt, sister to Kitezh",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "A non-profit foster village. Reed-beds were a gift. Houses are children’s homes.",
  narrative: "2004, Maria Pichugina. Ten families in the published count.",
  divided: [],
 },
 zdravoe: {
  owner: "Zdravoe settlement, 145 ha beside stanitsa Grigoryevskaya",
  complexity: "split",
  tenure: "Freehold title",
  howHeld: "7 ha common, 15 ha organic fields, 120 ha family domains and roads. Guest cabins on the common.",
  narrative: "Spring 2013 empty rectangle. Ponds, house of culture. A hectare if they take you.",
  divided: [
   { label: "Common", holder: "Settlement", share: "7 ha + 15 ha fields", what: "Ponds, house of culture, organic beds, horses." },
   { label: "Family domains", holder: "Households", share: "120 ha plots and roads", what: "A hectare to work." }
  ],
 }
};

export const russiaFunding: Record<string, CommunityFunding> = {
 kitezh: {
  overview: "A Kaluga foster village paid by stipends, a school, and two decades of Scottish gifts, not by Baryatino lots.",
  grantsHeadline: "Ecologia (historical)",
  privateHeadline: "Foster stipends and school",
  grants: [
   {
    source: "Ecologia Youth Trust (Scotland)",
    amount: "£20,000 (1998); £30,000 (1999); later programme gifts",
    year: "1995–2022",
    certainty: "documented",
    kind: "donation",
    note: "Findhorn-linked charity. Volunteers and cash. Support, not title. Path closed 2022.",
   },
   {
    source: "DEFRA / British Council reed-beds (with Orion)",
    amount: "Wastewater construction",
    year: "2000s",
    certainty: "documented",
    kind: "grant",
    note: "Biological treatment at both villages. A plant.",
   }
  ],
  private: [
   {
    source: "Foster-family stipends, school, small gifts",
    amount: "Ongoing",
    certainty: "estimated",
    kind: "business",
    note: "The weekday after the foreigners left. Not house sales.",
   }
  ],
 },
 "nevo-ecoville": {
  overview: "A Ladoga association paid by gardens, labour, and a small education door, not by Sortavala lots.",
  grantsHeadline: "None isolated",
  privateHeadline: "Gardens and crafts",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A public association on organisation and private land.",
   }
  ],
  private: [
   {
    source: "Gardens, crafts, teaching",
    amount: "Small / unpublished",
    certainty: "estimated",
    kind: "business",
    note: "Forty people on a page.",
   }
  ],
 },
 grishino: {
  overview: "A Vazhinka hamlet paid by seminars and herbs.",
  grantsHeadline: "None isolated",
  privateHeadline: "Seminars and Ivan Chai",
  grants: [
   {
    source: "No major public grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A small circle in an older village.",
   }
  ],
  private: [
   {
    source: "Summer seminars, herbs, a kitchen",
    amount: "Seasonal / unpublished",
    certainty: "estimated",
    kind: "courses",
    note: "Guests of a seminar leave.",
   }
  ],
 },
 tiberkul: {
  overview: "A church settlement paid by followers’ labour and gardens, not by Kuraginsky lots. The founder’s 2025 sentence is part of the money story: who still tithes, who still works.",
  grantsHeadline: "None as a housing grant",
  privateHeadline: "Internal labour",
  grants: [
   {
    source: "No public housing-lot grant of record",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A religious organisation’s taiga.",
   }
  ],
  private: [
   {
    source: "Followers’ labour, gardens, internal economy (cash discouraged in the rule)",
    amount: "Unpublished",
    certainty: "estimated",
    kind: "other",
    note: "Confirm after arrests. Tourists do not buy hectares here.",
   }
  ],
 },
 kovcheg: {
  overview: "A Maloyaroslavets settlement paid by family labour, honey, and seminars, not by open lot sales.",
  grantsHeadline: "None isolated",
  privateHeadline: "Homesteads and seminars",
  grants: [
   {
    source: "No major public construction grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "District land for a settlement, then families built.",
   }
  ],
  private: [
   {
    source: "Family building, beekeeping, seminars, common-house events",
    amount: "Earned and sweat (ongoing)",
    year: "2002–present",
    certainty: "documented",
    kind: "business",
    note: "Houses by inhabitants; a sawbench on site. A hectare is a vote.",
   }
  ],
 },
 vedrussiya: {
  overview: "A Seversky settlement of family hectares paid by homesteaders.",
  grantsHeadline: "None isolated",
  privateHeadline: "Family domains",
  grants: [
   {
    source: "No major public grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A kin’s-domain settlement.",
   }
  ],
  private: [
   {
    source: "Family homestead building and excursions",
    amount: "Household and visit fees",
    year: "2003–present",
    certainty: "estimated",
    kind: "business",
    note: "265 families on the count. A hectare is worked.",
   }
  ],
 },
 rodnoe: {
  overview: "A Vladimir settlement paid by homesteaders after a 2004 recognition, not by Sudogda lots on a portal.",
  grantsHeadline: "Recognition",
  privateHeadline: "Homestead permits",
  grants: [
   {
    source: "Official recognition of 70 ha as Rodnoe Kin Domain Settlement",
    amount: "Paper (June 2004)",
    year: "2004",
    certainty: "documented",
    kind: "other",
    note: "A status. Ladnoe, Zavetnoe, Solnechnoe recognised in the same wave.",
   }
  ],
  private: [
   {
    source: "Share purchase (2002) then homestead permits (2006–)",
    amount: "Household",
    year: "2002–present",
    certainty: "documented",
    kind: "member-equity",
    note: "About 60 permanent families. Confirm who stayed after the 2009 wave.",
   }
  ],
 },
 orion: {
  overview: "A second Kitezh, paid as a foster village, reed-beds as a British gift, not Kaluga lots.",
  grantsHeadline: "Reed-beds (historical)",
  privateHeadline: "Foster stipends",
  grants: [
   {
    source: "DEFRA / British Council reed-beds",
    amount: "Wastewater construction",
    year: "2000s",
    certainty: "documented",
    kind: "grant",
    note: "Shared with Kitezh. A plant.",
   },
   {
    source: "Ecologia Youth Trust",
    amount: "Programme support until 2022",
    year: "2004–2022",
    certainty: "documented",
    kind: "donation",
    note: "Volunteers and cash. Path closed.",
   }
  ],
  private: [
   {
    source: "Foster stipends and school",
    amount: "Ongoing",
    certainty: "estimated",
    kind: "business",
    note: "Ten families in the published count. Not house sales.",
   }
  ],
 },
 zdravoe: {
  overview: "A Grigoryevskaya settlement paid by homesteaders and guest nights.",
  grantsHeadline: "None isolated",
  privateHeadline: "Homesteads and stays",
  grants: [
   {
    source: "No major public grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "Private dirt assembled from 2013.",
   }
  ],
  private: [
   {
    source: "Family hectares, guest cabins, bath-house",
    amount: "Household and stay fees (ongoing)",
    year: "2013–present",
    certainty: "documented",
    kind: "business",
    note: "A hectare is an application.",
   }
  ],
 }
};

export const russiaVisitJoin: Record<string, VisitJoin> = {
 kitezh: {
  visit: 2,
  join: 1,
  visitProcess: "Baryatinsky District, ~10 km from Baryatino. A children’s village. International volunteering paused in 2022. Do not arrive at foster houses unannounced. Write. The school is a workplace.",
  joinProcess: "You foster or you teach. Harder than a Kaluga B&B. This is still a children’s house.",
 },
 "nevo-ecoville": {
  visit: 2,
  join: 2,
  visitProcess: "Reuskula, 20 km from Sortavala, Ladoga shore. Write the association. A working farm on skerries.",
  joinProcess: "Association membership or a private plot they will actually sell. Confirm. Harder than a Karelian cabin week.",
 },
 grishino: {
  visit: 3,
  join: 2,
  visitProcess: "Historical Grishino, ~300 km NE of St Petersburg. Summer seminars for adults and children are the public door. Seven in winter, write. Houses are homes.",
  joinProcess: "A small circle in a hamlet. Possible if they say yes. Harder than a seminar week.",
 },
 tiberkul: {
  visit: 1,
  join: 1,
  visitProcess: "Kuraginsky District, Lake Tiberkul. A church settlement. After 2020 arrests, confirm whether any public door exists. Photographers have already been.",
  joinProcess: "A religious commune. Vegan rule, internal discipline, a founder in prison. You are of the church, or you are not.",
 },
 kovcheg: {
  visit: 3,
  join: 2,
  visitProcess: "Village of Kovcheg, 140 km SW of Moscow. Guest days, seminars, or a named settler since 2008. Do not drive the 12 km dirt as a walk-in.",
  joinProcess: "One hectare if 75% of existing members want you as a neighbour. Strict. Harder than a seminar; possible if they vote yes.",
 },
 vedrussiya: {
  visit: 4,
  join: 3,
  visitProcess: "Seversky District. The settlement books excursions (prpvedrussia.ru). Foothill plots. Stay on the path they open.",
  joinProcess: "Apply for a 1–2 ha domain. Easier than Kovcheg’s 75% filter. Confirm what is actually vacant.",
 },
 rodnoe: {
  visit: 3,
  join: 2,
  visitProcess: "Konyaevo / Ilyino, Sudogodsky District. Festivals at the lake several times a year. Houses are homesteads. Write.",
  joinProcess: "A permit and a hectare they will actually give. About 60 permanent families. Confirm.",
 },
 orion: {
  visit: 2,
  join: 1,
  visitProcess: "Kaluga, sister to Kitezh. A children’s village. Write. Do not walk bedrooms. International volunteering paused in 2022.",
  joinProcess: "Foster or teach, as at Kitezh. Harder than a farm stay.",
 },
 zdravoe: {
  visit: 4,
  join: 3,
  visitProcess: "Stanitsa Grigoryevskaya, Seversky District. Guest cabins, bath-house, pond. Book. Family hectares are not the second cabin.",
  joinProcess: "Apply for a family domain. Confirm they are taking people.",
 }
};

export const russiaDailyLife: Record<string, DailyLife> = {
 kitezh: {
  typical: [
   { title: "School morning", detail: "An experimental school in the forest. Teachers are also parents. Children from institutions sit the same table." },
   { title: "House chores", detail: "Twelve wooden houses. Sawmill, tower, a church. The weekday is a family." },
   { title: "Kaluga winter", detail: "250 km from Moscow. Snow. The photograph is summer; the work is the stove." }
  ],
  unique: {
   title: "The village that tried to be a family",
   detail: "Kitezh is 1992, Morozov, ninety children over time.",
  },
 },
 "nevo-ecoville": {
  typical: [
   { title: "Ladoga shore", detail: "Skerries, wind, a garden that has to hold against the lake." },
   { title: "Association morning", detail: "Organisation land and private plots. Someone still opens the tool shed." },
   { title: "Winter count", detail: "Seventeen year-round in a published line. Confirm. The lake does not care." }
  ],
  unique: {
   title: "One of the oldest Russian eco-settlements on a great lake",
   detail: "Nevo-Ecoville is Reuskula 1993–95, forty names.",
  },
 },
 grishino: {
  typical: [
   { title: "Izba stove", detail: "Two community houses in the old style. Seven in winter." },
   { title: "Ivan Chai", detail: "Herbs from the field. A trade the founders helped put on a Russian table." },
   { title: "Summer seminar", detail: "Adults and children. The hamlet fills, then empties." }
  ],
  unique: {
   title: "The hamlet that kept the old house",
   detail: "Grishino is a Vazhinka village with a 1994 eco-circle. Ivan Chai still leaves the wildflower field after the seminars empty the izbas.",
  },
 },
 tiberkul: {
  typical: [
   { title: "Wooden town", detail: "Hand-built houses, a mountain of three tiers. Solar and wind in the write-up." },
   { title: "Vegan table", detail: "The published rule. No cash inside the compact, in the older accounts." },
   { title: "After the arrest", detail: "2020, then a 2025 sentence. The weekday is whoever still milks and prays." }
  ],
  unique: {
   title: "A church in the taiga whose teacher is in prison",
   detail: "Tiberkul is 1994, four thousand names on a page.",
  },
 },
 kovcheg: {
  typical: [
   { title: "One-hectare round", detail: "78 plots. Light adobe, log, foam-block. A sawbench on the common." },
   { title: "Common house", detail: "Meetings, singing, school, guest days. The 10×12 that started 2002." },
   { title: "Bees and ponds", detail: "Sixteen families with hives in an old count; wells and ponds they dug." }
  ],
  unique: {
   title: "The Ark that votes its neighbours",
   detail: "Kovcheg is 121 ha, 75% yes.",
  },
 },
 vedrussiya: {
  typical: [
   { title: "Foothill hectare", detail: "1–2 ha domains. Kuban light. Confirm what is actually planted." },
   { title: "Excursion day", detail: "The public cash and the public story. Guests on a path." },
   { title: "Neighbour dust", detail: "265 families on the count. A settlement that is also a lot of private gates." }
  ],
  unique: {
   title: "The Kuban sea of kin’s domains",
   detail: "Vedrussiya is 2003, 353 ha on the current page.",
  },
 },
 rodnoe: {
  typical: [
   { title: "Permit hectare", detail: "Vladimir field. A homestead that still looks like a building site on many plots." },
   { title: "Lake festival", detail: "Earth Day, harvest, the equinoxes. Guests, then the field again." },
   { title: "Mixed passports", detail: "Russia, Kazakhstan, Germany, Poland in the write-up. Confirm who stayed." }
  ],
  unique: {
   title: "The settlement that got the paper first",
   detail: "Land search in 2001, first parcels in 2003, 70 ha officially recognised in June 2004 — among the first such papers, with Ladnoe, Zavetnoe, and Solnechnoe.",
  },
 },
 orion: {
  typical: [
   { title: "Second school day", detail: "Foster children, a family school. Pichugina’s village." },
   { title: "Reed-bed", detail: "The British plant still in the ground if someone maintained it." },
   { title: "Sister road", detail: "Kitezh is the mother method. Orion is the second house." }
  ],
  unique: {
   title: "Kitezh’s second forest",
   detail: "Maria Pichugina, raised at Kitezh, opened Orion in 2004 as ten foster families; DEFRA and the British Council paid for reed-bed wastewater at both villages.",
  },
 },
 zdravoe: {
  typical: [
   { title: "Pond and bath-house", detail: "Guest night. The Holzer pond on the common. Families next door." },
   { title: "House of culture", detail: "Meetings and seminars on 7 ha that are not a hectare you sleep as a member." },
   { title: "May aerial", detail: "They film the rectangle. Ten years in 2023. Confirm who is actually in the shot." }
  ],
  unique: {
   title: "The Kuban rectangle that hosts a night",
   detail: "Zdravoe is 2013, 145 ha, cabins and domains.",
  },
 }
};

export const russiaInformal: Record<string, InformalAgreement[]> = {
 kitezh: [
  { kind: "children-care", why: "Foster children. Safeguarding cannot be only informal, and yet most of the day is a house. Do not photograph a child as the orphan story." },
  { kind: "care-household", why: "Teachers are parents. The compact is the house table." },
  { kind: "volunteer-intern", why: "Ecologia weeks until 2022. A stay was labour plus a bed." },
  { kind: "guest-stay", why: "A children’s village. Which door is the school and which is a bedroom." },
 ],
 "nevo-ecoville": [
  { kind: "land-care", why: "26 ha association, 16 ha private, a lake. Guests do not harvest the common as a souvenir." },
  { kind: "membership-trial", why: "Association or a private plot." },
  { kind: "guest-stay", why: "Write. Skerries are not a hotel beach." },
  { kind: "labour-roster", why: "Ten families. Someone still opens the shed." },
 ],
 grishino: [
  { kind: "guest-stay", why: "Summer seminars in a living hamlet. Houses are homes." },
  { kind: "course-host", why: "Which izba is the class and which is supper." },
  { kind: "quiet-practice", why: "Different spiritual paths, one stove." },
  { kind: "land-care", why: "Wildflower field, two rivers, forest with bears. Stay on the path." },
 ],
 tiberkul: [
  { kind: "quiet-practice", why: "A church compact. Vegan table, no swearing, a teacher who claimed to be more than a teacher." },
  { kind: "media-story", why: "Every camera wants the Siberian Jesus. Who speaks after the 2025 sentence." },
  { kind: "building-code", why: "Hand-built wood on a mountain of three tiers. A new wall still has to belong to the church’s town." },
  { kind: "conflict-circle", why: "Thousands of people, a founder in prison. Someone still has a process, or they have a split." },
 ],
 kovcheg: [
  { kind: "membership-trial", why: "75% of existing members must want you." },
  { kind: "building-code", why: "Light adobe, log, foam-block. A new house still has to sit a Kaluga winter." },
  { kind: "guest-stay", why: "Guest days only since 2008." },
  { kind: "land-care", why: "78 hectares of family dirt plus a common pond. Guests do not cut the forest they did not plant." },
 ],
 vedrussiya: [
  { kind: "guest-stay", why: "Excursions. Family gates are not the second tour." },
  { kind: "membership-trial", why: "A hectare if they take you. An excursion is not a deed." },
  { kind: "land-care", why: "353 ha of foothill plots. Stay on the path they opened." },
  { kind: "building-code", why: "1–2 ha domains. A new roof still has to look like a homestead." },
 ],
 rodnoe: [
  { kind: "membership-trial", why: "A permit and a hectare." },
  { kind: "guest-stay", why: "Lake days. Homesteads are homes." },
  { kind: "land-care", why: "Abandoned field made into domains. Guests do not take plants." },
  { kind: "conflict-circle", why: "Sixty winter families and a 2009 wave. Someone still has a process." },
 ],
 orion: [
  { kind: "children-care", why: "Forty children in the published count. Do not photograph a child as the second Kitezh story." },
  { kind: "care-household", why: "Foster houses. The compact is the table." },
  { kind: "volunteer-intern", why: "Until 2022." },
  { kind: "guest-stay", why: "Write. Bedrooms are not a second campus." },
 ],
 zdravoe: [
  { kind: "guest-stay", why: "Cabins and a bath-house. Family hectares are not the second cabin." },
  { kind: "membership-trial", why: "Apply." },
  { kind: "animals-stock", why: "Horse school on the 15 ha. Whose animal, who is on the round." },
  { kind: "land-care", why: "Ponds, organic beds, Afiips forest. Guests do not take plants or ride unasked." },
 ]
};
