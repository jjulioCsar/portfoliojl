import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import phjoiasLogo from '../assets/logos/LOGO PHJOIAS.jpg';
import techLogo from '../assets/logos/TECHPLAST LOGO BRANCA.png';
import tampLogo from '../assets/logos/1.png';
import './Projects.css';

const Projects = () => {
  useScrollReveal();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header reveal" style={{ marginBottom: '2rem' }}>
          <span className="section-subtitle">Experiência Aplicada</span>
          <h2>Projetos & Atuação Estratégica</h2>
          <p>
            Minha atuação prática e resultados tangíveis estruturados para diferentes segmentos do mercado. Escolha um projeto para acessar os detalhes e métricas da operação.
          </p>
        </div>

        <div className="projects-blocks">
          {/* Tech Plast */}
          <Link to="/project/tech-plast" style={{ textDecoration: 'none' }}>
            <div className="project-block reveal">
              <div className="project-info">
                <h3>Setor Industrial <br /><span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>Tech Plast</span></h3>
                <p className="project-desc">
                  Atuação estratégica no desenvolvimento de autoridade digital e captação B2B para indústria de moldes técnicos.
                </p>
                <div className="case-cta-link">
                  <span>Ver Case Completo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              <div className="project-visual">
                <img src={techLogo} alt="Logo Tech Plast" className="project-logo-img css-hover-lift" />
              </div>
            </div>
          </Link>

          {/* Tamp Plast */}
          <Link to="/project/tamp-plast" style={{ textDecoration: 'none' }}>
            <div className="project-block reverse reveal">
              <div className="project-info">
                <h3>Setor Industrial <br /><span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>Tamp Plast</span></h3>
                <p className="project-desc">
                  Digitalização de catálogo e expansão de mercado para fabricante de fechamentos plásticos.
                </p>
                <div className="case-cta-link">
                  <span>Ver Case Completo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              <div className="project-visual">
                <img src={tampLogo} alt="Logo Tamp Plast" className="project-logo-img css-hover-lift" />
              </div>
            </div>
          </Link>

          {/* Varejo PH Joias */}
          <Link to="/project/ph-joias" style={{ textDecoration: 'none' }}>
            <div className="project-block reveal">
              <div className="project-info">
                <h3>Setor de Varejo <br /><span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>PH Joias</span></h3>
                <p className="project-desc">
                  Supervisão de marketing e performance focada em conversão, branding premium e escala no varejo online.
                </p>
                <div className="case-cta-link">
                  <span>Ver Case Completo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              <div className="project-visual">
                <img src={phjoiasLogo} alt="Logo PH Joias" className="project-logo-img css-hover-lift" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
