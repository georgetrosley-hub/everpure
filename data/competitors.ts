import type { Competitor } from "@/types";

export const competitorCategories = [
  "frontier",
  "coding",
  "search",
  "workflow",
  "cloud",
  "vertical",
] as const;

/** Storage and platform alternatives for internal GTM positioning. */
export const competitors: Competitor[] = [
  {
    id: "netapp",
    name: "NetApp",
    category: "cloud",
    strengthAreas: ["File storage breadth", "hybrid offerings", "large installed base"],
    claudeDifferentiation: ["Simpler operations", "high performance for Tier-1 + AI pipelines", "outcomes-led lifecycle model"],
    accountRiskLevel: 70,
    detectedFootprint: "NetApp arrays / ONTAP (if present)",
  },
  {
    id: "dell-emc",
    name: "Dell EMC",
    category: "vertical",
    strengthAreas: ["Broad portfolio", "global procurement reach", "bundle leverage"],
    claudeDifferentiation: ["Simplicity + speed-to-value", "platform standardization playbook", "predictable lifecycle outcomes"],
    accountRiskLevel: 72,
    detectedFootprint: "PowerStore / Unity / Isilon (if present)",
  },
  {
    id: "hpe",
    name: "HPE",
    category: "vertical",
    strengthAreas: ["Enterprise account control", "GreenLake attach", "broad infra stack"],
    claudeDifferentiation: ["Fewer migrations", "consistent performance", "modern cyber recovery posture"],
    accountRiskLevel: 68,
    detectedFootprint: "Primera / Nimble / 3PAR (if present)",
  },
  {
    id: "hitachi",
    name: "Hitachi Vantara",
    category: "vertical",
    strengthAreas: ["Enterprise footprint", "OT/IT adjacencies", "legacy estates"],
    claudeDifferentiation: ["Operational simplicity", "modern data reduction + performance", "outcomes-led expansion motion"],
    accountRiskLevel: 60,
    detectedFootprint: "VSP / HDS (if present)",
  },
  {
    id: "cloud-native",
    name: "Cloud native storage (hyperscalers)",
    category: "vertical",
    strengthAreas: ["Elasticity", "managed services", "procurement simplicity"],
    claudeDifferentiation: ["Predictable performance near apps", "hybrid consistency", "data gravity economics"],
    accountRiskLevel: 55,
  },
];

export function getCompetitorsByAccount(_accountId: string): Competitor[] {
  return competitors.map((c) => ({
    ...c,
    detectedFootprint: c.detectedFootprint,
  }));
}
