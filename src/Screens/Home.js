import React from 'react'
import styled from 'styled-components'

import {
  LeftHome,
  RightHome,
} from '../Components'
import { media } from '../theme'

const Container = styled.div`
  display: flex;
  width: 100%;
  ${
    media.phoneTablet`
      flex-direction: column;
    `
  }
`

export default () => (
  <Container>
    <LeftHome />
    <RightHome />
  </Container>
)
