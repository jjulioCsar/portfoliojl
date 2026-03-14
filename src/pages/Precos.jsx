import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollReveal from '../hooks/useScrollReveal';
import './Precos.css';

const getWhatsappLink = (serviceName) => {
    const text = `Olá, tenho interesse no serviço ${serviceName} e gostaria de mais informações.`;
    return `https://wa.me/5582991480837?text=${encodeURIComponent(text)}`;
};

const Precos = () => {
    useScrollReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className="precos-page">
                {/* Hero Section */}
                <section className="precos-hero reveal">
                    <div className="container">
                        <div className="precos-hero-content">
                            <span className="section-subtitle">Invista no seu negócio</span>
                            <h1>Posicionamento Digital que <span>Gera Resultados</span></h1>
                            <p>
                                Nossos serviços ajudam empresas a melhorar sua presença digital, 
                                atrair clientes qualificados e gerar oportunidades reais de venda, 
                                unindo estratégia, design e performance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="pricing-section">
                    <div className="container">
                        {/* Redes Sociais */}
                        <h2 className="pricing-category-title reveal">Gestão de Redes Sociais</h2>
                        <div className="pricing-grid">
                            <div className="pricing-card css-hover-lift reveal delay-100">
                                <h3 className="pricing-plan-name">Essencial</h3>
                                <div className="pricing-price">R$500<span>/mês</span></div>
                                <ul className="pricing-features">
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 4 posts no feed</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Até 8 stories</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Planejamento básico</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Postagem no Instagram</li>
                                </ul>
                                <a href={getWhatsappLink('Gestão de Redes Sociais - Essencial')} className="btn btn-outline pricing-btn" target="_blank" rel="noopener noreferrer">
                                    Quero este plano
                                </a>
                            </div>

                            <div className="pricing-card highlight css-hover-lift reveal delay-200">
                                <div className="pricing-badge">Mais escolhido</div>
                                <h3 className="pricing-plan-name">Profissional</h3>
                                <div className="pricing-price">R$700<span>/mês</span></div>
                                <ul className="pricing-features">
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 8 posts no feed</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Até 12 stories</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Planejamento estratégico</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Otimização visual do perfil</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Acompanhamento básico</li>
                                </ul>
                                <a href={getWhatsappLink('Gestão de Redes Sociais - Profissional')} className="btn btn-primary btn-glow pricing-btn" target="_blank" rel="noopener noreferrer">
                                    Quero este plano
                                </a>
                            </div>

                            <div className="pricing-card css-hover-lift reveal delay-300">
                                <h3 className="pricing-plan-name">Gestão Completa</h3>
                                <div className="pricing-price">R$1.100<span>/mês</span></div>
                                <ul className="pricing-features">
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Até 12 posts no feed</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Stories frequentes</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Planejamento estratégico</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Análise de desempenho</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Suporte estratégico</li>
                                </ul>
                                <a href={getWhatsappLink('Gestão de Redes Sociais - Gestão Completa')} className="btn btn-outline pricing-btn" target="_blank" rel="noopener noreferrer">
                                    Quero este plano
                                </a>
                            </div>
                        </div>

                        <div className="pricing-divider"></div>

                        {/* Tráfego Pago */}
                        <h2 className="pricing-category-title reveal">Gestão de Tráfego Pago</h2>
                        <div className="pricing-grid split-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 450px))', justifyContent: 'center' }}>
                            <div className="pricing-card css-hover-lift reveal delay-100">
                                <h3 className="pricing-plan-name">Gestão Básica</h3>
                                <div className="pricing-price">R$250<span>/mês</span></div>
                                <ul className="pricing-features">
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Criação de campanhas</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Até 2 campanhas mensais</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Acompanhamento básico</li>
                                </ul>
                                <a href={getWhatsappLink('Gestão de Tráfego Pago - Gestão Básica')} className="btn btn-outline pricing-btn" target="_blank" rel="noopener noreferrer">
                                    Quero este plano
                                </a>
                            </div>

                            <div className="pricing-card css-hover-lift reveal delay-200">
                                <h3 className="pricing-plan-name">Gestão Avançada</h3>
                                <div className="pricing-price">R$600<span>/mês</span></div>
                                <ul className="pricing-features">
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Criação e otimização de campanhas</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Testes de público</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Acompanhamento estratégico</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Análise de desempenho</li>
                                </ul>
                                <a href={getWhatsappLink('Gestão de Tráfego Pago - Gestão Avançada')} className="btn btn-outline pricing-btn" target="_blank" rel="noopener noreferrer">
                                    Quero este plano
                                </a>
                            </div>
                        </div>

                        <div className="pricing-divider"></div>

                        {/* Criação de Sites */}
                        <h2 className="pricing-category-title reveal">Criação de Sites</h2>
                        <div className="pricing-grid split-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 450px))', justifyContent: 'center' }}>
                            <div className="pricing-card css-hover-lift reveal delay-100">
                                <h3 className="pricing-plan-name">Landing Page</h3>
                                <div className="pricing-price">R$600</div>
                                <ul className="pricing-features">
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Página focada em conversão</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Design personalizado</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Integração com domínio</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Publicação do site</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Prazo: a consultar</li>
                                </ul>
                                <a href={getWhatsappLink('Criação de Sites - Landing Page')} className="btn btn-outline pricing-btn" target="_blank" rel="noopener noreferrer">
                                    Quero este plano
                                </a>
                            </div>

                            <div className="pricing-card css-hover-lift reveal delay-200">
                                <h3 className="pricing-plan-name">Site Institucional</h3>
                                <div className="pricing-price">R$1.200</div>
                                <ul className="pricing-features">
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Até 5 seções</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Design personalizado</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Publicação do site</li>
                                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Prazo: a consultar</li>
                                </ul>
                                <a href={getWhatsappLink('Criação de Sites - Site Institucional')} className="btn btn-outline pricing-btn" target="_blank" rel="noopener noreferrer">
                                    Quero este plano
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section-wrap reveal">
                    <div className="container">
                        <div className="benefits-section">
                            <span className="section-subtitle">Por que investir?</span>
                            <h2 style={{ marginBottom: '1rem' }}>Benefícios dos Serviços</h2>
                            <div className="benefits-grid">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Atrair Novos Clientes</h4>
                                        <p>Alcance um público qualificado através de campanhas e conteúdos estratégicos.</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Fortalecer Presença Digital</h4>
                                        <p>Posicione sua marca onde o seu cliente está, com relevância e consistência.</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2"/><rect width="4" height="14" x="10" y="3" rx="1"/><path d="M18 22v-3"/><path d="M6 22v-3"/></svg>
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Profissionalizar a Marca</h4>
                                        <p>Comunique o valor real do seu negócio através de um design e estética impecáveis.</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 8v8"/></svg>
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Gerar Oportunidades de Venda</h4>
                                        <p>Transforme visualizações em contatos e contatos em vendas reais para sua empresa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rules Section */}
                <section className="rules-section reveal">
                    <div className="container">
                        <div className="rules-box">
                            <h3>Regras de Contratação</h3>
                            
                            <div className="rules-group">
                                <h4>Pagamento</h4>
                                <ul className="rules-list">
                                    <li>Serviços iniciam após a confirmação do pagamento.</li>
                                    <li>Serviços mensais são pagos no início do mês de referência.</li>
                                    <li>Projetos de sites devem ser pagos antecipadamente.</li>
                                </ul>
                            </div>
                            
                            <div className="rules-group">
                                <h4>Revisões</h4>
                                <ul className="rules-list">
                                    <li>Até 2 revisões incluídas em cada etapa do projeto.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="precos-cta reveal">
                    <div className="container" style={{ textAlign: 'center', margin: '2rem auto 8rem', maxWidth: '800px' }}>
                        <h2>Pronto para <span>iniciar?</span></h2>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem' }}>
                            Selecione o plano ideal para a sua empresa ou entre em contato pelo WhatsApp para tirar dúvidas e criar uma proposta personalizada.
                        </p>
                        <a href="https://wa.me/5582991480837?text=Ol%C3%A1%2C%20queria%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%21" className="btn btn-primary btn-glow" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
                            Falar via WhatsApp agora
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Precos;
