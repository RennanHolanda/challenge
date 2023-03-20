import styles from "./Cards.module.css"

import { Link } from "react-router-dom";

const Cards = ({id, name, description, price, category_id,image }) => {

  return (
    <div id={styles.card}>
            <Link id={styles.image} to={`/product`}>
              <img src={image} alt="Foto do produto" />
              <p>{name}</p>
              <p>R$ {price}</p>
            </Link>
            </div>
  )
}

export default Cards