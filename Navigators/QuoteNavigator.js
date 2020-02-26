import React from 'react';
import  QuoteScreen  from '../Screens/Cotizador/Quote';
import  QuoteResult  from '../Screens/Cotizador/QuoteResult';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

export const QuoteNavigator = props=>(
    <Stack.Navigator>
        <Stack.Screen 
            name='Datos de Cotizacion'
            component={QuoteScreen}
            options={{
                tabBarLabel:'Formulario',
                tabBarIcon:({ color, size })=>(<FontAwesomeIcon color={color} size={size} icon={faEdit}/>)
            }} />
        <Stack.Screen 
            name='Cotización'
            component={QuoteResult}
            options={{
                tabBarLabel:'Planes',
                tabBarIcon:({ color, size })=>(<FontAwesomeIcon color={color} size={size} icon={faMoneyBill}/>)
            }}
        />
    </Stack.Navigator>
)
