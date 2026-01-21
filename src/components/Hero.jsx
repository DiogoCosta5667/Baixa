import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background" style={{ transform: `translateY(${offset * 0.5}px)` }}>
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title fade-in-up">Baixa</h1>
        <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
          Arte que Inspira
        </p>
        <p className="hero-description fade-in-up" style={{ animationDelay: '0.4s' }}>
          Explore uma coleção única de criações artísticas
        </p>
        <button 
          className="hero-button fade-in-up" 
          style={{ animationDelay: '0.6s' }}
          onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
        >
          Ver Galeria
        </button>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-icon"></div>
      </div>
    </section>
  )
}

export default Hero
