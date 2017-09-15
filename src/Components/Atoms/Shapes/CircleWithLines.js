import styled from 'styled-components'

import { media } from '../../../theme'

const BoxSpacing = '30px'

export default styled.div`
  height: 500px;
  width: 500px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.yellow} 60%,
    ${({ theme }) => theme.purple} 40%,
    ${({ theme }) => theme.purple}
  );
  display: flex;
  border-radius: 500px;
  overflow: hidden;
  padding-top: ${BoxSpacing};
  box-sizing: border-box;
  background-size: 100% 50px;
  ${
    media.tabletDesktop`
      width: 450px;
      height: 450px;
    `
  }
  ${
    media.tabletTablet`
      width: 300px;
      height: 300px;
    `
  }
  ${
    media.phoneTablet`
      width: 500px;
      height: 500px;
    `
  }
`
