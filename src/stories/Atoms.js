import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  Circle,
  X,
  CircleWithLines,
  Line,
  Title,
  NavBox,
  Subsubtitle,
  Subtitle,
  BodyText,
  TextBubble,
  SecondaryTitle,
  NavText,
  Red,
  RedTriangle,
  Purple,
  PurpleTriangle,
  HeadshotImage,
} from '../Components'
import theme from '../theme'

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
.add('NavBox', () => <NavBox />)
.add('Bubble', () => <TextBubble />)

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
.add('NavText inactive', () => (
  <div style={{ width: 'fit-content' }}>
    <NavText>Education</NavText>
  </div>
))
.add('Subsubtitle', () => (
  <div style={{ backgroundColor: 'black' }}>
    <Subsubtitle>React</Subsubtitle>
  </div>
))

storiesOf('Atoms/Background', module)
.addDecorator(story => (
  <div style={{
    width: '30vh',
    position: 'relative',
  }}
  >
    {story()}
  </div>
))
.add('Red', () => <Red>TEXT</Red>)
.add('Purple', () => <Purple> TEXT</Purple>)
.add('Purple Triangle', () => <PurpleTriangle />)
.add('Red Triangle', () => <RedTriangle />)

storiesOf('Atoms/Assets', module)
.add('Headshot', () => <HeadshotImage />)
