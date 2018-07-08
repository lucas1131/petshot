
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import {Row, Col, Button, MediaBox, Icon, Input} from 'react-materialize';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css';
import '../css/timeDisplay.css';

import ServiceInfo from './serviceInfo';

let axios = require("axios")

class Service extends Component {
  
  logged = false;
  activeUser = null;

  constructor(props) {
    super(props)
    
    let serviceId = this.props.match.params.serviceId

    // Get service information from server
    axios.get("http://localhost:8080/services?id=" + serviceId)
      .then((req) => {
        console.log(req.data.got[0])
        this.setState({service: req.data.got[0]})
      }).catch((err) => {
        console.log(err)
        this.setState({service: "fail"})
      })

    this.activeUser = getFromSessionStorage('user');
    let animals = [];

    this.state = {
      animals: []
    };

    if(!this.activeUser) return 

    this.logged = true;
    this.activeUser = this.activeUser[0];

    let users = getFromLocalStorage('user-info');
    for(let i in users) {
      if(users[i].username === this.activeUser.username){
        this.activeUser = users[i]
        break
      }
    }

    for(let i in this.activeUser.animals) {
      animals.push(this.activeUser.animals[i].name);
    } 

    this.state = {
      animals: animals,
      date: undefined,
      time: undefined,
      activeAnimal: undefined
    };
  }

  handleChangeAnimal = (event) => {
    console.log(event.target)
    this.setState({activeAnimal: event.target.value}) 
  }

  handleChangeDate = (event) => {
    this.setState({date: event.target.value}) 
  }

  handleChangeTime = (event) => {
    this.setState({time: event.target.value}) 
  }

  handleClick = (event) => {
    let newService = {
      animal: this.state.activeAnimal,
      date  : this.state.date,
      time  : this.state.time
    }
    
    this.activeUser.services.push(newService);
    storeInLocalStorage('user-info', this.activeUser);
    console.log(this.activeUser)
  }

  render(){
    if(!this.state.product) return null
    if(this.state.product === "fail") return null
    
    let serviceId = this.props.match.params.serviceId;

    return(
      <div className='center container' style={{marginTop: '50px'}}>
        <div>
          <h3 className='header0' style={{marginBottom: '30px'}}> {this.state.service.doc.name} </h3>
        </div>
        <Row>
          <Col s={12} l={12} m={12} className='center align-content'>
            <MediaBox src={this.state.service.doc.image} id='productPhoto' alt='service'/>
          </Col>
        </Row>
        <Row> <p className='default'> {this.state.service.doc.desc} </p> </Row>
        <Row> <hr className='awesome'/> </Row>
        <Row> <h3 className='header0'> <strong>R$ {this.state.service.doc.price}</strong> </h3> </Row>
        <div className='center align-content'> 
          <Input label='Animal' type='select' onChange={(e) => {this.handleChangeAnimal(e)}}>
            { this.state.animals.map((name) => <option key={name} value={name}>{name}</option>) }
          </Input>
        </div>
        <div className='center align-content'>
          <Input label='Data' type='date' onChange={(e) => {this.handleChangeDate(e)}}/>
        </div>
        <div className='center align-content'>
          <Input label='Hora' type='time' onChange={(e) => {this.handleChangeTime(e)}}/>
        </div>

        <Row>
          <Button waves='light' className='btn' onClick={(e) => {this.handleClick(e)}}>
            <Icon left>class</Icon>
            Agendar
          </Button>
        </Row>
      </div>
    );
  }
}

export default Service;