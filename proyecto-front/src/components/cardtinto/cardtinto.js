import React from "react";
import { Card, Button } from "react-bootstrap";
import "./cardtinto.css";

export default class fichatinto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 style={{ marginTop: 50 }}>
          <br /> VinLicorne
        </h1>
        <h2>Vino Tinto

        </h2>
        <Card id="card-1"  >

          <Card.Img
            variant="top"
            src={require("../../assets/tinto/CUATRO-PASOS-TINTO_Vertical_principal.jpg")}
          />
          <Card.Body>
            <Card.Title>Martín Códax|Cuatro Pasos</Card.Title>
            <Card.Text>$64.9 <br /> grado alcohol:14%</Card.Text>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>

        <Card id="card-2">
          <Card.Img
            variant="top"
            src={require("../../assets/tinto/EL-COTO-DE-IMAZ-RESERVA_Vertical_principal-600x1055.jpg")}
          />
          <Card.Body>
            <Card.Title>El Coto|Coto De Imaz Reserva</Card.Title>
            <Card.Text>$64.9 <br /> grado alcohol:14%</Card.Text>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>

        <Card id="card-3">
          <Card.Img
            variant="top"
            src={require("../../assets/tinto/GERNOT-LANGES_Vertical_principal-600x1055.jpg")}
          />
          <Card.Body>
            <Card.Title>Norton|Gernot Langes</Card.Title>
            <Card.Text>$64.9 <br /> grado alcohol:14%</Card.Text>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>

        <Card id="card-4">
          <Card.Img
            variant="top"
            src={require("../../assets/tinto/MAT_MIDNIGHT_Vertical_principal.jpg")}
          />

          <Card.Body>
            <Card.Title>Ménage á Trois|Midnight Red</Card.Title>
            <Card.Text>$64.9 <br /> grado alcohol:14%</Card.Text>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>



      </div>
    );
  }
}
