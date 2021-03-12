import {View, Text, Button, SafeAreaView} from "react-native";
import * as React from 'react';
import Frame0 from "./Frame0";
import CustomButton from "../components/CustomButton";
import {CustomCodeInput} from "../components/CustomCodeInput";
import {useState} from "react";
import useColorScheme from '../hooks/useColorScheme';


export default function FrameTest({navigation}: {navigation: any}) {
    const [dt, setDt] = useState('');
    return (

                //accès l'app
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: (useColorScheme() == "dark") ? 'black' : 'white' }}>
                    <CustomButton action={() => {alert('coucou')}} title={'test'} icon={{name: 'facebook', color: '#FD3178'}} type={"outlined"} disabled={true} width={'55%'} />
                    <CustomButton action={() => {alert('coucou')}} title={'second test'} width={'55%'} icon={{name: 'facebook', color: 'white'}} type={"plain"} />
                    <CustomCodeInput dataArg={dt} setDataArg={setDt}/>
                    <CustomButton action={() => {alert(dt)}} type={"plain"} title={"validate"} width={'55%'}/>
                    <Text>Frame Test</Text>
                    <Button title='accès frame 0' onPress={() => navigation.navigate('Frame0')}/>
                </SafeAreaView>
    );
}
