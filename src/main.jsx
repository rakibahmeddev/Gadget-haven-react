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
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProductDetail from './components/ProductDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/product/:productId',
        element: <ProductDetail></ProductDetail>,
        loader: ()=> fetch(`/public/products.json`)

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch(`/public/products.json`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
