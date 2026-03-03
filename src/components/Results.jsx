import React, { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Results.css';

const metrics = [
    {
        id: 1,
        value: "500k+",
        label: "Views Orgânicas",
        desc: "Alcançadas em apenas 3 meses (vs 200k da gestão anterior), recuperando a força orgânica das empresas."
    },
    {
        id: 2,
        value: "12k+",
        label: "Black Friday VIP",
        desc: "Views em único post 100% orgânico no lançamento da campanha PH Joias (descontos e antecipação)."
    },
    {
        id: 3,
        value: "5x",
        label: "Média de ROI",
        desc: "Lucro multiplicado em 5 vezes sobre o valor investido nas campanhas de tráfego pago subsequentes."
    },
    {
        id: 4,
        value: "360º",
        label: "Domínio Multi-Canal",
        desc: "Gestão unificada otimizando LinkedIn, TikTok, Instagram e Site para máxima conversão."
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
