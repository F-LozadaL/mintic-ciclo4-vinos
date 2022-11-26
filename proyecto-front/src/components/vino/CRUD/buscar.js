import React from "react";
import { Container, Row } from "react-bootstrap";
import "../vinos.css";
import DataGrid from "../../grid/grid";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

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
    this.state = {
      loading: false,
      idVino: null,
      message: {
        text: "",
        show: false,
      },
    };

    this.onClickEditButton = this.onClickEditButton.bind(this);
  }

  componentDidMount() {}

  onClickEditButton(row) {
    this.props.setIdVino(row._id);
    this.props.changeTab("editar");
    console.log("comp buscar");
  }

  render() {
    return (
      <Container id="vinos-buscar-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />

        <Row>
          <h1>Buscar Vinos</h1>
        </Row>
        <Row>
          {/* <DataGrid url="/usuarios" columns={columns} /> */}
          <DataGrid
            url="/vino"
            columns={columns}
            showEditButton={true}
            onClickEditButton={this.onClickEditButton}
          />
        </Row>
      </Container>
    );
  }
}
