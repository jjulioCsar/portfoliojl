import React, { useState, useEffect } from 'react';
import logoSemCor from '../assets/personal/LOGO - SEM COR.webp';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -70% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    <img src={logoSemCor} alt="Júlio César" className="logo-img" />
                </a>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="/#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>Sobre</a></li>
                    <li><a href="/#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMenu}>Projetos & Atuação Estratégica</a></li>
                    <li><a href="/#howiwork" className={`nav-link ${activeSection === 'howiwork' ? 'active' : ''}`} onClick={closeMenu}>Como eu trabalho</a></li>
                    <li><a href="/#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={closeMenu}>Serviços</a></li>
                    <li><a href="/#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={closeMenu}>Portfólio</a></li>
                    <li><a href="/#systems" className={`nav-link ${activeSection === 'systems' ? 'active' : ''}`} onClick={closeMenu}>Sistemas</a></li>

                    {/* Mobile CTA inside menu */}
                    <li className="mobile-cta-link">
                        <a href="https://wa.me/5582991480837?text=Ol%C3%A1%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%2C%20queria%20saber%20de%20valores!" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow" onClick={closeMenu}>Falar Comigo</a>
                    </li>
                </ul>

                <div className="nav-cta">
                    <a href="https://wa.me/5582991480837?text=Ol%C3%A1%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%2C%20queria%20saber%20de%20valores!" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow" aria-label="Falar Comigo WhatsApp">Falar Comigo</a>
                </div>

                <div className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu" role="button" tabIndex={0}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
