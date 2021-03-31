import {View, Text, Button, StyleSheet, Image, ScrollView} from "react-native";
import * as React from 'react';
import {Icon} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import CustomToggle from "../components/CustomToggle";
import {LinearGradient} from "expo-linear-gradient";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";


export default function Frame13({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();
    const [toggleCheckBox, setToggleCheckBox] = useState(true)

    return (
        <View style={{ flex:1 , backgroundColor:"#f2f2f2",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.header}>
                <Icon type="font-awesome-5" name="arrow-left" onPress={() => navigation.navigate('Frame12')}/>
                <Text style={styles.text}>Réglages</Text>
            </View>


            <ScrollView>

            <View style={styles.container}>
                <View style={styles.containerBis}>
                    <Text style={styles.texte1}>Mettez toutes les chances de votre coté</Text>
                </View>

                <View style={styles.containerBis}>
                    <Text style={styles.texte1}>Découvrez qui vous a envoyé un like et plus encore</Text>
                </View>

                <View style={styles.containerBis}>
                    <Text style={styles.texte1}>Des likes illimités et bien plus</Text>
                </View>
                <View style={styles.containerBis}>
                    <Text style={styles.texte2}>Obtenez des Boosts pour augmenter vos chances d'avoir des Matchs</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.texte3}>Réglage du compte</Text>
                <View style={styles.containerBis1}>
                    <Text style={styles.texte1}>Numéro de Téléphone</Text>
                    <Text style={styles.texte1}>33 6 56 21 35 45</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.texte4}>Réglage de découverte de profils</Text>
                <View style={styles.containerBis1}>
                    <Text style={styles.texte1}>Lieu</Text>
                    <Text style={styles.texte5}>Mon emplacement actuel</Text>
                </View>
                <View style={styles.containerBis1}>
                    <Text style={styles.texte1}>International</Text>
                    <CustomToggle
                        activeChecked={toggleCheckBox}
                        setActiveChecked={setToggleCheckBox}
                    />
                </View>
            </View >

            <View style={styles.container}>
                <View style={styles.containerBis2}>
                    <Text style={styles.texte6}>Langues préférés</Text>
                    <Text style={styles.texte7}>anglais</Text>
                    <Text style={styles.texte7}>français</Text>
                    <Text style={styles.texte8}>Ajouter une langue...</Text>

                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.texte4}>Utilisation des données</Text>
                <View style={styles.containerBis1}>
                    <Text style={styles.texte1}>Lecture automatique des vidéos</Text>
                </View>
                <View style={styles.containerBis2}>
                    <Text style={styles.texte6}>Profil web</Text>
                    <View style={styles.alignRow}>
                        <Text style={styles.texte1}>Nom d'utilisateur</Text>
                        <Text style={styles.texte1}>Demandez le votre</Text>
                    </View>
                </View>
            </View >

            <View style={styles.container}>
                <Text style={styles.texte4}>Coup de coeur</Text>
                <View style={styles.containerBis2}>
                    <Text style={styles.texte6}>Gérer les Coups de Coeurs</Text>
                    <Text style={styles.texte7}>Nom d'utilisateur</Text>
                </View>
            </View>


            <View style={styles.container}>
                <Text style={styles.texte4}>Accusé de reception</Text>
                <View style={styles.containerBis2}>
                    <Text style={styles.texte6}>Gérer les Accusés de réception</Text>
                    <Text style={styles.texte7}>Réglages</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.texte4}>Période Swipe Surge</Text>
                <View style={styles.containerBis2}>
                    <Text style={styles.texte6}>Gérer les période Swipe Surge</Text>
                    <Text style={styles.texte7}>Réglages</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.texte4}>Statut d'activité</Text>
                <View style={styles.containerBis2}>
                    <Text style={styles.texte6}>Statut d'activité récente</Text>
                    <Text style={styles.texte7}>Réglages</Text>
                </View>
            </View>




            </ScrollView>

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
        alignSelf:"center",
        marginTop: 15,

    },
    containerBis:{
        backgroundColor:"#FFFFFF",
        marginLeft:10,
        marginRight:10,
        height: 70,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:4,
        marginBottom:5
    },
    containerBis1:{
        flexDirection:"row",
        backgroundColor:"#FFFFFF",
        marginLeft:10,
        marginRight:10,
        height: 50,
        padding:15,
        justifyContent:"space-between",
        borderRadius:4,
        marginBottom:5,
        marginTop:5
    },
    texte1:{
        color:"#909296",
        fontSize:12
    },
    texte2:{
        color:"#9836b8",
        fontSize:10,
        fontWeight:"bold"
    },
    texte3:{
        fontWeight:"bold",
        marginLeft:15,
        fontSize:13,
    },
    texte4:{
        fontWeight:"bold",
        marginLeft:15,
        fontSize:14,
    },
    texte5:{
        fontWeight:"bold",
        marginLeft:15,
        color:"#27B5FF",
        fontSize:12
    },
    texte6:{
        color:"#FD3178",
        fontSize:15,
        fontWeight:"bold",
    },
    containerBis2:{
        flexDirection:"column",
        backgroundColor:"#FFFFFF",
        marginLeft:10,
        marginRight:10,
        padding:15,
        justifyContent:"center",
        borderRadius:4,
        marginBottom:5,
        marginTop:5
    },
    texte7:{
        color:"#909296",
        fontSize:13,
        marginTop:15,
        fontWeight:"bold"
    },
    texte8:{
        color:"#27B5FF",
        fontSize:13,
        marginTop:20,
        fontWeight:"bold"
    },
    alignRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15
    }




});
