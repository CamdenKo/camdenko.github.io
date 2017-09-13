import React from 'react'
import styled from 'styled-components'

import {
  CircleWithLines,
  HeadshotImage,
  X,
  Circle,
  AbsolutePosition,
  Scaler,
} from '../../../Components'

const Container = styled.div`
  overflow: hidden;
  width: fit-content;
  position: relative;
  height: 425px;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export default () => (
  <div>
    <Container>
      <CircleWithLines>
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
    <AbsolutePosition top={320} left={420}>
      <Scaler scale={0.9}>
        <X />
      </Scaler>
    </AbsolutePosition>
  </div>
)
