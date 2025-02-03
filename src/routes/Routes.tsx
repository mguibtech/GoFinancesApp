import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {NewPasswordScreen} from '../screens/auth/NewPasswordScreen/NewPassowordScreen';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {SecurityFingerprintScreen} from '../screens/auth/SecurityFingerprintScreen/SecurityFingerprintScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';

export type RootStateParamList = {
  LoginScreen: undefined;
  NewPasswordScreen: undefined;
  ForgotPasswordScreen: undefined;
  SecurityFingerprintScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStateParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="SecurityFingerprintScreen"
          component={SecurityFingerprintScreen}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
