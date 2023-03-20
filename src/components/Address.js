import styles from "./Address.module.css";

import React from "react";
import { useForm } from "react-hook-form";
import Home from "../routes/Home";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Address = () => {

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = async(e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep)
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res =>res.json()).then(data => {
      // console.log(data);
      setValue('neighborhood', data.bairro)
      setValue('city', data.localidade)
      setValue('state', data.uf)
      setValue('complement', data.complemento)
      setFocus('addressNumber')
    })
  }

  return (
    <div id={styles.product_id}>
      <div id={styles.teste}>
        <div id={styles.container}>
          <div id={styles.add_product}>
            <Link to="/">
              <button id={styles.close}>x</button>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div id={styles.first_entry}>
              <Form.Label>Forma de entrega</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Delivery</option>
                <option value="1">Retira no balcão</option>
              </Form.Select>
            </div>
            <div id={styles.form}>
              <Form.Label>Cep</Form.Label>
              <Form.Label>Bairro</Form.Label>
            </div>
            <div id={styles.form2}>
              <Form.Control id={styles.form_input} required type="text" {...register("cep")} onBlur={checkCEP} placeholder="00000-000" />
              <Form.Control required type="text" {...register("neighborhood")}/>
            </div>
            <div id={styles.form2}>
              <Form.Label>Número</Form.Label>
              <Form.Label>Cidade</Form.Label>
            </div>
            <div id={styles.form2}>
              <Form.Control
                {...register("addressNumber")}
                id={styles.form_input}
                required
                type="text"
                placeholder="0000"
              />
              <Form.Control required type="text" {...register("city")}/>
            </div>
            <div id={styles.form3}>
              <Form.Label>Estado</Form.Label>
              <Form.Control required type="text" placeholder="Estado" {...register("state")}/>
            </div>
            <div id={styles.form3}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control required type="text" placeholder="Complemento"{...register("complement")}/>
            </div>
            <div id={styles.form3}>
              <Form.Label>Referência</Form.Label>
              <Form.Control required type="text" placeholder="Referência" />
            </div>
            <div id={styles.button_form}>
              <Link to="/">
              <Button variant="danger" type="submit">Continuar</Button>{" "}
              </Link>
            </div>
            </form>
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default Address;
