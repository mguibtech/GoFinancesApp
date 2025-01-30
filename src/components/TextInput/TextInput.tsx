import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  rightComponent,
  errorMessage,
  boxProps,
  ...textInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();

  const $textInputContainer: BoxProps = {
    backgroundColor: 'greenPrimaryLight',
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 0,
    borderColor: errorMessage ? 'error' : undefined,
    padding: 's8',
    borderRadius: 's20',
  };

  return (
    <Box {...boxProps}>
      <Text
        preset="paragraphSmall"
        color="backgroundContrast"
        mb="s8"
        ml="s12"
        semiBold>
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray3}
          autoCapitalize="none"
          style={$textInputStyle}
          {...textInputProps}
        />
        {rightComponent && (
          <Box ml="s16" justifyContent="center">
            {rightComponent}
          </Box>
        )}
      </Box>
      {errorMessage && (
        <Text color="error" preset="paragraphSmall" ml="s12">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  marginLeft: 15,
  justifyContent: 'center',
  color: '#093030',
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
