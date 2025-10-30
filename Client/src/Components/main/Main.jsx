import Container from "react-bootstrap/Container";
import ProductCard from "./product/ProductCard";
import { useSelector, useDispatch } from "react-redux";

function Main() {
  const products = useSelector((store) => store.Product.products) || [];
  const mmad = useSelector((store) => console.log(store.Product.cartLists))

  return (
    <Container className="main-container">
      {products && products.map((item) => <ProductCard data={item} />)}
    </Container>
  );
}

export default Main;
