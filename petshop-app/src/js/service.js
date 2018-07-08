
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react'
import {Row, Col, Button, MediaBox, Icon, Input} from 'react-materialize'

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css'
import '../css/timeDisplay.css'

import ServiceInfo from './serviceInfo'

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
        this.setState({service: req.data.got[0].doc})
      }).catch((err) => {
        console.log(err)
        this.setState({service: "fail"})
      })

    this.activeUser = getFromSessionStorage('user')
    let animals = []

    this.state = {
      animals: []
    }

    if(!this.activeUser) return 

    this.logged = true
    this.activeUser = this.activeUser[0]

    let user
    let url = "http://localhost:8080/users?username=" + this.activeUser.username
    axios.get(url).then((res) => {

      user = res.data.got[0].doc
      this._server_user = user

      // Get current user animals
      for(let i in user.animals)
        animals.push(user.animals[i].name)

      
      this.setState({
        animals: animals,
        date: undefined,
        time: undefined,
        activeAnimal: user.animals[0].name // First animal by default
      })
    }).catch(err => {
      console.log("Could not find user '" + this.activeUser.name + "'")
      this.setState({
        animals: "fail",
        activeAnimal: "fail" // First animal by default
      })
      // throw Error
    })
  }

  handleChangeAnimal = (event) => {
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
    
    // Create empty service array if doesnt exists
    if(!this.activeUser.services) 
      this.activeUser.services = []

    // Push new service
    this.activeUser.services.push(newService) 
    this._server_user.services = this.activeUser.services
    this._server_user.surname = "Zuar"
    console.log()
    console.log()
    console.log()
    console.log("clicked")
    console.log()
    console.log(this._server_user)
    console.log(this._server_user.services)
    console.log()
    console.log()
    console.log()
    // Update user info in server
    axios({
      method: 'put',
      url: 'http://localhost:8080/updateUser/' + this._server_user.username,
      data: this._server_user,
      contentType: "application/json"
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    if(!this.state.service || !this.state.animals) return null
    if(this.state.service === "fail" || this.state.animals == "fail")return null
    
    let serviceId = this.props.match.params.serviceId

    return(
      <div className='center container' style={{marginTop: '50px'}}>
        <div>
          <h3 className='header0' style={{marginBottom: '30px'}}> {this.state.service.name} </h3>
        </div>
        <Row>
          <Col s={12} l={12} m={12} className='center align-content'>
            <MediaBox src={this.state.service.image} id='productPhoto' alt='service'/>
          </Col>
        </Row>
        <Row> <p className='default'> {this.state.service.desc} </p> </Row>
        <Row> <hr className='awesome'/> </Row>
        <Row> <h3 className='header0'> <strong>R$ {this.state.service.price}</strong> </h3> </Row>
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
    )
  }
}

export default Service