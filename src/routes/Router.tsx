import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import NotFound from '../views/NotFound';
import App from './../App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export default router;
