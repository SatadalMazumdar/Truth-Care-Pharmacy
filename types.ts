export interface PhaseActivity {
  title: string;
  items: string[];
}

export interface ProjectPhase {
  id: string;
  number: number;
  title: string;
  duration: string;
  activities: string[];
  deliverables?: string[];
  subSections?: {
    title: string;
    items: string[];
  }[];
}

export interface CostItem {
  name: string;
  value: number;
  fill?: string;
}

export interface ProposalData {
  meta: {
    client: string;
    project: string;
    platform: string;
    preparedBy: string;
    totalDuration: string;
    totalInvestment: string;
  };
  executiveSummary: string;
  objectives: string[];
  phases: ProjectPhase[];
  costs: CostItem[];
}