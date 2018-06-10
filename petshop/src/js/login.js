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

	constructor(props){
		super(props)

		this.state = {
			username: "", 
			password: ""
		}
	}

	// Function to check if inputs are correct
	validate = (e) => {
		return true
	}

	// Update props value
	handleChange = (e) => {
	  this.setState({ 
	  	username: e.target.value, 
			password: e.target.value
	  })
  }

	// Used primarily for ENTER press submission
  handleKeyPress = (e) => {

    if(e.key === 'Enter') {
      if(this.validate(e)) {
      	this.submit(e)
      }
    }
  }

  submit = (e) => {
  	if(this.validate(e)) 
  		this.props.handleLogin(this.state.username, this.state.password, false)
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
								onChange={this.handleChange}
								onKeyDown={this.handleKeyPress}
								validate 
								type="text" />
					</Col>
					<Col>
						<Input name="pswd" 
								className='input box-shadow' 
								label='Senha'
								onChange={this.handleChange}
								onKeyDown={this.handleKeyPress}
								validate 
								type="password" />
					</Col>
					<Col>
						<Button className="btn form-btn" 
									onClick={(e) => {
											this.props.handleLogin(this.state.username, this.state.password, false)
										} 
									}
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