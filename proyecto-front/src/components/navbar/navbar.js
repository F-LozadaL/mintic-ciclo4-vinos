import React from "react";
import { Navbar, Container, Nav, DropdownButton, Dropdown, Row, NavDropdown } from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fixed="top" id= "navbar" bg="dark" expand="lg" variant="dark">
        <Container>        
          <Navbar.Brand href="/index">VinLicorne <span id = "usuario-sub-branm"></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              {/* se agregaron 3 navdropdown */}
    
              <NavDropdown title="TIPO DE VINO" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/fichablanco">Vino Blanco</NavDropdown.Item>
              <NavDropdown.Item href="/card"> Vino Tinto </NavDropdown.Item>
              
              </NavDropdown>
              <NavDropdown title="REGIONES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/card">España</NavDropdown.Item>
              <NavDropdown.Item href="/fichablanco"> Estados Unidos</NavDropdown.Item>
              
              </NavDropdown>
              {/* terminan los 2 navdropdown */}
            </Nav>
            <DropdownButton id="dropdown-basic-button" bg="dark" variant="info" title="Usuario">
              <Dropdown.Header id="dropdown-header"> 
              <Row>
              <FontAwesomeIcon icon={faUserAstronaut}/>
              </Row>
              <Row> #Usuario# </Row>
                
              </Dropdown.Header>
              <Dropdown.Divider />              
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
