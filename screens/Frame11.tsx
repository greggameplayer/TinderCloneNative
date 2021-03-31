import {View, Text, Button, StyleSheet, ImageBackground} from "react-native";
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
                <Icon type="font-awesome-5" name="fire" color="#FD3178"></Icon>
                <Icon type="font-awesome-5" name="star" solid onPress={() => navigation.navigate('Frame21')}></Icon>
                <Icon type="font-awesome-5" name="comment" solid onPress={() => navigation.navigate('Frame20')}></Icon>
                <Icon type="font-awesome-5" name="user" solid onPress={() => navigation.navigate('Frame12')}></Icon>
            </View>
            <View style={styles.swiper}>
                <Text style={styles.pasBeauLeBoug}>Plus de match disponible !</Text>
                <Swiper
                    ref={swiper=>{ self.swiper = swiper }}
                    overlayLabelWrapperStyle={styles.test}
                    backgroundColor={"#f2f2f2"}
                    cards={data}
                    showSecondCard={true}
                    stackSize={5}


                    renderCard={ (data) => (

                        <View style={styles.card}>
                            <ImageBackground source={data} style={styles.photo} >
                                <Text style={styles.nom}>{data.nom.toString()} {data.age.toString()}</Text>
                                <Icon containerStyle={styles.localisationemoji} type="font-awesome-5" name="map-marker-alt"  size={20} color="white" ></Icon>
                            <Text style={styles.localisation}> à {data.localisation} km</Text>
                            </ImageBackground>

                        </View>


                    )}>

                </Swiper>
            </View>
            <View style={styles.footer}>
                <Icon type="font-awesome-5" name="undo" raised size={19} color="yellow" onPress={ () => null || self.swiper.swipeBack()} ></Icon>
                <Icon type="font-awesome-5" name="times" raised size={25} color="red" onPress={ () => null || self.swiper.swipeLeft()}></Icon>
                <Icon type="font-awesome-5" name="star" solid raised size={19} color="blue" onPress={ () => null || self.swiper.swipeBottom()}></Icon>
                <Icon type="font-awesome-5" name="heart" solid raised size={25} color="green" onPress={ () => null || self.swiper.swipeRight()}></Icon>
                <Icon type="font-awesome-5" name="bolt" raised size={19} color="purple"></Icon>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
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
        flex:1,
        justifyContent:"center",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        backgroundColor: "#FFFFFF",


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
