import React from 'react';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {theme} from './src/theme/theme';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <LoginScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
