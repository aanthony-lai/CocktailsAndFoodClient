import { useState, useContext } from "react";
import styles from "./AddProduct.module.css";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import { ShoppingCartContext } from "../App";
import { CartItem } from "../types/CartItemType";

interface addProductProps {
  itemId: string;
  image: string;
}

export const AddProduct = ({itemId, image}: addProductProps) => {
  const [count, setCount] = useState<number>(0);
  const {cartItems, AddToCart, RemoveFromCart} = useContext(ShoppingCartContext);

  const Add = () => {
    setCount(count + 1);
    const cartItem: CartItem = {
      itemId: itemId,
      image: image,
      quantity: count
    }
    AddToCart(cartItem);
  };

  const Remove = () => {
    setCount(count - 1);
    RemoveFromCart(itemId);
  };

  let quantityCount = <h1 className={styles.quantityCount}>{count}</h1>;
  let remove = <img src={minus} className={styles.remove} onClick={Remove} />;

  if(count === 0) {
    quantityCount = (<h1 className={styles.quantityCount}></h1>);
    remove = (<img className={styles.remove}/>)
  } 

  return (
    <>
      {remove}
      {quantityCount}
      <img src={plus} className={styles.add} onClick={Add}/>
    </>
  );
};
