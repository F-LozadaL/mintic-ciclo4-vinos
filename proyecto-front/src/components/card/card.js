import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";
import { request } from "../helper/helper";
export default class ficha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter,
      rows: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    request
      .get("/vino")
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.rows);
    return (
      <div>
        {this.state.rows.map((r) => {
          return (
            <Card key={r._id} id="card-5">
              <Card.Img
                variant="top"
                src={require("../../assets/blanco/ALBARINO-MARTIN-CODAX_Vertical_principal.jpg")}
              />
              <Card.Body>
                <Card.Title>{r.wine_name}</Card.Title>
                <Card.Text>
                  $64.9 <br /> grado alcohol: {r.liqueur_p}%
                </Card.Text>
                <Button variant="info">Comprar</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
