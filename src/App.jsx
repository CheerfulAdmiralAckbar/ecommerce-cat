import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import Basket from "./Basket";
import "./App.css";

function App() {
  const [showBasket, setShowBasket] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Get the item in the cart array that matches the id of the item being added
      const existingItemIndex = prevCart.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        // If the item is already in the cart, increment its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      // If the item does not exist in the cart, add the new item with a quantity of 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      // Map through the cart and decrement the quantity of the item with the same index as the item
      const updatedCart = prevCart
        .map((item) => {
          if (item.id === itemId) {
            // Decrement the quantity if item exists
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        // Filter out items with a quantity of zero
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

  return (
    <>
      <BrowserRouter>
        <h3>Cart</h3>
        <button onClick={() => setShowBasket(!showBasket)}>
          {showBasket ? "Hide" : "Show"} Basket
        </button>
        {showBasket && (
          <div className="basket-container">
            <Basket cart={cart} removeFromCart={removeFromCart} />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
