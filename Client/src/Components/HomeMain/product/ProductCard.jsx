import { StarRating } from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Slice/ProductSlice";

const ProductCard = ({ data, onAddToCart }) => {
  const { id, type, name, stars, price, src, offPrice } = data;
  const dispatch = useDispatch();
  const quantity = useSelector(
    (store) => store.Product.cartLists?.find((item) => item.id === id)?.quantity
  );
  const maxQuantity = 4;

  function hendleAddToCart() {
    if (quantity >= maxQuantity){
     onAddToCart(`you can't add more`,"error")
     return
    }
    dispatch(addToCart(id));
    onAddToCart(`added to list`);
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
