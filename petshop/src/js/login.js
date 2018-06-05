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
	render() {
		return(
			<div className="container">
				<form>
					<Col>
						<Input name="username" 
								className='input box-shadow' 
								label='Usuário'
								validate 
								type="text" />
					</Col>
					<Col>
						<Input name="pswd" 
								className='input box-shadow' 
								label='Senha'
								validate 
								type="password" />
					</Col>
					<Col>
						<Button className="btn form-btn" 
										onClick={e => this.onSubmit(e)} 
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