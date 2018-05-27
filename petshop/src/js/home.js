import React, { Component } from 'react'
import { Carousel } from 'react-materialize';
import im1 from '../resources/runningDogo.jpg';

class Home extends Component {
	render() {
		return(
			<Carousel options={{ fullWidth: true }} images={[
			  <img src = {im1} />,
			  'https://lorempixel.com/800/400/food/2',
			  'https://lorempixel.com/800/400/food/3',
			  'https://lorempixel.com/800/400/food/4',
			  'https://lorempixel.com/800/400/food/5'
			]} />
		);
	}
}

export default Home;