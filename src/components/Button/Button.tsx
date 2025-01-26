import React from 'react';

import {ButtonProps as RNButtonProps} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../Box/Box';

interface ButtonProps extends RNButtonProps {
  title: string;
}

export function Button({title, ...buttonProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s32"
      backgroundColor="buttonPrimary"
      {...buttonProps}>
      <Text>{title}</Text>
    </TouchableOpacityBox>
  );
}
