import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame3({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 3</Text>
            <Button title='next' onPress={() => navigation.navigate('Frame4')}/>
        </View>
    );
}
