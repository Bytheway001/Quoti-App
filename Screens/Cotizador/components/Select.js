import React from 'react'
import { View, Text,Picker } from 'react-native'
import { Col, Row } from '../../../Components/Layout'
import { Colors } from '../../../assets/Colors'


export const Select = ({ style, options,title,value,onChange, ...props }) => {
    return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{flex:2,justifyContent:'center'}}>
                <Text style={{ color: Colors.lightBlue }}>{title}</Text>
            </View>
            <View style={{flex:10,justifyContent:'center',borderWidth:1,borderRadius:20,borderColor:Colors.blue,height:40,paddingLeft:20}}>
                <Picker style={{color:Colors.blue}} selectedValue={value} onValueChange={(data)=>{onChange(data)}}>
                    <Picker.Item label="Seleccione..." value=""/>                   
                    {
                        options.map((option, key) => {
                            return <Picker.Item label={option.label} value={option.value} key={key} />
                        })
                    }
                </Picker>
            </View>
        </View>
    )
}

