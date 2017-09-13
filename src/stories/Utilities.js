import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  Rotator,
  StaticRotator,
  Disappearer,
  X,
  DifferentComponents,
  BigRotator,
  TextRotator,
  Scaler,
} from '../Components'
import theme from '../theme'

storiesOf('Utilities', module)
.addDecorator(story => (
  <div style={{ backgroundColor: theme.purple, padding: '10px' }}>
    {story()}
  </div>
))
.add('Rotator X', () => <Rotator degrees="30"><X /></Rotator>)
.add('StaticRotator X 30', () => <StaticRotator degrees={30}><X /></StaticRotator>)
.add('Disappearer X', () => <Disappearer><X /></Disappearer>)
.add('DifferentComponents', () => <DifferentComponents big={<h1>BIG</h1>} small={<h1>small</h1>} />)
.add('BigRotator X', () => <BigRotator degrees={30}><X /></BigRotator>)
.add('TextRotator', () => <TextRotator>Rotated</TextRotator>)
.add('Scaler', () => (
  <div>
    REGULAR
    <X />
    SCALED 1.5
    <Scaler scale={1.5}>
      <X />
    </Scaler>
  </div>
))
