import * as React from 'react';
import {
  storiesOf,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import NumberKeyboard from './NumberKeyboard/index.stories';

addDecorator(withBackgrounds);

addParameters({
  backgrounds: [
    { name: 'dark', value: '#222222' },
    { name: 'white', value: '#ffffff', default: true },
  ],
});

storiesOf('Keyboard', module).add('NumberKeyboard', () => <NumberKeyboard />);
