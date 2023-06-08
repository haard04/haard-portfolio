import React from 'react'
// import About from './components/About/About'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav'
import Skills from './components/Skills/skills'
import Project from './components/Project/Project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Experience from './components/experience/experience.jsx'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Skills/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App