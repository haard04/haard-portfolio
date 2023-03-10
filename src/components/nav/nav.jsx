import React from 'react'
import './nav.css'
import {FaHome,FaToolbox} from 'react-icons/fa';
import { useState } from 'react';
import {AiOutlineProject} from 'react-icons/ai'
import { IoMdContact } from 'react-icons/io';

const Nav = () => {
  const [activeNav,setActiveNav] =useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><FaHome/></a>
      <a href='#skills' onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' :''}><FaToolbox/></a>
      <a href='#projects' onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' :''}><AiOutlineProject/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><IoMdContact/></a>
      {/* <a href='#EXP'><FaHome/></a> */}
    </nav>
  )
}

export default Nav