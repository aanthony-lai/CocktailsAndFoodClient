import { useContext } from "react";
import styles from "./Cart.module.css";
import { ShoppingCartContext } from "../App";
import closeIcon from "../assets/closeIcon.webp"
import { Link } from "react-router-dom";
import beef from '../assets/images/BeefStirFry.jpg';
import plusIcon  from "../assets/plus.png";
import minusIcon  from "../assets/minus.png";

export const Cart = () => {
  const {cartItems, AddToCart, RemoveFromCart} = useContext(ShoppingCartContext);
  
  return (
    <main>
      <Link to='/'>
        <img src={closeIcon} className={styles.closeIcon} />
      </Link>
      {cartItems.map((item) => (
        <section className={styles.cartContainer}>
        <div className={styles.cartItem}>
            <img src={item.image} className={styles.productImage}/>
            <div className={styles.group}>
              <p className={styles.productName}>Name</p>
            </div>
            <div className={styles.adjustQuantity}>
              <img src={minusIcon}/>
              <p>{item.quantity}</p>
              <img src={plusIcon}/>
            </div>
        </div>
      </section>
      ))}
      
    </main>
  );
};
