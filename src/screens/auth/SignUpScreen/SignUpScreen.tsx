import React from 'react';
import {Screen} from '../../../components/Screen/ScreenAuth/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  return (
    <Screen title="Criar conta">
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mt: 's14'}}
      />
      <TextInput
        label="Email"
        placeholder="example@example.com"
        boxProps={{mt: 's16'}}
      />
      <TextInput
        label="Numero de telefone"
        placeholder="+ 123 456 79"
        boxProps={{mt: 's16'}}
      />
      <TextInput
        label="Data de nascimento"
        placeholder="DD / MM / YYYY"
        boxProps={{mt: 's16'}}
      />
      <TextInput
        label="Senha"
        placeholder="************"
        boxProps={{mt: 's16'}}
        rightComponent={<Icon name="EyeOff" />}
      />
      <TextInput
        label="Confirmar senha"
        placeholder="***********"
        boxProps={{mt: 's16'}}
        rightComponent={<Icon name="EyeOff" />}
      />

      <Text
        textAlign="center"
        preset="paragraphCaptionSmall"
        marginTop="s24"
        semiBold>
        Ao continuar, você concorda com{`\n`}
        Termos de Uso e Política de Privacidade.
      </Text>
      <Button title="Criar conta" marginVertical="s12" />
      <Text preset="paragraphCaptionSmall" textAlign="center">
        Já possui uma conta?{' '}
        <Text preset="paragraphCaptionSmall" color="lightBlue">
          Sing Up
        </Text>
      </Text>
    </Screen>
  );
}
