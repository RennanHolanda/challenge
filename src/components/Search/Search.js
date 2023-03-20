import styles from "./Search.module.css";

import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/Button";

const Search = () => {
  return (
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
  );
};

export default Search;
