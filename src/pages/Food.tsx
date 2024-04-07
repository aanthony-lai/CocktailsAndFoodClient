import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Dish } from "../types/FoodType";
import { FoodCard } from "../components/FoodCard";
import { CartBar } from "../components/CartBar";
import { Chat } from "../components/AIChat";
import styles from "./Food.module.css";
import { ProductContainer } from "../components/ProductContainer";

export const Food = () => {
  const url = "https://localhost:7009/api/food";
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDishes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <Navbar />
      <ProductContainer>
      <div className={styles.categoryBar}>Category</div>
          {dishes.map((dish, index) =>
            dish.title.includes("Miso") ? null : <FoodCard key={index} {...dish} />
          )}
      </ProductContainer>
      <Chat />
      <CartBar />
    </main>
  );
};
