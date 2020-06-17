import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  box: {
    padding: 10,
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 3,
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
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
      <View style={[styles.box, styles.cyan]}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text style={styles.text}>Blue #268bd2</Text>
      </View>
      <View style={[styles.box, styles.magenta]}>
        <Text style={styles.text}>Magenta #d33682</Text>
      </View>
      <View style={[styles.box, styles.orange]}>
        <Text style={styles.text}>Orange #cb4b16</Text>
      </View>
    </View>
  );
};

export default App;
