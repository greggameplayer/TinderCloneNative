import {View, Text, Button, StyleSheet, Image} from "react-native";
import * as React from 'react';
import {Icon} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import {LinearGradient} from "expo-linear-gradient";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function Frame13({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex:1 , backgroundColor:"#f2f2f2",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.header}>
                {/* @ts-ignore */}
                <Icon type="font-awesome-5" name="arrow-left" onPress={() => navigation.navigate('Frame11')}/>
                <Text style={styles.text}>Réglages</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.containerBis}>
                    <Text>lsjdflksdjlfks</Text>
                </View>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingTop:20,
        paddingBottom: 20,
        width:"100%",
        flexDirection:"row",
        alignSelf:"center",
        paddingRight: 35,
        paddingLeft: 35,
        backgroundColor:"#FFFFFF"
    },
    text:{
        fontSize:20,
        paddingLeft:25
    },

    footer: {
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        justifyContent: "space-around",
        bottom: 10,
        alignItems: 'center'
    },
    container:{
        width:"100%",
        justifyContent:"center",
        alignSelf:"center"
    },
    containerBis:{
        backgroundColor:"#FFFFFF",
        marginLeft:10,
        marginRight:10
    },



});
