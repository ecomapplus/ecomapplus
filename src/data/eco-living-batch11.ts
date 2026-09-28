import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch11Eco: Record<string, EcologicalProfile> = {

  "milagro-cohousing": {
    overview:
      "Twenty-eight townhomes clustered on a fraction of 43 Sonoran acres: rain basins, recycled wastewater irrigation, a 3,600-square-foot common house, a solar-heated pool. 35 acres preserve.",
    items: [
      { theme: "conservation", title: "Thirty-five acres open", detail: "35 of 43 acres aside as a nature preserve. The wash stays common." },
      { theme: "water", title: "Rain basins and recycled wastewater", detail: "Basins catch runoff; underground recycled wastewater irrigates native and fruit trees." },
      { theme: "building", title: "Two rows, parking on the edge", detail: "Green-built townhomes. Confirm current kit, not a 2003 case study." },
      { theme: "food", title: "Three raised beds", detail: "A community vegetable garden near the common house. Guests stay off rows they were not asked onto." }
    ]
  },
  vrijburcht: {
    overview:
      "A mixed-use CPO block on Steigereiland: 52 apartments, a climate-proof courtyard garden, a theatre, a café, two guest rooms, a care home. Harbour, not a greenfield estate.",
    items: [
      { theme: "conservation", title: "A climate-proof courtyard", detail: "Climate-ADAPT case: privately funded collective garden on an artificial island in the IJmeer." },
      { theme: "building", title: "CPO mixed-use", detail: "2007. Homes above; theatre, brasserie, daycare on the ground floor of record." },
      { theme: "energy", title: "Shared rooms", detail: "Hobby space, greenhouse, two guest rooms. One set of rooms fifty-two households do not each duplicate." },
      { theme: "education", title: "A harbour the neighbours built", detail: "CityChangers 2022. The ecological act is the missing extra flats where the theatre sits." }
    ]
  }

};
