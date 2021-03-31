import {View, Text, Button, StyleSheet, ImageBackground, FlatList} from "react-native";
import * as React from 'react';
import {Icon} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import Swiper from"react-native-deck-swiper"
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Frame11({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();
    const data = [
        {
            nom : "Lucas",
            uri :'https://media.discordapp.net/attachments/630690372691165215/826353669846728704/image0.jpg?width=362&height=676',
            age : 19,
            localisation:30

        },
        {
            nom : "Geoffrey",
            uri :'https://media.discordapp.net/attachments/630690372691165215/826352409320095784/image0.jpg?width=507&height=676',
            age : 35,
            localisation:15
        },
        {
            nom : "Nathan",
            uri :'https://media.discordapp.net/attachments/630690372691165215/826352981326823424/IMG_20201113_142145.jpg?width=803&height=676',
            age : 35,
            localisation:17
        },
        {
            nom : "Victor",
            uri :'https://media.discordapp.net/attachments/630690372691165215/826517495380049940/Snapchat-685727406.jpg?width=337&height=676',
            age : 25,
            localisation:22
        },
        {
            nom : "Jad",
            uri :'https://media.discordapp.net/attachments/630690372691165215/826517773458473040/IMG_20200306_153132.jpg?width=507&height=676',
            age : 19,
            localisation:9
        },
        {
            nom : "Gregoire",
            uri :'https://media.discordapp.net/attachments/824561639642103808/824658666401562684/IMG20210325155615.jpg?width=507&height=676',
            age : 19,
            localisation:29
        }


    ]

    return (
        <View style={{ flex:1 , backgroundColor:"#f2f2f2",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.header}>
                <Icon type="font-awesome-5" name="fire" onPress={() => navigation.navigate('Frame11')}   ></Icon>
                <Icon type="font-awesome-5" name="star" solid color={"yellow"} ></Icon>
                <Icon type="font-awesome-5" name="comment" solid onPress={() => navigation.navigate('Frame20')}></Icon>
                <Icon type="font-awesome-5" name="user" solid onPress={() => navigation.navigate('Frame12')}></Icon>
            </View>
            <View style={styles.swiper}>
                <Text style={styles.textTinderGold}>Passez à Tinder Gold pour voir les personnes qui vous ont déjà liké(e).</Text>
                <FlatList
                    numColumns={2}
                    style={styles.flatlist}
                    data={data}
                    renderItem={({item}) => (
                        <ImageBackground style={styles.card}
                                         blurRadius={15}
                                         borderRadius={10}

                            source={item} >
                        <Text style={styles.activite}> Par activité récente</Text>
                    </ImageBackground>
                    )}
                />
            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    flatlist:{
        marginTop:160,
        alignSelf:"center",
        width:"100%",
        left:28

    },
    activite : {
      position:"absolute",
      bottom:0,
        left :0,
        marginStart:7,
        marginBottom:8,
        color: "white",
        fontSize:15
    },
    textTinderGold : {
      top:80,
        alignSelf:"center",
        fontSize:18,
        marginStart: 100,
        position:"absolute"
    },
    pasBeauLeBoug:{
        position:"absolute",
        alignSelf:"center",
        color:"white",
        fontSize:25
    },
    nom : {
        flex:1,
        alignSelf:"flex-start",
        position: "absolute",
        bottom:35,
        color:"white",
        fontSize:35,
        left:15
    },
    localisation :{
        flex:1,
        alignSelf:"flex-start",
        position: "absolute",
        bottom:15,
        color:"white",
        fontSize:15,
        left:34
    },
    localisationemoji : {
        flex:1,
        alignSelf:"flex-start",
        position: "absolute",
        bottom:15,
        color:"white",
        fontSize:15,
        left:18
    },
    photo :{
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    header:{
        backgroundColor:"#FFFFFF",
        paddingTop:12,
        paddingBottom: 12,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        paddingRight: 35,
        paddingLeft: 35,
        zIndex:1000
    },
    footer: {
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        justifyContent: "space-around",
        bottom: 0,
        paddingLeft:30,
        paddingRight:30,
        alignItems: 'center'
    },

    card: {
        flexDirection:"row",
        width:150,
        height:300,
        marginBottom:10,
        marginRight:5


    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },

    test:{
        backgroundColor:'yellow'
    },
    swiper:{
        position: "absolute", // This HAS to be absolute, or else swiping on mobile fails!
        top:25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }

});
