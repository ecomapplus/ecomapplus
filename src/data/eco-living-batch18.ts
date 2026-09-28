import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch18Eco: Record<string, EcologicalProfile> = {

  "eno-commons": {
    overview:
      "Twenty-two homes on 11.2 Durham acres: a river edge, an orchard, organic gardens. The ecological act is the Eno the lots did not reach.",
    items: [
      { theme: "conservation", title: "Walking distance to Eno River State Park", detail: "Confirm it still holds." },
      { theme: "food", title: "Organic gardens", detail: "Guests stay off rows they were not asked onto." },
      { theme: "building", title: "Clustered homes, 1998", detail: "Confirm current kit on enocommons.org." },
      { theme: "energy", title: "A Common House and barn in common", detail: "Twenty-two households do not each duplicate them." }
    ]
  },

  "villa-locomuna": {
    overview:
      "Former Deutsche Bahn buildings at the Kasseler Tannenwäldchen. Urban reuse, not a rural off-grid.",
    items: [
      { theme: "building", title: "Bahn buildings, 2000", detail: "Confirm current kit with the office." },
      { theme: "conservation", title: "A Tannenwäldchen edge", detail: "A room is not Kölnische Straße." },
      { theme: "food", title: "Permaculture", detail: "Guests stay off rows they were not asked onto." },
      { theme: "education", title: "KommuJa and Interkomm", detail: "Confirm current network, not a directory line." }
    ]
  }

};
