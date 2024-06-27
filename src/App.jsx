import { useState } from "react";

import Basket from "./Basket";
import "./App.css";

function App() {
  const [showBasket, setShowBasket] = useState(false);
  return (
    <>
      <h3>Cart</h3>
      <button onClick={() => setShowBasket(!showBasket)}>
        {showBasket ? "Hide" : "Show"} Basket
      </button>
      {showBasket && <Basket />}
    </>
  );
}

export default App;
