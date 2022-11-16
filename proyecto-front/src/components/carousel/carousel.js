import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';

export default class carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return ( 
            <div id='carousel'>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.bonuszbrigad.hu/Content/bonuszbrigad_offer/112682/00007_36719.jpg"
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
							src="https://www.colferai.it/wp-content/uploads/2015/07/sld02.jpg"
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
							src="https://www.lacotealos.fr/ressources/images/0a575aa95e8e.jpeg"
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
 
 