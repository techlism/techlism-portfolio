import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// document.body.style = 'background:rgb(255,255,255)';
// document.body.style = 'background: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(251,91,163,1) 52%, rgba(255,255,255,1) 100%)';
// document.body.style = "background: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(251,91,163,1) 52%, rgba(255,255,255,1) 100%)";
// document.body.style = "background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(251,91,163,1) 52%, rgba(255,255,255,1) 100%)";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
