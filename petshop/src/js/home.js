import React, { Component } from 'react'
import { Slider, Slide } from 'react-materialize';
import { Row, Container } from 'react-materialize';
import { Col, Card, CardTitle } from 'react-materialize';
import '../css/home.css';
import im1 from '../resources/runningDogo.jpg';
import im2 from '../resources/catBag.jpg';
import im3 from '../resources/dogShower.jpg';
import shower from '../resources/banho.jpg';
import shear from '../resources/tosa.jpg';
import vet from '../resources/veterinario.png';
import castration from '../resources/castracao.png';


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