import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.tsx';
import Login from '../pages/Login.tsx';
import Home from '../pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute user>
        <Home />
      </ProtectedRoute>
    ),
  },
]);

export default router;
