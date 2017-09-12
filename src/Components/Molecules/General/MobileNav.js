import React from 'react'
import styled from 'styled-components'

import {
  NavText,
  NavBoxMobile,
  SecondaryTitle,
} from '../../../Components'

const Body = styled.div`
  padding: 17px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavTextWrapper = styled.div`
  padding-top: 11px;
`

const choices = [
  'Projects',
  'Experience',
  'Education',
  'Contact Me',
]

export default () => (
  <NavBoxMobile>
    <Body>
      <SecondaryTitle padding="0 10px" active>Camden Ko</SecondaryTitle>
      <NavTextWrapper>
        {
          choices.map(choice => <NavText>{choice}</NavText>)
        }
      </NavTextWrapper>
    </Body>
  </NavBoxMobile>
)
