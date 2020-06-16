import React from "react";
import { View, Text, StatusBar } from "react-native";

const App = () => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Text>Hello, World</Text>
    </View>
  );
};

export default App;
