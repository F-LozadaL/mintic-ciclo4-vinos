import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../vinos.css";
import Loading from "../../loading/loading";

import { request } from "../../helper/helper";
export default class VinosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idVino: this.props.getIdVino(),
      loading: false,
      vino: {
        wine_name: "",
        liqueur_p: "",
        quantity: "",
        years_aged: "",
      },
      message: {
        text: "",
        show: false,
      },
    };

    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  componentDidMount() {
    this.getVino();
  }

  getVino() {
    this.setState({ loading: true });
    request
      .get(`/vino/${this.state.idVino}`)
      .then((response) => {
        this.setState({
          vino: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  guardarVino() {
    this.setState({ loading: true });
    request
      .put(`/vino/${this.state.idVino}`, this.state.vino)
      .then((response) => {
        if (response.data.exito) {
          this.props.changeTab("buscar");
        }
        this.setState({ loading: false });
      });
  }
  setValue(inicioc, value) {
    this.setState({
      vino: {
        ...this.state.vino,
        [inicioc]: value,
      },
    });
  }
  render() {
    return (
      <Container id="vinos-crear-container">
        <Loading show={this.state.loading} />

        <Row>
          <h1> Editar Vinos</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={this.state.vino.wine_name}
                onChange={(e) => this.setValue("wine_name", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Porcentaje de Alcohol</Form.Label>
              <Form.Control
                value={this.state.vino.liqueur_p}
                onChange={(e) => this.setValue("liqueur_p", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cantidad (mL)</Form.Label>
              <Form.Control
                value={this.state.vino.quantity}
                onChange={(e) => this.setValue("quantity", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Años</Form.Label>
              <Form.Control
                value={this.state.vino.years_aged}
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
