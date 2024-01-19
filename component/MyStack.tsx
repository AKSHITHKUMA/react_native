/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ViewScreen from './ViewScreen';
import LoginScreen from './LoginScreen';
// import { Provider } from 'react-redux';
// import store from './Redux/Store';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    // <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="View" component={ViewScreen} />
    </Stack.Navigator>
    // </Provider>
  );
};

export default MyStack;
