import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.sass';
import ErrorBoundaries from './components/errorBoundaries/ErrorBoundaries.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundaries>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundaries>,
);
