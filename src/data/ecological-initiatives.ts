import { africaEuropeNewEco } from "./eco-africa-europe-new";
import { americasEco } from "./eco-americas";
import { asiaRussiaEco } from "./eco-asia-russia";
import { coreEco } from "./eco-core";
import { mexicoEco } from "./eco-mexico";
import { usaMoreEco } from "./eco-usa-more";
import { polandEco } from "./eco-poland";
import { volunteerBatchEco } from "./eco-volunteer-batch";
import { formerEco } from "./eco-former";
import { formerMoreEco } from "./eco-former-more";
import { formerClosedEco } from "./eco-former-closed";
import { livingMoreEco } from "./eco-living-more";
import { livingBatch2Eco } from "./eco-living-batch2";
import { livingBatch3Eco } from "./eco-living-batch3";
import { livingBatch4Eco } from "./eco-living-batch4";
import { livingBatch5Eco } from "./eco-living-batch5";
import { livingBatch6Eco } from "./eco-living-batch6";
import { livingBatch7Eco } from "./eco-living-batch7";
import { livingBatch8Eco } from "./eco-living-batch8";
import { livingBatch9Eco } from "./eco-living-batch9";
import { livingBatch10Eco } from "./eco-living-batch10";
import { livingBatch11Eco } from "./eco-living-batch11";
import { livingBatch12Eco } from "./eco-living-batch12";
import { livingBatch13Eco } from "./eco-living-batch13";
import { livingBatch14Eco } from "./eco-living-batch14";
import { livingBatch15Eco } from "./eco-living-batch15";
import { livingBatch16Eco } from "./eco-living-batch16";
import { livingBatch17Eco } from "./eco-living-batch17";
import { livingBatch18Eco } from "./eco-living-batch18";
import { livingBatch19Eco } from "./eco-living-batch19";
import { livingBatch20Eco } from "./eco-living-batch20";
import { livingBatch21Eco } from "./eco-living-batch21";
import { livingBatch22Eco } from "./eco-living-batch22";
import { livingBatch23Eco } from "./eco-living-batch23";
import { livingBatch24Eco } from "./eco-living-batch24";
import { livingBatch25Eco } from "./eco-living-batch25";
import { livingBatch26Eco } from "./eco-living-batch26";
import { livingBatch27Eco } from "./eco-living-batch27";
import { livingBatch28Eco } from "./eco-living-batch28";
import { livingBatch29Eco } from "./eco-living-batch29";
import { livingBatch30Eco } from "./eco-living-batch30";
import { livingBatch31Eco } from "./eco-living-batch31";
import { livingBatch32Eco } from "./eco-living-batch32";
import { livingBatch33Eco } from "./eco-living-batch33";
import { livingGlampingEco } from "./living-glamping-details";
import { sustainableEcovillageEco } from "./sustainable-ecovillage";
import { maitreyaEcovillageEco } from "./maitreya-ecovillage";

export type EcoTheme =
  | "food"
  | "water"
  | "energy"
  | "building"
  | "waste"
  | "restoration"
  | "conservation"
  | "education";

export type EcoInitiative = {
  theme: EcoTheme;
  title: string;
  detail: string;
};

export type EcologicalProfile = {
  overview: string;
  items: EcoInitiative[];
};

export const ecoThemeLabels: Record<EcoTheme, string> = {
  food: "Food & farming",
  water: "Water",
  energy: "Energy",
  building: "Building",
  waste: "Waste",
  restoration: "Restoration",
  conservation: "Conservation",
  education: "Teaching",
};

export const ecoBySlug: Record<string, EcologicalProfile> = {
  ...coreEco,
  ...mexicoEco,
  ...africaEuropeNewEco,
  ...americasEco,
  ...asiaRussiaEco,
  ...usaMoreEco,
  ...polandEco,
  ...volunteerBatchEco,
  ...formerEco,
  ...formerMoreEco,
  ...formerClosedEco,
  ...livingMoreEco,
  ...livingBatch2Eco,
  ...livingBatch3Eco,
  ...livingBatch4Eco,
  ...livingBatch5Eco,
  ...livingBatch6Eco,
  ...livingBatch7Eco,
  ...livingBatch8Eco,
  ...livingBatch9Eco,
  ...livingBatch10Eco,
  ...livingBatch11Eco,
  ...livingBatch12Eco,
  ...livingBatch13Eco,
  ...livingBatch14Eco,
  ...livingBatch15Eco,
  ...livingBatch16Eco,
  ...livingBatch17Eco,
  ...livingBatch18Eco,
  ...livingBatch19Eco,
  ...livingBatch20Eco,
  ...livingBatch21Eco,
  ...livingBatch22Eco,
  ...livingBatch23Eco,
  ...livingBatch24Eco,
  ...livingBatch25Eco,
  ...livingBatch26Eco,
  ...livingBatch27Eco,
  ...livingBatch28Eco,
  ...livingBatch29Eco,
  ...livingBatch30Eco,
  ...livingBatch31Eco,
  ...livingBatch32Eco,
  ...livingBatch33Eco,
  ...livingGlampingEco,
  ...sustainableEcovillageEco,
  ...maitreyaEcovillageEco,
};

export function ecoFor(slug: string): EcologicalProfile {
  const row = ecoBySlug[slug];
  if (!row) {
    throw new Error(`Missing ecological-initiatives data for ${slug}`);
  }
  return row;
}
