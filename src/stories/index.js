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
  Line,
  NavText,
  BottomLeft,
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
  .add('Line', () => (
    <div style={{ height: '100px' }}>
      <Line />
    </div>
  ))

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
  .add('NavText active', () => <NavText active>Education</NavText>)
  .add('NavText inactive', () => <NavText>Education</NavText>)

storiesOf('Atoms/Background', module)
  .addDecorator(story => (
    <div style={{
      width: '30vh',
      height: '30vh',
      border: '3px solid black',
    }}
    >
      {story()}
    </div>
  ))
  .add('BottomLeft Purple', () => <BottomLeft />)
  .add('BottomLeft inverted', () => <BottomLeft inverted />)
