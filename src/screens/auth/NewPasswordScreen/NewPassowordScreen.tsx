import React from 'react';
import {Screen} from '../../../components/Screen/ScreenAuth/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
export function NewPasswordScreen() {
  return (
    <Screen title="Nova Senha">
      <TextInput
        label="Nova senha"
        placeholder="*****************"
        boxProps={{mt: 's56'}}
      />
      <TextInput
        label="Confirme a nova senha"
        placeholder="*****************"
        boxProps={{mt: 's40', marginBottom: 's56'}}
      />
      <Button title="Alterar senha" mt="s56" />
    </Screen>
  );
}
