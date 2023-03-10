import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {ImLinkedin} from 'react-icons/im' 
import {IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  const form = useRef();

  const number="+916354601088"
const text="hello"


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_s88ryeh', 'template_cm2rzpi', form.current, 'cfcwjfuEVrb3jWP7P')
  e.target.reset()
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>haardshah04@gmail.com</h5>
          <a href='mailto:haardshah04@gmail.com' target={'_blank'}>Send a message</a>
        </article>
        <article className="contact__option">
          <ImLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Haard Shah</h5>
          <a href='https://www.linkedin.com/in/haard-shah-437a08239/' target={'_blank'}>Connect Me</a>
        </article>
        <article className="contact__option">
          <IoLogoWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+916354601088</h5>
          <a href = {`whatsapp://send?text=${text}&phone=${number}`} target='_blank'>Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='Name' placeholder='Enter Your Full Name' required/>
          <input type='email' name='Email' placeholder='Enter Your Email Id' required/>
          <textarea name='message' rows={7} placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact