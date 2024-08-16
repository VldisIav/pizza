
// App() это функциональный компонент
// функция возвращает html в разметку! отсюда и название
// то етсь приложение состоит из компонентов
// но тут не html а jsx! (то есть html + js код запускает at the same time)


import React from "react";
import './/scss/app.scss'


import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* {pathname === '/' && <Home />} */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// доку реакта надо читать)