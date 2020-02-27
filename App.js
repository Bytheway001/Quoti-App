import React, { useEffect, useState, Fragment } from 'react';
import { LoginScreen } from './Screens/Login';
import { HomeScreen } from './Screens/Home/Home';

//import { MainNavigator } from './Navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'native-base';
import { AsyncStorage } from 'react-native';
import { MainNavigator } from './Navigators/MainNavigator';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './ducks/root';
import { ConfigureToken } from './utils/configureAxios';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
const Stack = createStackNavigator();

const App = props => {
  const [token, setUserToken] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    LoadApp()
  })

  ConfigureToken();
  const LoadApp = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    const userToken = await AsyncStorage.getItem('jwt')
    if (userToken) {
      setUserToken(userToken)
      console.log('User is found')
    }
    else {
      setUserToken(null);
    }
    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          {
            token ?
              <Stack.Screen name='Home' component={MainNavigator} />
              :
              <Fragment>
                <Stack.Screen name="Home" component={HomeScreen} loadApp={LoadApp} />

              </Fragment>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const Loading = props => {
  return (
    <View>
      <Text>LOADING</Text>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    token: state.session.token
  }
}

export default App;