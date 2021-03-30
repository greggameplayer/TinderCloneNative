import {View, Text, Button, SafeAreaView, Image, StyleSheet} from "react-native";
import * as React from 'react';
import CustomButton from "../components/CustomButton";
import {Icon} from "react-native-elements";

import {CustomCodeInput} from "../TinderCloneNative/components/CustomCodeInput";
import ImagePicker from "react-native-image-crop-picker";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Frame10({navigation}: {navigation: any})  {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex:1 , backgroundColor:"#FFFFFF",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.containerArrow}>
                <Icon name={'arrow-left'} onPress={() => navigation.navigate('Frame0')}  type={"font-awesome-5"} color={"#c3c3c3"}/>
            </View>
            <View style={styles.containerNum}>
                <Text style={styles.texte}>Ajouter des photos</Text>
            </View>
            <Text style={styles.textegris}>Ajouter au moins 2 photos pour continuer</Text>

            <View>
                <Button title={""} onPress={() => { ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true
                }).then(image => {
                    console.log(image);
                });}
                }
                />
            </View>
            <View style={styles.buttonBottom}>
                <CustomButton action={() => navigation.navigate('Frame11')} type={"plain"} colors={["#F5F5F5", "#F5F5F5"]} textColor={"#969494"} height={40} width={220} title={'CONTINUER'}   />
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
        paddingTop: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",
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
        color:"#c3c3c3",
        fontSize:12,
        textAlign: "center",
        width:"100%",
        paddingTop:10,

    },
    texte:{
        color:"#000000",
        fontSize: 34,
        marginTop: 10,
        textAlign: "center",
        width:"100%"



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

