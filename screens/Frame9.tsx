import { View, Text, Button } from "react-native";
import * as React from 'react';

export default function Frame9({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 9</Text>
            <Button title='next' onPress={() => navigation.reset({
                index: 0,
                routes: [{name: 'HomeScreen'}]
            })}/>
        </View>
    );
}
