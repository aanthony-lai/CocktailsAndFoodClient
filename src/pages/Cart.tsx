import { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { ShoppingCartContext } from "../ShoppingCartProvider";
import closeIcon from "../assets/closeIcon.webp"
import { Link } from "react-router-dom";
import { Drinks } from "../types/DrinksType";

export const Cart = () => {
  const {cartItems, AddToCart, RemoveFromCart, ClearCart} = useContext(ShoppingCartContext);
  const [total, setTotal] = useState<number>();
  const [suggestions, setSuggestions] = useState<Drinks | undefined>(undefined);
  const url = "https://localhost:7009/api/chat";

  useEffect(() => {
    let grandTotal = 0;
    cartItems.map((item) => {
      grandTotal += item.totalPrice;
    });
    setTotal(grandTotal);
  }, [AddToCart, RemoveFromCart]);
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, body: JSON.stringify(
              "It's very important that you only reply with a JSON response because your " + 
              "answer is going to be deseriazlied to JavaScript objects. " + 
              "Give me five random drink in a JSON response. Keep the original " + 
              "names of the properties in drinks. " + 
              "Do not change them. The format should like this: { drinks: [put the drinks in here] }."
            ),
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
    
      fetchData();
  }, []);
  
  // const ClearChat = async() => {
  //   try {
  //     const response = await fetch("https://localhost:7009/api/chat/clear", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     });
      
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
      
  //   } catch (error) {
  //     console.error("Failed to send message: ", error);
  //   }
  // }

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
          {suggestions?.drinks.length === 0 ? 
            <></> : 
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
