import {View, Text, Button, StyleSheet, Image, ScrollView} from "react-native";
import * as React from 'react';
import {Icon} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import CustomToggle from "../components/CustomToggle";
import {LinearGradient} from "expo-linear-gradient";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";


export default function Frame14({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();
    const [toggleCheckBox, setToggleCheckBox] = useState(true)

    return (
        <View style={{ flex:1 , backgroundColor:"#f2f2f2",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.header}>
                {/* @ts-ignore */}
                <Icon type="font-awesome-5" name="arrow-left" onPress={() => navigation.navigate('Frame12')}/>
                <Text style={styles.text}>Sécurité</Text>
            </View>


            <ScrollView>

                <View style={styles.container}>
                    <Text style={styles.text}>Contactez-nous</Text>
                    <View style={styles.containerBis}>
                        <Text style={styles.text}>Aide et assistance</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Communauté</Text>
                    <View style={styles.containerBis2}>
                        <Text style={styles.texte4}>Langues préférés</Text>
                        <Text style={styles.texte4}>Conseil de sécurité</Text>
                        <Text style={styles.texte4}>Centre de sécurité</Text>

                    </View>
                    <View style={styles.containerBis2}>
                        <Text style={styles.texte9}>Partager Tinder</Text>

                    </View>
                    <View style={styles.containerBis2}>
                        <Text style={styles.texte6}>Mention Légales</Text>
                        <Text style={styles.texte4}>Licences</Text>
                        <Text style={styles.texte4}>Politique de confidentialité</Text>
                        <Text style={styles.texte4}>Condition d'utilisation</Text>

                    </View>

                    <View style={styles.containerBis} >
                        <Text  style={styles.texte9}>Déconnexion</Text>
                    </View>


                </View>





            </ScrollView>
            <View style={styles.buttonBottom}>
                <CustomButton action={() => navigation.navigate('Frame0')} type={'outlined'} height={40} width={300} title={'Supprimer votre Compte '}   />

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
    buttonBottom:{
        position:"absolute",
        bottom: 10,
        alignSelf:"center",
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        paddingLeft:15
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
        paddingBottom:10,
        fontSize:14,
        color:"black"
    },
    texte9:{
        fontSize:14,
        color:"black"
    },
    texte5:{
        fontWeight:"bold",
        marginLeft:15,
        color:"#27B5FF",
        fontSize:12
    },
    texte6:{
        color:"#FD3178",
        fontSize:16,
        fontWeight:"bold",
        paddingBottom:10
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
