import React from 'react'

import {
  Red,
  RedTriangle,
  Disappearer,
} from '../../../Components'

export default props => (
  <div>
    <Red>
      {props.children}
    </Red>
    <Disappearer>
      <RedTriangle />
    </Disappearer>
  </div>
)
