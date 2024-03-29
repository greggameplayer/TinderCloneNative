import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, View, Text} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {Input} from 'react-native-elements';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const CELL_COUNT = 6;

export function CustomCodeInput({dataArg, setDataArg}: { dataArg: React.SetStateAction<string>, setDataArg: React.SetStateAction<any> }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        // @ts-ignore
        setValue(dataArg)
    }, [dataArg])

    useEffect(() => {
        setDataArg(value)
    }, [value, setDataArg])
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell, {backgroundColor: "white"}]}>
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor/> : null)}
                        </Text>
                    </View>
                )}
            />
    );
}

const styles = StyleSheet.create({
    root: {padding: 20, minHeight: 300},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
        marginTop: 20,
        width: '100%',
        display: "flex",
        justifyContent: "space-around",
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cellRoot: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: "white"
    },
    cellText: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: "white"
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
        backgroundColor: "white"

    },
});
