import React from 'react';
import {theme} from './src/theme/theme';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ForgotPasswordScreen} from './src/screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {NewPasswordScreen} from './src/screens/auth/NewPasswordScreen/NewPassowordScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NewPasswordScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
