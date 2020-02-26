import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

export const HomeScreen = (props)=>{
    return(
        <View>
            <Text>This is the home Screen</Text>
            <Button onPress={()=>props.navigation.navigate("Quote")} title='Cotizador'/>
        </View>
    )
}