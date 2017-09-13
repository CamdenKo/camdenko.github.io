import React from 'react'
import styled from 'styled-components'

import {
  JobTitle,
  LeftBackground,
  Headshot,
  Scaler,
} from '../../../Components'
import { media } from '../../../theme'

const FlexContainer = styled.div`
  padding: 60px 0 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  ${
    media.phoneTablet`
      padding: 0;
      justify-content: center;
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
  </LeftBackground>
)
