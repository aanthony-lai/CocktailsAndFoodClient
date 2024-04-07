import React, { useState, createContext, useContext } from "react";
import { CartItem } from "../types/CartItemType";
import { CartContextType } from "../types/GlobalContextTypes";


export const ShoppingCartContext = createContext<CartContextType>({
      cartCount: 0,
      cartItems: [],
      AddToCart: (item: CartItem, itemId: string) => {},
      RemoveFromCart: (itemId: string) => {},
      ClearCart: () => {},
    });

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const AddToCart = (item: CartItem, itemId: string): void => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex(
        (item) => item.itemId === itemId
      );

      if (itemIndex !== -1) {
        setCartCount(cartCount + 1);
        item.quantity + 1;
        return currentItems.map((item, index) =>
          index === itemIndex ? 
          {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.singlePrice,
          } : item
        );
      } else {
        setCartCount((currentCount) => cartCount + 1);
        return [...currentItems, { ...item, quantity: 1, totalPrice: item.singlePrice }];
      }
    });
  };

  const RemoveFromCart = (itemId: string): void => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex(
        (item) => item.itemId === itemId
      );

      if (itemIndex !== -1) {
        setCartCount((currentCount) => cartCount - 1);
        return currentItems
          .map((item, index) =>
            index === itemIndex
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: item.totalPrice - item.singlePrice,
                }
              : item
          )
          .filter((item) => item.quantity > 0);
      } else {
        return [...currentItems];
      }
    });
  };

  const ClearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartCount, cartItems, AddToCart, RemoveFromCart, ClearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
