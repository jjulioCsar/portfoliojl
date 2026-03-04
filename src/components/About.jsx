import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import aboutImg from '../assets/webp/capa tamp.webp';
import './About.css';

const About = () => {
    useScrollReveal();

    return (
        <section id="about" className="about section-alt">
            <div className="bg-glow-about"></div>

            <div className="container">
                <div className="about-content-centered reveal">
                    <div className="about-text-content">
                        <span className="section-subtitle">Visão Estratégica</span>
                        <h2 className="about-title">
                            Atuação executiva como <span>Consultor Estratégico</span> independente.
                        </h2>
                        <div className="about-description">
                            <p>
                                Não atuando como funcionário, mas como um parceiro de negócios, eu atendo marcas da indústria B2B e varejo unindo Design, Tráfego Pago e Tecnologia. O objetivo é claro: gerar posicionamento, reconhecimento de mercado e conversão contínua.
                            </p>
                            <p>
                                Com um perfil multidisciplinar, aplico estratégias personalizadas que transcendem o operacional. Construo ecossistemas digitais que preparam a sua marca para escalar e liderar em competitividade.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
