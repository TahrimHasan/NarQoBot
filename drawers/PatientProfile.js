import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, Button, Alert, Modal} from 'react-native';


import styles from '../Styles.js'

export default function PatP({ navigation }) {
  var tempName = "John Doe";
  var tempMCP = -42;
  var tempDOB = "0/0/0"; // look into dates for js
  var tempPhoneNum = "(XXX)XXX-XXXX";
  //TODO: create rest of temp variables 
  const [editVisible, setEditVisible] = useState(false);
  
  const [value, onChangeText] = React.useState('Enter Handle');
    return (
      <View  style={styles.ProfilePage} style={ styles.container }>
        <Text>Patient Profile</Text>
        <TextInput
          style = {styles.SearchBar}
          onChangeText = {text => onChangeText(text)} //2 things using the same function?
          placeholder = "Search" 
        />
        <View style={styles.ProfilePage}>
          <View style={styles.ProfileItemContainer}>
            <Text>Name:</Text>
            <Text> {tempName}</Text>
          </View>
          <View style={styles.ProfileItemContainer}>
            <Text>DOB:</Text>
            <Text> {tempDOB}</Text>
          </View>
          <View style={styles.ProfileItemContainer}>
            <Text>MCP:</Text>
            <Text> {tempMCP}</Text>
          </View>
          <View style={styles.ProfileItemContainer}>
            <Text>Phone:</Text>
            <Text> {}</Text>
          </View>
          <View style={styles.ProfileItemContainer}>
            <Text>Doctor:</Text>
            <Text> {}</Text>
          </View>
          <View style={styles.ProfileItemContainer}>
            <Text>Dose:</Text>
            <Text> {}</Text>
          </View>
          <View style={styles.ProfileItemContainer}>
            <Text>Drug:</Text>
            <Text> {}</Text>
          </View>
          <View style={styles.ProfileItemContainer}>
            <Text>Juice:</Text>
            <Text> {}</Text>
          </View>
        </View>
        <Button
            title = "Edit"
            onPress = {() => setEditVisible(!editVisible)}
          />
        <Modal
          transparent = {false}
          visible = {editVisible}
          onRequestClose={() => {
            setEditVisible(!editVisible);
          }}
        >
          <View style = {styles.container}>
            {/*TODO: figure out custom components and fill in shit */}
            <View>
              {/*TODO make Save button actually save*/}
              <Button
                title = "Save"
                onPress = {() => setEditVisible(!editVisible)}
              />
              <Button
                title = "Close"
                onPress = {() => setEditVisible(!editVisible)}
              />
            </View>
            
          </View>
        </Modal>
       
      </View>
    );
  }
