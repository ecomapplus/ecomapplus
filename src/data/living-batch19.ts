import type { Community } from "./communities";

/** Ten living villages, oldest occupancy first: the UK’s first purpose-built housing coop, a Bucks fully mutual mansion, Freiburg’s Syndikat birthplace, a Roskilde iron-foundry bofællesskab, Utah’s first cohousing, a Denver townhome seven, a Fresno twenty-eight, a Dieulefit SAS oasis, a Denver convent conversion, and Toulouse’s first inhabitants’ coop. */
export const livingBatch19Communities: Community[] = [
  {
    slug: "redfield",
    name: "Redfield Community",
    location: "Buckingham Road, Winslow, Buckinghamshire MK18 3LZ",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 1978,
    foundedLabel: "1978 (founded)",
    members: 17,
    membersLabel: "Up to 17 adults as well as their children. Headcount not isolated",
    acres: 17,
    acresLabel: "17 acres. North Buckinghamshire. Buckingham Road, Winslow",
    legalStructure:
      "Fully mutual housing co-operative. You take a dwelling. You do not buy Buckingham Road.",
    legalCategory: "Housing cooperative",
    stillActive: true,
    images: [
      "/communities/redfield-land.jpg",
      "/communities/redfield-1.jpg",
      "/communities/redfield-2.jpg",
      "/communities/redfield-3.jpg"
    ],
    summary:
      "A Winslow mansion on 17 acres. Founded 1978. Fully mutual. Visitors write redfieldvisit@gmail.com. You take a dwelling. You do not buy Buckingham Road.",
    businessModel:
      "Cooperative occupancy. Sixteen hours of community work a week. A Winslow walk is not a share.",
    foundingProcess:
      "Founded 1978.",
    governance:
      "Adult members, 16 hours a week. Cooking, garden, buildings, animals.",
    website: "https://redfieldcommunity.org.uk/",
    timeline: [
      { year: "1978", event: "Founded. Fully mutual housing co-operative." },
      { year: "Present", event: "Up to 17 adults. A dwelling, not Buckingham Road." }
    ]
  },

  {
    slug: "la-querencia",
    name: "La Querencia",
    location: "2658 E Alluvial Avenue, Fresno, CA 93720",
    region: "California, USA",
    country: "United States",
    foundedYear: 2008,
    foundedLabel: "2008 (Alliance move-in. ABC30 14 April 2008: Valley’s first. Own site: since 2009)",
    members: 28,
    membersLabel: "28 privately owned homes. Headcount not isolated",
    acres: 2.8,
    acresLabel: "2.8 acres in northeast Fresno",
    legalStructure:
      "Twenty-eight privately owned homes. You buy a house. You do not buy Alluvial Avenue.",
    legalCategory: "Homeowners association",
    stillActive: true,
    images: [
      "/communities/la-querencia-land.jpg",
      "/communities/la-querencia-1.jpg",
      "/communities/la-querencia-2.jpg",
      "/communities/la-querencia-3.jpg"
    ],
    summary:
      "Twenty-eight homes on 2.8 Fresno acres. Occupied 2008; since 2009. Guest room. You buy a house. You do not buy Alluvial Avenue.",
    businessModel:
      "Private sales. An Alluvial walk is not a closing.",
    foundingProcess:
      "ABC30 14 April 2008: Valley’s first. Alliance move-in 2008. Own site: since 2009.",
    governance:
      "A 28-home neighbourhood.",
    website: "https://www.laqcoho.org/",
    timeline: [
      { year: "2008", event: "ABC30 14 April: Valley’s first. 28 homes on 2.8 acres." },
      { year: "Present", event: "Guest room. A house, not Alluvial." }
    ]
  }

];
