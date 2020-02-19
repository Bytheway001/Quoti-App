import React from 'react';
import { View, Text } from 'react-native'
import { Colors } from '../assets/Colors';

export const Container = ({ children, style }) => {
    return (
        <View style={{ flex: 1,paddingTop:25,paddingLeft:10,paddingRight:10,...style}}>
            {children}
        </View>
    )
}

export const Row = ({ style, children }) => {
    return (
        <View style={{ flexDirection: 'row',...style}}>
            {children}
        </View>
    )
}

export const Col = ({ style, children, size }) => {
 
    return (
        <View style={{ flexDirection:'column',flex:size,...style }}>
            {children}
        </View>
    )
}