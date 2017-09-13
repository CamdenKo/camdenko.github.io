import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Container = styled.div`
    position: absolute;
    height: fit-content;
    width: fit-content;
    top: ${props.top}px;
    left: ${props.left}px;
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
