import styles from "./Product.module.css";

import { useState, useEffect, useRef } from "react";
import Home from "../../routes/Home";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import Foto1 from "../../../src/img/foto1.svg";

const Product = () => {

  const numberRef = useRef(0)

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  useEffect (() => {
    numberRef.current = numberRef.current + 40
  })

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
                        onClick={() => setCount1(count1 - 1)}
                      >
                        -
                      </button>
                      {count1}
                      <button
                        id={styles.second_button}
                        onClick={() => setCount1(count1 + 1)}
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
                        onClick={() => setCount2(count2 - 1)}
                      >
                        -
                      </button>
                      {count2}
                      <button
                        id={styles.second_button}
                        onClick={() => setCount2(count2 + 1)}
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
                        onClick={() => setCount3(count3 - 1)}
                      >
                        -
                      </button>
                      {count3}
                      <button
                        id={styles.second_button}
                        onClick={() => setCount3(count3 + 1)}
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
                        onClick={() => setCount4(count4 - 1)}
                      >
                        -
                      </button>
                      {count4}
                      <button
                        id={styles.second_button}
                        onClick={() => setCount4(count4 + 1)}
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
                        onClick={() => setCount5(count5 - 1)}
                      >
                        -
                      </button>
                      {count5}
                      <button
                        id={styles.second_button}
                        onClick={() => setCount5(count5 + 1)}
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
                        onClick={() => setCount6(count6 - 1)}
                      >
                        -
                      </button>
                      {count6}
                      <button
                        id={styles.second_button}
                        onClick={() => setCount6(count6 + 1)}
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
                <span>R$ {numberRef.current}</span>
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
