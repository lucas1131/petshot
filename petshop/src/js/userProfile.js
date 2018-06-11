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
import { Input, Button } from 'react-materialize';

import EditableTable, { AnimalTable, AddressessTable } from './editableTable'
import { getFromSessionStorage, getFromLocalStorage } from './mockDB'

import '../css/general.css';
import '../css/tabs.css';
import '../css/userProfile.css'

class Configs extends Component {

  constructor(props) {
    super(props)
    this.props = {
      handleLogin: props.handleLogin
    }

    let currentUser = getFromSessionStorage("user")

    this.state = {
      username: currentUser.username,
      old_pswd: currentUser.password,
      new_pswd: '',
      conf_pswd: ''
    }
  }

  // Function to check if inputs are correct
  validate = (e) => {
    console.log('submitting')
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
    if(this.validate(e)) 
      this.props.handleLogin(this.state.username, this.state.password, false)
  }

  render() {
    return(
      <div class='container'>
        <div className='align-content'>
          <h1 className='label'>Usuário e Senha</h1>
        </div>

        <div className='scaler align-content'>
          <img src='https://www.w3schools.com/howto/img_avatar2.png'
            className='profile-pic' />

          <div style={{display: 'inline-block', marginBottom: '30px'}}>
            <h4 className='label'>Senha atual</h4>
            <Col>
              <Row>
                <Input className='settings_input box-shadow' 
                      type='password' 
                      placeholder='Senha Atual' 
                      name='oldpassword'
                      onChange={e => this.handleChange(e, "old_pswd")}
                      required/>
              </Row>
              <Row>
                <p className='text' style={{fontSize: '10px'}}> Sua senha atual é necessária para efetuar qualquer mudança</p>
              </Row>
              <Row>
                <h4 className='label'>Altere sua Senha</h4>
              </Row>
              <Row>
                <Input className='settings_input box-shadow' 
                      type='password' 
                      placeholder='Nova Senha' 
                      name='newpassword'
                      onChange={e => this.handleChange(e, "new_pswd")}
                      required/>
              </Row>
              <Row>
                <Input className='settings_input box-shadow' 
                      type='password' 
                      placeholder='Confirmar Senha' 
                      name='confpassword'
                      onChange={e => this.handleChange(e, "conf_pswd")}
                      required/>
              </Row>
              <Row>
                <Button waves='light' 
                      className='btn'
                      onClick={this.changePassword}>Confirmar Alterações</Button>
              </Row>
            </Col>
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
          { name: 'Nome', prop: 'name', type: 'text', editable: true },
          { name: 'Raça', prop: 'race', type: 'text', editable: true },
          { name: 'Agendamentos', prop: 'scheduled', type: 'text', editable: true },
          { name: 'Custo', prop: 'cost', type: 'number', editable: false }
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
          { name: 'Nome', prop: 'nickname', type: 'text', editable: true },
          { name: 'Rua', prop: 'street', type: 'text', editable: true },
          { name: 'N°', prop: 'number', type: 'number', editable: true },
          { name: 'Complemento', prop: 'compl', type: 'text', editable: true }
        ]}/>
      </div>
    );
  }
}

class PerfilUsuario extends Component {
  render() {
    return(
      <div className='container' style={{marginTop: '15px'}}>
        <Tabs className='z-depth-1'>
          <Tab title='Configurações' className='tab' active>
            <Configs />
          </Tab>

          <Tab title='Animais' className='tab'>
            <Animals />
          </Tab>

          <Tab title='Endereços' className='tab'>
            <Addressess />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
      

export default PerfilUsuario;