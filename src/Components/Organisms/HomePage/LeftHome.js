import React from 'react'
import styled from 'styled-components'

import {
  JobTitle,
  LeftBackground,
  Headshot,
  X,
  AbsolutePosition,
  DisappearerH,
  StaticRotator,
  Disappearer,
} from '../../../Components'
import { media, mediaHeight } from '../../../theme'

const FlexContainer = styled.div`
  padding: 60px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  ${
    media.phoneTablet`
      padding: 0;
      justify-content: center;
    `
  }
  ${
    mediaHeight.phoneTablet`
      padding: 0;
    `
  }
`

const JobWrapper = styled.div`
  padding: 10px 0 45px;
`

export default () => (
  <LeftBackground>
    <FlexContainer>
      <JobWrapper>
        <JobTitle />
      </JobWrapper>
      <Headshot />
    </FlexContainer>
    <Disappearer>
      <DisappearerH>
        <AbsolutePosition top="43vh" left="13vw">
          <StaticRotator degrees={15}>
            <X />
          </StaticRotator>
        </AbsolutePosition>
      </DisappearerH>
    </Disappearer>
  </LeftBackground>
)
