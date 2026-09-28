import type { EcologicalProfile } from "./ecological-initiatives";

export const livingBatch12Eco: Record<string, EcologicalProfile> = {
  "newton-dee": {
    overview:
      "An adult Camphill estate on 180 wooded acres at Bieldside: 36 households, 120 acres of biodynamic farm of their own site. The ecological act is the farm that still feeds the houses, not an off-grid experiment.",
    items: [
      { theme: "food", title: "A 120-acre biodynamic farm", detail: "Of newtondee.co.uk, inside 180 wooded acres. Confirm current production on the estate, not a directory." },
      { theme: "building", title: "Thirty-six households", detail: "Large and small houses in the woods. Charity land. You do not buy them." },
      { theme: "conservation", title: "Wooded grounds locked in charity", detail: "SC043417. The dwelling cannot be flipped as an Aberdeen freehold. That is a material fact." },
      { theme: "education", title: "Camphill’s adult village of record", detail: "Officially 1960. BBC Village of Dreams 2018. A café is public; homes are not." }
    ]
  },
  "harmony-village": {
    overview:
      "Twenty-seven Santa Fe-style townhomes clustered on 5.5 acres in Golden: car-free paths, a common house, gardens, an orchard.",
    items: [
      { theme: "conservation", title: "Cars on the edge", detail: "Pedestrian paths. Downtown Golden in walking distance." },
      { theme: "food", title: "Gardens and an orchard", detail: "Play areas and natural open space. Guests stay off a neighbour’s rows." },
      { theme: "building", title: "Santa Fe cluster", detail: "1,000–3,500 SF townhomes. Occupied from 1996. Confirm current kit, not a 1997 brochure." },
      { theme: "energy", title: "A shared common house", detail: "One kitchen twenty-seven households do not each run every night." }
    ]
  },
  "two-echo": {
    overview:
      "Twenty-seven clustered households in Brunswick woods: an easement on about 70–72 acres, small lots, fields and streams. The ecological act is the lock on the woods.",
    items: [
      { theme: "conservation", title: "An easement of record", detail: "About 70–72 acres and a town map. Total acreage drifts 92 / 95 / 97." },
      { theme: "building", title: "Clustered lots", detail: "21 houses and 3 duplexes. House lots 50–65 by 110 feet." },
      { theme: "food", title: "Fields of the farm", detail: "About 15 acres of rolling fields. Possible agricultural uses — confirm current rows, not a 1991 dream." },
      { theme: "education", title: "A woods you cannot buy", detail: "You buy a house. You do not buy the easement. That is the lesson." }
    ]
  },

  kersentuin: {
    overview:
      "Ninety-four mixed-tenure houses in Utrecht’s Leidsche Rijn: south orientation, low-temperature and district heat, collective solar and water butts, a garage roof garden and a cherry orchard. A CPO, not a rural off-grid.",
    items: [
      { theme: "energy", title: "Collective solar", detail: "De Witte Wolf: panels and water butts bought together. Confirm current kit on kersentuin.nl." },
      { theme: "building", title: "South orientation, compact, lifetime-proof", detail: "Occupied 2003. Mixed sizes, some live-work, some step-free." },
      { theme: "food", title: "Roof garden and orchard", detail: "Cherry orchard, kitchen garden, herb garden. Guests stay off a neighbour’s rows." },
      { theme: "conservation", title: "Mixed tenure as ecology", detail: "28 sociale huur stay in the street. The dwelling cannot all be flipped as Utrecht freeholds. That is a material fact." }
    ]
  },
  "hameau-des-buis": {
    overview:
      "About 20 bioclimatic dwellings on six wooded hectares above the Chassezac: a school, a farm, a SAS coop. The ecological act is cooperative title on a plateau, not a lot sale.",
    items: [
      { theme: "building", title: "Bioclimatic dwellings", detail: "Occupied from 2011. Confirm current kit with the hamlet." },
      { theme: "food", title: "A farm on the plateau", detail: "Ferme des Enfants. Woofers. Guests stay off rows they were not asked onto." },
      { theme: "conservation", title: "Six hectares in a SAS coop", detail: "Edge of Païolive. You join. You do not buy the gorges." },
      { theme: "education", title: "A school beside the houses", detail: "Association 1999. The hamlet is not a holiday village — write first." }
    ]
  }
};
