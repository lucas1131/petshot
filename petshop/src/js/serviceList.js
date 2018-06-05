import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Input } from 'react-materialize';
import { Icon, Button } from 'react-materialize';
import { Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom';
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

			let str = service.name.toLowerCase();
			str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
			
			if(str.indexOf(this.state.query) > -1) {
				return (
					<Col s={12} m={6} l={3} >
						<Card header={<CardTitle image={service.image}></CardTitle>}
							actions={[<Link to={'/servicos/' + index}>Agendar</Link>]}>
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
					<Input className='input box-shadow' style={{width: "317px"}} label='Busque um serviço'
						onChange = { (e) => { 
							let str = e.target.value.toLowerCase();
							this.setState( {
								query: str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
							} ) } }/>
				</div>
				<Row style={{marginTop: '50px'}}>
					{services}
				</Row>
			</div>
		);
	}
}

export default ServiceList;