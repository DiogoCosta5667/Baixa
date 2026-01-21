import { useEffect } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.custom-cursor-follower');

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleMouseEnter = () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);

    // Adicionar efeito hover em elementos clicáveis
    const hoverElements = document.querySelectorAll('a, button, .gallery-item');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="custom-cursor-follower"></div>
    </>
  );
}

export default CustomCursor
