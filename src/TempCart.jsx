function TempCart({ cart, setCart }) {
  if (cart.length === 0) {
    return <h2>🛒 Cart empty</h2>;
  }

  return (
    <div>
      <h2>My Cart</h2>

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} width="80" />
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default TempCart;