import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { Container, Row, Col, Text } from '../../Components/Layout';
import { Select } from './components/Select';
import { Colors } from '../../assets/Colors';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { connect } from 'react-redux';
import { getQuote } from '../../ducks/quote/quote';
import { styles } from './styles';
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

const QuoteScreen = ({ navigation,getQuote }) => {
    const [country, setCountry] = useState("");
    const [plan_type, setPlanType] = useState("");
    const [numKids, setNumKids] = useState("");
    const [kidAges, setKidAges] = useState([]);
    const [main_age, setMainAge] = useState("");
    const [couple_age, setCoupleAge] = useState("");

    const handleKidAges = (age, number) => {
        let ka = [...kidAges];
        ka[number - 1] = age;
        setKidAges(ka)
    }

    const renderKidInputs = () => {
        if (numKids <= 6) {
            let inputs = [];
            for (let i = 1; i <= numKids; i++) {
                inputs.push(<KidInput number={i} value={kidAges[i - 1] || ""} onChange={handleKidAges} />)
            }
            return inputs;
        }
        else {
            alert("Debe cotizar un maximo de 6 dependientes")
        }

    }

     const handleQuote =async ()=>{
        await getQuote({country,plan_type,main_age,couple_age,numKids,kidAges})
        navigation.navigate('QuoteResult');
    }
    return (
        <Container>
            <Row style={styles.row} >
                <Col size={1} >
                    <Select value={country} title='Pais:' options={CountryOptions} onChange={setCountry} />
                </Col>
            </Row>
            <Row style={styles.row} >
                <Col size={1} >
                    <Select value={plan_type} title="Tipo" options={PlanOptions} onChange={setPlanType} />
                </Col>
            </Row>
            <Row style={styles.row}>
                <Col size={1}>
                    <Text align='center' size={18} color='blue'>Edades</Text>
                    <Row>
                        <Col size={4} style={styles.col}>
                            <Text align='center' color='lightBlue'>Titular</Text>
                            <TextInput keyboardType='numeric' value={main_age} onChangeText={(e) => setMainAge(e)} style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} />
                        </Col>
                        <Col size={4} style={styles.col}>
                            <Text align='center' color='lightBlue'>Pareja</Text>
                            <TextInput keyboardType='numeric' value={couple_age} onChangeText={(e) => setCoupleAge(e)} style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} />
                        </Col>
                        <Col size={4} style={styles.col}>
                            <Text align='center' color='lightBlue'># Hijos</Text>
                            <TextInput keyboardType='numeric' value={numKids} onChangeText={(e) => setNumKids(e)} style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginBottom: 20, paddingLeft: 10 }}>
                <Col size={1}>
                    <Text color='blue' align='center' size={18} >Edades de los Hijos</Text>
                    {
                        numKids > 0 &&
                        <Row style={{ flexWrap: 'wrap' }}>
                            {renderKidInputs()}
                        </Row>
                    }

                </Col>
            </Row>
            <Row style={{ paddingLeft: 10 }}>
                <Col size={1}>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            backgroundColor: Colors.blue,
                            paddingVertical: 7
                        }}
                        onPress={() => handleQuote() }>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Cotizar!</Text>
                    </TouchableOpacity>
                </Col>
            </Row>
        </Container>
    )
}
 
const KidInput = ({ number, value, onChange }) => (
    <Col style={styles.kidInput}>
        <Text align='center'>{number}</Text>
        <TextInput onChangeText={(e) => onChange(e, number)} value={value} style={{ textAlign: 'center', borderWidth: 1, borderColor: Colors.blue, height: 40, borderRadius: 20 }} />
    </Col>
) 

const mapStateToProps = state => (
    {}
)

const mapDispatchToProps = dispatch => (
    {
        getQuote: data => dispatch(getQuote(data))
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(QuoteScreen)