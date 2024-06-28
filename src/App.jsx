import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import home from 

function App() {
  const [basket, setBasket] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const productPrices = {
    "Cat 1": 10,
    "Cat 2": 20,
    "Cat 3": 30,
    "Cat 4": 40,
    "Cat 5": 50,
    "Cat 6": 60,
    "Cat 7": 70,
    "Cat 8": 80,
    "Cat 9": 90,
    "Cat 10": 100,
  };

  // Function to handle button clicks
  const handleClick = (product) => {
    console.log(product); // Log the product clicked for debugging

    // Add the product to the basket
    setBasket([...basket, product]);
  };

  const handleRemove =(product) => {
    console.log(`removing ${product}`); //log the product to be removed for debugging 

    //remove the first instance of the product from basket
    const index =basket.indexOf(product);
    if (index !==-1){
      setBasket(basket.filter((_,i) => i !== index));
    }
  }

  // Calculate the total price
  const totalPrice = basket.reduce(
    (total, item) => total + productPrices[item],
    0
  );

  return (

    <div className="App">
      <h3>Cart</h3>
      <button onClick={() => setShowBasket(!showBasket)}>
        {showBasket ? "Hide" : "Show"} Basket
      </button>
      {showBasket && (
        <>
          <h2>Products:</h2>
          <div>
            {Object.keys(productPrices).map((product, index) => (
              <button key={index} onClick={() => handleClick(product)}>
                Add {product} (${productPrices[product]})
              </button>
            ))}
          </div>
          <h2>Basket:</h2>
          <ul>
            {basket.map((item, index) => (
              <li key={index}>
                {item} (${productPrices[item]})
                <button onClick={()=> handleRemove(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default App;


