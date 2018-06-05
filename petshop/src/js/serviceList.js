import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Input } from 'react-materialize';
import { Icon, Button } from 'react-materialize';
import { Card, CardTitle } from 'react-materialize';
import ServiceInfo from './serviceInfo';

/* Styles */
import '../css/general.css'

class ServiceList extends Component {
	render() {
		let services = ServiceInfo.map((service, index) => {
			return (
				// sets the size of the card for each type of screen
				<Col s={12} m={6} l={3} >
					<Card header={<CardTitle image={service.image}></CardTitle>}
						actions={[<a href='#'>Agendar </a>]}>
						<h6 className='customGreen'>{service.name}</h6>
						<p className='default'>{service.price}</p>
					</Card>
				</Col>
			)
		});

		return(
			<div className='container' style={{marginTop: '50px'}}>
				<h3 class='header0'> Serviços </h3>
				<hr class='awesome'/>
				<Row style={{marginTop: '50px'}}>
					<Col m={6} s={12} l={4} offset={'m3 l4'}>
							<Input className='input box-shadow' label='Busque um serviço' />
							<Button waves='light' className='btn'><Icon>search</Icon></Button>
					</Col>
				</Row>
				<Row style={{marginTop: '50px'}}>
					{services}
				</Row>
			</div>
		);
	}
}

export default ServiceList;