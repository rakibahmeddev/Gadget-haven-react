import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'preline/preline';
import Root from './layout/root';
import Home from './Pages/Home';

// You can run this inside useEffect or after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  import('preline').then((preline) => {
    preline.init();
  });
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
