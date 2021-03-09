import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, Button, Alert, Modal} from 'react-native';


import styles from '../Styles.js';

import ProfileItemEdit from "../components/editProfileItem.js";
import ProfileItem from "../components/profileItem.js";

export default function PatP({ navigation }) {
  var tempName = "John Doe";
  var tempMCP = -42;
  var tempDOB = "0/0/0"; // look into dates for js
  var tempPhoneNum = "(XXX)XXX-XXXX";
  //TODO: create rest of temp variables 
  const [editVisible, setEditVisible] = useState(false);
  
  const [value, onChangeText] = React.useState('Enter Handle');

  //test vars
  var pplJSON = [ {Name:"john", DOB:"0/0/0", MCP:2, Phone:9,Doctor:"Dr. Dave", Dose:7, Drug:"derp", Juice:"apple"},
                  {Name:"bob", DOB:"0/0/0", MCP:2, Phone:9,Doctor:"Dr. Dave", Dose:7, Drug:"derp", Juice:"apple"},
                  {Name:"Jim", DOB:"0/0/0", MCP:2, Phone:9,Doctor:"Dr. Dave", Dose:7, Drug:"derp", Juice:"apple"}  
  ];
  var patientJSON = {Name:"Jim", DOB:"0/0/0", MCP:2, Phone:9,Doctor:"Dr. Dave", Dose:7, Drug:"derp", Juice:"apple"};

  //TODO: fix change the views and stuff to the custom component
    return (
      <View  style={styles.ProfilePage} style={ styles.container }>
        <Text>Patient Profile</Text>
        <TextInput
          style = {styles.SearchBar}
          onChangeText = {text => onChangeText(text)} //2 things using the same function?
          placeholder = "Search" 
        />
        <View style={styles.ProfilePage}>
          <ProfileItem
            tag="Name: "
            tagItem={patientJSON.Name}
          />
          <ProfileItem
              tag="DOB: "
              tagItem={patientJSON.DOB}
          />
          <ProfileItem
              tag="MCP: "
              tagItem= {patientJSON.MCP}
          />
            <ProfileItem
              tag="Phone: "
              tagItem= {patientJSON.Phone}
          />
            <ProfileItem
              tag="Doctor: "
              tagItem= {patientJSON.Doctor}
          />
            <ProfileItem
              tag="Drug: "
              tagItem= {patientJSON.Drug}
          />
          <ProfileItem
              tag="Dose: "
              tagItem= {patientJSON.Dose}
          />
          <ProfileItem
              tag="Juice: "
              tagItem= {patientJSON.Juice}
          />
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
            
            <View>
              <ProfileItemEdit
                profile={patientJSON}
              />
            </View>
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
