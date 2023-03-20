import styles from "./Product.module.css";

import React from "react";
import Home from "../routes/Home";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import Foto1 from "../../src/img/foto1.svg"


const Product = () => {
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
