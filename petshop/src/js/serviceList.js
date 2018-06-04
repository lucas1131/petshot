import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Input } from 'react-materialize';
import { Icon, Button } from 'react-materialize';
import { Card, CardTitle } from 'react-materialize';

/* Resources */
import shower from '../resources/banho.jpg';
import shear from '../resources/tosa.jpg';
import vet from '../resources/veterinario.png';
import castration from '../resources/castracao.png';

/* Styles */
import '../css/general.css'

class ServiceList extends Component {
	render() {
		return(
			<div className='container' style={{marginTop: '50px'}}>
				<h3 class='header0'> Serviços </h3>
				<hr class='awesome'/>
				<Row style={{marginTop: '50px'}}>
					<Col m={6} s={12} l={4} offset={'m3','l4'}>
							<Input className='input box-shadow' label='Busque um serviço' />
							<Button waves="light" className="btn"><Icon>search</Icon></Button>
					</Col>
				</Row>
				<Row style={{marginTop: '50px'}}>
					<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={shear}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Tosa</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={castration}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Castração</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={vet}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Veterinário</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={shower}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Banho</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={shear}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Tosa</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={castration}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Castração</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={vet}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Veterinário</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
						<Col m={6} s={12} l={3}>
	  					<Card header={<CardTitle image={shower}></CardTitle>}
	  						actions={[<a href='#'>Agendar</a>]}>
	      				<h6 className='customGreen'>Banho</h6>
	      				<p class='default'>
	      					A partir de R$ 40,00
	      				</p>
	    				</Card>
						</Col>
				</Row>
			</div>
		);
	}
}

export default ServiceList;