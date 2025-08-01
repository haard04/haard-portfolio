import React from 'react'
import CTA from './CTA'
import './header.css'
import PIC from '../../assets/Image.jpeg'
import HeaderSocial from './headerSocials.jsx'
import { useState } from 'react';

const Header = () => {
  const [activeNav,setActiveNav] =useState('#');
  return (
    <header>
        <div className="container header__container">
            <h5 className="animate-fade-in-up">Hello I'm</h5>
            <h1 className="animate-fade-in-up">Haard Shah</h1>
            <h5 className="text-light animate-fade-in-up">Software Engineer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="pic animate-fade-in-right">
                <img src={PIC} alt='Haard Shah'></img>
            </div>

            <a href='#contact' onClick={()=> setActiveNav('#contact')}  className='scroll__down animate-fade-in-right'>Scroll Down</a>

        </div>

    </header>
  )
}

export default Header