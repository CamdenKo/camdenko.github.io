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
  DisappearerH,
  AbsolutePositionBR,
} from '../../../Components'
import { media, mediaHeight } from '../../../theme'

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
  bottom: 14vw;
  right: 3vw;
  ${
    media.phoneTablet`
      position: static;
    `
  }
  ${
    mediaHeight.phoneTablet`
      bottom: 0;
      right: 0;
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
        <AbsolutePositionBR bottom={450} right="25vw">
          <StaticRotator degrees={-41}>
            <X size={150} />
          </StaticRotator>
        </AbsolutePositionBR>
        <AbsolutePositionBR bottom={620} right={10}>
          <Circle size={70} />
        </AbsolutePositionBR>
        <DisappearerH>
          <AbsolutePositionBR bottom={0} right="30vw">
            <Circle />
          </AbsolutePositionBR>
        </DisappearerH>
      </Disappearer>
      <BigDisappearer>
        <AbsolutePositionBR bottom={20} right={20}>
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
