import {Text, View} from "./Themed";
import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';

export default function InputDate({ value, setValue }: { value: string, setValue: any}) {
    return (
        <View>
            <DateInput
                mask={'DD/MM/YYYY'}
                onChange={(date: any) => setValue(date)}
                validate={false} // true by default
                activeColor={'pink'}
            />
        </View>
    );
}
