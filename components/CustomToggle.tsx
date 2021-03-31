import React from "react";
import {View} from "./Themed";
import {Switch} from "react-native";

export default function CustomToggle({activeChecked, setActiveChecked, disabled, statusColor}: {activeChecked: any, setActiveChecked: any, disabled?: boolean | undefined, statusColor?: any}) {
    const onActiveCheckedChange = (isChecked: any) => {
        setActiveChecked(isChecked);
    };

    return (
        <Switch value={activeChecked} onValueChange={onActiveCheckedChange} disabled={disabled} thumbColor={activeChecked ? '#FD3178' : 'grey'} trackColor={{false: 'lightgrey', true: '#ffcede'}} style={{margin: 10}}/>
    );
}