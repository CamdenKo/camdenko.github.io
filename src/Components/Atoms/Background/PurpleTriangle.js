import styled from 'styled-components'

export default styled.div`
  width: 0;
  height: 0;
  z-index: -1;
  border-bottom: 100vh solid ${({ theme }) => theme.purple};
  border-right: 100vw solid transparent;
  position: absolute;
  top: 0;
  left: 0;
`
