
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import {Row, Col, Button, MediaBox, Icon, Input} from 'react-materialize';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css';
import '../css/timeDisplay.css';

import ServiceInfo from './serviceInfo';


class Service extends Component {

	constructor(props) {
		super(props)

		let activeUser = getFromSessionStorage('user')[0]
		console.log(activeUser);
		
		let users = getFromLocalStorage('user-info')
		for(let i in users) {
			if(users[i].username === activeUser.username){
				activeUser = users[i]
				break
			}
		}

		console.log(users)
		console.log(activeUser);

		// service Id. Use this to fetch correct service from db
		let services = getFromLocalStorage('services-info')
		for(let i in services) {
			if(services[i].type === 'service' && services[i].id == this.props.match.params.serviceId){
				this.service = services[i]
			}
		}

	}

  animolz = ["jeogs", "birb", "shrek"]

	render(){
		let serviceId = this.props.match.params.serviceId;

		return(
			<div className='center container' style={{marginTop: '50px'}}>
				<div>
					<h3 className='header0'> {this.service.name} </h3>
					<hr className='awesome'/>
				</div>
				<Row>
					<Col s={12} l={12} m={12} className='center align-content'>
						<MediaBox src={this.service.image} id='productPhoto' alt='service'/>
					</Col>
				</Row>
				<Row> <p className='default'> {this.service.desc} </p> </Row>
				<Row> <hr className='awesome'/> </Row>
				<Row> <h3 className='header0'> <strong>R$ {this.service.price}</strong> </h3> </Row>
				<div className='center align-content'> 
					<Input label='Animal' type='select'>
            { this.animolz.map((name) => <option key={name}>{name}</option>) }
					</Input>
				</div>
				<div className='center align-content'> <Input label='Data' type='date'/> </div>
				<div className='center align-content'> <Input label='Hora' type='time'/> </div>

				<Row>
					<Button waves='light' className='btn'>
						<Icon left>class</Icon>
						Agendar
					</Button>
				</Row>
			</div>
		);
	}
}

export default Service;