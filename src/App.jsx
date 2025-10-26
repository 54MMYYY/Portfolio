import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import { Certifications } from './sections/Certifications';
import References from './sections/References';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Certifications />
      <References />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
