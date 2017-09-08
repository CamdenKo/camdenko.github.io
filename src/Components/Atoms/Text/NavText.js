import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Container = styled.div`
    color: ${({ theme }) => props.active ? theme.white : theme.black};
    background-color: ${props.active ? ({ theme }) => theme.black : 'transparent'};
    font-size: 30px;
    font-weight: 200;
    font-family: Raleway;
    padding: 5px 10px;
    width: fit-content;
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
