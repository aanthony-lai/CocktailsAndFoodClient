import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartProvider";
import { Link } from "react-router-dom";
import { Drinks } from "../types/DrinksType";
import styles from "./Cart.module.css";
import closeIcon from "../assets/closeIcon.webp"

export const Cart = () => {
  const {cartItems, AddToCart, RemoveFromCart, ClearCart} = useContext(ShoppingCartContext);
  const [total, setTotal] = useState<number>();
  const [suggestions, setSuggestions] = useState<Drinks | undefined>(undefined);
  const suggestionsUrl = "https://localhost:7009/api/chat/suggestions";
  const clearChatUrl = "https://localhost:7009/api/chat/clear"

  useEffect(() => {
    let grandTotal = 0;
    cartItems.map((item) => {
      grandTotal += item.totalPrice;
    });
    setTotal(grandTotal);
  }, [AddToCart, RemoveFromCart]);
  
  useEffect(() => {
    const ClearChat = () => {
      try {
        fetch(clearChatUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error("Failed to send message: ", error);
      }
    };
      const fetchData = async () => {
        try {
          const response = await fetch(suggestionsUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data: Drinks = await response.json();
          setSuggestions(data);

        } catch (error) {
          console.error("Failed to send message: ", error);
        }
      };
      ClearChat();
      fetchData();
  }, []);

  if(cartItems.length === 0) {
    return(
      <>
        <Link to='/' >
          <img src={closeIcon} className={styles.closeIcon}/>
        </Link>
        <p className={styles.empty}>There are no items in the cart.</p>
      </>
    )
  }
  else {
    return (
      <main>
        <Link to='/'>
          <img src={closeIcon} className={styles.closeIcon}/>
        </Link>
        <section className={styles.itemContainer}>
          {cartItems.map((item) => (
            <div className={styles.item}>
              <img src={item.image} className={styles.itemImage}/>
              <div className={styles.itemName}>
                <p>{item.name}</p>
              </div>
              <div className={styles.quantity}>
                <button className={styles.remove} onClick={() => RemoveFromCart(item.itemId)}>-</button>
                <p>{item.quantity}</p>
                <button className={styles.add} onClick={() => AddToCart(item, item.itemId)}>+</button>
              </div>
            </div>
          ))}
          <div className={styles.submitOrder}>
            <button className={styles.orderButton} onClick={ClearCart}>Place order</button>
            <p className={styles.total}>Total: <strong>{total}</strong></p>
          </div>
          {suggestions?.drinks === undefined ? 
            <> 
              <h1 className={styles.header}>Suggestions</h1>
              <p className={styles.loading}>Loading...</p> 
            </> : 
            <h1 className={styles.header}>Suggestions</h1>
          }
          <div className={styles.suggestions}>
          {suggestions?.drinks.map((drink) => (
            <div className={styles.suggestion}>
              <img src={drink.strDrinkThumb} className={styles.suggestionImg}/>
              <p>{drink.strDrink}</p>
            </div>
          ))}
          </div>
        </section>
      </main>
    )
  }
};
