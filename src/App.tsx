import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Food } from "./pages/Food";
import { Beverages } from "./pages/Beverages";
import { Sides } from "./pages/Sides";
import "./App.css";
import { createContext, useState } from "react";
import { CartItem } from "./types/CartItemType";
import { CartContextType } from "./types/GlobalContextTypes";

export const ShoppingCartContext = createContext<CartContextType>({
  cartCount: 0,
  cartItems: [],
  AddToCart: (item: CartItem, itemId: string) => {},
  RemoveFromCart: (itemId: string) => {},
});

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const AddToCart = (item: CartItem, itemId: string): void => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex(
        (item) => item.itemId === itemId
      );

      if (itemIndex !== -1) {
        setCartCount(currentCount => cartCount + 1);
        return currentItems.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        setCartCount(currentCount => cartCount + 1);
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  const RemoveFromCart = (itemId: string,): void => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex(
        (item) => item.itemId === itemId
      );

      if (itemIndex !== -1) {
        setCartCount(currentCount => cartCount - 1);
        return currentItems.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item
        ).filter((item) => item.quantity > 0);
      } else {
        return [...currentItems];
      }
    });
  };

  return (
    <Router>
      <ShoppingCartContext.Provider
        value={{ cartCount, cartItems, AddToCart, RemoveFromCart }}>
        <Routes>
          <Route path="/" element={<Food />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/sides" element={<Sides />} />
        </Routes>
      </ShoppingCartContext.Provider>
    </Router>
  );
}

export default App;
