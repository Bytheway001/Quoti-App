import React from 'react';

import { Container, Row, Col } from '../Components/Layout';
import { Text, TextInput, Button, View, Image, StyleSheet, Icon } from 'react-native';
import { Colors } from '../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const LoginScreen = props => {

    return (

        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>

            <Image
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
                source={require('../assets/quoti-logo.png')}
            >

            </Image>
            <Row style={{ alignItems: 'center', justifyContent: 'center' }} >
                <Col size={1} style={{ justifyContent: 'center', alignItems: 'center', width: '80%', marginBottom: 10 }}>
                    <Text style={{ fontSize: 28, paddingBottom: 16, width: '80%', color: Colors.blue }}>Bienvenido de vuelta!</Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', width: '80%', color: Colors.blue }}>Usuario:</Text>
                    <View style={styles.textContainer}>
                        <FontAwesomeIcon icon={faUser} size={24} color="black" />
                        <TextInput placeholder="Correo electrónico" style={styles.inputStyle} />
                    </View>
                </Col>
            </Row>
            <Row style={{ alignItems: 'center', justifyContent: 'center' }} >

                <Col size={1} style={{ justifyContent: 'center', alignItems: 'center', width: '80%', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, textAlign: 'left', width: '80%', color: Colors.blue }}>Contraseña:</Text>
                    <TextInput placeholder="Contraseña" style={styles.inputStyle} />
                </Col>
            </Row>

            <Row style={{ justifyContent: 'center' }}>
                <Col size={1} style={{ alignItems: 'center' }} >
                    <View style={{ width: '80%' }}>
                        <Button title='Ingresar' />
                    </View>

                    <View style={styles.container}>

                        <View style={styles.SectionStyle}>


                            <Image

                                //source={{uri:'http://aboutreact.com/wp-content/uploads/2018/08/user.png',}}

                                //You can also show the image from you project directory like below
                                source={require('../assets/quoti-logo.png')}

                                style={styles.ImageStyle}
                            />

                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Email"

                            />
                        </View>
                    </View>


                </Col>
            </Row>





        </Container>


    )
}

const styles = StyleSheet.create({

    textContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'red',

    },
    inputStyle: {
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1,
        borderRadius: 0,
        alignItems: 'center',
        width: '80%',

    },
    inputStyle2: {
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1,
        borderRadius: 0,
        alignItems: 'center',
        width: '80%',
        flex: 1

    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },


});

