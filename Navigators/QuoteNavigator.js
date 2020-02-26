import React from 'react';
import  QuoteScreen  from '../Screens/Cotizador/Quote';
import  QuoteResult  from '../Screens/Cotizador/QuoteResult';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const TabOptions = {
    inactiveBackgroundColor:Colors.lightBlue,
    activeBackgroundColor:Colors.blue,
    activeTintColor:'white',
    inactiveTintColor:'white',
    showIcon:true
}



const Tab = createBottomTabNavigator()

export const QuoteNavigator = props=>(
    <Tab.Navigator tabBarOptions={TabOptions}>
        <Tab.Screen 
            name='Quote'
            component={QuoteScreen}
            options={{
                tabBarLabel:'Formulario',
                tabBarIcon:({ color, size })=>(<FontAwesomeIcon color={color} size={size} icon={faEdit}/>)
            }} />
        <Tab.Screen 
            name='QuoteResult'
            component={QuoteResult}
            options={{
                tabBarLabel:'Planes',
                tabBarIcon:({ color, size })=>(<FontAwesomeIcon color={color} size={size} icon={faMoneyBill}/>)
            }}
        />
    </Tab.Navigator>
)
