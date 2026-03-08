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
                        Bem-vindo! Descubra como transformo marcas com <span>Marketing & Design Funcional</span>
                    </h1>
                    <p className="hero-description reveal delay-100">
                        Role para baixo, conheça meus serviços e veja de perto as estratégias que geram resultado no mundo real.
                    </p>
                    <div className="hero-cta reveal delay-200" style={{ gap: '2rem' }}>
                        <a href="https://wa.me/5582991480837?text=Ol%C3%A1%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%2C%20queria%20saber%20de%20valores!" target="_blank" rel="noopener noreferrer" aria-label="Iniciar Projeto via WhatsApp" className="btn btn-primary btn-glow">Iniciar Projeto</a>
                        <a href="#portfolio" aria-label="Ver seção de projetos" className="btn btn-outline">Ver Projetos</a>
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
