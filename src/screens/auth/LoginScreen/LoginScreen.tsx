import React from 'react';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/ScreenAuth/Screen';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';

export function LoginScreen() {
  return (
    <Screen title="Mozim">
      <TextInput
        placeholder="Digite seu e-mail"
        label="Username Or Email"
        boxProps={{mt: 's32'}}
      />

      <TextInput
        placeholder="Informe sua senha"
        label="Password"
        boxProps={{mt: 's24'}}
        rightComponent={<Icon name="EyeOff" />}
      />

      <Button title="Log In" mt="s56" mb="s16" />
      <Text textAlign="center" mb="s14" preset="paragraphCaption" bold>
        Forgot Password?
      </Text>
      <Button title="Cirar conta" preset="outline" />

      <Box mt="s12" justifyContent="center" alignItems="center">
        <Text semiBold preset="paragraphSmall" mt="s14">
          Use{' '}
          <Text color="oceanBlue" semiBold preset="paragraphSmall">
            Fingerprint
          </Text>{' '}
          To Access
        </Text>
        <Text preset="paragraphCaptionSmall" mt="s16">
          or sign up with
        </Text>
        <Box flexDirection="row" gap="s16" marginVertical="s20">
          <Icon name="facebook" size={32} />
          <Icon name="google" size={32} />
        </Box>
        <Text preset="paragraphCaptionSmall">
          Dont't have an account?{' '}
          <Text preset="paragraphCaptionSmall" color="lightBlue">
            Criar contar
          </Text>
        </Text>
      </Box>
    </Screen>
  );
}
