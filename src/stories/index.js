import React from 'react';
import { ThemeProvider } from 'styled-components'
import {
  addDecorator,
} from '@storybook/react';

import theme from '../theme'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

require('./Atoms')
require('./Molecules')
require('./Organisms')
require('./Utilities')
