import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import aboutImg from '../assets/webp/capa tamp.jpg';
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
                            Muito além do operacional, eu traciono o <span>crescimento sustentável</span> das empresas.
                        </h2>
                        <div className="about-description">
                            <p>
                                Atuo estrategicamente integrando design, tráfego pago e tecnologia para estruturar ecossistemas digitais que convertem. Minha abordagem é focada na construção de autoridade de marca e no reconhecimento de mercado com alto potencial de conversão qualificada.
                            </p>
                            <p>
                                Com um perfil analítico orientado por dados, todas as minhas decisões e planejamentos são baseados em performance, garantindo não apenas leads, mas oportunidades reais de negócio que impactam diretamente o faturamento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
