import React from 'react';
import {theme} from './src/theme/theme';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignUpScreen} from './src/screens/auth/SignUpScreen/SignUpScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SignUpScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
