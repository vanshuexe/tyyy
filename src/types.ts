export interface CountryProfile {
  id: string;
  name: string;
  code: string;
  flag: string;
  capital: string;
  currency: string;
  corporateTaxRate: string;
  formationTime: string;
  structures: string[];
  keyAdvantages: string[];
  visaAlignment: string[];
  bankingHighlights: string[];
  summary: string;
  regionalFocus: string;
}

export interface ServiceSubCategory {
  title: string;
  items: string[];
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge: string;
  subCategories: ServiceSubCategory[];
  keyHighlights: string[];
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  summary: string;
  typicalNeeds: string[];
  solutionApproach: string;
  image?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle?: string;
  description: string;
  duration?: string;
  deliverables?: string[];
}

export interface CoreValue {
  title: string;
  tag: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  title: string;
  highlight: string;
  description: string;
  icon: string;
}

export interface EstimatorState {
  country: string;
  structure: string;
  bankingSupport: boolean;
  registeredOffice: boolean;
  accountingTax: boolean;
  visaRelocation: boolean;
  itDigital: boolean;
  advisoryPlan: boolean;
  businessSize: 'solo' | 'startup' | 'sme' | 'enterprise';
}

export interface TechnologyServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  approachTitle?: string;
  approach?: string[];
  items: string[];
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  targetCountry: string;
  selectedServices: string[];
  estimatedTimeline: string;
  notes: string;
  submittedAt: string;
}
