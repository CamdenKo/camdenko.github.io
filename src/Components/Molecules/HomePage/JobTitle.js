import React from 'react'
import styled from 'styled-components'

import {
  Subtitle,
  Subsubtitle,
  Title,
} from '../../../Components'

const Container = styled.div`
  text-align: center;
  width: fit-content;
  height: fit-content;
`

export default () => (
  <Container>
    <Title>Camden Ko</Title>
    <Subtitle>Fullstack Developer</Subtitle>
    <Subsubtitle>React · Express · Node.js</Subsubtitle>
  </Container>
)
