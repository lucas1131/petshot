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
import { storeInSessionStorage, storeInLocalStorage } from './mockDB'

import '../css/general.css';
import '../css/tabs.css';
import '../css/userProfile.css'

var isUserLogged = true;
export default class PerfilUsuario extends Component {

  constructor(props) {
    
    super(props)
    let currentUser = getFromSessionStorage("user")[0]
    let userInfo = getFromLocalStorage("user-info")

    console.log(userInfo)
    console.log(currentUser)
    for(var i = 0; i < userInfo.length; i++){
      console.log(`${userInfo[i].username} === ${currentUser.username}`)
      if(userInfo[i].username === currentUser.username){
        console.log(i)
        console.log(userInfo[i])
        currentUser = userInfo[i];
        break;
      }
    }

    // Set flag for no user logged so we can hide this page
    if(!currentUser){
      isUserLogged = false;
    }

    console.log(currentUser)
    this.state = {
      user: currentUser
    }
  }

  render() {
    // If user is not logged, hide configs page
    if(!isUserLogged) {
      return(
        <div className="container valign-wrapper center align-content" style={{paddingTop: "100px"}}>
          <h3 className="header0">É necessário logar para fazer mudanças</h3>
        </div>
      )
    }

    return(
      <div className='container' style={{marginTop: '15px'}}>
        <Tabs className='z-depth-1'>
          <Tab title='Configurações' className='tab' active>
            <Configs user={this.state.user}/>
          </Tab>

          <Tab title='Animais' className='tab'>
            <Animals user={this.state.user}/>
          </Tab>

          <Tab title='Endereços' className='tab'>
            <Addressess user={this.state.user}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

class Configs extends Component {

  constructor(props) {

    super(props)
    this.state = {
      user: props.user,
      username: props.user.username,
      old_pswd: '',
      new_pswd: '',
      conf_pswd: '',
      wrong_psd: "none",
      psd_no_match: "none",
      form_not_filled: "none",
      form_ok: "none"
    }
  }

  // Update props value
  handleChange = (e, stateToChange) => {
    let newState = {}
    newState[stateToChange] = e.target.value
    this.setState(newState)
    console.log(`Changing '${stateToChange}' to '${e.target.value}'`)
  }

  // Used primarily for ENTER press submission
  handleKeyPress = (e) => {

    if(e.key === 'Enter') {
      console.log("Enter pressed")
      if(this.validate(e)) {
        this.changePassword(e)
      }
    }
  }

  // Function to check if inputs are correct
  validate = (e) => {
    
    let userPassword = this.state.user.password
    let old_pswd = this.state.old_pswd
    let new_pswd = this.state.new_pswd
    let conf_pswd = this.state.conf_pswd

    let display = {
      wrong_psd: "none",
      psd_no_match: "none",
      form_not_filled: "none",
      form_ok: "none"
    }

    // If a field is empty
    if(!old_pswd || !new_pswd || !conf_pswd){
      display.form_not_filled = "block"
      this.setState(display)
      return false
    }
    
    // Wrong password
    if(old_pswd !== userPassword){
      display.wrong_psd = "block"
      this.setState(display)
      return false
    }

    // New password and confirm password does not match
    if(new_pswd !== conf_pswd){
      display.psd_no_match = "block"
      this.setState(display)
      return false
    }

    // Everything is ok, show success text and update password
    display.form_ok = "block"
    this.setState(display)
    return true
  }

  changePassword = (e) => {

    if(!this.validate(e)) 
      return false
  
    let currentUser = this.state.user;
    currentUser.password = this.state.new_pswd;

    // Update user password in db
    storeInLocalStorage("user-info", currentUser)

    // Update object state
    this.setState({user: currentUser})

    return true;
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
              <Row style={{marginBottom: "-10px"}}>
                <Input className='settings_input box-shadow' 
                      type='password' 
                      label='Senha Atual' 
                      name='oldpassword'
                      onChange={e => this.handleChange(e, "old_pswd")}
                      onKeyDown={this.handleKeyPress}
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
                      label='Nova Senha' 
                      name='newpassword'
                      onChange={e => this.handleChange(e, "new_pswd")}
                      onKeyDown={this.handleKeyPress}
                      required/>
              </Row>
              <Row>
                <Input className='settings_input box-shadow' 
                      type='password' 
                      label='Confirmar Senha' 
                      name='confpassword'
                      onChange={e => this.handleChange(e, "conf_pswd")}
                      onKeyDown={this.handleKeyPress}
                      required/>
              </Row>

              <div className="text" style={{marginTop: "-20px", marginBottom: "20px"}}>
                <span className="h1" style={{display: this.state.wrong_psd}}>Senha atual errada</span>
                <span className="h1" style={{display: this.state.psd_no_match}}>Novas senhas não são iguais</span>
                <span className="h1" style={{display: this.state.form_not_filled}}>Todos os campos precisam ser preenchidos</span>
                <span className="h1" style={{display: this.state.form_ok}}>Senha alterada com sucesso!</span>
                <br/>
              </div>

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
