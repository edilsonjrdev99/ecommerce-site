export interface AboutHero {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: AboutStat[];
}

export interface AboutStat {
  number: string;
  label: string;
  description: string;
}

export interface AboutSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  features?: string[];
  reverse?: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface AboutContent {
  hero: AboutHero;
  sections: AboutSection[];
  team: TeamMember[];
  values: CompanyValue[];
  timeline: Milestone[];
}
