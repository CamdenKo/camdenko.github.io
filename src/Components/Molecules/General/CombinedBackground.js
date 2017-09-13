import React from 'react'
import styled from 'styled-components'

import {
  RightBackground,
  LeftBackground,
} from '../../../Components'
import { media } from '../../../theme'

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
    <LeftBackground>LEFT</LeftBackground>
    <RightBackground>RIGHT</RightBackground>
  </Container>
)
