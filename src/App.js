
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


function App() {
  return (
    <div class="wrapper">
      <div className="block1">
        <div className="text">
          <div className="hello3">test info</div>
        </div>
      </div>
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title='Мексиканская' price={500} />
            <PizzaBlock title='Пепперони' price='250' />
            <PizzaBlock title='Острая' price='340' />
            <PizzaBlock title='Мексиканская' price='700' />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// доку реакта надо читать)