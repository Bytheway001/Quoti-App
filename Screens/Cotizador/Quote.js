import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Container, Row, Col } from '../../Components/Layout';
import { Select } from './components/Select';
import { Colors } from '../../assets/Colors';

const CountryOptions = [
    { label: 'Bolivia', value: "BO" },
    { label: 'Peru', value: 'PE' },
    { label: 'Paraguay', value: 'PA' }
]

const PlanOptions = [
    { label: 'Personal', value: "1" },
    { label: 'Parejas', value: "2" },
    { label: 'Familias', value: "3" }
]

export const QuoteScreen = ({ navigation }) => {
    const [country, setCountry] = useState("");
    const [plan_type, setPlanType] = useState("");
    const [numKids, setNumKids] = useState("");
    const [kidAges, setKidAges] = useState([]);
    const [main_age, setMainAge] = useState("");
    const [couple_age, setCoupleAge] = useState("");

    const handleKidAges = (age) => {

    }
    console.log(numKids)
    return (
        <Container>
            <Row style={{ marginBottom: 10, paddingLeft: 10 }} >
                <Col size={1} >
                    <Select value={country} title='Pais:' options={CountryOptions} onChange={setCountry} />
                </Col>
            </Row>
            <Row style={{ marginBottom: 20, paddingLeft: 10 }} >
                <Col size={1} >

                    <Select value={plan_type} title="Tipo" options={PlanOptions} onChange={setPlanType} />
                </Col>
            </Row>
            <Row style={{ marginBottom: 20, paddingLeft: 10 }}>
                <Col size={1}>
                    <Text style={{ color: Colors.blue, fontSize: 18, textAlign: 'center' }}>Edades</Text>
                    <Row>
                        <Col size={4} style={{ marginHorizontal: 7 }}>
                            <Text style={{ textAlign: 'center' }}>Titular</Text>
                            <TextInput keyboardType='numeric' value={main_age} onChangeText={(e) => setMainAge(e)} style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} />
                        </Col>
                        <Col size={4} style={{ marginHorizontal: 7 }}>
                            <Text style={{ textAlign: 'center' }}>Pareja</Text>
                            <TextInput keyboardType='numeric' value={couple_age} onChangeText={(e) => setCoupleAge(e)} style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} />
                        </Col>
                        <Col size={4} style={{ marginHorizontal: 7 }}>
                            <Text style={{ textAlign: 'center' }}># Hijos</Text>
                            <TextInput keyboardType='numeric' value={numKids} onChangeText={(e) => setNumKids(e)} style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginBottom: 20, paddingLeft: 10 }}>
                <Col size={1}>
                    <Text style={{ color: Colors.blue, fontSize: 18, textAlign: 'center' }}>Edades de los Hijos</Text>
                    <Row style={{ flexWrap: 'wrap' }}>
                        {
                            new Array(numKids).map((element,key)=>{
                                <KidInput key={key} number={key+1}/>
                            })
                        }
                       
                   
                    </Row>
                </Col>
            </Row>
            <Row style={{ paddingLeft: 10 }}>
                <Col size={1}>
                    <TouchableOpacity style={{ width: '100%', textAlign: 'center', backgroundColor: Colors.blue, paddingVertical: 7 }} onPress={() => { navigation.navigate('QuoteResult') }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Cotizar!</Text>
                    </TouchableOpacity>
                </Col>
            </Row>
        </Container>
    )
}

const KidInput = ({number}) => (
    <Col style={{ paddingHorizontal: 7, width: '33.33%', marginBottom: 10 }}>
        <Text style={{ textAlign: 'center' }}>{number}</Text>
        <TextInput style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} value="88" />
    </Col>
)