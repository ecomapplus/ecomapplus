import type { Community } from "./communities";

/** Ten living villages, oldest founding first: Vandkunsten’s almennyttig dense-low in Herfølge, Dalby’s HSB ekoby, Tucson’s 28-home desert cohousing, Silver Spring’s LEED office conversion, Jamaica Plain’s 30-unit infill, Amsterdam’s CPO block with a theatre, a Madrid senior cooperativa, Munich’s bridged Genossenschaft, The Hague’s 33 energy-neutral timber houses, and Usera’s first derecho-de-uso eco-cohousing. */
export const livingBatch11Communities: Community[] = [
  {
    slug: "milagro-cohousing",
    name: "Milagro Cohousing",
    location: "Tucson Mountain foothills, west of downtown Tucson (homes on Gaia / Camino de Oeste Wash)",
    region: "Arizona, USA",
    country: "United States",
    foundedYear: 2003,
    foundedLabel: "Initiated 1994; fully occupied August 2003. Some later notes say completed 2002. 28 homes on 43 acres",
    members: 80,
    membersLabel: "28 homes; about 80 residents. Occupied August 2003; completed 2002 in some later notes. Figures on the year drift by one",
    acres: 43,
    acresLabel: "43 acres; 35 set aside as a nature preserve. Two rows of townhomes, common house, pool, Boundary Line Trail",
    legalStructure:
      "Owner-occupied cohousing condominium. You buy a townhome. You do not buy the wash or the 35 acres of preserve.",
    legalCategory: "Cohousing condominium",
    stillActive: true,
    images: [
      "/communities/milagro-cohousing-land.jpg",
      "/communities/milagro-cohousing-1.jpg",
      "/communities/milagro-cohousing-2.jpg",
      "/communities/milagro-cohousing-3.jpg"
    ],
    summary:
      "Twenty-eight townhomes on 43 Sonoran acres. Occupied 2003. Rain basins, a 3,600-square-foot common house. You buy a house. You do not buy the wash.",
    businessModel:
      "Townhome sales when one opens. Six hours of work a month. A desert walk is not a viewing.",
    foundingProcess:
      "Four couples in 1994. Arizona Planning Association ‘Best Project’ 2001. All 28 occupied by August 2003.",
    governance:
      "Consensus of neighbours. Self-managed. A labyrinth photograph is not a key.",
    website: "https://www.milagrocohousing.org/",
    timeline: [
      { year: "1994", event: "Four couples begin meeting. A desert cohousing west of Tucson." },
      { year: "2001", event: "Arizona Planning Association ‘Best Project’." },
      { year: "2002–03", event: "Completed 2002 in some later notes; fully occupied August 2003. 28 homes." },
      { year: "Present", event: "Still 28 doors, 43 acres. The wash stays common." }
    ]
  },
  {
    slug: "vrijburcht",
    name: "Vrijburcht",
    location: "J.O. Vaillantlaan 143, 1086 XZ Amsterdam, Steigereiland",
    region: "North Holland, Netherlands",
    country: "Netherlands",
    foundedYear: 2007,
    foundedLabel: "Planning from 2000, construction 2005, completed 2007 (Climate-ADAPT). Their own site treats 2026 as twenty years",
    members: 130,
    membersLabel: "52 apartments plus a care home for six youths of the Climate-ADAPT account. Headcount not isolated — a mixed-use block of that size is on the order of 120–150 people",
    acres: null,
    acresLabel: "A mixed-use CPO block on Steigereiland in the IJmeer. Courtyard garden, theatre, café, two guest rooms. Acreage not isolated",
    legalStructure:
      "Collective private commissioning, then a VvE of owner-occupiers. You buy an apartment. You do not buy the theatre or the harbour.",
    legalCategory: "CPO / owners’ association",
    stillActive: true,
    images: [
      "/communities/vrijburcht-land.jpg",
      "/communities/vrijburcht-1.jpg",
      "/communities/vrijburcht-2.jpg",
      "/communities/vrijburcht-3.jpg"
    ],
    summary:
      "Fifty-two apartments, a theatre, a café, two guest rooms. Steigereiland, 2007. You buy a flat. You do not buy the harbour.",
    businessModel:
      "Apartment sales when one opens. Public theatre and brasserie of record. A matinee is not a viewing.",
    foundingProcess:
      "CPO from 2000. Construction 2005. Completed 2007. CASA / VLUGP of the architecture accounts. The building company dissolved; each household holds its own title.",
    governance:
      "VvE of owner-occupiers. Mixed-use ground floor. vve@vrijburcht.nl. A café table is not a share.",
    website: "https://vrijburcht.nl/",
    timeline: [
      { year: "2000", event: "CPO planning starts. Steigereiland, an artificial island in the IJmeer." },
      { year: "2005–07", event: "Construction, then completion. 52 apartments, theatre, café, care home, two guest rooms." },
      { year: "2026", event: "Their own site marks twenty years. Still living. vrijburcht.nl." }
    ]
  }

];
