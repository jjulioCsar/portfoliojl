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

const portfolioImages = [
    { id: 1, src: img1, title: "", category: "DESIGN" },
    { id: 2, src: img2, title: "", category: "DESIGN" },
    { id: 3, src: img3, title: "", category: "DESIGN" },
    { id: 4, src: img4, title: "", category: "DESIGN" },
    { id: 5, src: img5, title: "", category: "DESIGN" },
    { id: 6, src: img6, title: "", category: "DESIGN" },
    { id: 7, src: img7, title: "", category: "DESIGN" },
    { id: 8, src: img8, title: "", category: "DESIGN" },
];

const Portfolio = ({ openLightbox }) => {
    useScrollReveal();

    // Duplicate the list for infinite scroll effect
    const extendedList = [...portfolioImages, ...portfolioImages, ...portfolioImages];

    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-header reveal">
                <span className="section-subtitle">Meu Trabalho Visual</span>
                <h2>Portfólio Estratégico</h2>
                <p>Curadoria de artes, anúncios e identidades visuais focadas em performance.</p>
            </div>

            <div className="portfolio-carousel-container">
                <div className="portfolio-track">
                    {extendedList.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="portfolio-card"
                            onClick={() => openLightbox(item.src)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="portfolio-card-inner">
                                <img src={item.src} alt={item.category} className="portfolio-card-img" />
                                <div className="portfolio-card-overlay">
                                    <span className="portfolio-category">{item.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
