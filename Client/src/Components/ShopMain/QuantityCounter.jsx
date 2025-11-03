import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increament,
  removeFromList,
} from "../../Redux/Slice/ProductSlice";
import { Trash2 } from "lucide-react";

function QuantityCounter({ id, onAddToCartSuccess }) {
  const min = 1;
  const max = 4;
  const dispatch = useDispatch();

  const item = useSelector((store) =>
    store.Product.cartLists.find((item) => item.id === id)
  );

  if (!item) return null;

  const quantity = item.quantity;

  const handleDecrement = () => {
    if (quantity === min) {
      dispatch(removeFromList(id));
      onAddToCartSuccess(` remove from list`);
    } else {
      dispatch(decrement(id));
    }
  };

  const handleIncrement = () => {
    dispatch(increament(id));
  };

  return (
    <div className="quantity-counter">
      <button
        className={`counter-button decrement ${
          quantity === min ? "remove" : ""
        }`}
        onClick={handleDecrement}
      >
        {quantity === min ? <Trash2 size={18} strokeWidth={2} /> : "−"}
      </button>

      <span className="counter-value">{quantity}</span>

      <button
        className={`counter-button increment ${
          quantity === max ? "disabled" : ""
        }`}
        onClick={handleIncrement}
        disabled={quantity === max}
      >
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
