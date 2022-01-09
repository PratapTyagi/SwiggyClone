import { useEffect, useState } from "react";
import "./App.css";

import {
  getCategories,
  allRestaurants,
  isExlusiveRestaurants,
  categoryInfo,
} from "./api";
import { Navbar, Card } from "./components";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [getAllRestaurants, setGetAllRestaurants] = useState([]);
  const [isExlusive, setIsExlusive] = useState([]);

  const [getCategory, setGetCategory] = useState("See All");
  const [categoryInfoState, setCategoryInfoState] = useState([]);

  useEffect(async () => {
    const data = await categoryInfo(getCategory);
    setCategoryInfoState(data);
  }, [getCategory]);

  useEffect(async () => {
    const categories = await getCategories();
    setCategories(categories);
  }, []);
  useEffect(async () => {
    const restaurants = await allRestaurants();
    setGetAllRestaurants(restaurants);
  }, []);
  useEffect(async () => {
    const restaurants = await isExlusiveRestaurants();
    setIsExlusive(restaurants);
  }, []);
  return (
    <div className="app">
      <Navbar
        categories={categories}
        className="navbar"
        setGetCategory={setGetCategory}
      />
      <div className="right">
        {getCategory && <h2>{getCategory}</h2>}
        <div className="cards">
          {categoryInfoState.map((data) => {
            return <Card className="card" data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
