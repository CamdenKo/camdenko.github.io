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
  BigRotator,
} from '../../../Components'
import { media } from '../../../theme'

const FlexContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

const XWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

const OWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -40px;
`

export default () => (
  <RightBackground>
    <FlexContainer>
      <TextWrapper>
        <BigRotator degrees={7}>
          <Bio />
        </BigRotator>
      </TextWrapper>
      <BigDisappearer>
        <XWrapper>
          <StaticRotator degrees={-10}>
            <X size={50} />
          </StaticRotator>
        </XWrapper>
        <OWrapper>
          <Circle size={80} />
        </OWrapper>
      </BigDisappearer>
    </FlexContainer>
  </RightBackground>
)
