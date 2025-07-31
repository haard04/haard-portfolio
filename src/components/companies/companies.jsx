import React from 'react';
import './companies.css';

// You'll need to import your company logos here
import heizenLogo from '../../assets/heizen.png';
import goldcastLogo from '../../assets/goldcast.svg';
import spryHealthLogo from '../../assets/spry.png';
import world360Logo from '../../assets/360world.jpg';
import cloudNationLogo from '../../assets/cloudnation.svg';
import jetdriveLogo from '../../assets/jetdrive.png';
import strikeLogo from '../../assets/strike.svg';

const Companies = () => {
  // Add your company data here
  const companies = [
    {
      name: "Heizen",
      logo: heizenLogo,
      link: "https://heizen.work",
      line1: "Seed funded startup backed by Titan Capitals & Mamaearth"
    },
    {
        name: "Goldcast",
        logo: goldcastLogo,
        link: "https://goldcast.io",
        line1: "Series A startup backed by WestBridge Capital"
    },
    {
        name: "Spry Health",
        logo: spryHealthLogo,
        link: "https://sprypt.com/",
        line1: "Saas company backed by Flourish Ventures"
    },
    {
        name: "360 World",
        logo: world360Logo,
        link: "https://360world.com",
        line1: "Omnipresence platform"
    },
    {
        name: "CloudNation AI",
        logo: cloudNationLogo,
        link: "https://cloudnation.ai",
        line1: "AI-powered platform for compliances"
    },
    {
        name: "Jetdrive AI",
        logo: jetdriveLogo,
        link: "https://jetdrive.ai",
        line1: "AI-powered platform for marketing and lading page generation"
    },
    {
        name: "Strike",
        logo: strikeLogo,
        link: "https://web.strike.money",
        line1: "Stock market analytical tool"
    }
    // Add more companies as needed
  ];
  const scrollCompanies = [...companies, ...companies, ...companies];

  return (
    <section id="companies">
      <h2>Trusted By These Companies Through My Work</h2>
      <div className="container companies__container">
        <div className="companies__wrapper">
          {scrollCompanies.map((company, index) => (
            <a 
              key={index} 
              href={company.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="company__item"
            >
              {/* Uncomment when you have logos */}
              <img src={company.logo} alt={company.name} />
              <h4>{company.name}</h4>
              <p className="company__description">{company.line1}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;