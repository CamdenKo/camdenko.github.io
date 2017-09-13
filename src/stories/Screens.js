import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  Home,
} from '../Screens'

storiesOf('Screens', module)
  .add('Home', () => <Home />)
