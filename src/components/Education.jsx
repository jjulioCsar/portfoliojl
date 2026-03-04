import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

import cert1 from '../assets/certificates/CERTIFICADO CURSO SENAI I.A.webp';
import cert2 from '../assets/certificates/Implementação_de_Negócios_Inovadores-Certificado_4060.webp';
import cert3 from '../assets/certificates/Modelagem_de_Projetos_de_Inovação-Certificado_4061.webp';
import cert4 from '../assets/certificates/Criatividade_e_Ideação_em_Projetos_de_Inovação-Certificado_4058.webp';
import cert5 from '../assets/certificates/Desvendando_a_Indústria_4.0___Visão_Geral-Certificado_4059_page-0001.webp';

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
        school: "SENAI Alagoas",
        period: "2022 - 2023",
        highlights: ["Foco em UI/UX e Frontend", "Desenvolvimento de Projetos Reais"]
    },
    {
        degree: "Certificação Social Media",
        school: "O Novo Mercado",
        period: "2023 - 2024",
        highlights: ["Estratégia de Conteúdo", "Gestão de Comunidades e Ads"]
    }
];

const skillCategories = [
    {
        title: "Design & UX",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
        skills: ["Figma", "Canva", "Adobe Suite", "Branding"]
    },
    {
        title: "Performance & Ads",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
        skills: ["Meta Ads", "Google Ads", "Análise de Métricas", "ROI"]
    },
    {
        title: "Tech & Data",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
        skills: ["JavaScript", "HTML/CSS", "Notion", "Excel/Dados"]
    },
    {
        title: "Estratégia B2B",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        skills: ["Gestão de Redes", "Funil de Vendas", "Conversão B2B", "Copywriting"]
    }
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

                <div className="bento-education-grid">
                    {/* Bento Item: Formação Acadêmica */}
                    <div className="bento-item formation-card reveal">
                        <div className="bento-inner">
                            <div className="bento-header">
                                <span className="bento-label">Trajetória</span>
                                <h3>Formação Acadêmica</h3>
                            </div>
                            <div className="bento-timeline">
                                {educationData.map((item, index) => (
                                    <div key={index} className="bento-timeline-item">
                                        <div className="timeline-info">
                                            <span className="timeline-date-v2">{item.period}</span>
                                            <h4>{item.degree}</h4>
                                            <span className="timeline-school">{item.school}</span>
                                        </div>
                                        <div className="timeline-highlights">
                                            {item.highlights.map((h, i) => (
                                                <span key={i} className="h-tag">{h}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bento Items: Skill Categories */}
                    {skillCategories.map((cat, index) => (
                        <div key={index} className={`bento-item skill-cat-card reveal delay-${(index + 1) * 100}`}>
                            <div className="bento-inner">
                                <div className="cat-icon-wrapper">
                                    {cat.icon}
                                </div>
                                <div className="bento-header">
                                    <h3>{cat.title}</h3>
                                </div>
                                <div className="cat-skills-list">
                                    {cat.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="cat-skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
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
