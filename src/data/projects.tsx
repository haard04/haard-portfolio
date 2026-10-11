import type { StaticImageData } from 'next/image';
import musiIMG from '@/assets/musipedia-logo.png';
import algo from '@/assets/algonew.png';
import HMS from '@/assets/HMS.png';
import careercatalyst from '@/assets/careercat.png';
import expensesmeter from '@/assets/expensesmeter.png';

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
  {
    id: 5,
    image: expensesmeter,
    title: 'Expenses Meter',
    points: [
      'Designed, built, and deployed a MERN stack based web application which gives user a platform where he can manage expenses, Incomes, Balances with Chart Visulization.',
      'Set up a database with MongoDB Atlas to store, view, Edit and delete functionality.',
      'Tech: MongoDB, React Js, Express Js, Node Js',
    ],
    github: 'https://github.com/haard04/Expensometer',
    demo: 'https://expensesmeter.netlify.app/',
  },
  {
    id: 6,
    image: HMS,
    title: 'Hospital Management System',
    points: [
      'Worked on Hospital management system as Database Management System project.',
      'Tech: MySQL',
    ],
    github: 'https://github.com/haard04/Hospital-Management-System---DBMS-project',
    demo: 'https://github.com/haard04/Hospital-Management-System---DBMS-project',
  },
];
