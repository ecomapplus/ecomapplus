import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch15Eco: Record<string, EcologicalProfile> = {
  rosewind: {
    overview:
      "Twenty-six houses on city lots around a Port Townsend commons. Density by clustering, not an off-grid farm.",
    items: [
      { theme: "building", title: "Houses and a 2,800 sq ft hall", detail: "Confirm current kit." },
      { theme: "conservation", title: "A commons instead of twenty-six fenced acres", detail: "About 9 acres." },
      { theme: "energy", title: "One hall", detail: "Twenty-six households do not each build a second living room of that size." },
      { theme: "food", title: "A common garden", detail: "Guests stay off rows they were not asked onto." }
    ]
  },

  nubanusit: {
    overview:
      "Twenty-nine homes clustered on about 4.5 of 113 acres: a working farm, a brook, a conservation subdivision. The ecological act is the acreage that was not split.",
    items: [
      { theme: "food", title: "A working farm", detail: "Organic fields and hoop houses. Guests stay off rows and pasture they were not asked onto." },
      { theme: "conservation", title: "113 acres, not twenty-nine three-acre lots", detail: "A house is not the brook." },
      { theme: "building", title: "LEED houses", detail: "Confirm current kit, not a 2007 opening." },
      { theme: "energy", title: "No attached garages", detail: "A common parking lot. Confirm it still holds." }
    ]
  }

};
