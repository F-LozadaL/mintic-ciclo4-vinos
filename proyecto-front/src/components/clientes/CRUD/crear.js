import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../clientes.css";

import { request } from "../../helper/helper";
export default class ClientesCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empleado: {
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        telefono: "",
        mail: "",
        direccion: "",
      },
      cliente: {
        name: "",
        lastname: "",
        email: "",
        address: "",
      },
    };
  }
  setValue(inicioc, value) {
    this.setState({
      cliente: {
        ...this.state.cliente,
        [inicioc]: value,
      },
    });
  }
  guardarClientes() {
    request
      .post("/cliente", this.state.cliente)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <Container id="clientes-crear-container">
        <Row>
          <h1> Crear Clientes</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("name", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("lastname", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("email", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("address", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => console.log(this.guardarClientes())}
            >
              Guardar Vino
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
