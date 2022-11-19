import React from "react";
import { Container, Row } from "react-bootstrap";
import "./clientes.css";
// import { request } from "../helper/helper";
import DataGrid from "../grid/grid";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "name",
    text: "Nombre",
  },
  {
    dataField: "lastname",
    text: "Apellido",
  },
  {
    dataField: "email",
    text: "Correo Electronico",
  },
  {
    dataField: "address",
    text: " Direccion",
  },
  {
    dataField: "balance",
    text: "Balance",
  },
];

export default class ClientesBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   request
  //     .get(this.props.url)
  //     .then((response) => {
  //       this.setState({ rows: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <Container id="clientes-buscar-container">
        <Row>
          <h1>Buscar Clientes</h1>
        </Row>
        <Row>
          {/* <DataGrid url="/usuarios" columns={columns} /> */}
          <DataGrid url="/cliente" columns={columns} />
        </Row>
      </Container>
    );
  }
}
