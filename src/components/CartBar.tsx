import { useContext } from "react";
import styles from "./CartBar.module.css";
import { ShoppingCartContext } from "../ShoppingCartProvider";
import { Link } from "react-router-dom";

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
