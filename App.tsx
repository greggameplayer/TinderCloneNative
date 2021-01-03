import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Frame0 from "./screens/Frame0";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame4 from "./screens/Frame4";
import Frame3 from "./screens/Frame3";
import Frame5 from "./screens/Frame5";
import Frame7 from "./screens/Frame7";
import Frame9 from "./screens/Frame9";
import Frame8 from "./screens/Frame8";
import Frame6 from "./screens/Frame6";

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Frame0" component={Frame0} />
            <Stack.Screen name="Frame1" component={Frame1} />
            <Stack.Screen name="Frame2" component={Frame2} />
            <Stack.Screen name="Frame3" component={Frame3} />
            <Stack.Screen name="Frame4" component={Frame4} />
            <Stack.Screen name="Frame5" component={Frame5} />
            <Stack.Screen name="Frame6" component={Frame6} />
            <Stack.Screen name="Frame7" component={Frame7} />
            <Stack.Screen name="Frame8" component={Frame8} />
            <Stack.Screen name="Frame9" component={Frame9} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
