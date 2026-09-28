import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch17Eco: Record<string, EcologicalProfile> = {

  vashon: {
    overview:
      "Eighteen homes on 12 Vashon acres: more than eight acres of natural areas, an orchard. A five-minute walk to town.",
    items: [
      { theme: "conservation", title: "Eight acres of natural areas", detail: "A house is not Bank Road." },
      { theme: "food", title: "A mature orchard", detail: "Guests stay off rows they were not asked onto." },
      { theme: "building", title: "Site condominium, from 1991", detail: "One house at a time through 2005. Confirm current kit on the site." },
      { theme: "energy", title: "A common house with a commercial kitchen", detail: "Eighteen households do not each duplicate it." }
    ]
  },
  "new-view": {
    overview:
      "Twenty-four households on a 20-acre West Acton hill. Half a mile to the village. Density against a conservation edge, not a rural off-grid.",
    items: [
      { theme: "conservation", title: "A 20-acre site", detail: "Walking distance to Guggins Brook." },
      { theme: "building", title: "Homes, 1996", detail: "Confirm current kit." },
      { theme: "energy", title: "A common house at 25 Half Moon Hill", detail: "Twenty-four households do not each duplicate it." },
      { theme: "food", title: "West Acton village and Idylwilde Farm", detail: "A half-mile walk. Confirm it still holds." }
    ]
  },
  "tierra-nueva": {
    overview:
      "Twenty-seven passive-solar duplexes and houses on 5 Oceano acres. Avocado trees. The land stays in the HOA.",
    items: [
      { theme: "building", title: "Passive solar, 1999", detail: "Confirm current kit with the community." },
      { theme: "conservation", title: "Land in the HOA", detail: "A unit is not the avocados." },
      { theme: "food", title: "Avocado trees and gardens", detail: "Guests stay off rows they were not asked onto." },
      { theme: "energy", title: "A common house", detail: "Twenty-seven households do not each duplicate it." }
    ]
  }

};
