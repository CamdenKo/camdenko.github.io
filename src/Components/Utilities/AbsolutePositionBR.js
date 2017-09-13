import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Container = styled.div`
    position: absolute;
    height: fit-content;
    width: fit-content;
    bottom: ${props.bottom}px;
    right: ${props.right}px;
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
