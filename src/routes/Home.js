import styles from "./Home.module.css";


import React from "react";
import { Link } from "react-router-dom";


import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";

import Logo from "../../src/img/logo.svg"
import Foto1 from "../../src/img/foto1.svg"
import Foto2 from "../../src/img/foto2.svg"
import Foto3 from "../../src/img/foto3.svg"
import Foto4 from "../../src/img/foto4.svg"
import Perfil from "../../src/img/perfil.svg"

const Home = () => {

  const handleAlert = () => {
    {Swal.fire("Pedido Realizado com", "Sucesso", "success")}}

  return (
    <div className={styles.area}>
      <section id={styles.first_section}>
        <div id={styles.search}>
          <Form className="d-flex">
            <Form.Control
              id={styles.meet}
              type="search"
              placeholder="Pesquisar..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">
              <AiOutlineSearch />
            </Button>{" "}
          </Form>
        </div>
        <div id={styles.nav}>
          <Nav id={styles.navbar} defaultActiveKey="" as="ul">
            <Nav.Item as="li">
              <Nav.Link id={styles.arrow}>
                <AiOutlineLeft />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className={styles.link} href="">
                Pizzas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className={styles.link} href="">
                Combo Lanche
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className={styles.link} href="">
                Hamburguer
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className={styles.link} href="">
                Sucos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className={styles.link} href="">
                Açais
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link id={styles.arrow}>
                <AiOutlineRight />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className={styles.products}>
          <div id={styles.card}>
            <Link id={styles.image} to="/product">
              <img src={Foto1} alt="Foto do produto" />
              <p>Pizza G + Coca 2 lt </p>
              <p>R$ 40,00</p>
            </Link>
          </div>
          <div id={styles.card}>
            <Link id={styles.image} to="/product">
              <img src={Foto2} alt="Foto do produto" />
              <p>Pizza G + Coca 2 lt </p>
              <p>R$ 40,00</p>
            </Link>
          </div>
          <div id={styles.card}>
            <Link id={styles.image} to="/product">
              <img src={Foto3} alt="Foto do produto" />
              <p>Pizza G + Coca 2 lt </p>
              <p>R$ 40,00</p>
            </Link>
          </div>
          <div id={styles.card}>
            <Link id={styles.image} to="/product">
              <img src={Foto4} alt="Foto do produto" />
              <p>Pizza G + Coca 2 lt </p>
              <p>R$ 40,00</p>
            </Link>
          </div>
          <div id={styles.card}>
            <Link id={styles.image} to="/product">
              <img src={Foto2} alt="Foto do produto" />
              <p>Pizza G + Coca 2 lt </p>
              <p>R$ 40,00</p>
            </Link>
          </div>
        </div>
        <section id={styles.pagination}>
          <p> Página </p>
          <input type="text" id={styles.number} placeholder="1" />
          <p> de 3</p>
          <button id={styles.first}>
            <AiOutlineLeft />
          </button>
          <button id={styles.second}>
            <AiOutlineRight />
          </button>
        </section>
        <div id={styles.profile}>
          <img src={Perfil} alt="Imagem de Perfil" />
          <p>Amanda Morais</p>
        </div>
      </section>
      <section id={styles.second_section}>
        <div id={styles.requests}>
          <img src={Logo} alt="Logo" />
        </div>
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
        </div>
        <div id={styles.amount}>
          <p>Total</p>
          <strong>R$ 40,00</strong>
        </div>
        <div id={styles.checkout}>
          <Button id={styles.buttons} variant="danger" onClick={handleAlert}>
            <AiOutlineCheck />
            Finalizar
          </Button>{" "}
          <Button id={styles.buttons} variant="light">
            <AiOutlineClose />
            Cancelar
          </Button>{" "}
        </div>
      </section>
    </div>
  );
};

export default Home;
