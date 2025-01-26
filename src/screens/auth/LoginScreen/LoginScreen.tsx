import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function LoginScreen() {
  return (
    <View>
      <Text>Tela de login</Text>
      <Button title="Botao de login" />
    </View>
  );
}
