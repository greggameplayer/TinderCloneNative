import {View, Text, Button, SafeAreaView} from "react-native";
import * as React from 'react';

export default function Frame0({navigation}: {navigation: any}) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Frame 0</Text>
          <Button title='Sign Up' onPress={() => navigation.navigate('Frame1')}/>
      </SafeAreaView>
    );
}
