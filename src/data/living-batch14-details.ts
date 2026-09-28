import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch14LegalEntities: Record<string, LegalEntity[]> = {
  overdrevet: [
    { name: "Grundejerforeningen Overdrevet", kind: "Landowners’ association", role: "CVR 31993024. Formal wrapper for 25 owner-occupied houses.", status: "current", layer: "membership", year: "1980", forms: ["Homeowners association"] },
    { name: "25 ejerboliger", kind: "Owner-occupied houses", role: "Eight longhouses around a common house. About 100 m² plus a porch and a loft.", status: "current", layer: "land", year: "1980", forms: ["Freehold title", "Homeowners association"] },
  ],
  bellingham: [
    { name: "Bellingham Cohousing condominium", kind: "Washington condominium", role: "33 households. Ten buildings.", status: "current", layer: "membership", year: "2000", forms: ["Homeowners association"] },
    { name: "Donovan Farm site", kind: "Clustered condos plus wetland", role: "Nearly 6 acres. Homes on about 2.5 acres; orchard, wetlands, a creek.", status: "current", layer: "land", year: "2000", forms: ["Homeowners association", "Freehold title"] },
  ],
  "numero-zero": [
    { name: "Eight Porta Palazzo households", kind: "Condominium", role: "Eight families bought and refurbished a historic building. Eight dwellings.", status: "current", layer: "membership", year: "2014", forms: ["Homeowners association", "Freehold title"] },
    { name: "Associazione CoAbitare", kind: "Membership association", role: "Developed the project from 2009. Protocol with the City of Turin.", status: "current", layer: "network", year: "2009", forms: ["Membership association"] },
  ],
  lebensbogen: [
    { name: "Projekt-Lebensbogen e.V.", kind: "Registered association", role: "Education for sustainable development. Beside the house, not the same as the common purse.", status: "current", layer: "membership", year: "2015", forms: ["Registered association"] },
    { name: "Gemeinschaft Lebensbogen", kind: "Income-sharing household", role: "Consensus and a shared income. Former youth hotel, August 2015.", status: "current", layer: "land", year: "2015", forms: ["Registered association"] },
  ],
};

export const livingBatch14Land: Record<string, LandOwnership> = {
  overdrevet: {
    owner: "25 house owners plus Grundejerforeningen Overdrevet",
    complexity: "split",
    tenure: "Danish freehold plus landowners’ association",
    howHeld: "25 owner-occupied houses in eight longhouses around a common house. 2.5 hectares. A former farm. Common land in the association.",
    narrative: "A Hinnerup edge. A house is not Søftendalen.",
    divided: [
      { label: "25 houses", holder: "Households", share: "Ejerbolig", what: "The join is a listing." },
      { label: "Common house and land", holder: "Grundejerforening", share: "Association", what: "You do not buy the valley." },
    ],
  },
  bellingham: {
    owner: "33 unit owners plus the condominium",
    complexity: "split",
    tenure: "Washington condominium",
    howHeld: "33 homes in 10 buildings clustered on about 2.5 of nearly 6 acres. Wetlands and a creek to the south.",
    narrative: "A Donovan Farm cluster. A unit is not the creek.",
    divided: [
      { label: "33 condos", holder: "Households", share: "Condo title", what: "The join is a listing." },
      { label: "Wetland and orchard", holder: "Association", share: "Common", what: "You do not buy the creek." },
    ],
  },
  "numero-zero": {
    owner: "Eight family owners plus CoAbitare around the compact",
    complexity: "split",
    tenure: "Italian condominium",
    howHeld: "A historic building in Porta Palazzo. 440 m² of land, about 750 m² of residence of CoAbitare. Eight dwellings. Common rooms.",
    narrative: "A palazzo.",
    divided: [
      { label: "Eight dwellings", holder: "Households", share: "Condominium title", what: "The join is a purchase, then the compact." },
      { label: "Common rooms", holder: "The eight", share: "Shared", what: "You do not buy Porta Palazzo." },
    ],
  },
  lebensbogen: {
    owner: "The community beside Projekt-Lebensbogen e.V.",
    complexity: "simple",
    tenure: "Association occupancy of a former youth hotel",
    howHeld: "Auf dem Dörnberg 13. Moved in August 2015. Seminar house and Café Helfensteine. No private freehold of the hill.",
    narrative: "A former youth hotel. You apply. You do not buy the Dörnberg.",
    divided: [
      { label: "The house", holder: "The community", share: "Occupancy", what: "The join is an application." },
      { label: "Tagungshaus and café", holder: "Collective businesses", share: "Kollektivbetrieb", what: "A seminar booking is not a membership." },
    ],
  },
};

export const livingBatch14Funding: Record<string, CommunityFunding> = {
  overdrevet: {
    overview: "Twenty-five private houses and a landowners’ association, 1980.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "House sales + association dues",
    grants: [],
    private: [
      { source: "25 ejerboliger", amount: "East Jutland housing costs; a 2020s listing on Facebook named 3.25 million kroner for one house — confirm current prices, not a post", certainty: "estimated", kind: "member-equity", note: "A Søftendal walk is not a closing." },
    ],
  },
  bellingham: {
    overview: "Thirty-three private condos and annual dues on the Donovan Farm site.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Condo sales + dues",
    grants: [],
    private: [
      { source: "33 condominium homes", amount: "Whatcom County housing costs", certainty: "estimated", kind: "member-equity", note: "bellcoho.com. A Donovan Avenue walk is not a closing." },
    ],
  },
  "numero-zero": {
    overview: "Eight families bought and refurbished a Porta Palazzo palazzo.",
    grantsHeadline: "City of Turin protocol — not a construction grant isolated here",
    privateHeadline: "Eight dwellings",
    grants: [],
    private: [
      { source: "Eight families", amount: "Turin housing costs; 750 m² of residence", year: "2014", certainty: "estimated", kind: "member-equity", note: "A Porta Palazzo walk is not a closing." },
    ],
  },
  lebensbogen: {
    overview: "A common purse, a café, a seminar house. Occupied 2015.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Shared income + Tagungshaus + café",
    grants: [],
    private: [
      { source: "Gemeinschaft Lebensbogen", amount: "15–18 people; ESC volunteers", certainty: "estimated", kind: "member-equity", note: "A seminar booking is not a membership." },
    ],
  },
};

export const livingBatch14VisitJoin: Record<string, VisitJoin> = {
  overdrevet: {
    visit: 2,
    join: 3,
    visitProcess: "Overdrevet 1, 8382 Hinnerup, against Søftendalen. Twenty-five houses. Write.",
    joinProcess: "Buy a house when one is listed. Grundejerforening. A walk is not a deed.",
  },
  bellingham: {
    visit: 2,
    join: 3,
    visitProcess: "2614 Donovan Avenue. bellcoho.com. Thirty-three condos, a wetland. Write. It is not a Whatcom park.",
    joinProcess: "Buy a unit when one is listed. A Washington condominium. A creek walk is not a closing.",
  },
  "numero-zero": {
    visit: 2,
    join: 2,
    visitProcess: "Porta Palazzo, Turin. Eight dwellings in a historic building. Write.",
    joinProcess: "A flat in the condominium, then the compact. Eight families. A market walk is not a deed.",
  },
  lebensbogen: {
    visit: 4,
    join: 2,
    visitProcess: "Auf dem Dörnberg 13, Zierenberg. Tagungshaus — book a seminar stay. ESC. A hike to the Helfensteine is not a membership.",
    joinProcess: "Apply. Consensus, income-sharing. A seminar night is not a join.",
  },
};

export const livingBatch14DailyLife: Record<string, DailyLife> = {
  overdrevet: {
    typical: [
      { title: "Twenty-five houses", detail: "Eight longhouses around a common house. About 100 m² plus a porch and a loft." },
      { title: "A kitchen garden", detail: "Partly self-sufficient. A former farm." },
      { title: "An East Jutland week", detail: "Jobs in Hinnerup or Aarhus. Then a landowners’ meeting." },
    ],
    unique: { title: "Denmark’s first low-energy bofællesskab", detail: "Founded in 1980 as Denmark’s first low-energy bofællesskab: twenty-five owner-occupied houses in eight longhouses around a common house on 2.5 hectares at Hinnerup." },
  },
  bellingham: {
    typical: [
      { title: "Thirty-three condos", detail: "Ten buildings. Clustered on about 2.5 acres." },
      { title: "A wetland and a creek", detail: "Nearly 6 acres. Orchard." },
      { title: "A Whatcom week", detail: "Jobs in Bellingham. Then a Donovan Avenue meeting." },
    ],
    unique: { title: "A farm site that stayed clustered", detail: "Founded 2000. You buy a unit. You do not buy the creek." },
  },
  "numero-zero": {
    typical: [
      { title: "Eight dwellings", detail: "50–130 m². 19 people." },
      { title: "Common rooms and a garden", detail: "About 200 m² common. A Porta Palazzo palazzo." },
      { title: "A Turin week", detail: "Jobs in the city. Then eight families in one building." },
    ],
    unique: { title: "A palazzo that stayed eight families", detail: "CoAbitare began the project in 2009 with a protocol with the City of Turin; eight families occupied the refurbished Porta Palazzo palazzo in 2014." },
  },
  lebensbogen: {
    typical: [
      { title: "A former youth hotel", detail: "Moved in August 2015. 15–18 people." },
      { title: "Café Helfensteine and a Tagungshaus", detail: "Kollektivbetriebe. ESC volunteers." },
      { title: "A Habichtswald week", detail: "Zierenberg four kilometres. Then a consensus meeting and a common purse." },
    ],
    unique: { title: "Income-sharing beside a seminar house", detail: "The community moved into a former youth hotel on the Habichtswald in August 2015; income-sharing and consensus sit beside Café Helfensteine and a seminar house." },
  },
};

export const livingBatch14Informal: Record<string, InformalAgreement[]> = {
  overdrevet: [
    { kind: "kitchen-table", why: "Twenty-five private doors and one common house." },
    { kind: "membership-trial", why: "A house listing. A valley walk is not a deed." },
    { kind: "land-care", why: "A kitchen garden and a former farm. Guests stay off rows they were not asked onto." },
    { kind: "children-care", why: "Adults, children and young people. The lane is a playground as much as a board." },
  ],
  bellingham: [
    { kind: "kitchen-table", why: "Thirty-three private condos and shared spaces." },
    { kind: "membership-trial", why: "A listing. A creek walk is not a closing." },
    { kind: "land-care", why: "Wetlands and a creek. Guests stay off the orchard they were not asked onto." },
    { kind: "children-care", why: "Intergenerational. The cluster is a playground as much as a board." },
  ],
  "numero-zero": [
    { kind: "kitchen-table", why: "Eight dwellings and common rooms." },
    { kind: "membership-trial", why: "A flat, then the compact. A market walk is not a deed." },
    { kind: "building-code", why: "A refurbished historic building. What a household may change in eight dwellings." },
    { kind: "children-care", why: "Eight families. The stair is a playground as much as a meeting." },
  ],
  lebensbogen: [
    { kind: "labour-roster", why: "Income-sharing and consensus. Someone still runs the café and the house." },
    { kind: "volunteer-intern", why: "ESC. One or two young volunteers, six to twelve months." },
    { kind: "guest-stay", why: "Tagungshaus. Book a seminar stay. A seminar night is not a membership." },
    { kind: "membership-trial", why: "Apply. A hike is not a join." },
  ],
};

export const livingBatch14Governance: Record<string, Governance> = {
  overdrevet: {
    model: "hoa",
    modelLabel: "Ejerboliger + grundejerforening",
    unique: true,
    summary: "Twenty-five owner-occupied houses in a landowners’ association. Denmark’s first low-energy bofællesskab, 1980. You buy a house. You do not buy Søftendalen.",
    whoDecides: "House owners through the grundejerforening.",
    bodies: [
      { name: "Grundejerforeningen Overdrevet", role: "CVR 31993024. The common house, the land." },
      { name: "Households", role: "25 private titles." },
    ],
    howItRuns: "A listing. A valley walk is not a deed.",
    dive: {
      title: "How a 1980 experiment stayed 25 houses",
      lead: "Overdrevet put twenty-five low-energy houses in a grundejerforening so a Hinnerup edge stays a bofællesskab of private doors, not a commune and not twenty-five fenced lots to Søftendalen.",
      organs: [
        { name: "The association", what: "CVR 31993024. 25 dwellings." },
        { name: "The houses", what: "Eight longhouses around a common house. About 65 people in 2023." },
      ],
      path: "Buy a house. There is no purchase of the valley.",
      history: "1980. Denmark’s first low-energy bofællesskab.",
      tension: "65 versus 70 people. 2.5 hectares. Confirm a vacancy, not a 1980 drawing.",
    },
  },
  bellingham: {
    model: "hoa",
    modelLabel: "Cohousing condominium",
    unique: false,
    summary: "33 privately owned condos in 10 buildings. Founded 2000. You buy a unit. You do not buy the creek.",
    whoDecides: "Unit owners.",
    bodies: [
      { name: "Households", role: "33 condo titles." },
      { name: "Association", role: "Nearly 6 acres, wetland, orchard." },
    ],
    howItRuns: "A listing on bellcoho.com. A creek walk is not a closing.",
  },
  "numero-zero": {
    model: "hybrid",
    modelLabel: "Eight-family condominium + CoAbitare",
    unique: true,
    summary: "Eight families refurbished a Porta Palazzo palazzo. Project 2009, living together 2014. You buy a flat. You do not buy the market.",
    whoDecides: "The eight households, with CoAbitare around the compact.",
    bodies: [
      { name: "Eight families", role: "The dwellings, 19 people." },
      { name: "CoAbitare", role: "The 2009 project association. Protocol with the City of Turin." },
    ],
    howItRuns: "A market walk is not a deed.",
    dive: {
      title: "How eight families kept a palazzo",
      lead: "Numero Zero put eight households into a refurbished Porta Palazzo building so a historic block remains a compact of families, not eight disconnected investor flats above the market.",
      organs: [
        { name: "The eight", what: "19 inhabitants. Occupied 2014." },
        { name: "CoAbitare", what: "Project 2009. Protocol with the Comune." },
      ],
      path: "Buy a flat, then live the compact.",
      history: "Works in 2013. Cohabitation 2014.",
      tension: "Eight families versus 19 people. 440 m² of land of CoAbitare. Confirm a vacancy, not a 2013 photo essay.",
    },
  },
  lebensbogen: {
    model: "consensus",
    modelLabel: "Income-sharing e.V. household",
    unique: true,
    summary: "A small community that shares income and decides by consensus. Occupied 2015. Seminar house. You apply. You do not buy the Dörnberg.",
    whoDecides: "The community, by consensus.",
    bodies: [
      { name: "Gemeinschaft Lebensbogen", role: "The household, the common purse." },
      { name: "Projekt-Lebensbogen e.V.", role: "Education, ESC, the public face." },
    ],
    howItRuns: "A seminar night is not a join.",
    dive: {
      title: "How a youth hotel became a common purse",
      lead: "Lebensbogen put a former youth hotel into an income-sharing household beside a registered association so a Habichtswald house remains a seminar place you can book and a community you cannot buy.",
      organs: [
        { name: "The community", what: "15 people of one count; 17 adults and one child of another. Occupied August 2015." },
        { name: "The Verein", what: "Projekt-Lebensbogen e.V. ESC. Tagungshaus." },
      ],
      path: "Apply. There is no estate-agent freehold.",
      history: "Moved into the former youth hotel, August 2015.",
      tension: "15 versus 17+1. A seminar house that is also a home. Confirm a vacancy, not a 98-bed Gruppenhaus listing.",
    },
  },
};

export const livingBatch14Leaders: Record<string, VillageLeaders> = {
  overdrevet: {
    people: [],
    office: { url: "https://www.overdrev.dk/", email: "azgruppeod@gmail.com", address: "Overdrevet 1, 8382 Hinnerup, Denmark" },
  },
  bellingham: {
    people: [],
    office: { url: "https://www.bellcoho.com/", email: "outreach@bellcoho.com", address: "2614 Donovan Avenue, Bellingham, WA 98225" },
  },
  "numero-zero": {
    people: [],
    office: { url: "https://www.coabitare.org/coabitazione/numerozero/", address: "Porta Palazzo, Turin, Italy" },
  },
  lebensbogen: {
    people: [],
    office: { url: "https://lebensbogen.org/", email: "kontakt@gemeinschaft-lebensbogen.de", phone: "+49 5606 5639079", address: "Auf dem Dörnberg 13, 34289 Zierenberg, Germany" },
  },
};

export const livingBatch14Accommodations: Record<string, Accommodations> = {
  overdrevet: {
    visitor: {
      overview: "Write. Twenty-five private houses. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "25 owner-occupied houses.",
      camping: { available: false, types: [], detail: "People live in the longhouses." },
      rooms: { available: true, types: [], detail: "Ejerboliger plus a common house." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  bellingham: {
    visitor: {
      overview: "Write via bellcoho.com. Thirty-three condos. No public guesthouse of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "33 condominium homes.",
      camping: { available: false, types: [], detail: "People live in the cluster." },
      rooms: { available: true, types: [], detail: "Private condos plus shared spaces." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "numero-zero": {
    visitor: {
      overview: "Write. Eight dwellings in Porta Palazzo. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Eight dwellings, 19 people.",
      camping: { available: false, types: [], detail: "People live in the palazzo." },
      rooms: { available: true, types: [], detail: "Private dwellings plus common rooms." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  lebensbogen: {
    visitor: {
      overview: "Tagungshaus. Book a seminar stay. ESC. A seminar night is not a membership. Write.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: [], detail: "Seminar-house rooms. Not a walk-in B&B." },
      other: { available: true, types: [], detail: "Café Helfensteine. A coffee is not a bed." },
    },
    resident: {
      overview: "15–18 people, plus ESC volunteers.",
      camping: { available: false, types: [], detail: "People live in the former youth hotel." },
      rooms: { available: true, types: [], detail: "Community rooms in the house." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
