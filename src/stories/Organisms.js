import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  Navigation,
  LeftHome,
  RightHome,
} from '../Components'

storiesOf('Organisms', module)
.add('Navigation', () => <Navigation />)
.add('Left Home', () => <LeftHome />)
.add('Right Home', () => <RightHome />)
