import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Input } from 'react-materialize';
import { Icon, Button } from 'react-materialize';
import { Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom';
import ProductInfo from './productInfo';

/* Styles */
import '../css/general.css'
import '../css/services.css'

let axios = require("axios")

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      products: null
    };

    axios.get("http://localhost:8080/products" )
      .then((res) => {
        this.setState({products: res.data.got})
      })
      .catch((err) => {
        console.log("[Error] Error getting products.")
        console.log(err)
      })
  }

  render() {
    
    let products

    if(this.state.products) {  
      products = this.state.products.map((product, index) => {
        
        let str = product.doc.name.toLowerCase();
        str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        if(str.indexOf(this.state.query) > -1) {
          return (
            <Col s={12} m={6} l={3} >
              <Card header={<CardTitle image={'' + product.doc.image}></CardTitle>}
                actions={[<Link to={'/produtos/'+index}>Comprar</Link>]}>
                <h6 className='customGreen'>{product.doc.name}</h6>
                <p className='default'>{product.doc.price}</p>
              </Card>
            </Col>
          )
        }
      });
    }

    return(
      <div className='container' style={{marginTop: '50px'}}>
        <h3 class='header0'> Produtos </h3>
        <hr class='awesome'/>
        <div className='center align-content'>
          <Input className='input box-shadow' style={{width: '317px'}} label='Busque um produto'
            onChange = { (e) => { 
              let str = e.target.value.toLowerCase();
              this.setState( {
                query: str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
              } ) } }/>
        </div>
        <Row style={{marginTop: '50px'}}>
          {products}
        </Row>
      </div>
    );
  }
}

export default ProductList;