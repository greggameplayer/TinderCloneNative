import {View, Text, Button, StyleSheet, SafeAreaView} from "react-native";
import * as React from 'react';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import CustomButton from "../components/CustomButton";
import {CustomCodeInput} from "../TinderCloneNative/components/CustomCodeInput";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";


export default function Frame2({navigation}: {navigation: any}) {

    const insets = useSafeAreaInsets();
    const [code, setCode] = useState("");
    return (
        <View style={{ flex:1 , backgroundColor:"#FFFFFF",flexDirection: "column",
            flexWrap: "wrap",paddingTop: insets.top}}>

            <View style={styles.containerArrow}>
                {/* @ts-ignore */}
                <Icon name={'arrow-left'} onPress={() => navigation.navigate('Frame0')}  type={"font-awesome-5"} color={"#c3c3c3"}/>
            </View>
            <View style={styles.containerNum}>
                <Text style={styles.texte}>Mon code est</Text>
            </View>
            <Text style={styles.textegris}>0768624866  RENVOYER</Text>

            <View style={styles.containerInput}>
                <CustomCodeInput  dataArg={code} setDataArg={setCode}/>
            </View>
            <View style={styles.buttonBottom}>
                <CustomButton action={() => navigation.navigate('Frame4')}  type={"plain"} title={'CONTINUER'} height={40} width={250} disabled={code.length < 6} disabledColor={["#F5F5F5", "#F5F5F5"]} textDisabledColor={"#969494"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    containerArrow:{
        paddingTop: 10,
        paddingLeft: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",
        flex: 0.1,
    },
    containerNum:{
        paddingTop: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",
        backgroundColor: "white",
        flex: 0.1
    },
    container: {
        paddingTop: 50,
        width: 50
    },
    inputContainer:{
        width:'50%',
    },
    fond :{
        color:"#FFFFFF"
    },
    containerInput:{
        paddingTop: 50,
        flexDirection: "row",
        alignSelf: "center",
        width:300,
        marginLeft:50,
        flex: 0.1,
    },
    textegris:{
        marginRight:35,
        marginLeft:31,
        marginTop:20,
        color:"#c3c3c3",
        fontSize:12,
    },
    texte:{
        color:"#000000",
        fontSize: 35,
        marginLeft: 30,
        marginBottom: 5,
        marginTop: 20,
        textAlign: "left",
        alignSelf:"center"

    },
    texte2:{
        marginRight:35,
        marginLeft:35,
        color:"#000000",
        fontSize:12,
        textDecorationLine: 'underline',
        alignSelf:"center"


    },
    stretch: {
        width: 200,
        height: 48.5157954886425798425587,
        resizeMode: 'stretch',
        marginTop: 80,

    },
    gradient: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    campusInputContainer: {
        marginLeft:25,
        width:310,
        alignSelf:"center"
    },
    containerButton: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop:50
    },
    buttonBottom:{
        position:"absolute",
        bottom: 10,
        alignSelf:"center",
    },
});
