import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize';
import { Col, Row, Icon, Input } from 'react-materialize';
import '../css/header.css';
import logo from '../resources/logo.png';


class ResponsiveLogo extends Component {
	render() {
		return(
			<img id='logo' src={logo} alt="Loading"/>
		);
	}
}

class LoginForm extends Component {
	render() {
		return(
			<Row style={{marginBottom: "0"}}>
				<Col l={12} offset="l10">
					<Input className='input box-shadow' l={6} m={4} s={3} label='User Name' validate type='text'>
					<Icon className='icon'>account_circle</Icon>
					</Input>
					<Input className='input box-shadow' l={6} m={4} s={3} label='Password' validate type='password' />
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
				<div className="valign-wrapper" style={{marginLeft: "20px"}}>
					<Icon tiny className="fa icon">access_time</Icon> Aberto - Seg - Sex: 9am à 5pm
					<LoginForm />
				</div>
				<TopNavbar />
			</div>
		);
	}
}

export default Header;