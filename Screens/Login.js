import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../Components/Layout';
import { Text, TextInput, Image, AsyncStorage, KeyboardAvoidingView, Linking } from 'react-native';
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';
import { API } from '../globals';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { setAuthToken } from '../utils/setAuthToken';
import { connect } from 'react-redux';
import { Login } from '../ducks/session';


const LoginScreen = ({login}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>

            <Container style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Image
                    style={{ width: 120, height: 120 }}
                    resizeMode="contain"
                    source={require('../assets/quoti-logo.png')}
                >
                </Image>
                <Row>
                    <Col>
                        <Text style={{ fontSize: 28, paddingBottom: 16, color: Colors.blue }}>Bienvenido de vuelta!</Text>
                        <Row style={{ alignItems: 'center' }}>
                            <Col size={1} style={{ marginRight: 7 }}>
                                <FontAwesomeIcon icon={faEnvelope} color={Colors.lightBlue} size={20} />
                            </Col>
                            <Col size={11}>
                                <TextInput
                                    style={{ textDecorationStyle: 'dotted', fontSize: 20, color: Colors.lightBlue, borderBottomColor: Colors.lightBlue, borderBottomWidth: 1 }}
                                    placeholderTextColor='lightgray'
                                    value={email}
                                    onChangeText={(e) => setEmail(e)}
                                    placeholder="Correo electrónico" />

                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', marginTop: 20 }}>
                            <Col size={1} style={{ marginRight: 7 }}>
                                <FontAwesomeIcon icon={faKey} color={Colors.lightBlue} size={20} />
                            </Col>
                            <Col size={11}>
                                <TextInput
                                    style={{ fontSize: 20, color: Colors.lightBlue, borderBottomColor: Colors.lightBlue, borderBottomWidth: 1 }}
                                    placeholderTextColor='lightgray'
                                    value={password}
                                    onChangeText={(e) => setPassword(e)}
                                    placeholder="Contraseña"
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col size={1} style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={()=>login(email,password)} style={{ backgroundColor: Colors.blue, paddingVertical: 7, paddingHorizontal: 50 }}>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Ingresar</Text>
                                </TouchableOpacity>
                            </Col>
 
                        </Row>
                        <Row>
                            <TouchableOpacity onPress={() => Linking.openURL('http://www.quotiapp.com/password')}>
                                <Text style={{ color: 'blue', paddingLeft: 82, paddingTop: 15 }}
                                    >
                                    Olvido su clave?
                                </Text>
                            </TouchableOpacity>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col size={1} style={{ alignItems: 'center' }}>
                                {
                                    error ?
                                        <Text style={{ fontSize: 16, color: 'red' }}>{error}</Text>
                                        :
                                        null
                                }

                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container>
        </KeyboardAvoidingView>

    )
}

const mapStateToProps = state =>{
    return {}
}

const mapDispatchToProps = dispatch=>{
    return{
        login:(email,password)=>dispatch(Login(email,password))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)
