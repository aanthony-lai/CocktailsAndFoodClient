import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Food } from "./pages/Food";
import { Beverages } from "./pages/Beverages";
import { Sides } from "./pages/Sides";
import { Cart } from "./pages/Cart";
import { ShoppingCartProvider } from "./ShoppingCartProvider";

function App() {

  return (
    <Router>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Food />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/sides" element={<Sides />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
}

export default App;
