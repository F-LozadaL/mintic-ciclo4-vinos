import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";

export default class ficha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
