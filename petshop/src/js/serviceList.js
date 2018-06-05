import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Input } from 'react-materialize';
import { Icon, Button } from 'react-materialize';
import { Card, CardTitle } from 'react-materialize';
import ServiceInfo from './serviceInfo';

/* Styles */
import '../css/general.css'

class ServiceList extends Component {
	constructor(props) {
		super(props);
		this.state = {query: ''};
	}

	render() {
		let services = ServiceInfo.map((service, index) => {
			
			if(this.state.query === '') {
				return (
					<Col s={12} m={6} l={3} >
						<Card header={<CardTitle image={service.image}></CardTitle>}
							actions={[<a href='#'>Agendar</a>]}>
							<h6 className='customGreen'>{service.name}</h6>
							<p className='default'>{service.price}</p>
						</Card>
					</Col>
				)
			}

			else if(this.state.query === service.name) {
				return (
					<Col s={12} m={6} l={3} >
						<Card header={<CardTitle image={service.image}></CardTitle>}
							actions={[<a href='#'>Agendar</a>]}>
							<h6 className='customGreen'>{service.name}</h6>
							<p className='default'>{service.price}</p>
						</Card>
					</Col>
				)
			}
		});

		return(
			<div className='container' style={{marginTop: '50px'}}>
				<h3 class='header0'> Serviços </h3>
				<hr class='awesome'/>
				<div className="center align-content">
					<Input className='input box-shadow' style={{width: "317px"}} label='Busque um produto'
						onChange = { (e) => { this.setState( {query: e.target.value} ) } }/>
				</div>
				<Row style={{marginTop: '50px'}}>
					{services}
				</Row>
			</div>
		);
	}
}

export default ServiceList;