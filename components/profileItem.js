import react from "react";
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Alert, Modal} from 'react-native';

import styles from '../Styles.js'

export default function ProfileItem(props){
    return(
        <View style={styles.ProfileItemContainer}>
            <Text>{props.tag}</Text>
            <Text>{props.tagItem}</Text>
          </View>
    );
}