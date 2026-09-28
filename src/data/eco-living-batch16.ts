import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch16Eco: Record<string, EcologicalProfile> = {
  "puget-ridge": {
    overview:
      "Twenty-three cedar homes on 2.4 acres of Delridge: parking at the edge, gardens, a 4,000 sq ft common house. One CLT door. Urban infill, not a rural off-grid.",
    items: [
      { theme: "building", title: "Cedar duplexes, 1995", detail: "Confirm current kit." },
      { theme: "conservation", title: "Parking at the edge", detail: "Twenty-three households do not each drive to the door." },
      { theme: "energy", title: "A 4,000 sq ft common house", detail: "One set of rooms the cluster does not each duplicate." },
      { theme: "conservation", title: "A CLT door", detail: "Homestead partnership. Permanently affordable." }
    ]
  },

  landmatters: {
    overview:
      "Forty-two acres of pasture and woodland near Totnes. Low-impact dwellings, a ten-year planning fight. The ecological act is the permission that kept lots off the map.",
    items: [
      { theme: "conservation", title: "42 acres held as a co-op", detail: "You do not buy a Devon lot." },
      { theme: "building", title: "Low-impact dwellings", detail: "2010 eco-homes walk. Confirm current kit, not a 2010 still." },
      { theme: "energy", title: "Own power", detail: "Confirm current kit." },
      { theme: "food", title: "Permaculture", detail: "Guests stay off rows they were not asked onto." }
    ]
  },
  belterra: {
    overview:
      "Thirty townhouses on a Bowen Island hillside. A 3,700 sq ft common house, guest rooms, gardens. Island infill of a sort, not a rural off-grid.",
    items: [
      { theme: "building", title: "Townhouses, 2014", detail: "Confirm current kit with the community." },
      { theme: "conservation", title: "A hillside instead of thirty lots", detail: "Clustered townhouses. Shared gardens." },
      { theme: "energy", title: "A 3,700 sq ft common house", detail: "Guest rooms. Thirty households do not each duplicate them." },
      { theme: "food", title: "Vegetable gardens", detail: "Guests stay off rows they were not asked onto." }
    ]
  }
};
