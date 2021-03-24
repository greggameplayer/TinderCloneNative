import {View, Text, Button, StyleSheet, SafeAreaView} from "react-native";
import * as React from 'react';
import { Input } from 'react-native-elements';
import CustomButton from "../components/CustomButton";
import {LinearGradient} from "expo-linear-gradient";


export default function FramePhone({navigation}: {navigation: any}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text> // METTRE UNE PETITE FLECHE //</Text>
            <Text>Mon numéro est</Text>
            <Input placeholder={"Numéro de téléphone"} style={{width:10, height:50}} />
            <Text>Nous vous enverrons un message avec un code de vérification. Des frais liés à l'envoi de messages et/ou d'utilisation de données peuvent s'appliquer</Text>
            <Text style={{ 'textDecorationLine': 'underline'}}>Découvrez ce qui se passe si vous changez de numéro de téléphone.</Text>
            <CustomButton action={() => navigation.navigate('Frame4')} type={"outlined"} title={'CONTINUER'}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    fond :{
        color:"#FFFFFF"
    },
    texte:{
        color:"#FFFFFF",
        fontSize: 13,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 150,
        marginBottom: 5
    },
    texte2:{
        color:"#FFFFFF"
    },
    stretch: {
        width: 200,
        height: 48.5157954886425798425587,
        resizeMode: 'stretch',
        marginTop: 80
    },
    gradient: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
});
