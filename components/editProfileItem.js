import react from "react";
import React, {useState, Component} from 'react';
import { View, Text, StyleSheet, Button, Alert, Modal} from 'react-native';

import styles from '../Styles.js'
/*
export default function ProfileItemEdit(items){
    var output = [];
    for(var i = 0; i < items.length; i++){
        var tempItem = (
            <View>
                <Text>i</Text>
            </View>
        );
        output[i] = (tempItem);
    }
    return(
        <View>
            {output}
        </View>
    );
}
*/

export default class ProfileItemEdit extends Component{
    render(){
        var output = [];
        for (var item in this.props.profile){
            var i = 1; // delete
            var tempItem = (
                <View>
                    <Text>{item.hasOwnProperty(item)}</Text>
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
