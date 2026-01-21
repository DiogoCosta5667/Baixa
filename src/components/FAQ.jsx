import { useState, useEffect } from 'react'
import './FAQ.css'

function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

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

    const section = document.getElementById('faq');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const faqs = [
    {
      question: 'Quanto tempo demora uma encomenda?',
      answer: 'O tempo varia conforme a complexidade: obras simples 5-7 dias, completas 7-10 dias, e premium 10-15 dias. Sempre comunico o progresso!'
    },
    {
      question: 'Posso pedir revisões?',
      answer: 'Sim! Cada plano inclui um número específico de revisões. Quero que fiques 100% satisfeito com o resultado final.'
    },
    {
      question: 'Em que formato recebo a arte?',
      answer: 'Envio em formato digital de alta qualidade (JPG/PNG). No plano Premium, também podes receber ficheiros para impressão profissional.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Aceito pagamento por transferência bancária ou MB Way. Normalmente peço 50% no início e 50% na entrega final.'
    },
    {
      question: 'Posso encomendar presente para alguém?',
      answer: 'Claro! Muitos clientes encomendam para oferecer. Só preciso das fotos/referências e posso incluir uma mensagem especial.'
    },
    {
      question: 'Fazem retratos de animais?',
      answer: 'Sim! Adoro fazer retratos de animais de estimação. O processo é o mesmo e os preços também.'
    },
    {
      question: 'E se não gostar do resultado?',
      answer: 'Trabalho com revisões para garantir a tua satisfação. Mostro previews durante o processo para aprovação antes da finalização.'
    },
    {
      question: 'Posso usar a arte comercialmente?',
      answer: 'Para uso pessoal está incluído. Para uso comercial, contacta-me para discutirmos uma licença específica.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className={`faq-title ${isVisible ? 'fade-in-up' : ''}`}>
          Perguntas Frequentes
        </h2>
        <p className={`faq-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
          Tudo o que precisas de saber sobre encomendas
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''} ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`faq-cta ${isVisible ? 'fade-in-up' : ''}`}>
          <h3>Ainda tens dúvidas?</h3>
          <p>Contacta-me diretamente e terei todo o gosto em ajudar!</p>
          <button 
            className="faq-button"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Entrar em Contacto
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
