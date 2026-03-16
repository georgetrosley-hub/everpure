/**
 * Territory pipeline — focus accounts (Pure Storage territory).
 * ADP, DuPont, St. Luke's, Tower Health, Penn State Health.
 */

export type PipelineStage =
  | "Discovery"
  | "Champion Build"
  | "POV Selected"
  | "Pilot Design"
  | "Security Review"
  | "Legal Review"
  | "Procurement"
  | "Negotiation"
  | "Closed";

export interface PipelineRow {
  accountId: string;
  accountName: string;
  stage: PipelineStage;
  valueM: number;
  nextStep: string;
}

export const pipelineRows: PipelineRow[] = [
  {
    accountId: "st-lukes",
    accountName: "St. Luke's University Health Network",
    stage: "Pilot Design",
    valueM: 1.65,
    nextStep: "Security and compliance review",
  },
  {
    accountId: "penn-state-health",
    accountName: "Penn State Health",
    stage: "Security Review",
    valueM: 1.32,
    nextStep: "Clinical informatics alignment",
  },
  {
    accountId: "tower-health",
    accountName: "Tower Health",
    stage: "Champion Build",
    valueM: 0.37,
    nextStep: "Multi-vendor displacement narrative",
  },
  {
    accountId: "adp",
    accountName: "ADP",
    stage: "Champion Build",
    valueM: 0.8,
    nextStep: "HR ops demo",
  },
  {
    accountId: "dupont",
    accountName: "DuPont",
    stage: "Discovery",
    valueM: 1.2,
    nextStep: "R&D security intro",
  },
];
