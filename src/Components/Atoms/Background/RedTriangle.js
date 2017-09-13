import styled from 'styled-components'

export default styled.div`
  width: 0;
  height: 0;
  z-index: -1;
  border-top: 97vh solid ${({ theme }) => theme.red};
  border-left: 100vw solid transparent;
  position: absolute;
  top: 0;
  right: 0;
`
