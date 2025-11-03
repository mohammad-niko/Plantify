import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import Toast from "../HomeMain/product/Toast";

function CartCards({ basketList }) {
  const hookNavigate = useNavigate();
  //Toast
  const [toasts, setToasts] = useState([]);
  const removeFromList = (message, type = "success") => {
    const id = uuid();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, type, show: true },
    ]);
  };
  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  }, []);

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
            <Card key={item.id} data={item} onAddToCartSuccess={removeFromList} />
          ))}
        </div>
      )}
      <div className="toast-container">
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            show={toast.show}
            onClose={() => removeToast(toast.id)}
            toastIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CartCards;
