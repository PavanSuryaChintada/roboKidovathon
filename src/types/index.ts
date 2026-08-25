export interface RegistrationFormData {
  studentName: string;
  parentEmail: string;
  parentPhone?: string;
  ageCategory: 'junior' | 'senior';
  schoolName: string;
  city: string;
  trackInterest: string;
  agreeToRules: boolean;
}

export interface CompetitionTrack {
  id: string;
  title: string;
  category: 'Junior' | 'Senior' | 'Open';
  ageRange: string;
  concept: string;
  arenaDimensions: string;
  centralGate?: string;
  botSizeConstraint: string;
  winCondition: string;
  rules: string[];
  timeLimit: string;
  tiebreaker?: string;
  iconName: string;
}

export interface TimelineStage {
  stage: string;
  title: string;
  date: string;
  subtitle: string;
  highlights: string[];
  location: string;
  highlight?: boolean;
}

export interface PrizeTier {
  place: '1st' | '2nd' | '3rd';
  title: string;
  totalSek: number;
  juniorSek: number;
  seniorSek: number;
  perks: string[];
  color: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Registration' | 'Competition Rules' | 'Hardware & Kits' | 'Schools & Teachers';
}

export interface PartnerLogo {
  name: string;
  role: string;
  location?: string;
  tagline?: string;
  highlight?: boolean;
}
