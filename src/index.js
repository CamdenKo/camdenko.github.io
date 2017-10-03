import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'

import { Home } from './Screens'
// import registerServiceWorker from './registerServiceWorker';
import theme from './theme'
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>, document.getElementById('root'));
// registerServiceWorker();
