import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, StatusBar, Button, Alert, Modal} from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import screens
import SignIn from './drawers/Sign_in.js';
import LM from './drawers/LabelMaker.js'
import ESign from './drawers/ESignDoc.js';
import PatP from './drawers/PatientProfile.js';
import PhyP from './drawers/PhysicianProfile.js';
import PhaP from './drawers/PharmacyProfile.js';

//import styles
import styles from './Styles.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator(); 

//only navigation stuff should be in app.js
/*
export default  class App extends Component {
  render() {
  createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={}/>
  </Stack.Navigator>
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="signIn"/>
        <Drawer.Screen name="eSign"/>
        <Drawer.Screen name="patient"/>
        <Drawer.Screen name="physician"/>
        <Drawer.Screen name="pharmacy"/>
        <Drawer.Screen name="label"/>
      </Drawer.Navigator>
    </NavigationContainer>

  );
  }
}
*/
//try using a class aswell

//TODO: make sure that drawer doesnt open on initial login screen
//      https://github.com/react-navigation/react-navigation/pull/793/files
export default  function App() {
  return (
    <NavigationContainer styles>
      <Drawer.Navigator initialRouteName="Esign Doc">
        <Drawer.Screen name="Patient eSign Doc" component={ESign}/>
        <Drawer.Screen name="Patient Profile" component={PatP}/>
        <Drawer.Screen name="Physician Profile" component={PhyP}/>
        <Drawer.Screen name="Pharmacy Profile" component={PhaP}/>
        <Drawer.Screen name="Label Maker" component={LM}/>
        <Drawer.Screen name="Log Out" component={SignIn}/>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}



