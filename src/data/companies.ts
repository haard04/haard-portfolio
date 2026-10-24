import type { StaticImageData } from 'next/image';
import heizenLogo from '@/assets/heizen.png';
import goldcastLogo from '@/assets/goldcast.svg';
import spryHealthLogo from '@/assets/spry.png';
import world360Logo from '@/assets/360world.jpg';
import cloudNationLogo from '@/assets/cloudnation.svg';
import jetdriveLogo from '@/assets/jetdrive.png';
import strikeLogo from '@/assets/strike.svg';
import welcomeBrokerLogo from '@/assets/welcomeBroker.png';
import omabitLogo from '@/assets/omabit.svg';
import itcLogo from '@/assets/ITC.png';
import superfineLogo from '@/assets/superfine.svg';

export type Company = {
  name: string;
  logo: StaticImageData;
  link: string;
  line1: string;
};

export const companies: Company[] = [
  {
    name: 'Heizen',
    logo: heizenLogo,
    link: 'https://heizen.work',
    line1:
      'Funded startup & Shark Tank India approved, backed by Titan Capitals & Mamaearth & Car Dekho group',
  },
  {
    name: 'ITC Limited',
    logo: itcLogo,
    link: 'https://itcportal.com',
    line1: "One of India's largest conglomerates",
  },
  {
    name: 'Superfine Kitchen',
    logo: superfineLogo,
    link: 'https://superfinekitchen.com',
    line1: 'Commercial kitchen & large-scale catering solutions provider',
  },
  {
    name: 'Goldcast',
    logo: goldcastLogo,
    link: 'https://goldcast.io',
    line1: 'Series A startup backed by WestBridge Capital',
  },
  {
    name: 'Spry Health',
    logo: spryHealthLogo,
    link: 'https://sprypt.com/',
    line1: 'Saas company backed by Flourish Ventures',
  },
  {
    name: '360 World',
    logo: world360Logo,
    link: 'https://360world.com',
    line1: 'Omnipresence platform',
  },
  {
    name: 'CloudNation AI',
    logo: cloudNationLogo,
    link: 'https://cloudnation.ai',
    line1: 'AI-powered platform for compliances',
  },
  {
    name: 'Jetdrive AI',
    logo: jetdriveLogo,
    link: 'https://jetdrive.ai',
    line1: 'AI-powered platform for marketing and lading page generation',
  },
  {
    name: 'Strike',
    logo: strikeLogo,
    link: 'https://web.strike.money',
    line1: 'Stock market analytical tool',
  },
  {
    name: 'Welcome Broker',
    logo: welcomeBrokerLogo,
    link: 'https://welcomebroker.in',
    line1: 'Leading Cattlefeed market since 25+ years',
  },
  {
    name: 'Omabit',
    logo: omabitLogo,
    link: 'https://omabit.com',
    line1: 'Genomic data analysis using AI',
  },
];
