/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Footer } from 'react-materialize';

import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom'

import Header from './header'
import Home from './home'
import PerfilUsuario from './perfilUsuario'
import AdminView from './adminView'
import Product from './product'
import ShoppingCart from './shoppingCart'
import ProductList from './productList';
import ServiceList from './serviceList';
import Login from './login';
import Service from './service';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css';
import '../css/footer.css';

class NoMatch extends Component {
	render(){ return ( <div className="container"> <h1 className='header1'> 404 - Not Found </h1> <img src='https://i.ytimg.com/vi/EVn87e53MAw/hqdefault.jpg'/></div> )}
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
			if(users[i].type == 'user' && Username === users[i].username && Password === users[i].password){
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
		 			<Switch>
		 				<Route exact path="/" component={Home} />
		 				<Route exact path="/admin" component={AdminView} />
		 				<Route exact path="/perfil" component={PerfilUsuario} />
		 				<Route exact path="/carrinho" component={ShoppingCart} />
		 				<Route exact path="/produtos" component={ProductList} />
		 				<Route exact path="/produtos/:productId" component={Product} />
		 				<Route exact path="/servicos" component={ServiceList} />
		 				<Route exact path="/servicos/:serviceId" component={Service} />
		 				<Route exact path="/login" component={Login} />
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