import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <SEO 
        title="Home"
        description="Full Stack MERN Developer - Building scalable web applications with modern technologies"
        keywords="MERN Developer, Full Stack Developer, React, Node.js, Portfolio"
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </PageTransition>
  );
};

export default Home;
