import type { Publication } from "@/types";

// Research publications and book chapter, rendered dynamically.
export const publications: Publication[] = [
  {
    id: "melanoma-mirage",
    title: "Melanoma Mirage: Unmasking Skin Cancer with Deep Learning",
    publisher: "IEEE CSITSS",
    type: "Research Paper",
    url: "https://ieeexplore.ieee.org/document/10334181",
  },
  {
    id: "power-aware-virtualization",
    title:
      "Power-Aware Virtualization: Dynamic Voltage Frequency Scaling Insights and Communication-Aware Request Stacking",
    publisher: "IGI Global",
    type: "Book Chapter",
    url: "https://www.igi-global.com/chapter/power-aware-virtualization/340523",
  },
];
