import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

export default (props) => {
  const Container = styled.div`
    color: ${({ theme }) => props.active ? theme.white : theme.black};
    background-color: ${props.active ? ({ theme }) => theme.black : 'transparent'};
    font-size: 30px;
    font-weight: 200;
    font-family: Raleway;
    width: 100%;
    cursor: pointer;
  `

  return (
    <Container>
      <Link href={props.href}>
        {props.children}
      </Link>
    </Container>
  )
}
