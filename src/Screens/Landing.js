import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme'
import { Navbar } from '../Components'
import './Landing.css'

export default () => (
  <ThemeProvider theme={{}}>
    <Navbar />
  </ThemeProvider>
)