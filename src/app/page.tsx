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
      <Nav />
      <Header />
      <main>
        <Companies />
        <Skills />
        <Experience />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Page;
