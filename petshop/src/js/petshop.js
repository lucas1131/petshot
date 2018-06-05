/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Header from './header'
import Home from './home'
import PerfilUsuario from './perfilUsuario'
import AdminView from './adminView'
import Product from './product'
import ShoppingCart from './shoppingCart'
import ProductList from './productList';
import ServiceList from './serviceList';
import Login from './login';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

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
			case 'product': return (<Product />)
			case 'shoppingCart': return (<ShoppingCart />)
			case 'productList': return (<ProductList />)
			case 'serviceList': return (<ServiceList />)
			case 'login': return (<Login />)
			default: return (<NotFound />)
		}
	}
}

class Petshop extends Component {
	constructor(props){
		super(props)

		this.handleLogin = this.handleLogin.bind(this)

		let users = getFromSessionStorage("user")
		let user = users ? users[0] : null

		this.state = {
			page: 'home',
			user: user
		}
	}

	handleLogin(Username, Password, Exit) {
		if(Exit){
			this.setState({user: null})
			return
		}

		let users = getFromLocalStorage("user-info")

		for(let i in users){
			if(Username === users[i].username && Password === users[i].password){
					this.setState({user: users[i]})
					storeInSessionStorage("user", users[i])
			}
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div className="petshop">
		 			<Header user={this.state.user} handleLogin={this.handleLogin}/>
		 			<div className="main">
		 				<Route exact path="/" component={Home} />
		 				<Route path="/admin" component={AdminView} />
		 				<Route path="/perfil" component={PerfilUsuario} />
		 			</div>
		 			<Footer className="footer"/>
				</div>
			</BrowserRouter>
		);
	}
}

export default Petshop;