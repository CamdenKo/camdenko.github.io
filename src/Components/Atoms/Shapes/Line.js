import styled, { keyframes } from 'styled-components'

const initialGrowth = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`

export default styled.div`
  margin: 0 10px 10px 0;
  box-sizing: border-box;
  height: 100%;
  width: 5px;
  box-shadow: 5px 0 0 0 ${({ theme }) => theme.black};
  border-radius: 10px;
  animation ${initialGrowth} cubic-bezier(.785, .135, .15, .86) 0.5s forwards;
  animation-delay: 0.50s;
  transform: scaleY(0);
`
