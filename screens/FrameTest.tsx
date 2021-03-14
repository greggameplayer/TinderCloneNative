import {View, Text, Button, SafeAreaView} from "react-native";
import * as React from 'react';
import Frame0 from "./Frame0";
import CustomButton from "../components/CustomButton";
import {CustomCodeInput} from "../components/CustomCodeInput";
import {useState} from "react";
import useColorScheme from '../hooks/useColorScheme';
//import InputDate from "../components/InputDate";


export default function FrameTest({navigation}: {navigation: any}) {
    const [dt, setDt] = useState('');
    const [date, setDate] = useState('');
    return (

                //accès l'app
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: (useColorScheme() == "dark") ? 'black' : 'white' }}>
                    <CustomButton action={() => {alert('coucou')}} title={'test'} rightIcon={{name: 'facebook', color: '#FD3178'}} leftIcon={{name: 'facebook', color: '#FD3178'}} type={"outlined"} disabled={true} width={'55%'} />
                    <CustomButton action={() => {}} title={'second test'} width={'55%'} rightIcon={{name: 'facebook', color: 'white'}} type={"outlined"} textColor={'blue'} forFlatList={true} clickedColor={'blue'} unclickedColor={'red'}/>
                    <CustomCodeInput dataArg={dt} setDataArg={setDt}/>
                    <CustomButton action={() => {}} type={"plain"} title={"validate"} width={'55%'}/>
                    <Text>Frame Test</Text>
                    <Button title='accès frame 0' onPress={() => navigation.navigate('Frame0')}/>
                </SafeAreaView>
    );
}
