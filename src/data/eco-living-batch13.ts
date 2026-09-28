import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch13Eco: Record<string, EcologicalProfile> = {
  "neve-shalom": {
    overview:
      "A cooperative village on a Latrun hill: bilingual school, equal membership, houses of stone. The ecological act is sharing a hill that could have been two gated settlements, not an off-grid farm.",
    items: [
      { theme: "education", title: "A bilingual school", detail: "Equal hours of Arabic and Hebrew. Confirm current hours with the village." },
      { theme: "conservation", title: "A leased hill, then a gift", detail: "Forty hectares, peppercorn rent, later about twenty gifted. The dirt stayed off an ordinary market." },
      { theme: "building", title: "Stone houses", detail: "Village vernacular. Density is not the story; coexistence is." },
      { theme: "education", title: "School for Peace", detail: "Encounter programmes since 1979. A workshop is not a dwelling." }
    ]
  },
  "den-selvforsynende": {
    overview:
      "A Funen permaculture andel: houses, a small farm, guided tours. Nineteen dwellings, aiming at twenty-six.",
    items: [
      { theme: "food", title: "A permaculture farm", detail: "Guests stay off rows they were not asked onto." },
      { theme: "building", title: "Environmentally built houses", detail: "Confirm current kit on a visit." },
      { theme: "conservation", title: "Andel land", detail: "The field stays association land." },
      { theme: "education", title: "Tours", detail: "A walk is labour to host." }
    ]
  }

};
