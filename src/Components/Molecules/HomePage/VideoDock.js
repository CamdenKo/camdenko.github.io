import React from 'react'
import styled from 'styled-components'

import {
  Video,
  BodyText,
} from '../../../Components'
import {
  media,
} from '../../../theme'

const Background = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  height: 295px;
  width: 400px;
  z-index: 400;
  display: flex;
  justify-content: center;
  position: relative;
  ${
    media.phoneTablet`
      width: 85%;
      margin-left: auto;
      margin-right: auto;
    `
  }
  ${
    media.phonePhone`
      width: 100vw;
      height: 225px;
    `
  }
`

const VideoWrapper = styled.div`
  // padding: 25px 25px 0px 25px;
  ${
    media.phonePhone`
      width: 100vw;
    `
  }
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  next() {
    this.setState({
      currentVideoIndex: (this.state.currentVideoIndex + 1) % this.props.videos.length,
    })
  }

  previous() {
    this.setState({
      currentVideoIndex: (this.state.currentVideoIndex - 1) < 0 ? this.props.videos.length - 1 : this.state.currentVideoIndex - 1,
    })
  }

  render() {
    return (
      <Background>
        <VideoWrapper>
          <Video src={this.props.videos[this.state.currentVideoIndex].src} />
        </VideoWrapper>
        <Last onClick={this.previous}>
          &lt;
        </Last>
        <Name>
          {this.props.videos[this.state.currentVideoIndex].name}
        </Name>
        <Next onClick={this.next} >
          &gt;
        </Next>
      </Background>
    )
  }
}

