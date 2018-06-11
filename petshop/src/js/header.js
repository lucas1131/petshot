/* 
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React, { Component } from 'react'
import { Navbar, NavItem, Button, SideNavItem} from 'react-materialize';
import { Col, Row, Icon, Input } from 'react-materialize';
import '../css/header.css';
import logo from '../resources/logo.png';

import {Link, NavLink} from 'react-router-dom'

class ResponsiveLogo extends Component {
	render() {
		return(
			<NavLink to='/'> <img id='logo' src={logo} alt='Loading' className='responsiveLogo'/> </NavLink>
		);
	}
}


class UserInfo extends Component {

	render () { 
		return (
			<Row className={'topHeader valign-wrapper'} style={{float: 'right'}}>
				<Col> <b>Usuário:</b> {this.props.user.name}</Col>
				<Col><img className='circle' src={this.props.user.image} style={{height: '55px'}}/> </Col>
				<Col><Link to='/carrinho'><Button waves='light' className='btn'>Meu Carrinho<Icon left>shopping_cart</Icon></Button></Link></Col>
				<Col><Link to='/perfil'><Button waves='light' className='btn'>Meu Perfil<Icon left>account_circle</Icon></Button></Link></Col>
				<Col><Button waves='light' className='btn' onClick={ () => {this.props.handleLogin(null, null, true)} }>Sair<Icon left>exit_to_app</Icon></Button></Col>
			</Row>
		);
	}
}

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.props = {
			handleLogin: props.handleLogin
		}

		this.state = {
			username: '',
			password: ''
		}
	}

	// Function to check if inputs are correct
	validate = (e) => {
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
 
	render () { 
		return (
			<Row className={'topHeader valign-wrapper'} style={{float: 'right'}}>
				
				<Col>
					<Input className='input box-shadow' 
								label='Usuário' 
								validate 
								type='text' 
								onChange={ e => {this.handleChange(e, 'username')} }
								onKeyDown={this.handleKeyPress}/>
				</Col>
				
				<Col>
					<Input className='input box-shadow' 
								label='Senha' 
								validate 
								type='password' 
								onChange={ e => {this.handleChange(e, 'password')} }
								onKeyDown={this.handleKeyPress}/>
				</Col>

				<Col>
					<Button waves='light' 
									className='btn' 
									onClick={	(e) => {
											this.props.handleLogin(this.state.username, this.state.password, false)
										} 
									}> Entrar </Button>
				</Col>

				<Col l={3}><Input className='input box-shadow' label='Lembrar de mim'type='checkbox'/></Col>
			</Row>
		);
	}
}


class TopHeader extends Component {

	constructor(props) {
		super(props)
		this.props = {
			user: props.user,
			handleLogin: props.handleLogin
		};
	}

	render() {
		if(this.props.user){
			return(	
				<Row className={'topHeader valign-wrapper hide-on-med-and-down'} style={{topMargin: '10px'}}>
					{/*Horário de Funcionamento*/}
					<Col l={3} m={3} s={3}><Icon tiny className='fa icon'>access_time</Icon> Aberto - Seg - Sex: 9am à 5pm</Col>
					{/*User info*/}
					<Col l={9} m={9} s={9} >
						{/**/}
						<UserInfo user={this.props.user} handleLogin={this.props.handleLogin}/>
					</Col>
				</Row>
			);
		} else {
			return(	
				<Row className={'topHeader valign-wrapper hide-on-med-and-down'} style={{topMargin: '10px'}}>
					{/*Horário de Funcionamento*/}
					<Col l={3} m={3} s={3}><Icon tiny className='fa icon'>access_time</Icon> Aberto - Seg - Sex: 9am à 5pm</Col>
					{/*Login*/}
					<Col l={8} m={8} s={8} offset='l1' >
						{/*password e username*/}
						<LoginForm handleLogin={this.props.handleLogin}/>
					</Col>
				</Row>
			);
		}
	}
}


class TopNavbar extends Component {

	constructor(props) {
		super(props)
		this.props = {
			user: props.user,
			handleLogin: props.handleLogin
		};
	}

	render() {
		if(this.props.user && this.props.user.username == 'admin'){
			return(
				<div>
					<Navbar className='navbar' brand={<ResponsiveLogo/>} right>
						<SideNavItem className='hide-on-large-only' userView user={this.props.user}/>
						<li><NavLink to='/admin'>Gerenciar</NavLink></li>
						<li className='hide-on-large-only'><NavLink to='/carrinho'>Meu Carrinho</NavLink></li>
						<li className='hide-on-large-only'><NavLink to='/perfil'>Meu Perfil</NavLink></li>
						<NavItem className='hide-on-large-only' onClick={ (e) => { this.props.handleLogin(null,null,true) } } >Sair</NavItem>
						<NavItem className='hide-on-large-only' divider/>
						<li><NavLink to='/'>Página Inicial</NavLink></li>
						<li><NavLink to='/produtos'>Produtos</NavLink></li>
						<li><NavLink to='/servicos'>Serviços</NavLink></li>
					</Navbar>
				</div> 
			);
		} else if(this.props.user) {
			return(
				<div>
					<Navbar className='navbar' brand={<ResponsiveLogo/>} right>
						<SideNavItem className='hide-on-large-only' userView user={this.props.user}/>
						<li className='hide-on-large-only'><NavLink to='/carrinho'>Meu Carrinho</NavLink></li>
						<li className='hide-on-large-only'><NavLink to='/perfil'>Meu Perfil</NavLink></li>
						<NavItem className='hide-on-large-only' onClick={ (e) => { this.props.handleLogin(null,null,true) } } >Sair</NavItem>
						<NavItem className='hide-on-large-only' divider/>
						<li><NavLink to='/'>Página Inicial</NavLink></li>
						<li><NavLink to='/produtos'>Produtos</NavLink></li>
						<li><NavLink to='/servicos'>Serviços</NavLink></li>
					</Navbar>
				</div>
			);

		} else {
			return(
				<div>
					<Navbar className='navbar' brand={<ResponsiveLogo/>} right>
						<li><NavLink to='/login' className='hide-on-large-only'>Fazer Login</NavLink></li>
						<NavItem className='hide-on-large-only' divider/>
						<li><NavLink to='/' >Página Inicial</NavLink></li>
						<li><NavLink to='/produtos' >Produtos</NavLink></li>
						<li><NavLink to='/servicos' >Serviços</NavLink></li>
					</Navbar>
				</div>
			);

		}


		
	}
}

class Header extends Component {

	constructor(props) {
		super(props)
		this.props = {
			user: props.user,
			handleLogin: props.handleLogin
		};
	}

	render() {
		return(
			<div id='header'>
				<TopHeader user={this.props.user} handleLogin={this.props.handleLogin}/>
				<TopNavbar user={this.props.user} handleLogin={this.props.handleLogin}/>
			</div>
		);
	}
}

export default Header;