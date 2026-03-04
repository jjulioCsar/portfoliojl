import React, { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Results.css';

const metrics = [
    {
        id: 1,
        value: "+661k",
        label: "Visualizações",
        desc: "Total orgânico + pago em apenas 3 meses de atuação estratégica na PH Joias."
    },
    {
        id: 2,
        value: "+116k",
        label: "Contas Alcançadas",
        desc: "Crescimento explosivo de +414,9% focado em expansão de base qualificada."
    },
    {
        id: 3,
        value: "+18k",
        label: "Ações no Perfil",
        desc: "Mais de 13 mil visitas ao perfil e 5.594 cliques direcionados para conversão (Site/Wpp)."
    },
    {
        id: 4,
        value: "+11,2%",
        label: "Crescimento de Seguidores",
        desc: "Aumento rápido e líquido de +497 seguidores nutridos com desejo de compra."
    },
    {
        id: 5,
        value: "5x",
        label: "Média de ROI",
        desc: "Retorno sobre investimento contínuo nas campanhas de tráfego pago na PH Joias."
    },
    {
        id: 6,
        value: "360º",
        label: "Domínio Multi-Canal",
        desc: "Integração total em ecossistemas de clientes usando LinkedIn, TikTok, Instagram e Site."
    }
];

const Results = () => {
    useScrollReveal();

    return (
        <section id="results" className="results section-alt">
            <div className="container">
                <div className="results-header reveal">
                    <span className="section-subtitle">Casos Reais & Performance</span>
                    <h2>Números que comprovam eficiência</h2>
                    <p>
                        Resultados concretos obtidos na otimização de campanhas, engajamento orgânico e retornos expressivos em vendas.
                    </p>
                </div>

                <div className="results-grid">
                    {metrics.map((metric, index) => (
                        <div key={metric.id} className={`metric-card-royal reveal delay-${(index % 4) * 100}`}>
                            <span className="metric-value-royal">{metric.value}</span>
                            <span className="metric-label-royal">{metric.label}</span>
                            <p className="metric-desc-royal">{metric.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
