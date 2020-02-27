import React, { useEffect, useState, Fragment } from 'react';
import { LoginScreen } from './Screens/Login';
import { HomeScreen } from './Screens/Home/Home';

//import { MainNavigator } from './Navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'native-base';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { MainNavigator } from './Navigators/MainNavigator';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { rootReducer } from './ducks/root';
import { ConfigureToken } from './utils/configureAxios';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { QuoteNavigator } from './Navigators/QuoteNavigator';
import { HomeNavigator } from './Navigators/HomeNavigator';
import { SideNavigator } from './Navigators/SideNavigator';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)


const App = props => {
  const [token, setUserToken] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    LoadApp()
  })

  ConfigureToken();
  const LoadApp = async () => {
    const userToken = await AsyncStorage.getItem('jwt')
    if (userToken) {
      setUserToken(userToken)
    }
    else {
      setUserToken(null);
      console.log('Token not set')
    }
    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
       <SideNavigator/>
      </NavigationContainer>
    </Provider>
  )
}

const Loading = props => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <ActivityIndicator />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    token: state.session.token
  }
}

export default App;