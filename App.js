
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { LoginScreen } from './Screens/Login';
import { MainNavigator } from './Navigators/MainNavigator';

const AppNavigator = createSwitchNavigator({
  App: {
    screen: MainNavigator,
  },
  Login: {
    screen: LoginScreen
  }
},
{
  initialRouteName:'App'
});



export default createAppContainer(AppNavigator);