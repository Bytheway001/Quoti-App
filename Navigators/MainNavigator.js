import React from 'react';

import { HomeScreen } from '../Screens/Home/Home'
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faMoneyBill, faBalanceScale, faFile } from '@fortawesome/free-solid-svg-icons';
import { FileScreen } from '../Screens/Directorio/Files';
import { QuoteNavigator } from './QuoteNavigator';
import { CompareScreen } from '../Screens/Comparador/Compare';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export const MainNavigator = props => (
    <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:"Inicio"}} component={HomeScreen} />
        <Stack.Screen name="Quote" options={{title:"Cotizador"}} component={QuoteNavigator} />
        <Stack.Screen name="Compare" component={CompareScreen} />
        <Stack.Screen name="Files" component={FileScreen} />
    </Stack.Navigator>
)