export interface CompetitionCategory {
  id: 'robo-sprint-junior' | 'robo-sprint-senior';
  code: 'CAT A' | 'CAT B';
  title: string;
  division: string;
  ageRange: string;
  duration: string;
  format: string;
  objective: string;
  dimensions: string;
  scoring: string;
  keyRule: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  imageUrl: string;
  rulesLink: string;
  specs: { label: string; value: string }[];
}

export interface RoadmapStep {
  stepNumber: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  isMilestone?: boolean;
}

export interface ChampionshipStage {
  stageNumber: string;
  stageCode: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  advancement: string;
  active?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Eligibility' | 'Hardware & Kits' | 'Schools & Fees' | 'Competition & Arena' | 'Judging & Safety';
}

export interface PartnerLogo {
  name: string;
  file: string;
  role: string;
}

export interface KitPiece {
  label: string;
  qty: string;
}

export const STATS_DATA = [
  { value: '4', label: 'HOST PARTNERS', sub: 'IBK · INIAC · SKILLSKOLAN · BLIX', accent: 'text-[#006AA7]' },
  { value: '2,000+', label: 'INDIA ALUMNI', sub: 'BLIX-A-THON, TECHFEST IIT BOMBAY', accent: 'text-[#0A1930]' },
  { value: 'SEK 3,000', label: 'PRIZE POOL', sub: '1,200 JUNIOR + 1,800 SENIOR', accent: 'text-[#006AA7]' },
  { value: 'NOV 10', label: 'GRAND FINALE', sub: 'VÄSTERÅS, SWEDEN · 2026', accent: 'text-[#0A1930]' },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'Indisk BarnKlubb (IBK) Västerås', file: '/ibk logo.png', role: 'Host & Organizer' },
  { name: 'INIAC', file: '/iniac logo.png', role: 'Innovation Partner' },
  { name: 'SkillSkolan', file: '/skillskolan logo.png', role: 'Education Partner' },
  { name: 'Blix-A-Thon', file: '/blix a thon logo.png', role: 'Competition Format Partner' },
];

export const KIT_PIECES: KitPiece[] = [
  { label: 'CT2', qty: '112 pcs' },
  { label: 'CT3', qty: '60 pcs' },
  { label: 'CH2', qty: '80 pcs' },
  { label: 'CL2', qty: '72 pcs' },
  { label: 'TW1', qty: '72 pcs' },
  { label: 'TW2', qty: '40 pcs' },
  { label: 'PC3', qty: '16 pcs' },
  { label: 'P5 Plus', qty: '4 pcs' },
  { label: 'P3', qty: '32 pcs' },
  { label: 'P3C2', qty: '20 pcs' },
  { label: 'P5 Nut', qty: '2 pcs' },
  { label: 'P5', qty: '40 pcs' },
  { label: 'P7', qty: '24 pcs' },
  { label: 'P11', qty: '32 pcs' },
  { label: 'P7x11', qty: '8 pcs' },
  { label: 'PU5x7', qty: '16 pcs' },
  { label: 'PU5x13', qty: '8 pcs' },
  { label: 'Rack', qty: '12 pcs' },
  { label: 'Pulley', qty: '4 pcs' },
  { label: 'CT1x2', qty: '12 pcs' },
  { label: 'G20 Plus', qty: '8 pcs' },
  { label: 'G20 Idler', qty: '8 pcs' },
  { label: 'G60', qty: '8 pcs' },
  { label: 'Thread', qty: '2 pcs' },
  { label: 'Power Screw', qty: '2 pcs' },
  { label: 'SH60', qty: '6 pcs' },
  { label: 'SH100', qty: '8 pcs' },
  { label: 'SH170', qty: '6 pcs' },
  { label: 'Wheels', qty: '8 pcs' },
  { label: 'Leaflet', qty: '1 pc' },
  { label: 'Remover Tool', qty: '2 pcs' },
  { label: 'P21x21', qty: '2 pcs' },
  { label: 'Ball', qty: '1 pc' },
  { label: 'MDF Arena Part', qty: '1 pc' },
  { label: 'Ethernet Cable', qty: '1 pc' },
  { label: 'Rubber Band', qty: '5 pcs' },
  { label: 'Transmitter (Wired)', qty: '1 pc' },
  { label: 'Receiver (Wired)', qty: '1 pc' },
  { label: 'DC Gearbox', qty: '4 pcs' },
  { label: '6V Battery Box', qty: '1 pc' },
  { label: 'Screwdriver', qty: '1 pc' },
];

export const COMPETITION_CATEGORIES: CompetitionCategory[] = [
  {
    id: 'robo-sprint-junior',
    code: 'CAT A',
    title: 'ROBO-SPRINT',
    division: 'JUNIOR LEAGUE',
    ageRange: 'GRADES 2 – 5',
    duration: '3 MINUTES PER MATCH',
    format: 'Air-Hockey Style Ball-Passing Arena Challenge',
    objective: 'Pass as many balls as possible into the opponent’s court across the divider. The team with the fewest balls remaining in their own court when time runs out wins the round.',
    dimensions: 'Shared 8 ft × 4 ft divided arena mat',
    scoring: 'Fewest balls remaining in your own court at the final whistle wins the round.',
    keyRule: 'Each team starts with 5 balls in their court. Focus is on basic robot movement, simple control, and team coordination.',
    accentColor: '#006AA7',
    accentBg: 'bg-[#006AA7]',
    accentText: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=85',
    rulesLink: 'challenges',
    specs: [
      { label: 'ARENA SIZE', value: '8 ft × 4 ft Divided Court' },
      { label: 'MATCH LENGTH', value: '3 Minutes' },
      { label: 'STARTING BALLS', value: '5 Per Team Court' },
      { label: 'FOCUS', value: 'Movement, Control, Teamwork' },
    ]
  },
  {
    id: 'robo-sprint-senior',
    code: 'CAT B',
    title: 'ROBO-SPRINT',
    division: 'SENIOR LEAGUE',
    ageRange: 'GRADES 6 – 9',
    duration: '6 MINUTES PER MATCH',
    format: 'Air-Hockey Style Ball-Passing Arena Challenge',
    objective: 'Pass as many balls as possible into the opponent’s court across the divider. The team with the fewest balls remaining in their own court when time runs out wins the round.',
    dimensions: 'Shared 8 ft × 4 ft divided arena mat',
    scoring: 'Fewest balls remaining in your own court at the final whistle wins the round.',
    keyRule: 'Each team starts with 5 balls in their court. Focus is on precision control, strategy, positioning, and faster gameplay under pressure.',
    accentColor: '#FFCD00',
    accentBg: 'bg-[#FFCD00]',
    accentText: 'text-[#0A1930]',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85',
    rulesLink: 'challenges',
    specs: [
      { label: 'ARENA SIZE', value: '8 ft × 4 ft Divided Court' },
      { label: 'MATCH LENGTH', value: '6 Minutes' },
      { label: 'STARTING BALLS', value: '5 Per Team Court' },
      { label: 'FOCUS', value: 'Precision, Strategy, Speed' },
    ]
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    stepNumber: '01',
    tag: 'STAGE 01 // LEARN',
    title: 'LEARN',
    subtitle: 'Robotics Introduction Workshop',
    description: 'Attend the 120-minute in-school robotics introduction workshop, form your team, and get hands-on with the official Robo-Sprint kit.',
    badge: 'SCHOOL ROUND'
  },
  {
    stepNumber: '02',
    tag: 'STAGE 02 // BUILD',
    title: 'BUILD',
    subtitle: 'Assemble Your Robot',
    description: 'Build your Robo-Sprint robot from the competition kit — chassis, gearbox, wheels, and wired transmitter — ready for the arena.',
  },
  {
    stepNumber: '03',
    tag: 'STAGE 03 // CHALLENGE',
    title: 'CHALLENGE',
    subtitle: 'RoboSkolan Robo League (Qualifiers)',
    description: 'Compete in RoboSprint matches within your own school in October 2026. One winning Junior team and one winning Senior team qualify per school.',
    badge: 'OCTOBER 2026'
  },
  {
    stepNumber: '04',
    tag: 'STAGE 04 // INNOVATE',
    title: 'INNOVATE',
    subtitle: 'Refine Strategy',
    description: 'Qualifying teams sharpen positioning, speed, and teamwork ahead of the inter-school Grand Finale showcase.',
  },
  {
    stepNumber: '05',
    tag: 'STAGE 05 // CELEBRATE',
    title: 'CELEBRATE',
    subtitle: 'RoboKidovation Västerås Grand Finale',
    description: 'Qualifying teams face off at the Grand Finale on November 10, 2026 — an inter-school competition and innovation showcase with SEK 3,000 in prizes, trophies, and certificates.',
    isMilestone: true,
    badge: 'GRAND FINALE'
  }
];

export const CHAMPIONSHIP_STAGES: ChampionshipStage[] = [
  {
    stageNumber: '01',
    stageCode: 'STAGE 01',
    title: 'ROBOSKOLAN ROBO LEAGUE',
    subtitle: 'QUALIFIERS — WITHIN EACH SCHOOL',
    date: 'OCTOBER 2026',
    location: 'PARTICIPATING SCHOOL VENUES · VÄSTERÅS',
    description: 'A 120-minute robotics introduction workshop, team formation, and RoboSprint matches held inside each participating school.',
    advancement: '1 WINNING JUNIOR TEAM & 1 WINNING SENIOR TEAM PER SCHOOL QUALIFY',
    active: false
  },
  {
    stageNumber: '02',
    stageCode: 'STAGE 02',
    title: 'ROBOKIDOVATION VÄSTERÅS GRAND FINALE',
    subtitle: 'INTER-SCHOOL COMPETITION & SHOWCASE',
    date: 'TUESDAY, NOVEMBER 10, 2026',
    location: 'VÄSTERÅS, SWEDEN',
    description: 'Winning school teams compete live in the Robo-Sprint arena for cash prizes, trophies, and certificates, alongside an innovation and robotics showcase.',
    advancement: 'SEK 3,000 AWARDED — 1,200 JUNIOR + 1,800 SENIOR',
    active: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who can participate in RoboKidovation Västerås?',
    answer: 'Students up to 15 years old are eligible, split into two categories: the Junior League (grades 2–5) and the Senior League (grades 6–9).',
    category: 'Eligibility'
  },
  {
    id: 'faq-2',
    question: 'Is prior coding or robotics experience required to join?',
    answer: 'No prior experience is necessary. Every team starts with a 120-minute robotics introduction workshop covering assembly and team formation before matches begin.',
    category: 'Hardware & Kits'
  },
  {
    id: 'faq-3',
    question: 'What does the competition kit include?',
    answer: 'Each team builds with the official Robo-Sprint kit — chassis parts, gearboxes, wheels, a wired transmitter and receiver, battery box, arena ball, and assembly tools.',
    category: 'Hardware & Kits'
  },
  {
    id: 'faq-4',
    question: 'How does the ROBO-SPRINT challenge work?',
    answer: 'It’s an air-hockey style ball-passing arena challenge. Each team starts with 5 balls in their court and tries to pass as many as possible into the opponent’s court. The team with the fewest balls remaining when time runs out wins the round. Junior matches run 3 minutes, Senior matches run 6 minutes.',
    category: 'Competition & Arena'
  },
  {
    id: 'faq-5',
    question: 'What is the competition structure?',
    answer: 'Stage 1 is RoboSkolan Robo League qualifiers, held within each school in October 2026. One winning Junior team and one winning Senior team from each school advance directly to the RoboKidovation Västerås Grand Finale on November 10, 2026.',
    category: 'Schools & Fees'
  },
  {
    id: 'faq-6',
    question: 'What can winning teams take home?',
    answer: 'A total of SEK 3,000 is awarded to winning teams (SEK 1,200 Junior + SEK 1,800 Senior), along with cash, trophies, and certificates for all finalists.',
    category: 'Competition & Arena'
  },
  {
    id: 'faq-7',
    question: 'Where does this competition format come from?',
    answer: 'RoboKidovation Västerås adapts Blix-A-Thon, a robotics competition hosted at Techfest, IIT Bombay — one of India’s largest science and technology festivals, with 2,000+ student participants in recent editions — for the Swedish school environment.',
    category: 'Eligibility'
  },
  {
    id: 'faq-8',
    question: 'How are participant safety and privacy handled?',
    answer: 'The competition uses low-voltage, school-safe hardware components and follows Swedish school safety protocols and GDPR-compliant handling of student data.',
    category: 'Judging & Safety'
  }
];
