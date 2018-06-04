/* Light Theme stylesheet
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';
import { Container} from 'react-materialize';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import '../css/home.css';

import '../css/carousel.css';
import Carousel from './carousel';
import { carouselContainer } from './carousel'
// import carouselSlidesData from './carousel'

import im1 from '../resources/runningDogo.jpg';
import im2 from '../resources/catBag.jpg';
import im3 from '../resources/dogShower.jpg';
import shower from '../resources/banho.jpg';
import shear from '../resources/tosa.jpg';
import vet from '../resources/veterinario.png';
import castration from '../resources/castracao.png';
import collar from '../resources/collar.jpg';
import food from '../resources/racao2.jpg';
import ball from '../resources/ball.png';

// Data for carousel
const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook"
  }, {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat"
  }, {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook"
  }, {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook"
  }, {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter"
  }, {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
  }, {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
  }
];


class Home extends Component {
	render() {
		return(
			<div>	
				<Row>
					<Slider>
					  <Slide
					    src={im1}
					    title='Agende seu horário!'
					    placement='left'>
					    Confira nossos serviços!
					  </Slide>
					  <Slide
					    src={im2}
					    title='Compre uns trem daora pro seu pet'
					    placement='left'>
					    Deixa de ser muquirana, seu arrombado
					  </Slide>
					  <Slide
					    src={im3}
					    title='Traga seu consagrado para um banho'
					    placement="left">
					    Seu dog entra fedido e sai supimpa
					  </Slide>
					</Slider>
				</Row>

				<div className="container">
					<Row style={{marginTop: '50px'}}>
						<h3 class='header0'> Nossos Serviços </h3>
						<hr class='awesome'/>

						<Row>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={shear}></CardTitle>}
	  						actions={[<a href='#'>Tosa</a>]}>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={castration}></CardTitle>}
	  						actions={[<a href='#'>Castração</a>]}>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={vet}></CardTitle>}
	  						actions={[<a href='#'>Veterinário</a>]}>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={shower}></CardTitle>}
	  						actions={[<a href='#'>Banho</a>]}>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						</Row>

						<p class='default'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						isi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
						</p>

						<h3 class='header0'> Nossos Produtos </h3>
						<hr class='awesome'/>
						<p class='default'>
						<div class="carousel-container"><Carousel slides={carouselSlidesData} />, {carouselContainer}</div>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						isi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
						</p>
					</Row>
				</div>
			</div>
		);
	}
}

export default Home;