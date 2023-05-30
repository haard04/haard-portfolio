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
          <h4>Java</h4>
          <small className='text-light'>Intermediate </small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Python</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>MySQL</h4>
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
          
        </div>
      </div>
      <div className="skills__dev">
        <h3>Development & Frameworks</h3>
        <div className="skill__content">
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
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Express Js</h4>
          <small className='text-light'>Intermediate</small>
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
          <h4>OpenCV</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Intermediate</small>
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
          <h4>Postman</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <BsFillPatchCheckFill className='skill__detail-icon'/>
          <div>
          <h4>Firebase</h4>
          <small className='text-light'>Intermediate</small>
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
          
        </div>
      </div>
    </div>
    </section>
  )
}

export default skills