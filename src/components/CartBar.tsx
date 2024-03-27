import { useContext, useState } from "react";
import styles from "./CartBar.module.css";
import { ShoppingCartContext } from "../App";
import { Link } from "react-router-dom";

export const CartBar = () => {
  const { cartItems, cartCount } = useContext(ShoppingCartContext);

  return (
    <div className={styles.cart}>
      <Link to='/cart'>{cartCount}</Link>
    </div>
  );
};
