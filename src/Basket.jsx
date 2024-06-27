export default function Basket({ cart }) {
  console.log(cart);
  return (
    <div className="basket-wrapper">
      <div className="basket-header">
        <h3>Basket</h3>
        {/* {cart.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))} */}
      </div>
      {cart.map((item, index) => (
        <div className="basket-item" key={index}>
          <p>{item.id}</p>
        </div>
      ))}
    </div>
  );
}
