
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import {Row, Col, Button} from 'react-materialize';

import '../css/general.css';
import '../css/product.css';
import item from '../resources/racao2.jpg';

class Product extends Component {

	constructor(props){
		super(props)

		this.state = {
			
		}
	}

	render(){
		return(
			<div id='info'>
				<div >
					<h3>Produto</h3>
					<hr class='awesome'/>
				</div>
				<Row>
					<Col s={2} id='imgEdesc'>
						<img src={item} id='productPhoto' alt='food for doggos here'/>
					
						<h4>Ração</h4>
						<p id='desc'>Nham nham, tem gosto de terra suja.</p>
						<hr class='awesome'/>
						<h4><strong>R$ 10,00</strong></h4>
						<Button waves='light' id='butt' onClick="">Adicionar ao carrinho</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Product; 