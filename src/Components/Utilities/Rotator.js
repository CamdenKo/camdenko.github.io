import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme'


export default (ToWrap, degrees) => {
  const Container = styled.div`
    ${media.phonePhone`
      transform: rotate(${degrees}deg);
    `}
  `

  return (
    <Container>
      <ToWrap />
    </Container>
  )
}
