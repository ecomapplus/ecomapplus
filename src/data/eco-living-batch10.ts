import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch10Eco: Record<string, EcologicalProfile> = {

  "threshold-centre": {
    overview:
      "Fourteen barn conversions around an 18th-century farmhouse: biomass heat, a biodigester, rainwater, a rented acre of garden and orchard across the lane. Mixed tenure on a CIC freehold.",
    items: [
      { theme: "energy", title: "Biomass and biodigester", detail: "Heat and hot water to all properties of record. Demand reduction as the week." },
      { theme: "food", title: "Garden across the lane", detail: "Over an acre, two polytunnels, an orchard. Guests stay off rows they were not asked onto." },
      { theme: "building", title: "Barn conversions", detail: "Reuse of a farmstead, not a greenfield estate." },
      { theme: "water", title: "Rainwater of record", detail: "UK Cohousing Network listing. Confirm current kit on thresholdcentre.org.uk, not a 2009 case study." }
    ]
  }

};
