import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch2Eco: Record<string, EcologicalProfile> = {
  hjortshoj: {
    overview:
      "Hjortshøj’s ecology is a 20-hectare municipal farm lease plus a 1.2-hectare market garden that about a hundred families work. Housing groups grew in stages on the village edge. Organic grain, fodder, fruit, vegetables, a little livestock. The bay is the setting.",
    items: [
      { theme: "food", title: "Market garden and farm lease", detail: "1.2 ha worked by member families. 20 ha rented from Aarhus for the rest of the diet." },
      { theme: "building", title: "Eight groups, built over decades", detail: "Each cluster chose its own construction and tenure. The ecology is cumulative, not a single architect’s masterplan." },
      { theme: "education", title: "A Danish eco-village others come to see", detail: "A Danish eco-village that other groups come to see. The farm is the lesson." },
    ],
  },
  "neot-semadar": {
    overview:
      "A desert kibbutz that cools itself with mud brick and a tower, grows organic vines, dates, olives, and herbs on 80 hectares, and runs an art centre as part of the same week. UN Tourism listed it in 2025.",
    items: [
      { theme: "building", title: "Mud brick and cooling towers", detail: "Passive cooling in 40-degree heat. Buildings insulated with mud brick. The tower is the photograph because it works." },
      { theme: "food", title: "Organic Arava agriculture", detail: "500 dunams of vines, dates, olives, deciduous trees, herbs. Oil, wine, goat cheese." },
      { theme: "education", title: "Art workshops and a learning kibbutz", detail: "Fourteen studios. Work as observation. Volunteers and guests by arrangement." },
    ],
  },
  "eva-lanxmeer": {
    overview:
      "An ecological neighbourhood on Culemborg’s drinking-water field: retention ponds, a closed water system, a city farm, a resident energy company, 240 houses designed with their future inhabitants.",
    items: [
      { theme: "water", title: "Built around the wells", detail: "Vitens extraction field. Four retention pools. Rinse water returned. Rain gardens on the inner streets." },
      { theme: "energy", title: "Thermo Bello", detail: "A heat company the residents set up so the district would not only take power from far away." },
      { theme: "food", title: "Caetshage city farm", detail: "Urban ecological farm at the edge of the houses. Food and contact with the field." },
    ],
  },
  earthsong: {
    overview:
      "Thirty-two timber homes on 1.29 hectares in Ranui, cars at the edge, a pedestrian figure-eight, a common house, gardens, low-allergy construction, less energy and water than a standard Auckland house.",
    items: [
      { theme: "building", title: "Warm, low-allergy houses", detail: "Resident-designed cohousing. Shared laundry and guest rooms so each unit can be smaller." },
      { theme: "conservation", title: "Cars at the entrance", detail: "The path is for people. 1.29 ha has to work hard." },
      { theme: "education", title: "A documented cohousing model", detail: "World Habitat recognition. Robin Allison still talks about neighbourliness beyond the boundary." },
    ],
  },
  munksoegaard: {
    overview:
      "A hundred row houses at Trekroner with an ecological brief and a social one: rental, co-op, and freehold on the same field, common houses, bikes, the Zealand edge.",
    items: [
      { theme: "building", title: "Five groups of twenty", detail: "Row houses, common houses, a neighbourhood that is also a commuter stop." },
      { theme: "waste", title: "Shared operations at group scale", detail: "Compost, bikes, the ordinary Danish ecological kit. Confirm current energy figures on the site." },
      { theme: "education", title: "Mixed tenure as ecology", detail: "The founding ecological act was who got to live here, not only how the walls were built." },
    ],
  },
  hockerton: {
    overview:
      "Five earth-sheltered homes on 4 ha: grass roofs, a south conservatory, a reservoir sized for months, reed-bed waste, two wind turbines, a PV array, energy use published at about a tenth of a typical UK home.",
    items: [
      { theme: "energy", title: "Turbines and PV", detail: "6 kW then 5 kW wind, 7.65 kW peak PV. Bills in the low hundreds of pounds a year in published figures." },
      { theme: "water", title: "Reservoir and reed bed", detail: "About 250 days in the lake, drinking water filtered, liquid waste through reeds, solids composted on site." },
      { theme: "education", title: "Saturday tours", detail: "Residents walk guests through six times a year. The site is a classroom that still has to be a home." },
    ],
  },
  aldinga: {
    overview:
      "A community-titles village of about 33 ha and 181 lots, no fences in the founding brief, orchards and a small organic farm on common land, arts studios, nine neighbourhood groups.",
    items: [
      { theme: "food", title: "Orchards and farm", detail: "Common land the corporation holds. Neighbourhood groups tend streets and trees." },
      { theme: "conservation", title: "No fences", detail: "The 2002 opening intention. Wildlife and children use the same lanes as the lots." },
      { theme: "education", title: "Arts as the public ecology", detail: "Studios, a Steiner school next door, a village that teaches by looking like a better suburb." },
    ],
  },
  friland: {
    overview:
      "Experimental self-build on 10 ha: straw, timber, earth, masonry stoves, plant-based wastewater, no mortgage, a foundation on a former cornfield.",
    items: [
      { theme: "building", title: "Build without debt", detail: "National rules still apply. Materials are experimental. The economic ecology is the banned loan." },
      { theme: "water", title: "Plant evaporation and biological treatment", detail: "Wastewater systems based on plants, filtration, biological purification on the site’s own account." },
      { theme: "energy", title: "Small, tight, masonry-stove heat", detail: "Insulating hard, building smaller, renewables where they fit. Many houses heat with a stove." },
    ],
  },
  tonndorf: {
    overview:
      "A 15-hectare castle hill: gardens, woodland, a keep that has to be lived in to be kept. The ecology is stewardship of a monument and a kitchen garden in the same week.",
    items: [
      { theme: "food", title: "Gardens below the walls", detail: "Vegetables, the hill, a cooperative that has to eat." },
      { theme: "building", title: "Keeping a castle by living in it", detail: "Restoration as occupancy. The e.G. is why the roof still has people under it." },
      { theme: "conservation", title: "Woodland and 15 ha", detail: "The ground around the keep. Care is the founding act." },
    ],
  },
  lilac: {
    overview:
      "Twenty ModCell straw-bale homes and a common house on a former Leeds school site. Lime, timber, shared tools, income-linked tenure so the ecological terrace stays affordable.",
    items: [
      { theme: "building", title: "Straw-bale terrace", detail: "ModCell panels, lime render, timber. Carbon-storing walls on an ordinary inner-city yard." },
      { theme: "energy", title: "Shared and small", detail: "Common laundry and tools so twenty households duplicate less. Confirm current performance on lilac.coop." },
      { theme: "education", title: "The MHOS as a model", detail: "Policy citations, World Habitat, TEDx. The legal form is part of the ecology." },
    ],
  },
};
