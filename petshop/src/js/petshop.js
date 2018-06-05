/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Footer } from 'react-materialize';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Header from './header'
import Home from './home'
import PerfilUsuario from './perfilUsuario'
import AdminView from './adminView'

import '../css/general.css';
import '../css/footer.css';

class NoMatch extends Component {
	render(){ return ( <div className="container"> <h1 className='header1'> 404 - Not Found </h1> <img src='https://i.ytimg.com/vi/EVn87e53MAw/hqdefault.jpg'/></div> )}
}

class Petshop extends Component {
	constructor(props){
		super(props)
		this.state = {
			page: 'home',
			user: null 
		}

		this.handleLogin = this.handleLogin.bind(this)
	}

	handleLogin(Username, Password, Exit) {
		if(Exit){
			this.setState({user: null})
			return
		}
		if(Username == "user1"){
			this.setState({user:
			{
				name: 'Relampago Marquinhos',
				image: 'resources/avatar.png',
				background: 'resources/Dog-with-goggles-in-car.jpg',
				email: 'relampago@marquinhos.com'
			}})
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div className="petshop">
		 			<Header user={this.state.user} handleLogin={this.handleLogin}/>
		 			<div className="main">
		 			<Switch>
		 				<Route exact path="/" component={Home} />
		 				<Route path="/admin" component={AdminView} />
		 				<Route path="/perfil" component={PerfilUsuario} />
		 				<Route path="/carrinho" />
		 				<Route path="/produtos" />
		 				<Route path="/servicos" />
		 				<Route component={NoMatch} />
		 			</Switch>
		 			</div>
		 			<Footer className="footer"/>
				</div>
			</BrowserRouter>
		);
	}
}

export default Petshop;