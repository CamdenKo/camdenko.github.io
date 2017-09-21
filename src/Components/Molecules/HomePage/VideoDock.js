import React from 'react'
import styled from 'styled-components'

import {
  Video,
} from '../../../Components'

const videoW = 320
const videoH = videoW / 16 * 9

const Background = styled.div`
  background-color: ${({ theme}) => theme.yellow};
  height: 400px;
`

const VideoWrapper = styled.div`
  width: ${videoW};
  height: ${videoH};
`

export default props => (
  <Background>
    <VideoWrapper></VideoWrapper>
  </Background>
)
