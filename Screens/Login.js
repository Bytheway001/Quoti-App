import React from 'react';

import { Container, Row, Col } from '../Components/Layout';
import { Text, TextInput, Button, View } from 'react-native';
import { Colors } from '../assets/Colors';
export const LoginScreen = props => {
    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Row style={{ alignItems: 'center', justifyContent: 'center' }} >
                <Col size={1} style={{ justifyContent: 'center', alignItems: 'center', width: '80%', marginBottom: 10 }}>
                <Text style={{fontSize:18,textAlign:'left',width:'80%',color:Colors.blue}}>Usuario:</Text>
                    <TextInput style={{ borderBottomColor: Colors.blue, borderBottomWidth: 1,borderRadius:0, alignItems: 'center', width: '80%' }} />
                </Col>
            </Row>
            <Row style={{ alignItems: 'center', justifyContent: 'center' }} >
            <Col size={1} style={{ justifyContent: 'center', alignItems: 'center', width: '80%', marginBottom: 10 }}>
                <Text style={{fontSize:18,textAlign:'left',width:'80%',color:Colors.blue}}>Contraseña:</Text>
                    <TextInput style={{ borderBottomColor: Colors.blue, borderBottomWidth: 1,borderRadius:0, alignItems: 'center', width: '80%' }} />
                </Col>
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Col size={1} style={{alignItems:'center'}} >
                    <View style={{width:'80%'}}>
                    <Button title='Ingresar' />
                    </View>
                </Col>
            </Row>



        </Container>
    )
}

