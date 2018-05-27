import React, { Component } from 'react';
import logo from './logo.svg';
import './petshop.css';	

import Header from './header'

import './css/general.css'
import './css/darkTheme.css'
import './css/lightTheme.css'
// import './css/access.css'
// import './css/calendar.css'
// import './css/navbar.css'
// import './css/search_field.css'
// import './css/signup_form.css'
// import './css/tinycarousel.css'


class Petshop extends Component {
	render() {
		return (
			<div class="petshop">
				<Header />
			</div>
		);
	}
}

export default Petshop;
