import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch8Eco: Record<string, EcologicalProfile> = {

  "belfast-cohousing": {
    overview:
      "Thirty-six Passive House homes clustered on about 6 of 42 Maine acres: farm and recreation on the rest. OPAL / GO Logic. First of its type in North America of record.",
    items: [
      { theme: "energy", title: "Passive House fabric", detail: "GO Logic / OPAL. Superinsulation as the week, not a slogan." },
      { theme: "conservation", title: "42 acres, cluster on six", detail: "Most of the map is farm and recreation. A unit is not the acreage." },
      { theme: "building", title: "Duplexes, triplexes, a quad", detail: "Shared walls. Parking on the edge. Pedestrian in the middle." },
      { theme: "food", title: "Farm of record", detail: "The remainder of the 42 acres. Confirm current plots on mainecohousing.org, not a 2016 award." }
    ]
  },
  "new-ground": {
    overview:
      "A three-storey block around a walled garden on a former convent-school site in Chipping Barnet. 25 flats, mixed tenure. Urban reuse, not a rural acreage.",
    items: [
      { theme: "building", title: "Infill block", detail: "Pollard Thomas Edwards. A former school plot, not a greenfield. The garden is the acreage." },
      { theme: "food", title: "Walled garden / allotment", detail: "The outdoor room. Twenty-six women, one set of beds." },
      { theme: "energy", title: "Shared fabric", detail: "One structure, 25 flats, common rooms. Demand reduction was the brief." },
      { theme: "education", title: "Mixed tenure as ecology", detail: "17 long leases, 8 social rent. The dwelling cannot all be flipped. Housing for Women holds the freehold." }
    ]
  },
  "marmalade-lane": {
    overview:
      "A car-free timber street and a long shared garden in Orchard Park, Cambridge: 42 homes, TOWN and Trivselhus, city-council land. No buy-to-let.",
    items: [
      { theme: "building", title: "Timber street", detail: "Trivselhus closed-panel fabric. Density plus a common house on a Cambridge plot." },
      { theme: "conservation", title: "Cars off the lane", detail: "The ecological act is the missing driveway in front of each door." },
      { theme: "energy", title: "Shared common house", detail: "One set of rooms forty-two households do not each build." },
      { theme: "education", title: "No buy-to-let", detail: "Eight-week member window. The garden stays the company’s. That is a material fact." }
    ]
  }
};
