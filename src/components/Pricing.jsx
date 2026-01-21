import { useState, useEffect } from 'react'
import './Pricing.css'

function Pricing() {
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

    const section = document.getElementById('pricing');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const plans = [
    {
      id: 1,
      name: 'Digital Simples',
      price: '25€',
      features: [
        'Retrato digital',
        '1 pessoa',
        'Formato digital (JPG/PNG)',
        '2 revisões incluídas',
        'Entrega em 5-7 dias'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Digital Completo',
      price: '45€',
      features: [
        'Ilustração detalhada',
        'Até 2 pessoas',
        'Background personalizado',
        '3 revisões incluídas',
        'Formato digital HD',
        'Entrega em 7-10 dias'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Premium',
      price: '80€',
      features: [
        'Arte complexa',
        'Até 3 pessoas',
        'Background elaborado',
        'Revisões ilimitadas',
        'Formatos digitais + impressão',
        'Entrega em 10-15 dias'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className={`pricing-title ${isVisible ? 'fade-in-up' : ''}`}>
          Encomendas & Preços
        </h2>
        <p className={`pricing-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
          Escolhe o plano ideal para a tua obra de arte
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && <span className="popular-badge">POPULAR</span>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className="plan-button"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Encomendar Agora
              </button>
            </div>
          ))}
        </div>

        <div className={`pricing-info ${isVisible ? 'fade-in-up' : ''}`}>
          <h3>Como Funciona?</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Envia a Referência</h4>
              <p>Contacta-me com fotos ou ideias</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Confirma o Pedido</h4>
              <p>Aprovamos os detalhes e preço</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Criação da Arte</h4>
              <p>Trabalho na tua encomenda</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Entrega Final</h4>
              <p>Recebes a arte em alta qualidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
