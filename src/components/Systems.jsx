import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Systems.css';

const systemsData = [
    {
        title: "Teo Motos",
        description: "Sistema para gerenciamento e exibição de estoque de motos com interface focada em conversão.",
        url: "https://teo-motos.vercel.app/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4M12 8v8"></path></svg>
        )
    },
    {
        title: "Techplast",
        description: "Site de apresentação institucional desenvolvido com foco em velocidade e design premium.",
        url: "https://techplastembalagens.com.br",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        )
    },
    {
        title: "JL System ERP",
        description: "Sistema interno ERP (Enterprise Resource Planning) para gestão de fluxo de caixa, estoque e integrações corporativas.",
        url: "https://jlsystem-erp.vercel.app/login",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        )
    }
];

const Systems = () => {
    useScrollReveal();

    return (
        <section id="systems" className="systems">
            <div className="container">
                <div className="systems-header reveal">
                    <span className="section-subtitle">Desenvolvimento Web</span>
                    <h2>Sistemas & Aplicações</h2>
                    <p>
                        Ecossistemas digitais, sites e painéis desenvolvidos sob medida para necessidades específicas.
                    </p>
                </div>

                <div className="systems-grid">
                    {systemsData.map((sys, index) => (
                        <div key={index} className={`system-card reveal delay-${(index + 1) * 100} css-hover-lift`}>
                            <div className="system-icon-wrapper">
                                {sys.icon}
                            </div>
                            <h3>{sys.title}</h3>
                            <p>{sys.description}</p>
                            <a href={sys.url} target="_blank" rel="noopener noreferrer" className="btn-system">
                                Acessar Sistema
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Systems;
