import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub,BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/haard-/'target="_blank"><BsLinkedin/></a>
        
        <a href='https://github.com/haard04'target='_blank'><BsGithub/></a>
        <a href='https://leetcode.com/haardshah04'target='_blank'><SiLeetcode/></a>
        <a href='https://twitter.com/haardshah10'target='_blank'><BsTwitter/></a>
        
    </div>
  )
}

export default headerSocial