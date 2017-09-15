import React from 'react'
import styled from 'styled-components'

import {
  NavText,
  NavBox,
  Line,
  TextRotator,
  SecondaryTitle,
} from '../../../Components'

const Container = NavBox.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  text-align: right;
  line-height: 61px;
  display: unset;
`

const LinePadding = Line.extend`
  height: 219px;
  margin-left: 20px;
  margin-right: 20px;
`

const delayPer = 0.2

export default props => (
  <Container>
    <TextContainer>
      {
        props.links.map((link, index) =>
          <NavText delay={(index * delayPer) + (props.delay || 0)} key={link.name} href={link.url}>{link.name}</NavText>)
      }
    </TextContainer>
    <LinePadding />
    <TextRotator>
      <SecondaryTitle active padding="10px 0">Camden Ko</SecondaryTitle>
    </TextRotator>
  </Container>
)
