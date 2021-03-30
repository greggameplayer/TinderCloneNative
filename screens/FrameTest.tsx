import {View, Text, Button, SafeAreaView, ScrollView} from "react-native";
import * as React from 'react';
import Frame0 from "./Frame0";
import CustomButton from "../components/CustomButton";
import {CustomCodeInput} from "../components/CustomCodeInput";
import {useState} from "react";
import useColorScheme from '../hooks/useColorScheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InputDate from "../components/InputDate";
import ProfilePicture from "../components/ProfilePicture";
import CustomToggle from "../components/CustomToggle";
import CardInfo from "../components/CardInfo";


export default function FrameTest({navigation}: { navigation: any }) {
    const [dt, setDt] = useState('');
    const [date, setDate] = useState('');
    const [counter, setCounter] = useState(0);
    const [activeChecked, setActiveChecked] = useState(false);
    const insets = useSafeAreaInsets();
    return (

        //accès l'app
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: (useColorScheme() == "dark") ? 'black' : 'white'
        }}>
            <ScrollView contentContainerStyle={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}>
                <CustomButton action={() => {
                    alert('coucou')
                }} title={'test'} rightIcon={{name: 'facebook', color: '#FD3178'}}
                              leftIcon={{name: 'facebook', color: '#FD3178'}} type={"outlined"} disabled={true}
                              width={'55%'}/>
                <CustomButton action={() => {
                    alert('coucou')
                }} title={'test'} rightIcon={{name: 'facebook', color: '#FD3178'}}
                              leftIcon={{name: 'facebook', color: '#FD3178'}} type={"outlined"} disabled={true}
                              width={'55%'}/>
                <CustomButton action={() => {
                    alert('coucou')
                }} title={'test'}  type={"text"}  width={'55%'} textColor={'grey'}/>
                <CustomButton action={() => {
                }} title={'second test'} width={'55%'} rightIcon={{name: 'facebook', color: 'red'}} type={"outlined"}
                              textColor={'blue'} forFlatList={true} clickedColor={'blue'} unclickedColor={'red'}
                              counter={counter} setCounter={setCounter}/>
                <CustomButton action={() => {
                }} title={'three test'} width={'55%'} rightIcon={{name: 'facebook', color: 'red'}} type={"outlined"}
                              textColor={'blue'} forFlatList clickedColor={'blue'} unclickedColor={'red'}
                              counter={counter} setCounter={setCounter} height={120}/>
                <CustomButton action={() => {
                }} title={'four test'} width={'55%'} rightIcon={{name: 'facebook', color: 'red'}} type={"outlined"}
                              textColor={'blue'} forFlatList clickedColor={'blue'} unclickedColor={'red'}
                              counter={counter} setCounter={setCounter}/>
                <CustomButton action={() => {
                }} title={'five test'} rightIcon={{name: 'facebook', color: 'red'}} type={"outlined"}
                              textColor={'blue'} forFlatList clickedColor={'blue'} unclickedColor={'red'}
                              counter={counter} setCounter={setCounter}/>
                <CustomButton action={() => {
                }} title={'six test'} rightIcon={{name: 'facebook', color: 'white'}} type={"plain"}
                              textColor={'blue'}/>
                <CustomCodeInput dataArg={dt} setDataArg={setDt}/>
                <CustomButton action={() => {
                    console.log(counter)
                }} type={"plain"} title={"validate"} width={'55%'} counterDisplay counter={counter}/>

                <InputDate value={date} setValue={setDate} />
                <CustomButton action={() => {
                    console.log(date)
                }} type={"plain"} title={"get Date"} width={'55%'}/>
                <ProfilePicture image={require("../assets/images/favicon.png")} size={"large"}/>
                <CustomToggle activeChecked={activeChecked} setActiveChecked={setActiveChecked} statusColor={"secondary"}/>
                <CardInfo action={() => {}} text={"TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest"}/>

                <Text>Frame Test</Text>
                <Button title='accès frame 0' onPress={() => navigation.navigate('Frame0')}/>
            </ScrollView>
        </SafeAreaView>
    );
}
