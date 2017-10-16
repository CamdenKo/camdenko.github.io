import React from 'react'
import styled, { keyframes } from 'styled-components'

import {
  Subtitle,
  Subsubtitle,
  Title,
  Disappearer,
  BigRotator,
} from '../../../Components'
import { media } from '../../../theme'

const Container = styled.hgroup`
  text-align: center;
  width: fit-content;
  height: fit-content;
`

const typing = keyframes`
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Developer = Subtitle.extend`
  animation: ${typing} ease 0.8s forwards;
  overflow: hidden;
  margin: 0 auto;
  opacity: 0;
  white-space: nowrap;
  ${
    media.phoneTablet`
      animation-delay: 1.0s;
    `
  }
`

const Stack = Subsubtitle.extend`
  animation: ${typing} ease 0.6s forwards;
  opacity: 0;
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
  animation-delay: 0.32s;
  ${
    media.phoneTablet`
      animation-delay: 1.32s;
    `
  }
`

export default () => (
  <Container>
    <BigRotator degrees={-6}>
      <Disappearer>
        <Title>Camden Ko</Title>
      </Disappearer>
      <Developer>Fullstack Developer</Developer>
      <Stack>React · Express · Node.js</Stack>
    </BigRotator>
  </Container>
)
