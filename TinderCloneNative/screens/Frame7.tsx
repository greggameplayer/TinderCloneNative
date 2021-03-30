import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame7({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 7</Text>
            <Button title='next' onPress={() => navigation.navigate('Frame8')}/>
        </View>
    );
}
