import {View, Text, StyleSheet} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import * as React from 'react';
import {Icon} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import {useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Frame6({navigation}: { navigation: any }) {
    const [homme, setHomme] = useState(true);
    const [femme, setFemme] = useState(true);
    const [autre, setAutre] = useState(true);
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flex: 1, backgroundColor: "#FFFFFF", flexDirection: "column",
            flexWrap: "wrap", paddingTop: insets.top
        }}>

            <View style={styles.containerArrow}>
                {/* @ts-ignore */}
                <Icon name={'arrow-left'} onPress={() => navigation.navigate('Frame0')} style={styles.arrowIcon}
                      type={"font-awesome-5"} color={"#c3c3c3"}/>
            </View>
            <View style={styles.containerNum}>
                <Text style={styles.texte}>Je suis un-e</Text>
            </View>

            <View style={styles.containerButton}>
                <View style={styles.buttonCenter}>
                    <CustomButton action={() => {
                            setFemme(!femme);
                            setHomme(true);
                            setAutre(true);
                    }} type={"plain"} colors={(femme) ? ["#F5F5F5", "#F5F5F5"] : undefined}
                                  textColor={(femme) ? "#969494" : undefined} height={40} width={250} title={'FEMME'}/>
                </View>
                <View style={styles.buttonCenter}>
                    <CustomButton action={() => {
                            setHomme(!homme);
                            setFemme(true);
                            setAutre(true);
                    }} type={"plain"} colors={(homme) ? ["#F5F5F5", "#F5F5F5"] : undefined}
                                  textColor={(homme) ? "#969494" : undefined} height={40} width={250} title={'HOMME'}/>
                </View>
                <View style={styles.buttonCenter}>
                    <CustomButton action={() => {

                        setAutre(!autre);
                        setHomme(true);
                        setFemme(true);
                    }} type={"plain"} colors={(autre) ? ["#F5F5F5", "#F5F5F5"] : undefined}
                                  textColor={(autre) ? "#969494" : undefined} height={40} width={250} title={'AUTRE'}/>
                </View>
            </View>
            <View style={styles.buttonBottom}>
                <View style={styles.checkboxTextAlign}>
                    {/*<CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />*/}
                    <Text style={styles.textegris}>Afficher mon genre sur mon profil</Text>
                </View>

                <View style={styles.buttonBottom}>
                    <CustomButton action={() => navigation.navigate('Frame7')} disabledColor={["#F5F5F5", "#F5F5F5"]}
                                  textDisabledColor={"#969494"} height={40} width={250} title={"CONTINUER"}
                                  type={"plain"} disabled={homme && femme && autre}/>
                </View>

            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    containerArrow: {
        paddingTop: 10,
        paddingLeft: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",
    },
    arrowIcon: {},
    containerDatePicker: {
        paddingTop: 10,
        paddingLeft: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        flex: 0.1,
    },
    containerNum: {
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",
        flex: 0.1
    },
    container: {
        paddingTop: 50,
    },
    inputContainer: {
        width: '50%',
    },
    fond: {
        color: "#FFFFFF"
    },
    textegris: {
        marginLeft: 15,
        color: "#c3c3c3",
        fontSize: 12,
        alignSelf: 'center',
    },
    texte: {
        color: "#000000",
        fontSize: 35,
        marginLeft: 30,
        marginBottom: 5,
        marginTop: 20,
        textAlign: "left",
        alignSelf: "center"

    },
    texte2: {
        marginRight: 35,
        marginLeft: 35,
        color: "#000000",
        fontSize: 12,
        textDecorationLine: 'underline',
        alignSelf: "center"


    },
    stretch: {
        width: 200,
        height: 48.5157954886425798425587,
        resizeMode: 'stretch',
        marginTop: 80,

    },
    gradient: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    campusInputContainer: {
        marginLeft: 25,
        width: "100%",
        alignSelf: "center"
    },
    containerButton: {
        width: "100%",
        flexDirection: "column",
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center"

    },
    buttonCenter: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10
    },
    buttonBottom: {
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
    },
    checkboxTextAlign: {
        width: "100%",
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 50
    },
});

