import {Text, View} from "./Themed";
import {TouchableOpacity} from "react-native";
import React, {useState} from "react";
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
                    ...styles({height: height}).outlined,
                    height: height || 50,
                    width: width || 200
                } : {...styles({height: height}).plain, width: width || 200, height: height || 50}}
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
                     height={height}
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
                <FontAwesome5 size={20} name={props.name}
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
                        textColor,
                        height
                    }: { type: string, colors: Array<string> | [] | undefined, leftIcon: { name: string, color: string } | undefined, title: string, disabled: boolean | undefined, rightIcon: { name: string, color: string } | undefined, forFlatList: boolean | undefined, textColor: string | undefined, height: any }) {
    if (type == 'outlined') {
        return (
            <View>
                <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059']}
                                start={[0, 1]}
                                end={[1, 0]}
                                locations={[0.15, 0.75]}
                                style={{...styles({icon: leftIcon, type, height}).gradient, padding: 2}}>
                    <View style={{...styles({icon: leftIcon, type, height}).innerGradient}}>
                        <Icon props={leftIcon} disabled={disabled} forFlatList={forFlatList}/>
                        <Text style={{...textStyle({leftIcon, rightIcon, disabled, textColor}).gradient}}>{title}</Text>
                        <Icon props={rightIcon} disabled={disabled} forFlatList={forFlatList}/>
                    </View>
                </LinearGradient>
            </View>
        );
    } else if (type == 'text') {
        return (
            <View style={{...styles({icon: leftIcon, type, height}).innerGradient}}>
                <Text style={{...textStyle({disabled: disabled, textColor: textColor}).default}}>{title}</Text>
            </View>
        );
    } else {
        return (
            <View>
                <LinearGradient colors={(colors) ? colors : ['#FD3178', '#FF7059']}
                                start={[0, 1]}
                                end={[1, 0]}
                                locations={[0.15, 0.75]}
                                style={{...styles({icon: leftIcon, type, height}).gradient, paddingHorizontal: 25}}>
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

const styles = ({
                    icon,
                    type,
                    height
                }: { icon?: { name: string, color: string }, type?: string, height: any }) => StyleSheet.create({
    plain: {
        display: 'flex',
        fontWeight: 'bold',
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 10,
    },
    outlined: {
        display: 'flex',
        fontWeight: 'bold',
        borderRadius: 1000,
        alignItems: "center",
        flexWrap: "nowrap",
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
        padding: 3,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: "nowrap",
        justifyContent: (typeof icon == "undefined") ? 'center' : 'space-around'
    },
    innerGradient: {
        //@ts-ignore
        backgroundColor: (useColorScheme() == "dark") ? 'black' : 'white',
        display: 'flex',
        flex: 1,
        height: '100%',
        borderRadius: 1000,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: "nowrap",
        justifyContent: (typeof icon == "undefined") ? 'center' : 'space-around'
    }
});

const textStyle = ({
                       leftIcon,
                       rightIcon,
                       disabled,
                       textColor
                   }: { leftIcon?: { name: string, color: string }, rightIcon?: { name: string, color: string }, disabled?: boolean | undefined, textColor?: string | undefined }) => StyleSheet.create({
    default: {
        fontSize: 16,
        color: (textColor) ? textColor : 'white',
        fontFamily: 'TinderFont',
        marginBottom: 1.25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: (typeof rightIcon == "undefined") ? (typeof leftIcon == "undefined") ? 'auto' : '10%' : '10%',
        marginLeft: (typeof rightIcon == "undefined") ? (typeof leftIcon == "undefined") ? 'auto' : 0 : 0,
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    gradient: {
        fontSize: 16,
        color: (disabled) ? '#b3b3b3' : (textColor) ? textColor : '#FD3178',
        fontFamily: 'TinderFont',
        marginBottom: 1.25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: '3%',
        paddingRight: '3%'
    }
})
