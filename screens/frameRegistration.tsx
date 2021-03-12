import {View, Text, Button, SafeAreaView,Image} from "react-native";
import * as React from 'react';

export default function FrameRegistration({navigation}: {navigation: any}) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{
                uri:"https://media.discordapp.net/attachments/805471605248753674/819276168426553364/Couleur-logo-Tinder.png"
            }} />
            <Text>En appuyant sur Connexion ou Créer un nouveau compte,<Text style={{ 'textDecorationLine': 'underline'}}>vous acceptez nos Conditions générales </Text>. Pour en savoir plus sur l’usage que nous faisons de vos données, consultez notre <Text style={{ 'textDecorationLine': 'underline'}}>Politique de confidentialité </Text> et notre <Text style={{ 'textDecorationLine': 'underline'}}>politique en matière de cookie</Text>.</Text>
            <Button title='SE CONNECTER AVEC APPLE' onPress={() => navigation.navigate('Frame1')}/>
            <Button title='SE CONNECTER AVEC FACEBOOK' onPress={() => navigation.navigate('Frame1')}/>
            <Button title='CONNEXION AVEC UN NUMERO DE TELEPHONE' onPress={() => navigation.navigate('Frame1')}/>
            <Text>Des problèmes de connexion ?</Text>
        </SafeAreaView>
    );
}
