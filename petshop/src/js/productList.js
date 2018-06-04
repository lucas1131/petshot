import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Input } from 'react-materialize';
import { Icon, Button } from 'react-materialize';
import { Card, CardTitle } from 'react-materialize';

/* Resources */
import collar from '../resources/collar.jpg';
import food from '../resources/racao2.jpg';
import ball from '../resources/ball.png';

/* Styles */
import '../css/general.css'

class ProductList extends Component {
	render() {
		return(
			<div className='container' style={{marginTop: '50px'}}>
				<h3 class='header0'> Produtos </h3>
				<hr class='awesome'/>
				<Row style={{marginTop: '50px'}}>
					<Col m={6} s={12} l={4} offset={'m3','l4'}>
							<Input className='input box-shadow' label='Busque um produto' />
							<Button waves="light" className="btn"><Icon>search</Icon></Button>
					</Col>
				</Row>
				<Row style={{marginTop: '50px'}}>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={food}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Ração Gourmet</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={collar}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Coleira</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={food}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Ração Gourmet</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={ball}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Bolinha</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={ball}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Bolinha</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={ball}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Bolinha</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={collar}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Coleira</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
					<Col m={6} s={12} l={3}>
						<Card header={<CardTitle image={collar}></CardTitle>}
							actions={[<a href='#'>Comprar</a>]}>
	    				<h6 className='customGreen'>Coleira</h6>
	    				<p class='default'>
	    					R$ 40,00
	    				</p>
	  				</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ProductList;