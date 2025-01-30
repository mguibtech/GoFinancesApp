import React from 'react';
import {Screen} from '../../../components/Screen/ScreenAuth/Screen';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';

export function ForgotPasswordScreen() {
  return (
    <Screen title="Esqueceu a Senha">
      <Text bold preset="headingSmall" mt="s56">
        Resetar senha?
      </Text>

      <Text preset="paragraphCaption" mt="s8">
        Digite seu e-mail cadastrado para receber um link de redefinição de
        senha. Siga as instruções enviadas para criar uma nova senha e recuperar
        o acesso à sua conta.
      </Text>

      <TextInput
        label="Digite seu E-mail"
        placeholder="example@example.com"
        boxProps={{mt: 's56'}}
      />

      <Button title="Proxima etapa" mt="s48" mb="s56" />

      <Box mt="s32" justifyContent="center" alignItems="center">
        <Button title="Cirar conta" preset="outline" />

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
            Sing Up
          </Text>
        </Text>
      </Box>
    </Screen>
  );
}
