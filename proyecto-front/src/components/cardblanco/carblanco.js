import React from "react";
import { Card, Button } from "react-bootstrap";
import "./cardblanco.css";

export default class fichablanco extends React.Component {
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
        <h2>Vinos Blancos

        </h2>
        <Card id="card-5">
          <Card.Img
            variant="top"
            src={require("../../assets/blanco/ALBARINO-MARTIN-CODAX_Vertical_principal.jpg")}
          />
          <Card.Body>
            <Card.Title>El Coto|Blanco</Card.Title>
            <Card.Text>
              $64.9 <br /> grado alcohol:14%
            </Card.Text>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>

        <Card id="card-6">
          <Card.Img
            variant="top"
            src={require("../../assets/blanco/EL-COTO-BLANCO_Vertical_principal.jpg")}
          />
          <Card.Body>
            <Card.Title>Martín Códax|Albariño Lías- Rias Baixas</Card.Title>
            <Card.Text>
              $64.9 <br /> grado alcohol:14%
            </Card.Text>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>

        <Card id="card-7">
          <Card.Img
            variant="top"
            src={require("../../assets/blanco/LOS_VASCOS_ROSE_2020_VINCO_Vertical_principal-600x1055.jpg")}
          />
          <Card.Body>
            <Card.Title>Los Vascos|Rosé</Card.Title>
            <Card.Text>
              $64.9 <br /> grado alcohol:14%
            </Card.Text>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
