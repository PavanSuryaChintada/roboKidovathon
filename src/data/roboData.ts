export interface CompetitionCategory {
  id: 'robo-sprint' | 'robo-precision';
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

export const STATS_DATA = [
  { value: '15+', label: 'SCHOOLS', sub: 'VÄSTERÅS CLUSTER', accent: 'text-[#07111F]' },
  { value: '600+', label: 'STUDENTS', sub: 'JUNIOR & SENIOR', accent: 'text-[#0052FF]' },
  { value: '45+', label: 'EDUCATORS', sub: 'CERTIFIED MENTORS', accent: 'text-[#07111F]' },
  { value: '600+', label: 'COMMUNITY', sub: 'ENGAGED STAKEHOLDERS', accent: 'text-[#0052FF]' },
];

export const COMPETITION_CATEGORIES: CompetitionCategory[] = [
  {
    id: 'robo-sprint',
    code: 'CAT A',
    title: 'ROBO-SPRINT',
    division: 'JUNIOR DIVISION',
    ageRange: 'AGES UP TO 15 YEARS',
    duration: '3 MINUTES PER MATCH',
    format: 'Air-Hockey Ball Passing Arena (Fast-Paced Dynamic)',
    objective: 'Transfer as many balls as possible into the opponent’s court across an active divider within 3 minutes.',
    dimensions: 'Maximum 1.5 ft × 1.5 ft Chassis Boundary',
    scoring: 'Fewest remaining balls in own court at final buzzer secures match victory.',
    keyRule: 'Autonomous or wireless differential controller allowed. Zero human arena interference.',
    accentColor: '#0052FF',
    accentBg: 'bg-[#0052FF]',
    accentText: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=85',
    rulesLink: 'challenges',
    specs: [
      { label: 'ARENA SIZE', value: '2.4m × 1.2m Divider Court' },
      { label: 'MATCH LENGTH', value: '3 Minutes (Non-Stop)' },
      { label: 'MOTOR LIMIT', value: '12V DC Metal Gearmotors' },
      { label: 'DRIVE TYPE', value: 'Differential 2-Wheel / 4-Wheel' },
    ]
  },
  {
    id: 'robo-precision',
    code: 'CAT B',
    title: 'ROBO-PRECISION',
    division: 'SENIOR DIVISION',
    ageRange: 'AGES 15+ / GYMNASIUM LEVEL',
    duration: '5 MINUTES PER MATCH',
    format: 'Autonomous 5-Level Cup Tower Precision Assembly',
    objective: 'Construct the tallest, structurally stable tower from raw arena cups using a robotic grabber mechanism. Zero manual intervention.',
    dimensions: 'Maximum 2.5 ft × 2.5 ft Chassis & Crane Arm',
    scoring: 'Tallest erect tower at the buzzer wins. Bonus multipliers awarded for autonomous optical centering.',
    keyRule: 'Robotic grabber arm must independently grip, lift, translate, and balance cups.',
    accentColor: '#07111F',
    accentBg: 'bg-[#07111F]',
    accentText: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85',
    rulesLink: 'challenges',
    specs: [
      { label: 'ARENA SIZE', value: '3.0m × 3.0m Precision Mat' },
      { label: 'MATCH LENGTH', value: '5 Minutes (Strategic)' },
      { label: 'ACTUATORS', value: 'Servo Gripper + Stepper Elevation' },
      { label: 'CONTROL CORE', value: 'Microcontroller + Autonomous Script' },
    ]
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    stepNumber: '01',
    tag: 'STAGE 01 // DISCOVER',
    title: 'ONBOARD',
    subtitle: 'Hands-On Workshop',
    description: 'Attend a certified 2-hour school workshop. Receive full official robotics hardware kits, motors, controllers, and dedicated mentor guidance.',
    badge: 'SCHOOL ROUND'
  },
  {
    stepNumber: '02',
    tag: 'STAGE 02 // ASSEMBLE',
    title: 'BUILD',
    subtitle: 'Mechanical Hardware',
    description: 'Assemble physical chassis, gearboxes, drive wheels, sensor mounts, and electronic motor drivers in collaborative student pairs.',
  },
  {
    stepNumber: '03',
    tag: 'STAGE 03 // ALGORITHM',
    title: 'PROGRAMME',
    subtitle: 'Microcontroller Logic',
    description: 'Deploy microcontroller code for optical line-tracking, ultrasonic collision avoidance, and arena match offensive/defensive algorithms.',
  },
  {
    stepNumber: '04',
    tag: 'STAGE 04 // QUALIFY',
    title: 'COMPETE',
    subtitle: 'School Heats',
    description: 'Face peer teams in live arena bracket rounds within your school. Top 1 Junior and Top 1 Senior teams qualify for the City Championship.',
    badge: 'QUALIFIER'
  },
  {
    stepNumber: '05',
    tag: 'STAGE 05 // CHAMPIONS',
    title: 'WIN',
    subtitle: 'City Finals & National Pass',
    description: 'Battle live at the central ABB Venue in Västerås before an expert technology panel for the 2,000 SEK Grand Prize and Stockholm National Pass.',
    isMilestone: true,
    badge: 'CITY FINALS'
  }
];

export const CHAMPIONSHIP_STAGES: ChampionshipStage[] = [
  {
    stageNumber: '01',
    stageCode: 'ROUND 01',
    title: 'SCHOOL LEVEL QUALIFIERS',
    subtitle: 'INTRA-SCHOOL TOURNAMENT',
    date: 'FEBRUARY 2026',
    location: 'YOUR PARTICIPATING SCHOOL VENUE · VÄSTERÅS',
    description: 'Student teams build, code, and compete internally. Each participating school advances their #1 Junior and #1 Senior team directly to the City Finals.',
    advancement: 'TOP 1 JUNIOR & TOP 1 SENIOR TEAM PER SCHOOL QUALIFIES',
    active: false
  },
  {
    stageNumber: '02',
    stageCode: 'ROUND 02',
    title: 'VÄSTERÅS CITY FINALS',
    subtitle: 'OFFICIAL MUNICIPAL CHAMPIONSHIP',
    date: 'SATURDAY, MARCH 21, 2026',
    location: 'CENTRAL ABB VENUE · VÄSTERÅS, SWEDEN',
    description: 'The top school champions converge at the central arena. Refereed matches, live telemetry scoreboards, expert judging panel, and major cash prize distribution.',
    advancement: 'TOP 2 TEAMS SECURE AUTOMATIC STOCKHOLM SHOWDOWN BERTH',
    active: true
  },
  {
    stageNumber: '03',
    stageCode: 'ROUND 03',
    title: 'STOCKHOLM GRAND FINALE',
    subtitle: 'NORDIC CUP EXPANSION',
    date: 'EXPANSION PHASE 2026',
    location: 'STOCKHOLM SHOWDOWN · SWEDEN NATIONAL ARENA',
    description: 'City Finals winners represent Västerås on the national stage, competing against top Nordic cohorts for the prestigious 25,000 SEK Grand Finale Cup.',
    advancement: 'NATIONAL CHAMPIONSHIP MEDALS & TECH ACCELERATOR PASS',
    active: false
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who can participate in Robo-Kidovation Västerås 2026?',
    answer: 'All enrolled students in Västerås up to age 18 are eligible. Participants are grouped into two distinct age brackets: Junior Category (up to 15 years old) and Senior Category (15+ years / gymnasium level).',
    category: 'Eligibility'
  },
  {
    id: 'faq-2',
    question: 'Is prior coding or robotics experience required to join?',
    answer: 'No prior experience is necessary! Every registered student participates in a dedicated 2-hour hands-on school workshop where certified STEM trainers guide them through mechanical assembly, wiring, and microcontroller logic from scratch.',
    category: 'Hardware & Kits'
  },
  {
    id: 'faq-3',
    question: 'Are physical robotics kits and arena equipment provided?',
    answer: 'Yes! Complete structural chassis parts, gearmotors, wheels, microcontrollers, sensor arrays, battery packs, and official competition arena mats are provided directly on-site at zero extra kit cost.',
    category: 'Hardware & Kits'
  },
  {
    id: 'faq-4',
    question: 'How is the transparent 100 SEK (+VAT) fee structured?',
    answer: 'The total fee is 100 SEK + VAT (125 SEK total per student). This turnkey entry fee covers the 2-hour certified workshop, full hardware kit allocation, mentor guidance, arena competition access at the ABB Venue, official diplomas, and event media.',
    category: 'Schools & Fees'
  },
  {
    id: 'faq-5',
    question: 'What is required from participating schools and teachers?',
    answer: 'Zero financial burden on school budgets! Schools simply provide an open room/hall for a 2-hour workshop in February 2026 and teacher volunteers (4 for the school round, 1 for the City Finals). All hardware, trainers, and logistics are supplied by Robo-Kidovation.',
    category: 'Schools & Fees'
  },
  {
    id: 'faq-6',
    question: 'Where and when do the Västerås City Finals take place?',
    answer: 'The Västerås City Finals take place on Saturday, March 21, 2026, at the central ABB Venue in Västerås. Top qualifying school teams compete live before a panel of robotics engineers and tech industry leaders.',
    category: 'Competition & Arena'
  },
  {
    id: 'faq-7',
    question: 'How do winning teams qualify for the Stockholm Grand Finale?',
    answer: 'The top 2 winning school teams from the Västerås City Finals automatically qualify to represent Västerås at the Stockholm Showdown, competing for the 25,000 SEK Grand Finale Nordic Cup.',
    category: 'Competition & Arena'
  },
  {
    id: 'faq-8',
    question: 'How are participant safety and GDPR data protection handled?',
    answer: 'The competition adheres strictly to Swedish school safety protocols, non-toxic hardware components, low-voltage (12V DC) safety limits, and full GDPR compliance for student privacy and media consent.',
    category: 'Judging & Safety'
  }
];
