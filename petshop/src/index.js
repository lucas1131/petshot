/* Light Theme stylesheet
 *
 * Giovanna Oliveira Guimarães 9293693
 * Lucas Alexandre Soares 9293265
 * Luca Gomes Urssi 10425396
 * Rafael do Fake News 9293095
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Petshop from './js/petshop';
import registerServiceWorker from './js/registerServiceWorker';

import './css/general.css';

ReactDOM.render(<Petshop />, document.getElementById('root'));
registerServiceWorker();