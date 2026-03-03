import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import phjoiasCapa from '../assets/projects/phjoias-capa.webp';
import techCapa from '../assets/projects/tech-capa.webp';
import './Projects.css';

const Projects = () => {
  useScrollReveal();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header reveal">
          <span className="section-subtitle">Experiência Aplicada</span>
          <h2>Projetos & Atuação Estratégica</h2>
          <p>
            Minha atuação prática e resultados tangíveis estruturados para diferentes segmentos do mercado.
          </p>
        </div>

        <div className="projects-blocks">
          {/* Indústria B2B */}
          <div className="project-block reveal">
            <div className="project-info">
              <h3>Projetos no Setor Industrial (B2B)</h3>
              <p className="project-desc">
                Estratégias avançadas para empresas do setor industrial focadas em atração, branding e posicionamento de mercado.
              </p>
              <ul className="project-activities">
                <li className="reveal delay-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Desenvolvimento de identidade visual institucional
                </li>
                <li className="reveal delay-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Criação de materiais gráficos estratégicos
                </li>
                <li className="reveal delay-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Gestão de tráfego pago com foco em Reconhecimento, Autoridade e Conversão qualificada
                </li>
                <li className="reveal delay-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Planejamento editorial e agendamento estratégico de conteúdo
                </li>
                <li className="reveal delay-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Estruturação da comunicação digital
                </li>
                <li className="reveal delay-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Análise de insights e relatórios mensais de performance
                </li>
                <li className="reveal delay-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Idealização e desenvolvimento de sistemas internos para organização e eficiência do marketing
                </li>
              </ul>
            </div>
            <div className="project-visual">
              <img src={techCapa} alt="Projetos B2B e Industrial" className="project-img-real css-hover-lift" />
            </div>
          </div>

          {/* Varejo PH Joias */}
          <div className="project-block reverse reveal">
            <div className="project-info">
              <h3>Projetos no Varejo (PH Joias)</h3>
              <p className="project-desc">
                Soluções rápidas, criativas e focadas em conversão direta para um e-commerce de varejo altamente competitivo.
              </p>
              <ul className="project-activities">
                <li className="reveal delay-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Estruturação estratégica do marketing
                </li>
                <li className="reveal delay-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Planejamento e execução de campanhas de tráfego pago
                </li>
                <li className="reveal delay-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Idealização de promoções e eventos comerciais (Ex: Black Friday VIP)
                </li>
                <li className="reveal delay-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Criação da identidade visual das campanhas
                </li>
                <li className="reveal delay-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Desenvolvimento completo da base criativa (artes e anúncios)
                </li>
                <li className="reveal delay-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Organização das ações de marketing (Omnichannel: Insta, TikTok, Site)
                </li>
                <li className="reveal delay-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Monitoramento e otimização de performance (ROI Mapeado)
                </li>
              </ul>
            </div>
            <div className="project-visual">
              <img src={phjoiasCapa} alt="Projetos Varejo PH Joias" className="project-img-real css-hover-lift" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
