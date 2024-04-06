import React from 'react';
import './skills.css';

import { BsFillPatchCheckFill  } from 'react-icons/bs';

const skills = () => {
  return (
    <section id='skills'> 
    <h2>My Skills</h2>

    <div className="container skills__container">
      <div className="skills__programmingLang">
        <h3>Programming Languages</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <BsFillPatchCheckFill className="skill__detail-icon" color='var(--color-primary)'  />
          <div>
          <h4>C/C++</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Python</h4>
          <small className='text-light'>Experienced </small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Scala</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>SQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Java</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Dart</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Kotlin</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          
        </div>
      </div>
      
      <div className="skills__dev">
        <h3>Dev Frameworks</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Django</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Flutter</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Node Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Express Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>React Js</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Flask</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>FAST API</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>  
        </div>
      </div>
      <div className="skills__programmingLang">
        <h3>Libraries</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <BsFillPatchCheckFill className="skill__detail-icon" color='var(--color-primary)'  />
          <div>
          <h4>Numpy</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Pandas</h4>
          <small className='text-light'>Experienced </small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Sklearn</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>TensorFlow</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Keras</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>OpenCV</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Apache Spark</h4>
          <small className='text-light'>Intermediate </small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>BS4</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Scrapy</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>          
        </div>
      </div>
      
      <div className="skills__tools">
        <h3>Tools & Tech</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Git</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Linux</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Postman</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Firebase</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>AWS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Docker</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Google Cloud Platform</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>MongoDb </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Jira </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Visual Studio Code </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Android Studio </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Intelij IDEA </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default skills