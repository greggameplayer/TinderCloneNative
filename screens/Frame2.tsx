import { View, Text, Button } from "react-native";
import * as React from 'react';
import CustomButton from "../components/CustomButton";

export default function Frame2({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Frame 2</Text>
            <CustomButton action={() => {alert('coucou')}} type={'plain'} title={'test'} />
            <Button title='next' onPress={() => navigation.navigate('Frame3')}/>
        </View>
    );
}
