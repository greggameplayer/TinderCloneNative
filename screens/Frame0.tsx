import {View, Text, Button, SafeAreaView, Image, StyleSheet} from "react-native";
import * as React from 'react';
import TestLucas from "../components/TestLucas";
import CustomButton from "../components/CustomButton";
import FrameRegistration from "./frameRegistration";
import {LinearGradient} from "expo-linear-gradient";

export default function Frame0({navigation}: {navigation: any}) {

    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222'}}>
          <LinearGradient colors={['#FD3178', '#FF7059']} style={styles.gradient}>

              <Image style={styles.stretch} source={{
                  uri:"https://media.discordapp.net/attachments/805471605248753674/819276168426553364/Couleur-logo-Tinder.png"
              }} />
              <Text style={styles.texte}>En appuyant sur Connexion ou Créer un nouveau compte,<Text style={{ 'textDecorationLine': 'underline'}}>vous acceptez nos Conditions générales </Text>. Pour en savoir plus sur l’usage que nous faisons de vos données, consultez notre <Text style={{ 'textDecorationLine': 'underline'}}>Politique de confidentialité </Text> et notre <Text style={{ 'textDecorationLine': 'underline'}}>politique en matière de cookie</Text>.</Text>
              <CustomButton action={() => navigation.navigate('FramePhone')} type={'outlined'} title={"CREER UN COMPTE"} width={300} height={70} />

              <CustomButton action={() => navigation.navigate('Frame1')} type={'outlined'} title={"CONNEXION"} width={300} height={70}/>

              <Text style={styles.texte2}>Des problèmes de connexion ?</Text>
          </LinearGradient>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
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

