import React, { useState, useEffect, Fragment } from 'react';
import { Button, View, Picker } from 'native-base';
import { Row, Col, Text } from '../../Components/Layout';
import { styles } from './styles';
import { Colors } from '../../assets/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faFile, faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getPlanList } from '../../ducks/compare/compare';

const OptionPicker = ({ index, value, onSelect, plans }) => {

    return (
        <Row style={{ paddingHorizontal: 5, alignItems: 'center', borderWidth: 1, margin: 5, borderColor: Colors.buttonBlue, borderWidth: 2, borderRadius: 10 }}>
            <Col size={1} style={{ alignItems: 'center' }}>
                <FontAwesomeIcon icon={faFile} size={24} color={Colors.buttonBlue} />
            </Col>
            <Col size={11}>
                <Picker selectedValue={value} mode='dialog' style={{ color: Colors.buttonBlue }} textStyle={{ color: 'red' }} onValueChange={(e) => onSelect(index, e)}>
                    <Picker.Item value="" label='Seleccione...' />
                    {
                       
                        [...new Set(plans.map(r => r.name))].map((plan, key) => {
                            console.log(plan)
                         return  <Picker.Item key={key} value={plan} label={plan} />
                        })
                    }
                </Picker>
            </Col>

        </Row>
    )
}

export const CompareScreen = ({ planList, getPlanList }) => {
    const [planNumber, setPlanNumber] = useState(1);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        console.log('Getting plan list');
        getPlanList()
    }, [])

    const selectPlan = (i, plan) => {
        plans[i] = plan;
        setPlans({ ...plans });
    }
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <Row style={styles.row}>
                <Col size={1} style={{ borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Button
                        onPress={() => setPlanNumber(1)}
                        style={{
                            ...styles.button,
                            backgroundColor: planNumber === 1 ? Colors.buttonBlue : Colors.skyBlue
                        }}>
                        <Text style={{ width: '100%' }} color='white' align='center'>1 Plan</Text>
                    </Button>
                </Col>
                <Col size={1} style={{ borderRightWidth: 1, borderLeftWidth: 1, borderLeftColor: 'white', borderRightColor: 'white' }}>
                    <Button
                        onPress={() => setPlanNumber(2)}
                        style={{
                            ...styles.button,
                            backgroundColor: planNumber === 2 ? Colors.buttonBlue : Colors.skyBlue
                        }}>
                        <Text style={{ width: '100%' }} color='white' align='center'>2 Planes</Text>
                    </Button>
                </Col>
                <Col size={1} style={{ borderLeftWidth: 1, borderLeftColor: 'white' }} >
                    <Button
                        onPress={() => setPlanNumber(3)}
                        style={{
                            ...styles.button,
                            backgroundColor: planNumber === 3 ? Colors.buttonBlue : Colors.skyBlue
                        }}>
                        <Text style={{ width: '100%' }} color='white' align='center'>3 Planes</Text>
                    </Button>
                </Col>


            </Row>
            <View style={{ marginTop: 30 }}>
               
                {
                    planList &&
                    <Fragment>
                        <OptionPicker onSelect={selectPlan} value={plans[0]} index={0} plans={planList} />
                        <OptionPicker onSelect={selectPlan} value={plans[1]} index={1} plans={planList} />
                        <OptionPicker onSelect={selectPlan} value={plans[2]} index={2} plans={planList} />
                    </Fragment>
                }

            </View>

        </View>

    )
}

const MSTP = state => {
    return {
        planList: state.compare.planList
    }
}

const MDTP = dispatch => {
    return {
        getPlanList: () => dispatch(getPlanList())
    }
}

export default connect(MSTP, MDTP)(CompareScreen)