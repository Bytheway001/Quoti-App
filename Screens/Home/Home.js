import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Container, Row, Col } from '../../Components/Layout';
import { Colors } from '../../assets/Colors';


export const HomeScreen = (props) => {
    return (

        <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/bgMerged.png')}
            resizeMode='cover'
        >





            <Container style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 200 }}>
            <Image
                style={{ width: 200, height: 200, display: "flex", alignItems: 'center', justifyContent: 'center' }}
                resizeMode="contain"
                source={require('../../assets/quoti-logo.png')}
            ></Image>


                <Row>
                    <Col>
                        <Row style={{ alignItems: 'center', borderBottomWidth: 2, borderRightWidth: 2, borderBottomColor: Colors.lightBlue, borderRightColor: Colors.lightBlue }}>

                            <View >
                                <Image
                                    style={{ width: 60, height: 60}}

                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>

                            </View>


                            <View>
                                <Text style={{ marginLeft: 7, marginRight:7 }}>Comparador</Text>
                            </View>

                        </Row>
                    </Col>

                    <Row>
                        <Col>
                        <Row style={{ alignItems: 'center', borderBottomWidth: 2, borderBottomColor: Colors.lightBlue }}>
                            <View>
                                <Image
                                    style={{ width: 60, height: 60, paddingLeft:10}}
                                    resizeMode="contain"
                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 7, marginRight: 0 }}>Documentos</Text>
                            </View>
                            </Row>
                        </Col>
                        
                    </Row>
                </Row>

                <Row>
                    <Col >
                        <Row style={{ alignItems: 'center', borderBottomWidth: 2, borderRightWidth: 2, borderBottomColor: Colors.lightBlue, borderRightColor: Colors.lightBlue }}>
                            <View style={{paddingLeft:5}} >
                                <Image
                                    style={{ width: 60, height: 60 }}
                                    resizeMode="contain"
                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 20, marginRight:10 }}>Cotizador</Text>
                            </View>
                        </Row>
                    </Col>
                    <Row>
                        <Col>
                        <Row  style={{  alignItems: 'center',borderBottomWidth: 2, borderBottomColor: Colors.lightBlue}}>
                            <View>
                                <Image
                                    style={{ width: 60, height: 60}}
                                    resizeMode="contain"
                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 20, marginRight:10 }}>Soporte</Text>
                            </View>
                            </Row>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </ImageBackground>
    )
}