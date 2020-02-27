import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../Screens/Home/Home';
import { HomeNavigator } from './HomeNavigator';
import { QuoteNavigator } from './QuoteNavigator';
import { MainNavigator } from './MainNavigator';
const Drawer = createDrawerNavigator();
export const SideNavigator = props =>{
    return(
        <Drawer.Navigator >
          <Drawer.Screen name="Home" component={MainNavigator} />
        </Drawer.Navigator>
    )
}