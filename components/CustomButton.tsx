import {Text, View} from "./Themed";
import {  Button, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export default function CustomButton({ action, type, title, height, width, colors }: { action: any, type: string, title: string, height: number, width: number, colors: [] }) {
    return (
        <View>
            <TouchableOpacity
                style={(type === 'outlined') ? styles.outlined : styles.plain}
                onPress={action}
            >
                <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059', '#FF7059']} style={styles.gradient}>
                    <Text style={{fontSize: 45, color:'white', marginBottom: '4%', display: 'flex'}} >{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    plain: {
        display: 'flex',
        fontWeight: 'bold',
        "width": 250,
        "height": 100,
        "borderRadius": 1000,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 10
    },
    outlined: {
        display: 'flex',
        fontWeight: 'bold',
        "width": 250,
        "height": 100,
        "borderRadius": 1000,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 10
    },
    gradient: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        "borderRadius": 1000,
        alignItems:'center'
    }
});
