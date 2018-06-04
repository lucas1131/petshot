/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Footer } from 'react-materialize';

import Header from './header'
import Home from './home'
import PerfilUsuario from './perfilUsuario'
import AdminView from './adminView'

import '../css/general.css';
import '../css/footer.css';

class NotFound extends Component {
	render(){
		return (<div> 404 Not Found </div>)
	}
}

class PageContent extends Component {
	render(){
		switch(this.props.page){
			case 'home': return (<Home />)
			case 'perfilUsuario': return (<PerfilUsuario />)
			case 'adminView': return (<AdminView />)
			default: return (<NotFound />)
		}
	}
}

class Petshop extends Component {
	constructor(props){
		super(props)
		this.state = {
			// page: 'home'
			page: 'adminView'
		}
	}

	render() {
		return (
			<div className="petshop">
	 			<Header user={{
					background: 'resources/Dog-with-goggles-in-car.jpg',
					image: 'resources/avatar.png',
					name: 'Relâmpago Marquinhos',
					email: 'Catchau@gmail.com'
				}} />
	 			<div className="main wrap">
	 				<PageContent page={this.state.page}/>
	 			</div>
	 			<Footer className="footer"/>
			</div>
		);
	}
}

export default Petshop;