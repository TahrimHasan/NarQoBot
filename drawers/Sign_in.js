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
          //style = {styles.modalPosition} 
          transparent = {false}
          visible = {modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
              <Button 
                title="X"
                onPress= {() => setModalVisible(!modalVisible)}  
              />
              <TextInput
                style={styles.modalContent}
                onChangeText = {text=> onChangeText(text)}
                value ={value}
              />
        </Modal>
        
          <Text style={styles.fonts}>NarQoBot</Text>
          <Button 
            title="Sign-In"
            onPress={() => setModalVisible(!modalVisible)} //set up sign in stuff here

          />
          <Button 
            title="Modal"
            onPress={() => navigation.openDrawer()}
          />
          <StatusBar style="auto" />
      </View>
    );
  }