import {View, Text, Button, StyleSheet, ScrollView, SafeAreaView, Image} from "react-native";
import * as React from 'react';
import {Icon} from "react-native-elements";
import ChatBulle from "../components/ChatBulle";
import MessageBubble from "../components/ChatBulle";
import CustomInputRond from "../components/CustomInputRond";
import {Avatar} from "react-native-elements";
import {useSafeAreaInsets} from "react-native-safe-area-context";





export default function Frame20({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex:1 , backgroundColor:"#FFFFFF",flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top}}>

            <View style={style.header}>
                <View style={style.icon}>
                    <Icon type="font-awesome-5" name="arrow-left" solid onPress={() => navigation.navigate('Frame11')}></Icon>
                </View>
                <View>
                    <Text  style={style.user}>LA MEUF DE LUCAS</Text>
                </View>
                <View style={style.mr5}>
                    <Image
                        style={style.avatar}
                        source={{
                            uri: 'https://resize-public.ladmedia.fr/r/628,,forcex/img/var/public/storage/images/toutes-les-photos/filip-nikolic-2be3-decouvrez-sasha-sa-fille-de-15-ans-deja-star-d-instagram-1653731/filip-nikolic-2be3-decouvrez-sasha-sa-fille-de-15-ans-deja-star-d-instagram-1653732/43882543-1-fre-FR/Filip-Nikolic-2Be3-decouvrez-Sasha-sa-fille-de-15-ans-deja-star-d-Instagram.jpg',
                        }}
                    />
                </View>

            </View>

                <ScrollView style={style.scrollView}>
                <SafeAreaView >
                    <MessageBubble
                        mine
                        text="Salut !"
                    />
                    <MessageBubble
                        text="Hola :)"
                    />
                    <MessageBubble
                        mine
                        text="Chaud pour un plan ?"
                    />
                    <MessageBubble
                        text="Oui bb"
                    />
                    <MessageBubble
                        mine
                        text="T'es sérieux?"
                    />
                    <MessageBubble
                        text="Oui"
                    />
                    <MessageBubble
                        mine
                        text="Quand ?"
                    />
                    <MessageBubble
                        text="Demain 10h dans les toilettes EPSI rue nationale"
                    />
                    <MessageBubble
                        mine
                        text="T'es sérieux?"
                    />
                    <MessageBubble
                        text="Oui"
                    />
                    <MessageBubble
                        mine
                        text="Quand ?"
                    />
                    <MessageBubble
                        text="Demain 10h dans les toilettes EPSI rue nationale"
                    />
                </SafeAreaView>


            </ScrollView>
            <View style={style.footer}>
                <CustomInputRond />
            </View>

        </View>
    );
}
const style = StyleSheet.create({


    header: {
        flexDirection:"row",
        alignSelf:"center",
        width:"100%",
        paddingTop:10,


    },
    icon: {
        paddingTop:10,
        paddingLeft:10
        //   position: "absolute",
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 400/ 2,
        //   marginLeft:90,

    },
    mr5:{
        paddingLeft:10
    },
    user: {
        marginTop:15,
        paddingLeft: 120,
        position: "absolute",
        justifyContent: 'flex-start',

    },

    scrollView: {
        backgroundColor: 'white',
         width:"100%",
         marginBottom:55
     },
    footer: {
         position:"absolute",
        bottom:10,
        alignSelf:"center"
    },


});