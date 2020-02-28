import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Colors } from '../../assets/Colors';



export const DropDown = (props) => {


    return (
        <View>
            <TouchableWithoutFeedback onPress={() => props.onPress(props.for)} style={{  padding: 15  }}

            >
                <Text style={{ color:Colors.lightBlue , fontSize: 33 }}>{props.title}</Text>

            </TouchableWithoutFeedback>

            <View style={{ boroderWidth: 1, borderColor: 'red', marginTop: -1, display: props.show ? 'flex' : 'none' }}>
                <Text style={{ paddingLeft: 50 , fontSize:25, color:Colors.lightBlue}}>item1</Text>
                <Text style={{ paddingLeft: 50 , fontSize:25, color:Colors.lightBlue}}>item2</Text>
                <Text style={{ paddingLeft: 50 , fontSize:25, color:Colors.lightBlue}}>item3</Text>
                <Text style={{ paddingLeft: 50 , fontSize:25, color:Colors.lightBlue}}>item4</Text>
                <Text style={{ paddingLeft: 50 , fontSize:25, color:Colors.lightBlue}}>item5</Text>
            </View>
        </View>
    )
}

