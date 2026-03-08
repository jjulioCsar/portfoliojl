import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  useScrollReveal();

  const projectsList = Object.values(projectsData);

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
          {projectsList.map((project, index) => (
            <Link key={project.id} to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
              <div
                className={`project-block ${index % 2 !== 0 ? 'reverse' : ''} css-hover-lift`}
                style={{ opacity: 1, transform: 'none' }}
              >
                <div className="project-info">
                  <h3>{project.sector} <br /><span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>{project.subtitle}</span></h3>
                  <p className="project-desc">
                    {project.listDesc}
                  </p>
                  <div className="case-cta-link">
                    <span>Ver Case Completo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
                <div className="project-visual">
                  <img src={project.heroImage} alt={`Logo ${project.subtitle}`} className="project-logo-img" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
