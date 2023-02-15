import React from "react";

import "./scss/app.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63ece635be929df00cb4a1e8.mockapi.io/items") //! Получаем данные с сервера
      .then((response) => response.json()) //! преобразуем данные в JSON
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      }); //! рендерим данные
  }, []); //! сделай запрос на сервер когда комоненты не отрендерены, когда отрендерены не делай, пустой = не отрендерен, не = пустой отрендерен.

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
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            {/* {items.map((obj) => (isLoading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
