import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

const services = [
    {
        id: 1,
        title: "Design Estratégico",
        desc: "Criação de marcas, identidades visuais e direção de arte focadas no posicionamento de valor e atração do público ideal.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2" /></svg>
    },
    {
        id: 2,
        title: "Gestão de Tráfego Pago",
        desc: "Estruturação de campanhas em Facebook Ads e Google Ads orientadas a ROI, conversão e reconhecimento de marca.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 12l-4-4-4 4" /><path d="M12 8v8" /></svg>
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
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
    },
    {
        id: 5,
        title: "Análise de Dados & Relatórios",
        desc: "Leitura analítica de métricas e KPIs para extrair insights acionáveis e otimizar funis de venda e marketing.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
    },
    {
        id: 6,
        title: "Desenvolvimento de Sistemas Internos",
        desc: "Criação de ferramentas e integrações customizadas para otimização do fluxo de trabalho das equipes internas.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
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
                        <div key={service.id} className={`service-card reveal delay-${(index % 3) * 100} css-hover-lift`}>
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
