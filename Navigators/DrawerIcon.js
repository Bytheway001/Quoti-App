import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Colors } from '../assets/Colors'

export const DrawerIcon = ({ navigation }) => {
    console.log(navigation)
    return (
        <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
            <FontAwesomeIcon icon={faCog} size={24} color={Colors.lightBlue} style={{ marginRight: 20 }} />
        </TouchableWithoutFeedback>
    )
}