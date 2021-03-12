import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame4({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 4</Text>
            <Button title='next' onPress={() => navigation.navigate('Frame5')}/>
        </View>
    );
}
