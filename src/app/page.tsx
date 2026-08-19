import Header from '../components/header/header';
import Nav from '../components/nav/nav';
import Skills from '../components/Skills/skills';
import Project from '../components/Project/Project';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Experience from '../components/experience/experience';
import Companies from '../components/companies/companies';

const Page = () => {
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
