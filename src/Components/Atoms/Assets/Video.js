import React from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default props => (
  <VideoWrapper>
    <Video src={props.src} allowFullScreen />
  </VideoWrapper>
)
