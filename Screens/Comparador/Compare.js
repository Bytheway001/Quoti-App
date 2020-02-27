import React, { useState } from 'react';
import { Button, View, Picker } from 'native-base';
import { Row, Col, Text } from '../../Components/Layout';
import { styles } from './styles';
import { Colors } from '../../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faFile, faBars } from '@fortawesome/free-solid-svg-icons';

const OptionPicker = props => {
    return (
        <Row style={{ paddingHorizontal: 5, alignItems: 'center', borderWidth: 1, margin: 5, borderColor: Colors.buttonBlue, borderWidth: 2, borderRadius: 10 }}>
            <Col size={1} style={{ alignItems: 'center' }}>
                <FontAwesomeIcon icon={faFile} size={24} color={Colors.buttonBlue} />
            </Col>
            <Col size={11}>
                <Picker mode='dialog' style={{ color: Colors.buttonBlue }} textStyle={{ color: 'red' }}>
                    <Picker.Item value="" label='Seleccione...' />
                    <Picker.Item value="33" label='Global Care' />
                    <Picker.Item value="33" label='Medical Care' />
                    <Picker.Item value="33" label='Global Pass Choice I Latam' />
                </Picker>
            </Col>

        </Row>
    )
}

export const CompareScreen = props => {
    const [planNumber, setPlanNumber] = useState(1);


    return (
        <View style={{ paddingHorizontal: 10 }}>
            <Row style={styles.row}>
                <Col size={1} style={{ borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Button
                        onPress={() => setPlanNumber(1)}
                        style={{
                            ...styles.button,
                            backgroundColor: planNumber === 1 ? Colors.buttonBlue : Colors.skyBlue
                        }}>
                        <Text style={{ width: '100%' }} color='white' align='center'>1 Plan</Text>
                    </Button>
                </Col>
                <Col size={1} style={{ borderRightWidth: 1, borderLeftWidth: 1, borderLeftColor: 'white', borderRightColor: 'white' }}>
                    <Button
                        onPress={() => setPlanNumber(2)}
                        style={{
                            ...styles.button,
                            backgroundColor: planNumber === 2 ? Colors.buttonBlue : Colors.skyBlue
                        }}>
                        <Text style={{ width: '100%' }} color='white' align='center'>2 Planes</Text>
                    </Button>
                </Col>
                <Col size={1} style={{ borderLeftWidth: 1, borderLeftColor: 'white' }} >
                    <Button
                        onPress={() => setPlanNumber(3)}
                        style={{
                            ...styles.button,
                            backgroundColor: planNumber === 3 ? Colors.buttonBlue : Colors.skyBlue
                        }}>
                        <Text style={{ width: '100%' }} color='white' align='center'>3 Planes</Text>
                    </Button>
                </Col>


            </Row>
            <View style={{ marginTop: 30 }}>
                <OptionPicker />
                <OptionPicker />
                <OptionPicker />
            </View>

        </View>

    )
}