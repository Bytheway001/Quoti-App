import React from 'react';

import { HomeScreen } from '../Screens/Home/Home'
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCoins, faBalanceScale, faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { FileScreen } from '../Screens/Directorio/Files';
import { QuoteNavigator } from './QuoteNavigator';
import { CompareScreen } from '../Screens/Comparador/Compare';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompareNavigator } from './CompareNavigator';

const Tab = createBottomTabNavigator();
export const MainNavigator = props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: Colors.blue,
        inactiveTintColor: Colors.lightBlue,
        style: {
            borderWidth: 1,
            borderColor: Colors.lightBlue,
            borderTopColor: Colors.lightBlue,
            borderTopWidth: 1,
            borderRadius: 10,
            padding: 3
        }
    }}>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{

                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (<FontAwesomeIcon color={color} size={size} icon={faHome} />)
            }}
        />
        <Tab.Screen

            name="Quote"
            component={QuoteNavigator}
            options={{
                tabBarLabel: 'Cotizador',
                tabBarIcon: ({ color, size }) => (<FontAwesomeIcon color={color} size={size} icon={faCoins} />)
            }} />
        <Tab.Screen
            name="Compare"
            component={CompareNavigator}
            options={{
                tabBarLabel: 'Comparador',
                tabBarIcon: ({ color, size }) => (<FontAwesomeIcon color={color} size={size} icon={faBalanceScale} />)
            }}
        />
        <Tab.Screen
            name="Files"
            component={FileScreen}
            options={{
                tabBarLabel: 'Directorio',
                tabBarIcon: ({ color, size }) => (<FontAwesomeIcon color={color} size={size} icon={faFileArchive} />)
            }}
        />
    </Tab.Navigator>
) 