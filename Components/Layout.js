import React from 'react';
import { View,Text as P } from 'react-native'
import { Colors } from '../assets/Colors';

export const Container = ({ children, style }) => {
    return (
        <View style={{ flex: 1,paddingTop:25,paddingLeft:10,paddingRight:10,...style,backgroundColor:'white'}}>
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

export const Text = ({style,children,color,size,align})=>{
    

    return(
        <P style={{textAlign:align,color:Colors[color],fontSize:size,...style}}>{children}</P>
    )
}