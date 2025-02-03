import React from 'react';
import {Screen} from '../../../components/Screen/ScreenAuth/Screen';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Image} from 'react-native';
import imageFingerprint from '../../../assets/images/image_fingerprint.png';

export function SecurityFingerprintScreen() {
  return (
    <Screen title={`Impressão  Digital`}>
      <Box alignItems="center" pt="s56">
        <Image source={imageFingerprint} style={{width: 130, height: 130}} />
        <Text preset="paragraphLarge" semiBold mt="s40">
          Use fingerprint to access
        </Text>
        <Text preset="paragraphSmall" mt="s24" textAlign="center" mb="s48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Text>
        <Button width={300} preset="outline" title="Adicionar digital" />
      </Box>
    </Screen>
  );
}
