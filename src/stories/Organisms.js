import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  Navigation,
  LeftHome,
  RightHome,
} from '../Components'

const links = [
  { name: 'Github', url: 'https://github.com/CamdenKo' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/camden-ko-7202a2103/' },
  { name: 'Medium', url: 'https://medium.com/@camdenko' },
  { name: 'Resume', url: 'https://www.scribd.com/document/358913646/Camden-Ko-Resume' },
]

storiesOf('Organisms', module)
  .add('Navigation', () => <Navigation links={links} />)
  .add('Left Home', () => <LeftHome />)
  .add('Right Home', () => <RightHome />)
