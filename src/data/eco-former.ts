import type { EcologicalProfile } from "./ecological-initiatives";

export const formerEco: Record<string, EcologicalProfile> = {
 "drop-city": {
  overview:
   "Drop City’s ecology was salvage: geodesic domes from car roofs on a few acres of Colorado pasture, a goat-and-garden kitchen, no grid plan. It was an art experiment. The domes went for scrap. This record is historical.",
  items: [
   { theme: "building", title: "Car-top geodesic domes", detail: "Buckminster Fuller frames, automobile sheet metal. The architecture that made the photographs. Gone." },
   { theme: "food", title: "Goat pasture kitchen", detail: "A few acres, whoever had arrived." },
   { theme: "waste", title: "Salvage as doctrine", detail: "Building from wrecking yards was the ecology." },
   { theme: "education", title: "Drop art and a festival", detail: "Happenings, the Joy Festival, a Fuller award. Teaching by spectacle, then empty pasture." },
  ],
 },
 "morningstar-ranch": {
  overview:
   "Morningstar’s ecology was Open Land on 32 Sonoma acres: gardens, apples, redwood edge, no membership filter. The county demolished dwellings. The ranch is private now. Not OAEC.",
  items: [
   { theme: "food", title: "Ranch gardens", detail: "A kitchen for whoever arrived. Apples and a 1960s garden." },
   { theme: "building", title: "Ad-hoc dwellings", detail: "The structures the county called a camp and bulldozed." },
   { theme: "conservation", title: "Redwood-edge ranch", detail: "32 acres that were hospitality, then private land again." },
   { theme: "education", title: "Open Land as lesson", detail: "The experiment taught the county what it would not permit. Historical." },
  ],
 },
 rajneeshpuram: {
  overview:
   "Rajneeshpuram built a city on 64,000 acres of high-desert ranch: agriculture, an airstrip, houses, a mall. The ecology of a three-year municipality, then abandonment and a later camp. This atlas does not treat the 1984 crimes as a green credential.",
  items: [
   { theme: "food", title: "Ranch agriculture", detail: "Irrigation and fields enough to feed a city of thousands, briefly." },
   { theme: "building", title: "A city in a canyon", detail: "Houses, mall, airstrip. Built fast, emptied in 1985." },
   { theme: "water", title: "High-desert water works", detail: "A ranch that had to move water to become a city. Historical infrastructure." },
   { theme: "conservation", title: "Wasco high desert", detail: "The land is a camp now. The commune’s ecology ended with the city." },
  ],
 }, "source-family": {
  overview:
   "The Source Family’s ecology was a vegetarian restaurant and a household diet, then a short Hawaiian compound. Ended 1975.",
  items: [
   { theme: "food", title: "Vegetarian Strip kitchen", detail: "The Source Restaurant as the public ecology. Not theirs now." },
   { theme: "building", title: "Los Feliz houses, then Oahu", detail: "Communal houses, a year in Hawaii. No remaining village street." },
   { theme: "education", title: "Aquarian music and a look", detail: "Ya Ho Wha 13, robes, a doctrine. Archive and documentary." },
   { theme: "conservation", title: "No rural land ethic as the whole story", detail: "A restaurant household." },
  ],
 }, "brook-farm": {
  overview:
   "Brook Farm’s ecology was a West Roxbury meadow farm plus a school: six years of Transcendentalist then Fourierist labor, then a fire. The land is a landmark and cemetery landscape.",
  items: [
   { theme: "food", title: "Ellis Farm labor", detail: "Intellectuals milking. Produce and a school table. 1841–1847." },
   { theme: "building", title: "The Phalanstery", detail: "Uninsured, burned 1846. The architecture that closed the arithmetic." },
   { theme: "education", title: "The school", detail: "Fees that helped pay the farm. Hawthorne, Ripley, a six-year syllabus." },
   { theme: "conservation", title: "Meadow as landmark", detail: "A National Historic Landmark now." },
  ],
 },
};
