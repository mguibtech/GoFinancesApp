import React from 'react';

import {ButtonProps as RNButtonProps, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProps extends RNButtonProps {
  title: string;
}

export function Button({title, ...buttonProps}: ButtonProps) {
  return (
    <TouchableOpacity {...buttonProps}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
