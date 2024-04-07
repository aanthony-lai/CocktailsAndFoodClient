import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Dish } from "../types/FoodType";
import { FoodCard } from "../components/FoodCard";
import { Chat } from "../components/AIChat";
import { CartBar } from "../components/CartBar";
import styles from "./Sides.module.css";
import { ProductContainer } from "../components/ProductContainer";

export const Sides = () => {
  const [sides, setSides] = useState<Dish[]>([]);
  const url = "https://localhost:7009/api/food";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSides(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <Navbar />
      <ProductContainer>
        <div className={styles.categoryBar}>Category</div>
        {sides.map((dish, index) =>
          dish.title.includes("Miso") ? 
          <FoodCard key={index} {...dish} />
          : null)}
      </ProductContainer>

      <Chat />
      <CartBar />
    </main>
  );
};
