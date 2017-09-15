import React from 'react'
import styled, { keyframes } from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const loadAnimation = keyframes`
  from {
    background-position: -100% 0;
    color: white;
  }

  to {
    background-position: 0 0;
    color: black;
  }
`

export default (props) => {
  const delay = props.delay || 0

  const Container = styled.p`
    color: ${({ theme }) => theme.black};
    background-image: linear-gradient(to right, transparent 50.2%, ${({ theme }) => theme.black} 49.8%);
    background-size: 200% 100%;
    transition: background-position .6s, color .3s;
    font-size: 30px;
    font-weight: 200;
    font-family: Raleway;
    width: 100%;
    margin: 0;
    cursor: pointer;
    animation ${loadAnimation} 1.3s ease-in;
    animation-delay: ${delay}s;

    &:hover {
      background-position: -100% 0;
      color: ${({ theme }) => theme.white};
    }
  `

  return (
    <Container>
      <Link href={props.href}>
        {props.children}
      </Link>
    </Container>
  )
}
