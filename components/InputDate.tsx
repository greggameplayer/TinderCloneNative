import {View} from "./Themed";
import React, {useRef, useState} from "react";
import {Button, Platform, StyleSheet, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { Datepicker, Layout } from '@ui-kitten/components';

export default function InputDate({ value, setValue, width }: { value: string, setValue: any, width?: string | number | undefined}) {
    const [date, setDate] = React.useState(new Date());
    return (
        <View>
            <Layout style={{...styles.container, width: (width) ? width : undefined}} level='1'>
                <Datepicker
                    date={date}
                    onSelect={nextDate => {
                        setValue(toTwoDigits(nextDate.getDate()) + '/' + toTwoDigits(nextDate.getMonth() + 1) + '/' + nextDate.getFullYear())
                        return setDate(nextDate)
                    }}
                    max={new Date()}
                />

            </Layout>
        </View>
    );
}

function toTwoDigits(number: string | number) {
    if (number <= 9) {
        number = '0' + number.toString()
    }

    return number
}

const styles = StyleSheet.create({
    container: {
    },
});
