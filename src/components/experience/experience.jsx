import React from 'react';
import './experience.css';

const data=[
    {
      id:1,
      Company: "Welcome Broker - Ahmedabad",
      Role:"Flutter Developer",
      Duration:"May 2021-May 2022",
      description:"Using Flutter, Worked on project where implemented features like sauda management which keeps track of the deals of the businesses associated with Welcome Broker. Added automated data summary tools to improve the business for the clients of Welcome broker. Added accessibility criteria for the different business terms and  rules, making it easier for the client to work with their business. Developed backend with NodeJs and used MongoDB as database. ",
    },
    
    
  ]

const Experience = () => {
  return (
    <section id='Experience'>

        <h2>Experience</h2>

        <div className='Experience'>
        {
          data.map(({id,Company,Role,Duration,description,})=>{
            return (
                <article key={id} className='exp_item'>
                  <div className='company-duration'>
                    <h2 className='company'>{Company}</h2>
                    <h2 className='duration'>{Duration}</h2>
                  </div>
                  <h3 className='role'>{Role}</h3>
                  <h5 className='exp_desc'>{description}</h5>
                </article>
              )
              
          })
        }
        </div>
        
    </section>
    )
}

export default Experience