
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import {Row, Col, Button, MediaBox, Icon} from 'react-materialize';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css';
import '../css/product.css';
import item from '../resources/racao2.jpg';

import ServiceInfo from './serviceInfo';


class Service extends Component {

	constructor(props) {
		super(props)

		let products = getFromLocalStorage("services-info")
		for(let i in products) {
			if(products[i].type === 'service' && products[i].id == this.props.match.params.serviceId){
				this.service = products[i];
			}
		}

	}

	render(){
		// service Id. Use this to fetch correct service from db
		let serviceId = this.props.match.params.serviceId;

		return(
			<div className='center' style={{margin: '50px 0 50px 0'}}>
				<div>
					<h3 className='header0'>{this.service.name}</h3>
					<hr className='awesome'/>
				</div>
				<Row>
					<Col s={12} l={12} m={12} className='center align-content'>
						<MediaBox src={this.service.image} id='productPhoto' alt='food for doggos here'/>
					</Col>
				</Row>
					<p className='default'>{this.service.desc}</p>
					<hr class='awesome'/>
					<h3 className='header0'><strong>R$ {this.service.price}</strong></h3>
					<Button waves='light' className='btn'>
						<Icon left>class</Icon>
						Agendar
					</Button>
			</div>
		);
	}
}

export default Service; 