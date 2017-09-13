import React from 'react'
import styled from 'styled-components'

import {
  Bio,
  X,
  Circle,
  AbsolutePosition,
  RightBackground,
  StaticRotator,
  Disappearer,
  BigDisappearer,
} from '../../../Components'
import { media } from '../../../theme'

const FlexContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${
    media.phoneTablet`
      display: flex;
      height: 286px;
      align-items: center;
      justify-content: center;
    `
  }
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  right: 130px;
  ${
    media.phoneTablet`
      position: static;
    `
  }
`

export default () => (
  <RightBackground>
    <FlexContainer>
      <TextWrapper>
        <Bio />
      </TextWrapper>
      <BigDisappearer>
        <AbsolutePosition top={200} left={470}>
          <StaticRotator degrees={-10}>
            <X />
          </StaticRotator>
        </AbsolutePosition>
      </BigDisappearer>
    </FlexContainer>
  </RightBackground>
)
