import React from 'react'
import { View, Text } from 'react-native'
import { Container, Row, Col } from '../../Components/Layout'
import { Colors } from '../../assets/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { PlanCard } from './components/PlanCard'

export const QuoteResult = props =>{
    return(
       <Container>
           <Row>
               <Col size={1}>
                    <Text style={{color:Colors.blue,fontSize:24,textAlign:'center'}}>Resultado de cotizacion</Text>
               </Col>
           </Row>
           <Row>
               <ScrollView>
                   <PlanCard/>
                   <PlanCard/>
                   <PlanCard/>
                   <PlanCard/>
                   <PlanCard/>
                   <PlanCard/>
                   <PlanCard/>
                   <PlanCard/>
               </ScrollView>
           </Row>
       </Container>
    )
}