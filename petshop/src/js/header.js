import React, { Component } from 'react'
import { Navbar, NavItem, Button } from 'react-materialize';
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
	render() {
		return(	
			<Row className={"topHeader valign-wrapper hide-on-med-and-down"} style={{topMargin: "10px"}}>
				{/*Horário de Funcionamento*/}
				<Col l={3} m={4} s={4}>
					<Icon tiny className="fa icon">access_time</Icon>
					<span class="text"> Aberto - Seg - Sex: 9am à 5pm</span>
				</Col>
				{/*Login*/}
				<Col l={8} m={8} s={8} offset="l1" >
					{/*password e username*/}
					<LoginForm/>
				</Col>
			</Row>
		);
	}
}

class TopNavbar extends Component {
	render() {
		return(
			<Navbar className='navbar' brand={<ResponsiveLogo/>} right>
				<NavItem onClick={() => console.log('test click')}>
					Getting started
				</NavItem>
				
				<NavItem href='components.html'>
					Components
				</NavItem>
			</Navbar>
		);
	}
}

class Header extends Component {
	render() {
		return(
			<div id="header">
				<TopHeader />
				<TopNavbar />
			</div>
		);
	}
}

export default Header;