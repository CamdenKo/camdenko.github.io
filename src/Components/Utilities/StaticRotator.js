import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Container = styled.div`
    transform: rotate(${props.degrees}deg);
    width: fit-content;
    height: fit-content;
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
