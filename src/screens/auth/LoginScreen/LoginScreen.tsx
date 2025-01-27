import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';

export function LoginScreen() {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text>Tela de login</Text>
      <Button title="Botao de login" disabled />
      <TextInput label="Username Or Email" errorMessage="Mensagem de error" />
      <TextInput label="Username Or Email" />
    </View>
  );
}
