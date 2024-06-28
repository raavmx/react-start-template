import React from 'react';
import ReactDOM from 'react-dom/client';
import "./js/bootstrap.bundle.min.js";
import './index.scss';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
