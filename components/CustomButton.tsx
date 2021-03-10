import {Text, View} from "./Themed";
import {  Button, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default function CustomButton({ action, type, title }: { action: any, type: string, title: string }) {
    return (
        <View style={(type === 'outlined') ? styles.outlined : styles.plain}>
            <TouchableOpacity
                style={(type === 'outlined') ? styles.outlined : styles.plain}
                onPress={action}
            >
                <LinearGradient colors={['#FD3178', '#FF7059']} style={styles.gradient}>
                    <Text>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    plain: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 50,
        "width": 230,
        "height": 89,
        "borderRadius": 64.5,
        alignItems: "center",
        padding: 10
    },
    outlined: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 50,
        "width": 230,
        "height": 89,
        "borderRadius": 64.5,
        alignItems: "center",
        padding: 10
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 64.5
    }
});
