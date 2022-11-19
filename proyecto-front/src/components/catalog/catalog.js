import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Card from "../card/card";
import "./catalog.css";

export default class carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="catalog">
          <DropdownButton
            id={`dropdown-button-drop`}
            size="sm"
            variant="secondary"
            title="Tipo de Vino"
          >
            <Dropdown.Item eventKey="1">Vino Rojo</Dropdown.Item>
            <Dropdown.Item eventKey="2">VIno Blanco</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id={`dropdown-button-drop`}
            size="sm"
            variant="secondary"
            title="Procedencia"
          >
            <Dropdown.Item eventKey="3">España</Dropdown.Item>
            <Dropdown.Item eventKey="4">U.S.</Dropdown.Item>
          </DropdownButton>
          <Card filter={this.state.filter} />
        </div>
      </div>
    );
  }
}
