
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Colors } from './assets/Colors';
import { LoginScreen } from './Screens/Login';

const HomeScreen = props=> {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.blue }}>
      <Text style={{ color: 'white' }}>Home Screen</Text>
      <Button title='Ingresar' onPress={()=>props.navigation.navigate('Login')}/>
    </View>
  );
}



const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login:{
    screen: LoginScreen
  }
});



export default createAppContainer(AppNavigator);