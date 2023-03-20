import styles from "./OrderQuantity.module.css";

import Table from "react-bootstrap/Table";

const OrderQuantity = () => {
  return (
    <div id={styles.table}>
      <div id={styles.order_quantity}>
        <Table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Valor</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frango/catupity</td>
              <td>RS 40,00</td>
              <td className={styles.add_order}>
                <button id={styles.first_button}>-</button>0
                <button id={styles.second_button}>+</button>
              </td>
            </tr>
            <tr>
              <td>Sensação</td>
              <td>RS 40,00</td>
              <td>
                <button id={styles.first_button}>-</button>0
                <button id={styles.second_button}>+</button>
              </td>
            </tr>
            <tr>
              <td>Calabresa c/ bacon</td>
              <td>RS 40,00</td>
              <td>
                <button id={styles.first_button}>-</button>0
                <button id={styles.second_button}>+</button>
              </td>
            </tr>
            <tr>
              <td>Sensação</td>
              <td>RS 40,00</td>
              <td>
                <button id={styles.first_button}>-</button>0
                <button id={styles.second_button}>+</button>
              </td>
            </tr>
            <tr>
              <td>Frango/catupity</td>
              <td>RS 40,00</td>
              <td className={styles.add_order}>
                <button id={styles.first_button}>-</button>0
                <button id={styles.second_button}>+</button>
              </td>
            </tr>
            <tr>
              <td>Frango/catupity</td>
              <td>RS 40,00</td>
              <td className={styles.add_order}>
                <button id={styles.first_button}>-</button>0
                <button id={styles.second_button}>+</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div id={styles.amount}>
        <p>Total</p>
        <strong>R$ 40,00</strong>
      </div>
    </div>
  );
};

export default OrderQuantity;
