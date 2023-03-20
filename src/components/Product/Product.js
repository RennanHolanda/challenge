import styles from "./Product.module.css";

import { useState } from "react";
import Home from "../../routes/Home";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import Foto1 from "../../../src/img/foto1.svg";

const Product = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };
  const handleDecrement1 = () => {
    setCount1(count1 - 1);
  };
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };
  const handleDecrement2 = () => {
    setCount2(count2 - 1);
  };
  const handleIncrement3 = () => {
    setCount3(count3 + 1);
  };
  const handleDecrement3 = () => {
    setCount3(count3 - 1);
  };
  const handleIncrement4 = () => {
    setCount4(count4 + 1);
  };
  const handleDecrement4 = () => {
    setCount4(count4 - 1);
  };
  const handleIncrement5 = () => {
    setCount5(count5 + 1);
  };
  const handleDecrement5 = () => {
    setCount5(count5 - 1);
  };
  const handleIncrement6 = () => {
    setCount6(count6 + 1);
  };
  const handleDecrement6 = () => {
    setCount6(count6 - 1);
  };

  return (
    <div className={styles.product_id}>
      <section id={styles.teste}>
        <div id={styles.container}>
          <img src={Foto1} alt="Foto do produto" />
          <div id={styles.add_product}>
            <Link to="/">
              <button id={styles.close}>x</button>
            </Link>
            <div id={styles.order}>
              <div>
                <strong>Pizza G + Coca 2 lt</strong>
                <p>2 Sabores</p>
                <p>Escolha 1 opção</p>
              </div>
              <div id={styles.order_price}>
                <span>Obrigatório</span>
                <p>R$ 40,00</p>
              </div>
            </div>
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
                      <button
                        id={styles.first_button}
                        onClick={handleDecrement1}
                      >
                        -
                      </button>
                      {count1}
                      <button
                        id={styles.second_button}
                        onClick={handleIncrement1}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Sensação</td>
                    <td>RS 40,00</td>
                    <td>
                      <button
                        id={styles.first_button}
                        onClick={handleDecrement2}
                      >
                        -
                      </button>
                      {count2}
                      <button
                        id={styles.second_button}
                        onClick={handleIncrement2}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Calabresa c/ bacon</td>
                    <td>RS 40,00</td>
                    <td>
                      <button
                        id={styles.first_button}
                        onClick={handleDecrement3}
                      >
                        -
                      </button>
                      {count3}
                      <button
                        id={styles.second_button}
                        onClick={handleIncrement3}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Sensação</td>
                    <td>RS 40,00</td>
                    <td>
                      <button
                        id={styles.first_button}
                        onClick={handleDecrement4}
                      >
                        -
                      </button>
                      {count4}
                      <button
                        id={styles.second_button}
                        onClick={handleIncrement4}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Frango/catupity</td>
                    <td>RS 40,00</td>
                    <td className={styles.add_order}>
                      <button
                        id={styles.first_button}
                        onClick={handleDecrement5}
                      >
                        -
                      </button>
                      {count5}
                      <button
                        id={styles.second_button}
                        onClick={handleIncrement5}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Frango/catupity</td>
                    <td>RS 40,00</td>
                    <td className={styles.add_order}>
                      <button
                        id={styles.first_button}
                        onClick={handleDecrement6}
                      >
                        -
                      </button>
                      {count6}
                      <button
                        id={styles.second_button}
                        onClick={handleIncrement6}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div id={styles.total_order}>
              <p>Valor</p>
              <p>
                <span>R$ 40,00</span>
              </p>
            </div>
            <div id={styles.to_add}>
              <Link to="/address">
                <Button variant="danger">Adicionar</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Home />
    </div>
  );
};

export default Product;
