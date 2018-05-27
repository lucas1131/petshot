import React, { Component } from 'react';
import { Footer, Container } from 'react-materialize';

import Header from './header'

import '../css/general.css';
import '../css/footer.css';

class Petshop extends Component {
  render() {
    return (
    	<div className="petshop">
 			<Header />
 			<div className="main wrap"> 
 				<Container>CONTEUDO</Container>
 			</div>
 			<Footer className="footer"/>
    	</div>
    );
  }
}

export default Petshop;