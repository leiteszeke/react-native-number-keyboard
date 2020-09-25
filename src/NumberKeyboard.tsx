import C, { apply } from 'consistencss';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DeleteIcon from './DeleteIcon';

import {
  NumberKeyboardRow,
  NumberKeyboardProps,
  NumberKeyboardKey,
} from './NumberKeyboard.types';

const keys: NumberKeyboardRow[] = [
  [
    { number: '1', letters: '' },
    { number: '2', letters: 'ABC' },
    { number: '3', letters: 'DEF' },
  ],
  [
    { number: '4', letters: 'GHI' },
    { number: '5', letters: 'JKL' },
    { number: '6', letters: 'MNO' },
  ],
  [
    { number: '7', letters: 'PQRS' },
    { number: '8', letters: 'TUV' },
    { number: '9', letters: 'WXYZ' },
  ],
];

const NumberKeyboard = ({
  customStyles = {},
  onDelete,
  onKeyPress,
  showDot = false,
  showLetters = false,
}: NumberKeyboardProps) => {
  const handlePress = (key: string) => () => {
    if (key === '') {
      return;
    }

    if (key === 'del') {
      return onDelete?.();
    }

    onKeyPress?.(key);
  };

  const Key = React.useCallback(
    ({
      children,
      empty,
      value,
      text,
    }: {
      children?: React.ReactNode;
      empty?: boolean;
      value: string;
      text?: string;
    }) => (
      <TouchableOpacity
        activeOpacity={empty ? 1 : 0.6}
        style={apply(
          C.itemsCenter,
          C.bgWhite,
          {
            borderColor: '#979797',
            borderRightWidth: 1,
            borderTopWidth: 1,
          },
          C.flex,
          C.h12,
          C.justifyCenter,
          ((Number(value) !== 0 && Number(value) % 3 === 0) ||
            value === 'del') && { borderRightWidth: 0 },
        )}
        onPress={!empty ? handlePress(value) : () => {}}
        testID={`numberKeyboard-key-${value}`}>
        {empty ? (
          <View />
        ) : (
          <>
            {children || (
              <Text
                style={apply(
                  C.font6,
                  C.line7,
                  { color: '#2E394C' },
                  { backgroundColor: customStyles.background },
                )}>
                {value}
              </Text>
            )}
            {!!text && showLetters && (
              <Text
                style={apply(
                  C.font6,
                  { color: '#2E394C' },
                  { color: customStyles.color },
                )}>
                {text}
              </Text>
            )}
          </>
        )}
      </TouchableOpacity>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [customStyles, showLetters],
  );

  const renderKey = (key: NumberKeyboardKey, index: number) => (
    <Key key={index} value={key.number} text={key.letters} />
  );

  const renderNumberKeys = () =>
    keys.map((group: NumberKeyboardRow, groupIndex: number) => (
      <View key={groupIndex} style={C.row}>
        {group.map(renderKey)}
      </View>
    ));

  return (
    <View style={C.row}>
      <View style={apply(C.selfEnd, C.flex)}>
        {renderNumberKeys()}

        <View style={C.row}>
          <Key value="." empty={!showDot} />

          <Key value="0" />

          <Key value="del">
            <DeleteIcon />
          </Key>
        </View>
      </View>
    </View>
  );
};

export default NumberKeyboard;
