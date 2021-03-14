import {Text, View} from "./Themed";
import {TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {FontAwesome5} from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';


export default function CustomButton({
                                         action,
                                         type,
                                         title,
                                         height,
                                         width,
                                         colors,
                                         leftIcon,
                                         rightIcon,
                                         disabled,
                                         forFlatList,
                                         textColor,
                                         clickedColor,
                                         unclickedColor,
                                         counter,
                                         setCounter,
                                         counterDisplay
                                     }: {
    action: any, type: string, title: string, height?: number | string, width?: number | string,
    colors?: Array<string> | [] | undefined, leftIcon?: { name: string, color: string }, rightIcon?: { name: string, color: string },
    disabled?: boolean, forFlatList?: boolean, textColor?: string, clickedColor?: any, unclickedColor?: any, counter?: any, setCounter?: any, counterDisplay?: boolean | undefined
}) {
    const [clicked, setClicked] = useState(false);
    const [flatListColors, setFlatListColors] = useState([unclickedColor, unclickedColor]);

    return (
        <View>
            <TouchableOpacity
                style={(type === 'outlined') ? {
                    ...styles().outlined,
                    height: height || 100,
                    width: width || 250
                } : {...styles().plain, width: width || 250, height: height || 100}}
                onPressIn={() => {
                    if (forFlatList) {
                        if (clicked) {
                            setClicked(false);
                            setCounter(counter - 1);
                        } else {
                            setClicked(true);
                            setCounter(counter + 1);
                        }
                    }
                    action();
                }}
                onPressOut={() => {
                    if (forFlatList) {
                        if (clicked) {
                            setFlatListColors([clickedColor, clickedColor]);
                        } else {
                            setFlatListColors([unclickedColor, unclickedColor]);
                        }
                    }
                }}
                disabled={(forFlatList) ? false : disabled}
            >
                <Btn type={type}
                     colors={(typeof forFlatList == "undefined" || !forFlatList) ? (disabled) ? ['#b3b3b3', '#989696'] : colors : flatListColors}
                     leftIcon={leftIcon} rightIcon={rightIcon}
                     title={(counterDisplay) ? title + ' (' + counter + '/5)' : title}
                     disabled={disabled}
                     forFlatList={forFlatList}
                     textColor={(typeof forFlatList == "undefined" || !forFlatList) ? textColor : flatListColors[0]}/>
            </TouchableOpacity>
        </View>
    );
}

export function Icon({
                         props,
                         disabled,
                         forFlatList
                     }: { props: { name: string, color: string } | undefined, disabled: boolean | undefined, forFlatList: boolean | undefined }) {
    if (props) {
        return (
            <View style={{backgroundColor: 'none'}}>
                <FontAwesome5 size={35} name={props.name}
                              color={(typeof forFlatList == "undefined" || !forFlatList) ? (disabled) ? '#b3b3b3' : props.color : props.color}/>
            </View>
        );
    } else {
        return (
            <View/>
        );
    }
}

export function Btn({
                        type,
                        colors,
                        leftIcon,
                        rightIcon,
                        title,
                        disabled,
                        forFlatList,
                        textColor
                    }: { type: string, colors: Array<string> | [] | undefined, leftIcon: { name: string, color: string } | undefined, title: string, disabled: boolean | undefined, rightIcon: { name: string, color: string } | undefined, forFlatList: boolean | undefined, textColor: string | undefined }) {
    if (type == 'outlined') {
        return (
            <View>
                <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059', '#FF7059']}
                                style={styles(leftIcon, type).gradient}>
                    <View style={styles(leftIcon, type).innerGradient}>
                        <Icon props={leftIcon} disabled={disabled} forFlatList={forFlatList}/>
                        <Text style={textStyle({leftIcon, rightIcon, disabled, textColor}).gradient}>{title}</Text>
                        <Icon props={rightIcon} disabled={disabled} forFlatList={forFlatList}/>
                    </View>
                </LinearGradient>
            </View>
        );
    } else {
        return (
            <View>
                <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059', '#FF7059']}
                                style={styles(leftIcon, type).gradient}>
                    <Icon props={leftIcon} disabled={disabled} forFlatList={forFlatList}/>
                    <Text style={textStyle({
                        leftIcon: leftIcon,
                        rightIcon: rightIcon,
                        textColor: textColor
                    }).default}>{title}</Text>
                    <Icon props={rightIcon} disabled={disabled} forFlatList={forFlatList}/>
                </LinearGradient>
            </View>
        );
    }
}

const styles = (icon?: { name?: string, color?: string } | undefined, type?: string) => StyleSheet.create({
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

const textStyle = ({
                       leftIcon,
                       rightIcon,
                       disabled,
                       textColor
                   }: { leftIcon?: { name: string, color: string }, rightIcon?: { name: string, color: string }, disabled?: boolean | undefined, textColor?: string | undefined }) => StyleSheet.create({
    default: {
        fontSize: 20,
        color: (textColor) ? textColor : 'white',
        marginBottom: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: (typeof rightIcon == "undefined") ? (typeof leftIcon == "undefined") ? 'auto' : '10%' : 0,
        marginLeft: (typeof rightIcon == "undefined") ? (typeof leftIcon == "undefined") ? 'auto' : 0 : 0,
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    gradient: {
        fontSize: 20,
        color: (disabled) ? '#b3b3b3' : (textColor) ? textColor : '#FD3178',
        marginBottom: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: (typeof rightIcon == "undefined") ? (typeof leftIcon == "undefined") ? 'auto' : '10%' : 0,
        marginLeft: (typeof rightIcon == "undefined") ? (typeof leftIcon == "undefined") ? 'auto' : 0 : 0,
        paddingLeft: '3%',
        paddingRight: '3%'
    }
})
