import { createBrowserRouter } from 'react-router-dom';

import Details from '../components/details/Details';
import Layout from '../components/layout/Layout';
import NotFound from './../views/notFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: 'details/:details',
        element: <Details />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

export default router;
