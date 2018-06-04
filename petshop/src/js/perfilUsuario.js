/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react'
import { Tabs, Tab } from 'react-materialize';
import { Row, Col } from 'react-materialize';

import EditableTable, { AnimalTable, AddressessTable } from './editableTable'

import '../css/general.css';
import '../css/tabs.css';
import '../css/perfilUsuario.css'

class Configs extends Component {
	render() {
		return(
			<div>
				<div className="align-content">
					<h1 className="label">Usuário e Senha</h1>
				</div>

				<div className="scaler">
					<div className="align-content">
						<img src="https://www.w3schools.com/howto/img_avatar2.png"
							className="profile-pic" />

						<div style={{display: "inline-block", marginBottom: "30px"}}>
						<h4 className="label">Senha atual</h4>
						<form>
							<Col>
								<Row>
									<input className="settings_input box-shadow" type="password" 
										placeholder="Senha Atual" name="oldpassword" />
								</Row>
								<Row>
									<p className="text" style={{fontSize: "10px"}}> Sua senha atual é necessária efetuar qualquer mudança</p>
								</Row>
								<Row>
									<h4 className="label">Altere sua Senha</h4>
								</Row>
								<Row>
									<input className="settings_input box-shadow" type="password" 
										placeholder="Nova Senha" name="newpassword" />
								</Row>
								<Row>
									<input className="settings_input box-shadow" type="password" 
										placeholder="Confirmar Senha" name="confpassword" />
								</Row>
							</Col>
						</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

				
class Animals extends Component {
  render() {
    return (
      <div>
        <AnimalTable header={[
					{ name: "Nome", prop: "name", type: "text" },
					{ name: "Raça", prop: "race", type: "text" },
					{ name: "Agendamentos", prop: "scheduled", type: "text" },
					{ name: "Custo", prop: "cost", type: "number" }
				]}/>
      </div>
    );
  }
}

class Addressess extends Component {
	render() {
    return (
      <div>
        <AddressessTable header={[
					{ name: "Nome", prop: "nickname", type: "text" },
					{ name: "Rua", prop: "street", type: "text" },
					{ name: "N°", prop: "number", type: "number" },
					{ name: "Complemento", prop: "compl", type: "text" }
				]}/>
      </div>
    );
  }
}

class PerfilUsuario extends Component {
	render() {
		return(
			<div className="container" style={{marginTop: "15px"}}>
				<Tabs className='z-depth-1'>
					<Tab title="Configurações" className="tab">
						<Configs />
					</Tab>

					<Tab title="Animais" className="tab">
						<Animals />
					</Tab>

					<Tab title="Endereços" className="tab" active>
						<Addressess />
					</Tab>
				</Tabs>
			</div>
		);
	}
}
			

export default PerfilUsuario;