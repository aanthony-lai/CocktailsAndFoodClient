import { Navbar } from "../components/Navbar";
import styles from "./Beverages.module.css";
import { useState, useEffect } from "react";
import { Drinks } from "../types/DrinksType";
import { BeverageCard } from "../components/BeverageCard";
import { CartBar } from "../components/CartBar";
import { Chat } from "../components/AIChat";
import { ProductContainer } from "../components/ProductContainer";

export const Beverages = () => {
  const url = "https://localhost:7009/api/drinks";
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
      <ProductContainer>
      <div className={styles.categoryBar}>Category</div>
        {drinks?.drinks.map((drink) => (
          <BeverageCard
            idDrink={drink.idDrink}
            strDrink={drink.strDrink}
            strDrinkThumb={drink.strDrinkThumb}
            price={119}/>
        ))}
      </ProductContainer>
      <Chat />
      <CartBar />
    </main>
  )
};
