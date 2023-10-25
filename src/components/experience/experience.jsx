import React from 'react';
import './experience.css';

const data=[
    {
      id:1,
      Company: "Welcome Broker - Ahmedabad",
      Role:"Software Developing Intern",
      Duration:"May 2022-May 2023",
      description:"Using Flutter, Worked on project where implemented features like sauda management which keeps track of the deals of the businesses associated with Welcome Broker and been used by 500+ users worldwide. Added features like summary PDF, Billing,Statistical visualization for better understanding of sales. Developed backend with NodeJs and used MongoDB as database.",
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
                    <h2 className='company'>{Role}</h2>
                    <h2 className='duration'>{Duration}</h2>
                  </div>
                  <h3 className='role'>{Company}</h3>
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