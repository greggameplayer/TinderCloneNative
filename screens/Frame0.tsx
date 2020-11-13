import { View, Text, Button } from "react-native";
import * as React from 'react';
import Frame1 from "./Frame1";

export default function Frame0({navigation}: {navigation: any}) {
    return (
      <View>
          <Text>Frame 0</Text>
          <Button title='next' onPress={() => navigation.navigate('Frame1')}/>
      </View>
    );
}
