
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { LoginScreen } from './Screens/Login';
import { MainNavigator } from './Navigators/MainNavigator';

const AppNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  App: {
    screen: MainNavigator,
  }
},
{
  initialRouteName:'Login'
});



export default createAppContainer(AppNavigator);