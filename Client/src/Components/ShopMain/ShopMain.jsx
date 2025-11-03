import { useSelector } from "react-redux";
import CartTable from "./CartTable";
import CartCards from "./CartCards";

function ShopMain() {
  const basketList = useSelector((store) => store.Product.cartLists);
  const totalPrice = useSelector((store) => store.Product.totalPriceOfCartList);
  return (
    <>
      <CartTable basketList={basketList} totalPrice={totalPrice} />
      <CartCards basketList={basketList}/>
    </>
  );
}

export default ShopMain;
