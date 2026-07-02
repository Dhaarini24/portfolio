import type { Certification } from "@/types";

// Professional certifications, rendered dynamically. The Claude Certified
// Architect is the anchor credential and is visually featured.
export const certifications: Certification[] = [
  {
    id: "claude-architect",
    title: "Claude Certified Architect",
    issuer: "Anthropic",
    url: "https://verify.skilljar.com/c/qaq673hwvkfz",
    featured: true,
  },
  {
    id: "power-bi",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/en-us/users/dhaariniknhathwar-5160/credentials/3104127965ace736",
  },
  {
    id: "data-science-foundations",
    title: "Data Science Foundations",
    issuer: "University of London",
    url: "https://drive.google.com/drive/folders/1AKMXhgU-z4RT6CzGvm1BqkFQbvG7fjvu",
  },
  {
    id: "data-analytics-python",
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    url: "https://drive.google.com/file/d/11iSx4p5IvRPbM1fNFTp4LbD6_a1Z936d/view",
  },
  {
    id: "masterclass-ds",
    title: "Master Class on Data Science and Analytics",
    issuer: "Pantech E-Learning",
    url: "https://drive.google.com/file/d/1iiv5oMVeg4zb16NlvX1QPDTinbxyDYF0/view",
  },
  {
    id: "digital-engineering",
    title: "Digital Engineering",
    issuer: "NASSCOM ER&D",
    url: "https://drive.google.com/file/d/1448cjhMYRfESegcVSXFySeABdGrUZ0X5/view",
  },
  {
    id: "google-it-support",
    title: "Google IT Support",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/JF6AZJY3X743",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/WP3E9QCNNJTT",
  },
];
