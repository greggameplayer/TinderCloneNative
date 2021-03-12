import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame6({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 6</Text>
            <Button title='next' onPress={() => navigation.navigate('Frame7')}/>
        </View>
    );
}
