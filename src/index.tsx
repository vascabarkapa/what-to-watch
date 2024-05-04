import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingScreen from './components/loading/LoadingScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    setLoading(false);
  };

  return (
    <React.StrictMode>
      {loading ? (
        <LoadingScreen onAnimationEnd={handleAnimationEnd} />
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

root.render(<MainApp />);
reportWebVitals();
