import React from 'react'
import styled, { keyframes } from 'styled-components'

import {
  CircleWithLines,
  HeadshotImage,
  X,
  Circle,
  AbsolutePosition,
  Scaler,
  BodyText,
  Disappearer,
  TextBubble,
  VideoDock,
} from '../../../Components'
import { media } from '../../../theme'

const Container = styled.figure`
  width: fit-content;
  position: relative;
  height: 425px;
  margin: 0;
  ${
    media.tabletDesktop`
      height: 400px;
    `
  }
  ${
    media.tabletTablet`
      height: auto;
    `
  }
  ${
    media.phoneTablet`
      height: 425px;
    `
  }
`

const ShapeContainer = styled.div`
  position: relative;
`

const onLoadImageAnimation = keyframes`
  from {
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
  }
`

const CircleBack = CircleWithLines.extend`
  opacity: 0;
  animation: ${onLoadImageAnimation} .45s ease-in-out forwards;
  animation-delay: 1.6s;
  ${
    media.phoneTablet`
      animation-delay: 1.5s
    `
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const ChatBubbleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 210px;
  width: 300px;
  display: flex;
  ${
    media.tabletTablet`
      display: none;
    `
  }
  ${
    media.phoneTablet`
      display: inherit;
    `
  }
`

const ChatText = BodyText.extend`
  color: ${({ theme }) => theme.black};
  text-align: center;
  line-height: 15px;
`

const SmallChatText = styled.small`
  font-size: 11px;
`

const Link = styled.a`
  color: ${({ theme }) => theme.red};
  cursor: pointer;
`

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      headshotVisible: true,
    }
    this.toggleHeadshot = this.toggleHeadshot.bind(this)
  }

  toggleHeadshot() {
    this.setState({ headshotVisible: !this.state.headshotVisible })
  }

  render() {
    return (
      <ShapeContainer>
        <Container>
          <CircleBack>
            {
              this.state.headshotVisible ? (
                <ImageContainer>
                  <ChatBubbleContainer>
                    <TextBubble>
                      <ChatText>
                      Designed with <span role="img" aria-label="Heart">♥️</span>
                        <br />
                        <SmallChatText>
                        Click <Link onClick={this.toggleHeadshot}> here </Link> for my videos
                        </SmallChatText>
                      </ChatText>
                    </TextBubble>
                  </ChatBubbleContainer>
                  <HeadshotImage />
                </ImageContainer>
              ) : (
                <FlexContainer>
                  <VideoDock videos={this.props.videos} />
                </FlexContainer>
              )
            }
          </CircleBack>
        </Container>
        <AbsolutePosition top={220} left={275}>
          <Scaler scale={0.8}>
            <X />
          </Scaler>
        </AbsolutePosition>
        <AbsolutePosition top={160} left={0}>
          <Scaler scale={1.2}>
            <Circle />
          </Scaler>
        </AbsolutePosition>
        <Disappearer>
          <AbsolutePosition top={320} left={420}>
            <Scaler scale={0.9}>
              <X />
            </Scaler>
          </AbsolutePosition>
        </Disappearer>
      </ShapeContainer>
    )
  }
}
