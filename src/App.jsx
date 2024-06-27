import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import Basket from "./Basket";
import "./App.css";

function App() {
  const [showBasket, setShowBasket] = useState(false);
  return (
    <>
      <BrowserRouter>
        <h3>Cart</h3>
        <button onClick={() => setShowBasket(!showBasket)}>
          {showBasket ? "Hide" : "Show"} Basket
        </button>
        {showBasket && <Basket />}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
