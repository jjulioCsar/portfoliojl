import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './HowIWork.css';

const steps = [
    {
        id: "01",
        title: "Diagnóstico",
        desc: "Análise profunda do cenário atual, público-alvo e gargalos comerciais da sua marca.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        )
    },
    {
        id: "02",
        title: "Planejamento",
        desc: "Desenho da estratégia de curto e longo prazo, alinhando Tráfego e Metas de Conversão.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
        )
    },
    {
        id: "03",
        title: "Execução",
        desc: "Criação técnica e visual da solução. Design premium e sistemas focados na conversão multicanal.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        )
    },
    {
        id: "04",
        title: "Otimização",
        desc: "Coleta de dados ágeis orientada a performance, ajustando rapidamente para o maior ROI possível.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        )
    }
];

const HowIWork = () => {
    useScrollReveal();

    return (
        <section id="howiwork" className="how-i-work section-alt">
            <div className="container">
                <div className="how-i-work-header reveal">
                    <span className="section-subtitle">A Metodologia</span>
                    <h2>Como eu trabalho</h2>
                    <p>
                        Um processo claro, validado e desenhado para escalar negócios do primeiro insight à venda final, unindo Design, Tráfego Pago e Tecnologia.
                    </p>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className={`process-step reveal delay-${(index + 1) * 100}`}>
                            <div className="step-number">{step.id}</div>
                            <div className="step-icon-wrapper">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {index !== steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
