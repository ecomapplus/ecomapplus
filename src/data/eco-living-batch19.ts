import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch19Eco: Record<string, EcologicalProfile> = {
  redfield: {
    overview:
      "A Winslow mansion on 17 acres: garden, buildings, animals. Rural, not a suburban HOA.",
    items: [
      { theme: "food", title: "Garden and animals", detail: "Sixteen hours a week. Guests stay off rows they were not asked onto." },
      { theme: "conservation", title: "17 acres", detail: "A dwelling is not Buckingham Road." },
      { theme: "building", title: "A kept mansion, 1978", detail: "Confirm current kit with the house." },
      { theme: "energy", title: "One house instead of 17 suburban lots", detail: "The adults still heat." }
    ]
  },

  "la-querencia": {
    overview:
      "Twenty-eight homes on 2.8 Fresno acres: photovoltaic on every home, a pool with passive solar. Valley density, not a rural off-grid.",
    items: [
      { theme: "energy", title: "Photovoltaic on every home", detail: "Confirm it still holds." },
      { theme: "building", title: "Clustered homes, 2008", detail: "Confirm current kit." },
      { theme: "conservation", title: "2.8 acres instead of 28 suburban lots", detail: "Alliance. A house is not Alluvial Avenue." },
      { theme: "food", title: "Organic vegetable garden", detail: "Guests stay off rows they were not asked onto." }
    ]
  }

};
