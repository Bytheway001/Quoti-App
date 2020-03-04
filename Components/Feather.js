import React from 'react';
import { View } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { Colors } from '../assets/Colors';
import { Text } from './Layout';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
export const Feather = ({icon, title, style,onPress}) =>{
    return (
        <TouchableOpacity onPress={()=>onPress()}>
        <View style={{
            borderWidth:2,
            margin:7,
            justifyContent:'center',
            alignItems:'center',
            padding:10,
            borderColor:Colors.lightBlue,
            borderTopLeftRadius:15,
            borderBottomRightRadius:15
            }}>
            <FontAwesomeIcon icon={icon} color={Colors.lightBlue} size={36} style={{marginTop:15,marginBottom:15}}/>
            <Text align='center' color='lightBlue' style={{marginBottom:15}}>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}