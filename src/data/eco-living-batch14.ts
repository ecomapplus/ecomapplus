import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch14Eco: Record<string, EcologicalProfile> = {
  overdrevet: {
    overview:
      "Twenty-five low-energy houses on 2.5 hectares: Denmark’s first, 1980. A kitchen garden and a former farm. Density and a 1980 fabric, not an off-grid commune.",
    items: [
      { theme: "energy", title: "Low-energy of 1980", detail: "Denmark’s first low-energy bofællesskab. Confirm current kit on a visit, not a 1980 drawing." },
      { theme: "food", title: "A kitchen garden", detail: "Partly self-sufficient. Guests stay off rows they were not asked onto." },
      { theme: "conservation", title: "Against Søftendalen", detail: "2.5 hectares. A house is not the valley." },
      { theme: "building", title: "Eight longhouses", detail: "About 100 m² plus a porch and a loft. Twenty-five doors around one common house." },
    ],
  },
  bellingham: {
    overview:
      "Thirty-three condos clustered on about 2.5 of nearly 6 acres: wetland, orchard, a creek. A farm site that stayed clustered, not thirty-three lots to the greenbelt.",
    items: [
      { theme: "conservation", title: "Wetland and a creek", detail: "Alliance listing. Guests stay off the orchard they were not asked onto." },
      { theme: "building", title: "Ten buildings, 33 homes", detail: "Clustered. Confirm current kit on bellcoho.com, not a 2000 opening." },
      { theme: "energy", title: "Shared spaces", detail: "One set of commons thirty-three households do not each fence." },
      { theme: "food", title: "An orchard", detail: "Nearly 6 acres. A listing is not the trees." },
    ],
  },
  "numero-zero": {
    overview:
      "Eight dwellings in a refurbished Porta Palazzo palazzo: 440 m² of land, common rooms, a garden. Retrofit, not a new eco-estate.",
    items: [
      { theme: "building", title: "A historic building reused", detail: "Confirm current kit, not a 2013 essay." },
      { theme: "conservation", title: "Eight families instead of investor flats", detail: "The compact is the ecology. A market walk is not a deed." },
      { theme: "energy", title: "Shared rooms", detail: "About 200 m² common. One set of rooms eight households do not each duplicate." },
      { theme: "food", title: "A garden", detail: "440 m² of land. Guests stay off beds they were not asked onto." },
    ],
  },
  lebensbogen: {
    overview:
      "A former youth hotel on the Habichtswald: income-sharing, a café, a seminar house. Small, and the public rooms are the ecology as much as the house.",
    items: [
      { theme: "building", title: "A reused youth hotel, 2015", detail: "Confirm current kit." },
      { theme: "food", title: "Café Helfensteine", detail: "A Kollektivbetrieb. A coffee is not a membership." },
      { theme: "conservation", title: "Habichtswald edge", detail: "Nature reserve. Guests stay on the paths they were asked onto." },
      { theme: "education", title: "Tagungshaus", detail: "Seminars of the Verein. A booking is not a join." },
    ],
  },
};
