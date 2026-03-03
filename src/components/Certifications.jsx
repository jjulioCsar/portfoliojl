import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Certifications.css';

const certificates = [
    {
        id: 1,
        title: "Inteligência Artificial na Prática",
        org: "IEL",
        year: "2025"
    },
    {
        id: 2,
        title: "Modelagem de Projetos de Inovação",
        org: "SENAI",
        year: "2024"
    },
    {
        id: 3,
        title: "Implementação de Negócios Inovadores",
        org: "SENAI",
        year: "2024"
    },
    {
        id: 4,
        title: "Desvendando a Indústria 4.0",
        org: "SENAI",
        year: "2024"
    },
    {
        id: 5,
        title: "Criatividade e Ideação em Projetos de Inovação",
        org: "SENAI",
        year: "2024"
    }
];

const Certifications = () => {
    useScrollReveal();

    return (
        <section id="certifications" className="certifications section-alt">
            <div className="container">
                <div className="cert-header reveal">
                    <span className="section-subtitle">Reconhecimento</span>
                    <h2>Certificações</h2>
                    <p>Aprimoramento contínuo para garantir inovação e as melhores práticas no desenvolvimento de estratégias de alto nível.</p>
                </div>

                <div className="cert-grid">
                    {certificates.map((cert, index) => (
                        <div key={cert.id} className={`cert-card reveal css-hover-lift delay-${(index % 3) * 100}`}>
                            <div className="cert-visual img-placeholder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                <br />
                                Certificado
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <div className="cert-meta">
                                    <span className="cert-org">{cert.org}</span>
                                    <span className="cert-year">{cert.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
