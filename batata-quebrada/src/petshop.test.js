import React from 'react';
import ReactDOM from 'react-dom';
import Petshop from './petshop';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Petshop />, div);
	ReactDOM.unmountComponentAtNode(div);
});
