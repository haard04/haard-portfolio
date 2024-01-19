import React from 'react'
import './Project.css'
import musiIMG from '../../assets/musipedia-logo.png'
import algo from '../../assets/algonew.png'
import HMS from '../../assets/HMS.png'
import careercatalyst from '../../assets/careercat.png'
import expensesmeter from '../../assets/expensesmeter.png'

const data=[
  {
    id:1,
    image:careercatalyst,
    title:<h2>Career Catalyst</h2>,
    description:<h3>➔ Created a dynamic platform offering resume version control, comprehensive job application tracking, and personalized job recommendations, streamlining the job search process and empowering users with data-driven insights for optimal career decisions.
   <br/> ➔ Tech: Django, Next Js, AWS RDS (MySQL), NLP</h3>,
    github:"https://github.com/haard04/careercatalyst",
    demo:"https://github.com/haard04/careercatalyst"
  },
  {
    id:2,
    image:expensesmeter,
    title:<h2>Expenses Meter</h2>,
    description:<h3>➔ Designed, built, and deployed a MERN stack based web application which gives user a platform where he can manage expenses, Incomes, Balances with Chart Visulization.<br/>➔ Set up a database with MongoDB Atlas to store , view, Edit and delete functionality.<br/>➔ Tech: MongoDB, React Js, Express Js, Node Js</h3>,
    github:"https://github.com/haard04/Expensometer",
    demo:"https://expensesmeter.netlify.app/"
  },
  {
    id:3,
    image:algo,
    title:<h2>OS Algorithm simulator</h2> ,
    description:<h3>➔ Using Flutter created application as a group project in which you can simulate operating system’s Algorithms like CPU scheduling, Disk scheduling, Page replacement, Deadlock condition etc. <br/>➔ Used Technologies: Flutter,Dart, C++,OpenAI API</h3>,
    github:"https://github.com/haard04/CPU_schedule",
    demo:"https://github.com/haard04/CPU_schedule"
  },
  {
    id:4,
    image:musiIMG,
    title:<h2>MusiPedia </h2>,
    description:<h3>➔ Designed, built, and deployed a MERN stack-based web application which gives user a platform where he can share story or details about a song .<br/> ➔ Set up a database with MongoDB Atlas to store , view, Edit and delete functionality.<br/> ➔ Tech: MongoDB, ReactJs, ExpressJs, NodeJs.</h3>,
    github:"https://github.com/haard04/musipedia",
    demo:"https://musipediaaa.netlify.app/"
  },
  {
    id:5,
    image:HMS,
    title:<h2>Hospital Management System</h2>,
    description:<h3>➔ Worked on Hospital management system as Database Management System project.<br/>➔ Tech: MySQL </h3>,
    github:"https://github.com/haard04/Hospital-Management-System---DBMS-project",
    demo:"https://github.com/haard04/Hospital-Management-System---DBMS-project"
  },
  {
    id:6,
    image:null,
    title:<h2>Rescue Management Application</h2>,
    description:<h3>➔ Created Rescue management System as Part of Smart India Hackathon-2023, Here Rescue Agencies can register themselves, User will open app and app will fetch user's live location and will give details of all the rescue agencies nearby. Agency can contact with other agencies so they can communicate regarding resources management.<br/>➔ Tech stack: Flutter, Node Js, Express Js, MongoDb</h3>,
    github:"https://github.com/haard04/rescue-app",
    demo:"https://github.com/haard04/rescue-app"
  },
  // {
  //   id:7,
  //   image:null,
  //   title:"Cliniflow App",
  //   description:"Created Rescue management System as Part of Hackout-2023 at DAIICT,Gandhinagar, Here Doctor do not need to write all the prescription writing manually, instead doctor just have to speak and it will generate PDF of prescription, It will make ease the process.Tech stack: Flutter,Node Js,Express Js, MongoDb",
  //   github:"hhttps://github.com/haard04/cliniflow-app",
  //   demo:"https://github.com/haard04/cliniflow-app"
  // },
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