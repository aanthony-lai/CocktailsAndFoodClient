import { Drink } from "../types/DrinksType";
import { AddProduct } from "./AddProduct";
import styles from "./BeverageCard.module.css";

export const BeverageCard = ( props: Drink ) => {
  
  
  return (
    <div className={styles.productCard}>
      <h3>{props.strDrink}</h3>
      <AddProduct itemId={props.idDrink} image={props.strDrinkThumb} 
        name={props.strDrink} price={props.price}/>
      <img src={props.strDrinkThumb} className={styles.productImg} />
    </div>
  );
};
