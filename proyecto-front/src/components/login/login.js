import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calculaExtraccionSesion } from "../helper/helper";
import app from "../../app.json";
import Loading from "../loading/loading";

const { APIHOST } = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      username: "",
      password: "",
    };
  }
  iniciarSesion() {
    this.setState({ loading: true });

    axios
      .post(`${APIHOST}/usuario/login`, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        if (isNull(res.data.token)) {
          alert("usuario y/o contraseña invalidas");
        } else {
          cookies.set("_s", res.data.token, {
            path: "/",
            expires: calculaExtraccionSesion(),
          });
          this.props.history.push(window.open("/clientes"));
        }

        this.setState({ loading: false });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col
            sm="12"
            xs="12"
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            xl={{ span: 4, offset: 4 }}
          >
            <Row>
              <h2>Iniciar Sesion</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group>
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesion
                </Button>
                <h2>Gracias por su Visita</h2>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
