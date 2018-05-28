import React, { Component } from 'react'
import { Carousel , Container} from 'react-materialize';
import im1 from '../resources/runningDogo.jpg';

class Home extends Component {
	render() {
		return(
			<Carousel options={{ fullWidth: true }} images={[
			  <img src = {im1} alt="Loading"/>
			]} />
		);
	}
}

export default Home;