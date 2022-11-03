import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css'

export default class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}
	iniciarSesion() {
		alert(`usuario: ${this.state.username} - password: ${this.state.password}`);
	}
	render() {
		return (
			<Container id='login-container' >
				<Row>
					<Col
						sm="12"
						xs='12'
						md={{ span: 4, offset: 4 }}
						lg={{ span: 4, offset: 4 }}
						xl={{ span: 4, offset: 4 }}
					>
						<Row>
							<h2>Iniciar Sesion</h2>
						</Row>
						<Row>
							<Form>
								<Form.Group >
									<Form.Label >Usuario</Form.Label>
									<Form.Control
										onChange={(e => {
											this.setState({ username: e.target.value })
										})} />

								</Form.Group>

								<Form.Group >
									<Form.Label >Contraseña</Form.Label>
									<Form.Control type="password"
										onChange={(e => {
											this.setState({ password: e.target.value })
										})}
									/>
								</Form.Group>

								<Button variant="primary" type="submit"
									onClick={() => {
										this.iniciarSesion();
									}}
								>
									Iniciar Sesion
								</Button>
								<h2>
									Gracias por su Visita
								</h2>
							</Form>
						</Row>
					</Col>
				</Row>

			</Container>
		);
	}
}
