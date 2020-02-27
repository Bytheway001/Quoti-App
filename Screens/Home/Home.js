import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Container, Row, Col } from '../../Components/Layout';
import { Colors } from '../../assets/Colors';
import QuoteIcon from '../../assets/placeHolder.png';

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
                    style={{ width: 60, height: 60 }}
                    source={src}
                >
                </Image>

            </View>


            <View>
                <Text style={{ marginLeft: 7, marginRight: 7 }}>{title}</Text>
            </View>
        </Row >
    )
}

export const HomeScreen = (props) => {
    return (
        <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/bgMerged.png')}
            resizeMode='cover'
        >
            <Container style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 200 }}>
                <Image style={{ width: 200, height: 200, display: "flex", alignItems: 'center', justifyContent: 'center' }} resizeMode="contain" source={require('../../assets/quoti-logo.png')}></Image>
                <Row>
                    <Col size={1}>
                        <HomeIcon src={QuoteIcon} title='Cotizador' borders={{right:true,bottom:true}}/>
                        <HomeIcon src={QuoteIcon} title='Cotizador' borders={{bottom:true,right:true}}/>
                        
                    </Col>
                    <Col size={1}>
                    <HomeIcon src={QuoteIcon} title='Cotizador' borders={{bottom:true}}/>
                        <HomeIcon src={QuoteIcon} title='Cotizador' borders={{bottom:true}}/>
                    </Col>
                </Row>


            </Container>
        </ImageBackground>
    )
}