/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react';
import { Footer } from 'react-materialize';

import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom'

import Header from './header'
import Home from './home'
import PerfilUsuario from './userProfile'
import AdminView from './adminView'
import Product from './product'
import ShoppingCart from './shoppingCart'
import ProductList from './productList';
import ServiceList from './serviceList';
import Login from './login';
import Service from './service';

import { getFromLocalStorage, getFromSessionStorage } from './mockDB'
import { storeInLocalStorage, storeInSessionStorage } from './mockDB'

import '../css/general.css';
import '../css/footer.css';

let axios = require("axios")

class NoMatch extends Component {
  render(){ return ( <div className='container'> <h1 className='header1'> 404 - Not Found </h1> <img src='https://i.ytimg.com/vi/EVn87e53MAw/hqdefault.jpg'/></div> )}
}

class Petshop extends Component {
  constructor(props){
    super(props)

    this.handleLogin = this.handleLogin.bind(this)

    let users = getFromSessionStorage('user')
    let user = users ? users[0] : null

    this.state = {
      page: 'home',
      user: user
    }
  }

  handleLogin(Username, Password, Exit) {
    if(Exit){
      this.setState({user: null})
      // storeInSessionStorage('user', null)
      sessionStorage.removeItem('user')
      return
    }

    let users
    axios.get("http://localhost:8080/users/").then((res) =>{
      users = res.data.got

      for(let i in users){
        console.log(users[i].doc)
        if(users[i].doc.dbtype == 'user' && 
          Username === users[i].doc.username && 
          Password === users[i].doc.password){
          
            this.setState({user: users[i].doc});
            storeInSessionStorage('user', {
              id: 'logged', 
              username: users[i].doc.username,
              type: 'user',
              name: users[i].doc.name,
              image: users[i].doc.image,
              background: users[i].doc.background,
              email: users[i].doc.email
            }
          )
        }
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className='petshop'>
          <Header user={this.state.user} handleLogin={this.handleLogin}/>
          <div className='main'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={AdminView} />
            <Route exact path='/perfil' component={PerfilUsuario} />
            <Route exact path='/carrinho' component={ShoppingCart} />
            <Route exact path='/produtos' component={ProductList} />
            <Route exact path='/produtos/:productId' component={Product} />
            <Route exact path='/servicos' component={ServiceList} />
            <Route exact path='/servicos/:serviceId' component={Service} />
            <Route exact path='/login' component={() => {return (<Login handleLogin={this.handleLogin}/>)} } />
            <Route component={NoMatch} />
          </Switch>
          </div>
          <Footer id='about' className='footer' copyrights='© 2018 Copyright All Batatas Reserved'>
            <h5 className='white-text'>Sobre Nós</h5>
            <h6 className='grey-text text-lighten-4'> Grupo 5 </h6>
              <p className='grey-text text-lighten-4'>
                Giovanna Oliveira Guimarães - 9293693 <br/>
              Lucas Alexandre Soares - 9293265 <br/>
              Luca Gomes Urssi - 10425396 <br/>
              Rafael Augusto Monteiro - 9293095 <br/>
              </p>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default Petshop;