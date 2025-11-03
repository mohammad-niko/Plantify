import { useNavigate } from "react-router-dom";
import Card from "./Card";

function CartCards({ basketList }) {
  const hookNavigate = useNavigate();
  function handleClick() {
    hookNavigate("/");
  }

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">🪴 Plants You Love</h2>

      {basketList.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
          />
          <h3>Your cart is empty 🌱</h3>
          <p>Add some lovely plants to make it green again!</p>
          <button className="shop-now-btn" onClick={handleClick}>
            Shop Now
          </button>
        </div>
      ) : (
        <div className="cart-list">
          {basketList?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CartCards;
