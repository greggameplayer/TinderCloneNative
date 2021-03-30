import {View, Text, Button, StyleSheet, SafeAreaView, FlatList, StatusBar } from "react-native";
import * as React from 'react';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import CustomButton from "../components/CustomButton";
import {useSafeAreaInsets} from "react-native-safe-area-context";



export default function Frame9({navigation}: {navigation: any}) {
    //todo ajouter le FlatList
    const insets = useSafeAreaInsets();
    const listPassion = [
        {
            id : 1,
            passion: 'Bière',
        },
        {
            id : 2,
            passion: 'Foot',
        },
        {
            id : 3,
            passion: 'FastFood',
        },
        {
            id : 4,
            passion: 'Burger',
        },
        {
            id : 5,
            passion: 'Vegan',
        },
        {
            id : 6,
            passion: 'Vin',
        },
        {
            id : 7,
            passion: 'Chien',
        },
        {
            id : 8,
            passion: 'Chat',
        },
        {
            id : 661,
            passion: 'Chauve',
        },
        {
            id : 67,
            passion: 'Rudy',
        },
        {
            id : 68,
            passion: 'Fitness',
        },
        {
            id : 69,
            passion: "Sport",
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
                    renderItem={({item }) => (<CustomButton action={() => navigation.navigate('Frame10')}  type={"outlined"} title={item.passion}   />) }
                    keyExtractor={(item) => item.passion}
                />
            </View>
            <View style={styles.buttonBottom}>
                <CustomButton action={() => navigation.navigate('Frame10')}  type={"plain"} height={40} width={220} title={'CONTINUER'}   />
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
        marginTop:22,
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
    },
    flatList:{
        flexDirection:"row",
        width:"100%",
        marginLeft:40,
        marginRight:40,
        alignSelf:"center",
        flexWrap:"wrap"
    }
});
