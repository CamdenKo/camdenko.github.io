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

export default props => (
  <NavBoxMobile>
    <Body>
      <SecondaryTitle padding="0 10px" active>Camden Ko</SecondaryTitle>
      <NavTextWrapper>
        {
          props.links.map(link => <NavText href={link.url}>{link.name}</NavText>)
        }
      </NavTextWrapper>
    </Body>
  </NavBoxMobile>
)
