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
            <h5>Hello I'm</h5>
            <h1>Haard Shah</h1>
            <h5 className="text-light">Software Engineer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="pic">
                <img src={PIC} alt=''></img>
            </div>

            <a href='#contact' onClick={()=> setActiveNav('#contact')}  className='scroll__down'>Scroll Down</a>

        </div>

    </header>
  )
}

export default Header