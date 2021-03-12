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
            <CustomButton action={() => {alert('coucou')}} title={'test'} icon={{name: 'facebook', color: '#FD3178'}} type={"outlined"} disabled={true} width={'55%'} />
            <CustomButton action={() => {alert('coucou')}} title={'second test'} width={'55%'} icon={{name: 'facebook', color: 'white'}} type={"plain"} />
            <CustomCodeInput dataArg={dt} setDataArg={setDt}/>
            <CustomButton action={() => {alert(dt)}} type={"plain"} title={"validate"} width={'55%'}/>
            <Button title='next' onPress={() => navigation.navigate('Frame3')}/>
        </View>
    );
}
