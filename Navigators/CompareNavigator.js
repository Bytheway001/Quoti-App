import React from 'react';
import {CompareScreen} from '../Screens/Comparador/Compare';
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faMoneyBill, faCog } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';


const headerStyles = {
    backgroundColor: 'white',
  
}
const Stack = createStackNavigator()

export const CompareNavigator = props => (
    <Stack.Navigator
    >
        <Stack.Screen
            name='Comparador'
            component={CompareScreen}
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
            name='Listado'
            component={CompareScreen}
            options={{
                tabBarLabel: 'Planes',
                tabBarIcon: ({ color, size }) => (<FontAwesomeIcon color={color} size={size} icon={faMoneyBill} />)
            }}
        />
    </Stack.Navigator>
)
