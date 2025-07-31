import React, { useState, useEffect } from 'react'
// import About from './components/About/About'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav'
import Skills from './components/Skills/skills'
import Project from './components/Project/Project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Experience from './components/experience/experience.jsx'
import Companies from './components/companies/companies.jsx'


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <h2>Haard Shah</h2>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header/>
    <Nav/>
    <Companies/>
    <Skills/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App