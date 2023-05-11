import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';

export const childAppRoutes = [
  {
    index: true,
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },

  {
    path: 'home',
    element: <Home />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },
];
