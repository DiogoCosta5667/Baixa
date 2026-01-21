import { useState, useEffect } from 'react'
import './Testimonials.css'

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      text: 'A Baixa criou um retrato incrível! O detalhe e a atenção são extraordinários. Recomendo 100%!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'João Costa',
      text: 'Trabalho maravilhoso! A arte transmite exatamente a emoção que eu queria. Profissional de excelência.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 3,
      name: 'Ana Rodrigues',
      text: 'Fiquei encantada com o resultado final. A Baixa é muito talentosa e atenciosa. Adorei!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className={`testimonials-title ${isVisible ? 'fade-in-up' : ''}`}>
          O Que Dizem os Clientes
        </h2>
        <p className={`testimonials-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
          Feedback de quem já encomendou
        </p>

        <div className={`testimonials-slider ${isVisible ? 'fade-in-up' : ''}`}>
          <button className="slider-btn prev" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div className="testimonial-card">
            <img 
              src={testimonials[currentSlide].image} 
              alt={testimonials[currentSlide].name}
              className="testimonial-avatar"
            />
            <div className="testimonial-stars">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentSlide].text}"</p>
            <h4 className="testimonial-name">{testimonials[currentSlide].name}</h4>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
