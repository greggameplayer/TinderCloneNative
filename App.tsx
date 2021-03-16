import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import {SignUpScreens} from './types';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FrameTest from "./screens/FrameTest";
import {useFonts} from "expo-font";
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';

const Stack = createStackNavigator();

export function Home() {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider style={{
            paddingTop: insets.top,
        }}>
            <Navigation colorScheme={colorScheme}/>
        </SafeAreaProvider>
    );
}

export default function App() {
    let [fontsLoaded] = useFonts({
        'TinderFont': require('./assets/fonts/GothamRounded-Medium.otf'),
    });
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete && !fontsLoaded) {
        return null;
    } else {
        return (
            <ApplicationProvider {...eva} theme={colorScheme === 'dark' ? eva.dark : eva.light}>
            <SafeAreaProvider>
                <NavigationContainer linking={LinkingConfiguration}
                                     theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    <Stack.Navigator initialRouteName="WelcomeScreen">
                        {Object.entries({
                            // Use the screens normally
                            ...SignUpScreens,
                        }).map(([name, component]) => (
                            <Stack.Screen name={name} component={component} key={name}/>
                        ))}
                        <Stack.Screen name="WelcomeScreen" component={FrameTest} options={{
                            headerShown: false,
                            headerBackImage: () => (
                                <FontAwesome5 name={'facebook'}/>
                            )
                        }}/>
                        <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar/>
            </SafeAreaProvider>
            </ApplicationProvider>
        );
    }
}
