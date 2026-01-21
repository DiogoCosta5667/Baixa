import { useEffect, useState } from 'react'
import './About.css'

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-background">
        <div className="about-shape about-shape-1"></div>
        <div className="about-shape about-shape-2"></div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className={`about-image ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" 
                alt="Sobre a artista" 
              />
            </div>
          </div>

          <div className={`about-text ${isVisible ? 'slide-in-right' : ''}`}>
            <h2 className="about-title">Sobre a Artista</h2>
            <div className="about-divider"></div>
            <p className="about-description">
              Bem-vindo ao mundo criativo de <strong>Baixa</strong>. Cada desenho conta uma história única, 
              capturando emoções e momentos através de traços cuidadosamente elaborados.
            </p>
            <p className="about-description">
              Com paixão pela arte e dedicação ao detalhe, cada obra é criada com o objetivo de 
              inspirar, emocionar e conectar pessoas através da expressão visual.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <h3>50+</h3>
                <p>Obras Criadas</p>
              </div>
              <div className="about-stat">
                <h3>100+</h3>
                <p>Clientes Satisfeitos</p>
              </div>
              <div className="about-stat">
                <h3>5+</h3>
                <p>Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
