import React from 'react'
import styled from 'styled-components'

import {
  NavText,
  NavBox,
  Line,
  StaticRotator,
  SecondaryTitle,
} from '../../../Components'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const TextContainer = styled.div`
  text-align: right;
  line-height: 61px;
`

const LineContainer = styled.div`
  height: 219px;
`

const choices = [
  'Projects',
  'Experience',
  'Education',
  'Contact Me',
]

export default () => (
  <NavBox>
    <Container>
      <TextContainer>
        {
          choices.map(choice => <NavText>{choice}</NavText>)
        }
      </TextContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <StaticRotator degrees={90}>
        <SecondaryTitle active>Camden Ko</SecondaryTitle>
      </StaticRotator>
    </Container>
  </NavBox>
)
