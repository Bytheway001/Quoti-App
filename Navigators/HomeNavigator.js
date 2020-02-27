import React from 'react';
import { CompareScreen } from '../Screens/Comparador/Compare';
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faMoneyBill, faCog } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/Home/Home';
import { TouchableNativeFeedback, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { DrawerIcon } from './DrawerIcon';



const headerStyles = {
    backgroundColor: 'white',

}
const Stack = createStackNavigator()

export const HomeNavigator = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name='Inicio'
            component={HomeScreen}
            options={{
                tabBarLabel: 'Inicio',
                headerStyle: headerStyles,
                headerTintColor: Colors.lightBlue,
                headerRight: () => (
                    <DrawerIcon navigation={navigation}/>

                )
            }} />
    </Stack.Navigator>
)
