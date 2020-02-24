
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Colors } from './assets/Colors';
import { LoginScreen } from './Screens/Login';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const HomeScreen = props => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Home Screen</Text>
      <Button style={styles.homeButton} title='Ingresar' onPress={() => props.navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  home: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.blue },
  homeText:{ color: 'white' },
  homeButton: {paddingTop:20}
});

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen
  }
},

{
  initialRouteName:'Login'
});



export default createAppContainer(AppNavigator);