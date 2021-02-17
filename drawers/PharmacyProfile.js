import React, {useState} from 'react';
import { View, Text, StatusBar, Button, Alert, Modal} from 'react-native';


import styles from '../Styles.js'

export default function PhaP({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Log Out')}
          title="Go to notifications"
        />
      </View>
    );
  }