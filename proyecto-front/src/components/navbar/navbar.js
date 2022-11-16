import React from 'react'
import { Navbar, Container, Nav, Button, DropdownButton, Dropdown, Row } from 'react-bootstrap'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	state = {}

	render() {
		return (
			<Navbar fixed='top' id='navbar' bg="primary" expand="lg" variant='dark'>
				<Container>
					<Navbar.Brand href="#home">VINOS <span id='usuario-sub-brand'> </span></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/catalog">Catalogo</Nav.Link>
							<Nav.Link href="/cart">Carro</Nav.Link>

						</Nav>
						<DropdownButton id="dropdown-basic-button" title="Usuario">
							<Dropdown.Header id='dropdown-header'>
								<Row>
									<FontAwesomeIcon icon={faUser} />
								</Row>
								<Row>
									#Usuario#
								</Row>

							</Dropdown.Header>
							<Dropdown.Divider />
							<Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</DropdownButton>
						<Button variant="light" href='/login'>Login</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}