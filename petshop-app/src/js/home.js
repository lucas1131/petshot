/* Light Theme stylesheet
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';
import { Container } from 'react-materialize';
import { Row, Col } from 'react-materialize';
import { Card, CardTitle } from 'react-materialize';
import SlickSlider from './slickSlider';
import ProductInfo from './productInfo';
import ServiceInfo from './serviceInfo';
import { Link } from 'react-router-dom';

/* Styles */
import '../css/home.css';

/* Resources */
import im1 from '../resources/runningDogo.jpg';
import im2 from '../resources/catBag.jpg';
import im3 from '../resources/dogShower.jpg';

let axios = require("axios")

class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      services: null,
      products: null
    }

    // Get services list
    axios.get("http://localhost:8080/services")
      .then((res) => {
        console.log(res.data)
        let tmp = res.data.got
        this.setState({services: tmp})
      })
      .catch((err) => {
        console.log("[Error] Error getting services.")
        console.log(err)
      })

    // Get products list
    axios.get("http://localhost:8080/products")
      .then((res) => {
        console.log(res.data)
        let tmp = res.data.got
        this.setState({products: tmp})
      })
      .catch((err) => {
        console.log("[Error] Error getting products.")
        console.log(err)
      })
  }

  render() {
    /*let services = ServiceInfo.map((service, index) => {
          return (
            <Col s={12} m={6} l={3} >
              <Card header={<CardTitle image={service.image}/>}
              actions={[<Link to={'/servicos/' + index}>Agendar</Link>]}>
                <h6 className='customGreen'>{service.name}</h6>
                <p className='default'>{service.price}</p>
              </Card>
            </Col> ) } )

    let products = ProductInfo.map((product, index) => {
          return (
            <Col s={12} m={6} l={3} >
              <Card header={<CardTitle image={product.image}/>}
              actions={[<Link to={'/produtos/' + index}>Comprar</Link>]}>
                <h6 className='customGreen'>{product.name}</h6>
                <p className='default'>{product.price}</p>
              </Card>
            </Col> ) } )*/

    let services
    let products

    if(this.state.services){
      services = this.state.services.map((service, index) => {
        return (
          <Col s={12} m={6} l={3} >
            <Card header={<CardTitle image={"" + service.doc.image}/>}
            actions={[<Link to={'/servicos/' + index}>Agendar</Link>]}>
              <h6 className='customGreen'>{service.doc.name}</h6>
              <p className='default'>{service.doc.price}</p>
            </Card>
          </Col>)
      })
    }

    if(this.state.products){
      products = this.state.products.map((product, index) => {
        return (
          <Col s={12} m={6} l={3} >
            <Card header={<CardTitle image={"" + product.doc.image}/>}
            actions={[<Link to={'/produtos/' + index}>Comprar</Link>]}>
              <h6 className='customGreen'>{product.doc.name}</h6>
              <p className='default'>{product.doc.price}</p>
            </Card>
          </Col>)
      })
    }

    return(
      <div> 
        <Row>
          <Slider>
            <Slide
              src={im1}
              title='Agende seu horário!'
              placement='left'>
              Confira nossos serviços!
            </Slide>
            <Slide
              src={im2}
              title='Compre uns trem daora pro seu pet'
              placement='left'>
              Deixa de ser muquirana, seu arrombado
            </Slide>
            <Slide
              src={im3}
              title='Traga seu consagrado para um banho'
              placement='left'>
              Seu dog entra fedido e sai supimpa
            </Slide>
          </Slider>
        </Row>

        <div className='container'>
          <Row style={{marginTop: '50px'}}>
            <h3 class='header0'> Nossos Serviços </h3>
            <hr class='awesome'/>
            
            <Row>{services}</Row>

            <p class='default'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            isi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            </p>

            <h3 class='header0'> Nossos Produtos </h3>
            <hr class='awesome'/>
            
            <Row>{products}</Row>

            <p class='default'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            isi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;