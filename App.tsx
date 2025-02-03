import React from 'react';
import {theme} from './src/theme/theme';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ForgotPasswordScreen} from './src/screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {NewPasswordScreen} from './src/screens/auth/NewPasswordScreen/NewPassowordScreen';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {SecurityFingerprintScreen} from './src/screens/auth/SecurityFingerprintScreen/SecurityFingerprintScreen';
import {SuccessScreen} from './src/screens/auth/SuccessScreen/SuccessScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SuccessScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
