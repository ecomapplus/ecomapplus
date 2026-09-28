import type { Community } from "./communities";

/** Nine living villages, oldest occupancy first: a Toronto garden-city coop, a Durham river cluster, an Oakland retrofit, a Florence woods, a Kassel income-sharing eG, a Darmstadt Passivhaus, Lyon’s first senior inhabitants’ coop, Melbourne’s first vertical cohousing, and a Guelph Passive House six. */
export const livingBatch18Communities: Community[] = [
  {
    slug: "eno-commons",
    name: "Eno Commons",
    location: "1 Indigo Creek Trail, Durham, NC 27712",
    region: "North Carolina, USA",
    country: "United States",
    foundedYear: 1998,
    foundedLabel: "1998 (started living 1 January 1998). Founding year 1992",
    members: 22,
    membersLabel: "22 homes. Headcount not isolated. Multi-generational",
    acres: 11.2,
    acresLabel: "11.2 acres. Walking distance to Eno River State Park",
    legalStructure:
      "HOA with yearly elected officers. Each home and its small lot owned individually; the rest, including Common House and barn, owned together. You buy a house. You do not buy the Eno.",
    legalCategory: "Homeowners association / Freehold title",
    stillActive: true,
    images: [
      "/communities/eno-commons-land.jpg",
      "/communities/eno-commons-1.jpg",
      "/communities/eno-commons-2.jpg",
      "/communities/eno-commons-3.jpg"
    ],
    summary:
      "Twenty-two homes on 11.2 Durham acres. Occupied from 1998. An upstairs guest bedroom. You buy a house. You do not buy the river.",
    businessModel:
      "Private sales. Guide for Prospective Neighbors. An Indigo Creek walk is not a closing.",
    foundingProcess:
      "Founding year 1992. Started living 1 January 1998.",
    governance:
      "HOA, yearly officers. Weekly common-house meal.",
    website: "https://www.enocommons.org/",
    timeline: [
      { year: "1992", event: "Founding year." },
      { year: "1998", event: "Started living 1 January 1998." },
      { year: "Present", event: "22 homes on 11.2 acres. A house, not the Eno." }
    ]
  },

  {
    slug: "villa-locomuna",
    name: "Villa Locomuna",
    location: "Kölnische Straße 183, 34119 Kassel",
    region: "Hesse, Germany",
    country: "Germany",
    foundedYear: 2000,
    foundedLabel: "2000 (Gemeinsam Leben eG founded). First residents December 2000. Former Deutsche Bahn buildings",
    members: 16,
    membersLabel: "GEN Deutschland: 10 adults and 6 children. Wohnprojekte-Portal: 13 adults and 6 children. Permakultur.de: a 30-person community. Headcount drifts",
    acres: null,
    acresLabel: "Former Bahn buildings at the Kasseler Tannenwäldchen. Acreage not isolated",
    legalStructure:
      "Gemeinsam Leben eG, founded 2000. Houses stay in the Genossenschaft; residents self-manage. Spiegel 2018: income on a common account. You do not buy Kölnische Straße.",
    legalCategory: "Registered association",
    stillActive: true,
    images: [
      "/communities/villa-locomuna-land.jpg",
      "/communities/villa-locomuna-1.jpg",
      "/communities/villa-locomuna-2.jpg",
      "/communities/villa-locomuna-3.jpg"
    ],
    summary:
      "A Kassel political commune in former Bahn buildings. eG from 2000. Income-sharing (Spiegel 2018). You do not buy Kölnische Straße.",
    businessModel:
      "Genossenschaft occupancy. Write the office. A Tannenwäldchen walk is not a share.",
    foundingProcess:
      "Planungsbeginn 2000. First residents December 2000.",
    governance:
      "Selbstverwaltung under Gemeinsam Leben eG. KommuJa and Interkomm.",
    website: "https://www.villa-locomuna.de/",
    timeline: [
      { year: "2000", event: "eG founded. First residents December 2000." },
      { year: "2018", event: "Spiegel walks the common account." },
      { year: "Present", event: "10–13 adults (GEN / Wohnprojekte). A share, not Kölnische Straße." }
    ]
  }

];
