import styles from "./Checkout.module.css";

import { ApiAlert } from "../../services/ApiAlert";
import Button from "react-bootstrap/Button";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Checkout = () => {
  return (
    <div id={styles.checkout}>
      <Button id={styles.buttons} variant="danger" onClick={ApiAlert}>
        <AiOutlineCheck />
        Finalizar
      </Button>{" "}
      <Button id={styles.buttons} variant="light">
        <AiOutlineClose />
        Cancelar
      </Button>{" "}
    </div>
  );
};

export default Checkout;
