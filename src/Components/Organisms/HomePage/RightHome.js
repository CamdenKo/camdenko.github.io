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
  AbsolutePositionBR,
  Scaler,
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
  right: 3vw;
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
        <BigRotator degrees={7}>
          <Bio />
        </BigRotator>
      </TextWrapper>
      <Disappearer>
        <AbsolutePositionBR bottom={450} right={400}>
          <StaticRotator degrees={-41}>
            <X size={150} />
          </StaticRotator>
        </AbsolutePositionBR>
        <AbsolutePositionBR bottom={620} right={-30}>
          <Scaler scale={0.7}>
            <Circle />
          </Scaler>
        </AbsolutePositionBR>
        <AbsolutePositionBR bottom={-20} right={500}>
          <Circle />
        </AbsolutePositionBR>
      </Disappearer>
      <BigDisappearer>
        <AbsolutePositionBR bottom={0} right={0} >
          <StaticRotator degrees={-10}>
            <X size={50} />
          </StaticRotator>
        </AbsolutePositionBR>
        <AbsolutePosition top={0} left={-40}>
          <Circle size={80} />
        </AbsolutePosition>
      </BigDisappearer>
    </FlexContainer>
  </RightBackground>
)
