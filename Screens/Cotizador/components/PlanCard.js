import React from 'react';
import { View, Text } from 'native-base';
import { Colors } from '../../../assets/Colors';
import { Row, Col } from '../../../Components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const PlanCard = props => {
    return (
        <View style={{ borderWidth: 1, borderColor: Colors.blue, borderTopEndRadius: 20, borderTopStartRadius: 20,marginVertical:15 }}>
            <View style={{ borderWidth: 1, borderColor: Colors.blue, backgroundColor: Colors.blue, borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <View style={{ height: 40 }}></View>
                <Text style={{ textAlign: 'center', color: 'white' }}>PLAN NAME</Text>
            </View>
            <View>
                <Row>
                    <Col size={1} style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.lightBlue }}>
                        <Text style={{ fontSize: 16, color: Colors.blue, textAlign: 'center', width: '100%' }}>Deducible:</Text>
                        <Text style={{ fontSize: 20, color: Colors.blue, textAlign: 'center' }}>$9,999</Text>
                    </Col>
                    <Col size={1} style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.lightBlue }}>
                        <Text style={{ fontSize: 16, color: Colors.blue, textAlign: 'center', width: '100%' }}>Cobertura Maxima:</Text>
                        <Text style={{ fontSize: 20, color: Colors.blue, textAlign: 'center' }}>$9,999,999/año</Text>
                    </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                    <Col size={1}>
                        <Text style={{ textAlign: 'center' }}>ENDOSOS</Text>
                        <Row style={{ paddingHorizontal: 10, marginVertical: 5, justifyContent: 'space-between' }}>

                            <Col>
                                <Text>Costo Administrativo</Text>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faCircle} size={20} color='green' />
                            </Col>

                        </Row>
                        <Row style={{ paddingHorizontal: 10, marginVertical: 5, justifyContent: 'space-between' }}>

                            <Col>
                                <Text>Complicaciones de Maternidad</Text>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faCircle} size={20} color='green' />
                            </Col>

                        </Row>
                        <Row style={{ paddingHorizontal: 10, marginVertical: 5, justifyContent: 'space-between' }}>

                            <Col>
                                <Text>Transplante de Organos</Text>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faCircle} size={20} color='green' />
                            </Col>

                        </Row>
                        <Row style={{ paddingHorizontal: 10, marginVertical: 5, justifyContent: 'space-between' }}>
                            <Col>
                                <Text>Plan Dental</Text>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faCircle} size={20} color='green' />
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row style={{marginBottom:7}}>
                    <Col size={1} style={{paddingHorizontal:7}}>
                        <TouchableOpacity style={{ backgroundColor: Colors.blue,paddingVertical:7,borderRadius:5 }}>
                            <Text style={{textAlign:'center',color:'white'}}>Agregar al Comparativo</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </View>
        </View>
    )
}