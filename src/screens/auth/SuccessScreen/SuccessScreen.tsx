import React from 'react';
import {Screen} from '../../../components/Screen/ScreenAuth/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function SuccessScreen() {
  return (
    <Screen
      component={<Icon name="checkRound" size={48} color="FenceGreen" />}
      title="Sua conta foi criada com sucesso!">
      <Text preset="headingLarge" mt="s24"></Text>
      <Text preset="paragraphLarge" mt="s16"></Text>
      <Button title="Voltar ao inicio" preset="primary" mt="s40" />
    </Screen>
  );
}
