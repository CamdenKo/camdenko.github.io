import React from 'react'
import styled from 'styled-components'

import {
  NavText,
  NavBox,
  Line,
  TextRotator,
  SecondaryTitle,
} from '../../../Components'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  text-align: right;
  line-height: 61px;
  display: unset;
`

const LineContainer = styled.div`
  height: 219px;
  padding-left: 20px;
  padding-right: 10px;
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
      <TextRotator>
        <SecondaryTitle active padding="10px 0">Camden Ko</SecondaryTitle>
      </TextRotator>
    </Container>
  </NavBox>
)
