import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'preline/preline';

// You can run this inside useEffect or after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  import('preline').then((preline) => {
    preline.init();
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
