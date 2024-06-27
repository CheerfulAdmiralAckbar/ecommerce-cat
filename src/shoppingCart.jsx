export default function shoppingCart() {
  return <h3>Shopping</h3>;
}

// import React, { useState } from 'react';

    
function shoppingCart() {
  // State to store the list of products (cats) in the basket
  const [basket, setBasket] = useState([]);

  // Define prices for each product
  const productPrices = {
    'Cat 1': 10,
    'Cat 2': 20,
    'Cat 3': 30,
    'Cat 4': 40,
    'Cat 5': 50,
    'Cat 6': 60,
    'Cat 7': 70,
    'Cat 8': 80,
    'Cat 9': 90,
    'Cat 10': 100,
  
 };

  // Function to handle button clicks
  const handleClick = (product) => {
    console.log(product); // Log the product clicked for debugging

    // Add the product to the basket
    setBasket([...basket, product]);
  };

  // Calculate the total price
  const totalPrice = basket.reduce((total, item) => total + productPrices[item], 0);

  return (
    <div>
      <h2>Products:</h2>
      <div>
        <button onClick={() => handleClick('Cat 1')}>Add Cat 1 ($10)</button>
        <button onClick={() => handleClick('Cat 2')}>Add Cat 2 ($20)</button>
        <button onClick={() => handleClick('Cat 3')}>Add Cat 3 ($30)</button>
         <button onClick={() => handleClick('Cat 4')}>Add Cat 4 ($40)</button>
        <button onClick={() => handleClick('Cat 5')}>Add Cat 5 ($50)</button>
        <button onClick={() => handleClick('Cat 6')}>Add Cat 6 ($60)</button>        
        <button onClick={() => handleClick('Cat 7')}>Add Cat 27($70)</button>
        <button onClick={() => handleClick('Cat 8')}>Add Cat 8 ($80)</button>
         <button onClick={() => handleClick('Cat 9')}>Add Cat 9 ($90)</button>
         <button onClick={() => handleClick('Cat 10')}>Add Cat 10 ($100)</button>
      </div>
      <h2>Basket:</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );

}
