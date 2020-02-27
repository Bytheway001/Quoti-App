import React , { Component } from 'react';
import {View, Picker } from 'react-native';

export default class Picker extends Component 
{
    constructor()
    {
        super();
        this.state={selectedLabel:''};
    }
    Show = (value) =>
    {
        alert(value)
        this.setState({selectedLabel:value});
    }
    render()
    {
        return(
            <View>
                <Picker 
                selectedValue={this.state.selectedLabel}
                onValueChange={this.Show.bind()}>    
                    <Picker.Item label="Best Doctors" value="0"></Picker.Item>
                    <Picker.Item label="Bupa Salud" value="1"></Picker.Item>
                    <Picker.Item label="Vumi Salud" value="2"></Picker.Item>
                    <Picker.Item label="Allianz" value="3"></Picker.Item>
                    <Picker.Item label="BMI Seguros" value="4"></Picker.Item>
                </Picker>
            </View>
        )
    }
}
