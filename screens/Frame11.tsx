import {View, Text, Button, StyleSheet, ImageBackground} from "react-native";
import * as React from 'react';
import {Icon} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import Swiper from"react-native-deck-swiper"
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Frame11({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();
    const data = [{
        nom : "lucas",
        urigit :'https://media.discordapp.net/attachments/630690372691165215/826353669846728704/image0.jpg?width=362&height=676'
    },
        {
            nom : "geoffrey",
            uri :'https://media.discordapp.net/attachments/630690372691165215/826352409320095784/image0.jpg?width=507&height=676'
        }

    ]
    return (
        <View style={{ flex:1 , backgroundColor:"#f2f2f2",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.header}>
                <Icon type="font-awesome-5" name="fire" color="#FD3178"></Icon>
                <Icon type="font-awesome-5" name="star" solid></Icon>
                <Icon type="font-awesome-5" name="comment" solid onPress={() => navigation.navigate('Frame20')}></Icon>
                <Icon type="font-awesome-5" name="user" solid onPress={() => navigation.navigate('Frame12')}></Icon>
            </View>
            <View style={styles.swiper}>

                <Swiper
                    overlayLabelWrapperStyle={styles.test}
                    backgroundColor={"#f2f2f2"}
                    cards={data}
                    showSecondCard={true}
                    stackSize={5}
                    renderCard={ (data) => (
                        <ImageBackground source={data}>
                            <View style={styles.card}>
                                <Text style={styles.text}>{data.nom.toString()}</Text>
                            </View>
                        </ImageBackground>

                    )}>

                </Swiper>
            </View>



            <View style={styles.footer}>
                <Icon type="font-awesome-5" name="undo" raised size={19} color="yellow" ></Icon>
                <Icon type="font-awesome-5" name="times" raised size={25} color="red"></Icon>
                <Icon type="font-awesome-5" name="star" solid raised size={19} color="blue"></Icon>
                <Icon type="font-awesome-5" name="heart" solid raised size={25} color="green"></Icon>
                <Icon type="font-awesome-5" name="bolt" raised size={19} color="purple"></Icon>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        flex:0.85,
        justifyContent:"center",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        imageBackground: "yellow",


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
        top:60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }

});
