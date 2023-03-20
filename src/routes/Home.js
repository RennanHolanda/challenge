import styles from "./Home.module.css";
import { useState, useEffect } from "react";

import Api from "../services/Api";

import Logo from "../../src/img/logo.svg";
import Perfil from "../../src/img/perfil.svg";
import Cards from "../components/Card/Cards";
import { Navbar } from "../components/Navbar/Navbar";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import OrderQuantity from "../components/OrderQuantity/OrderQuantity";
import Checkout from "../components/Checkout/Checkout";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await Api.get("/products");
      console.log(response.data);
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <div className={styles.area}>
      <section id={styles.first_section}>
        <Search />
        <Navbar />
        <div className={styles.products}>
          {products.map((product) => (
            <Cards
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <Pagination />
        <div id={styles.profile}>
          <img src={Perfil} alt="Imagem de Perfil" />
          <p>Amanda Morais</p>
        </div>
      </section>
      <section id={styles.second_section}>
        <div id={styles.requests}>
          <img src={Logo} alt="Logo" />
        </div>
        <OrderQuantity />
        <Checkout />
      </section>
    </div>
  );
};

export default Home;
