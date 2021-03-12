import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame8({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 8</Text>
            <Button title='next' onPress={() => navigation.navigate('Frame9')}/>
        </View>
    );
}
