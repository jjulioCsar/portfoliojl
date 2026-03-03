import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import fotoPerfilPNG from '../assets/personal/FOTO PERFIL JL.webp';
import './Hero.css';

const Hero = () => {
    useScrollReveal();

    return (
        <section id="hero" className="hero">
            <div className="bg-glow"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title reveal">
                        Especialista em Marketing Estratégico, Performance Digital e <span>Posicionamento de Marca</span>
                    </h1>
                    <p className="hero-description reveal delay-100">
                        Integro criatividade, dados e tecnologia para transformar presença digital em crescimento real.
                    </p>
                    <div className="hero-cta reveal delay-200" style={{ gap: '2rem' }}>
                        <a href="https://wa.me/5582991480837?text=Ol%C3%A1%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%2C%20queria%20saber%20de%20valores!" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow">Iniciar Projeto</a>
                        <a href="#portfolio" className="btn btn-outline">Ver Projetos</a>
                    </div>
                </div>

                <div className="hero-visual reveal delay-100">
                    <div className="hero-image-wrapper">
                        <img src={fotoPerfilPNG} alt="Júlio César" className="hero-main-photo" />
                        <div className="hero-photo-fade"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
