import { Navbar } from "../components/Navbar";
import styles from "./Beverages.module.css";
import { useState, useEffect, useContext } from "react";
import { Drinks } from "../types/DrinksType";
import { BeverageCard } from "../components/BeverageCard";
import { CartBar } from "../components/CartBar";

export const Beverages = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
  const [drinks, setDrinks] = useState<Drinks | undefined>(undefined);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDrinks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
      <main>
        <Navbar />
        <section className={styles.productContainer}>
          <div className={styles.categoryBar}>Category</div>
          {drinks?.drinks.map((drink) => (
            <BeverageCard
              idDrink={drink.idDrink}
              strDrink={drink.strDrink}
              strDrinkThumb={drink.strDrinkThumb}
            />
          ))}
          <CartBar />
        </section>
      </main>
  );
};
