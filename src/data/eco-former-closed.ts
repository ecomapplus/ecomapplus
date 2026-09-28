import type { EcologicalProfile } from "./ecological-initiatives";

export const formerClosedEco: Record<string, EcologicalProfile> = {  "pleasant-hill-shaker": {
    overview: "Pleasant Hill’s living ecology was a Kentucky Shaker farm: limestone dwellings, seed, stock, a turnpike village. The covenant ended in 1910. The museum keeps 3,000 acres and 34 buildings as a landmark farm you can walk.",
    items: [
      { theme: "building", title: "Limestone family dwellings", detail: "East and West families. Inn rooms now sit in restored houses." },
      { theme: "food", title: "Shaker farm and Trustees’ Table", detail: "Historic agriculture, interpreted. A restaurant, not a still-room of Believers." },
      { theme: "conservation", title: "3,000-acre campus", detail: "The largest restored Shaker landscape." },
      { theme: "education", title: "Museum teaching", detail: "Tours instead of a living covenant. Sabbathday Lake is the active Shaker ecology in this atlas." },
    ],
  },
  "amana-colonies": {
    overview: "Amana’s ecology was seven villages and 26,000 acres of Inspirationist kitchens, mills, and woolens. The Great Change of 1932 ended the common purse. The corporation still farms the acres. The kitchens are restaurants and memories.",
    items: [
      { theme: "food", title: "Colony kitchens", detail: "Assigned meals until 1932. Family tables after." },
      { theme: "building", title: "Seven brick villages", detail: "German streets that kept going as a landmark." },
      { theme: "conservation", title: "Society land", detail: "Amana Society, Inc., still holds the big acres." },
      { theme: "education", title: "The Great Change as lesson", detail: "A vote to keep the towns rather than the purse." },
    ],
  },  "new-lanark": {
    overview: "New Lanark’s ecology is a cotton gorge: mill races, stone housing, Owen’s school, a store that undercut truck. The reform household ended in 1825. The Trust keeps the water, the mill, and a living village of later tenants.",
    items: [
      { theme: "water", title: "Clyde mill races", detail: "The power that paid the school." },
      { theme: "building", title: "Mill rows and Institute", detail: "1816 character building, restored." },
      { theme: "education", title: "Infant school", detail: "Owen’s syllabus. An exhibit now." },
      { theme: "conservation", title: "UNESCO gorge", detail: "A World Heritage village, 2001." },
    ],
  },
  "familistere-guise": {
    overview: "Godin’s ecology was a social palace beside a stove works: glass courts, baths, a nursery, apartments for foundry families. The association ended in 1968. The brick still holds a museum and ordinary tenants.",
    items: [
      { theme: "building", title: "Palais social", detail: "Wings around glazed courtyards. Fourier in brick." },
      { theme: "education", title: "Nursery and school", detail: "Amenities the foundry paid for." },
      { theme: "waste", title: "Baths and laundry", detail: "Collective hygiene as design." },
      { theme: "conservation", title: "Restored courts", detail: "Heritage after the cooperative closed." },
    ],
  },  zoar: {
    overview: "Zoar’s ecology was a German garden village on the Tuscarawas: communal beds, a Number One House, a canal contract. They divided the lots in 1898. The historic gardens are a state site.",
    items: [
      { theme: "food", title: "Separatist gardens", detail: "Interpreted now. Partitioned in 1898." },
      { theme: "building", title: "Number One House", detail: "The compact in brick." },
      { theme: "water", title: "Canal contract", detail: "The till that paid the village." },
      { theme: "education", title: "Ohio History site", detail: "A town that kept the name." },
    ],
  },};
