import styles from "./Pagination.module.css"
import { useState } from "react";

import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Pagination = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      setCount(count - 1);
    };
  return (
    <section id={styles.pagination}>
    <p> Página </p>
    <input type="text" id={styles.number} defaultValue={count} />
    <p> de 3</p>
    <button id={styles.first} onClick={handleDecrement}>
      <AiOutlineLeft />
    </button>
    <button id={styles.second} onClick={handleIncrement}>
      <AiOutlineRight />
    </button>
  </section>
  )
}

export default Pagination