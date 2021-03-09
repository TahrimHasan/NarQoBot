import react from "react";
import React, {useState, Component} from 'react';
import { View, Text, StyleSheet, Button, Alert, Modal} from 'react-native';
import { TextInput } from "react-native-gesture-handler";

import styles from '../Styles.js'
/*
export default class ProfileItemEdit extends Component{
   
    render(){
        const TextInput = () => {
            const [value, onChangeText] = React.useState('Placeholder');//change placeholder
        }
        var output = [];
        for (var key of Object.keys(this.props.profile)){
            var tempItem = (
                <View style={styles.ProfileItemContainer}>
                    <Text>{key }</Text>
                    <TextInput
                        style={styles.textInput} //fix styling
                        onChangeText={text => 
                            onChangeText(text)}
                    />
                </View>
            );
            //this.props.newProfile[key] = state.profileText;
            output.push(tempItem);
        }
        return(
            <View>
                {output}
            </View>
        );
    }
}
*/
export default class ProfileItemEdit extends Component{
    render(){
        var output = [];
        for (var key of Object.keys(this.props.profile)){
            var tempItem = (
                <View style={styles.ProfileItemContainer}>
                    <Text>{key }</Text>
                    <TextInput
                        style={styles.textInput} //fix styling
                        onChangeText={text => 
                            onChangeText(text)}
                    />
                </View>
            );
            output.push(tempItem);
        }
        return(
            <View>
                {output}
            </View>
        );
    }
}