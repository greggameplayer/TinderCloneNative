import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame2({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 2</Text>

            <Button title='next' onPress={() => navigation.navigate('Frame3')}/>
        </View>
    );
}
