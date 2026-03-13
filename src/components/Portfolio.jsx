import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Portfolio.css';

// Importing assets for the carousel
import img1 from '../assets/webp/DIA DO CONSUMIDOR.webp';
import img2 from '../assets/webp/DIAS DAS MULHERES.webp';
import img3 from '../assets/webp/POST TAMP.webp';
import img4 from '../assets/webp/capa tech.webp';
import img5 from '../assets/webp/POST 1 TAMP.webp';
import img6 from '../assets/webp/POST 1 TECH.webp';
import img7 from '../assets/webp/CAPA ANUNCIO PROMOÇÃO - SEM VIP.webp';
import img8 from '../assets/webp/79.webp';
import injetech1 from '../assets/projects/injetech-1.png';
import injetech2 from '../assets/projects/injetech-2.png';
import injetech3 from '../assets/projects/injetech-3.png';
import injetech4 from '../assets/projects/injetech-4.png';

const portfolioImages = [
    { id: 1, src: injetech1, title: "Post Injetech 1", category: "DESIGN" },
    { id: 2, src: injetech2, title: "Post Injetech 2", category: "DESIGN" },
    { id: 3, src: injetech3, title: "Post Injetech 3", category: "DESIGN" },
    { id: 4, src: injetech4, title: "Post Injetech 4", category: "DESIGN" },
    { id: 5, src: img1, title: "Arte de campanha Dia do Consumidor", category: "DESIGN" },
    { id: 6, src: img2, title: "Arte de campanha Dia das Mulheres", category: "DESIGN" },
    { id: 7, src: img3, title: "Post social media Tamp Plast", category: "DESIGN" },
    { id: 8, src: img4, title: "Capa de projeto Tech Plast", category: "DESIGN" },
    { id: 9, src: img5, title: "Post carrossel Tamp Plast", category: "DESIGN" },
    { id: 10, src: img6, title: "Post social media Tech Plast", category: "DESIGN" },
    { id: 11, src: img7, title: "Anúncio de promoção", category: "DESIGN" },
    { id: 12, src: img8, title: "Campanha Black Friday", category: "DESIGN" },
];

const Portfolio = ({ openLightbox }) => {
    useScrollReveal();
    const scrollRef = React.useRef(null);

    // Duplicate the list for infinite scroll effect
    const extendedList = [...portfolioImages, ...portfolioImages, ...portfolioImages];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400;
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-header reveal">
                <span className="section-subtitle">Meu Trabalho Visual</span>
                <h2>Portfólio Estratégico</h2>
                <p>Curadoria de artes, anúncios e identidades visuais focadas em performance.</p>
            </div>

            <div className="portfolio-carousel-wrapper">
                <button className="nav-btn prev" onClick={() => scroll('left')} aria-label="Anterior">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                
                <div className="portfolio-carousel-container" ref={scrollRef}>
                    <div className="portfolio-track">
                        {extendedList.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="portfolio-card css-hover-lift"
                                onClick={() => openLightbox(item.src)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="portfolio-card-inner">
                                    <img src={item.src} alt={item.title} className="portfolio-card-img" />
                                    <div className="portfolio-card-overlay">
                                        <span className="portfolio-category">{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="nav-btn next" onClick={() => scroll('right')} aria-label="Próximo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </section>
    );
};

export default Portfolio;
