import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Petshop from './petshop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Petshop />, document.getElementById('root'));
registerServiceWorker();
