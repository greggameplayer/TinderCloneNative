import {View, Text, Button, SafeAreaView, Image, StyleSheet, TextInput} from "react-native";
import * as React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import CustomButton from "../components/CustomButton";
import CustomInputRond from "../components/CustomInputRond";
import ChatBulle from "../components/ChatBulle";




export default function FrameRegistration({navigation}: {navigation: any}) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LinearGradient colors={['#FD3178', '#FF7059']} style={styles.gradient}>

            <Image style={styles.stretch} source={{
                uri:"https://media.discordapp.net/attachments/805471605248753674/819276168426553364/Couleur-logo-Tinder.png"
            }} />

            <View style={styles.mt10}>
                <Text style={styles.texte}>En vous connectant, vous acceptez nos <Text style={{ 'textDecorationLine': 'underline'}}>Conditions générales </Text>. Pour en savoir plus sur l’usage que nous faisons de vos données, consultez notre <Text style={{ 'textDecorationLine': 'underline'}}>Politique de confidentialité </Text> et notre <Text style={{ 'textDecorationLine': 'underline'}}>politique en matière de cookie</Text>.</Text>
            </View>
            <View style={styles.mt10}>
                <CustomButton action={() => navigation.navigate('Frame1')} type={'outlined'} title={"CONNEXION AVEC APPLE"} width={300} height={48} />
            </View>
            <View style={styles.mt10}>
                <CustomButton action={() => navigation.navigate('Frame20')} type={'outlined'} title={"SE CONNECTER AVEC FACEBOOK"} width={300} height={48} />
            </View>
            <View style={styles.mt30}>
                <CustomButton action={() => navigation.navigate('Frame11')} type={'outlined'} title={"CONNEXION AVEC UN NUMERO DE TELEPHONE"} width={300} height={48} />
            </View>
                <Text style={styles.texte2}>Des problèmes de connexion ?</Text>

            </LinearGradient>

                   </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    mt10:{
        marginBottom:10,
    },
    mt30:{
        marginBottom:30,
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


