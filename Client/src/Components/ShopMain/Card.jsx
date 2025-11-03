import QuantityCounter from "./QuantityCounter";
function Card({ data, onAddToCartSuccess }) {
  const { id, src, name, quantity, offPrice, price } = data;

  return (
    <div key={id} className="cart-card">
      <img src={src} alt={name} className="cart-img" />
      <div className="cart-info">
        <h4>{name}</h4>
        <p>
          {quantity} x ${offPrice || price}
        </p>

        <QuantityCounter id={id} onAddToCartSuccess={onAddToCartSuccess}/>
      </div>
    </div>
  );
}

export default Card;
