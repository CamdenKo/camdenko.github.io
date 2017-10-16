import styled from 'styled-components'

export default styled.menu`
  position: relative;
  width: 180px;
  height: 100px;
  text-align: center;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};

  &:before {
    content: "";
    position: absolute;
    bottom: -69px;
    right: 0;
    border-width: 0 0 70px 70px;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.white};
  }
`
