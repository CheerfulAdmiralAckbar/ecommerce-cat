// import { useState } from "react";
// import shoppingCart from "./shoppingCart";

// import Basket from "./Basket";
// import "./App.css";
// import React from "react";

// function App() {

//   const [showBasket, setShowBasket] = useState(false);
//   return (
//     <>
//       <h3>Cart</h3>
//       <button onClick={() => setShowBasket(!showBasket)}>
//         {showBasket ? "Hide" : "Show"} Basket
//       </button>
//       {showBasket && <Basket />}
//         const productPrices = {
//     'Cat 1': 10,
//     'Cat 2': 20,
//     'Cat 3': 30,
//     'Cat 4': 40,
//     'Cat 5': 50,
//     'Cat 6': 60,
//     'Cat 7': 70,
//     'Cat 8': 80,
//     'Cat 9': 90,
//     'Cat 10': 100,
//         )
      
    

//       {/* Function to handle button clicks */}
//   const handleClick (product) {
//     console.log(product); // Log the product clicked for debugging */}

//   //   /* // Add the product to the basket
//     setBasket([...basket, product]); 

//    Calculate the total price
//   const totalPrice = basket.reduce((total, item)  total + productPrices[item], 0);

//   return ( 
//     <div>
//       <h2>Products:</h2>
//       <div>
//         <button onClick={() => handleClick('Cat 1')}>Add Cat 1 ($10)</button>
//         <button onClick={() => handleClick('Cat 2')}>Add Cat 2 ($20)</button>
//         <button onClick={() => handleClick('Cat 3')}>Add Cat 3 ($30)</button>
//          <button onClick={() => handleClick('Cat 4')}>Add Cat 4 ($40)</button>
//         <button onClick={() => handleClick('Cat 5')}>Add Cat 5 ($50)</button>
//         <button onClick={() => handleClick('Cat 6')}>Add Cat 6 ($60)</button>        
//         <button onClick={() => handleClick('Cat 7')}>Add Cat 27($70)</button>
//         <button onClick={() => handleClick('Cat 8')}>Add Cat 8 ($80)</button>
//          <button onClick={() => handleClick('Cat 9')}>Add Cat 9 ($90)</button>
//          <button onClick={() => handleClick('Cat 10')}>Add Cat 10 ($100)</button>
//       </div>
//       <h2>Basket:</h2>
//       <ul>
//         {basket.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <h2>Total Price: ${totalPrice}</h2>
//     </div>
  

//     </>
//       );
//   }


import React, { useState } from "react";
import "./App.css";

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

 


// export default App;
