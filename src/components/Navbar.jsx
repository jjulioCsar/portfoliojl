import React, { useState, useEffect } from 'react';
import logoSemCor from '../assets/personal/LOGO - SEM COR.webp';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    <img src={logoSemCor} alt="Júlio César" className="logo-img" />
                </a>

                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">Sobre</a></li>
                    <li><a href="#projects" className="nav-link">Projetos</a></li>
                    <li><a href="#services" className="nav-link">Serviços</a></li>
                    <li><a href="#portfolio" className="nav-link">Portfólio</a></li>
                    <li><a href="#results" className="nav-link">Resultados</a></li>
                </ul>

                <div className="nav-cta">
                    <a href="https://wa.me/5582991480837?text=Ol%C3%A1%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%2C%20queria%20saber%20de%20valores!" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow">Falar Comigo</a>
                </div>

                <div className="mobile-menu-btn">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
