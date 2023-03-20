import styles from "./Navbar.module.css"

import React from 'react'

import Nav from "react-bootstrap/Nav";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export const Navbar = () => {
  return (
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
  )
}
