
// App() это функциональный компонент
// функция возвращает html в разметку! отсюда и название
// то етсь приложение состоит из компонентов
// но тут не html а jsx! (то есть html + js код запускает at the same time)


import React from "react";
import './/scss/app.scss'

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock/index";
import Skeleton from "./components/PizzaBlock/Skeleton";


function App() {
  const [items, setItems] = React.useState([])
  // const [isLoading, setIsLoading] = React.useState(true)



  React.useEffect(() => {
    fetch('https://66bd126624da2de7ff6ca697.mockapi.io/items')
      .then((res) => { return res.json() })
      .then((arr) => { setItems(arr) })
    // setIsLoading(false)
  }, [])

  return (
    <div className="wrapper">
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
              isLoading ? [... new Array(6)].map((_, index) => <Skeleton key={index} />) :
                items.map((obj) => (
                  <PizzaBlock key={obj.id}  {...obj} />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// доку реакта надо читать)