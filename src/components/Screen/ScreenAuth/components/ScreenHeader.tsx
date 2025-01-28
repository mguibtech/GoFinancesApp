import React from 'react';
import {Box, TouchableOpacityBox} from '../../../Box/Box';
import {Text} from '../../../Text/Text';
import {Icon} from '../../../Icon/Icon';

interface ScreenHeaderProps {
  canGoBack?: boolean;
  title?: string;
}

export function ScreenHeader({canGoBack, title}: ScreenHeaderProps) {
  return (
    <Box paddingVertical="s40" paddingHorizontal="s10">
      {canGoBack ? (
        <Box
          // onPress={navigation.goBack}
          // mb="s24"
          // backgroundColor="redErrorLight"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row">
          <TouchableOpacityBox flexDirection="row">
            <Icon name="EyeOffIcon" color="backgroundHeaderContrast" />
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          </TouchableOpacityBox>
          <Text preset="headingMedium" semiBold ml="s8">
            {title}
          </Text>
          <Box width={80} />
        </Box>
      ) : (
        <Box alignItems="center">
          <Text preset="headingLarge" semiBold ml="s8">
            {title}
          </Text>
        </Box>
      )}
    </Box>
  );
}
