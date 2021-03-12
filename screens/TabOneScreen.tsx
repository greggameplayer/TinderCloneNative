import * as React from 'react';
import {StyleSheet, Button, Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import TinderCard from 'react-tinder-card'

export default function TabOneScreen() {
  return (

    <View style={styles.container}>
      <Text>Coucou</Text>
        <View style={styles.card}>
            <TinderCard

                preventSwipe={['right', 'left']}>
                <Image        style={styles.tinyLogo}
                              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
            </TinderCard>
        </View>



    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        alignItems: 'center',
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
