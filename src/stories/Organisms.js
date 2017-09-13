import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  Navigation,
  LeftHome,
} from '../Components'

storiesOf('Organisms', module)
.add('Navigation', () => <Navigation />)
.add('Left Home', () => <LeftHome />)
