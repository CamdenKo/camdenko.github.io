import React from 'react'
import styled from 'styled-components'

import {
  CircleWithLines,
  HeadshotImage,
  X,
  Circle,
  AbsolutePosition,
  Scaler,
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
  left: 300px;
  width: 300px;
`

export default () => (
  <ShapeContainer>
    <Container>
      <CircleWithLines>
        <ChatBubbleContainer>
          <Scaler scale={0.5}>
            <TextBubble>Designed with &hearts;<br /><small>please hire me.</small></TextBubble>
          </Scaler>
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
