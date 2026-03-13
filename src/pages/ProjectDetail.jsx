import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Footer from '../components/Footer';

// Standardized Navigation for project pages
const SecondaryNavbar = () => (
    <nav className="navbar scrolled project-navbar">
        <div className="container navbar-container">
            <Link to="/" className="btn btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Voltar à Página Inicial
            </Link>
        </div>
    </nav>
);

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData[id];

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <Navigate to="/" replace />; 
    }

    return (
        <>
            <SecondaryNavbar />

            <main className="project-detail-page">
                <div className="container">

                    <div className="case-header reveal active">
                        <span className="case-badge">{project.subtitle}</span>
                        <h1>{project.title}</h1>
                        <p>{project.context}</p>
                        {project.siteUrl && (
                            <a
                                href={project.siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Visitar Site Oficial
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </a>
                        )}
                    </div>

                    <div className="project-detail-visual reveal active">
                        <div className="project-detail-img-wrapper">
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                className="project-logo-detail-img"
                            />
                        </div>
                    </div>

                    <div className="case-study-block reveal active">
                        <div className="case-content">

                            {/* Strategy Section */}
                            {project.strategy && (
                                <div className="case-strategy">
                                    <h4>Estratégia Aplicada</h4>
                                    <ul className="strategy-list">
                                        {project.strategy.map((item, idx) => (
                                            <li key={idx}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Metrics Grid */}
                            {project.metrics && (
                                <div className="case-results-section">
                                    <h4 className="section-title-center">{project.resultsDescription}</h4>
                                    <div className="case-metrics-grid">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx} className={`metric-box ${metric.featured ? 'featured-metric' : ''}`}>
                                                <span className="metric-value">{metric.value}</span>
                                                <span className="metric-label">{metric.label}</span>
                                                <div className="metric-breakdown">
                                                    {metric.highlight && <span className="metric-highlight">{metric.highlight}</span>}
                                                    {metric.sub && <span className="metric-sub">{metric.sub}</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Comparison Section */}
                            {project.comparison && (
                                <div className="case-comparison reveal active">
                                    <div className="comparison-header">
                                        <h4>Escalabilidade: Antes vs Durante</h4>
                                        <p>Comparativo visual do crescimento real atingido com a estratégia.</p>
                                    </div>

                                    <div className="comparison-grid">
                                        {Object.entries(project.comparison).map(([key, data]) => (
                                            <div key={key} className="comparison-card">
                                                <h5 className="comparison-title">{key === 'reach' ? 'Contas Alcançadas' : 'Ações no Perfil'}</h5>
                                                <div className="comparison-bars">
                                                    <div className="bar-row">
                                                        <span className="bar-label">Antes</span>
                                                        <div className="bar-track">
                                                            <div className="bar-fill before" style={{ width: `${(data.before / data.during) * 100}%` }}>
                                                                <span className="bar-value">{data.beforeString}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bar-row">
                                                        <span className="bar-label">Durante</span>
                                                        <div className="bar-track">
                                                            <div className="bar-fill during" style={{ width: '100%' }}>
                                                                <span className="bar-value">{data.duringString}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comparison-gain-wrapper">
                                                    <div className="comparison-gain">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                                        {data.gainText} <span className="gain-percent">({data.gainPercent})</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Highlight Section */}
                            {project.highlight && (
                                <div className="case-highlight reveal active">
                                    <h4>Insights & Ponto de Destaque</h4>
                                    <p className="highlight-text">{project.highlight}</p>
                                </div>
                            )}

                            {/* Gallery Section */}
                            {project.gallery && (
                                <div className="case-gallery reveal active">
                                    <div className="gallery-header">
                                        <h4>Design & Identidade Visual Extrapolando o Digital</h4>
                                        <p>Peças criadas com foco em branding físico, expandindo o posicionamento da marca e gerando autoridade visual pelo mundo a fora.</p>
                                    </div>
                                    <div className="gallery-showcase">
                                        {project.gallery.map((item, idx) => (
                                            <div key={idx} className="gallery-item-standalone css-hover-lift">
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    title={item.title}
                                                    className="gallery-img-core"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ProjectDetail;
