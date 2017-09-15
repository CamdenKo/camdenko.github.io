import React from 'react'
import styled, { keyframes } from 'styled-components'

import {
  Subtitle,
  Subsubtitle,
  Title,
  Disappearer,
  BigRotator,
} from '../../../Components'

const Container = styled.div`
  text-align: center;
  width: fit-content;
  height: fit-content;
`

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const Developer = Subtitle.extend`
  animation: ${typing} 3.5s steps(40,end) forwards;
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
`

export default () => (
  <Container>
    <BigRotator degrees={-6}>
      <Disappearer>
        <Title>Camden Ko</Title>
      </Disappearer>
      <Developer>Fullstack Developer</Developer>
      <Subsubtitle>React · Express · Node.js</Subsubtitle>
    </BigRotator>
  </Container>
)
