import { Navbar } from "../components/Navbar";
import styles from './Food.module.css'
import { useState, useEffect } from "react";
import { Dish } from "../types/FoodType";
import { FoodCard } from "../components/FoodCard";
import { CartBar } from "../components/CartBar";

export const Food = () => {
  const url = "https://iths-2024-recept-grupp9-40k2zx.reky.se/recipes";
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
      <section className={styles.productContainer}>
        <div className={styles.categoryBar}>Category</div>
        {dishes.map((dish) => (
          <FoodCard {...dish}/>
        ))}
        <CartBar />
      </section>
    </main>
  );
};
