import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import ThemeProvider from './components/ThemeProvider.tsx';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.tsx';
import './index.sass';
import { store } from './redux/index.ts';
import router from './routes/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>,
);
