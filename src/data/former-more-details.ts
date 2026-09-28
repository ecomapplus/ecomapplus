import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const formerMoreLegalEntities: Record<string, LegalEntity[]> = {
 "hancock-shaker": [
  {
   name: "United Society of Believers at Hancock (historical)",
   kind: "Religious society",
   role: "The living Shaker covenant at Hancock, 1790–1960. Ended when the last members left.",
   status: "historical",
   layer: "covenant",
   year: "1790–1960",
  },
  {
   name: "Hancock Shaker Village, Inc.",
   kind: "501(c)(3) educational nonprofit",
   role: "Museum and preservation nonprofit, 1960–61. Holds the National Historic Landmark campus, including the Round Stone Barn. A museum.",
   status: "current",
   layer: "education",
   year: "1960",
  },
 ],
 "oneida-community": [
  {
   name: "Oneida Community (Perfectionists)",
   kind: "Religious society",
   role: "John Humphrey Noyes’s household, 1848–1881. Complex marriage, mutual criticism. Ended in the 1881 joint-stock conversion.",
   status: "historical",
   layer: "membership",
   year: "1848–1881",
  },
  {
   name: "Oneida Community, Limited",
   kind: "Trading company",
   role: "1881 joint-stock successor. Became the silverware firm. Not the religious village.",
   status: "historical",
   layer: "enterprise",
   year: "1881",
  },
  {
   name: "Oneida Community Mansion House",
   kind: "501(c)(3) educational nonprofit",
   role: "Interprets the Mansion House. Tours and apartments. A museum.",
   status: "current",
   layer: "education",
  },
 ], "new-harmony": [
  {
   name: "Harmony Society at Harmonie",
   kind: "Religious society",
   role: "George Rapp’s German communal town, 1814–1825. Sold to Robert Owen. The society moved to Economy, Pennsylvania.",
   status: "historical",
   layer: "membership",
   year: "1814–1825",
  },
  {
   name: "Owenite Preliminary Society",
   kind: "Unincorporated community association",
   role: "Robert Owen and William Maclure, 1825–1827. Fractured.",
   status: "historical",
   layer: "membership",
   year: "1825–1827",
  },
  {
   name: "Historic New Harmony",
   kind: "501(c)(3) educational nonprofit",
   role: "Interprets the town. A historic site.",
   status: "current",
   layer: "education",
  },
 ],
 "llano-del-rio": [
  {
   name: "Llano del Rio Company",
   kind: "Cooperative agricultural settlement",
   role: "Job Harriman’s socialist colony, 1914–1918. Member shares. Abandoned the Antelope Valley in 1918.",
   status: "historical",
   layer: "membership",
   year: "1914–1918",
  },
  {
   name: "Newllano (Louisiana remnant)",
   kind: "Cooperative agricultural settlement",
   role: "1918 move. Failed in the 1930s.",
   status: "historical",
   layer: "network",
   year: "1918–1930s",
  },
 ], lomaland: [
  {
   name: "Universal Brotherhood and Theosophical Society at Point Loma",
   kind: "Religious society",
   role: "Katherine Tingley’s community, 1897–1942. Raja Yoga school and ceremonial city. Headquarters left in 1942.",
   status: "historical",
   layer: "membership",
   year: "1897–1942",
  },
  {
   name: "Point Loma headland title (later university)",
   kind: "California private organic farm",
   role: "The 132 acres became a college campus (Point Loma Nazarene University). A later landlord, not the Theosophical village.",
   status: "associated",
   layer: "land",
   year: "after 1942",
  },
 ],};

export const formerMoreLand: Record<string, LandOwnership> = {
 "hancock-shaker": {
  owner: "Hancock Shaker Village, Inc., museum campus, Pittsfield, Massachusetts",
  complexity: "simple",
  tenure: "Museum nonprofit",
  howHeld: "A 501(c)(3) holds the National Historic Landmark, including the 1826 Round Stone Barn. The United Society as a living covenant here ended in 1960.",
  narrative: "Berkshire Shaker village plan. Tour the barn. Sabbathday Lake is the last living society. Canterbury is the closed New Hampshire village.",
  divided: [],
 },
 "oneida-community": {
  owner: "Historical: Oneida Community; Mansion House now a nonprofit campus",
  complexity: "simple",
  tenure: "Museum / apartments",
  howHeld: "The Perfectionist household held the creek land in common, 1848–1881. Joint-stock conversion ended communal title. The Mansion House is interpreted, not lived as Noyes’s village.",
  narrative: "Madison County. About 300 people in one house.",
  divided: [],
 }, "new-harmony": {
  owner: "Historical: Harmony Society, then Robert Owen; now a historic town",
  complexity: "split",
  tenure: "Historic town",
  howHeld: "Rapp sold ~20,000 acres to Owen in 1825. Owen’s household lasted two years. The town of New Harmony continued on ordinary deeds.",
  narrative: "Wabash River. Two utopias, one town. Old Economy is the Harmonists’ last town. This page is the Indiana one.",
  divided: [
   { label: "Harmonie (Rappite)", holder: "Harmony Society", share: "1814–1825", what: "Sold to Owen. Society moved to Economy, PA." },
   { label: "Owenite New Harmony", holder: "Robert Owen", share: "1825–1827", what: "Fractured. Town remained." },
  ],
 },
 "llano-del-rio": {
  owner: "Historical: Llano del Rio Company, Antelope Valley; ruins north of Pearblossom",
  complexity: "simple",
  tenure: "Cooperative (historical)",
  howHeld: "About 9,000 acres assembled. Water rights did not feed a city. Abandoned 1918. Private and ruined now.",
  narrative: "Mojave fringe. A thousand people, then a road to Louisiana.",
  divided: [],
 }, lomaland: {
  owner: "Historical: Theosophical Society at Point Loma; later a university campus",
  complexity: "simple",
  tenure: "University campus (later)",
  howHeld: "About 132 acres of headland. Headquarters left 1942. Point Loma Nazarene University is a later occupant. Some buildings remain.",
  narrative: "San Diego point. A ceremonial city that became a college.",
  divided: [],
 },};

export const formerMoreFunding: Record<string, CommunityFunding> = {
 "hancock-shaker": {
  overview: "A closed Shaker society whose buildings are now paid as a museum, admission, farm days, donations, not as a covenanted household.",
  grantsHeadline: "Preservation grants to the museum",
  privateHeadline: "Admission and gifts",
  grants: [
   {
    source: "Historic preservation support to Hancock Shaker Village, Inc.",
    amount: "Ongoing museum and building care (not itemized here)",
    certainty: "estimated",
    kind: "grant",
    note: "Pays a campus, including the Round Stone Barn.",
   },
  ],
  private: [
   {
    source: "Tours, farm demonstrations, shop",
    amount: "Earned, seasonal",
    year: "1960–present as museum",
    certainty: "documented",
    kind: "donation",
    note: "Museum admission and shop.",
   },
  ],
 },
 "oneida-community": {
  overview: "A Perfectionist household paid by traps, silk, and then a joint-stock company that became silverware, not by lots of the Mansion House as a living village.",
  grantsHeadline: "None that saved the religious village",
  privateHeadline: "Industries, then Oneida Community, Limited",
  grants: [
   {
    source: "No public grant that kept Noyes’s household",
    amount: "—",
    certainty: "documented",
    kind: "other",
    note: "The 1881 conversion was a company.",
   },
  ],
  private: [
   {
    source: "Animal traps, silk, then silverware stock",
    amount: "Enough for ~300 in one house; then a firm",
    year: "1848–1881",
    certainty: "documented",
    kind: "business",
    note: "The company outlived the Perfectionists. That is the point of the ending.",
   },
  ],
 }, "new-harmony": {
  overview: "Two tills: Rappite communal industry, then Owen’s capital. Neither survived as a village. The town’s tourism is later.",
  grantsHeadline: "None that kept Owen’s household",
  privateHeadline: "Harmony Society, then Owen",
  grants: [
   {
    source: "No public Owenite grant",
    amount: "—",
    year: "1825–1827",
    certainty: "documented",
    kind: "other",
    note: "Owen’s own fortune was the brief.",
   },
  ],
  private: [
   {
    source: "Harmony Society sale (1825) and Robert Owen’s capital",
    amount: "A town purchase; two years of experiment",
    year: "1814–1827",
    certainty: "documented",
    kind: "member-equity",
    note: "Rapp left solvent. Owen did not leave a village.",
   },
  ],
 },
 "llano-del-rio": {
  overview: "A socialist colony paid by member shares and a print shop, not by Antelope Valley lots that had water. Abandoned 1918.",
  grantsHeadline: "None that invented a river",
  privateHeadline: "Member shares",
  grants: [
   {
    source: "No public irrigation grant that saved the colony",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Big Rock Creek was not enough. The desert closed the books.",
   },
  ],
  private: [
   {
    source: "Llano del Rio Company shares, print shop, hotel",
    amount: "Enough for a thousand people, briefly",
    year: "1914–1918",
    certainty: "documented",
    kind: "member-equity",
    note: "Louisiana remnant failed later. Both tills ended.",
   },
  ],
 }, lomaland: {
  overview: "A Theosophical city paid by a school, donations, and performances, not by Point Loma lots. Ended 1942.",
  grantsHeadline: "None that outlived Tingley",
  privateHeadline: "Raja Yoga school and gifts",
  grants: [
   {
    source: "No public village grant",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "A private spiritual campus. The university is a later occupant.",
   },
  ],
  private: [
   {
    source: "Raja Yoga school fees, donations, theater",
    amount: "Enough for several hundred at the height",
    year: "1897–1929",
    certainty: "documented",
    kind: "courses",
    note: "Tingley’s 1929 death and the Depression closed the village arithmetic.",
   },
  ],
 },};

export const formerMoreVisitJoin: Record<string, VisitJoin> = {
 "hancock-shaker": {
  visit: 5,
  join: 1,
  visitProcess:
   "1843 West Housatonic Street, Pittsfield, MA. The museum runs tours of the Round Stone Barn, dwelling houses, and farm. Buy a ticket. That is a museum visit. Sabbathday Lake is the last active society.",
  joinProcess:
   "There have been no covenanted Hancock Shakers since 1960. Museum membership is a donor card, not the United Society covenant. You cannot join this village as a Shaker.",
 },
 "oneida-community": {
  visit: 4,
  join: 1,
  visitProcess:
   "The Mansion House in Oneida, NY. Tours of the 93,000-square-foot house. Apartments exist in the building. That is not Noyes’s household.",
  joinProcess:
   "The Perfectionist community ended in 1881. There is no complex marriage to enter and no stirpiculture to apply to. A Mansion House apartment is a rental, not membership.",
 }, "new-harmony": {
  visit: 4,
  join: 1,
  visitProcess:
   "The town of New Harmony, Indiana, is walkable and interpreted (visitnewharmony.com, Historic New Harmony). That is a historic town, not Owen’s Preliminary Society still in session.",
  joinProcess:
   "The Rappites left in 1825. The Owenites fractured by 1827. You can live in the town of New Harmony as anywhere in Indiana. You cannot join either utopian village.",
 },
 "llano-del-rio": {
  visit: 1,
  join: 1,
  visitProcess:
   "Ruins in the Antelope Valley north of Pearblossom are not a visitor centre. Private land and desert.",
  joinProcess:
   "The California colony was abandoned in 1918. Newllano failed in the 1930s. There is no socialist share left to buy.",
 }, lomaland: {
  visit: 2,
  join: 1,
  visitProcess:
   "Point Loma Nazarene University occupies much of the headland. Some Theosophical buildings remain as campus architecture. It is not Tingley’s village.",
  joinProcess:
   "The Theosophical community left Point Loma in 1942. There is no Raja Yoga household to join here.",
 },};

export const formerMoreDailyLife: Record<string, DailyLife> = {
 "hancock-shaker": {
  typical: [
   { title: "Museum tours", detail: "Round Stone Barn, dwelling houses, farm demonstrations. Interpreters, not covenanted sisters." },
   { title: "Shop and gardens", detail: "A campus kept as a landmark. Seasonal visitors from the Berkshires." },
   { title: "Preservation work", detail: "The 501(c)(3) weekday is buildings and collections." },
  ],
  unique: {
   title: "The Berkshire Shaker village that became a museum in 1960",
   detail: "Hancock’s last members left in 1960. Sabbathday Lake is the living society. Canterbury is the other closed museum village in this atlas.",
  },
 },
 "oneida-community": {
  typical: [
   { title: "Industries in the house", detail: "Traps, silk, then the work that became silverware. A few hundred people, one Mansion House." },
   { title: "Mutual criticism", detail: "The inward court. Noyes’s doctrine as weekday government." },
   { title: "Complex marriage", detail: "The practice the outside world could not stand, and that ended in 1879–81." },
  ],
  unique: {
   title: "The Perfectionist house that became a company",
   detail: "In 1881, after Noyes’s exile to Canada, the household reorganized as Oneida Community, Limited, a joint-stock company that became the silverware firm; the 93,000-square-foot Mansion House still stands.",
  },
 }, "new-harmony": {
  typical: [
   { title: "Rappite communal labor", detail: "German mills, fields, a celibate town on the Wabash, 1814–25." },
   { title: "Owenite lectures", detail: "1825–27: a hall of reform, factions, no binding week that held." },
   { title: "A town after the utopias", detail: "Ordinary Indiana life on the same streets. Historic interpretation now." },
  ],
  unique: {
   title: "Two closed villages, one Wabash town",
   detail: "Harmonie 1814–25, Owen 1825–27. Old Economy is the Harmonists’ last town. This is the Indiana one.",
  },
 },
 "llano-del-rio": {
  typical: [
   { title: "Adobe and a print shop", detail: "The Western Comrade, a hotel, a thousand people on the Mojave fringe." },
   { title: "Water arithmetic", detail: "Big Rock Creek against a city. The creek won." },
   { title: "The road to Louisiana", detail: "1918 abandonment. Newllano as a remnant that also ended." },
  ],
  unique: {
   title: "The socialist colony the desert closed",
   detail: "Llano is 1914–18 in California. Ruins.",
  },
 }, lomaland: {
  typical: [
   { title: "Raja Yoga school", detail: "Children in white, a discipline Tingley named as education." },
   { title: "Greek theater", detail: "Performances on the headland. The public face of a ceremonial city." },
   { title: "Lotus gardens", detail: "Point Loma planted as a Theosophical landscape. A campus grows there now." },
  ],
  unique: {
   title: "The Point Loma city that became a college",
   detail: "Lomaland is 1897–1942. Headquarters left. The village does not sit.",
  },
 },};

export const formerMoreInformal: Record<string, InformalAgreement[]> = {
 "hancock-shaker": [
  { kind: "guest-stay", why: "Museum hours." },
  { kind: "quiet-practice", why: "The United Society here ended in 1960. Interpreters are not Eldresses." },
  { kind: "media-story", why: "The Round Stone Barn. Sabbathday Lake is the living story; this is the closed Berkshire one." },
  { kind: "land-care", why: "A landmark campus. Preservation." },
 ],
 "oneida-community": [
  { kind: "quiet-practice", why: "Complex marriage and mutual criticism. Ended 1879–81." },
  { kind: "media-story", why: "Silverware outlived the Perfectionists. The Mansion House is the photograph. The village is over." },
  { kind: "guest-stay", why: "Tours and apartments. Not Noyes’s common purse." },
 ], "new-harmony": [
  { kind: "quiet-practice", why: "Rappite celibacy, then Owenite lectures. Both households ended. The town is not the village." },
  { kind: "media-story", why: "Two utopias, one Wabash postcard." },
  { kind: "guest-stay", why: "Historic New Harmony is a town visit." },
 ],
 "llano-del-rio": [
  { kind: "membership-trial", why: "Company shares in a desert. Water was the trial they failed." },
  { kind: "land-care", why: "9,000 acres without a river that held. Ruins." },
  { kind: "media-story", why: "A famous socialist colony." },
 ], lomaland: [
  { kind: "quiet-practice", why: "Raja Yoga, white uniforms, Tingley’s ceremonial city. Left in 1942." },
  { kind: "course-host", why: "The school was the till." },
  { kind: "media-story", why: "Greek theater and lotus beds. A university campus now." },
 ],};
