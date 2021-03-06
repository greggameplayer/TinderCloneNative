import {Text, View} from "./Themed";
import { TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';


export default function CustomButton({ action, type, title, height, width, colors, icon, disabled }: { action: any, type: string, title: string, height?: number | string, width?: number | string, colors?: Array<string> | [] | undefined, icon?: { name: string, color: string }, disabled?: boolean}) {
    return (
        <View>
            <TouchableOpacity
                style={(type === 'outlined') ? {...styles().outlined, height: height || 100, width: width || 250} : {...styles().plain, width: width || 250, height: height || 100}}
                onPress={action}
                disabled={disabled}
            >
                <Btn type={type} colors={(disabled) ? ['#b3b3b3', '#989696'] : colors} icon={icon} title={title} disabled={disabled}/>
            </TouchableOpacity>
        </View>
    );
}

export function Icon({props, disabled}: {props: {name: string, color: string} | undefined, disabled: boolean | undefined} ) {
    if (props) {
        return (
            <View style={{backgroundColor: 'none'}}>
                <FontAwesome5 size={35} name={props.name} color={(disabled) ? '#b3b3b3' : props.color}/>
            </View>
            );
    } else {
        return (
          <View/>
        );
    }
}

export function Btn({type, colors, icon, title, disabled} : {type: string, colors: Array<string> | [] | undefined, icon: {name: string, color: string} | undefined, title: string, disabled: boolean | undefined}) {
    if (type == 'outlined') {
        return (
            <View>
                <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059', '#FF7059']} style={styles(icon, type).gradient}>
                    <View style={styles(icon, type).innerGradient}>
                        <Icon props={icon} disabled={disabled}/>
                        <Text style={textStyle(icon, disabled).gradient} >{title}</Text>
                    </View>
                </LinearGradient>
            </View>
        );
    } else {
        return (
          <View>
              <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059', '#FF7059']} style={styles(icon, type).gradient}>
                  <Icon props={icon} disabled={disabled}/>
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
        padding: 10,
        borderColor: 'white'
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
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: (typeof icon == "undefined") ? 'center' : 'space-around',
    }
});

const textStyle = (icon: {name?: string, color?: string} | undefined, disabled?: boolean | undefined) => StyleSheet.create({
    default: {
        fontSize: 20,
        color:'white',
        marginBottom: 10,
        display: 'flex',
        marginRight: (typeof icon == "undefined") ? 'auto' : '10%',
        marginLeft: (typeof icon == "undefined") ? 'auto' : 0,
    },
    gradient: {
        fontSize: 20,
        color:(disabled) ? '#b3b3b3' : '#FD3178',
        marginBottom: 10,
        display: 'flex',
        marginRight: (typeof icon == "undefined") ? 'auto' : '10%',
        marginLeft: (typeof icon == "undefined") ? 'auto' : 0,
    }
})
