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
import Frame0 from "./screens/Frame0";

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
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <NavigationContainer linking={LinkingConfiguration}
                                     theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    <Stack.Navigator initialRouteName="WelcomeScreen">
                        {Object.entries({
                            // Use the screens normally
                            ...SignUpScreens,
                        }).map(([name, component]) => (
                            <Stack.Screen name={name} component={component} key={name} options={{headerShown: false}}/>
                        ))}
                        <Stack.Screen name="WelcomeScreen" component={Frame0} options={{headerShown: false}}/>
                        <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar/>
            </SafeAreaProvider>
        );
    }
}
