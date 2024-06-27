export default function Basket({ cart }) {
  console.log(cart);
  return (
    <div className="basket-wrapper">
      <div className="basket-header">
        <h3>Basket</h3>
        {cart.map((item, index) => (
          <div key={index} className="basket-item">
            <img src={item.url} alt={item.url} width={100} height={80} />
            <p>{item.id}</p>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
