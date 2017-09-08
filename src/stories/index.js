import React from 'react';
import { ThemeProvider } from 'styled-components'
import {
  storiesOf,
  addDecorator,
} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Circle,
  X,
  CircleWithLines,
  Title,
  Subtitle,
  BodyText,
  SecondaryTitle,
} from '../Components'
import theme from '../theme'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

storiesOf('Atoms/Shapes', module)
  .addDecorator(story => (
    <div style={{ backgroundColor: theme.purple, padding: '10px' }}>
      {story()}
    </div>
  ))
  .add('circle', () => <Circle />)
  .add('X', () => <X />)
  .add('Circle with lines', () => <CircleWithLines />)

storiesOf('Atoms/Text', module)
  .add('Title', () => <Title>Camden Ko</Title>)
  .add('Subtitle', () => (
    <div style={{ backgroundColor: theme.purple }}>
      <Subtitle>Fullstack Developer</Subtitle>
    </div>
  ))
  .add('BodyText', () => (
    <div style={{ backgroundColor: theme.purple }}>
      <BodyText>Born and raised in Aurora Il.</BodyText>
    </div>
  ))
  .add('Secondary Title active', () => <SecondaryTitle active>Camden Ko</SecondaryTitle>)
  .add('Secondary Title inactive', () => <SecondaryTitle>Camden Ko</SecondaryTitle>)
