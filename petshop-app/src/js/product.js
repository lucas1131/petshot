
/* Luca Gomes Urssi 10425396
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Rafael do Fake News 9293095
 *
 */
 
import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Icon, Button, MediaBox } from 'react-materialize';
import { Input } from 'react-materialize';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css';
import '../css/product.css';

import item from '../resources/racao2.jpg';

let axios = require("axios")

class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      qtd: 1,
      products: null
    }

    let productId = this.props.match.params.productId

    // Get product information from server
    axios.get("http://localhost:8080/products?id=" + productId)
      .then((req) => {
        this.setState({product: req.data.got[0]})
      }).catch((err) => {
        console.log(err)
        this.setState({product: "fail"})
      })
  }

  handleChange = (e) => {
    this.setState({qtd: e.target.value})
  } 

  addToCart = (e) => {
    
    // Wait until product promisse finish - if some error occurred, rip.
    while(!this.state.product);
    if(this.state.product === "fail") throw Error

    let qtd = parseInt(this.state.qtd)
    let cartItem = {
      id: this.state.product.id,
      product_id: this.state.product.id,
      type: 'cart',
      product: this.state.product.name,
      quantity: qtd,
      cost: this.state.product.price,
      totalCost: qtd*this.state.product.price
    }

    window.Materialize.toast(`${cartItem.product} x${qtd} adicionado ao carrinho!`, 1500)
    storeInSessionStorage('cart', cartItem)
  }

  render() {
    if(!this.state.product) return null
    if(this.state.product === "fail") return null
    
    return(
      <div className='center' style={{margin: '50px 0 50px 0'}}>
        <div>
          <h3 className='header0' style={{marginBottom: '30px'}}>{this.state.product.doc.name}</h3>
        </div>
        <Row>
          <Col s={12} l={12} m={12} className='center align-content'>
            <MediaBox src={this.state.product.doc.image} id='productPhoto' alt='food for doggos here'/>
          </Col>
        </Row>
          <p className='default'>{this.state.product.doc.desc}</p>
          <hr class='awesome'/>
          <Row className='center align-content valign-wrapper'>
            
            <Input className='settings_input box-shadow' 
                  type='number' 
                  onChange={this.handleChange} 
                  defaultValue={1} 
                  min={1} 
                  step={1} 
                  style={{width: '50px'}}/>

            <span className='header0 valign'><strong>R$ {this.state.product.doc.price*this.state.qtd}</strong></span>
          </Row>
          <Button waves='light' className='btn' onClick={this.addToCart}>
            <Icon left>shopping_cart</Icon>
            Adicionar ao carrinho
          </Button>
      </div>
    );
  }
}

export default Product; 