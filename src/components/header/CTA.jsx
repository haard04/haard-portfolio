import React from 'react'
import Resume from '../../assets/haard43.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="mailto:haardshah04@gmail.com" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA