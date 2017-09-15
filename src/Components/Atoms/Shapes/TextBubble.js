import styled from 'styled-components'

export default styled.div`
  position: relative;
  width: 360px;
  height: 200px;
  text-align: center;
  background-color: ${({ theme }) => theme.white};

  &:before {
    content: "";
    position: absolute;
    bottom: -140px;
    right: 0;
    border-width: 0 0 140px 140px;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.white};
  }
`
