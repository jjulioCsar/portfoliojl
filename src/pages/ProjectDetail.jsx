import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Footer from '../components/Footer';

// Simple Navigation specific for internal pages
const SecondaryNavbar = () => (
    <nav className="navbar scrolled" style={{ position: 'sticky', background: '#050505' }}>
        <div className="container navbar-container">
            <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem' }}>
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
        return <Navigate to="/" replace />; // Handle unknown IDs by redirecting to Home
    }

    return (
        <>
            <SecondaryNavbar />

            <main className="project-detail-page">
                <div className="container">

                    <div className="case-header reveal active" style={{ padding: '4rem 0 2rem' }}>
                        <span className="case-badge">{project.subtitle}</span>
                        <h1>{project.title}</h1>
                        <p>{project.context}</p>
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
                                <div className="case-results-section" style={{ marginTop: '3rem' }}>
                                    <h4>{project.resultsDescription}</h4>
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
                                <div className="case-comparison reveal active" style={{ marginTop: '5rem' }}>
                                    <h4>Escalabilidade: Antes vs Durante</h4>
                                    <p>Comparativo visual do crescimento real atingido com a estratégia.</p>

                                    <div className="comparison-grid">
                                        {project.comparison.reach && (
                                            <div className="comparison-card">
                                                <h5 className="comparison-title">Contas Alcançadas</h5>
                                                <div className="comparison-bars">
                                                    <div className="bar-row">
                                                        <span className="bar-label">Antes</span>
                                                        <div className="bar-track">
                                                            <div className="bar-fill before" style={{ width: `${(project.comparison.reach.before / project.comparison.reach.during) * 100}%` }}>
                                                                <span className="bar-value">{project.comparison.reach.beforeString}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bar-row">
                                                        <span className="bar-label">Durante</span>
                                                        <div className="bar-track">
                                                            <div className="bar-fill during" style={{ width: '100%' }}>
                                                                <span className="bar-value">{project.comparison.reach.duringString}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comparison-gain">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                                    {project.comparison.reach.gainText} <span className="gain-percent">({project.comparison.reach.gainPercent})</span>
                                                </div>
                                            </div>
                                        )}

                                        {project.comparison.actions && (
                                            <div className="comparison-card">
                                                <h5 className="comparison-title">Ações no Perfil</h5>
                                                <div className="comparison-bars">
                                                    <div className="bar-row">
                                                        <span className="bar-label">Antes</span>
                                                        <div className="bar-track">
                                                            <div className="bar-fill before" style={{ width: `${(project.comparison.actions.before / project.comparison.actions.during) * 100}%` }}>
                                                                <span className="bar-value">{project.comparison.actions.beforeString}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bar-row">
                                                        <span className="bar-label">Durante</span>
                                                        <div className="bar-track">
                                                            <div className="bar-fill during" style={{ width: '100%' }}>
                                                                <span className="bar-value">{project.comparison.actions.duringString}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comparison-gain">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                                    {project.comparison.actions.gainText} <span className="gain-percent">({project.comparison.actions.gainPercent})</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Highlight Section */}
                            {project.highlight && (
                                <div className="case-highlight reveal active" style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <h4>Insights & Ponto de Destaque</h4>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)', opacity: '0.9' }}>{project.highlight}</p>
                                </div>
                            )}

                            {/* Gallery Section */}
                            {project.gallery && (
                                <div className="case-gallery reveal active" style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <h4>Design & Identidade Visual Extrapolando o Digital</h4>
                                    <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Peças criadas com foco em branding físico, expandindo o posicionamento da marca e gerando autoridade visual pelo mundo a fora.</p>
                                    <div className="gallery-showcase" style={{ marginTop: '2rem' }}>
                                        {project.gallery.map((item, idx) => (
                                            <div key={idx} className="gallery-item-standalone" style={{ overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    title={item.title}
                                                    style={{
                                                        width: '100%',
                                                        maxWidth: 'none',
                                                        height: 'auto',
                                                        display: 'block',
                                                        transition: 'transform 0.5s ease'
                                                    }}
                                                    className="project-logo-detail-img"
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
