import React from 'react';
import './CTA.css';

const CTA = ({ isProjectPage }) => {
    return (
        <section id="contact" className={`cta ${isProjectPage ? 'cta-project' : ''}`}>
            <div className="bg-glow-cta"></div>
            <div className="container cta-container reveal">
                <span className="section-subtitle">Próximo Passo</span>
                <h2>Pronto para escalar sua marca com <span>marketing estratégico e inovação?</span></h2>
                <p>
                    Não entrego apenas artes, entrego ativos de venda. Se você busca escala, autoridade e um design que trabalha pelo seu faturamento, vamos conversar.
                </p>
                <div className="cta-actions">
                    <a href="https://wa.me/5582991480837?text=Ol%C3%A1%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%2C%20queria%20saber%20de%20valores!" target="_blank" rel="noopener noreferrer" aria-label="Falar via WhatsApp" className="btn btn-whatsapp btn-glow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Falar via WhatsApp
                    </a>
                    <a href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-480738260/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil no LinkedIn" className="btn btn-linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.1rem' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/juliocesar.dcs/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil no Instagram" className="btn btn-instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.1rem' }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
