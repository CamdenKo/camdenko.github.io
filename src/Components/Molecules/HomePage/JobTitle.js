import React from 'react'
import styled from 'styled-components'

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

export default () => (
  <Container>
    <BigRotator degrees={-6}>
      <Disappearer>
        <Title>Camden Ko</Title>
      </Disappearer>
      <Subtitle>Fullstack Developer</Subtitle>
      <Subsubtitle>React · Express · Node.js</Subsubtitle>
    </BigRotator>
  </Container>
)
