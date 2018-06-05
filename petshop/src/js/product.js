
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Icon, Button, MediaBox } from 'react-materialize';

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
					<h3 className='header0'><strong>R$ {this.product.price}</strong></h3>
					<Button waves='light' className='btn'>
						<Icon left>shopping_cart</Icon>
						Adicionar ao carrinho
					</Button>
			</div>
		);
	}
}

export default Product; 