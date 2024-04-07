import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartProvider";
import { Link } from "react-router-dom";
import styles from "./CartBar.module.css";

export const CartBar = () => {
  const { cartCount } = useContext(ShoppingCartContext);

  if(cartCount === 0) {
    return <> </>
  } 
  else {
    return (
      <div className={styles.cart}>
        <Link to='/cart'>{cartCount}</Link>
      </div>
    );
  } 
};
