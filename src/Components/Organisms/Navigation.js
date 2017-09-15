import React from 'react'

import {
  MobileNav,
  Nav,
  DifferentComponents,
} from '../../Components'

const delayBig = 0.85
const delaySmall = 0.3

export default props => (
  <DifferentComponents
    big={<Nav {...props} delay={delayBig} />}
    small={<MobileNav {...props} delay={delaySmall} />}
  />
)
