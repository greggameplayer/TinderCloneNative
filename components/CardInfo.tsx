import React from "react";
import {View, Text} from "./Themed";
import {LinearGradient} from 'expo-linear-gradient';
import CustomButton from "./CustomButton";
import {StyleSheet, TouchableOpacity} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";


export default function CardInfo({action, text}: { action: any, text: string }) {
    return (
            <LinearGradient colors={['#FF7059', '#FD3178']}
                            start={[0, 1]}
                            end={[1, 0]}
                            locations={[0.25, 0.85]}
                            style={styles.LinearGradient}>
                <Text style={styles.Text}>
                    {text}
                </Text>
                <TouchableOpacity style={{backgroundColor: "white", borderRadius: 1000, height: 30, width: 30, display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "center", marginRight: 5}} onPress={action}>
                    <FontAwesome5 name={"plus"} size={24} color={"#FD3178"}/>
                </TouchableOpacity>
            </LinearGradient>
    );

};

const styles = StyleSheet.create({
    LinearGradient: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '92%',
        borderRadius: 5,
        marginRight: 12
    },
    Text: {
        color: '#FFFFFF',
        fontFamily: 'TinderFont',
        margin: 5,
        maxWidth: "80%"
    }
});

