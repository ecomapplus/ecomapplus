import type { Community } from "./communities";

/** Ten living villages, oldest founding first: Denmark’s first low-energy bofællesskab, Zürich’s occupied-house rescue eG, Bellingham’s Donovan Farm cluster, Boulder’s mixed-income Holiday neighbourhood, Nanaimo’s atrium condo, Saskatoon’s first cohousing, Turin’s Porta Palazzo eight-family house, a Hessian income-sharing e.V., Nijmegen’s social-rent CVEG, and Bern’s converted Tobler warehouse. */
export const livingBatch14Communities: Community[] = [
  {
    slug: "overdrevet",
    name: "Overdrevet",
    location: "Overdrevet 1, 8382 Hinnerup",
    region: "Central Denmark Region",
    country: "Denmark",
    foundedYear: 1980,
    foundedLabel: "1980 (Denmark’s first low-energy bofællesskab)",
    members: 65,
    membersLabel: "About 65 adults, children and young people (2023). 25 dwellings. Headcount drifts",
    acres: 6.2,
    acresLabel: "2.5 hectares — about 6.2 acres. Eight longhouses around a common house, plus a former farm",
    legalStructure:
      "Owner-occupied houses (ejerboliger) formally organised as a grundejerforening. You buy a house. You do not buy Søftendalen.",
    legalCategory: "Homeowners association / freehold",
    stillActive: true,
    images: [
      "/communities/overdrevet-land.jpg",
      "/communities/overdrevet-1.jpg",
      "/communities/overdrevet-2.jpg",
      "/communities/overdrevet-3.jpg",
    ],
    summary:
      "Twenty-five low-energy houses on 2.5 hectares at the edge of Hinnerup. Denmark’s first, 1980. You buy a house. You do not buy the valley.",
    businessModel:
      "Private sales and a landowners’ association. A Søftendal walk is not a closing.",
    foundingProcess:
      "Founded 1980 as Denmark’s first low-energy bofællesskab. The name is a joke: both ‘too much’ and the common at the edge of town.",
    governance:
      "Grundejerforeningen Overdrevet, CVR 31993024. Twenty-five private doors and one common house.",
    website: "https://www.overdrev.dk/",
    timeline: [
      { year: "1980", event: "Founded as Denmark’s first low-energy bofællesskab." },
      { year: "2023", event: "About 65 people in 25 dwellings." },
      { year: "Present", event: "Still 25 houses in eight longhouses around a common house. A house, not the valley." },
    ],
  },
  {
    slug: "bellingham",
    name: "Bellingham Cohousing",
    location: "2614 Donovan Avenue, Bellingham, WA 98225",
    region: "Washington, USA",
    country: "United States",
    foundedYear: 2000,
    foundedLabel: "2000 (Cohousing Alliance and the Bellingham Herald, March 2026). Their own site: celebrating 25 years",
    members: 80,
    membersLabel: "33 households. Headcount not isolated — a 33-home cluster is on the order of seventy to ninety people",
    acres: 6,
    acresLabel: "Nearly 6 acres; homes clustered on about 2.5 acres, with orchard, wetlands and a creek. Alliance land-size band is 6–10 acres — confirm the parcel, not a directory band",
    legalStructure:
      "A Washington condominium. You buy a unit. You do not buy the wetland.",
    legalCategory: "Homeowners association / condominium",
    stillActive: true,
    images: [
      "/communities/bellingham-land.jpg",
      "/communities/bellingham-1.jpg",
      "/communities/bellingham-2.jpg",
      "/communities/bellingham-3.jpg",
    ],
    summary:
      "Thirty-three condos in ten buildings on the old Donovan Farm. Founded 2000. You buy a unit. You do not buy the creek.",
    businessModel:
      "Condo sales and annual dues. A Donovan Avenue walk is not a closing.",
    foundingProcess:
      "Historic Donovan Farm site. Occupied as a 33-home cluster from 2000.",
    governance:
      "Condominium association. Intergenerational.",
    website: "https://www.bellcoho.com/",
    timeline: [
      { year: "2000", event: "Founded. 33 homes in 10 buildings." },
      { year: "Present", event: "Still 33 households. bellcoho.com. A unit, not the wetland." },
    ],
  },
  {
    slug: "numero-zero",
    name: "Cohousing Numero Zero",
    location: "Porta Palazzo, Turin",
    region: "Piedmont, Italy",
    country: "Italy",
    foundedYear: 2014,
    foundedLabel: "2014 (cohabitation). CoAbitare project 2009. Works in 2013",
    members: 19,
    membersLabel: "19 inhabitants. Eight families. Eight dwellings, 50–130 m²",
    acres: 0.11,
    acresLabel: "440 m² of land; about 750 m² of residence, 200 m² common, 180 m² commercial. ~0.11 acres. An urban plot, not a farm",
    legalStructure:
      "Eight families bought and refurbished a historic building. CoAbitare association around it. You buy into the condominium, then you live the compact. You do not buy Porta Palazzo.",
    legalCategory: "Condominium / membership association",
    stillActive: true,
    images: [
      "/communities/numero-zero-land.jpg",
      "/communities/numero-zero-1.jpg",
      "/communities/numero-zero-2.jpg",
      "/communities/numero-zero-3.jpg",
    ],
    summary:
      "Eight families in a Porta Palazzo palazzo. Project 2009, living together 2014. You buy a flat. You do not buy the market quarter.",
    businessModel:
      "Eight private dwellings plus common rooms. A Porta Palazzo walk is not a closing.",
    foundingProcess:
      "CoAbitare Association, 2009. Protocol with the City of Turin. Occupied 2014.",
    governance:
      "Eight households and CoAbitare. A secular, social compact.",
    website: "https://www.coabitare.org/coabitazione/numerozero/",
    timeline: [
      { year: "2009", event: "CoAbitare starts Numero Zero. Protocol with the Comune." },
      { year: "2013", event: "Works underway in Porta Palazzo." },
      { year: "2014", event: "Cohabitation. Eight families, 19 people." },
      { year: "Present", event: "Still the eight dwellings. A flat, not the market." },
    ],
  },
  {
    slug: "lebensbogen",
    name: "Lebensbogen",
    location: "Auf dem Dörnberg 13, 34289 Zierenberg",
    region: "Hesse, Germany",
    country: "Germany",
    foundedYear: 2015,
    foundedLabel: "2015 (moved into a former youth hotel in August). The community is older; the Dörnberg house is 2015",
    members: 17,
    membersLabel: "15 people aged 10–70; another count is 17 adults and one child. Headcount drifts. Plus one or two ESC volunteers",
    acres: null,
    acresLabel: "A former youth hotel on the edge of Habichtswald nature reserve, at the foot of the Helfensteine. Acreage not isolated here",
    legalStructure:
      "Projekt-Lebensbogen e.V. beside a community that shares income and decides by consensus. You apply. You do not buy the Dörnberg.",
    legalCategory: "Registered association / income-sharing",
    stillActive: true,
    images: [
      "/communities/lebensbogen-land.jpg",
      "/communities/lebensbogen-1.jpg",
      "/communities/lebensbogen-2.jpg",
      "/communities/lebensbogen-3.jpg",
    ],
    summary:
      "A small income-sharing community in a former youth hotel. Occupied 2015. A seminar house and Café Helfensteine. You apply. You do not buy the hill.",
    businessModel:
      "Collective café, Tagungshaus, the Verein. A seminar booking is not a membership.",
    foundingProcess:
      "The community moved into the former youth hotel in August 2015. Consensus and a common purse.",
    governance:
      "Consensus. Income-sharing. The Verein runs education for sustainable development beside the house.",
    website: "https://lebensbogen.org/",
    timeline: [
      { year: "2015", event: "Moved into the former youth hotel, August. Café and seminar house." },
      { year: "Present", event: "15–18 people, plus ESC volunteers. A join, not a freehold." },
    ],
  },
];
