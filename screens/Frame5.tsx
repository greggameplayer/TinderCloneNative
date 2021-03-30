import {View, Text, Button, StyleSheet} from "react-native";
import * as React from 'react';
import {Icon, Input} from "react-native-elements";
import CustomButton from "../components/CustomButton";
import DatePicker from 'react-native-datepicker';
import {useSafeAreaInsets} from "react-native-safe-area-context";

//todo faire une fonction

export default function Frame5({navigation}: {navigation: any}) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex:1 , backgroundColor:"#FFFFFF",flexDirection: "column",
            flexWrap: "wrap",paddingTop: insets.top }}>

            <View style={styles.containerArrow}>
                <Icon name={'arrow-left'} onPress={() => navigation.navigate('Frame0')} style={styles.arrowIcon} type={"font-awesome-5"} color={"#c3c3c3"}/>
            </View>
            <View style={styles.containerNum}>
                <Text style={styles.texte}>Ma date d'anniversaire est</Text>
            </View>
            <View style={styles.containerDatePicker}>

                <DatePicker
                    style={{width: 400}}
                    date={"28/03/2021"}
                    showIcon={false}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="01/01/1901"
                    maxDate="30/03/2021"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateInput: {
                            marginRight:35,
                            marginLeft:25,
                            marginTop:50,
                            borderWidth:0,
                            width:400
                        },
                        dateText: {
                            fontSize: 25,
                            color: "black",
                        }
                    }}
                />

            </View>
            <Text style={styles.textegris}>Voila comment ça apparaitra dans Tinder</Text>

            <View style={styles.containerButton}>
                <CustomButton action={() => navigation.navigate('Frame6')}  type={"plain"} title={'CONTINUER'} height={40} width={250}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    containerArrow:{
        paddingTop: 10,
        paddingLeft: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",
    },
    containerDatePicker:{
        marginTop:"40%",
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        flex: 0.1,
    },
    containerNum:{
        paddingTop: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        flexDirection: "row",
        flex: 0.1
    },
    container: {
        paddingTop: 50,
    },
    inputContainer:{
        width:'50%',
    },
    fond :{
        color:"#FFFFFF"
    },
    textegris:{
        marginTop:15,
        marginRight:35,
        marginLeft:25,
        color:"#c3c3c3",
        fontSize:12,
        alignSelf:'center',
        justifyContent:"center"
    },
    texte:{
        color:"#000000",
        fontSize: 35,
        textAlign:"left",
        paddingLeft: 40,
        paddingRight:40,
        width:"100%",
        height: 200,
        marginBottom:20,

    },
    texte2:{
        marginRight:35,
        marginLeft:35,
        color:"#000000",
        fontSize:12,
        textDecorationLine: 'underline',
        alignSelf:"center"


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
        alignItems:'center',
    },
    campusInputContainer: {
        marginLeft:25,
        width:310,
        alignSelf:"center"
    },
    containerButton: {
        flexDirection: "row",
        alignSelf: "center",
        position:"absolute",
        bottom:15
    }
});
