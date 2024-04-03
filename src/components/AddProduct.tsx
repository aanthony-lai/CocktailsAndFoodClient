import { useState, useContext, useEffect } from "react";
import styles from "./AddProduct.module.css";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import { CartItem } from "../types/CartItemType";
// import { ShoppingCartContext } from "../App";
import { ShoppingCartContext } from "../ShoppingCartProvider";

interface addProductProps {
  itemId: string;
  image: string;
  name: string;
  price: number;
}

export const AddProduct = ({itemId, image, name, price}: addProductProps) => {
  const [count, setCount] = useState<number>(0);
  const {cartItems, AddToCart, RemoveFromCart} = useContext(ShoppingCartContext);
  

  useEffect(() => {
    cartItems.map((item) => {
      if (item.itemId === itemId) {
        setCount(currentCount => currentCount = item.quantity);
      }
    }) 
  }, []);

  const Add = () => {
    const cartItem: CartItem = {
      itemId: itemId,
      image: image,
      quantity: count,
      name: name,
      singlePrice: price,
      totalPrice: 0
    }
    setCount(count + 1);
    AddToCart(cartItem, itemId);
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
