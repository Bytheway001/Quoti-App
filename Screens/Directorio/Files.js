import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDown } from './Dropdown';
import { Col, Row, } from '../../Components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Colors } from '../../assets/Colors';
import { Left } from 'native-base';

export const FileScreen = props => {
    const [show, setShow] = useState("");

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 100, paddingRight: 110 }}>

            <Col>

                <DropDown title={'Best Doctors'} for='BD' show={show === 'BD'} onPress={setShow}  ></DropDown>

            </Col>



            <Col  >
                <DropDown title={'BUPA Salud'} for='BS' show={show === 'BS'} onPress={setShow}  ></DropDown>
            </Col>


            <Col >
                <DropDown title={'VUMI Group'} for='VG' show={show === 'VG'} onPress={setShow}  ></DropDown>
            </Col>


            <Col >
                <DropDown title={'Allianz Care'} for='AC' show={show === 'AC'} onPress={setShow}  ></DropDown>

            </Col>


            <Col >
                <DropDown title={'BMI Seguros'} for='BM' show={show === 'BM'} onPress={setShow}  ></DropDown>
            </Col>


        </View>
    )
}

