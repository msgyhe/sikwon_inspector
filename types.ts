import { ReactNode } from 'react';

export type Language = 'ko' | 'en';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface ProgramItem {
  title: string;
  subtitle: string;
  features: string[];
  icon: ReactNode;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
}