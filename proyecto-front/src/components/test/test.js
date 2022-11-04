import React from 'react';
import { Container } from 'react-bootstrap';
import './test.css'

export default class test extends React.Component {
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
                <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
                    <a class="navbar-brand" href="/o"> Website Name </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#colNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="colNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/e"> Services </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/a"> About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/i"> Contact Us </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <h3> Collapsible Navbar in Bootstrap </h3>
                    Navigation bar (Navbar) is a header or index of the web application. It is always placed on top of the web page.

                    The collapse in bootstrap is used for space-saving of large content. It is hidden and shows the content when the user wants.
                </div>

            </Container>
        );
    }
}
