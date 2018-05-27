import React, { Component } from 'react';
import { Button, Footer, Container } from 'react-materialize';

import Header from './header'

import '../css/general.css';
import '../css/footer.css';

// EXAMPLE
class TestPage extends Component {

	render(){
		if(this.props.page === 1) return (
			<div className="main wrap"> 
 				<Container>batata</Container>
 			</div>
 		)
		else if(this.props.page === 2) return (
			<div className="main wrap"> 
 				<Container>batataAAAAAAAAAAAAA SKATEEEEEEE</Container>
 			</div>
 		)
	}
}

// var content = <TestPage />
// var page = 1;
class Petshop extends Component {

	constructor(props){
		super(props)
		this.state = {
			page: 1
		}
	}

	changePage = () => {
		this.setState({
			page: 2
		})
	}

	render() {
	    return (
	    	<div className="petshop">
	 			<Header />
	 			<Button onClick={this.changePage} />
	 			<TestPage page={this.state.page}/>
	 			<Footer className="footer"/>
	    	</div>
	    );
	}

}

export default Petshop;