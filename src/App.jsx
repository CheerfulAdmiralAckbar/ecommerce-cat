import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import Basket from "./Basket";
import "./App.css";

function App() {
  const [showBasket, setShowBasket] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
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
            <Basket cart={cart} />
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
