import React from 'react';
import QuoteScreen from '../Screens/Cotizador/Quote';
import QuoteResult from '../Screens/Cotizador/QuoteResult';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faMoneyBill, faGlobeAfrica, faCog } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

const headerStyles = {
    backgroundColor: 'white',
  
}
const Stack = createStackNavigator()

export const QuoteNavigator = props => (
    <Stack.Navigator
    >
        <Stack.Screen
            name='Cotizador'
            component={QuoteScreen}
            options={{
                tabBarLabel: 'Formulario',
                tabBarIcon: ({ color, size }) => (<FontAwesomeIcon color={color} size={size} icon={faEdit} />),
                headerStyle: headerStyles,
                headerTintColor: Colors.lightBlue,
                headerRight: () => (
                    <FontAwesomeIcon icon={faCog} size={24} color={Colors.lightBlue} style={{marginRight:20}}/>
                )
            }} />
        <Stack.Screen
            name='Cotización'
            component={QuoteResult}
            options={{
                tabBarLabel: 'Planes',
                tabBarIcon: ({ color, size }) => (<FontAwesomeIcon color={color} size={size} icon={faMoneyBill} />)
            }}
        />
    </Stack.Navigator>
)
