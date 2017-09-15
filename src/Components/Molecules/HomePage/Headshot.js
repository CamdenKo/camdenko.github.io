import React from 'react'
import styled from 'styled-components'

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
} from '../../../Components'
import { media } from '../../../theme'

const Container = styled.div`
  overflow: hidden;
  width: fit-content;
  position: relative;
  height: 425px;
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
  line-height: 20px;
`

const SmallChatText = styled.small`
  font-size: small;
`

export default () => (
  <ShapeContainer>
    <Container>
      <CircleWithLines>
        <ChatBubbleContainer>
          <TextBubble>
            <ChatText>
              Designed with <span role="img" aria-label="Heart">♥️</span>
              <br />
              <SmallChatText>(looking for work)</SmallChatText>
            </ChatText>
          </TextBubble>
        </ChatBubbleContainer>
        <ImageContainer>
          <HeadshotImage />
        </ImageContainer>
      </CircleWithLines>
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
