import { css } from 'styled-components'

export default {
  main: 'red',
  yellow: 'FFF86A',
}

const sizes = {
  phonePhone: 300,
  phoneTablet: 600,
  tabletTablet: 900,
  tabletDesktop: 1200,
  desktopBigDesktop: 1800,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
