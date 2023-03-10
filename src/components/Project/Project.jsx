import React from 'react'
import './Project.css'
import musiIMG from '../../assets/musipedia-logo.png'
import WBPIC from '../../assets/WB-logo.png'
import osIMG from '../../assets/osIMG.png'


const data=[
  {
    id:1,
    image:WBPIC,
    title:"Welcome Broker",
    description:"Using Flutter, Worked on project where implemented features like sauda management which keeps track of the deals of the businesses associated with Welcome Broker. Added automated data summary tools to improve the business for the clients of Welcome broker. Added accessibility criteria for the different business terms and  rules, making it easier for the client to work with their business. Developed backend with NodeJs and used MongoDB as database. ",
    github:"https://github.com",
    demo:"https://play.google.com/store/apps/details?id=com.welcomebroker.welcome_broker"
  },
  {
    id:2,
    image:musiIMG,
    title:"MusiPedia ",
    description:"Designed, built, and deployed a MERN stack-based web application which gives user a platform where he can share story or details about a song . Set up a database with MongoDB Atlas to store , view, Edit and delete functionality. Tech: MongoDB, ReactJs, ExpressJs, NodeJs.",
    github:"https://github.com/haard04/musipedia",
    demo:"https://musipediaaa.netlify.app/"
  },
  {
    id:3,
    image:osIMG,
    title:" OS simulator",
    description:"Work in progress",
    github:"https://github.com/haard04/CPU_schedule",
    demo:"efvev"
  }
]

const Project = () => {
  return (
    <section id='projects'>
      <h5>My Recent work</h5>
      <h2>Projects</h2>
      <div className='container project__container'>
        {
          data.map(({id,image,title,description,github,demo})=>{
            return (
              <article key={id} className='project__item'>
        <div className='project__item-image'>
        <img src={image} alt={title}></img>
        </div>
        <h3>{title}</h3>
        <h5 className='project_desc'>{description}</h5>
        <div className='project__item-cta'>
        <a href={github} className='btn' target={'_blank'}>Github</a>
        <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </div>
        
        </article>
            )
          })
        }
        
        

      </div>
      </section>
  )
}

export default Project