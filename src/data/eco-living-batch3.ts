import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch3Eco: Record<string, EcologicalProfile> = {
  "kibbutz-ketura": {
    overview:
      "A desert kibbutz of date orchards, a commercial solar field, algae for astaxanthin, and an environmental studies campus. Green Kibbutz recycling and a community garden sit beside the Arava heat.",
    items: [
      { theme: "food", title: "Date orchards and Methuselah", detail: "Irrigation in the rift. A Judean date from an ancient seed was planted here." },
      { theme: "energy", title: "Arava Power solar", detail: "First commercial solar field in the partnership sat on Ketura. A second, larger field followed." },
      { theme: "education", title: "Arava Institute", detail: "Members founded a campus for environmental studies on the same dirt." },
      { theme: "conservation", title: "Algae and a dry landscape", detail: "Haematococcus cultivation since 1998. The desert is the brief." }
    ]
  },
  "old-hall": {
    overview:
      "A former friary and about 65 acres of organic farmland in Suffolk. Shared kitchen, a historic roof, a household trying to tighten energy use without pretending the building is a new passive house.",
    items: [
      { theme: "food", title: "Organic farm", detail: "The acres still have to feed a household of about 60." },
      { theme: "building", title: "The hall itself", detail: "A large historic building lived in, not mothballed." },
      { theme: "energy", title: "Tightening the old fabric", detail: "Published aim: better balance of cost and ethics. Confirm current kit." },
      { theme: "education", title: "Living together as the lesson", detail: "Volunteer stays. Fifty years in one house." }
    ]
  },
  commonground: {
    overview:
      "95 acres of regenerated Victorian bush used as a social-change venue and a household. The ecology is restoration plus a kitchen that still has to work when the booked groups leave.",
    items: [
      { theme: "restoration", title: "Regenerated bush", detail: "The 1984 purchase is now a long experiment in looking after country." },
      { theme: "education", title: "Movement venue", detail: "Subsidised weekends for justice and environment groups." },
      { theme: "building", title: "Conference rooms in the bush", detail: "Venue buildings and resident houses on the same title." },
      { theme: "conservation", title: "A block that stayed in co-op hands", detail: "The point of the 1984 buy: the dirt would not become ordinary lots." }
    ]
  },
  breitenbush: {
    overview:
      "154 acres of Cascades forest, a river hydro plant of about 40 kW, geothermal wells heating more than a hundred buildings, an off-grid worker co-op retreat.",
    items: [
      { theme: "energy", title: "Hydro and geothermal", detail: "River plant for electricity. Wells for heat. No diesel-plant story as the week." },
      { theme: "water", title: "Hot springs and a working river", detail: "The soak is the guest face. The hydro is the household face." },
      { theme: "building", title: "Lodge, cabins, worker cottages", detail: "Guest side and a village across a footbridge." },
      { theme: "conservation", title: "Willamette forest edge", detail: "154 acres that have to be a retreat and a home without eating the woods." }
    ]
  },
  gyurufu: {
    overview:
      "Hungary’s first eco-village on an abandoned Zselic site: a few families, a 1991 foundation, a guesthouse, a watershed larger than the hamlet.",
    items: [
      { theme: "restoration", title: "A deserted village, lived in again", detail: "Houses on a name that was already on the map." },
      { theme: "food", title: "Gardens in the hills", detail: "A handful of families still have to eat." },
      { theme: "conservation", title: "Zselic watershed", detail: "Foundation land claims are larger than the lived hamlet. Confirm current holdings on the village site." },
      { theme: "education", title: "Guesthouse as the public ecology", detail: "Lovastanya Vendégház. A night is lodging, not a lecture unless you ask." }
    ]
  },
  zajezova: {
    overview:
      "A dispersed Slovak hill village of timber houses, meadows, crafts, and education centres. The ecology is many small holdings plus programmes that bring volunteers through.",
    items: [
      { theme: "building", title: "Folk timber and new eco-houses", detail: "Scattered settlements, not a single architect’s row." },
      { theme: "education", title: "Centres and courses", detail: "Vzdelávacie centrum and others. Erasmus weeks on the hill." },
      { theme: "food", title: "Small farms and gardens", detail: "Households, not a single kitchen for 150 people." },
      { theme: "conservation", title: "Meadows that stayed meadows", detail: "The old cadastral village is the landscape." }
    ]
  },
  "sadhana-forest": {
    overview:
      "Seventy acres of formerly barren laterite at Auroville, restored as forest, water-conservation earthworks, a vegan volunteer camp. Later sister sites in Haiti, Kenya, Namibia, and further Indian land.",
    items: [
      { theme: "restoration", title: "Reforestation and earthworks", detail: "Planting, mulching, watering in season. Published tree counts are large; the acres are the proof you can walk." },
      { theme: "water", title: "Conservation as the daily work", detail: "The camp exists to hold water in laterite that would not hold it." },
      { theme: "food", title: "Vegan kitchen", detail: "Community meals. Food forestry as the longer project." },
      { theme: "education", title: "Tours, Children’s Land, sanctuary", detail: "Day visitors and a volunteer week. The forest is the syllabus." }
    ]
  },

  "living-energy-farm": {
    overview:
      "127 acres off the grid: DC microgrid, modest PV, nickel-iron batteries, biogas and solar thermal, organic food, seed income. The hardware is meant to be copyable on a modest income.",
    items: [
      { theme: "energy", title: "DC microgrid", detail: "A few hundred watts per person. Daylight-drive appliances. No grid, no generator." },
      { theme: "food", title: "Organic farm and seed", detail: "Most of the diet. Southern Exposure Seed Exchange and others as the till." },
      { theme: "building", title: "Houses timed to the sun", detail: "Warm in winter, cool in summer, on a small array." },
      { theme: "education", title: "Monthly tours", detail: "The farm is a lab that still has to be a home of a dozen." }
    ]
  },
  "ecodorp-boekel": {
    overview:
      "Thirty-six climate-positive rental homes in circular timber, some on stilts at a Brabant forest edge. Collective finance. Care and refugee dwellings in the mix. 2021 Dutch sustainability award.",
    items: [
      { theme: "building", title: "Round timber, some on stilts", detail: "A living lab that is also a rental street." },
      { theme: "energy", title: "Climate-positive brief", detail: "The 2021 jury citation. Confirm current performance on ecodorpboekel.nl." },
      { theme: "conservation", title: "Forest edge", detail: "Houses in the trees, wetland, a small district." },
      { theme: "education", title: "GEN Europe member", detail: "Visits and the award brought cameras. The rentals still have to be homes." }
    ]
  }
};
