import React, { useEffect, useRef } from 'react';
import './skills.css';

import { BsFillPatchCheckFill } from 'react-icons/bs';
import { 
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaGithub,
  FaLinux,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiScala,
  SiDart,
  SiKotlin,
  SiGo,
  SiFlutter,
  SiDjango,
  SiExpress,
  SiNextdotjs,
  SiFlask,
  SiFastapi,
  SiBootstrap,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiApachespark,
  SiSelenium,
  SiPytest,
  SiFirebase,
  SiMongodb,
  SiJira,
  SiJenkins,
  SiAndroidstudio,
  SiTerraform,
  SiPostman,
  SiGooglecloud,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiAmazonaws,
  SiSnowflake
} from 'react-icons/si';
// Removed: import { TbBrandPinecone } from 'react-icons/tb';

const Skills = () => {
  const skillsRef = useRef(null);

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

    const skillCards = skillsRef.current?.querySelectorAll('.skill-card');
    skillCards?.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id='skills' ref={skillsRef}> 
    <h2>My Skills</h2>

    <div className="container skills__container">
      <div className="skills__programmingLang skill-card fade-in">
        <h3>Programming Languages</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <SiCplusplus className="skill__detail-icon" />
          <div>
          <h4>C/C++</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaPython className='skill__detail-icon'/>
          <div>
          <h4>Python</h4>
          <small className='text-light'>Experienced </small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiScala className='skill__detail-icon'/>
          <div>
          <h4>Scala</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiJavascript className='skill__detail-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaDatabase className='skill__detail-icon'/>
          <div>
          <h4>SQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaJava className='skill__detail-icon'/>
          <div>
          <h4>Java</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiDart className='skill__detail-icon'/>
          <div>
          <h4>Dart</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiKotlin className='skill__detail-icon'/>
          <div>
          <h4>Kotlin</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiGo className='skill__detail-icon'/>
          <div>
          <h4>Go</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          
        </div>
      </div>
      
      <div className="skills__dev skill-card fade-in">
        <h3>Dev Frameworks</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <FaNodeJs className='skill__detail-icon'/>
          <div>
          <h4>Node Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiFlutter className='skill__detail-icon'/>
          <div>
          <h4>Flutter</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiDjango className='skill__detail-icon'/>
          <div>
          <h4>Django</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiExpress className='skill__detail-icon'/>
          <div>
          <h4>Express Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaReact className='skill__detail-icon'/>
          <div>
          <h4>React Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiNextdotjs className='skill__detail-icon'/>
          <div>
          <h4>Next Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiFlask className='skill__detail-icon'/>
          <div>
          <h4>Flask</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiFastapi className='skill__detail-icon'/>
          <div>
          <h4>FAST API</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaHtml5 className='skill__detail-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaCss3Alt className='skill__detail-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiBootstrap className='skill__detail-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>  
        </div>
      </div>

      {/* Databases Section */}
      <div className="skills__dev skill-card fade-in">
        <h3>Databases</h3>
        <div className="skill__content">
          <article className='skill__detail'>
            <SiMongodb className='skill__detail-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='skill__detail'>
            <SiFirebase className='skill__detail-icon'/>
            <div>
              <h4>Firestore</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='skill__detail'>
            <SiMysql className='skill__detail-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='skill__detail'>
            <SiPostgresql className='skill__detail-icon'/>
            <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='skill__detail'>
            <SiSupabase className='skill__detail-icon'/>
            <div>
              <h4>Supabase</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='skill__detail'>
            <SiAmazonaws className='skill__detail-icon'/>
            <div>
              <h4>DynamoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='skill__detail'>
            <FaDatabase className='skill__detail-icon'/>
            <div>
              <h4>Pinecone (Vector DB)</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>

      <div className="skills__programmingLang skill-card fade-in">
        <h3>Libraries</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <SiNumpy className="skill__detail-icon" />
          <div>
          <h4>Numpy</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiPandas className='skill__detail-icon'/>
          <div>
          <h4>Pandas</h4>
          <small className='text-light'>Experienced </small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiScikitlearn className='skill__detail-icon'/>
          <div>
          <h4>Sklearn</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiTensorflow className='skill__detail-icon'/>
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
          <SiOpencv className='skill__detail-icon'/>
          <div>
          <h4>OpenCV</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiApachespark className='skill__detail-icon'/>
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
          <article className='skill__detail'>
          <SiSelenium className='skill__detail-icon'/>
          <div>
          <h4>Selenium</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article> 
          <article className='skill__detail'>
          <SiPytest className='skill__detail-icon'/>
          <div>
          <h4>Pytest</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

        </div>
      </div>
      
      <div className="skills__tools skill-card fade-in">
        <h3>Tools & Tech</h3>
        <div className="skill__content">
          <article className='skill__detail'>
          <FaGithub className='skill__detail-icon'/>
          <div>
          <h4>Git</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaLinux className='skill__detail-icon'/>
          <div>
          <h4>Linux</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiPostman className='skill__detail-icon'/>
          <div>
          <h4>Postman</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiFirebase className='skill__detail-icon'/>
          <div>
          <h4>Firebase</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaAws className='skill__detail-icon'/>
          <div>
          <h4>AWS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <FaDocker className='skill__detail-icon'/>
          <div>
          <h4>Docker</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiGooglecloud className='skill__detail-icon'/>
          <div>
          <h4>Google Cloud Platform</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiMongodb className='skill__detail-icon'/>
          <div>
          <h4>MongoDb </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiSnowflake className='skill__detail-icon'/>
          <div>
          <h4>Snowflake</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiJira className='skill__detail-icon'/>
          <div>
          <h4>Jira </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiJenkins className='skill__detail-icon'/>
          <div>
          <h4>Jenkins </h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiAndroidstudio className='skill__detail-icon'/>
          <div>
          <h4>Android Studio </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill__detail'>
          <SiTerraform className='skill__detail-icon'/>
          <div>
          <h4>Terraform </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills