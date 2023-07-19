import React from 'react'
import './Project.css'
import musiIMG from '../../assets/musipedia-logo.png'
import algo from '../../assets/algonew.png'
import HMS from '../../assets/HMS.png'

const data=[
  
  {
    id:1,
    image:musiIMG,
    title:"MusiPedia ",
    description:"Designed, built, and deployed a MERN stack-based web application which gives user a platform where he can share story or details about a song . Set up a database with MongoDB Atlas to store , view, Edit and delete functionality. Tech: MongoDB, ReactJs, ExpressJs, NodeJs.",
    github:"https://github.com/haard04/musipedia",
    demo:"https://musipediaaa.netlify.app/"
  },
  {
    id:2,
    image:algo,
    title:" OS simulator",
    description:"Using Flutter created application as a group project in which you can simulate operating system’s Algorithms like CPU scheduling, Disk scheduling, Page replacement, Deadlock condition etc. Used Technologies: Flutter,Dart, C++,OpenAI API",
    github:"https://github.com/haard04/CPU_schedule",
    demo:"https://github.com/haard04/CPU_schedule"
  },
  {
    id:3,
    image:HMS,
    title:"Hospital Management System",
    description:"Worked on Hospital management system as Database Management System project, Used MySQL for it. ",
    github:"https://github.com/haard04/Hospital-Management-System---DBMS-project",
    demo:"https://github.com/haard04/Hospital-Management-System---DBMS-project"
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