import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OnBoarding from '../screens/OnBoarding';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Onboarding" initialRouteName='Onboarding' component={OnBoarding} />
      <Stack.Screen name="Authenticate" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
