import React, { useState, useEffect, FC } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingScreen from './components/loading/LoadingScreen';
import { createStore } from 'redux';
import rootReducer from './redux/root';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const MainApp: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <LoadingScreen onAnimationEnd={() => setLoading(false)} />
      ) : (
        <Provider store={store}>
          <App />
        </Provider>
      )}
    </React.StrictMode>
  );
};

root.render(<MainApp />);
