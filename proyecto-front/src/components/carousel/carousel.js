import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'
export default class carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	state = {}

	render() {
		return (
			<div id='carousel'>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://escuelaversailles.com/wp-content/uploads/tipos-de-vino.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://gastronomicainternacional.com/wp-content/uploads/2020/06/tipos-de-vinos-tintos-uvas.jpg"
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://saborgourmet.com/wp-content/uploads/tipos-de-vinos-tintos-maridaje-clasificacion.jpg"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h5>Third slide label</h5>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>

		);
	}
}