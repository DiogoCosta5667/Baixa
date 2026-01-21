import { useState, useEffect } from 'react'
import SocialShare from './SocialShare'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

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

    const section = document.getElementById('gallery');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Imagens de exemplo - a tua amiga pode substituir por suas próprias
  const artworks = [
    {
      id: 1,
      title: 'Obra 1',
      description: 'Descrição da obra de arte',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600',
      category: 'digital'
    },
    {
      id: 2,
      title: 'Obra 2',
      description: 'Descrição da obra de arte',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
      category: 'retrato'
    },
    {
      id: 3,
      title: 'Obra 3',
      description: 'Descrição da obra de arte',
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600',
      category: 'paisagem'
    },
    {
      id: 4,
      title: 'Obra 4',
      description: 'Descrição da obra de arte',
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=600',
      category: 'digital'
    },
    {
      id: 5,
      title: 'Obra 5',
      description: 'Descrição da obra de arte',
      image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=600',
      category: 'retrato'
    },
    {
      id: 6,
      title: 'Obra 6',
      description: 'Descrição da obra de arte',
      image: 'https://images.unsplash.com/photo-1551732998-8ccb4a0025fd?w=600',
      category: 'paisagem'
    },
  ];

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'digital', name: 'Digital' },
    { id: 'retrato', name: 'Retratos' },
    { id: 'paisagem', name: 'Paisagens' }
  ];

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  const openLightbox = (artwork) => {
    setSelectedImage(artwork);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className={`gallery-title ${isVisible ? 'fade-in-up' : ''}`}>
          Galeria de Arte
        </h2>
        <p className={`gallery-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
          Explore a coleção de trabalhos únicos
        </p>

        <div className={`gallery-filters ${isVisible ? 'fade-in-up' : ''}`}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`gallery-item ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(artwork)}
            >
              <div className="gallery-item-image">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add('loaded')}
                />
                <div className="gallery-item-overlay">
                  <h3>{artwork.title}</h3>
                  <p>{artwork.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <SocialShare 
                url={window.location.href} 
                title={`${selectedImage.title} - Baixa Arte`} 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
