import styled from 'styled-components'

export default styled.div`
  width: 0;
  height: 0;
  z-index: -1;
  border-top: 100vh solid ${({ theme }) => theme.red};
  border-left: 100vh solid transparent;
`
