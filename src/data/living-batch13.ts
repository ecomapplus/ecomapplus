import type { Community } from "./communities";

/** Ten living villages, oldest founding first: Latrun’s Jewish–Palestinian cooperative hill, Canberra’s 1970s cluster, Vienna’s first intergenerational B.R.O.T. house, Zürich’s Grosshaushalt, a Funen permaculture andel, Abingdon’s mixed-income elder cohousing, Bonn’s Amaryllis eG, Courtenay’s 36 duplexes, Berlin Massachusetts’ conservation cohousing, and Amsterdam’s first new-build wooncoöperatie. */
export const livingBatch13Communities: Community[] = [
  {
    slug: "neve-shalom",
    name: "Wahat al-Salam – Neve Shalom",
    location: "Neve Shalom / Wahat al-Salam, Latrun, 99761",
    region: "Central District, Israel",
    country: "Israel",
    foundedYear: 1970,
    foundedLabel: "1970 (Bruno Hussar’s 100-year lease from the Latrun Trappists). First five families 1978 — four Jewish, one Palestinian. Occupied life is later than the lease",
    members: 331,
    membersLabel: "331 people in 2024. About sixty families in 2010; about 70 in 2015. Half Jewish, half Palestinian citizens of Israel. A waiting list of about 300 families",
    acres: 99,
    acresLabel: "Forty hectares leased 1970 at a peppercorn rent. The monastery later gave about twenty hectares outright. ~99 acres of the original lease; confirm the current parcel with the village, not a 1970 deed",
    legalStructure:
      "A cooperative village on land first leased from the Latrun Trappist abbey. Half the hill later gifted. You apply. You do not buy Latrun.",
    legalCategory: "Cooperative village / ground lease",
    stillActive: true,
    images: [
      "/communities/neve-shalom-land.jpg",
      "/communities/neve-shalom-1.jpg",
      "/communities/neve-shalom-2.jpg",
      "/communities/neve-shalom-3.jpg"
    ],
    summary:
      "A Jewish–Palestinian cooperative village on a Latrun hill. Lease 1970, families from 1978. A bilingual school. You apply. You do not buy the monastery’s hill.",
    businessModel:
      "Households, a bilingual school, the School for Peace of record. A workshop is not a deed.",
    foundingProcess:
      "Bruno Hussar, an Egyptian-born Dominican, leased forty hectares from the Latrun Trappists in 1970. First five families in 1978.",
    governance:
      "Equal Jewish and Palestinian membership. A school day is not a share.",
    website: "https://wasns.org/",
    timeline: [
      { year: "1970", event: "Hussar leases forty hectares from the Latrun Trappists at a peppercorn rent." },
      { year: "1978", event: "First five families. Four Jewish, one Palestinian." },
      { year: "late 1990s", event: "The monastery gifts about twenty hectares outright." },
      { year: "2024", event: "331 people. The village still on the hill after 7 October." }
    ]
  },
  {
    slug: "den-selvforsynende",
    name: "Den Selvforsynende Landsby",
    location: "Højgårdsvej, 5762 Vester Skerninge / Hundstrup, Funen",
    region: "Region of Southern Denmark",
    country: "Denmark",
    foundedYear: 2002,
    foundedLabel: "2002. Instagram has marked twenty years from a 6 May founding — 2004 if that post is 2024, 2006 if 2026. Occupied life and the company date drift",
    members: 70,
    membersLabel: "About 30 adults and a few more children; Instagram has said a mix of 70 adults and children. 19 dwellings, aiming at 26 houses. Headcount and house counts drift",
    acres: null,
    acresLabel: "A permaculture farm and houses on the edge of Hundstrup. Acreage not isolated here",
    legalStructure:
      "Andelsforening. You buy a share in a house. You do not buy Hundstrup.",
    legalCategory: "Housing cooperative / ekoby",
    stillActive: true,
    images: [
      "/communities/den-selvforsynende-land.jpg",
      "/communities/den-selvforsynende-1.jpg",
      "/communities/den-selvforsynende-2.jpg",
      "/communities/den-selvforsynende-3.jpg"
    ],
    summary:
      "A Funen permaculture andel. Nineteen houses, aiming at twenty-six. You buy a share. You do not buy the field.",
    businessModel:
      "Andel shares, a small farm.",
    foundingProcess:
      "Founded 2002; a May founding twenty years on Instagram. Permaculture from the start.",
    governance:
      "An andelsforening. Members hold shares. The farm is common.",
    website: "https://selvforsyning.dk/",
    timeline: [
      { year: "2002", event: "The village is founded. Instagram later marks a 6 May anniversary — year drifts." },
      { year: "Present", event: "19 dwellings, aiming at 26. Tours." }
    ]
  }

];
