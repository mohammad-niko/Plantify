import { Table } from "react-bootstrap";
import MakeTBody from "./MakeTBody";

function CartTable({ basketList, totalPrice }) {

  return (
    <div className="cart-table-container">
      <h2 className="cart-title">🪴 Your Plants</h2>
      <Table responsive bordered hover className="cart-table">
        <thead>
          <tr>
            <th>Plant</th>
            <th>Quantity</th>
            <th>Price ($)</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {basketList?.map((item) => (
            <MakeTBody key={item.id} data={item} />
          ))}
          <tr className="total-row">
            <td>Total</td>
            <td></td>
            <td>${totalPrice.toFixed(2)}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}



export default CartTable;