import {View, Text, Button, StyleSheet, Image} from "react-native";
import * as React from 'react';
import {Icon} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import {LinearGradient} from "expo-linear-gradient";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function Frame12({navigation}: {navigation: any}) {

    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex:1 , backgroundColor:"#f2f2f2",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={styles.header}>
                <Icon type="font-awesome-5" name="fire" onPress={() => navigation.navigate('Frame11')}></Icon>
                <Icon type="font-awesome-5" name="star" solid></Icon>
                <Icon type="font-awesome-5" name="comment" solid onPress={() => navigation.navigate('Frame20')}></Icon>
                <Icon type="font-awesome-5" name="user" solid color="#FD3178"></Icon>
            </View>


            <View style={styles.positionCenter1}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://resize-public.ladmedia.fr/r/628,,forcex/img/var/public/storage/images/toutes-les-photos/filip-nikolic-2be3-decouvrez-sasha-sa-fille-de-15-ans-deja-star-d-instagram-1653731/filip-nikolic-2be3-decouvrez-sasha-sa-fille-de-15-ans-deja-star-d-instagram-1653732/43882543-1-fre-FR/Filip-Nikolic-2Be3-decouvrez-Sasha-sa-fille-de-15-ans-deja-star-d-Instagram.jpg',
                    }}
                />
            </View >

            <View style={styles.positionCenter}>
                <Text style={styles.textTitle}>Celine, 23</Text>
            </View>

            <View style={styles.positionCenter}>
                <Text style={styles.text}>HEI Lille</Text>
            </View>

            <View style={styles.alignRow}>
                <View style={styles.logo}>
                    <Icon type="font-awesome-5" name="cog" color="#B3BEC4"  onPress={() => navigation.navigate('Frame13')}></Icon>
                </View>
                <View>
                    <Icon type="font-awesome-5" name="camera"  color="#FD3178"></Icon>
                </View>
                <View style={styles.logo2}>
                    <Icon type="font-awesome-5" name="shield-alt" color="#B3BEC4" onPress={() => navigation.navigate('Frame14')} ></Icon>
                </View>
            </View>

            <View style={styles.tipsContainer}>
                <View style={styles.tips}>
                    <LinearGradient colors={['#FD3178', '#FF7059']} style={styles.gradient}>
                            <Text style={styles.textColor}>
                                Conseil de pro : swipper à droite, c'est la clé du succès !
                            </Text>
                            <Icon type="font-awesome-5" name="plus-circle" style={styles.logoBis} color={"#FFFFFF"}></Icon>
                    </LinearGradient>
                </View>
            </View>

            <View style={styles.positionCenterBis}>
                <Icon type="font-awesome-5" name="heart" style={styles.littleMargin} color={"#41b2db"}></Icon>
                <View>
                    <Text>Vous n'avez plus aucun Like</Text>
                    <Text>Débloquez des Likes illimités !</Text>
                </View>

            </View>



            <View style={styles.footer}>
                <CustomButton type={"outlined"} colors={["white", "white"]} width={200} height={40} textColor="#FD3178"
                               title={'MON TINDER PLUS'}  />
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
        justifyContent:"space-between",
        alignSelf:"center",
        paddingRight: 35,
        paddingLeft: 35,
        backgroundColor:"#FFFFFF"
    },
    footer: {
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        justifyContent: "space-around",
        bottom: 10,
        alignItems: 'center'
    },
    avatar:{
        width: 120,
        height: 120,
        borderRadius: 400/ 2,

    },
    positionCenter1:{
        marginTop:"15%",
        alignSelf:"center",
    },
    positionCenter:{
        alignSelf:"center"
    },
    textTitle:{
        fontSize:27
    },
    alignRow:{
        marginTop:10,
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"center",
        width:"100%"

    },
    logo:{
        marginRight:"15%",

    },
    logo2:{
        marginLeft:"15%",
    },
    tipsContainer:{
        marginTop:"15%",
        width:"100%",
        paddingLeft:7,
        paddingRight:7,
        marginBottom:"15%"

    },
    gradient:{
        flexDirection:"row",
        borderRadius:4,
        height: 55,

    },
    textColor:{
        margin: 10,
        color:"white",
        flexWrap:"wrap",
        width:"80%"
    },
    logoBis:{
        margin:15
    },
    positionCenterBis:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    littleMargin:{
        marginRight:7
    }


});