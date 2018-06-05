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
import ShoppingCart from './shoppingCart'
import ProductList from './productList';
import ServiceList from './serviceList';
import Login from './login';

import '../css/general.css';
import '../css/footer.css';

export function storeInLocalStorage(key, obj){ 
	localStorage.setItem(key, JSON.stringify(obj)) 
}

export function getFromLocalStorage(key){ 
	return JSON.parse(localStorage.getItem(key)) 
}

export function storeInSessionStorage(key, obj){ 
	sessionStorage.setItem(key, JSON.stringify(obj)) 
}

export function getFromSessionStorage(key){ 
	return JSON.parse(sessionStorage.getItem(key)) 
}

function populateDB(){

	let productList = []
	let product1 = { name: "Rassaum", cost: 20 }
	let product2 = { name: "Raçã", cost: 40 }

	let list = []
	let item1 = {
    product: "Rassaum",
		quantity: 1,
		cost: 20,
		totalCost: 0
  }
  item1.totalCost = item1.cost*item1.quantity;

  let item2 = {
    product: "Raçã sabor maçã",
		quantity: 2,
		cost: 40,
		totalCost: 0
  }
  item2.totalCost = item2.cost*item2.quantity;

  productList.push(product1)
  productList.push(product2)
  list.push(item1)
  list.push(item2)
	storeInSessionStorage("Cart", list)
	storeInSessionStorage("Cart", list)
}

populateDB()

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
		this.state = {
			page: 'shoppingCart',
			user: null
		}
	}

	render() {
		return (
			<div className="petshop">
	 			<Header user={this.state.user} />
	 			<div className="main wrap">
	 				<PageContent page={this.state.page}/>
	 			</div>
	 			<Footer className="footer"/>
			</div>
		);
	}
}

export default Petshop;