import React from 'react'
import styled from 'styled-components'

import {
  NavText,
  NavBoxMobile,
  SecondaryTitle,
} from '../../../Components'

const Body = NavBoxMobile.extend`
  padding: 17px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`

const NavTextWrapper = styled.div`
  padding-top: 11px;
`

const delayPer = 0.2

export default props => (
  <Body>
    <SecondaryTitle padding="0 10px" active>Camden Ko</SecondaryTitle>
    <NavTextWrapper>
      {
        props.links.map((link, index) =>
          <NavText delay={index * delayPer} key={link.name} href={link.url}>{link.name}</NavText>)
      }
    </NavTextWrapper>
  </Body>
)
