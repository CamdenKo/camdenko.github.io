import React from 'react'
import styled from 'styled-components'

import {
  JobTitle,
  LeftBackground,
  Headshot,
} from '../../../Components'
import { media, mediaHeight } from '../../../theme'

const FlexContainer = styled.section`
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

export default props => (
  <LeftBackground>
    <FlexContainer>
      <JobWrapper>
        <JobTitle />
      </JobWrapper>
      <Headshot videos={props.videos} />
    </FlexContainer>
  </LeftBackground>
)
