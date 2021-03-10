import {Text, View} from "./Themed";
import { TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';

export default function CustomButton({ action, type, title, height, width, colors, icon }: { action: any, type: string, title: string, height?: number, width?: number, colors?: [], icon?: { name: string, color: string } }) {
    return (
        <View>
            <TouchableOpacity
                style={(type === 'outlined') ? {...styles().outlined, height: height || 100, width: width || 250} : {...styles().plain, width: width || 250, height: height || 100}}
                onPress={action}
            >
                <Btn type={type} colors={colors} icon={icon} title={title}/>
            </TouchableOpacity>
        </View>
    );
}

function Icon(props: {name?: string; color?: string} ) {
    if (props) {
        return (
            <View style={{backgroundColor: 'none'}}>
                {/* @ts-ignore */}
                <FontAwesome5 size={35} {...props}/>
            </View>
            );
    } else {
        return (
          <View/>
        );
    }
}

function Btn({type, colors, icon, title} : {type: string, colors: [] | undefined, icon: {name: string, color: string} | undefined, title: string}) {
    if (type == 'outlined') {
        return (
            <View>
                <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059', '#FF7059']} style={styles(icon, type).gradient}>
                    <View style={styles(icon, type).innerGradient}>
                        <Icon {...icon}/>
                        <Text style={textStyle(icon).gradient} >{title}</Text>
                    </View>
                </LinearGradient>
            </View>
        );
    } else {
        return (
          <View>
              <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059', '#FF7059']} style={styles(icon, type).gradient}>
                  <Icon {...icon}/>
                  <Text style={textStyle(icon).default} >{title}</Text>
              </LinearGradient>
          </View>
        );
    }
}

const styles = (icon?: {name?: string, color?: string} | undefined, type?: string) => StyleSheet.create({
    plain: {
        display: 'flex',
        fontWeight: 'bold',
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 10
    },
    outlined: {
        display: 'flex',
        fontWeight: 'bold',
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 10,
    },
    gradient: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        borderRadius: 1000,
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: (typeof icon == "undefined") ? 'center' : 'space-around'
    },
    innerGradient: {
        //@ts-ignore
        backgroundColor: (useColorScheme() == "dark") ? 'black' : 'white',
        display: 'flex',
        flex: 1,
        borderRadius: 1000,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: (typeof icon == "undefined") ? 'center' : 'space-around',
    }
});

const textStyle = (icon: {name?: string, color?: string} | undefined) => StyleSheet.create({
    default: {
        fontSize: 45,
        color:'white',
        marginBottom: '4%',
        display: 'flex',
        marginRight: (typeof icon == "undefined") ? 0 : '10%'
    },
    gradient: {
        fontSize: 45,
        color:'#FD3178',
        marginBottom: '4%',
        display: 'flex',
        marginRight: (typeof icon == "undefined") ? 0 : '10%'
    }
})
