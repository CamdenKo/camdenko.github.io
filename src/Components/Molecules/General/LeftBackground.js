import React from 'react'

import {
  Purple,
  PurpleTriangle,
} from '../../../Components'

export default props => (
  <div>
    <Purple>
      {props.children}
    </Purple>
    <PurpleTriangle />
  </div>
)
