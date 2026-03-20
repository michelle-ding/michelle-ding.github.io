import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);
reportWebVitals();
