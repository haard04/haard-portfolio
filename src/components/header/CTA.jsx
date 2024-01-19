import React from 'react'

import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/drive/folders/1C5EESJIZUQokd9D2u6vjR37_c_cXumn2?usp=drive_link" target={'_blank'} className='btn'>Download Resume</a>
        <a href="mailto:haardshah04@gmail.com" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA