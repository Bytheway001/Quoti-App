
import React, { useState } from 'react';
import { View, Text, Button, Image, ImageBackground, AsyncStorage, Linking } from 'react-native';

import { Container, Row, Col } from '../../Components/Layout';
import BackGroundImage from '../../assets/bgMerged.png';
import QuoteLogo from '../../assets/quoti-logo.png';
import { Feather } from '../../Components/Feather';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBalanceScale, faFileArchive, faCoins } from '@fortawesome/free-solid-svg-icons';
export const HomeScreen = (props) => {
    const [show, setShow] = useState('');

    const logOut = () => {
        AsyncStorage.clear();
        props.navigation.navigate('Login');
    }
    return (
        <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={BackGroundImage}
            resizeMode='cover'
        >
            <Container style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 190 }}>

                <Image style={{ width: 200, height: 200, display: "flex", alignItems: 'center', justifyContent: 'center' }} resizeMode="contain" source={QuoteLogo}></Image>
                <Row>
                    <Col size={1}>
                        <Feather icon={faBalanceScale} title='Comparador' borders={{ right: true, bottom: true }} onPress={()=>props.navigation.navigate('Compare')}/>
                        <Feather icon={faCoins} title='Cotizador' borders={{ bottom: true, right: true }} onPress={()=>props.navigation.navigate('Quote')}/>

                    </Col>
                    <Col size={1}>
                        <Feather icon={faFileArchive} title='Documentos' borders={{ bottom: true }} onPress={()=>props.navigation.navigate('Files')}/>
                        <Feather icon={faWhatsapp} title='Soporte' borders={{ bottom: true }} onPress={()=>Linking.openURL('https://api.whatsapp.com/send?phone=59178123178&text=Buen%20dia,%20Requiero%20soporte%20con%20el%20Quoti%20App')}/>
                    </Col>


                </Row>
               




            </Container>
        </ImageBackground>
    )
}

