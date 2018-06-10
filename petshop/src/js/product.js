
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Icon, Button, MediaBox } from 'react-materialize';
import { Input } from 'react-materialize';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css';
import '../css/product.css';

import item from '../resources/racao2.jpg';

class Product extends Component {

	constructor(props) {
		super(props)

		let products = getFromLocalStorage("products-info")
		for(let i in products) {
			if(products[i].type === 'product' && products[i].id == this.props.match.params.productId){
				this.product = products[i];
			}
		}

		this.state = {
			qtd: 1
		}
	}

	handleChange = (e) => {
		this.setState({qtd: e.target.value})
	}	

	addToCart = (e) => {
		
		let qtd = parseInt(this.state.qtd)
		let cartItem = {
			id: this.product.id,
			product_id: this.product.id,
			type: 'cart',
    	product: this.product.name,
			quantity: qtd,
    	cost: this.product.price,
    	totalCost: qtd*this.product.price
		}

		storeInSessionStorage("cart", cartItem)
	}

	render() {

		return(
			<div className='center' style={{margin: '50px 0 50px 0'}}>
				<div>
					<h3 className='header0'>{this.product.name}</h3>
					<hr className='awesome'/>
				</div>
				<Row>
					<Col s={12} l={12} m={12} className='center align-content'>
						<MediaBox src={this.product.image} id='productPhoto' alt='food for doggos here'/>
					</Col>
				</Row>
					<p className='default'>{this.product.desc}</p>
					<hr class='awesome'/>
					<Row className="center align-content valign-wrapper">
						
						<Input className="settings_input box-shadow" 
									type="number" 
									onChange={this.handleChange} 
									defaultValue={1} 
									min={1} 
									step={1} 
									style={{width: "50px"}}/>

						<span className='header0 valign'><strong>R$ {this.product.price*this.state.qtd}</strong></span>
					</Row>
					<Button waves='light' className='btn' onClick={this.addToCart}>
						<Icon left>shopping_cart</Icon>
						Adicionar ao carrinho
					</Button>
			</div>
		);
	}
}

export default Product; 