import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {HomeScreen} from '../Screens/Home/Home'
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faMoneyBill, faBalanceScale, faFile } from '@fortawesome/free-solid-svg-icons';
import { FileScreen } from '../Screens/Directorio/Files';
import { QuoteNavigator } from './QuoteNavigator';
import { CompareScreen } from '../Screens/Comparador/Compare';

export const MainNavigator = createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ tintColor }) => <FontAwesomeIcon icon={faHome} size={26} style={{ color: tintColor }} />
        }
    },
    Quote:{
        screen:QuoteNavigator,
        navigationOptions:{
            tabBarLabel: 'Cotizador',
            tabBarIcon: ({ tintColor }) => <FontAwesomeIcon icon={faMoneyBill} size={26} style={{ color: tintColor }} />
        }
    },
    Compare:{
        screen:CompareScreen,
        navigationOptions:{
            tabBarLabel: 'Comparador',
            tabBarIcon: ({ tintColor }) => <FontAwesomeIcon icon={faBalanceScale} size={26} style={{ color: tintColor }} />
        }
    },
    Files:{
        screen:FileScreen,
        navigationOptions:{
            tabBarLabel: 'Directorio',
            tabBarIcon: ({ tintColor }) => <FontAwesomeIcon icon={faFile} size={26} style={{ color: tintColor }} />
        }
    }
},{
    initialRouteName:'Quote',
    tabBarOptions:{
        activeTintColor:Colors.blue,
        inactiveTintColor: Colors.lightBlue,
        style:{
            backgroundColor:'white',
        }
    }
})