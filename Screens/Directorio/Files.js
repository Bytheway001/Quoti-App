import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDown } from './Dropdown';
import { Col, Row, } from '../../Components/Layout';


export const FileScreen = props => {
    const [show, setShow] = useState("");

    return (
        <View style={{alignItems: 'center', justifyContent: 'center' , paddingTop: 100 , paddingRight:120}}>


            <Col size={0}>
                <DropDown title={'-Best Docters'} for='BD' show={show === 'BD'} onPress={setShow}  ></DropDown>
            </Col>
            <Col size={0}>
                <DropDown title={'-BUPA Salud'} for='BS' show={show === 'BS'} onPress={setShow}  ></DropDown>
            </Col>
            <Col size={0}>
                <DropDown title={'-VUMI Group'} for='VG'show={show === 'VG'} onPress={setShow}  ></DropDown>
            </Col>
            <Col size={0}>
                <DropDown title={'-Allianz Care'} for='AC'show={show === 'AC'} onPress={setShow}  ></DropDown>
            </Col>
            <Col size={0}>
                <DropDown title={'-BMI Seguros'}for='BM'  show={show === 'BM'} onPress={setShow}  ></DropDown>
            </Col>


        </View>
    )
}

