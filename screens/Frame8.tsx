import {View, Text, Button, StyleSheet, SafeAreaView} from "react-native";
import * as React from 'react';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import CustomButton from "../components/CustomButton";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function Frame4({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex:1 , backgroundColor:"#FFFFFF",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.containerArrow}>
                {/* @ts-ignore */}
                <Icon name={'arrow-left'} onPress={() => navigation.navigate('Frame0')} type={"font-awesome-5"} color={"#c3c3c3"}/>
            </View>
            <View style={styles.containerNum}>
                <Text style={styles.texte}>Ma scolarité</Text>
            </View>
            <Input placeholder={"Scolarité"} style={styles.container} containerStyle = {styles.campusInputContainer}  keyboardType={"text"}/>
            <Text style={styles.textegris}>Voila comment ça apparaitra dans Tinder</Text>

            <View style={styles.buttonBottom}>
                <CustomButton action={() => navigation.navigate('Frame9')}  type={"plain"} height={40} width={220} title={'CONTINUER'}   />
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
    },
    containerNum:{
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",

    },
    container: {
        marginTop:"40%",
        width:"100%"
    },
    inputContainer:{
        width:'50%',
    },
    fond :{
        color:"#FFFFFF"
    },
    textegris:{
        marginRight:35,
        marginLeft:25,
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
    buttonBottom:{
        position:"absolute",
        bottom: 10,
        alignSelf:"center",
    }
});
