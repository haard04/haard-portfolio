import React from 'react';
import './experience.css';

const data=[
  {
    id:1,
    Company: "Marwiz Tech Pvt. Ltd. - Vadodata, GJ, India.",
    Role:"Full Stack Development Intern",
    Duration:"June 2024- July 2024",
    description1:"➔ Developed software for licensing and certification renewal, connecting companies with agents. Enabled agents to design custom certificates and automate mass generation.",
    description2:"➔ Technologies used: Node.js, Express.js, React.js, Konva.js, MongoDB."
    
  },
  {
      id:2,
      Company: "Welcome Broker - Ahmedabad, GJ, India.",
      Role:"Software Developing Intern",
      Duration:"May 2022-May 2023",
      description1:"➔ Developed a comprehensive Flutter-based deal management application for Welcome Broker, enabling efficient tracking of business deals and serving over 1,000 users globally. ",
      description2:"➔ Technologies used: Flutter, Node.js, Express.js, MongoDB, Docker, AWS EC2.",
    },
    
    
  ]

const Experience = () => {
  return (
    <section id='Experience'>

        <h2>Experience</h2>

        <div className='Experience'>
        {
          data.map(({id,Company,Role,Duration,description1,description2})=>{
            return (
                <article key={id} className='exp_item'>
                  <div className='company-duration'>
                    <h2 className='company'>{Role}</h2>
                    <h2 className='duration'>{Duration}</h2>
                  </div>
                  <h3 className='role'>{Company}</h3>
                  <h5 className='exp_desc'>{description1}</h5>
                  <h5 className='exp_desc'>{description2}</h5>
                </article>
              )
              
          })
        }
        </div>
        
    </section>
    )
}

export default Experience