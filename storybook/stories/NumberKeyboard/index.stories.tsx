import * as React from 'react';
import { View } from 'react-native';
import C, { apply } from 'consistencss';
import NumberKeyboard from 'react-native-number-keyboard';

const NumberKeyboard = () => (
  <View style={apply(C.p3, C.row, C.justifyAround)}>
    <NumberKeyboard />
  </View>
);

export default NumberKeyboard;
