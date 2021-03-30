import {View, Text, Button, StyleSheet, SafeAreaView, FlatList, StatusBar } from "react-native";
import * as React from 'react';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import CustomButton from "../components/CustomButton";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useState} from "react";



export default function Frame9({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();
    const [counter, setCounter] = useState(0);

       const listPassion = [
        {
   id : 0,
    passion: "Cinéma",
            widthButton: 80
    },
        {
    id : 1,
    passion: "Gastronomie",
            widthButton: 130
    },
        {
    id : 2,
    passion: "Ecrivain(e)",
            widthButton: 110
    },
        {
    id : 3,
    passion: "Personne à chien",
            widthButton: 180
    },
        {
    id : 4,
    passion: "Motos",
            widthButton: 70
    },
        {
    id : 6,
    passion: "Mode",
            widthButton: 60
    },
        {
    id : 7,
    passion: "Voyage",
            widthButton: 80
    },
        {
    id : 8,
    passion: "Skateboarder",
            widthButton: 140
    },
        {
    id : 9,
    passion: "Art",
            widthButton: 60
    },
        {
    id : 10,
    passion: "Comédie",
            widthButton: 100
    },
        {
    id : 12,
    passion: "Extraverti(e)",
            widthButton: 130
    },
        {
    id : 13,
    passion: "E-Sports",
            widthButton: 90
    },
        {
    id : 15,
    passion: "Road trips",
            widthButton: 120
    },
        {
    id : 16,
    passion: "Natation",
            widthButton: 90
    },
        {
    id : 18,
    passion: "Yoga",
            widthButton: 60
    },
        {
    id : 19,
    passion: "Tatouages",
            widthButton: 110
    },
        {
    id : 20,
    passion: "Cuisine",
            widthButton: 80
    },
        {
    id : 22,
    passion: "Randonnée",
            widthButton: 120
    },
        {
    id : 23,
    passion: "Surf",
            widthButton: 60
    },
        {
    id : 24,
    passion: "Sport",
            widthButton: 70
    },
        {
    id : 25,
    passion: "Théâtre",
            widthButton: 80
    },
        {
    id : 26,
    passion: "Pétanque",
            widthButton: 100
    },
        {
    id : 27,
    passion: "Fripes",
            widthButton: 70
    },
        {
    id : 28,
    passion: "Ski",
            widthButton: 60
    },
        {
    id : 29,
    passion: "Vegan",
            widthButton: 70
    },
        {
    id : 30,
    passion: "Tennis",
            widthButton: 70
    },
        {
    id : 31,
    passion: "Café",
            widthButton: 60
    },
        {
    id : 32,
    passion: "Disney",
            widthButton: 70
    },
        {
    id : 33,
    passion: "Football",
            widthButton: 90
    },
        {
    id : 34,
    passion: "Pâtisserie",
            widthButton: 100
    },
        {
    id : 35,
    passion: "Bricolage",
            widthButton: 100
    },
        {
    id : 36,
    passion: "Jardinnage",
            widthButton: 120
    }
    ];


    return (
        <View style={{ flex:1 , backgroundColor:"#FFFFFF",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.containerArrow}>
                {/* @ts-ignore */}
                <Icon name={'arrow-left'} onPress={() => navigation.navigate('Frame0')} type={"font-awesome-5"} color={"#c3c3c3"}/>
            </View>
            <View style={styles.containerNum}>
                <Text style={styles.texte}>Passions</Text>
            </View>
            <Text style={styles.textegris}>Sélectionnez les passions que vous souhaitez partager avec les personnes avec lesquelles vous vous connectez. Choisissez au minimum 5</Text>
            <View style={styles.flatList}>
                <FlatList
                    data={listPassion}
                    numColumns={3}
                    renderItem={({item }) => (<CustomButton action={() =>{ }} style={{marginHorizontal: 5, marginVertical: 2.5}} title={item.passion} type={"outlined"} width={item.widthButton} height={30} forFlatList={true} clickedColor={'#FD3178'} unclickedColor={'#B3BEC4'} counter={counter} setCounter={setCounter}/>)}
                    keyExtractor={(item) => item.passion}
                />
            </View>
            <View style={{alignSelf: "center"}}>
                <CustomButton action={() => { navigation.navigate("Frame10")
                }} title={'CONTINUER'} width={'55%'} type={"outlined"}
                              counter={counter} setCounter={setCounter} counterDisplay disabled={counter < 5}/>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({

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
    },
    inputContainer:{
        width:'50%',
    },
    fond :{
        color:"#FFFFFF"
    },
    textegris:{
        paddingRight:35,
        paddingLeft:35,
        color:"#c3c3c3",
        fontSize:12,
        marginTop:62,
        width:"100%",
    },
    texte:{
        color:"#000000",
        flex:1,
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
    },
    flatList:{
        marginTop: 20,
        height: '65%',
        alignSelf: "center"
    }
});
