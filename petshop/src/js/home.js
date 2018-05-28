import React, { Component } from 'react'
import { Slider, Slide } from 'react-materialize';
import { Row, Container } from 'react-materialize';
import '../css/home.css';
import im1 from '../resources/runningDogo.jpg';
import im2 from '../resources/catBag.jpg';
import im3 from '../resources/dogShower.jpg';


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

				<Row className='Container'  style={{marginTop: '50px'}}>
					<h3 class='header0'> Our Services </h3>
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

					<h3 class='header0'> Our Products </h3>
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
		);
	}
}

export default Home;