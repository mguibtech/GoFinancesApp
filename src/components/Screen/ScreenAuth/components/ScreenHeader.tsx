import React from 'react';
import {Box, TouchableOpacityBox} from '../../../Box/Box';
import {Text} from '../../../Text/Text';
import {Icon} from '../../../Icon/Icon';

interface ScreenHeaderProps {
  canGoBack?: boolean;
  title?: string;
  component?: React.ReactElement;
}

interface HeaderWithIconProps {
  title?: string;
  component?: React.ReactElement;
}

export function ScreenHeader({canGoBack, title, component}: ScreenHeaderProps) {
  return (
    <Box marginTop="s40" marginBottom="s56" paddingHorizontal="s10">
      {canGoBack ? (
        <Box
          // onPress={navigation.goBack}
          // mb="s24"
          // backgroundColor="redErrorLight"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row">
          <TouchableOpacityBox flexDirection="row">
            <Icon name="eyeOff" color="backgroundHeaderContrast" />
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
        <HeaderWithIcon title={title} component={component} />
      )}
    </Box>
  );
}

export function HeaderWithIcon({title, component}: HeaderWithIconProps) {
  return (
    <Box>
      <Box mb="s10">{component}</Box>
      <Text preset="headingLarge" ml="s8">
        {title}
      </Text>
    </Box>
  );
}
