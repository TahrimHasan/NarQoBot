import React, {useState} from 'react';
import { View, Text, StatusBar, Button, Alert, Modal, TextInput} from 'react-native';


import styles from '../Styles.js'


export default function SignIn({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    
    const userNameTextInput = () => {
      const [value, onChangeText] = React.useState('Enter Handle');
    }
    return (
      <View style={styles.container}>
        <Modal
          transparent = {false}
          visible = {modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.container}>
          <View style={styles.modalPoisition}>
            <View style={styles.XButtonContainer}>
                  <Button 
                    color="red"
                    title="X"
                    onPress= {() => setModalVisible(!modalVisible)}  
                  />
            </View>
            <Text style={styles.fonts}>Login</Text>
            <View style={styles.UserPass} >
                <Text>Username</Text>
                <TextInput
                  style = {styles.textInput}
                  onChangeText = {text => onChangeText(text)}
                  placeholder = "Enter Handle" 
                  //value ={value}
                />
                <Text>Password</Text>
                <TextInput
                  style = {styles.textInput}
                  onChangeText = {text => onChangeText(text)} //2 things using the same function?
                  placeholder = "Enter Password" 
                  //value ={value}
                />
              </View>
          </View>
          </View>
        </Modal>
        
          <Text style={styles.fonts}>NarQoBot</Text>
          <Button 
            title="Sign-In"
            onPress={() => setModalVisible(!modalVisible)} //set up sign in stuff here
          />
          <Button 
            title="Drawer"
            onPress={() => navigation.openDrawer()}
          />
          <StatusBar style="auto" />
      </View>
      
    );
  }