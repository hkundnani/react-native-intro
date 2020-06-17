import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import ColorBox from "./components/ColorBox";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Here are some boxes of different color</Text>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
    </View>
  );
};

export default App;
