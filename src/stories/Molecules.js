import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  MobileNav,
  Nav,
  Headshot,
  JobTitle,
  LeftBackground,
  RightBackground,
  CombinedBackground,
} from '../Components'

storiesOf('Molecules/Navigation', module)
.add('MobileNav', () => <MobileNav />)
.add('Nav', () => <Nav />)

storiesOf('Molecules/HomePage', module)
.add('Headshot', () => <Headshot />)
.add('JobTitle', () => (
  <div style={{ backgroundColor: 'purple', padding: '30px' }}>
    <JobTitle />
  </div>
))

storiesOf('Molecules/General', module)
.add('Left Background', () => <LeftBackground>TEXT</LeftBackground>)
.add('Right Background', () => <RightBackground>TEXT</RightBackground>)
.add('Combined Background', () => <CombinedBackground />)
