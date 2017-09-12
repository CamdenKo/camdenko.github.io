import React from 'react'
import styled from 'styled-components'


export default (props) => {
  const Container = styled.div`
    background-color: ${props.active ? ({ theme }) => theme.black : 'transparent'};
    color: ${props.active ? ({ theme }) => theme.white : ({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.primaryFontFamily};
    font-weight: 600;
    padding: ${props.padding || '0'};
    font-size: 40px;
    width: fit-content;
    overflow: hidden;
    white-space: nowrap;
    ${props.onClick && 'cursor: pointer;'}
  `

  return (
    <Container onClick={props.onClick}>
      {props.children}
    </Container>
  )
}
