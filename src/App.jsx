import React from 'react'
// import About from './components/About/About'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav'
import Experience from './components/Skills/skills'
import Project from './components/Project/Project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    {/* <About/> */}
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App