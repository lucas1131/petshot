import React, { Component } from 'react'

import SwitchTheme from './switch_theme'

import './css/general.css'
import './css/darkTheme.css'
import './css/lightTheme.css'
// import './css/access.css'
// import './css/calendar.css'
// import './css/navbar.css'
// import './css/search_field.css'
// import './css/signup_form.css'
// import './css/tinycarousel.css'

class UnauthenticatedLogin extends Component {
	render() {
		return (
			<div class="header-right login anonymous_user">
				<form onsubmit="login()">
					<input id="login_uname" class="login_input" type="text" placeholder="Username" name="uname" required />
					<input id="login_psw" class="login_input" type="password" placeholder="Password" name="psw" required />
					<input id="remember_me" type="checkbox" checked="checked" name="remember" /> <span class="text">Lembrar de mim</span>
					<button class="loginbtn" type="submit">Entrar</button>
					<button class="loginbtn" type="button" onclick="signup_form()">Cadastrar</button>
		    		<a href="" class="text" onclick="SwitchTheme()" style={{verticalAlign: "middle", paddingLeft: 5 + "px"}}><u>Trocar Tema</u></a>
				</form>
		    </div>
		);
	}
}

class AuthenticatedLogin extends Component {
	render() {
		return (
			<div class="login normal_user admin_user">
		        <span id="logged_name" class="text" class="text"><b>Usuário: </b></span>
		        <img src="../resources/avatar.png" style="max-width: 55px; vertical-align: middle" />
		        <a href="userCart.html" class="text" style="text-decoration: none;">
		        <i class="fa fa-shopping-cart icon" style="padding-right: 5px; font-size: 30px; vertical-align: sub"></i><b>Meu Carrinho</b></a>
		        <a href="perfilUsuario.html"><button class="loginbtn" id="profilebutton">Meu Perfil</button></a>
		        <button class="loginbtn" type="submit" onclick="logout()">Sair</button>
				<a href="javascript:void(0)" class="text" onclick="SwitchTheme()" style="vertical-align: middle; padding-left: 5px;"><u>Trocar Tema</u></a>
		    </div>
		);
	}
}

class Header extends Component {
	render() {
		return (
			<div name="header">
				<div class="header-left text"><i class="fa icon ">&#xf017;</i> Aberto - Seg - Sex: 9am à 5pm</div>
				<UnauthenticatedLogin />
			</div>
		);
	}
}

export default Header;
