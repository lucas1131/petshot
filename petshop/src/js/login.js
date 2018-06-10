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
import { Link } from 'react-router-dom';
// import Form from 'react-router-form';


/*
 eslint-plugin-jsx-a11y
 react-router react-dom react
*/


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
	handleChange = (e, stateToChange) => {
		let newState = {}
		newState[stateToChange] = e.target.value
	  this.setState(newState)
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
  	if(this.validate(e)){
  		this.props.handleLogin(this.state.username, this.state.password, false)
  		return (<Link to={'/'}/>)
  	}
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
								onChange={ e => {this.handleChange(e, "username")} }
								onKeyDown={this.handleKeyPress}
								validate 
								type="text" />
					</Col>
					<Col>
						<Input name="pswd" 
								className='input box-shadow' 
								label='Senha'
								onChange={ e => {this.handleChange(e, "password")} }
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