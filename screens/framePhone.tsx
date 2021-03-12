import { View, Text, Button } from "react-native";
import * as React from 'react';
import { Input } from 'react-native-elements';


export default function FramePhone({navigation}: {navigation: any}) {
    return (
        <View>
            <Text> // METTRE UNE PETITE FLECHE //</Text>
            <Text>Mon numéro est</Text>
            <Input placeholder={"Numéro de téléphone"} style={{width:60}}/>
            <Text>Nous vous enverrons un message avec un code de vérification. Des frais liés à l'envoi de messages et/ou d'utilisation de données peuvent s'appliquer</Text>
            <Text style={{ 'textDecorationLine': 'underline'}}>Découvrez ce qui se passe si vous changez de numéro de téléphone.</Text>
            <Button title='CONTINUER' onPress={() => navigation.navigate('Frame4')}/>
        </View>
    );
}
