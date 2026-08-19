'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header/header';
import Nav from '../components/nav/nav';
import Skills from '../components/Skills/skills';
import Project from '../components/Project/Project';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Experience from '../components/experience/experience';
import Companies from '../components/companies/companies';

const Page = () => {
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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[image:var(--gradient-bg)]">
        <div className="text-center text-white">
          <div className="mx-auto mb-8 h-[60px] w-[60px] animate-spin rounded-full border-[3px] border-border border-t-primary" />
          <h2 className="mb-4 gradient-text text-[2rem] font-bold">Haard Shah</h2>
          <p className="animate-[pulse_2s_ease-in-out_infinite] text-base text-light">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Nav />
      <Companies />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
