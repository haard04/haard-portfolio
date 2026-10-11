import type { StaticImageData } from 'next/image';
import musiIMG from '@/assets/musipedia-logo.png';
import algo from '@/assets/algonew.png';
import careercatalyst from '@/assets/careercat.png';

export type ProjectItem = {
  id: number;
  image: StaticImageData | null;
  title: string;
  points: string[];
  github: string;
  demo: string;
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    image: careercatalyst,
    title: 'Career Catalyst',
    points: [
      'Engineered the backend using Django and AWS RDS (MySQL) for a dynamic job application tracking platform, designing REST APIs and optimizing database queries, which reduced data retrieval time by 60%.',
      'Created a responsive platform for comprehensive job application tracking and personalized job recommendations, enhancing the job search process and offering users data-driven insights for better career decisions.',
      'Prepared the frontend with React.js and integrated NLP, improving job match relevance by 57%.',
    ],
    github: 'https://github.com/haard04/careercatalyst',
    demo: 'https://github.com/haard04/careercatalyst',
  },
  {
    id: 3,
    image: algo,
    title: 'OS Algorithm simulator',
    points: [
      'Engineered a user-friendly Flutter app with MongoDB to simplify concepts of OS algorithms for students and professionals, focusing on detailed simulations of CPU scheduling, disk scheduling, page replacement, and deadlock.',
      'Created a comprehensive platform to visualize OS algorithms, enhancing understanding through detailed representations of key concepts.',
      'Integrated OpenAI API for a chatbot feature, enhancing learning and increasing user engagement by 35%.',
    ],
    github: 'https://github.com/haard04/CPU_schedule',
    demo: 'https://github.com/haard04/CPU_schedule',
  },
  {
    id: 2,
    image: null,
    title: 'RideSecure',
    points: [
      'Implemented RideSecure, a computer vision project using YOLOv8 to detect triple riders, helmet compliance, and mobile device usage on motorcycles with 95% accuracy.',
      'Achieved high-performance detection with a custom dataset of over 6,000 images, enhancing road safety through real-time monitoring.',
    ],
    github: 'https://github.com/haard04/RideSecure',
    demo: 'https://github.com/haard04/cliniflow-app',
  },
  {
    id: 4,
    image: musiIMG,
    title: 'MusiPedia',
    points: [
      'Designed, built, and deployed a MERN stack-based web application which gives user a platform where he can share story or details about a song.',
      'Set up a database with MongoDB Atlas to store, view, Edit and delete functionality.',
      'Tech: MongoDB, ReactJs, ExpressJs, NodeJs.',
    ],
    github: 'https://github.com/haard04/musipedia',
    demo: 'https://musipediaaa.netlify.app/',
  },
];

/*
  Work built on the job. Clients are deliberately left unnamed -- titles
  describe the product, and `employer` is the only organisation mentioned.
*/
export type WorkProjectItem = {
  id: string;
  employer: string;
  title: string;
  stack: string[];
  points: string[];
};

export const workProjects: WorkProjectItem[] = [
  {
    id: 'meal-ordering',
    employer: 'Heizen',
    title: 'Corporate meal ordering & kitchen operations platform',
    stack: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Redis', 'Square', 'QuickBooks'],
    points: [
      'The single system of record for a B2B food service company: a customer ordering portal, a staff admin app and a NestJS API in one monorepo.',
      'Covers order to delivery: a catalogue and pricing engine with company subsidies, multi-day carts with cut-offs, card-on-file payments, live sales tax and QuickBooks invoicing.',
      'Kitchen and dispatch tooling on top: prep and station planning, production exports, driver assignment, label exports and recurring auto-orders.',
    ],
  },
  {
    id: 'cloud-compliance',
    employer: 'Heizen',
    title: 'Cloud security & compliance platform',
    stack: ['NestJS', 'Next.js', 'Django', 'PostgreSQL', 'Valkey', 'Prowler'],
    points: [
      'Compliance automation for SOC 2, ISO 27001, HIPAA and GDPR, with frameworks, requirements, controls, policies and evidence mapped to one another.',
      'Runs Prowler scans against connected cloud accounts and turns the findings into tracked fixes, with an AI chat assistant alongside.',
      'Includes a separate auditor portal, an audit centre, and employee and training-material management.',
    ],
  },
  {
    id: 'conversation-analytics',
    employer: 'Heizen',
    title: 'Conversation analytics platform',
    stack: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
    points: [
      'Ingests conversation logs from uploaded files and connected data sources, organised by organisation and project.',
      'LLM classification assigns each message to a journey state with a confidence score and labels the outcome of every conversation.',
      'Dashboards for journey flow, sentiment and recurring patterns, plus a chat agent for asking questions of the data.',
    ],
  },
  {
    id: 'genomics',
    employer: 'Heizen',
    title: 'AI genomics analysis platform',
    stack: ['FastAPI', 'React', 'LangGraph', 'MCP', 'PostgreSQL', 'Google Cloud'],
    points: [
      'Chat-based analysis of genomic data: users upload files and an LLM agent plans and runs the work.',
      'Analysis tools are exposed through an MCP server and consumed by an MCP client agent, with heavy work such as genome-wide association studies run as separate jobs.',
      'Google sign-in with user whitelisting, persistent chats, file storage on Cloud Storage and an admin panel.',
    ],
  },
  {
    id: 'supply-chain',
    employer: 'Heizen',
    title: 'Supply chain visibility platform',
    stack: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'AWS CloudFormation', 'AI SDK'],
    points: [
      'Built for one of India’s largest conglomerates: tracks orders stage by stage across market segments, with dashboards for visibility, on-time-in-full, bottleneck stages and lead times.',
      'Bulk order uploads, per-customer configuration, stage checklists, audit logs, notifications and live updates over server-sent events.',
      'An NL-to-SQL chat assistant lets the team ask questions of the order data in plain language.',
    ],
  },
  {
    id: 'healthcare-billing',
    employer: 'Heizen',
    title: 'Healthcare billing & EMR integrations',
    stack: ['NestJS', 'Next.js', 'FastAPI', 'Selenium', 'PostgreSQL', 'Kafka'],
    points: [
      'Billing management app for billing workflows and charge entries, built as a NestJS and Next.js monorepo with Kafka for async processing.',
      'EHR bridge connector: scheduled sync of patients, providers and insurance between a third-party EMR and the client’s EHR, webhook-driven treatment charges, payload hashing against duplicates and an admin panel.',
      'EMR scraper built on Selenium for a system with no API, pulling patient data and syncing it onward; also shipped as a packaged desktop executable.',
    ],
  },
  {
    id: 'llm-ops',
    employer: 'Heizen',
    title: 'LLM fine-tuning & evaluation platform',
    stack: ['NestJS', 'Next.js', 'Python', 'SkyPilot', 'AWS'],
    points: [
      'A closed-loop LLM operations product: request logs, versioned datasets, fine-tuning jobs, evaluations, judge criteria and reward functions.',
      'A NestJS and Next.js app manages projects, datasets, base models, fine-tunes and running models.',
      'A Python service launches supervised and reinforcement fine-tuning jobs through SkyPilot, and a separate inference service serves the results.',
    ],
  },
  {
    id: 'trading-platform',
    employer: 'Welcome Broker',
    title: 'B2B commodity trading platform',
    stack: ['Flutter', 'Node.js', 'MongoDB', 'Next.js', 'MCP', 'AWS'],
    points: [
      'Five codebases behind one business: a Flutter app, a Node.js API on MongoDB, a Next.js web dashboard, a Next.js landing site and an MCP server.',
      'Handles deals, dispatch requests, invoices, discounts, payment terms and enquiries, with PDF summaries generated in the app and emailed through the API.',
      'The MCP server exposes deals, dispatch, invoices, products, organisations and audit logs as tools, so an AI assistant can query the business directly.',
    ],
  },
];
