import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { childAppRoutes } from './utils/childAppRoutes';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: childAppRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
