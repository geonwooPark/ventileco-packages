import { Navigate, useRoutes } from 'react-router-dom';
import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { errorRoutes } from './error';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth routes
    ...authRoutes,

    // Main routes
    ...mainRoutes,

    // Error routes
    ...errorRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
