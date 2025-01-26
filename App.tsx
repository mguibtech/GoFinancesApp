import React from 'react';
import {SafeAreaView} from 'react-native';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {theme} from './src/theme/theme';
import {ThemeProvider} from '@shopify/restyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
