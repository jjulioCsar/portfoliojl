import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';

import Services from './components/Services';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Lightbox from './components/common/Lightbox';
import './App.css';

function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: null });

  const openLightbox = (image) => {
    setLightbox({ isOpen: true, image });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, image: null });
  };

  return (
    <>
      <Cursor />
      <div className="noise-overlay"></div>
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <Navbar onContactClick={() => window.open('https://wa.me/5582991480837', '_blank')} />
      <main>
        <Hero onContactClick={() => window.open('https://wa.me/5582991480837', '_blank')} />
        <Marquee />
        <About />
        <Services />
        <Education openLightbox={openLightbox} />
        <Portfolio openLightbox={openLightbox} />
        <Results />
        <CTA />
      </main>
      <Footer />

      <Lightbox
        isOpen={lightbox.isOpen}
        image={lightbox.image}
        onClose={closeLightbox}
      />
    </>
  );
}

export default App;
