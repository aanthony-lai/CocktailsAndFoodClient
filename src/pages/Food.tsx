import { Navbar } from "../components/Navbar";
import styles from "./Food.module.css";
import { useState, useEffect } from "react";
import { Dish } from "../types/FoodType";
import { FoodCard } from "../components/FoodCard";
import { CartBar } from "../components/CartBar";
import { Chat } from "../components/AIChat";

export const Food = () => {
  // const url = "https://iths-2024-recept-grupp9-40k2zx.reky.se/recipes";
  const url = "https://localhost:7009/api/food";
  const [dishes, setDishes] = useState<Dish[]>([]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setDishes(data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
      <section className={styles.productContainer}>
        <div className={styles.categoryBar}>Category</div>
        {dishes.map((dish) => (
          <FoodCard {...dish} />
        ))}
      </section>
      <Chat />
      <CartBar />
    </main>
  );
};
