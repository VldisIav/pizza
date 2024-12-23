
// App() это функциональный компонент
// функция возвращает html в разметку! отсюда и название
// то етсь приложение состоит из компонентов
// но тут не html а jsx! (то есть html + js код запускает at the same time)


import React from "react";
import './/scss/app.scss'

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from './assets/pizzas.json'


function App() {
  return (
    <div className="wrapper">
      <div className="block1">
        <div className="text">
        </div>
      </div>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map((obj, index) => (
                <PizzaBlock {...obj} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
    // https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg
  );
}

export default App;

// доку реакта надо читать)