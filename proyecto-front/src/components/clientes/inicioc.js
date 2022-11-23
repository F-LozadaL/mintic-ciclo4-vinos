import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./clientes.css";
import ClientesBuscar from "./CRUD/buscar";
import ClientesCrear from "./CRUD/crear";

export default class clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
    };
  }

  render() {
    return (
      <Container id="clientes-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "buscar" ? (
            <ClientesBuscar />
          ) : (
            <ClientesCrear />
          )}
        </Row>
      </Container>
    );
  }
}
