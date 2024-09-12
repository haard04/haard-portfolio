import React from 'react';
import './experience.css';

const data=[
  {
    id:1,
    Company: "Marwiz Tech Pvt. Ltd. - Vadodara, Gujarat, India",
    Role:"Full Stack Web and App Development Intern",
    Duration:"June 2024 - July 2024",
    description1:"➔ Developed the backend for the ”EHS Mind Manager”, a licensing and certification renewal platform, using Node.js and Express.js, reducing the time to issue new certificates by 78%.",
    description2:"➔ Built the frontend with React.js for the web and Flutter for the app, enabling customizable design in the canvas and improving design efficiency by 54%.",
    description3:"➔ Utilized MongoDB aggregations for efficient data management in the platform, increasing exploration efficiency by 97% and speeding up expiration date searches."
    
  },
  {
      id:2,
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