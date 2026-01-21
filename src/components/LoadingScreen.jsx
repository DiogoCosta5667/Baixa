import { useState, useEffect } from 'react'
import './LoadingScreen.css'

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progresso de carregamento
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-logo">Baixa</h1>
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="loading-text">Carregando arte...</p>
      </div>
    </div>
  );
}

export default LoadingScreen
