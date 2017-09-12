import React from 'react'
import styled from 'styled-components'

import {
  CircleWithLines,
  HeadshotImage,
} from '../../../Components'

const Container = styled.div`
  overflow: hidden;
  width: fit-content;
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
  <Container>
    <CircleWithLines>
      <ImageContainer>
        <HeadshotImage />
      </ImageContainer>
    </CircleWithLines>
  </Container>
)
