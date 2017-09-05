import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Circle,
  X,
} from '../Components'

storiesOf('Shapes', module)
  .addDecorator(story => (
    <div style={{ backgroundColor: 'black', padding: '10px' }}>
      {story()}
    </div>
  ))
  .add('circle', () => <Circle />)
  .add('X', () => <X />)
