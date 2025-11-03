import { StarRating } from "./StarRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Slice/ProductSlice";

const ProductCard = ({ data, onAddToCartSuccess }) => {
  const { id, type, name, stars, price, src, offPrice } = data;
  const dispatch = useDispatch();

  function hendleAddToCart() {
   dispatch(addToCart(id))
  onAddToCartSuccess(`🛒 ${name}added to cart list`);
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={src} alt={`${type} img`} className="product-image" />

        <div className="hover-actions">
          <div className="cart-icon-wrapper">
            <span
              onClick={hendleAddToCart}
              role="img"
              aria-label="shopping cart"
            >
              <i className="bi bi-basket"></i>
            </span>
          </div>

          <div className="add-to-cart-text">Add to cart</div>
        </div>
      </div>

      <div className="product-details">
        <p className="product-category">{type}</p>

        <h3 className="product-name">{name}</h3>

        <StarRating rating={stars} />

        <div className="product-price-and-offPrice">
          <p className={offPrice ? "product-offPrice" : "product-price"}>
            {price}
          </p>
          {offPrice && <p className="product-price">{offPrice}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
