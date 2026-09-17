export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  focusAreas: string[];
  courtForum: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export interface LegalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  summary: string;
  introduction: string;
  sections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  keyTakeaways: string[];
  conclusion: string;
}

export interface FaqItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  category: 'practice' | 'bail' | 'appeal' | 'consultation';
}

export interface HelpOption {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  recommendedStep: string;
  documentsToBring: string[];
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  matterType: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  message: string;
}
