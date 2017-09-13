import React from 'react'
import styled from 'styled-components'

import {
  Bio,
  X,
  Circle,
  RightBackground,
} from '../../../Components'
import { media } from '../../../theme'

const FlexContainer = styled.div`
  position: relative;
  ${
    media.phoneTablet`
      display: flex;
      align-items: center;
      justify-content: center;
    `
  }
`

export default () => (
  <RightBackground>
    <FlexContainer>
      <Bio />
    </FlexContainer>
  </RightBackground>
)
