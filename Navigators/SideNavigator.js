import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { MainNavigator } from './MainNavigator';
import  LoginScreen  from '../Screens/Login';
import { connect } from 'react-redux';
import { Logout } from '../ducks/session';
import { Text } from 'native-base';
const Drawer = createDrawerNavigator();
const SideNavigator = ({user,logout}) => {
  return (
    <Drawer.Navigator drawerContent={props=><DrawerComponent {...props} logout={logout}/>} >
          <Drawer.Screen name="Home" component={MainNavigator} />
    </Drawer.Navigator>
  )
}

const DrawerComponent = props =>{
 
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label="Salir" onPress={props.logout}
      />
    </DrawerContentScrollView>
  )
}

const mapStateToProps = state=>{

  return {
    user:state.session.user
  }
}

const mapDispatchToProps = dispatch =>{

  return {
    logout:()=>dispatch(Logout())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SideNavigator);