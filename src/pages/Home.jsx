import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import HowIWork from '../components/HowIWork';
import Services from '../components/Services';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Systems from '../components/Systems';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Lightbox from '../components/common/Lightbox';
import FloatingSocials from '../components/FloatingSocials';

const Home = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: null });

    const openLightbox = (image) => {
        setLightbox({ isOpen: true, image });
    };

    const closeLightbox = () => {
        setLightbox({ isOpen: false, image: null });
    };

    return (
        <>
            <Navbar onContactClick={() => window.open('https://wa.me/5582991480837', '_blank')} />
            <main>
                <Hero onContactClick={() => window.open('https://wa.me/5582991480837', '_blank')} />
                <Marquee />
                <About />
                <Projects />
                <HowIWork />
                <Services />
                <Education openLightbox={openLightbox} />
                <Portfolio openLightbox={openLightbox} />
                <Systems />
                <CTA />
            </main>
            <Footer />

            <Lightbox
                isOpen={lightbox.isOpen}
                image={lightbox.image}
                onClose={closeLightbox}
            />

            <FloatingSocials />
        </>
    );
};

export default Home;
