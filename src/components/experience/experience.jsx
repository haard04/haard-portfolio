import React from 'react';
import './experience.css';

const data=[
  {
    id:1,
    Company: "Heizen (Gamma OpenGig Work Pvt. Ltd.) - Hyderabad, Telangana, India",
    Role:"Software Engineer",
    Duration:"July 2025 - Current",
    description1:"➔ Designed and deployed an automated EMR data extraction pipeline using Selenium, FastAPI, PostgreSQL, and proxy rotation, enabling daily secure transfers from third-party systems to internal billing APIs boosting data accuracy by 95% and saving 90% manual processing time.",
    description2:"➔ Collaborated to develop an end-to-end AI-powered marketing platform using Next.js, NestJS, Prisma, FastAPI, MongoDB, and trigger.dev, integrating Dropbox, Pinecone, and ElasticSearch for smart content indexing and vector search, accelerated dynamic website creation and automated Netlify deployments, cutting campaign launch time by 50% and MVP turnaround by 30%.",
    description3:"➔ Developed an Omnipresence mobile app with Flutter, offering real time location based services with gesture navigation, remote shopping, and TTS features, boosting user engagement and improving accessibility for people with mobility and vision challenges by 70%."
    
  },
  {
    id:2,
    Company: "Heizen (Gamma OpenGig Work Pvt. Ltd.) - Hyderabad, Telangana, India",
    Role:"SDE Intern",
    Duration:"January 2025 - June 2025",
    description1:"➔ Spearheaded to the development of a cloud security & compliance platform using Django, Next.js, NestJS, Celery, Redis, FastAPI, Prisma & PostgreSQL, achieving a 60% improvement in compliance tracking & 80% reduction in costs.",
    description2:"➔ Integrated internal tools and client-facing AI-powered applications, boosting client outreach effectiveness by 50% and accelerating MVP delivery by 20%.",
    description3:"➔ Applied Infrastructure as Code (IaC) practices using Terraform and implemented CI/CD pipelines via GitHub Workflows, enhancing infrastructure scalability and reliability by 35% across AWS and GCP projects."
    
  },
  {

    id:3,
    Company: "Marwiz Tech Pvt. Ltd. - Vadodara, Gujarat, India",
    Role:"Full Stack Development Intern",
    Duration:"June 2024 - July 2024",
    description1:"➔ Developed the backend for the ”EHS Mind Manager”, a licensing and certification renewal platform, using Node.js and Express.js, reducing the time to issue new certificates by 78%.",
    description2:"➔ Built the frontend with React.js for the web and Flutter for the app, enabling customizable design in the canvas and improving design efficiency by 54%.",
    description3:"➔ Utilized MongoDB aggregations for efficient data management in the platform, increasing exploration efficiency by 97% and speeding up expiration date searches."
    
  },
  {
      id:4,
      Company: "Welcome Broker - Ahmedabad, Gujarat, India.",
      Role:"Software Development Intern",
      Duration:"May 2022 - May 2023",
      description1:"➔ Engineered a business management application using Flutter for both Android and iOS, featuring personalized sales analysis, order management, and tracking systems. It increased order accuracy from 73.42% to 99.94%.",
      description2:"➔ Built the backend using NodeJs and MongoDB, optimizing the invoicing service with Redis-based caching, which improved response times by 90%. Deployed the application using Docker on AWS.",
      description3:"➔ Programmed a notification system for timely user updates and real-time alerts on financial transactions and delivery status, increasing daily active users (DAU) by 43% over 3 months."
    },
    
    
  ]

const Experience = () => {
  return (
    <section id='Experience'>

        <h2>Experience</h2>

        <div className='Experience'>
        {
          data.map(({id,Company,Role,Duration,description1,description2,description3})=>{
            return (
                <article key={id} className='exp_item'>
                  <div className='company-duration'>
                    <h2 className='company'>{Role}</h2>
                    <h2 className='duration'>{Duration}</h2>
                  </div>
                  <h3 className='role'>{Company}</h3>
                  <h5 className='exp_desc'>{description1}</h5>
                  <h5 className='exp_desc'>{description2}</h5>
                  <h5 className='exp_desc'>{description3}</h5>
                </article>
              )
              
          })
        }
        </div>
        
    </section>
    )
}

export default Experience