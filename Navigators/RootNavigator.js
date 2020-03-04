import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/Login';
import { connect } from 'react-redux';
import SideNavigator from './SideNavigator';
const headerStyles = {
    backgroundColor: 'white',

}
const Stack = createStackNavigator()
const RootNavigator = ({ navigation, user, ...props }) => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                user ?
                    <Stack.Screen name='Home' component={SideNavigator} />
                    :
                    <Stack.Screen name='Home' component={LoginScreen} />
            }


        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
  
    return {
        user: state.session.user
    }
}

const mapDispatchToProps = dispatch => {


    return {
        logout: () => dispatch(Logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);