import React, { Component } from 'react'
import { Navbar, NavItem, Button, SideNavItem} from 'react-materialize';
import { Col, Row, Icon, Input } from 'react-materialize';
import '../css/header.css';
import logo from '../resources/logo.png';


class ResponsiveLogo extends Component {
	render() {
		return(
			<img id='logo' src={logo} alt="Loading" className="responsiveLogo"/>
		);
	}
}


class UserInfo extends Component {

	render () { 
		return (
			<Row className={"topHeader valign-wrapper"} style={{float: "right"}}>
				<Col > <b>Usuário:</b> {this.props.user.name} </Col>
				<Col ><img class="circle" src={this.props.user.image} style={{height: "55px"}}/> </Col>
				<Col ><Button waves="light" className="btn">Meu Carrinho<Icon left>shopping_cart</Icon></Button></Col>
				<Col ><Button waves="light" className="btn">Meu Perfil<Icon left>account_circle</Icon></Button></Col>
				<Col ><Button waves="light" className="btn">Sair<Icon left>exit_to_app</Icon></Button></Col>
			</Row>
		);
	}
}

class LoginForm extends Component {
	render () { 
		return (
			<Row className={"topHeader valign-wrapper"} style={{float: "right"}}>
				<Col><Input className='input box-shadow' label='Usuário' validate type='text' /></Col>
				<Col><Input className='input box-shadow' label='Senha' validate type='password' /></Col>
				<Col><Button waves="light" className="btn">Entrar</Button></Col>
				<Col><Button waves="light" className="btn">Registrar</Button></Col>
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
			logged: props.userIsLogged
		};
	}

	render() {
		if(this.props.user){
			return(	
				<Row className={"topHeader valign-wrapper hide-on-med-and-down"} style={{topMargin: "10px"}}>
					{/*Horário de Funcionamento*/}
					<Col l={3} m={4} s={4}><Icon tiny className="fa icon">access_time</Icon> Aberto - Seg - Sex: 9am à 5pm</Col>
					{/*Login*/}
					<Col l={8} m={8} s={8} offset="l1" >
						{/*password e username*/}
						<UserInfo user={this.props.user}/>
					</Col>
				</Row>
			);
		} else {
			return(	
				<Row className={"topHeader valign-wrapper hide-on-med-and-down"} style={{topMargin: "10px"}}>
					{/*Horário de Funcionamento*/}
					<Col l={3} m={4} s={4}><Icon tiny className="fa icon">access_time</Icon> Aberto - Seg - Sex: 9am à 5pm</Col>
					{/*Login*/}
					<Col l={8} m={8} s={8} offset="l1" >
						{/*password e username*/}
						<LoginForm/>
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
			user: props.user
		};
	}

	render() {
		return(
			<div>
				<Navbar className='navbar' brand={<ResponsiveLogo/>} right>
					<SideNavItem className='hide-on-large-only' userView user={this.props.user}/>
					<NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
					<NavItem href='components.html'>Components</NavItem>
				</Navbar>
			</div>
		);
	}
}

class Header extends Component {

	constructor(props) {
		super(props)
		this.props = {
			user: props.user
		};
	}

	render() {
		return(
			<div id="header">
				<TopHeader user={this.props.user}/>
				<TopNavbar user={this.props.user}/>
			</div>
		);
	}
}

export default Header;