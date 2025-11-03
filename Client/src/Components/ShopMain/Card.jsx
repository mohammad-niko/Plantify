import { useDispatch } from "react-redux";
import { removeFromList } from "../../Redux/Slice/ProductSlice";
import QuantityCounter from "./QuantityCounter";
function Card({ data }) {
  const { id, src, name, quantity, offPrice, price } = data;

  const dispatch = useDispatch();
  function handleRemove() {
    dispatch(removeFromList(id));
  }

  return (
    <div key={id} className="cart-card">
      <img src={src} alt={name} className="cart-img" />
      <div className="cart-info">
        <h4>{name}</h4>
        <p>
          {quantity} x ${offPrice || price}
        </p>

        <QuantityCounter id={id} />
      </div>
    </div>
  );
}

export default Card;
