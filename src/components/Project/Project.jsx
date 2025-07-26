import React, { useEffect, useRef } from 'react'
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
    description:<h3>➔ Engineered the backend using Django and AWS RDS (MySQL) for a dynamic job application tracking platform, designing REST APIs and optimizing database queries, which reduced data retrieval time by 60%.
   <br/>➔ Created a responsive platform for comprehensive job application tracking and personalized job recommendations,
   enhancing the job search process and offering users data-driven insights for better career decisions.
   <br/>➔ Prepared the frontend with React.js and integrated NLP, improving job match relevance by 57%.
   </h3>,
    github:"https://github.com/haard04/careercatalyst",
    demo:"https://github.com/haard04/careercatalyst"
  },
  {
    id:3,
    image:algo,
    title:<h2>OS Algorithm simulator</h2> ,
    description:<h3>
      ➔ Engineered a user-friendly Flutter app with MongoDB to simplify concepts of OS algorithms for students and
      professionals, focusing on detailed simulations of CPU scheduling, disk scheduling, page replacement, and deadlock.
      <br/>
      ➔ Created a comprehensive platform to visualize OS algorithms, enhancing understanding through detailed representations
of key concepts.
<br/>
➔ Integrated OpenAI API for a chatbot feature, enhancing learning and increasing user engagement by 35%.
      </h3>,
    github:"https://github.com/haard04/CPU_schedule",
    demo:"https://github.com/haard04/CPU_schedule"
  },
  {
    id:2,
    image:null,
    title:<h2>RideSecure</h2>,
    description:<h3>
      ➔ Implemented RideSecure, a computer vision project using YOLOv8 to detect triple riders, helmet compliance, and
      mobile device usage on motorcycles with 95% accuracy.
      <br/>
      <br/>
      ➔ Achieved high-performance detection with a custom dataset of over 6,000 images, enhancing road safety through
real-time monitoring.
    </h3>,
    github:"https://github.com/haard04/RideSecure",
    demo:"https://github.com/haard04/cliniflow-app"
  },
  
  {
    id:4,
    image:musiIMG,
    title:<h2>MusiPedia </h2>,
    description:<h3>➔ Designed, built, and deployed a MERN stack-based web application which gives user a platform where he can share story or details about a song .<br/> <br/>➔ Set up a database with MongoDB Atlas to store , view, Edit and delete functionality.<br/><br/> ➔ Tech: MongoDB, ReactJs, ExpressJs, NodeJs.</h3>,
    github:"https://github.com/haard04/musipedia",
    demo:"https://musipediaaa.netlify.app/"
  },
  {
    id:5,
    image:expensesmeter,
    title:<h2>Expenses Meter</h2>,
    description:<h3>➔ Designed, built, and deployed a MERN stack based web application which gives user a platform where he can manage expenses, Incomes, Balances with Chart Visulization.<br/><br/>➔ Set up a database with MongoDB Atlas to store , view, Edit and delete functionality.<br/><br/>➔ Tech: MongoDB, React Js, Express Js, Node Js</h3>,
    github:"https://github.com/haard04/Expensometer",
    demo:"https://expensesmeter.netlify.app/"
  },
  {
    id:6,
    image:HMS,
    title:<h2>Hospital Management System</h2>,
    description:<h3>➔ Worked on Hospital management system as Database Management System project.<br/><br/>➔ Tech: MySQL </h3>,
    github:"https://github.com/haard04/Hospital-Management-System---DBMS-project",
    demo:"https://github.com/haard04/Hospital-Management-System---DBMS-project"
  },
  
]

const Project = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id='projects' ref={projectsRef}>
      <h5>My Recent work</h5>
      <h2>Projects</h2>
      <div className='container project__container'>
        {
          data.map(({id,image,title,description,github,demo})=>{
            return (
              <article key={id} className='project__item project-card fade-in'>
        {/* <div className='project__item-image'>
        <img src={image} alt={title}></img>
        </div> */}
        <center className='project__title'>{title}</center>
        <h5 className='project_desc'>{description}</h5>
        <div className='project__item-cta'>
        <a href={github} className='project__button' target={'_blank'}>Github</a>
        {/* <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a> */}
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