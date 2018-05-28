import React, { Component } from 'react';
import { Button, Footer, Container } from 'react-materialize';

import Header from './header'
import Home from './home'

import '../css/general.css';
import '../css/footer.css';

/* EXAMPLE */
class Teste extends Component {
	render(){
		return (<div> Teste </div>)
	}
}

class NotFound extends Component {
	render(){
		return (<div> 404 Not Found </div>)
	}
}

class PageContent extends Component {

	render(){
		switch(this.props.page){
			case 'home':
				return (<Home />)
			case 'teste':
				return (<Teste />)
			default:
				return (<NotFound />)
		}
	}
}
/* EXAMPLE */

class Petshop extends Component {
	constructor(props){
		super(props)
		this.state = {
			page: 'home'
		}
	}

	changePage = () => {
		this.setState({
			page: 'teste'
		})
	}

	render() {
		return (
			<div className="petshop">
	 			<Header />
	 			<div className="main wrap">
	 				<PageContent page={this.state.page}/>
	 			</div>
	 			<Footer className="footer"/>
			</div>
		);
	}
}

export default Petshop;