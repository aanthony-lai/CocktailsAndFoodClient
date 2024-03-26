import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Food } from "./pages/Food";
import { Beverages } from "./pages/Beverages";
import { Sides } from "./pages/Sides";
import "./App.css";
import { createContext, useState } from "react";
import { CartItem } from "./types/CartItemType";
import { CartContextType } from "./types/GlobalContextTypes";

export const ShoppingCartContext = createContext<CartContextType>({
  cartItems: [],
  AddToCart: (item: CartItem) => {},
  RemoveFromCart: (cartItemId: string) => {},
});

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const AddToCart = (item: CartItem): void => {
    setCartItems((currentItems) => [...currentItems, item]);
  };

  const RemoveFromCart = (cartItemId: string): void => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
          if (item.itemId === cartItemId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }).filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <ShoppingCartContext.Provider value={{ cartItems, AddToCart, RemoveFromCart }}>
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
