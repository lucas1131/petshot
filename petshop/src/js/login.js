/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { Row, Col } from 'react-materialize';

import '../css/general.css';
import '../css/login.css';

class Login extends Component {

	// Function to check if inputs are correct
	validate = (e) => {
		return true
	}

	// Used primarily for ENTER press submission
	handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      if(this.validate(e)) {
      	console.log("validated input")
      	this.submit(e)
      }
      else { console.log("pressed key " + e.key)}
    }
  }

  submit = (e) => {
  	console.log("submitting")
  	if(this.validate(e)) this.submit(e)
  }

	render() {
		return(
			<div className="container">
				<h1 className='header1 center'>Login</h1>
				<form>
					<Col>
						<Input name="username" 
								className='input box-shadow' 
								label='Usuário'
								onChange={this.handleKeyPress}
								validate 
								type="text" />
					</Col>
					<Col>
						<Input name="pswd" 
								className='input box-shadow' 
								label='Senha'
								onChange={this.handleKeyPress}
								validate 
								type="password" />
					</Col>
					<Col>
						<Button className="btn form-btn" 
										onClick={this.submit}
										waves="light">
						
							Enviar
						</Button>
					</Col>
				</form>
			</div>
		);
	}
}

export default Login;