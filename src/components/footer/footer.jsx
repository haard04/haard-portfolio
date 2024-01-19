import React from 'react'
import './footer.css'

import { BsInstagram,BsTwitter ,BsFacebook,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Haard Shah</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact Me</a></li>

      </ul>

      <div className="footer__social">
        <a href='https://instagram.com/haardshah41' target={'_blank'}><BsInstagram/></a>
        <a href='https://twitter.com/haardshah10'target='_blank'><BsTwitter/></a>
        <a href='https://www.facebook.com/haard.shah.58' target={'_blank'}><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/haard-/'target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; haardshah04</small>
      </div>
    </footer>
  )
}

export default Footer