import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Screens'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
