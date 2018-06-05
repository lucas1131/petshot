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
		this.setState(state => ({
			children: value
		}))
		this.updateCost(value)
	}
	
	onRemove = (i) => {
		let ar = this.state.children;
		ar.splice(i, 1);
		
		this.setState(state => ({
			children: ar
		}));

		this.updateCost(ar)
	}

	onChange = (i, name, qtd, total) => {
		let ar = this.state.children;
		ar[i][name] = qtd;
		ar[i].totalCost = total;

		this.setState(state => ({
			children: ar
		}));

		this.updateCost(this.state.children);
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
						data={getFromSessionStorage("Cart")}
						onInit={this.onInit}
						onChange={this.onChange}
						onRemove={this.onRemove}
					/>

				</Row>
				<Row>
					<Col offset={'l9', 'm7', 's5'}>
						<Card className="center text">
							Valor total da compra: <b>R$ {this.state.totalCost}</b>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
