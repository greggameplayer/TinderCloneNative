import {View, Text, Button, StyleSheet, SafeAreaView} from "react-native";
import * as React from 'react';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import CustomButton from "../components/CustomButton";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function FramePhone({navigation}: {navigation: any}) {


    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex:1 , backgroundColor:"#FFFFFF",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.containerArrow}>
                <Icon name={'arrow-left'} onPress={() => navigation.navigate('Frame0')} style={styles.arrowIcon} type={"font-awesome-5"} color={"#c3c3c3"}/>
            </View>
            <View style={styles.containerNum}>
                <Text style={styles.texte}>Mon numéro</Text>
            </View>
            <Input placeholder={"Numéro de téléphone est"} style={styles.container} containerStyle = {styles.campusInputContainer}  keyboardType={'numeric'}/>
            <Text style={styles.textegris}>Nous vous enverrons un message avec un code de vérification. Des frais liés à l'envoi de messages et/ou d'utilisation de données peuvent s'appliquer</Text>
            <Text style={styles.texte2}>Découvrez ce qui se passe si vous changez de numéro de téléphone.</Text>

            <View style={styles.buttonBottom}>
                <CustomButton action={() => navigation.navigate('Frame2')}  type={"plain"} title={'CONTINUER'} colors={["#F5F5F5", "#F5F5F5"]} textColor={"#969494"} />
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
        flex: 0.1
    },
    container: {
        paddingTop: 50,
    },
    inputContainer:{
        width:'50%',
    },
    fond :{
        color:"#FFFFFF"
    },
    textegris:{
        marginRight:35,
        marginLeft:35,
        color:"#c3c3c3",
        fontSize:12,
        alignSelf:"center"

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
