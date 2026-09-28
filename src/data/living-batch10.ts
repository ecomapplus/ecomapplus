import type { Community } from "./communities";

/** Ten living villages, oldest founding first: Gudmand-Høyer’s 33-house slope in Jonstrup, Linköping’s 190-flat municipal kollektivhus, Cambridge MA’s 41-unit infill, DC’s 43-home Takoma courtyard, Nevada City’s 34-home foothill cluster, a Dorset CIC on a farm, Zürich’s 13-building 2000-Watt Areal, Vienna’s sociocratic timber block by the Hauptbahnhof, Poblenou’s 20-dwelling cessió d’ús, and Bridport’s 53-home community land trust. */
export const livingBatch10Communities: Community[] = [
 {
  slug: "threshold-centre",
  name: "Threshold Centre",
  location: "Cole Street Farm, Cole Street Lane, Gillingham, Dorset SP8 5JQ",
  region: "Dorset, England",
  country: "United Kingdom",
  foundedYear: 2009,
  foundedLabel: "2009 (CIC registered 2004; occupied as a cohousing on Cole Street Farm; 14 dwellings plus farmhouse rooms)",
  members: 20,
  membersLabel: "Up to about 20 members of record (UK Cohousing Network); 14 self-contained homes plus three rented rooms in the farmhouse. Average age about 60; no children of current record",
  acres: 1,
  acresLabel: "Residential cluster around a communal green, plus over an acre of rented garden and orchard across the lane (community site). Farmstead acreage not isolated here",
  legalStructure:
   "Community Interest Company holds the freehold of all the properties. Mixed owner-occupation, affordable rent and shared ownership with a housing association. You apply. You do not buy Cole Street Farm.",
  legalCategory: "CIC cohousing / mixed tenure",
  stillActive: true,
  images: [
   "/communities/threshold-centre-land.jpg",
   "/communities/threshold-centre-1.jpg",
   "/communities/threshold-centre-2.jpg",
   "/communities/threshold-centre-3.jpg"
  ],
  summary:
   "Fourteen homes around an 18th-century farmhouse outside Gillingham. A CIC holds the freehold. Guest rooms in the farmhouse. You apply. You do not buy the farm.",
  businessModel:
   "Mixed tenure under a CIC freehold. Seven homes affordable rent or shared ownership of record. Confirm vacancies on thresholdcentre.org.uk. A labyrinth photograph is not a lease.",
  foundingProcess:
   "CIC 2004. Occupied as cohousing 2009 on Cole Street Farm. Barn conversions, a biomass boiler, a biodigester. The farmhouse is the common.",
  governance:
   "CIC members. A meditation-room hour is not a share.",
  website: "http://www.thresholdcentre.org.uk/",
  timeline: [
   { year: "2004", event: "The Threshold Cohousing Centre CIC registered (Companies House 05238501)." },
   { year: "2009", event: "Established as a cohousing on Cole Street Farm. 14 dwellings, farmhouse rooms." },
   { year: "Present", event: "CIC still holds the freehold. Mixed tenure. Guest rooms. Confirm on thresholdcentre.org.uk." }
  ]
 }

];
