import React from 'react'
import styled from 'styled-components'


export default (props) => {
  const Container = styled.h6`
    background-color: ${props.active ? ({ theme }) => theme.black : 'transparent'};
    color: ${props.active ? ({ theme }) => theme.white : ({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.primaryFontFamily};
    font-weight: 600;
    padding: ${props.padding || '0'};
    font-size: 40px;
    width: fit-content;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    ${props.onClick && 'cursor: pointer;'}
  `

  return (
    <Container onClick={props.onClick}>
      {props.children}
    </Container>
  )
}
