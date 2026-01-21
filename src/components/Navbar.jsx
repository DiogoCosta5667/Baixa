import { useState } from 'react'
import './Navbar.css'

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <h2>Baixa</h2>
        </div>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Início</a>
          <a onClick={() => scrollToSection('gallery')}>Galeria</a>
          <a onClick={() => scrollToSection('about')}>Sobre</a>
          <a onClick={() => scrollToSection('contact')}>Contacto</a>
        </div>

        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
