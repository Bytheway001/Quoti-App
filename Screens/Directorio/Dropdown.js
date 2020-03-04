import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Colors } from '../../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from '../../Components/Layout';


export const DropDown = (props) => {


    return (
        <View >

            <TouchableWithoutFeedback onPress={() => props.onPress(props.for)} style={{ padding: 15 }}

            >
                <Row style={{ alignItems: 'center'}}>
                    <Col>
                        <FontAwesomeIcon icon={faAngleDoubleRight} color={Colors.lightBlue} size={20} />
                    </Col>
                    <Col>
                        <Text style={{ color: Colors.lightBlue, fontSize: 33 }}>{props.title}</Text>
                    </Col>
                </Row>
            </TouchableWithoutFeedback>

            <View style={{ display: props.show ? 'flex' : 'none' }}>

                <Text style={{ paddingBottom: 5, paddingLeft: 50, fontSize: 25, color: Colors.lightBlue }}>Beneficios</Text>
                <Text style={{ paddingBottom: 5, paddingLeft: 50, fontSize: 26, color: Colors.lightBlue }}>Formularios</Text>
                <Text style={{ paddingBottom: 5, paddingLeft: 50, fontSize: 26, color: Colors.lightBlue }}>Tarifarios</Text>
                <Text style={{ paddingBottom: 5, paddingLeft: 50, fontSize: 26, color: Colors.lightBlue }}>Endosos</Text>
                <Text style={{ paddingBottom: 5, paddingLeft: 50, fontSize: 26, color: Colors.lightBlue }}>Coberturas</Text>
                <Text style={{ paddingBottom: 5, paddingLeft: 50, fontSize: 26, color: Colors.lightBlue }}>General</Text>

            </View>
        </View>
    )
}

