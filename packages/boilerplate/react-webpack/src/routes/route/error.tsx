import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

// ----------------------------------------------------------------------

const Page404 = lazy(() => import('@src/pages/error/404'));

// ----------------------------------------------------------------------

export const errorRoutes = [
  {
    element: <Outlet />,
    children: [{ path: '404', element: <Page404 /> }],
  },
];
