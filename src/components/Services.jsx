import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

const services = [
    {
        id: 1,
        title: "Design Estratégico",
        desc: "Criação de marcas, identidades visuais e direção de arte focadas no posicionamento de valor e atração do público ideal.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
    },
    {
        id: 2,
        title: "Gestão de Tráfego Pago",
        desc: "Estruturação de campanhas em Facebook Ads e Google Ads orientadas a ROI, conversão e reconhecimento de marca.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    },
    {
        id: 3,
        title: "Estruturação de Campanhas",
        desc: "Planejamento 360º unindo tráfego, design e copys magnéticas (ex: lançamentos, Black Friday, captação B2B).",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    },
    {
        id: 4,
        title: "Planejamento de Conteúdo",
        desc: "Estratégia editorial para redes sociais (Instagram, LinkedIn, TikTok) visando engajamento orgânico e construção de autoridade.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    {
        id: 5,
        title: "Análise de Dados & Relatórios",
        desc: "Leitura analítica de métricas e KPIs para extrair insights acionáveis e otimizar funis de venda e marketing.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    },
    {
        id: 6,
        title: "Desenvolvimento de Sistemas Internos",
        desc: "Criação de ferramentas e integrações customizadas para otimização do fluxo de trabalho das equipes internas.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    },
    {
        id: 7,
        title: "Desenvolvimento Web",
        desc: "Criação de sites e landing pages performáticas baseadas em UI/UX para conversão direta e assertiva.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    }
];

const Services = () => {
    useScrollReveal();

    return (
        <section id="services" className="services section-alt">
            <div className="container">
                <div className="services-header reveal">
                    <span className="section-subtitle">O Que Eu Faço</span>
                    <h2>Soluções Integradas</h2>
                    <p>
                        Um ecossistema completo de estratégias e execuções técnicas focado no crescimento escalável do seu negócio.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={service.id} className={`service-card reveal delay-${(index % 3) * 100}`}>
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
