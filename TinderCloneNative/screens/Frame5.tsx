import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame5({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 5</Text>
            <Button title='next' onPress={() => navigation.navigate('Frame6')}/>
        </View>
    );
}
