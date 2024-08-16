import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// благодаря react-dom логика реакта преобразуется в html
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

