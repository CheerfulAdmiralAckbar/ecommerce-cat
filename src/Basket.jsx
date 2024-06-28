export default function Basket({ cart, removeFromCart }) {
  console.log(cart);
  return (
    <div className="basket-container">
      <div className="basket-header">
        <h3>Basket</h3>
      </div>
      <div className="basket-wrapper">
        {cart.map((item, index) => (
          <div key={index} className="basket-item">
            <img src={item.url} alt={item.url} className="basket-item-image" />
            <div className="basket-item-details">
              <p className="basket-item-id">{item.id}</p>
              <p className="basket-item-price">${item.price}</p>
              <p className="basket-item-quantity">Quantity: {item.quantity}</p>
            </div>
            <button
              className="basket-item-button"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
