import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "Популярности",
    sortProperty: "rating",
  }); // Логика сортировки п

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    fetch(`https://63ece635be929df00cb4a1e8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`) //! Получаем данные с сервера
      .then((response) => response.json()) //! преобразуем данные в JSON
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      }); //! рендерим данные
  }, [categoryId, sortType]); //! сделай запрос на сервер когда комоненты не отрендерены, когда отрендерены не делай, пустой = не отрендерен, не = пустой отрендерен.

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        {/* {items.map((obj) => (isLoading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />))} */}
      </div>
    </>
  );
};

export default Home;
