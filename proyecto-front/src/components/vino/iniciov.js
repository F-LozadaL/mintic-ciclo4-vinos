import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./vinos.css";
import VinosBuscar from "./CRUD/buscar";
import VinosCrear from "./CRUD/crear";
import VinosEditar from "./CRUD/editar";

export default class vinos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
      _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdVino = this.setIdVino.bind(this);
    this.getIdVino = this.getIdVino.bind(this);
  }

  changeTab(tab) {
    this.setState({ currentTab: tab });
    console.log("comp iniciov");
  }

  setIdVino(id) {
    this.setState({ _id: id });
  }

  getIdVino() {
    return this.state._id;
  }

  render() {
    return (
      <Container id="vinos-container">
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
            <VinosBuscar
              changeTab={this.changeTab}
              setIdVino={this.setIdVino}
            />
          ) : this.state.currentTab === "crear" ? (
            <VinosCrear changeTab={this.changeTab} />
          ) : (
            <VinosEditar
              changeTab={this.changeTab}
              getIdVino={this.getIdVino}
            />
          )}
        </Row>
      </Container>
    );
  }
}
