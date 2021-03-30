import { View, Button } from "react-native";
import {Text} from "../components/Themed";
import * as React from 'react';
import Frame2 from "./Frame2";

export default function Frame1({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 1</Text>
            <Button title='next' onPress={() => navigation.navigate('Frame2')}/>
        </View>
    );
}
