import React from "react";

import { Container } from "react-bootstrap";
import AppRoutes from "../router/router";
import Menu from "../navbar/navbar";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Menu />
        <Container>
          <AppRoutes />
        </Container>
      </>
    );
  }
}
