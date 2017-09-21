import React from 'react'
import styled from 'styled-components'

import {
  Video,
  BodyText,
} from '../../../Components'

const videoW = 450
const videoH = (videoW / 16) * 9

const backgroundW = 500

const Background = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  height: 350px;
  width: ${backgroundW}px;
  display: flex;
  justify-content: center;
  position: relative;
`

const VideoWrapper = styled.div`
  width: ${videoW}px;
  height: ${videoH}px;
  margin-top: ${(backgroundW - videoW) / 2}px;
`

const Name = BodyText.extend`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  color: ${({ theme }) => theme.black};
`

const Next = styled.p`
  position: absolute;
  bottom: 7px;
  right: 10px;
  margin: 0;
  cursor: pointer;
`

const Last = Next.extend`
  right: auto;
  left: 10px;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentVideoIndex: 0,
    }
  }


  next() {
    this.state.currentVideoIndex = (this.state.currentVideoIndex + 1) % this.props.videos.length
  }

  render() {
    return (
      <Background>
        <VideoWrapper>
          <Video src={this.props.videos[this.state.currentVideoIndex].src} />
        </VideoWrapper>
        <Last>
          &lt;
        </Last>
        <Name>
          {this.props.videos[this.state.currentVideoIndex].name}
        </Name>
        <Next>
          &gt;
        </Next>
      </Background>
    )
  }
}

