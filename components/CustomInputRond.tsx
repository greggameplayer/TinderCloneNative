import React from "react";
import {SafeAreaView, StyleSheet, Button, TextInput, View, Alert, TouchableOpacity, Text} from "react-native";
import { Icon } from 'react-native-elements'

// get our fontawesome imports
import {faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomInputRond = () => {
   // const [text, onChangeText] = React.useState("");


    // @ts-ignore
    // @ts-ignore
    return (
 <View style={styles.square} >

        <TextInput
             style={styles.input}
            //onChangeText={onChangeText}
            //value={text}
            placeholder="Rédigez un message">

        </TextInput>

     <Icon style={styles.searchIcon} name='send-outline' type='ionicon' size={20} color="#000"/>

 </View>
    )};

const styles = StyleSheet.create({

    square: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

        height: 40,
        borderWidth: 1,
        borderRadius: 400/ 2,
    },
    searchIcon: {

    },
    input: {
        width:"95%",
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },


});

export default CustomInputRond;