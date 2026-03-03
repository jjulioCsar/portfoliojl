import React from 'react';
import logoSemCor from '../assets/personal/LOGO - SEM COR.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-alt">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src={logoSemCor} alt="Júlio César" className="footer-logo-img" />
                        </a>
                        <p className="footer-bio">
                            Estrategista de marketing focado em conversão e escala de resultados para negócios premium.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#portfolio">Portfólio</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Contato</h4>
                        <ul>
                            <li><a href="https://wa.me/5582991480837?text=Ol%C3%A1%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%2C%20queria%20saber%20de%20valores!" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                            <li><a href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-480738260/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/juliocesar.dcs/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Júlio César. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
