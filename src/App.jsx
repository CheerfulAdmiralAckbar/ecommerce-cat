import { useState } from "react";

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
      <h3>Cart</h3>
      <button onClick={() => setShowBasket(!showBasket)}>
        {showBasket ? "Hide" : "Show"} Basket
      </button>
      <div className="basket-container">{showBasket && <Basket />}</div>
    </>
  );
}

export default App;
