import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from '../Screens/Home/Home'
import { createStackNavigator } from 'react-navigation-stack';
import { QuoteScreen } from '../Screens/Cotizador/Quote';
import { Colors } from '../assets/Colors';
import { QuoteResult } from '../Screens/Cotizador/QuoteResult';

const options= {
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: Colors.blue
    },
}

export const QuoteNavigator = createStackNavigator({
    Quote: {
        screen: QuoteScreen,
        navigationOptions: {
            ...options,
            title: 'Cotizador',
            
        }
    },
    QuoteResult:{
        screen:QuoteResult,
        navigationOptions:{
            ...options,
            title:'Cotizacion'
        }
    }
})
