import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Container, Row, Col } from '../../Components/Layout';
import { Colors } from '../../assets/Colors';
import SoporteIcon from '../../assets/soporteIcon.png';
import DocumentosIcon from '../../assets/documentosIcon.png';
import ComparadorIcon from '../../assets/comparadorIcon.png';
import CotizadorIcon from '../../assets/cotizadorIcon.png';
import BackGroundImage from '../../assets/bgMerged.png';
import QuoteLogo  from '../../assets/quoti-logo.png';

const HomeIcon = ({ src, title, style,borders }) => {
    let borderRightWidth = borders['right']==true?2:0
    let borderLeftWidth = borders['left']==true?2:0
    let borderBottomWidth = borders['bottom']==true?2:0
    let borderTopWidth = borders['top']==true?2:0
    console.log(borderRightWidth)
    
    const styles = {
        alignItems: 'center',
        borderBottomWidth,
        borderTopWidth,
        borderLeftWidth,
        borderRightWidth,
        borderColor:Colors.lightBlue,
        borderRightColor: Colors.lightBlue,
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingVertical:5
    }
    return (
        <Row style={styles} >
            <View>
                <Image
                    style={{ width: 55, height: 55 }}
                    source={src}
                >
                </Image>

            </View>


            <View>
                <Text style={{ marginLeft: 7, marginRight: 7, color:Colors.lightBlue }}>{title}</Text>
            </View>
        </Row >
    )
}

export const HomeScreen = (props) => {
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
                        <HomeIcon src={ComparadorIcon} title='Cotizador' borders={{right:true,bottom:true}}/>
                        <HomeIcon src={DocumentosIcon} title='Cotizador' borders={{bottom:true,right:true}}/>
                        
                    </Col>
                    <Col size={1}>
                    <HomeIcon src={CotizadorIcon} title='Cotizador' borders={{bottom:true}}/>
                        <HomeIcon src={SoporteIcon} title='Soporte' borders={{bottom:true}}/>
                    </Col>
                </Row>


            </Container>
        </ImageBackground>
    )
}