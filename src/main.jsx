import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'preline/preline';
import Root from './layout/root';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
