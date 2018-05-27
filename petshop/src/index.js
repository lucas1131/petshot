import React from 'react';
import ReactDOM from 'react-dom';
import Petshop from './js/petshop';
import registerServiceWorker from './js/registerServiceWorker';

import './css/general.css';

ReactDOM.render(<Petshop />, document.getElementById('root'));
registerServiceWorker();