import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push("ColorPalette");
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
