import React from "react";
import { Container, Row } from "react-bootstrap";
import "../vinos.css";
// import { request } from "../helper/helper";
import DataGrid from "../../grid/grid";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "wine_name",
    text: "Nombre",
  },
  {
    dataField: "liqueur_p",
    text: "Porcentaje Licor",
  },
  {
    dataField: "quantity",
    text: "Cantida (mL)",
  },
  {
    dataField: "years_aged",
    text: "Años",
  },
];

export default class VinosBuscar extends React.Component {
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
      <Container id="vinos-buscar-container">
        <Row>
          <h1>Buscar Vinos</h1>
        </Row>
        <Row>
          {/* <DataGrid url="/usuarios" columns={columns} /> */}
          <DataGrid url="/vino" columns={columns} />
        </Row>
      </Container>
    );
  }
}
