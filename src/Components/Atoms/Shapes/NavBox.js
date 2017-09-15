import styled from 'styled-components'

export default styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.yellow};
  transform: rotate(10deg);
`
