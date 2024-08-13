import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// благодаря react-dom логика реакта преобразуется в html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

