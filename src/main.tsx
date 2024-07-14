import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import ErrorBoundaries from './components/errorBoundaries/ErrorBoundaries.tsx';
import './index.sass';
import router from './routes/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundaries>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ErrorBoundaries>,
);
