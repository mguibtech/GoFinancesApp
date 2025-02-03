import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../../hooks/useAppTheme';
import {Icon} from '../../Icon/Icon';
import {Text} from '../../Text/Text';
import {Box, TouchableOpacityBox} from '../../Box/Box';
import {useAppSafeArea} from '../../../hooks/useAppSafeArea';
import {ScreenHeader} from './components/ScreenHeader';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  component?: React.ReactElement;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  component,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  // const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.backgroundHeader}>
        <ScreenHeader title={title} component={component} />
        <Box
          backgroundColor="background"
          flex={1}
          borderTopLeftRadius="s60"
          borderTopRightRadius="s60">
          <Box
            paddingBottom="s24"
            paddingHorizontal="s24"
            style={{paddingTop: top, paddingBottom: bottom}}>
            {canGoBack && (
              <TouchableOpacityBox
                // onPress={navigation.goBack}
                mb="s24"
                flexDirection="row">
                <Icon name="eyeOff" color="primary" />
                <Text preset="paragraphMedium" semiBold ml="s8">
                  Voltar
                </Text>
              </TouchableOpacityBox>
            )}
            {children}
          </Box>
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
