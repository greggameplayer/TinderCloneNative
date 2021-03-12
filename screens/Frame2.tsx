import { View, Text, Button } from "react-native";
import * as React from 'react';
import CustomButton from "../components/CustomButton";
import {CustomCodeInput} from "../components/CustomCodeInput";
import {useState} from "react";

export default function Frame2({navigation}: {navigation: any}) {
    const [dt, setDt] = useState('');
    return (
        <View>
            <Text>Frame 2</Text>
            <CustomButton action={() => {alert('coucou')}} title={'test'} icon={{name: 'facebook', color: '#FD3178'}} type={"outlined"} disabled={true} />
            <CustomButton action={() => {alert('coucou')}} title={'second test'} width={'25%'} icon={{name: 'facebook', color: 'white'}} type={"plain"} />
            <CustomCodeInput dataArg={dt}/>
            <CustomButton action={() => {alert(dt)}} type={"plain"} title={"validate"}/>
            <Button title='next' onPress={() => navigation.navigate('Frame3')}/>
        </View>
    );
}
