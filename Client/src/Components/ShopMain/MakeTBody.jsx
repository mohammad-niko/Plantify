import { useSelector } from "react-redux";

// function MakeTBody({ data }) {
//   const { id, name, price, stars, quantity } = data;
//   const list = useSelector((store) => store.Product.cartLists) || [];

// console.log(id, name, price, stars, quantity );
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{quantity}</td>
//       <td>{price}</td>
//       <td>{stars}</td>
//     </tr>
//   );
// }

function MakeTBody({ data }) {
  const { name, price, stars, quantity } = data;

  return (
    <tr className="table-row">
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>{"⭐".repeat(stars)}</td>
    </tr>
  );
}

export default MakeTBody;
