import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

import cert1 from '../assets/certificates/CERTIFICADO CURSO SENAI I.A.jpg';
import cert2 from '../assets/certificates/Implementação_de_Negócios_Inovadores-Certificado_4060.jpg';
import cert3 from '../assets/certificates/Modelagem_de_Projetos_de_Inovação-Certificado_4061.jpg';
import cert4 from '../assets/certificates/Criatividade_e_Ideação_em_Projetos_de_Inovação-Certificado_4058.jpg';
import cert5 from '../assets/certificates/Desvendando_a_Indústria_4.0___Visão_Geral-Certificado_4059_page-0001.jpg';

const certs = [
    { title: "Inteligência Artificial na Prática", org: "IEL/AL", img: cert1 },
    { title: "Implementação de Negócios Inovadores", org: "SENAI Alagoas", img: cert2 },
    { title: "Modelagem de Projetos de Inovação", org: "SENAI Alagoas", img: cert3 },
    { title: "Criatividade e Ideação em Projetos", org: "SENAI Alagoas", img: cert4 },
    { title: "Desvendando a Indústria 4.0", org: "SENAI Alagoas", img: cert5 }
];

const educationData = [
    {
        degree: "Técnico em Desenvolvimento Web",
        school: "SENAI"
    },
    {
        degree: "Certificação Social Media",
        school: "O Novo Mercado"
    }
];

const skills = [
    "Figma", "Canva", "Meta Ads",
    "Gerenciamento de Redes Sociais",
    "Análise de Dados", "Notion", "Excel",
    "Google Antigravity", "HTML", "CSS", "JavaScript"
];

const Education = ({ openLightbox }) => {
    useScrollReveal();

    return (
        <section id="education" className="education">
            <div className="container">
                <div className="education-header reveal">
                    <span className="section-subtitle">Qualificação</span>
                    <h2>Formação & Base Técnica</h2>
                </div>

                <div className="education-grid">
                    {/* Formação Acadêmica */}
                    <div className="education-column reveal delay-100">
                        <div className="column-card">
                            <h3>Formação Acadêmica</h3>
                            <div className="timeline">
                                {educationData.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <h4>{item.degree}</h4>
                                        <span className="timeline-org">{item.school}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Base Técnica */}
                    <div className="education-column reveal delay-200">
                        <div className="column-card">
                            <h3>Base Técnica</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div key={index} className={`skill-card css-hover-lift delay-${(index % 3 + 1) * 100}`}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificações */}
                <div className="certifications-section reveal delay-300">
                    <h3>Certificações & Especializações</h3>
                    <div className="certs-grid">
                        {certs.map((cert, index) => (
                            <div
                                key={index}
                                className="cert-card"
                                onClick={() => openLightbox(cert.img)}
                            >
                                <div className="cert-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div className="cert-info">
                                    <h4>{cert.title}</h4>
                                    <span>{cert.org}</span>
                                </div>
                                <div className="cert-zoom-hint">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
