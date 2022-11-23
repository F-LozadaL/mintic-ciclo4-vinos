import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../vinos.css";

import { request } from "../../helper/helper";
export default class VinosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vino: {
        wine_name: "",
        liqueur_p: "",
        quantity: "",
        years_aged: "",
      },
    };
  }
  setValue(inicioc, value) {
    this.setState({
      vino: {
        ...this.state.vino,
        [inicioc]: value,
      },
    });
  }
  guardarVino() {
    request
      .post("/vino", this.state.vino)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <Container id="vinoss-crear-container">
        <Row>
          <h1> Crear Vino</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("wine_name", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Porcentaje de Alcohol</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("liqueur_p", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cantidad (mL)</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("quantity", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Años</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("years_aged", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => console.log(this.guardarVino())}
            >
              Guardar Vino
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
