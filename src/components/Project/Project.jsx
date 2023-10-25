import React from 'react'
import './Project.css'
import musiIMG from '../../assets/musipedia-logo.png'
import algo from '../../assets/algonew.png'
import HMS from '../../assets/HMS.png'
import resumeproject from '../../assets/resumeproject.png'
const data=[
  {
    id:1,
    image:resumeproject,
    title:"Career Catalyst",
    description:`Created a dynamic platform offering resume version control, comprehensive job application tracking, and personalized job recommendations, streamlining the job search process and empowering users with data-driven insights for optimal career decisions.
    Developing it enhanced skills in full-stack web development, data visualization, and machine learning integration,providing valuable experience in building user-centric applications and leveraging cloud services for scalable solutions.
    Tech: Django, Next Js, AWS RDS (MySQL), NLP`,
    github:"https://github.com/haard04/ResumeWatcher",
    demo:"https://online-resume-watcher-6xw5.onrender.com/"
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
    image:algo,
    title:" OS simulator",
    description:"Using Flutter created application as a group project in which you can simulate operating system’s Algorithms like CPU scheduling, Disk scheduling, Page replacement, Deadlock condition etc. Used Technologies: Flutter,Dart, C++,OpenAI API",
    github:"https://github.com/haard04/CPU_schedule",
    demo:"https://github.com/haard04/CPU_schedule"
  },
  {
    id:4,
    image:HMS,
    title:"Hospital Management System",
    description:"Worked on Hospital management system as Database Management System project, Used MySQL for it. ",
    github:"https://github.com/haard04/Hospital-Management-System---DBMS-project",
    demo:"https://github.com/haard04/Hospital-Management-System---DBMS-project"
  },
  {
    id:5,
    image:null,
    title:"Rescue Management Application",
    description:"Created Rescue management System as Part of Smart India Hackathon-2023, Here Rescue Agency can register themselves and user do not need to register, User will open app and app will fetch user\'s live location and will give details of all the rescue agencies nearby. Agency can contact with other agency so they can communicate regarding resources management.Tech stack: Flutter,Node Js,Express Js, MongoDb",
    github:"https://github.com/haard04/rescue-app",
    demo:"https://github.com/haard04/rescue-app"
  },
  {
    id:5,
    image:null,
    title:"Cliniflow App",
    description:"Created Rescue management System as Part of Hackout-2023 at DAIICT,Gandhinagar, Here Doctor do not need to write all the prescription writing manually, instead doctor just have to speak and it will generate PDF of prescription, It will make ease the process.Tech stack: Flutter,Node Js,Express Js, MongoDb",
    github:"hhttps://github.com/haard04/cliniflow-app",
    demo:"https://github.com/haard04/cliniflow-app"
  },
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