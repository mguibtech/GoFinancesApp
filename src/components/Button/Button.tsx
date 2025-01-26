import React from 'react';

import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading, ...buttonProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s32"
      backgroundColor="buttonPrimary"
      {...buttonProps}>
      {loading ? <ActivityIndicator /> : <Text>{title}</Text>}
    </TouchableOpacityBox>
  );
}
