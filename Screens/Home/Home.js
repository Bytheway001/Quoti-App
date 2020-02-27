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
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                    source={require('../../assets/quoti-logo.png')}
                >
                </Image>

                <Row>
                    <Col>
                        <Row>
                            <View >
                                <Image
                                    style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderRightWidth: 2, borderBottomColor: Colors.lightBlue, borderRightColor: Colors.lightBlue }}

                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>

                                <Text>Soporte</Text>
                            </View>
                        </Row>
                    </Col>

                    <Row>
                        <Col>
                            <View>
                                <Image
                                    style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: Colors.lightBlue }}
                                    resizeMode="contain"
                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>

                                <Text>Soporte</Text>
                            </View>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Col>
                        <Row>
                            <View>
                                <Image
                                    style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderRightWidth: 2, borderBottomColor: Colors.lightBlue, borderRightColor: Colors.lightBlue }}
                                    resizeMode="contain"
                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>

                                <Text>Soporte</Text>
                            </View>
                        </Row>
                    </Col>
                    <Row>
                        <Col>
                            <View>
                                <Image
                                    style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: Colors.lightBlue }}
                                    resizeMode="contain"
                                    source={require('../../assets/placeHolder.png')}
                                >
                                </Image>


                                <Text  >Soporte</Text>
                            </View>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </ImageBackground>
    )
}