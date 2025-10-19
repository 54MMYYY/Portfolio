import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import References from './sections/References';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <References />
      {/* contact */}
      {/* footer */}
      <section className="min-h-screen" />
    </div>
  );
};

export default App;
