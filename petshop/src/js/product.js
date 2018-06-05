
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Icon, Button } from 'react-materialize';

import '../css/general.css';
import '../css/product.css';

import item from '../resources/racao2.jpg';

class Product extends Component {
	render() {
		return(
			<div className='center' style={{margin: '50px 0 50px 0'}}>
				<div>
					<h3 className='header0'>Rassaum</h3>
					<hr className='awesome'/>
				</div>
				<Row>
					<Col s={12}>
						<img src={item} id='productPhoto' alt='food for doggos here'/>
					
						<p className='default'>Nham nham, tem gosto de terra suja.</p>
						<hr class='awesome'/>
						<h3 className='header0'><strong>R$ 10,00</strong></h3>
						<Button waves='light' className='btn'>
							<Icon left>shopping_cart</Icon>
							Adicionar ao carrinho
						</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Product; 