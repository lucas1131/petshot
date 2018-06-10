/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react'
import { Card } from 'react-materialize';
import { Row, Col } from 'react-materialize';
import { Button } from 'react-materialize';

import { ShoppingCartTable } from './editableTable'

import { storeInSessionStorage, getFromSessionStorage } from './mockDB'

import '../css/general.css';

export default class ShoppingCart extends Component {

	constructor(props){
		super(props);

		this.state = {
			children: [],
			totalCost: 0
		}
	}

	updateCost = (arr) => {

		let sum = 0;
		for(let i = 0; i < arr.length; i++) {
			sum += parseInt(arr[i].totalCost);
		}

		this.setState(state => ({
			totalCost: sum
		}));
	}

	onInit = (value) => {
		console.log("Init cart")
		console.log(value)
		this.setState(state => ({
			children: value
		}))
		this.updateCost(value)
	}
	
	onRemove = (i) => {
		let ar = this.state.children;
		let newAr = [];
		for(let index = 0; index < ar.length; index++){
			if(index !== i) newAr.push(ar[index])
		}

		console.log("this.state.children")
		console.log(this.state.children)
		console.log("removed line " + i)
		console.log(newAr)
		
		this.setState(state => ({
			children: newAr
		}));
		
		
		this.updateCost(newAr)
		sessionStorage.setItem("cart", JSON.stringify(newAr))
		// sessionStorage.removeItem("cart")
		// storeInSessionStorage("cart", newAr)
	}

	onChange = (i, name, qtd, total) => {
		let ar = this.state.children;
		ar[i][name] = qtd;
		ar[i].totalCost = total;

		this.setState(state => ({
			children: ar
		}));

		console.log("this.state.children")
		console.log(this.state.children)
		console.log("changeling line " + i)
		console.log(ar)
		
		this.updateCost(this.state.children);
		storeInSessionStorage("cart", ar)
	}

	render() {
		return(
			<div className="container" style={{marginTop: "15px"}}>
				<Row className="center">
					<h1 className="header1">Carrinho</h1>
					<hr className="awesome" />

					<ShoppingCartTable header={[
							{ name: "Produto", prop: "product", type: "text" },
							{ name: "Quantidade", prop: "quantity", type: "number", editable: true },
							{ name: "Valor Un.", prop: "cost", type: "number" },
							{ name: "Valor Total", prop: "totalCost", type: "number" }
						]}
						data={getFromSessionStorage("cart")}
						onInit={this.onInit}
						onChange={this.onChange}
						onRemove={this.onRemove}
					/>

				</Row>
				<Row className="valign-wrapper">
					<Col offset={'l9', 'm7', 's5'}>
						<Card className="center text">
							Valor total da compra: <b>R$ {this.state.totalCost}</b>
						</Card>
					</Col>
					<Col className="valign">
						<Button className="">Comprar</Button>
					</Col>
				</Row>
			</div>
		);
	}
}
