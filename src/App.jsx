import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Gallery />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
