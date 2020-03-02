import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'native-base';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './ducks/root';
import { ConfigureToken } from './utils/configureAxios';
import jwt_decode from 'jwt-decode';
import { onLoginSucceeded } from './ducks/session';
import RootNavigator  from './Navigators/RootNavigator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)


const App = props => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    LoadApp()
  },[])

  ConfigureToken();
  const LoadApp = async () => {
    const userToken = await AsyncStorage.getItem('jwt')
    if (userToken) {
      store.dispatch(onLoginSucceeded(jwt_decode(userToken).data))
    }
    setLoading(false)
  }

  if (loading) { return <Loading /> }
 

  return (
    <Provider store={store}>
      <NavigationContainer >
        <RootNavigator />
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

export default App;